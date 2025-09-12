"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Header from "@/components/sections/header";
import FooterSection from "@/components/sections/footer";

interface PolicyLayoutProps {
  children: ReactNode;
}

export default function PolicyLayout({ children }: PolicyLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        {children}
      </main>
      <FooterSection />
    </>
  );
}

// Content wrapper for policy sections
export function PolicyContent({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="py-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          {children}
        </div>
      </div>
    </motion.section>
  );
}