"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PolicyHeroProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  effectiveDate?: string;
}

export default function PolicyHero({
  title,
  description,
  icon: Icon,
  effectiveDate
}: PolicyHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 md:py-32 bg-gradient-to-br from-[#62b514]/10 via-white to-[#DAA520]/10"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        {Icon && (
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center mb-4"
          >
            <Icon className="w-12 h-12 text-[#62b514]" />
          </motion.div>
        )}
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
        {effectiveDate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 inline-block bg-[#62b514]/10 px-4 py-2 rounded-full"
          >
            <span className="text-sm font-medium text-[#62b514]">
              Effective Date: {effectiveDate}
            </span>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}