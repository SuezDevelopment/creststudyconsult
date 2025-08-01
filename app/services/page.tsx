"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Plane,
  FileText,
  Shield,
  Target,
  Lightbulb,
  Phone,
  Calendar,
  CheckCircle,
  CreditCard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Footer from "@/components/sections/footer";
import CTA from "@/components/sections/cta";

const mustardYellow = "#DAA520";

export default function ServicesPage() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 });

  const yPos = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 1000);
      }
    }
  }, []);

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
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
      },
    },
  };

  const services = [
    {
      id: "counseling",
      title: "Educational Counseling & Course Selection",
      subtitle: "Find Your Perfect Academic Path",
      description:
        "Our expert counselors provide personalized guidance to help you discover the ideal program that aligns with your career goals, interests, and budget.",
      icon: Lightbulb,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      features: [
        "One-on-one counseling sessions",
        "Career assessment and profiling",
        "Course and university matching",
        "Academic pathway planning",
        "Budget and scholarship guidance",
        "Industry trend analysis",
      ],
      process: [
        {
          step: "Initial Assessment",
          desc: "Comprehensive evaluation of your academic background and career goals",
        },
        {
          step: "Options Analysis",
          desc: "Research and present suitable programs across multiple countries",
        },
        {
          step: "Decision Support",
          desc: "Help you make informed choices with detailed comparisons",
        },
        {
          step: "Action Plan",
          desc: "Create a personalized roadmap for your study abroad journey",
        },
      ],
      stats: [
        { number: "95%", label: "Student Satisfaction" },
        { number: "500+", label: "Programs Available" },
        { number: "50+", label: "Countries Covered" },
      ],
    },
    {
      id: "application",
      title: "University Application Support",
      subtitle: "Maximize Your Admission Chances",
      description:
        "Complete application assistance including essay writing, documentation, and interview preparation to ensure your application stands out from the competition.",
      icon: FileText,
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      features: [
        "Application form completion",
        "Personal statement writing",
        "Letter of recommendation guidance",
        "Portfolio development",
        "Interview preparation",
        "Application tracking and follow-up",
      ],
      process: [
        {
          step: "Document Review",
          desc: "Thorough assessment of your academic and professional documents",
        },
        {
          step: "Application Strategy",
          desc: "Develop a strategic approach for each university application",
        },
        {
          step: "Content Creation",
          desc: "Craft compelling essays and personal statements",
        },
        {
          step: "Submission & Follow-up",
          desc: "Ensure timely submission and track application progress",
        },
      ],
      stats: [
        { number: "92%", label: "Acceptance Rate" },
        { number: "10,000+", label: "Applications Processed" },
        { number: "48hrs", label: "Average Response Time" },
      ],
    },
    {
      id: "visa",
      title: "Visa Assistance & Documentation",
      subtitle: "Navigate Visa Requirements with Confidence",
      description:
        "Comprehensive visa guidance and documentation support to ensure smooth approval and hassle-free travel preparation.",
      icon: Shield,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      features: [
        "Visa application preparation",
        "Document verification and organization",
        "Interview coaching and mock sessions",
        "Financial documentation guidance",
        "Travel insurance assistance",
        "Pre-departure briefing",
      ],
      process: [
        {
          step: "Requirements Analysis",
          desc: "Detailed review of visa requirements for your destination",
        },
        {
          step: "Document Preparation",
          desc: "Organize and verify all required documentation",
        },
        {
          step: "Application Submission",
          desc: "Submit visa application with complete documentation",
        },
        {
          step: "Interview Support",
          desc: "Comprehensive preparation for visa interview",
        },
      ],
      stats: [
        { number: "96%", label: "Visa Success Rate" },
        { number: "5,000+", label: "Visas Processed" },
        { number: "15", label: "Countries Supported" },
      ],
    },
    {
      id: "test-prep",
      title: "Test Preparation & Language Training",
      subtitle: "Achieve Your Target Scores",
      description:
        "Comprehensive test preparation for IELTS, TOEFL, GRE, GMAT, SAT, and other standardized tests required for international admissions.",
      icon: Target,
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      features: [
        "IELTS & TOEFL preparation",
        "GRE & GMAT coaching",
        "SAT & ACT training",
        "Mock tests and practice sessions",
        "Personalized study plans",
        "Score improvement guarantee",
      ],
      process: [
        {
          step: "Diagnostic Test",
          desc: "Assess current proficiency and identify areas for improvement",
        },
        {
          step: "Customized Plan",
          desc: "Create personalized study schedule based on target scores",
        },
        {
          step: "Intensive Training",
          desc: "Focused preparation with expert instructors",
        },
        {
          step: "Mock Exams",
          desc: "Regular practice tests to track progress and build confidence",
        },
      ],
      stats: [
        { number: "85%", label: "Score Improvement" },
        { number: "3,000+", label: "Students Trained" },
        { number: "7.5+", label: "Average IELTS Score" },
      ],
    },
    {
      id: "financial",
      title: "Financial Planning & Scholarship Guidance",
      subtitle: "Make Your Dreams Affordable",
      description:
        "Expert guidance on education financing, scholarship opportunities, and financial planning to make your international education affordable.",
      icon: CreditCard,
      color: "from-teal-500 to-teal-700",
      bgColor: "bg-teal-50",
      features: [
        "Scholarship research and applications",
        "Education loan guidance",
        "Financial aid consultation",
        "Budget planning assistance",
        "Cost estimation and comparison",
        "Funding strategy development",
      ],
      process: [
        {
          step: "Financial Assessment",
          desc: "Evaluate your financial situation and funding needs",
        },
        {
          step: "Opportunity Research",
          desc: "Identify relevant scholarships and financial aid options",
        },
        {
          step: "Application Support",
          desc: "Assist with scholarship and loan applications",
        },
        {
          step: "Planning & Strategy",
          desc: "Develop comprehensive financial plan for your studies",
        },
      ],
      stats: [
        { number: "$2M+", label: "Scholarships Secured" },
        { number: "70%", label: "Students Receive Aid" },
        { number: "200+", label: "Funding Sources" },
      ],
    },
    {
      id: "pre-departure",
      title: "Pre-Departure & Arrival Support",
      subtitle: "Smooth Transition to Your New Life",
      description:
        "Comprehensive orientation and support services to ensure you're fully prepared for life in your new country, from accommodation to cultural adaptation.",
      icon: Plane,
      color: "from-rose-500 to-rose-700",
      bgColor: "bg-rose-50",
      features: [
        "Pre-departure orientation sessions",
        "Accommodation assistance",
        "Airport pickup arrangements",
        "Cultural adaptation guidance",
        "Banking and mobile setup",
        "Ongoing support network",
      ],
      process: [
        {
          step: "Orientation Program",
          desc: "Comprehensive briefing about your destination country",
        },
        {
          step: "Practical Arrangements",
          desc: "Assist with accommodation, travel, and essential services",
        },
        {
          step: "Cultural Preparation",
          desc: "Guidance on cultural norms and expectations",
        },
        {
          step: "Ongoing Support",
          desc: "Continued assistance during your initial months abroad",
        },
      ],
      stats: [
        { number: "100%", label: "Students Supported" },
        { number: "24/7", label: "Emergency Support" },
        { number: "98%", label: "Successful Transitions" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden flex flex-col items-center">
      {/* Header */}
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
                <span className="text-xs font-medium text-[#313b3d]">
                  STUDY CONSULT
                </span>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              "Home",
              "Services",
              "Success Stories",
              "Destinations",
              "Contact",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `#${item.toLowerCase().replace(" ", "")}`
                  }
                  className={`text-sm font-medium hover:text-[#62b514] transition-colors relative group ${
                    item === "Services" ? "text-[#62b514]" : ""
                  }`}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DAA520] group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </Link>
              </motion.div>
            ))}
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
        className="relative py-20 md:py-32 bg-gradient-to-br from-green-50 via-yellow-50 to-emerald-100 overflow-hidden w-full flex flex-col items-center justify-center"
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

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
            className="text-center space-y-8 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <Badge
                variant="secondary"
                className="w-fit bg-[#DAA520]/10 text-[#DAA520] border-[#DAA520]/20 hover:bg-[#DAA520]/20 backdrop-blur-sm"
              >
                🎯 Comprehensive Study Abroad Services
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900"
            >
              Your Complete
              <motion.span
                className="text-[#62b514] inline-block"
                whileHover={{
                  scale: 1.1,
                  color: mustardYellow,
                  transition: { duration: 0.3 },
                }}
              >
                {" Study Abroad"}
              </motion.span>
              <br />
              Solution
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-700 max-w-[800px] mx-auto leading-relaxed"
            >
              From initial counseling to post-arrival support, we provide
              end-to-end services to make your international education journey
              seamless and successful. Discover our comprehensive range of
              services designed to turn your study abroad dreams into reality.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 bg-[#62b514] hover:bg-[#62b514]/90 shadow-xl group relative overflow-hidden"
                >
                  <motion.div className="absolute inset-0 bg-[#DAA520] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
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
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-200"
            >
              {[
                { number: "10,000+", label: "Students Helped" },
                { number: "95%", label: "Success Rate" },
                { number: "50+", label: "Countries" },
                { number: "500+", label: "Universities" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.8, type: "spring" }}
                >
                  <div className="text-3xl font-bold text-[#62b514] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      <div ref={servicesRef} className="relative w-full flex flex-col items-center justify-center">
        {services.map((service, index) => (
          <motion.section
            key={service.id}
            className={`py-20 md:py-32 relative overflow-hidden w-full flex flex-col items-center justify-center ${
              index % 2 === 0 ? service.bgColor : "bg-white"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Background Decorations */}
            <motion.div
              className={`absolute top-20 ${
                index % 2 === 0 ? "right-20" : "left-20"
              } w-32 h-32 bg-gradient-to-br ${
                service.color
              } opacity-10 rounded-full blur-3xl`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            />

            <div className="container px-4 md:px-6 relative z-10">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 0 ? "" : "lg:grid-flow-col-dense"
                }`}
              >
                {/* Content */}
                <motion.div
                  className={`space-y-8 ${
                    index % 2 === 0 ? "" : "lg:col-start-2"
                  }`}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h2>
                      <p className="text-xl text-[#DAA520] font-semibold mb-4">
                        {service.subtitle}
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: featureIndex * 0.1 + 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                    {service.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        className="text-center"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: statIndex * 0.1 + 0.6,
                          type: "spring",
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1`}
                        >
                          {stat.number}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${service.color} hover:shadow-xl text-white px-8 py-6 text-lg rounded-full transition-all duration-300`}
                    >
                      Learn More About This Service
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div> */}
                </motion.div>

                {/* Process Visualization */}
                <motion.div
                  className={`${
                    index % 2 === 0 ? "" : "lg:col-start-1 lg:row-start-1"
                  }`}
                  initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                        <Target className="w-6 h-6 mr-3 text-[#62b514]" />
                        Our Process
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        How we deliver exceptional results for you
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {service.process.map((step, stepIndex) => (
                        <motion.div
                          key={step.step}
                          className="relative flex items-start space-x-4"
                          initial={{ x: 20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: stepIndex * 0.2 + 0.6 }}
                          viewport={{ once: true }}
                        >
                          {/* Step Number */}
                          <motion.div
                            className={`w-10 h-10 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0`}
                            whileHover={{ scale: 1.1 }}
                          >
                            {stepIndex + 1}
                          </motion.div>

                          {/* Step Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {step.step}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {step.desc}
                            </p>
                          </div>

                          {/* Connecting Line */}
                          {stepIndex < service.process.length - 1 && (
                            <motion.div
                              className={`absolute left-5 top-10 w-0.5 h-8 bg-gradient-to-b ${service.color} opacity-30`}
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              transition={{ delay: stepIndex * 0.2 + 0.8 }}
                              viewport={{ once: true }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
