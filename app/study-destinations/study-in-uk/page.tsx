"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useBookingModal } from "@/hooks/use-booking-modal";
import Link from "next/link";
import { 
  GraduationCap, 
  MapPin, 
  Clock, 
  DollarSign, 
  BookOpen,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Globe,
  Building,
  Briefcase,
  Home,
  ChevronRight,
  Crown,
  Library
} from "lucide-react";

const universities = [
  {
    name: "University of Oxford",
    location: "Oxford, England",
    ranking: "#1",
    programs: ["Medicine", "Law", "Philosophy", "Engineering"]
  },
  {
    name: "University of Cambridge",
    location: "Cambridge, England",
    ranking: "#2",
    programs: ["Natural Sciences", "Engineering", "Mathematics", "Medicine"]
  },
  {
    name: "Imperial College London",
    location: "London, England",
    ranking: "#3",
    programs: ["Engineering", "Medicine", "Business", "Natural Sciences"]
  },
  {
    name: "London School of Economics",
    location: "London, England",
    ranking: "#4",
    programs: ["Economics", "Politics", "Law", "Social Sciences"]
  }
];

const programs = [
  {
    category: "Business & Finance",
    fields: ["MBA", "Finance", "Economics", "Accounting", "International Business"],
    duration: "1-3 years",
    averageCost: "£15,000-45,000"
  },
  {
    category: "Engineering & Technology",
    fields: ["Computer Science", "Mechanical Engineering", "AI & Robotics", "Civil Engineering", "Electrical Engineering"],
    duration: "3-4 years",
    averageCost: "£20,000-35,000"
  },
  {
    category: "Medicine & Healthcare",
    fields: ["Medicine", "Dentistry", "Nursing", "Public Health", "Biomedical Sciences"],
    duration: "4-6 years",
    averageCost: "£25,000-50,000"
  },
  {
    category: "Arts & Humanities",
    fields: ["Literature", "History", "Philosophy", "Art & Design", "Languages"],
    duration: "3-4 years",
    averageCost: "£12,000-25,000"
  }
];

const requirements = [
  {
    title: "Academic Requirements",
    items: ["A-levels or equivalent qualifications", "Bachelor's degree (for postgraduate)", "Strong academic performance (AAA-ABB typical)"]
  },
  {
    title: "English Proficiency",
    items: ["IELTS: 6.5-7.5 overall", "TOEFL: 90-110 iBT", "Cambridge English: Advanced (CAE)"]
  },
  {
    title: "Standardized Tests",
    items: ["UKCAT/BMAT (Medicine)", "LNAT (Law)", "GMAT/GRE (Business/Graduate programs)"]
  },
  {
    title: "Application Documents",
    items: ["Personal Statement", "Academic References", "CV/Resume", "Portfolio (if applicable)"]
  }
];

const livingCosts = [
  { category: "Accommodation", cost: "£8,000-15,000/year", description: "University halls or private housing" },
  { category: "Food & Dining", cost: "£2,500-4,000/year", description: "Groceries and occasional dining out" },
  { category: "Transportation", cost: "£1,000-2,500/year", description: "Public transport and travel" },
  { category: "Personal & Study", cost: "£2,000-3,000/year", description: "Books, supplies, and entertainment" }
];

export default function StudyInUKPage() {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Study in UK - Crest Study Consult",
            "description": "Complete guide to studying in the United Kingdom. Expert assistance for UK university admissions, student visas, and academic programs.",
            "url": "https://creststudyconsult.com/study-destinations/study-in-uk",
            "serviceArea": {
              "@type": "Place",
              "name": "United Kingdom"
            },
            "educationalCredentialAwarded": {
              "@type": "EducationalOccupationalCredential",
              "name": "UK Higher Education Degrees",
              "description": "Bachelor's, Master's, and Doctoral degrees from prestigious UK universities",
              "educationalLevel": "Higher Education",
              "competencyRequired": ["Business", "Engineering", "Medicine", "Arts", "Sciences"]
            },
            "offers": {
              "@type": "Offer",
              "name": "UK Study Abroad Consultation",
              "description": "Expert guidance for studying in the United Kingdom",
              "category": "Educational Consulting"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GB"
            }
          })
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#62b514] transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/study-destinations" className="hover:text-[#62b514] transition-colors">
              Study Destinations
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Study in UK</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-red-600/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇬🇧</span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Study in UK
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience centuries of academic excellence in the birthplace of the English language. The UK offers world-renowned universities, rich cultural heritage, and globally recognized qualifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Crown className="h-4 w-4 mr-2" />
                Historic Excellence
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Library className="h-4 w-4 mr-2" />
                World-Class Libraries
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Globe className="h-4 w-4 mr-2" />
                Global Recognition
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Study in the UK?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the unique advantages of pursuing your education in the United Kingdom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Crown className="h-8 w-8 text-blue-600" />,
                title: "Prestigious Universities",
                description: "Home to Oxford, Cambridge, and other world-leading institutions with centuries of excellence."
              },
              {
                icon: <Clock className="h-8 w-8 text-green-600" />,
                title: "Shorter Degrees",
                description: "Complete your bachelor's in 3 years and master's in 1 year, saving time and money."
              },
              {
                icon: <Globe className="h-8 w-8 text-purple-600" />,
                title: "Global Recognition",
                description: "UK qualifications are recognized and respected by employers worldwide."
              },
              {
                icon: <Library className="h-8 w-8 text-red-600" />,
                title: "Rich Culture",
                description: "Immerse yourself in British culture, history, and the birthplace of English literature."
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Universities in the UK
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the UK's most prestigious universities with centuries of academic excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {universities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {university.name}
                        </CardTitle>
                        <div className="flex items-center mt-2">
                          <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-gray-600">{university.location}</span>
                        </div>
                      </div>
                      <Badge className="bg-blue-600 hover:bg-blue-700">
                        {university.ranking}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Popular Programs</h4>
                      <div className="flex flex-wrap gap-2">
                        {university.programs.map((program, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Study Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the most sought-after academic programs in UK universities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-[#62b514]" />
                      {program.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Fields of Study</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.fields.map((field, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {field}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{program.averageCost}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential requirements for studying in the United Kingdom.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {req.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {req.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-[#62b514] rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Living Costs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cost of Living
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estimated annual living expenses for international students in the UK.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {livingCosts.map((cost, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cost.category}</h3>
                    <div className="text-2xl font-bold text-[#62b514] mb-3">{cost.cost}</div>
                    <p className="text-sm text-gray-600">{cost.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-red-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Study in the UK?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert guidance for UK university admissions, student visas, and scholarship opportunities. Begin your British education adventure today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => openModal(true)}
              >
                Get Free UK Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3"
                asChild
              >
                <Link href="/study-destinations">
                  Explore Other Destinations
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}