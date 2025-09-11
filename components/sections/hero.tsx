import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Plane, Check, GraduationCap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useRef } from "react";
import { mustardYellow } from "@/lib/utils";
import { useBookingModal } from "@/hooks/use-booking-modal";

export function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const {openModal} = useBookingModal();

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
    <section
      ref={heroRef}
      className="py-20 md:py-32  bg-gradient-to-br from-green-50 via-yellow-50 to-emerald-100 overflow-hidden relative w-full flex flex-col items-center justify-center"
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
        className="absolute top-40 left-50 w-20 h-20 bg-[#DAA520]/20 rounded-full blur-xl"
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
        className="absolute top-60 left-30 w-20 h-20 bg-[#DAA520]/20 rounded-full blur-xl"
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

      {/* Animated Globe with Flying Plane - Background Element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          {/* Globe Container */}
          <motion.div
            className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]"
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {/* Globe Base */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#62b514]/20 via-[#DAA520]/15 to-[#62b514]/20 border-2 border-[#62b514]/10">
              {/* Globe Grid Lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
              >
                {/* Longitude lines */}
                {[...Array(8)].map((_, i) => (
                  <ellipse
                    key={`long-${i}`}
                    cx="100"
                    cy="100"
                    rx={50 - i * 6}
                    ry="90"
                    fill="none"
                    stroke="#62b514"
                    strokeWidth="0.5"
                    opacity="0.9"
                    transform={`rotate(${i * 22.5} 100 100)`}
                  />
                ))}

                {/* Latitude lines */}
                {[...Array(6)].map((_, i) => (
                  <ellipse
                    key={`lat-${i}`}
                    cx="100"
                    cy="100"
                    rx="90"
                    ry={10 + i * 15}
                    fill="none"
                    stroke="#DAA520"
                    strokeWidth="0.5"
                    opacity="0.9"
                  />
                ))}

                {/* Continents - Simplified shapes */}
                <g fill="#62b514" opacity="0.9">
                  {/* North America */}
                  <path d="M60 70 Q70 65 80 70 L85 80 Q80 85 70 80 L60 75 Z" />

                  {/* Europe */}
                  <path d="M95 75 Q105 70 110 75 L108 82 Q100 85 95 80 Z" />

                  {/* Asia */}
                  <path d="M115 70 Q130 65 140 75 L135 85 Q125 88 115 82 Z" />

                  {/* Africa */}
                  <path d="M100 85 Q110 80 115 90 L110 110 Q105 115 100 110 L95 95 Z" />

                  {/* South America */}
                  <path d="M75 95 Q85 90 90 100 L85 125 Q80 130 75 125 L70 105 Z" />

                  {/* Australia */}
                  <path d="M125 115 Q135 110 140 115 L138 125 Q130 128 125 125 Z" />
                </g>
              </svg>
            </div>

            {/* Orbital Path for Plane */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#DAA520]/20">
              {/* Flying Plane */}
              <motion.div
                className="absolute w-8 h-8 lg:w-10 lg:h-10"
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <motion.div
                  className="absolute -translate-x-1/2 -translate-y-1/2 text-[#DAA520]"
                  style={{
                    top: "-200px", // Distance from center
                    left: "0px",
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Plane className="w-full h-full drop-shadow-lg" />

                  {/* Plane Trail */}
                  <motion.div
                    className="absolute top-1/2 -right-8 w-6 h-0.5 bg-gradient-to-r from-[#DAA520]/60 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: [0, 1, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Additional Orbital Elements */}
            <motion.div
              className="absolute inset-4 rounded-full border border-dotted border-[#62b514]/15"
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              {/* Satellite dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-[#DAA520] rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "0 0",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15 + i * 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 2,
                  }}
                >
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{
                      top: `-${120 + i * 20}px`,
                      left: "0px",
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-[#DAA520] rounded-full shadow-lg"
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.5,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-radial from-[#62b514]/5 via-[#DAA520]/3 to-transparent"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Connection Lines to Floating Elements */}
          <motion.svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <motion.path
              d="M400 300 Q200 200 100 150"
              stroke="#DAA520"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 2 }}
            />
            <motion.path
              d="M400 300 Q600 400 700 450"
              stroke="#62b514"
              strokeWidth="1"
              fill="none"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 2.5 }}
            />
          </motion.svg>
        </motion.div>
      </div>

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
                  onClick={openModal}
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

          {/* Spacer for desktop layout */}
          <div className="hidden lg:block">
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
                  src="/hero_image.png"
                  alt="Students studying abroad"
                  width={800}
                  height={600}
                  className=""
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
      </div>

      {/* Mobile Floating Elements - Positioned differently for mobile */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="lg:hidden absolute top-20 right-32 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-[#DAA520]/20 z-30"
      >
        <GraduationCap className="h-5 w-5 text-[#62b514]" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="lg:hidden absolute bottom-8 left-12 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-[#DAA520]/20 z-30"
      >
        <Globe className="h-5 w-5 text-[#DAA520]" />
      </motion.div>

      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
        className="lg:hidden absolute top-1/2 right-8 bg-[#DAA520] p-2 rounded-full shadow-lg z-30"
      >
        <Plane className="h-4 w-4 text-white" />
      </motion.div>
    </section>
  );
}
