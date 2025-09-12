'use client';

import { motion } from 'framer-motion';
import { type BlogPost } from '@/lib/blog-data';

interface BlogContentProps {
  post: BlogPost;
  className?: string;
}

export default function BlogContent({ post, className = '' }: BlogContentProps) {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Process content to handle different content types
  const processContent = (content: string) => {
    // Convert markdown-like syntax to HTML
    let processedContent = content
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-8">$1</h1>')
      
      // Bold and italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      
      // Links
      .replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" class="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer">$1</a>')
      
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre class="bg-gray-100 rounded-lg p-4 my-6 overflow-x-auto"><code class="text-sm text-gray-800">$1</code></pre>')
      
      // Inline code
      .replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">$1</code>')
      
      // Lists
      .replace(/^\* (.*$)/gim, '<li class="mb-2">$1</li>')
      .replace(/^\d+\. (.*$)/gim, '<li class="mb-2">$1</li>')
      
      // Blockquotes
      .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50 italic text-gray-700">$1</blockquote>')
      
      // Line breaks
      .replace(/\n\n/g, '</p><p class="mb-6 text-gray-700 leading-relaxed">')
      .replace(/\n/g, '<br />');

    // Wrap in paragraph tags if not already wrapped
    if (!processedContent.startsWith('<')) {
      processedContent = `<p class="mb-6 text-gray-700 leading-relaxed">${processedContent}</p>`;
    }

    // Wrap lists in ul/ol tags
    processedContent = processedContent
      .replace(/(<li class="mb-2">.*?<\/li>)/g, (match) => {
        const isNumbered = /^\d+\./.test(match);
        const listClass = isNumbered 
          ? 'list-decimal list-inside space-y-2 my-6 ml-4'
          : 'list-disc list-inside space-y-2 my-6 ml-4';
        const tag = isNumbered ? 'ol' : 'ul';
        return `<${tag} class="${listClass}">${match}</${tag}>`;
      });

    return processedContent;
  };

  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className={`prose prose-lg max-w-none ${className}`}
    >
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: processContent(post.content) }}
      />
      
      <style jsx>{`
        .blog-content {
          line-height: 1.8;
        }
        
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          scroll-margin-top: 2rem;
        }
        
        .blog-content img {
          border-radius: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          margin: 2rem auto;
          max-width: 100%;
          height: auto;
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          border-radius: 0.5rem;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .blog-content th,
        .blog-content td {
          padding: 0.75rem 1rem;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .blog-content th {
          background-color: #f9fafb;
          font-weight: 600;
          color: #374151;
        }
        
        .blog-content tr:hover {
          background-color: #f9fafb;
        }
        
        .blog-content pre {
          position: relative;
        }
        
        .blog-content pre::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4);
        }
        
        .blog-content blockquote {
          position: relative;
        }
        
        .blog-content blockquote::before {
          content: '"';
          position: absolute;
          left: -0.5rem;
          top: -0.5rem;
          font-size: 3rem;
          color: #3b82f6;
          opacity: 0.3;
          font-family: serif;
        }
      `}</style>
    </motion.div>
  );
}