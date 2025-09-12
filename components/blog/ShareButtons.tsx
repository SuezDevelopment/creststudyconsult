'use client';

import { motion } from 'framer-motion';
import { Share2, Twitter, Facebook, Linkedin, Link2, Mail } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

export default function ShareButtons({ url, title, description = '', className = '' }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description)
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.title}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${shareData.url}`,
    email: `mailto:?subject=${shareData.title}&body=${shareData.description}%0A%0A${shareData.url}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      href: shareLinks.twitter,
      color: 'hover:bg-blue-500 hover:text-white',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: shareLinks.facebook,
      color: 'hover:bg-blue-600 hover:text-white',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: shareLinks.linkedin,
      color: 'hover:bg-blue-700 hover:text-white',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Email',
      icon: Mail,
      href: shareLinks.email,
      color: 'hover:bg-gray-600 hover:text-white',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-center gap-2 text-gray-700">
        <Share2 className="w-5 h-5" />
        <span className="font-medium">Share this article</span>
      </div>
      
      <div className="flex flex-wrap gap-3">
        {shareButtons.map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.a
              key={button.name}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 ${button.bgColor} ${button.color} transition-all duration-200 text-sm font-medium`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{button.name}</span>
            </motion.a>
          );
        })}
        
        <motion.button
          onClick={copyToClipboard}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: shareButtons.length * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 transition-all duration-200 text-sm font-medium ${
            copied 
              ? 'bg-green-50 text-green-700 border-green-200' 
              : 'bg-gray-50 hover:bg-gray-600 hover:text-white'
          }`}
        >
          <Link2 className="w-4 h-4" />
          <span className="hidden sm:inline">
            {copied ? 'Copied!' : 'Copy Link'}
          </span>
        </motion.button>
      </div>
    </div>
  );
}