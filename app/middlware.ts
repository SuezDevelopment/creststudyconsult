import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';

// Security headers configuration
const securityHeaders = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-XSS-Protection': '1; mode=block',
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

// Rate limiting configuration
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 100; // Max requests per window

// Suspicious patterns to block
const suspiciousPatterns = [
  /<script[^>]*>.*?<\/script>/gi,
  /javascript:/gi,
  /on\w+\s*=/gi,
  /eval\s*\(/gi,
  /expression\s*\(/gi,
  /vbscript:/gi,
  /data:text\/html/gi,
  /<iframe[^>]*>/gi,
  /<object[^>]*>/gi,
  /<embed[^>]*>/gi,
  /\.\.\//g, // Path traversal
  /\x00/g, // Null bytes
];

// SQL injection patterns
const sqlInjectionPatterns = [
  /('|(\-\-)|(;)|(\||\|)|(\*|\*))/gi,
  /(union|select|insert|delete|update|drop|create|alter|exec|execute)/gi,
  /script|javascript|vbscript|onload|onerror|onclick/gi
];

// Blocked user agents (bots, scrapers)
const blockedUserAgents = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /scraper/i,
  /curl/i,
  /wget/i,
  /python-requests/i
];

// Allowed origins for CORS
const allowedOrigins = [
  'https://creststudyconsult.com',
  'https://www.creststudyconsult.com',
  'http://localhost:3000',
  'http://localhost:3001'
];

function sanitizeString(str: string): string {
  if (typeof str !== 'string') return '';
  
  // Remove suspicious patterns
  let sanitized = str;
  suspiciousPatterns.forEach(pattern => {
    sanitized = sanitized.replace(pattern, '');
  });
  
  // HTML encode special characters
  sanitized = sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
  
  return sanitized.trim();
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)]{7,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];
  
  // Remove old requests outside the window
  const validRequests = userRequests.filter(
    (timestamp: number) => now - timestamp < RATE_LIMIT_WINDOW
  );
  
  if (validRequests.length >= MAX_REQUESTS) {
    return true;
  }
  
  // Add current request
  validRequests.push(now);
  rateLimitMap.set(ip, validRequests);
  
  return false;
}

function detectSQLInjection(value: string): boolean {
  return sqlInjectionPatterns.some(pattern => pattern.test(value));
}

function isBlockedUserAgent(userAgent: string): boolean {
  return blockedUserAgents.some(pattern => pattern.test(userAgent));
}

function validateFormData(formData: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Validate email fields
  if (formData.email && !validateEmail(formData.email)) {
    errors.push('Invalid email format');
  }
  
  // Validate phone fields
  if (formData.phone && !validatePhone(formData.phone)) {
    errors.push('Invalid phone number format');
  }
  
  // Check for SQL injection in all string fields
  Object.values(formData).forEach((value: any) => {
    if (typeof value === 'string' && detectSQLInjection(value)) {
      errors.push('Suspicious content detected');
    }
  });
  
  // Validate required fields for contact forms
  if (formData.name && (formData.name.length < 2 || formData.name.length > 100)) {
    errors.push('Name must be between 2 and 100 characters');
  }
  
  if (formData.message && (formData.message.length < 10 || formData.message.length > 2000)) {
    errors.push('Message must be between 10 and 2000 characters');
  }
  
  return { isValid: errors.length === 0, errors };
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') || '';
  const origin = request.headers.get('origin');
  const ip = request.headers.get('x-forwarded-for') || 
           request.headers.get('x-real-ip') || 
           request.headers.get('cf-connecting-ip') || 
           'unknown';
  
  // Block suspicious user agents
  if (isBlockedUserAgent(userAgent)) {
    return new NextResponse('Access Denied', { status: 403 });
  }
  
  // Rate limiting
  if (isRateLimited(ip)) {
    return new NextResponse('Too Many Requests', { 
      status: 429,
      headers: {
        'Retry-After': '900' // 15 minutes
      }
    });
  }
  
  // CORS validation for API routes
  if (pathname.startsWith('/api/') && origin) {
    if (!allowedOrigins.includes(origin)) {
      return new NextResponse('CORS Error', { status: 403 });
    }
  }
  
  // Sanitize query parameters
  const url = request.nextUrl.clone();
  let hasModifiedParams = false;
  
  url.searchParams.forEach((value, key) => {
    const sanitized = sanitizeString(value);
    if (sanitized !== value) {
      url.searchParams.set(key, sanitized);
      hasModifiedParams = true;
    }
  });
  
  // Block requests with suspicious patterns in URL
  const fullUrl = pathname + search;
  if (suspiciousPatterns.some(pattern => pattern.test(fullUrl))) {
    return new NextResponse('Invalid Request', { status: 400 });
  }
  
  // Handle form submissions (POST requests)
  if (request.method === 'POST') {
    // For contact forms and other sensitive endpoints
    if (pathname.includes('/contact') || pathname.includes('/api/')) {
      const contentType = request.headers.get('content-type');
      
      // Validate content type
      if (contentType && !contentType.includes('application/json') && 
          !contentType.includes('application/x-www-form-urlencoded') &&
          !contentType.includes('multipart/form-data')) {
        return new NextResponse('Invalid Content Type', { status: 400 });
      }
      
      // Check for CSRF token in sensitive operations
      const csrfToken = request.headers.get('x-csrf-token');
      if (pathname.includes('/api/') && !csrfToken) {
        return new NextResponse('CSRF Token Required', { status: 403 });
      }
    }
  }
  
  // Create response
  const response = hasModifiedParams ? 
    NextResponse.redirect(url) : 
    NextResponse.next();
  
  // Add security headers
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });
  
  // Add CORS headers for API routes
  if (pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', origin || '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-CSRF-Token');
    response.headers.set('Access-Control-Max-Age', '86400');
  }
  
  // Add custom headers for monitoring
  response.headers.set('X-Request-ID', crypto.randomUUID());
  response.headers.set('X-Timestamp', new Date().toISOString());
  
  return response;
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};