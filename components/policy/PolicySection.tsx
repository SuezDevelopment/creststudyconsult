"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PolicySectionProps {
  title: string;
  icon: ReactNode;
  content: string | string[];
  index: number;
  useHtml?: boolean;
}

export default function PolicySection({
  title,
  icon,
  content,
  index,
  useHtml = false
}: PolicySectionProps) {
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <div className="space-y-4 text-gray-600 leading-relaxed">
          {content.map((paragraph, pIndex) => (
            <p
              key={pIndex}
              {...(useHtml ? { dangerouslySetInnerHTML: { __html: paragraph } } : { children: paragraph })}
            />
          ))}
        </div>
      );
    }

    if (useHtml) {
      return (
        <div 
          className="text-gray-600 leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }

    return (
      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
        {content}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
      className="bg-white p-8 md:p-10 rounded-lg shadow-md border border-gray-200/80 hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-[#62b514]/10 rounded-lg mr-4">
          <div className="text-[#62b514]">
            {icon}
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          {title}
        </h2>
      </div>
      {renderContent()}
    </motion.div>
  );
}