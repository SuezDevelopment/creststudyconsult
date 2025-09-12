"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search, Filter, X, BookOpen, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

// Search data structure
interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  lastModified: string;
  readTime?: string;
}

// Comprehensive search data
const searchData: SearchResult[] = [
  {
    id: "study-usa",
    title: "Study in USA - Top Universities & Programs",
    description: "Discover world-class education in the USA. Expert guidance for American university admissions, student visas, and academic programs.",
    url: "/study-destinations/study-in-usa",
    category: "Study Destinations",
    tags: ["USA", "universities", "student visa", "admissions", "Harvard", "MIT", "Stanford"],
    lastModified: "2024-01-15",
    readTime: "8 min read"
  },
  {
    id: "study-canada",
    title: "Study in Canada - Top Universities & Programs",
    description: "Explore world-class education in Canada. Expert guidance for Canadian university admissions, student visas, and academic programs.",
    url: "/study-destinations/study-in-canada",
    category: "Study Destinations",
    tags: ["Canada", "universities", "study permit", "immigration", "Toronto", "McGill", "UBC"],
    lastModified: "2024-01-15",
    readTime: "7 min read"
  },
  {
    id: "study-uk",
    title: "Study in UK - Top Universities & Programs",
    description: "Experience prestigious education in the UK. Expert guidance for British university admissions, student visas, and academic programs.",
    url: "/study-destinations/study-in-uk",
    category: "Study Destinations",
    tags: ["UK", "British universities", "Tier 4 visa", "Oxford", "Cambridge", "Imperial College"],
    lastModified: "2024-01-15",
    readTime: "6 min read"
  },
  {
    id: "study-australia",
    title: "Study in Australia - Top Universities & Programs",
    description: "Discover excellent education in Australia. Expert guidance for Australian university admissions, student visas, and academic programs.",
    url: "/study-destinations/study-in-australia",
    category: "Study Destinations",
    tags: ["Australia", "universities", "subclass 500 visa", "Melbourne", "Sydney", "ANU"],
    lastModified: "2024-01-15",
    readTime: "7 min read"
  },
  {
    id: "study-germany",
    title: "Study in Germany - Top Universities & Programs",
    description: "Experience quality education in Germany. Expert guidance for German university admissions, student visas, and academic programs.",
    url: "/study-destinations/study-in-germany",
    category: "Study Destinations",
    tags: ["Germany", "German universities", "free education", "DAAD", "Munich", "Heidelberg"],
    lastModified: "2024-01-15",
    readTime: "6 min read"
  },
  {
    id: "study-ireland",
    title: "Study in Ireland - Top Universities & Programs",
    description: "Explore quality education in Ireland. Expert guidance for Irish university admissions, student visas, and academic programs.",
    url: "/study-destinations/study-in-ireland",
    category: "Study Destinations",
    tags: ["Ireland", "Irish universities", "EU education", "Trinity College", "UCD"],
    lastModified: "2024-01-15",
    readTime: "5 min read"
  },
  {
    id: "study-new-zealand",
    title: "Study in New Zealand - Top Universities & Programs",
    description: "Experience world-class education in New Zealand. Expert guidance for New Zealand university admissions, student visas, and academic programs.",
    url: "/study-destinations/study-in-new-zealand",
    category: "Study Destinations",
    tags: ["New Zealand", "universities", "post-study work visa", "Auckland", "Otago"],
    lastModified: "2024-01-15",
    readTime: "6 min read"
  },
  {
    id: "services",
    title: "Our Services - Study Abroad Consultation",
    description: "Comprehensive study abroad services including university selection, application assistance, visa guidance, and pre-departure support.",
    url: "/services",
    category: "Services",
    tags: ["consultation", "university selection", "visa assistance", "application support"],
    lastModified: "2024-01-10",
    readTime: "4 min read"
  },
  {
    id: "contact",
    title: "Contact Us - Get Expert Study Abroad Guidance",
    description: "Get in touch with our expert consultants for personalized study abroad guidance and support.",
    url: "/contact",
    category: "Contact",
    tags: ["contact", "consultation", "expert guidance", "support"],
    lastModified: "2024-01-05",
    readTime: "2 min read"
  },
  {
    id: "faq",
    title: "Frequently Asked Questions - Study Abroad",
    description: "Find answers to common questions about studying abroad, visa requirements, university applications, and more.",
    url: "/faq",
    category: "Resources",
    tags: ["FAQ", "questions", "visa requirements", "applications", "study abroad"],
    lastModified: "2024-01-08",
    readTime: "10 min read"
  }
];

const categories = ["All", "Study Destinations", "Services", "Resources", "Contact"];

