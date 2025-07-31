"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link as ScrollLink } from "react-scroll";
import {
  Check,
  Star,
  GraduationCap,
  Globe,
  ArrowRight,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  BookOpen,
  Award,
  Plane,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const mustardYellow = "#DAA520";

export default function CrestStudyConsultV3() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const destinationsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.2,
  });
  const destinationsInView = useRef(null);
  const destinationsInViewCheck = useInView(destinationsRef, {
    once: true,
    amount: 0.2,
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {},
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {},
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {},
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        // ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden flex flex-col items-center">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full flex items-center justify-around border-b bg-white/98 backdrop-blur supports-[backdrop-filter]:bg-white/60 w-full"
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/crest-logo.png"
              alt="Crest Study Consult"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#62b514]">CREST</span>
              <span className="text-xs font-medium text-[#313b3d]">
                STUDY CONSULT
              </span>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {["Services", "Success Stories", "Destinations", "Contact"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <ScrollLink
                    to={item.toLowerCase().replace(" ", "")}
                    smooth={true}
                    duration={500}
                    offset={-80} // adjust for fixed header height if needed
                    className="text-sm font-medium hover:text-[#62b514] transition-colors relative cursor-pointer group"
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </ScrollLink>
                </motion.div>
              )
            )}
          </nav>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4"
          >
            <Button variant="ghost" className="hidden md:inline-flex">
              Student Portal
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-[#62b514] hover:bg-[#62b514]/90 shadow-lg">
                Get Started
              </Button>
            </motion.div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="py-20 md:py-32 bg-gradient-to-br from-green-50 via-yellow-50 to-emerald-100 overflow-hidden relative w-full flex flex-col items-center justify-center"
      >
        {/* Background Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-[#DAA520]/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-[#62b514]/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div variants={itemVariants}>
                  <Badge
                    variant="secondary"
                    className="w-fit bg-[#DAA520]/10 text-[#DAA520] border-[#DAA520]/20 hover:bg-[#DAA520]/20"
                  >
                    🎓 Your Gateway to Global Education
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={itemVariants}
                  className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                >
                  Study Abroad
                  <motion.span
                    className="text-[#62b514] inline-block"
                    whileHover={{
                      scale: 1.1,
                      color: mustardYellow,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {" Dreams"}
                  </motion.span>
                  <br />
                  Made Reality
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl text-gray-600 max-w-[600px]"
                >
                  Transform your future with world-class education. We guide
                  ambitious students to top universities across the globe with
                  personalized consulting and comprehensive support.
                </motion.p>
              </div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 bg-[#62b514] hover:bg-[#62b514]/90 shadow-xl group relative overflow-hidden"
                  >
                    <motion.div className="absolute inset-0 bg-[#DAA520] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    Start Your Journey
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Plane className="ml-2 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-6 bg-transparent border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white"
                  >
                    Book Consultation
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-8 text-sm text-gray-600"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2"
                >
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Free initial consultation</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center space-x-2"
                >
                  <Check className="h-4 w-4 text-green-500" />
                  <span>98% visa success rate</span>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={
                heroInView
                  ? { x: 0, opacity: 1, scale: 1 }
                  : { x: 100, opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div style={{ y: yPos, opacity }} className="relative">
                <Image
                  src="/placeholder.svg?height=200&width=800"
                  alt="Students studying abroad"
                  width={800}
                  height={600}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>

              {/* Floating Animation Elements */}
              <motion.div
                // animate={{}}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                animate="animate"
                className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg border-2 border-[#DAA520]/20"
              >
                <GraduationCap className="h-6 w-6 text-[#62b514]" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "2s" }}
                className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg border-2 border-[#DAA520]/20"
              >
                <Globe className="h-6 w-6 text-[#DAA520]" />
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: "1s" }}
                className="absolute top-1/2 -left-8 bg-[#DAA520] p-2 rounded-full shadow-lg"
              >
                <Plane className="h-4 w-4 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Institutions Working With Us Section */}
      <section className="py-20 md:py-32 flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-green-50 w-full">
        {/* Background World Map */}
        <div
          className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: "url('/world-map-dots.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        />

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-[#DAA520]/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-[#62b514]/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container px-4 md:px-6 relative z-10 ">
          {/* Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <Badge
              variant="outline"
              className="w-fit mx-auto border-[#DAA520] text-[#DAA520] bg-[#DAA520]/5"
            >
              Global Network
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Institutions Working
              <span className="text-[#62b514]"> With Us</span>
            </h2>

            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              We have partnered with prestigious universities and institutions
              worldwide to provide our students with the best educational
              opportunities
            </p>

            {/* Statistics */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#DAA520]/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-[#62b514] mb-2"
                >
                  10,000+
                </motion.div>
                <p className="text-gray-600 font-medium">
                  Students Placed Globally
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#DAA520]/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-[#DAA520] mb-2"
                >
                  500+
                </motion.div>
                <p className="text-gray-600 font-medium">
                  Partner Universities
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-[#DAA520]/20"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-[#313b3d] mb-2"
                >
                  50+
                </motion.div>
                <p className="text-gray-600 font-medium">Countries Worldwide</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* University Logos Carousel */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: [0, -100 * 8] }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="flex space-x-12 items-center"
                style={{ width: "calc(200% + 100px)" }}
              >
                {/* First set of logos */}
                {[
                  {
                    name: "Harvard University",
                    logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Harvard",
                  },
                  {
                    name: "MIT",
                    logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=MIT",
                  },
                  {
                    name: "Stanford",
                    logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Stanford",
                  },
                  {
                    name: "University of Toronto",
                    logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Toronto",
                  },
                  {
                    name: "Oxford",
                    logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Oxford",
                  },
                  {
                    name: "Cambridge",
                    logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Cambridge",
                  },
                  {
                    name: "University of Melbourne",
                    logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Melbourne",
                  },
                  {
                    name: "UCLA",
                    logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=UCLA",
                  },
                ]
                  .concat([
                    // Duplicate for seamless loop
                    {
                      name: "Harvard University",
                      logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Harvard",
                    },
                    {
                      name: "MIT",
                      logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=MIT",
                    },
                    {
                      name: "Stanford",
                      logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Stanford",
                    },
                    {
                      name: "University of Toronto",
                      logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Toronto",
                    },
                    {
                      name: "Oxford",
                      logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Oxford",
                    },
                    {
                      name: "Cambridge",
                      logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png?height=80&width=120&text=Cambridge",
                    },
                    {
                      name: "University of Melbourne",
                      logo: "https://static.wixstatic.com/media/607463_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/607463_696d1e59e0784852950c003acb11dd9f~mv2.png",
                    },
                    {
                      name: "UCLA",
                      logo: "https://static.wixstatic.com/media/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png/v1/fill/w_108,h_108,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a585e3_696d1e59e0784852950c003acb11dd9f~mv2.png",
                    },
                  ])
                  .map((university, index) => (
                    <motion.div
                      key={`${university.name}-${index}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex-shrink-0 backdrop-blur-sm  transition-all duration-300 group"
                    >
                      <Image
                        src={university.logo || "/placeholder.svg"}
                        alt={university.name}
                        width={120}
                        height={80}
                        className="group-hover:grayscale-0 transition-all duration-300 object-contain"
                      />
                    </motion.div>
                  ))}
              </motion.div>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-yellow-50 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-green-50 to-transparent pointer-events-none z-10" />
          </motion.div>

          {/* Call to Action
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-[#62b514] hover:bg-[#DAA520] text-white px-8 py-6 text-lg shadow-xl transition-all duration-300"
              >
                Explore Our Partner Universities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div> */}
        </div>
      </section>

      {/* Services Section - Creative Journey Design */}
      <section
        ref={servicesRef}
        id="services"
        className="py-20 md:py-32 flex flex-col items-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50"
      >
        {/* Decorative Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 text-[#DAA520]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full opacity-20"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-40 right-32 w-12 h-12 text-[#62b514] opacity-30"
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-full h-full"
          >
            <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-16 w-8 h-8 text-[#DAA520] opacity-40"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full"
          >
            <circle cx="12" cy="12" r="10" />
          </svg>
        </motion.div>

        <div className="container px-4 md:px-6 relative z-10">
          {/* Creative Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={
              servicesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
            }
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-20"
          >
            <div className="flex flex-wrap justify-center items-center gap-2 text-3xl md:text-4xl lg:text-5xl font-bold">
              <span>Your Journey to</span>
              <motion.span
                className="bg-[#313b3d] text-white px-4 py-2 rounded-lg inline-block"
                whileHover={{ scale: 1.05, backgroundColor: "#DAA520" }}
                transition={{ duration: 0.3 }}
              >
                Success
              </motion.span>
              <span>Starts Here</span>
            </div>

            <p className="text-xl text-gray-600 max-w-[900px] mx-auto leading-relaxed">
              Get access to over 500+ partner universities worldwide. Enjoy free
              visa admission support, personalized one-on-one consultation, and
              a 98% visa success rate - all at no extra cost.
            </p>
          </motion.div>

          {/* Journey Path */}
          <div className="relative max-w-7xl mx-auto">
            {/* Connecting Path */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
              viewBox="0 0 1200 600"
              fill="none"
            >
              <motion.path
                d="M200 150 Q400 100 600 200 Q800 300 1000 150"
                stroke="#DAA520"
                strokeWidth="3"
                strokeDasharray="10,5"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  servicesInView
                    ? { pathLength: 1, opacity: 0.6 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 2, delay: 0.5 }}
              />
            </svg>

            {/* Service Steps */}
            <div className="grid lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
              {[
                {
                  step: "01",
                  title: "Get Free Guidance & Choose a Course",
                  description:
                    "Expert counselors help you discover the perfect program that aligns with your career goals and budget.",
                  image:
                    "/placeholder.svg?height=200&width=200&text=Consultation",
                  color: "from-blue-400 to-blue-600",
                  delay: 0.2,
                },
                {
                  step: "02",
                  title: "Apply & Get Admitted",
                  description:
                    "Complete application assistance with essays, documentation, and interview preparation for maximum success.",
                  image:
                    "/placeholder.svg?height=200&width=200&text=Application",
                  color: "from-green-400 to-green-600",
                  delay: 0.4,
                },
                {
                  step: "03",
                  title: "Visa & Travel Preparation",
                  description:
                    "Comprehensive visa guidance and travel checklist to ensure smooth approval and departure planning.",
                  image: "/placeholder.svg?height=200&width=200&text=Visa",
                  color: "from-yellow-400 to-orange-500",
                  delay: 0.6,
                },
                {
                  step: "04",
                  title: "Pre-Departure & Arrival Support",
                  description:
                    "Complete orientation including accommodation, cultural preparation, and ongoing support in your new country.",
                  image: "/placeholder.svg?height=200&width=200&text=Arrival",
                  color: "from-purple-400 to-pink-500",
                  delay: 0.8,
                  featured: true,
                },
              ].map((service, index) => (
                <motion.div
                  key={service.step}
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  animate={
                    servicesInView
                      ? { y: 0, opacity: 1, scale: 1 }
                      : { y: 50, opacity: 0, scale: 0.9 }
                  }
                  transition={{ duration: 0.6, delay: service.delay }}
                  className={`relative group ${
                    service.featured ? "lg:transform lg:scale-110" : ""
                  }`}
                >
                  {/* Step Number */}
                  <motion.div
                    className="absolute -top-4 -left-4 z-20 w-12 h-12 bg-[#DAA520] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {service.step}
                  </motion.div>

                  {/* Main Card */}
                  <motion.div
                    className="relative bg-white rounded-3xl p-6 shadow-xl border border-gray-100 overflow-hidden group-hover:shadow-2xl transition-all duration-500"
                    whileHover={{ y: -10 }}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Image Container */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-full h-48 rounded-2xl overflow-hidden bg-gray-100 relative">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Overlay Icon */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            whileHover={{ scale: 1 }}
                            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
                          >
                            <ArrowRight className="w-8 h-8 text-[#62b514]" />
                          </motion.div>
                        </div>
                      </div>

                      {/* Floating Elements */}
                      {index === 0 && (
                        <motion.div
                          className="absolute -top-2 -right-2 w-8 h-8 bg-[#DAA520] rounded-full flex items-center justify-center"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 4,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                        >
                          <BookOpen className="w-4 h-4 text-white" />
                        </motion.div>
                      )}

                      {index === 1 && (
                        <motion.div
                          className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#62b514] rounded-full flex items-center justify-center"
                          animate={{ y: [-2, 2, -2] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Award className="w-4 h-4 text-white" />
                        </motion.div>
                      )}

                      {index === 2 && (
                        <motion.div
                          className="absolute top-1/2 -right-3 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Plane className="w-4 h-4 text-white" />
                        </motion.div>
                      )}

                      {index === 3 && (
                        <motion.div
                          className="absolute -top-3 left-1/2 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <GraduationCap className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.h3
                        className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#62b514] transition-colors duration-300"
                        style={{
                          transform: "rotate(-1deg)",
                          // color: "#DAA520",
                        }}
                      >
                        {service.title}
                      </motion.h3>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Action Button */}
                      <motion.button
                        className="mt-4 text-[#62b514] font-semibold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#DAA520]/10 to-transparent rounded-bl-full" />
                  </motion.div>

                  {/* Connection Line for Mobile */}
                  {index < 3 && (
                    <div className="lg:hidden flex justify-center mt-8 mb-4">
                      <motion.div
                        className="w-1 h-12 bg-gradient-to-b from-[#DAA520] to-[#62b514] rounded-full"
                        initial={{ scaleY: 0 }}
                        animate={servicesInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: service.delay + 0.3,
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={
                servicesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.6, delay: 1 }}
              className="text-center mt-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#62b514] to-[#DAA520] hover:from-[#DAA520] hover:to-[#62b514] text-white px-12 py-6 text-lg rounded-full shadow-xl transition-all duration-300"
                >
                  Start Your Journey Today
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </motion.div>
                </Button>
              </motion.div>

              <p className="text-gray-500 text-sm mt-4">
                ✨ Free consultation • No hidden fees • 98% success rate
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Chat Bubble */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <motion.div
            className="bg-[#62b514] text-white p-4 rounded-full shadow-xl cursor-pointer relative"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [-2, 2, -2] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              style={{ fill: "#ffffff", color: "#ffffff" }}
            >
              <path strokeWidth={3} d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"></path>
            </svg>

            {/* Speech bubble */}
            <motion.div
              className="absolute bottom-full right-0 mb-2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3 }}
            >
              Let's Chat!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Success Stories Section - Creative Design */}
      <section
        ref={testimonialsRef}
        id="testimonials"
        className="py-20 md:py-32 flex flex-col items-center bg-gradient-to-br from-[#313b3d]/5 via-[#DAA520]/5 to-[#62b514]/5 relative overflow-hidden w-full"
      >
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-[#DAA520]/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-[#62b514]/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container px-4 md:px-6 relative z-10 w-full">
          {/* Creative Header */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={
              testimonialsInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
            }
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <div className="flex flex-wrap justify-center items-center gap-2 text-3xl md:text-4xl lg:text-5xl font-bold">
              <span>Real</span>
              <motion.span
                className="bg-[#62b514] text-white px-4 py-2 rounded-lg inline-block"
                whileHover={{ scale: 1.05, backgroundColor: "#DAA520" }}
                transition={{ duration: 0.3 }}
              >
                Success
              </motion.span>
              <span>Stories</span>
            </div>

            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Meet our amazing students who are now living their dreams at top
              universities worldwide
            </p>
          </motion.div>

          {/* Success Stories Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                name: "Priya Sharma",
                university: "Harvard University, USA",
                program: "Master's in Computer Science",
                testimonial:
                  "Crest Study Consult made my dream of studying at Harvard a reality. Their guidance through every step was invaluable.",
                image: "/placeholder.svg?height=300&width=300&text=Priya",
                flag: "🇺🇸",
                achievement: "Full Scholarship",
                color: "from-red-400 to-red-600",
              },
              {
                name: "Rahul Patel",
                university: "University of Toronto, Canada",
                program: "MBA in Finance",
                testimonial:
                  "The visa process seemed impossible until Crest helped me. Now I'm pursuing my Master's in Canada!",
                image: "/placeholder.svg?height=300&width=300&text=Rahul",
                flag: "🇨🇦",
                achievement: "Work Permit Approved",
                color: "from-blue-400 to-blue-600",
              },
              {
                name: "Ananya Singh",
                university: "University of Melbourne, Australia",
                program: "PhD in Biotechnology",
                testimonial:
                  "Professional, knowledgeable, and supportive. Crest turned my study abroad dream into reality.",
                image: "/placeholder.svg?height=300&width=300&text=Ananya",
                flag: "🇦🇺",
                achievement: "Research Grant",
                color: "from-green-400 to-green-600",
              },
            ].map((story, index) => (
              <motion.div
                key={story.name}
                variants={cardVariants}
                whileHover="hover"
                className="group relative"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500 relative">
                  {/* Achievement Badge */}
                  <motion.div
                    className={`absolute top-4 right-4 z-20 bg-gradient-to-r ${story.color} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                  >
                    {story.achievement}
                  </motion.div>

                  {/* Flag */}
                  <motion.div
                    className="absolute top-4 left-4 z-20 text-2xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {story.flag}
                  </motion.div>

                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* University Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium opacity-90">
                        {story.university}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <pattern
                          id={`pattern-${index}`}
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="10" cy="10" r="2" fill="currentColor" />
                        </pattern>
                        <rect
                          width="100"
                          height="100"
                          fill={`url(#pattern-${index})`}
                        />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#62b514] transition-colors">
                          {story.name}
                        </h3>

                        {/* Star Rating */}
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                delay: index * 0.1 + i * 0.05 + 0.8,
                              }}
                            >
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <p className="text-[#DAA520] font-semibold text-sm mb-3">
                        {story.program}
                      </p>

                      <blockquote className="text-gray-600 text-sm leading-relaxed italic relative">
                        <span className="text-4xl text-[#DAA520] absolute -top-2 -left-2 opacity-30">
                          "
                        </span>
                        {story.testimonial}
                        <span className="text-4xl text-[#DAA520] absolute -bottom-4 -right-2 opacity-30">
                          "
                        </span>
                      </blockquote>

                      {/* Social Proof */}
                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Check className="w-3 h-3 text-green-500" />
                          <span>Verified Student</span>
                        </div>

                        <motion.button
                          className="text-[#62b514] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          Read Full Story →
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={
              testimonialsInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }
            }
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">
              Ready to write your own success story?
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#62b514] to-[#DAA520] hover:from-[#DAA520] hover:to-[#62b514] text-white px-10 py-6 text-lg rounded-full shadow-xl"
              >
                Share Your Dreams With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Destinations Section */}
      <section
        ref={destinationsRef}
        id="destinations"
        className="py-20 md:py-32 flex flex-col items-center w-full justify-center relative overflow-hidden bg-gradient-to-br from-white via-[#DAA520]/5 to-[#62b514]/5"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={
              destinationsInViewCheck
                ? { y: 0, opacity: 1 }
                : { y: 50, opacity: 0 }
            }
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <Badge
              variant="outline"
              className="w-fit mx-auto border-[#DAA520] text-[#DAA520]"
            >
              Study Destinations
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Popular Study Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
              Choose from our most popular study destinations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={destinationsInViewCheck ? "visible" : "hidden"}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 sm:grid-cols-3 max-w-5xl mx-auto"
          >
            {[
              {
                flag: "🇺🇸",
                country: "USA",
                description: "World's top universities",
                features: [
                  "Harvard, MIT, Stanford",
                  "STEM OPT opportunities",
                  "Research opportunities",
                ],
                popular: false,
              },
              {
                flag: "🇬🇧",
                country: "UK",
                description: "Historic universities and vibrant culture",
                features: [
                  "Oxford, Cambridge, Imperial College",
                  "Post-study work visa",
                  "Diverse student community",
                ],
                popular: true,
              },
              {
                flag: "🇨🇦",
                country: "Canada",
                description: "Immigration-friendly policies",
                features: [
                  "University of Toronto, UBC",
                  "Post-graduation work permit",
                  "Pathway to PR",
                ],
                popular: true,
              },
              {
                flag: "🇮🇪",
                country: "Ireland",
                description: "Friendly environment and strong tech industry",
                features: [
                  "Trinity College Dublin, UCD",
                  "Work opportunities after graduation",
                  "English-speaking country",
                ],
                popular: false,
              },
              {
                flag: "🇦🇺",
                country: "Australia",
                description: "High quality of life",
                features: [
                  "Group of Eight universities",
                  "Work while studying",
                  "Multicultural environment",
                ],
                popular: false,
              },
            ].map((destination, index) => (
              <motion.div
                key={destination.country}
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <Card
                  className={`border-2 ${
                    destination.popular ? "border-[#62b514]" : "border-gray-200"
                  } hover:border-[#DAA520] transition-colors relative overflow-hidden group items-center`}
                >
                  {destination.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
                    >
                      <Badge className="absolute -top-1 left-1/2 transform -translate-x-1/2 bg-[#62b514] hover:bg-[#DAA520] transition-colors">
                        Most Popular
                      </Badge>
                    </motion.div>
                  )}

                  <motion.div className="absolute inset-0 bg-gradient-to-br from-[#DAA520]/5 to-[#62b514]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="text-center relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl mb-2"
                    >
                      {destination.flag}
                    </motion.div>
                    <CardTitle className="text-2xl group-hover:text-[#62b514] transition-colors">
                      {destination.country}
                    </CardTitle>
                    <CardDescription>{destination.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10">
                    <div className="space-y-2">
                      {destination.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ x: -20, opacity: 0 }}
                          animate={
                            destinationsInViewCheck
                              ? { x: 0, opacity: 1 }
                              : { x: -20, opacity: 0 }
                          }
                          transition={{
                            delay: index * 0.2 + featureIndex * 0.1 + 0.8,
                          }}
                          className="flex items-center space-x-2"
                        >
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                  {/* <CardFooter className="relative z-10">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full">
                      <Button
                        className={`w-full ${destination.popular ? "bg-[#62b514] hover:bg-[#DAA520] text-white" : "bg-transparent border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white"}`}
                        variant={destination.popular ? "default" : "outline"}
                      >
                        Learn More
                      </Button>
                    </motion.div>
                  </CardFooter> */}
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 md:py-32 w-full flex flex-col items-center bg-gradient-to-r from-[#62b514] via-[#DAA520] to-[#62b514] text-white relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-black/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(218,165,32,0.2) 50%, rgba(0,0,0,0.1) 100%)",
              "linear-gradient(45deg, rgba(218,165,32,0.2) 0%, rgba(0,0,0,0.1) 50%, rgba(218,165,32,0.2) 100%)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Ready to Start Your Study Abroad Journey?
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-green-100"
            >
              Join thousands of students who have achieved their international
              education dreams with Crest Study Consult. Book your free
              consultation today and take the first step towards your global
              future.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 bg-white text-[#62b514] hover:bg-gray-100 shadow-xl"
                >
                  Book Free Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>

              {/* <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-[#62b514] bg-transparent shadow-xl"
                >
                  Download Brochure
                </Button>
              </motion.div> */}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-sm text-green-200"
            >
              Free consultation • No hidden fees • Expert guidance
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="contact"
        className="bg-[#313b3d] text-white py-16 w-full flex flex-col items-center"
      >
        <div className="container px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <Image
                  src="/crest-logo.png"
                  alt="Crest Study Consult"
                  width={62}
                  height={62}
                  className="rounded-lg"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-[#62b514]">
                    CREST
                  </span>
                  <span className="text-xs font-medium text-gray-300">
                    STUDY CONSULT
                  </span>
                </div>
              </motion.div>
              <p className="text-gray-400">
                Your trusted partner for international education. Guiding
                students to achieve their study abroad dreams.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#DAA520] transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {[
              {
                title: "Services",
                links: [
                  "University Selection",
                  "Application Support",
                  "Visa Assistance",
                  "Test Preparation",
                ],
              },
              {
                title: "Destinations",
                links: ["USA", "Canada", "Australia", "UK"],
              },
              {
                title: "Support",
                links: ["Contact Us", "Student Portal", "Resources", "FAQ"],
              },
            ].map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-[#DAA520]">
                  {section.title}
                </h4>
                <div className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <motion.div
                      key={link}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: sectionIndex * 0.1 + linkIndex * 0.05,
                      }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href="#"
                        className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                      >
                        {link}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Crest Study Consult. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link, index) => (
                  <motion.div
                    key={link}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-[#DAA520] text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
