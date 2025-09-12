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
  Sun,
  Waves,
  Mountain
} from "lucide-react";

const universities = [
  {
    name: "University of Melbourne",
    location: "Melbourne, Victoria",
    ranking: "#1",
    programs: ["Medicine", "Engineering", "Business", "Law"]
  },
  {
    name: "Australian National University",
    location: "Canberra, ACT",
    ranking: "#2",
    programs: ["Politics", "International Relations", "Economics", "Science"]
  },
  {
    name: "University of Sydney",
    location: "Sydney, NSW",
    ranking: "#3",
    programs: ["Medicine", "Engineering", "Architecture", "Business"]
  },
  {
    name: "University of Queensland",
    location: "Brisbane, Queensland",
    ranking: "#4",
    programs: ["Veterinary Science", "Mining Engineering", "Psychology", "Agriculture"]
  }
];

const programs = [
  {
    category: "Business & Management",
    fields: ["MBA", "Finance", "Marketing", "International Business", "Entrepreneurship"],
    duration: "1-3 years",
    averageCost: "AUD 35,000-65,000"
  },
  {
    category: "Engineering & IT",
    fields: ["Software Engineering", "Mining Engineering", "Civil Engineering", "Data Science", "Cybersecurity"],
    duration: "3-4 years",
    averageCost: "AUD 40,000-50,000"
  },
  {
    category: "Health Sciences",
    fields: ["Medicine", "Nursing", "Physiotherapy", "Dentistry", "Public Health"],
    duration: "4-6 years",
    averageCost: "AUD 45,000-70,000"
  },
  {
    category: "Natural Sciences",
    fields: ["Environmental Science", "Marine Biology", "Geology", "Agriculture", "Veterinary Science"],
    duration: "3-5 years",
    averageCost: "AUD 35,000-55,000"
  }
];

const requirements = [
  {
    title: "Academic Requirements",
    items: ["High school completion (Year 12)", "Bachelor's degree (for postgraduate)", "Minimum GPA requirements vary by program"]
  },
  {
    title: "English Proficiency",
    items: ["IELTS: 6.5-7.0 overall", "TOEFL: 79-100 iBT", "PTE Academic: 58-65"]
  },
  {
    title: "Standardized Tests",
    items: ["GAMSAT (Medicine)", "UCAT (Medicine/Dentistry)", "GMAT/GRE (Business/Graduate programs)"]
  },
  {
    title: "Application Documents",
    items: ["Statement of Purpose", "Academic Transcripts", "Letters of Recommendation", "CV/Resume"]
  }
];

const livingCosts = [
  { category: "Accommodation", cost: "AUD 15,000-25,000/year", description: "On-campus or shared housing" },
  { category: "Food & Groceries", cost: "AUD 4,000-7,000/year", description: "Cooking at home and dining out" },
  { category: "Transportation", cost: "AUD 1,500-3,000/year", description: "Public transport and travel" },
  { category: "Personal Expenses", cost: "AUD 3,000-5,000/year", description: "Entertainment, books, and miscellaneous" }
];

export default function StudyInAustraliaPage() {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Study in Australia - Crest Study Consult",
            "description": "Complete guide to studying in Australia. Expert assistance for Australian university admissions, student visas, and academic programs.",
            "url": "https://creststudyconsult.com/study-destinations/study-in-australia",
            "serviceArea": {
              "@type": "Place",
              "name": "Australia"
            },
            "educationalCredentialAwarded": {
              "@type": "EducationalOccupationalCredential",
              "name": "Australian Higher Education Degrees",
              "description": "Bachelor's, Master's, and Doctoral degrees from top Australian universities",
              "educationalLevel": "Higher Education",
              "competencyRequired": ["Business", "Engineering", "Medicine", "Sciences", "Technology"]
            },
            "offers": {
              "@type": "Offer",
              "name": "Australia Study Abroad Consultation",
              "description": "Expert guidance for studying in Australia",
              "category": "Educational Consulting"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AU"
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
            <span className="text-gray-900 font-medium">Study in Australia</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇦🇺</span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
                Study in Australia
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover world-class education in the land Down Under. Australia offers innovative universities, stunning landscapes, multicultural cities, and excellent post-study work opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Sun className="h-4 w-4 mr-2" />
                Year-Round Sunshine
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Waves className="h-4 w-4 mr-2" />
                Coastal Lifestyle
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Mountain className="h-4 w-4 mr-2" />
                Adventure & Nature
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
              Why Study in Australia?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore the unique benefits of pursuing your education in Australia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-orange-500" />,
                title: "World-Class Universities",
                description: "8 Australian universities rank in the global top 100, offering exceptional education quality."
              },
              {
                icon: <Briefcase className="h-8 w-8 text-blue-600" />,
                title: "Post-Study Work Rights",
                description: "Graduate visa allows 2-4 years of work experience in Australia after graduation."
              },
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: "Multicultural Society",
                description: "Experience diverse cultures in one of the world's most welcoming countries."
              },
              {
                icon: <Sun className="h-8 w-8 text-yellow-500" />,
                title: "Amazing Lifestyle",
                description: "Enjoy beautiful beaches, vibrant cities, and outdoor adventures year-round."
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
              Top Universities in Australia
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover Australia's leading universities known for research excellence and innovation.
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
                      <Badge className="bg-orange-500 hover:bg-orange-600">
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
              Explore the most in-demand academic programs in Australian universities.
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
              Essential requirements for studying in Australia.
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
              Estimated annual living expenses for international students in Australia.
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
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Study in Australia?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert guidance for Australian university admissions, student visas, and scholarship opportunities. Start your Australian education journey today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => openModal(true)}
              >
                Get Free Australia Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-3"
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