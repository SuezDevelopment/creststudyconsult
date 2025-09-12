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
  Mountain,
  Waves,
  TreePine
} from "lucide-react";

const universities = [
  {
    name: "University of Auckland",
    location: "Auckland",
    ranking: "#1",
    programs: ["Engineering", "Medicine", "Business", "Arts"]
  },
  {
    name: "University of Otago",
    location: "Dunedin",
    ranking: "#2",
    programs: ["Medicine", "Dentistry", "Pharmacy", "Health Sciences"]
  },
  {
    name: "Victoria University of Wellington",
    location: "Wellington",
    ranking: "#3",
    programs: ["Law", "Public Policy", "Creative Arts", "Science"]
  },
  {
    name: "University of Canterbury",
    location: "Christchurch",
    ranking: "#4",
    programs: ["Engineering", "Forestry", "Fine Arts", "Commerce"]
  }
];

const programs = [
  {
    category: "Agriculture & Environmental Sciences",
    fields: ["Agriculture", "Environmental Science", "Forestry", "Marine Science", "Viticulture"],
    duration: "3-4 years",
    averageCost: "NZ$25,000-35,000/year"
  },
  {
    category: "Technology & Engineering",
    fields: ["Software Engineering", "Civil Engineering", "Computer Science", "Information Technology", "Renewable Energy"],
    duration: "4 years",
    averageCost: "NZ$30,000-40,000/year"
  },
  {
    category: "Health Sciences",
    fields: ["Medicine", "Nursing", "Physiotherapy", "Pharmacy", "Veterinary Science"],
    duration: "4-6 years",
    averageCost: "NZ$35,000-70,000/year"
  },
  {
    category: "Creative Arts & Media",
    fields: ["Film Production", "Animation", "Design", "Music", "Creative Writing"],
    duration: "3-4 years",
    averageCost: "NZ$25,000-35,000/year"
  }
];

const requirements = [
  {
    title: "Academic Requirements",
    items: ["NCEA Level 3 or equivalent", "Bachelor's degree (for postgraduate)", "Specific subject prerequisites"]
  },
  {
    title: "Language Proficiency",
    items: ["IELTS 6.0-7.0 overall", "TOEFL iBT 80-100", "Cambridge English B2 First", "Pearson PTE Academic 50-65"]
  },
  {
    title: "Application Documents",
    items: ["Personal Statement", "Academic Transcripts", "Letters of Reference", "Portfolio (for creative programs)"]
  },
  {
    title: "Financial Requirements",
    items: ["Proof of funds (NZ$15,000+ per year)", "Bank statements", "Scholarship documentation", "Student visa application"]
  }
];

const livingCosts = [
  { category: "Accommodation", cost: "NZ$200-400/week", description: "Student halls or shared flats" },
  { category: "Food & Groceries", cost: "NZ$80-120/week", description: "Groceries and occasional dining" },
  { category: "Transportation", cost: "NZ$40-80/week", description: "Public transport and travel" },
  { category: "Personal Expenses", cost: "NZ$50-100/week", description: "Books, entertainment, and activities" }
];

export default function StudyInNewZealandPage() {
  const { openModal } = useBookingModal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Study in New Zealand - Crest Study Consult",
            "description": "Complete guide to studying in New Zealand. Expert assistance for New Zealand university admissions, student visas, and academic programs in Aotearoa.",
            "url": "https://creststudyconsult.com/study-destinations/study-in-new-zealand",
            "serviceArea": {
              "@type": "Place",
              "name": "New Zealand"
            },
            "educationalCredentialAwarded": {
              "@type": "EducationalOccupationalCredential",
              "name": "New Zealand Higher Education Degrees",
              "description": "Bachelor's, Master's, and Doctoral degrees from top New Zealand universities",
              "educationalLevel": "Higher Education",
              "competencyRequired": ["Agriculture", "Technology", "Health Sciences", "Creative Arts", "Environmental Sciences"]
            },
            "offers": {
              "@type": "Offer",
              "name": "New Zealand Study Abroad Consultation",
              "description": "Expert guidance for studying in New Zealand with stunning landscapes and innovative education",
              "category": "Educational Consulting"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "NZ"
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
            <span className="text-gray-900 font-medium">Study in New Zealand</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇳🇿</span>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Study in New Zealand
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience world-class education in one of the most beautiful countries on Earth. New Zealand offers innovative programs, stunning natural landscapes, and a welcoming multicultural environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Mountain className="h-4 w-4 mr-2" />
                Stunning Landscapes
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Waves className="h-4 w-4 mr-2" />
                Adventure Capital
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <TreePine className="h-4 w-4 mr-2" />
                Clean Environment
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
              Why Study in New Zealand?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the unique advantages of pursuing your education in Aotearoa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Mountain className="h-8 w-8 text-blue-600" />,
                title: "Natural Beauty",
                description: "Study surrounded by breathtaking landscapes, from mountains to beaches and everything in between."
              },
              {
                icon: <Globe className="h-8 w-8 text-green-600" />,
                title: "Safe Environment",
                description: "One of the world's safest countries with a peaceful, welcoming society and low crime rates."
              },
              {
                icon: <Award className="h-8 w-8 text-orange-600" />,
                title: "Quality Education",
                description: "Eight world-class universities with strong research programs and innovative teaching methods."
              },
              {
                icon: <Briefcase className="h-8 w-8 text-purple-600" />,
                title: "Work Opportunities",
                description: "Excellent post-study work rights and pathways to permanent residency for graduates."
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
              Top Universities in New Zealand
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover New Zealand's prestigious universities known for innovation and research excellence.
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
              Explore the most sought-after academic programs in New Zealand universities.
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
              Essential requirements for studying in New Zealand.
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
              Estimated weekly living expenses for international students in New Zealand.
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
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Study in New Zealand?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get expert guidance for New Zealand university admissions, student visas, and accommodation. Experience the beauty and innovation of Kiwi education!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => openModal(true)}
              >
                Get Free New Zealand Consultation
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