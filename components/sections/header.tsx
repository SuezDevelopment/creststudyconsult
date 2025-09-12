"use client";
import { Button } from "@/components/ui/button";
import { useBookingModal } from "@/hooks/use-booking-modal";
import { useMobileContext } from "@/components/mobile-provider";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { openModal, isFullscreen } = useBookingModal();
  const { isMobile } = useMobileContext();  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
