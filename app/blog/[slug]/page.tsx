'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft, ChevronRight, Tag } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts, getBlogPosts, type BlogPost } from '@/lib/blog-data';
import SEO from '@/components/SEO';
import AuthorCard from '@/components/blog/AuthorCard';
import ShareButtons from '@/components/blog/ShareButtons';
import RelatedPosts from '@/components/blog/RelatedPosts';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import BlogContent from '@/components/blog/BlogContent';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}









export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  // Generate comprehensive structured data
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": `https://creststudyconsult.com${post.featuredImage.url}`,
      "width": post.featuredImage.width,
      "height": post.featuredImage.height
    },
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "description": post.author.bio,
      "url": post.author.social.linkedin || post.author.social.twitter
    },
    "publisher": {
      "@type": "Organization",
      "name": "Crest Study Consult",
      "logo": {
        "@type": "ImageObject",
        "url": "https://creststudyconsult.com/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://creststudyconsult.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(', '),
    "wordCount": Math.ceil(post.content.length / 5),
    "timeRequired": `PT${post.readingTime}M`,
    "inLanguage": "en-US",
    "isAccessibleForFree": true
  };

  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://creststudyconsult.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://creststudyconsult.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://creststudyconsult.com/blog/${post.slug}`
      }
    ]
  };

  return (
    <>
      <SEO
        title={post.seo?.metaTitle || `${post.title} | Crest Study Consult`}
        description={post.seo?.metaDescription || post.excerpt}
        keywords={post.seo?.keywords?.join(', ') || post.tags.join(', ')}
        ogImage={`https://creststudyconsult.com${post.featuredImage.url}`}
        url={`https://creststudyconsult.com/blog/${post.slug}`}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Breadcrumbs */}
            <Breadcrumbs 
              items={[
                { label: 'Blog', href: '/blog' },
                { label: post.title }
              ]}
            />

            {/* Article Header */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <img
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt}
                    className="w-full h-full object-cover"
                    width={post.featuredImage.width}
                    height={post.featuredImage.height}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                      {post.category}
                    </span>
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">
                      {post.title}
                    </h1>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime} min read</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author.name}</span>
                      </div>
                    </div>
                    <ShareButtons 
                      url={`https://creststudyconsult.com/blog/${post.slug}`}
                      title={post.title}
                      description={post.excerpt}
                    />
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </motion.header>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <BlogContent post={post} className="prose prose-lg prose-blue max-w-none" />
            </motion.article>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Tag className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Author Card */}
            <AuthorCard author={post.author} variant="detailed" />

            {/* Related Posts */}
            <RelatedPosts 
              posts={getRelatedPosts(post.slug)}
              currentPostSlug={post.slug}
              className="mt-12"
            />
          </div>
        </div>
      </main>
    </>
  );
}