// Search content component that uses useSearchParams
function SearchContent() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams?.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  // Filter and search logic
  const filteredResults = useMemo(() => {
    let results = searchData;

    // Filter by category
    if (selectedCategory !== "All") {
      results = results.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return results;
  }, [searchQuery, selectedCategory]);

  // Handle search input changes
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setIsLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Study Destinations":
        return <MapPin className="h-4 w-4" />;
      case "Services":
        return <Users className="h-4 w-4" />;
      case "Resources":
        return <BookOpen className="h-4 w-4" />;
      default:
        return <Search className="h-4 w-4" />;
    }
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Crest Study Consult",
            "url": "https://creststudyconsult.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://creststudyconsult.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": searchData.length,
              "itemListElement": searchData.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "WebPage",
                  "@id": `https://creststudyconsult.com${item.url}`,
                  "name": item.title,
                  "description": item.description,
                  "url": `https://creststudyconsult.com${item.url}`,
                  "dateModified": item.lastModified,
                  "keywords": item.tags.join(", "),
                  "about": {
                    "@type": "Thing",
                    "name": item.category
                  }
                }
              }))
            }
          })
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Search Our Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find information about study destinations, services, and resources to help you achieve your study abroad goals.
            </p>
          </motion.div>

          {/* Search Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <Card className="p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="text"
                    placeholder="Search for destinations, services, or topics..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="pl-10 pr-10 h-12 text-lg"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Category Filter */}
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-gray-500" />
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48 h-12">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Active Filters */}
              {(searchQuery || selectedCategory !== "All") && (
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-500">Active filters:</span>
                  {searchQuery && (
                    <Badge variant="secondary" className="gap-1">
                      Search: "{searchQuery}"
                      <button onClick={() => setSearchQuery("")}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  {selectedCategory !== "All" && (
                    <Badge variant="secondary" className="gap-1">
                      Category: {selectedCategory}
                      <button onClick={() => setSelectedCategory("All")}>
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearSearch}
                    className="text-xs"
                  >
                    Clear all
                  </Button>
                </div>
              )}

              {/* Results Count */}
              <div className="text-sm text-gray-600">
                {isLoading ? (
                  "Searching..."
                ) : (
                  `${filteredResults.length} result${filteredResults.length !== 1 ? 's' : ''} found`
                )}
              </div>
            </Card>
          </motion.div>

          {/* Search Results */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {isLoading ? (
              <div className="grid gap-4">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="p-6">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-4"></div>
                      <div className="flex gap-2">
                        <div className="h-6 bg-gray-200 rounded w-20"></div>
                        <div className="h-6 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="grid gap-4">
                {filteredResults.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 group">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {getCategoryIcon(result.category)}
                              <Badge variant="outline" className="text-xs">
                                {result.category}
                              </Badge>
                              {result.readTime && (
                                <div className="flex items-center gap-1 text-xs text-gray-500">
                                  <Clock className="h-3 w-3" />
                                  {result.readTime}
                                </div>
                              )}
                            </div>
                            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                              <Link href={result.url} className="flex items-center gap-2">
                                {result.title}
                                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base mb-4">
                          {result.description}
                        </CardDescription>
                        
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {result.tags.slice(0, 5).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {result.tags.length > 5 && (
                            <Badge variant="secondary" className="text-xs">
                              +{result.tags.length - 5} more
                            </Badge>
                          )}
                        </div>

                        <Separator className="mb-4" />
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-500">
                            Last updated: {new Date(result.lastModified).toLocaleDateString()}
                          </div>
                          <Button asChild variant="outline" size="sm">
                            <Link href={result.url}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <div className="max-w-md mx-auto">
                  <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any content matching your search criteria. Try adjusting your search terms or filters.
                  </p>
                  <Button onClick={clearSearch} variant="outline">
                    Clear Search
                  </Button>
                </div>
              </Card>
            )}
          </motion.div>

          {/* SEO Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-12"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Find Your Perfect Study Abroad Destination
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 mb-4">
                  Use our comprehensive search to explore study destinations, services, and resources. 
                  Whether you're looking for information about studying in the USA, Canada, UK, Australia, 
                  Germany, Ireland, or New Zealand, our search engine will help you find exactly what you need.
                </p>
                <p className="text-gray-600">
                  Our search covers university information, visa requirements, application processes, 
                  living costs, scholarship opportunities, and much more. Start your study abroad journey 
                  with the right information at your fingertips.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}

// Loading component for Suspense fallback
function SearchLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-12 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="w-48 h-12 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main SearchPage component with Suspense boundary
export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchContent />
    </Suspense>
  );
}