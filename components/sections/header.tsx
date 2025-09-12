"use client";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { useMobileContext } from "@/components/mobile-provider";

import Image from "next/image";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const { openModal, isFullscreen } = useBookingModal();
  const { isMobile } = useMobileContext();  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    // { title: "Success Stories", href: "/success-stories" },
    {
      title: "Study destinations",
      href: "/study-destinations",
      dropdown: [
        { title: "USA", href: "/study-destinations/usa" },
        { title: "Canada", href: "/study-destinations/canada" },
        { title: "UK", href: "/study-destinations/uk" },
        { title: "Australia", href: "/study-destinations/australia" },
        { title: "Germany", href: "/study-destinations/germany" },
        { title: "Ireland", href: "/study-destinations/ireland" },
        { title: "New Zealand", href: "/study-destinations/new-zealand" },
      ],
    },
    { title: "Contact", href: "/contact" },
  ];

  const displayedNavLinks = navLinks.filter(
    (link) => !(pathname === "/" && link.href === "/")
  );

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.95, originY: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      originY: 0.5,
      transition: { duration: 0.2, ease: "easeOut" as const },
    },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full flex items-center justify-around border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3"
        >
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/crest-logo.png"
              alt="Crest Study Consult"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#62b514]">CREST</span>
              <span className="text-xs md:text-sm font-semibold text-[#313b3d]">
                STUDY CONSULT
              </span>
            </div>
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-8">
          {displayedNavLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              className="relative" // Add relative positioning for dropdown
              onMouseEnter={() => link.dropdown && setIsDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setIsDropdownOpen(false)}
            >
              <Link
                href={link.href}
                className={`text-sm font-medium hover:text-[#62b514] transition-colors relative group ${
                  pathname === link.href ? "text-[#62b514]" : ""
                }`}
              >
                {link.title}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
              {/* Dropdown Menu */}
              {link.dropdown && (
                <motion.div
                  initial="hidden"
                  animate={isDropdownOpen ? "visible" : "hidden"}
                  variants={dropdownVariants}
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden"
                >
                  {link.dropdown.map((subLink) => (
                    <Link
                      key={subLink.title}
                      href={subLink.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#62b514] transition-colors"
                      onClick={() => setIsDropdownOpen(false)} // Close dropdown on click
                    >
                      {subLink.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </nav>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="bg-[#62b514] hover:bg-[#62b514]/90 shadow-lg"
              onClick={() => openModal(true)}
            >
              {isMobile ? "Study abroad" : "Help me study abroad"}
            </Button>
          </motion.div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.div>
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="relative flex flex-col items-center justify-center h-full px-6 pt-20"
            >
              <nav className="flex flex-col items-center space-y-8 w-full max-w-sm">
                {displayedNavLinks.map((link, index) => (
                  <motion.div
                    key={link.title}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    className="w-full"
                  >
                    {link.dropdown ? (
                      <div className="w-full">
                        <div className="text-center mb-4">
                          <span className="text-2xl font-semibold text-gray-800 border-b-2 border-[#62b514] pb-2">
                            {link.title}
                          </span>
                        </div>
                        <div className="flex flex-col space-y-3">
                          {link.dropdown.map((subLink, subIndex) => (
                            <motion.div
                              key={subLink.title}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: (index * 0.1) + (subIndex * 0.05) + 0.3, duration: 0.3 }}
                            >
                              <Link
                                href={subLink.href}
                                className="block text-center py-3 px-6 text-lg font-medium text-gray-700 hover:text-[#62b514] hover:bg-white/50 rounded-lg transition-all duration-300 transform hover:scale-105"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subLink.title}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block text-center py-4 px-8 text-2xl font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                          pathname === link.href 
                            ? "text-[#62b514] bg-white/70 shadow-md" 
                            : "text-gray-800 hover:text-[#62b514] hover:bg-white/50"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: displayedNavLinks.length * 0.1 + 0.3, duration: 0.4 }}
                  className="pt-8"
                >
                  <Button
                    className="bg-[#62b514] hover:bg-[#62b514]/90 shadow-lg text-lg py-6 px-8 rounded-xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      openModal(true);
                    }}
                  >
                    Help me study abroad
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
