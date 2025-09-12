"use client";
import type React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RedAsterisk } from "@/components/red-asteriks";
import {
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  Users,
  Globe,
  Send,
  CheckCircle,
  Plane,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import FooterSection from "@/components/sections/footer";
import Header from "@/components/sections/header";

export default function ContactPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const officesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.2 });
  const officesInView = useInView(officesRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        // ease: "easeOut",
      },
    },
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Contact form submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      inquiryType: "",
    });
    setIsSubmitting(false);

    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden flex flex-col items-center">
      {/* Header */}
      <Header />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-[#62b514]/10 via-[#DAA520]/5 to-[#62b514]/10 w-full flex flex-col items-center justify-center"
      >
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #62b514 2px, transparent 2px)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 20px 20px",
            }}
          />
        </div>

        {/* Animated Background Elements */}
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

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <Badge
                  variant="secondary"
                  className="w-fit bg-[#DAA520]/10 text-[#DAA520] border-[#DAA520]/20 hover:bg-[#DAA520]/20"
                >
                  📞 Get In Touch
                </Badge>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900"
              >
                Contact Us
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed"
              >
                We offer numerous ways for you to connect with us. Our expert
                counselors are here to guide you through every step of your
                study abroad journey.
              </motion.p>

              {/* Quick Contact Info */}
              <motion.div
                variants={itemVariants}
                className="grid gap-4 sm:grid-cols-2"
              >
                <motion.div
                  className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-10 h-10 bg-[#62b514]/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#62b514]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-sm text-gray-600">+234 xxx xxx xxxx</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="w-10 h-10 bg-[#DAA520]/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#DAA520]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-sm text-gray-600">
                      info@creststudyconsult.com
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={
                heroInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Person Illustration */}
                <motion.div
                  className="relative z-10"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/contact.png"
                    alt="Students studying abroad"
                    width={800}
                    height={600}
                    className=""
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-10 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                  animate={{ rotate: 360, y: [-10, 10, -10] }}
                  transition={{
                    rotate: {
                      duration: 8,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    y: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <MessageCircle className="w-6 h-6 text-[#62b514]" />
                </motion.div>

                <motion.div
                  className="absolute bottom-10 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                  animate={{ rotate: -360, y: [10, -10, 10] }}
                  transition={{
                    rotate: {
                      duration: 6,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    },
                    y: {
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Globe className="w-6 h-6 text-[#DAA520]" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Office Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-[#313b3d] text-white relative overflow-hidden w-full flex flex-col items-center"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(45deg, #DAA520 25%, transparent 25%), linear-gradient(-45deg, #DAA520 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #DAA520 75%), linear-gradient(-45deg, transparent 75%, #DAA520 75%)`,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            }}
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet with our expert counsellors in our Virtual Office right
                away!
              </h2>

              <div className="flex flex-col items-center space-y-2 mb-8">
                <div className="flex items-center space-x-2 text-xl">
                  <Clock className="w-6 h-6 text-[#DAA520]" />
                  <span className="font-semibold">Monday - Friday</span>
                </div>
                <p className="text-2xl font-bold text-[#DAA520]">
                  10AM till 5 PM
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-xl"
                >
                  <Users className="mr-3 h-6 w-6" />
                  Meet Us Online
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form & Info Section */}
      <section ref={formRef} className="py-20 md:py-32 bg-gray-50 w-full flex flex-col items-center">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={formInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book your{" "}
              <span className="text-[#62b514]">FREE consultation</span> with
              Certified Counsellors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with us for a free study abroad consultation with our expert advisors. We’ll guide you to the best-fit course, country, and university, while also helping you explore available scholarships and visa options.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={
                formInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 shadow-xl border-0 bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Send className="w-6 h-6 mr-3 text-[#62b514]" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form and our team will get back to you within
                    24 hours.
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name<RedAsterisk /></Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) =>
                            handleInputChange("firstName", e.target.value)
                          }
                          placeholder="Enter your first name"
                          required
                          className="focus:ring-[#62b514] focus:border-[#62b514]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name<RedAsterisk /></Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) =>
                            handleInputChange("lastName", e.target.value)
                          }
                          placeholder="Enter your last name"
                          required
                          className="focus:ring-[#62b514] focus:border-[#62b514]"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address<RedAsterisk /></Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="your.email@example.com"
                          required
                          className="focus:ring-[#62b514] focus:border-[#62b514]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number<RedAsterisk /></Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          placeholder="+234 xxx xxx xxxx"
                          required
                          className="focus:ring-[#62b514] focus:border-[#62b514]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) =>
                          handleInputChange("inquiryType", value)
                        }
                      >
                        <SelectTrigger className="focus:ring-[#62b514] focus:border-[#62b514]">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="consultation">
                            Book Consultation
                          </SelectItem>
                          <SelectItem value="application">
                            Application Support
                          </SelectItem>
                          <SelectItem value="visa">Visa Assistance</SelectItem>
                          <SelectItem value="test-prep">
                            Test Preparation
                          </SelectItem>
                          <SelectItem value="scholarship">
                            Scholarship Information
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject<RedAsterisk /></Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        placeholder="Brief subject of your inquiry"
                        required
                        className="focus:ring-[#62b514] focus:border-[#62b514]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message<RedAsterisk /></Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        required
                        className="focus:ring-[#62b514] focus:border-[#62b514]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#62b514] hover:bg-[#62b514]/90 text-white py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={
                formInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
              }
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <Card className="p-6 bg-gradient-to-br from-[#62b514]/5 to-[#DAA520]/5 border-[#62b514]/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-[#62b514]" />
                    Why Choose Crest Study Consult?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Free initial consultation with certified counselors",
                    "95% visa success rate with comprehensive support",
                    "Access to 500+ partner universities worldwide",
                    "Personalized guidance from application to arrival",
                    "24/7 support throughout your journey",
                    "Scholarship assistance and financial planning",
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      className="flex items-start space-x-3"
                      initial={{ x: 20, opacity: 0 }}
                      animate={
                        formInView
                          ? { x: 0, opacity: 1 }
                          : { x: 20, opacity: 0 }
                      }
                      transition={{ delay: index * 0.1 + 0.6 }}
                    >
                      <CheckCircle className="w-4 h-4 text-[#62b514] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid gap-4">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-6 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#62b514]/10 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-[#62b514]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Book a Consultation
                      </h3>
                      <p className="text-sm text-gray-600">
                        Schedule a free one-on-one session
                      </p>
                    </div>
                    <Button
                      size="sm"
                      className="bg-[#62b514] hover:bg-[#62b514]/90"
                    >
                      Book Now
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-6 bg-white rounded-xl shadow-lg border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#DAA520]/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-[#DAA520]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">
                        Live Chat Support
                      </h3>
                      <p className="text-sm text-gray-600">
                        Get instant answers to your questions
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-[#DAA520] text-[#DAA520] hover:bg-[#DAA520] hover:text-white bg-transparent"
                    >
                      Chat Now
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Response Time */}
              <Card className="p-6 bg-gradient-to-r from-[#313b3d] to-[#313b3d]/90 text-white">
                <CardContent className="text-center space-y-4">
                  <div className="w-16 h-16 bg-[#DAA520] rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Quick Response Guarantee
                    </h3>
                    <p className="text-gray-300">
                      We respond to all inquiries within 24 hours during
                      business days
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section ref={officesRef} className="py-20 md:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={
              officesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
            }
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our <span className="text-[#62b514]">Offices</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our expert counselors in person at our conveniently located
              offices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                city: "Lagos Office",
                address:
                  "33B Akin Adesola St, Victoria Island, Lagos 106104, Lagos",
                phone: "+234 xxx xxx xxxx",
                email: "lagos@creststudyconsult.com",
                hours: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM",
                color: "from-[#62b514] to-[#62b514]/80",
              },
              {
                city: "Ibadan Office",
                address: "16 Yawuri Akobo, Ojurin, Ibadan, Oyo",
                phone: "+234 xxx xxx xxxx",
                email: "ibadan@creststudyconsult.com",
                hours: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM",
                color: "from-[#DAA520] to-[#DAA520]/80",
              },
            ].map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ y: 50, opacity: 0 }}
                animate={
                  officesInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-8 shadow-xl border-0 bg-white relative overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${office.color}`}
                  />

                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                      <MapPin className="w-6 h-6 mr-3 text-[#62b514]" />
                      {office.city}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Address</p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {office.address}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Phone</p>
                          <p className="text-gray-600 text-sm">
                            {office.phone}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-gray-600 text-sm">
                            {office.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900">
                            Office Hours
                          </p>
                          <p className="text-gray-600 text-sm whitespace-pre-line">
                            {office.hours}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <Button className="w-full bg-[#62b514] hover:bg-[#62b514]/90 text-white">
                        <MapPin className="mr-2 h-4 w-4" />
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
