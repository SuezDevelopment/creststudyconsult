'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { type BlogPost } from '@/lib/blog-data';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

export default function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  };

  if (featured) {
    return (
      <motion.article
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={post.featuredImage.width}
            height={post.featuredImage.height}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              FEATURED
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
              <Link 
                href={`/blog/${post.slug}`}
                className="hover:text-blue-200 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-200 text-sm line-clamp-2 mb-3">
              {post.excerpt}
            </p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString()}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime} min</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm font-medium">{post.author.name}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:gap-3 transition-all"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.featuredImage.url}
          alt={post.featuredImage.alt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          width={post.featuredImage.width}
          height={post.featuredImage.height}
        />
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString()}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readingTime} min</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{post.author.name}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium group-hover:gap-2 transition-all"
          >
            Read
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}