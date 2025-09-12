'use client';

import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Users, Award } from 'lucide-react';

interface BlogHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  stats?: {
    articles: number;
    readers: number;
    categories: number;
    awards: number;
  };
}

const defaultStats = {
  articles: 150,
  readers: 5000,
  categories: 8,
  awards: 12
};

export default function BlogHero({
  title = "Educational Insights & Resources",
  subtitle = "Discover expert guidance for your academic journey",
  description = "Explore our comprehensive collection of articles, guides, and insights designed to help students excel in their educational pursuits and career development.",
  stats = defaultStats
}: BlogHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-indigo-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-blue-700/30 backdrop-blur-sm px-4 py-2 rounded-full text-blue-200 text-sm font-medium mb-6"
            >
              <BookOpen className="w-4 h-4" />
              <span>Knowledge Hub</span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
            >
              {title}
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-100 mb-4 font-light"
            >
              {subtitle}
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            <motion.div
              variants={statVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mx-auto mb-3">
                <BookOpen className="w-6 h-6 text-blue-200" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stats.articles}+
              </div>
              <div className="text-blue-200 text-sm font-medium">
                Articles
              </div>
            </motion.div>

            <motion.div
              variants={statVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mx-auto mb-3">
                <Users className="w-6 h-6 text-green-200" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stats.readers.toLocaleString()}+
              </div>
              <div className="text-blue-200 text-sm font-medium">
                Readers
              </div>
            </motion.div>

            <motion.div
              variants={statVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-purple-200" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stats.categories}
              </div>
              <div className="text-blue-200 text-sm font-medium">
                Categories
              </div>
            </motion.div>

            <motion.div
              variants={statVariants}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-500/20 rounded-lg mx-auto mb-3">
                <Award className="w-6 h-6 text-yellow-200" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stats.awards}
              </div>
              <div className="text-blue-200 text-sm font-medium">
                Awards
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          className="w-full h-16 text-gray-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </motion.section>
  );
}