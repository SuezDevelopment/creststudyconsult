'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Mail, Globe } from 'lucide-react';
import { type BlogPost } from '@/lib/blog-data';

interface AuthorCardProps {
  author: BlogPost['author'];
  className?: string;
  variant?: 'default' | 'compact' | 'detailed';
}

export default function AuthorCard({ 
  author, 
  className = '', 
  variant = 'default' 
}: AuthorCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  if (variant === 'compact') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className={`flex items-center gap-3 ${className}`}
      >
        <img
          src={author.avatar}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md"
        />
        <div className="flex-1">
          <h4 className="font-medium text-gray-900 text-sm">{author.name}</h4>
          <p className="text-gray-600 text-xs line-clamp-1">{author.bio}</p>
        </div>
      </motion.div>
    );
  }

  if (variant === 'detailed') {
    return (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        className={`bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-lg ${className}`}
      >
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <img
              src={author.avatar}
              alt={author.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">{author.name}</h3>
          <p className="text-blue-600 font-medium mb-3">{author.role || 'Content Writer'}</p>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed text-center">{author.bio}</p>
          
          {author.expertise && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {author.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex justify-center gap-4 pt-4">
            {author.social.twitter && (
              <a
                href={author.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {author.social.linkedin && (
              <a
                href={author.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {author.social.email && (
              <a
                href={`mailto:${author.social.email}`}
                className="flex items-center justify-center w-10 h-10 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
            {author.social.website && (
              <a
                href={author.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 ${className}`}
    >
      <div className="flex items-start gap-4">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{author.name}</h3>
          {author.role && (
            <p className="text-blue-600 font-medium text-sm mb-2">{author.role}</p>
          )}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{author.bio}</p>
          
          {author.expertise && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {author.expertise.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {author.expertise.length > 3 && (
                  <span className="text-gray-500 text-xs px-2 py-1">
                    +{author.expertise.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          <div className="flex gap-3">
            {author.social.twitter && (
              <a
                href={author.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {author.social.linkedin && (
              <a
                href={author.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {author.social.email && (
              <a
                href={`mailto:${author.social.email}`}
                className="text-gray-600 hover:text-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
            {author.social.website && (
              <a
                href={author.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}