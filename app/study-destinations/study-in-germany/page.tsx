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
  Euro,
  Factory,
  Microscope
} from "lucide-react";

const universities = [
  {
    name: "Technical University of Munich",
    location: "Munich, Bavaria",
    ranking: "#1",
    programs: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    name: "Ludwig Maximilian University",
    location: "Munich, Bavaria",
    ranking: "#2",
    programs: ["Medicine", "Law", "Philosophy", "Economics"]
  },
  {
    name: "Heidelberg University",
    location: "Heidelberg, Baden-Württemberg",
    ranking: "#3",
    programs: ["Medicine", "Life Sciences", "Physics", "Chemistry"]
  },
  {
    name: "Humboldt University Berlin",
    location: "Berlin",
    ranking: "#4",
    programs: ["Social Sciences", "Humanities", "Natural Sciences", "Medicine"]
  }
];

const programs = [
  {
    category: "Engineering & Technology",
    fields: ["Mechanical Engineering", "Automotive Engineering", "Computer Science", "Electrical Engineering", "Industrial Engineering"],
    duration: "3-4 years",
    averageCost: "€0-3,000/year"
  },
  {
    category: "Business & Economics",
    fields: ["Business Administration", "Economics", "Finance", "International Business", "Management"],
    duration: "3-4 years",
    averageCost: "€0-20,000/year"
  },
  {
    category: "Natural Sciences",
    fields: ["Physics", "Chemistry", "Biology", "Mathematics", "Environmental Science"],
    duration: "3-5 years",
    averageCost: "€0-1,500/year"
  },
  {
    category: "Medicine & Health",
    fields: ["Medicine", "Dentistry", "Pharmacy", "Psychology", "Public Health"],
    duration: "6-8 years",
    averageCost: "€0-15,000/year"
  }
];

const requirements = [
  {
    title: "Academic Requirements",
    items: ["Abitur or equivalent qualification", "Bachelor's degree (for Master's)", "Specific subject prerequisites"]
  },
  {
    title: "Language Proficiency",
    items: ["German: DSH-2, TestDaF 4, or Goethe C2", "English: IELTS 6.5+ or TOEFL 90+ (for English programs)", "Language course completion certificates"]
  },
  {
    title: "Application Documents",
    items: ["Motivation Letter", "Academic Transcripts", "CV/Resume", "Letters of Recommendation"]
  },
  {
    title: "Additional Requirements",
    items: ["APS Certificate (for some countries)", "Blocked Account (€11,208/year)", "Health Insurance", "Visa Application"]
  }
];

const livingCosts = [
  { category: "Accommodation", cost: "€300-700/month", description: "Student housing or shared apartments" },
  { category: "Food & Groceries", cost: "€200-300/month", description: "Cooking and occasional dining out" },
  { category: "Transportation", cost: "€80-200/month", description: "Public transport student discounts" },
  { category: "Personal Expenses", cost: "€100-200/month", description: "Books, entertainment, and miscellaneous" }
];

export default function StudyInGermanyPage() {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Study in Germany - Crest Study Consult",
            "description": "Complete guide to studying in Germany. Expert assistance for German university admissions, student visas, and academic programs with low tuition fees.",
            "url": "https://creststudyconsult.com/study-destinations/study-in-germany",
            "serviceArea": {
              "@type": "Place",
              "name": "Germany"
            },
            "educationalCredentialAwarded": {
              "@type": "EducationalOccupationalCredential",
              "name": "German Higher Education Degrees",
              "description": "Bachelor's, Master's, and Doctoral degrees from top German universities",
              "educationalLevel": "Higher Education",
              "competencyRequired": ["Engineering", "Business", "Medicine", "Sciences", "Technology"]
            },
            "offers": {
              "@type": "Offer",
              "name": "Germany Study Abroad Consultation",
              "description": "Expert guidance for studying in Germany with affordable education",
              "category": "Educational Consulting"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "DE"
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
            <span className="text-gray-900 font-medium">Study in Germany</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇩🇪</span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
                Study in Germany
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience world-renowned engineering and research excellence in the heart of Europe. Germany offers high-quality education, minimal tuition fees, and strong industry connections.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Euro className="h-4 w-4 mr-2" />
                Low/No Tuition Fees
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Factory className="h-4 w-4 mr-2" />
                Industrial Excellence
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Microscope className="h-4 w-4 mr-2" />
                Research Innovation
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
              Why Study in Germany?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of pursuing your education in Germany's world-class institutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Euro className="h-8 w-8 text-green-600" />,
                title: "Affordable Education",
                description: "Most public universities charge no tuition fees, making quality education accessible to all."
              },
              {
                icon: <Factory className="h-8 w-8 text-blue-600" />,
                title: "Industry Connections",
                description: "Strong ties with leading companies like BMW, Siemens, and SAP provide excellent career opportunities."
              },
              {
                icon: <Award className="h-8 w-8 text-red-600" />,
                title: "Academic Excellence",
                description: "Home to numerous Nobel Prize winners and world-leading research institutions."
              },
              {
                icon: <Globe className="h-8 w-8 text-purple-600" />,
                title: "Central Location",
                description: "Perfect base for exploring Europe with excellent transport connections to neighboring countries."
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
              Top Universities in Germany
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore Germany's prestigious universities known for research and academic excellence.
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
                      <Badge className="bg-red-600 hover:bg-red-700">
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
              Discover the most sought-after academic programs in German universities.
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
                        <Euro className="h-4 w-4 text-gray-500 mr-2" />
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
              Essential requirements for studying in Germany.
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
              Estimated monthly living expenses for international students in Germany.
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
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Study in Germany?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert guidance for German university admissions, student visas, and language preparation. Start your German education journey with minimal costs!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => openModal(true)}
              >
                Get Free Germany Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-3"
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