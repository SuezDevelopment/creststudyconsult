import { Metadata } from 'next';
import { getBlogPostBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';

interface BlogPostLayoutProps {
  children: React.ReactNode;
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | Crest Study Consult',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | Crest Study Consult Blog`,
    description: post.excerpt,
    keywords: [
      ...post.tags,
      'study abroad',
      'international education',
      'student guidance',
      'university applications',
      'visa assistance',
      'Crest Study Consult',
      'education blog',
      'study tips'
    ],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: `https://creststudyconsult.com${post.featuredImage.url}`,
          width: post.featuredImage.width,
          height: post.featuredImage.height,
          alt: post.featuredImage.alt,
        },
      ],
      siteName: 'Crest Study Consult',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [`https://creststudyconsult.com${post.featuredImage.url}`],
      creator: `@${post.author.social?.twitter || 'creststudyconsult'}`,
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:published_time': post.publishedAt,
      'article:modified_time': post.updatedAt || post.publishedAt,
      'article:author': post.author.name,
      'article:section': post.category,
      'article:tag': post.tags.join(', '),
    },
  };
}

export default function BlogPostLayout({ children, params }: BlogPostLayoutProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  // Generate JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: {
      '@type': 'ImageObject',
      url: `https://creststudyconsult.com${post.featuredImage.url}`,
      width: post.featuredImage.width,
      height: post.featuredImage.height,
      alt: post.featuredImage.alt,
    },
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.bio ? `https://creststudyconsult.com/about#${post.author.name.toLowerCase().replace(/\s+/g, '-')}` : undefined,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Crest Study Consult',
      logo: {
        '@type': 'ImageObject',
        url: 'https://creststudyconsult.com/logo.png',
        width: 200,
        height: 60,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://creststudyconsult.com/blog/${params.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.readingTime ? Math.round(post.readingTime * 200) : undefined,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      '@id': 'https://creststudyconsult.com/blog',
      name: 'Crest Study Consult Blog',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      {children}
    </>
  );
}