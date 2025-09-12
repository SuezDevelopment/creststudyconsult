"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useBookingModal } from "@/hooks/use-booking-modal";
import Link from "next/link";
import Image from "next/image";
import { 
  GraduationCap, 
  Globe, 
  Users, 
  Award, 
  MapPin, 
  Clock, 
  DollarSign, 
  BookOpen,
  ArrowRight,
  Star,
  TrendingUp
} from "lucide-react";

interface Destination {
  id: string;
  name: string;
  slug: string;
  flag: string;
  description: string;
  highlights: string[];
  stats: {
    universities: number;
    students: string;
    duration: string;
    cost: string;
  };
  popularPrograms: string[];
  image: string;
  featured: boolean;
}

const destinations: Destination[] = [
  {
    id: "usa",
    name: "United States",
    slug: "study-in-usa",
    flag: "🇺🇸",
    description: "Home to world-renowned universities and cutting-edge research facilities. The USA offers diverse academic programs and excellent career opportunities.",
    highlights: ["World's top universities", "Research opportunities", "Cultural diversity", "Post-study work options"],
    stats: {
      universities: 4000,
      students: "1M+",
      duration: "2-4 years",
      cost: "$20,000-60,000"
    },
    popularPrograms: ["Computer Science", "Business", "Engineering", "Medicine"],
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: "canada",
    name: "Canada",
    slug: "study-in-canada",
    flag: "🇨🇦",
    description: "Known for its high-quality education system, multicultural environment, and excellent post-graduation work opportunities.",
    highlights: ["High quality education", "Affordable tuition", "Immigration pathways", "Safe environment"],
    stats: {
      universities: 200,
      students: "800K+",
      duration: "1-4 years",
      cost: "$15,000-35,000"
    },
    popularPrograms: ["Engineering", "Business", "Healthcare", "IT"],
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: "uk",
    name: "United Kingdom",
    slug: "study-in-uk",
    flag: "🇬🇧",
    description: "Rich academic heritage with prestigious universities like Oxford and Cambridge. Shorter degree programs and excellent research opportunities.",
    highlights: ["Prestigious universities", "Shorter programs", "Research excellence", "Cultural heritage"],
    stats: {
      universities: 150,
      students: "500K+",
      duration: "1-3 years",
      cost: "£15,000-40,000"
    },
    popularPrograms: ["Finance", "Law", "Medicine", "Arts"],
    image: "/placeholder.jpg",
    featured: true
  },
  {
    id: "australia",
    name: "Australia",
    slug: "study-in-australia",
    flag: "🇦🇺",
    description: "World-class education with a relaxed lifestyle. Strong focus on practical learning and excellent post-study work opportunities.",
    highlights: ["Quality education", "Work opportunities", "Great lifestyle", "Research focus"],
    stats: {
      universities: 43,
      students: "700K+",
      duration: "1-4 years",
      cost: "AUD 20,000-45,000"
    },
    popularPrograms: ["Mining", "Agriculture", "Tourism", "Engineering"],
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: "germany",
    name: "Germany",
    slug: "study-in-germany",
    flag: "🇩🇪",
    description: "Europe's economic powerhouse offering tuition-free education at public universities and strong industry connections.",
    highlights: ["Tuition-free education", "Strong economy", "Industry connections", "Research opportunities"],
    stats: {
      universities: 400,
      students: "400K+",
      duration: "2-3 years",
      cost: "€0-20,000"
    },
    popularPrograms: ["Engineering", "Automotive", "Technology", "Business"],
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: "ireland",
    name: "Ireland",
    slug: "study-in-ireland",
    flag: "🇮🇪",
    description: "English-speaking EU country with a strong tech industry presence and friendly, welcoming culture.",
    highlights: ["English speaking", "EU access", "Tech hub", "Friendly culture"],
    stats: {
      universities: 35,
      students: "200K+",
      duration: "1-4 years",
      cost: "€10,000-25,000"
    },
    popularPrograms: ["Technology", "Pharmaceuticals", "Finance", "Agriculture"],
    image: "/placeholder.jpg",
    featured: false
  },
  {
    id: "newzealand",
    name: "New Zealand",
    slug: "study-in-new_zealand",
    flag: "🇳🇿",
    description: "Stunning natural beauty combined with high-quality education. Known for innovation and research in environmental sciences.",
    highlights: ["Natural beauty", "Innovation focus", "Safe environment", "Quality education"],
    stats: {
      universities: 8,
      students: "120K+",
      duration: "1-4 years",
      cost: "NZD 22,000-35,000"
    },
    popularPrograms: ["Environmental Science", "Agriculture", "Tourism", "Film Studies"],
    image: "/placeholder.jpg",
    featured: false
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function StudyDestinationsPage() {
  const { openModal } = useBookingModal();
  const featuredDestinations = destinations.filter(dest => dest.featured);
  const otherDestinations = destinations.filter(dest => !dest.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Crest Study Consult",
            "description": "Expert guidance for studying abroad in top destinations worldwide",
            "url": "https://creststudyconsult.com/study-destinations",
            "serviceArea": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "educationalCredentialAwarded": destinations.map(dest => ({
              "@type": "EducationalOccupationalCredential",
              "name": `Study in ${dest.name}`,
              "description": dest.description,
              "educationalLevel": "Higher Education",
              "competencyRequired": dest.popularPrograms
            })),
            "offers": {
              "@type": "Offer",
              "name": "Study Abroad Consultation",
              "description": "Expert guidance for international education"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#62b514]/10 to-blue-600/10" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-12 w-12 text-[#62b514] mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#62b514] to-blue-600 bg-clip-text text-transparent">
                Study Destinations
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover world-class education opportunities across the globe. From prestigious universities to cutting-edge research facilities, find your perfect study destination.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Users className="h-4 w-4 mr-2" />
                2M+ Students Placed
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <Award className="h-4 w-4 mr-2" />
                Top Ranked Universities
              </Badge>
              <Badge variant="secondary" className="text-lg py-2 px-4">
                <TrendingUp className="h-4 w-4 mr-2" />
                95% Success Rate
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <Star className="inline h-8 w-8 text-yellow-500 mr-2" />
              Featured Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular study destinations offering exceptional education quality and career opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {featuredDestinations.map((destination) => (
              <motion.div key={destination.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-4xl mr-3">{destination.flag}</span>
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900">
                            {destination.name}
                          </CardTitle>
                          <Badge className="mt-1 bg-[#62b514] hover:bg-[#62b514]/90">
                            Featured
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {destination.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#62b514]">{destination.stats.universities}</div>
                        <div className="text-sm text-gray-600">Universities</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#62b514]">{destination.stats.students}</div>
                        <div className="text-sm text-gray-600">Students</div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Highlights</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Popular Programs */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Popular Programs</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.popularPrograms.slice(0, 3).map((program, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            <BookOpen className="h-3 w-3 mr-1" />
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Cost & Duration */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{destination.stats.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 text-gray-500 mr-2" />
                        <span>{destination.stats.cost}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button asChild className="flex-1 bg-[#62b514] hover:bg-[#62b514]/90">
                        <Link href={`/study-destinations/${destination.slug}`}>
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openModal(true)}
                        className="px-3"
                      >
                        <MapPin className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Other Destinations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore additional study opportunities in these excellent destinations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {otherDestinations.map((destination) => (
              <motion.div key={destination.id} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-3">
                      <span className="text-3xl mr-3">{destination.flag}</span>
                      <CardTitle className="text-lg font-bold text-gray-900">
                        {destination.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm text-gray-600 line-clamp-3">
                      {destination.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-lg font-bold text-[#62b514]">{destination.stats.universities}</div>
                      <div className="text-xs text-gray-600">Universities</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 2).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild className="w-full bg-[#62b514] hover:bg-[#62b514]/90" size="sm">
                      <Link href={`/study-destinations/${destination.slug}`}>
                        Explore
                        <ArrowRight className="h-3 w-3 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#62b514] to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GraduationCap className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Global Education Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get personalized guidance from our expert counselors and take the first step towards your dream destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-[#62b514] hover:bg-gray-100 font-semibold px-8 py-3"
                onClick={() => openModal(true)}
              >
                Get Free Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#62b514] font-semibold px-8 py-3"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}