'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Search, Filter, BookOpen, TrendingUp } from 'lucide-react';
import { useState, useMemo } from 'react';
import { getBlogPosts, getFeaturedPosts, blogCategories, type BlogPost } from '@/lib/blog-data';
import SEO from '@/components/SEO';
import BlogHero from '@/components/blog/BlogHero';
import BlogCard from '@/components/blog/BlogCard';



function SearchAndFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedCategory, 
  setSelectedCategory 
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white min-w-[200px]"
          >
            <option value="">All Categories</option>
            {blogCategories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const allPosts = getBlogPosts();
  const featuredPosts = getFeaturedPosts();
  
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [allPosts, searchTerm, selectedCategory]);
  
  const regularPosts = filteredPosts.filter(post => !post.featured);
  const displayedFeaturedPosts = searchTerm || selectedCategory ? [] : featuredPosts;

  // Generate structured data for the blog listing
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Crest Study Consult Blog",
    "description": "Expert insights, guides, and tips for international students pursuing higher education abroad.",
    "url": "https://creststudyconsult.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Crest Study Consult",
      "logo": {
        "@type": "ImageObject",
        "url": "https://creststudyconsult.com/logo.png"
      }
    },
    "blogPost": filteredPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://creststudyconsult.com/blog/${post.slug}`,
      "datePublished": post.publishedAt,
      "dateModified": post.updatedAt || post.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.author.name,
        "description": post.author.bio
      },
      "image": {
        "@type": "ImageObject",
        "url": `https://creststudyconsult.com${post.featuredImage.url}`,
        "width": post.featuredImage.width,
        "height": post.featuredImage.height
      },
      "articleSection": post.category,
      "keywords": post.tags.join(', '),
      "wordCount": Math.ceil(post.content.length / 5),
      "timeRequired": `PT${post.readingTime}M`
    }))
  };

  return (
    <>
      <SEO
        title="Expert Study Abroad Blog | Crest Study Consult"
        description="Get expert insights, comprehensive guides, and practical tips for studying abroad. From university applications to visa processes, we've got you covered."
        keywords="study abroad blog, international education, university applications, student visa guide, scholarship opportunities, study tips, education consultant blog"
        ogImage="/blog-og-image.jpg"
        url="https://creststudyconsult.com/blog"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="min-h-screen bg-gray-50">
        <BlogHero 
          stats={{
            articles: allPosts.length,
            readers: 5000,
            categories: blogCategories.length,
            awards: 12
          }}
        />

        <div className="container mx-auto px-4 py-12">
          {/* Search and Filter */}
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          {/* Featured Posts */}
          {displayedFeaturedPosts.length > 0 && (
            <section className="mb-12">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold text-gray-900 mb-8"
              >
                Featured Articles
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedFeaturedPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BlogCard post={post} featured={true} />
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900">
                {searchTerm || selectedCategory ? 'Search Results' : 'Latest Articles'}
              </h2>
              <span className="text-gray-600">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </motion.div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(searchTerm || selectedCategory ? filteredPosts : regularPosts).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BlogCard post={post} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search terms or browse all categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('');
                  }}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}