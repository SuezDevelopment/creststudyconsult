"use client";
import FooterSection from "@/components/sections/footer";
import Header from "@/components/sections/header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  HelpCircle,
  BookOpen,
  CheckCircle,
  DollarSign,
  Plane,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import Head from "next/head";

const faqData = {
  "General Study Abroad FAQs": {
    icon: <HelpCircle className="w-6 h-6 text-[#62b514]" />,
    faqs: [
      {
        question: "What services does Crest Study Consult provide?",
        answer:
          "We help students with university selection, application processing, visa guidance, travel preparation, and scholarship advice for top destinations like the UK, USA, Canada, Australia, New Zealand, Germany, and Ireland.",
      },
      {
        question:
          "Why should I use a study abroad consultant instead of applying directly?",
        answer:
          "Working with a consultant saves time, reduces mistakes, and increases your admission and visa approval chances. At Crest Study Consult, our experts guide you step-by-step to ensure your application stands out.",
      },
      {
        question: "Which countries can I study abroad with your support?",
        answer:
          "We currently support students applying to universities in the United Kingdom, United States, Canada, Australia, New Zealand, Germany, and Ireland.",
      },
    ],
  },
  "Admission & Application FAQs": {
    icon: <BookOpen className="w-6 h-6 text-[#DAA520]" />,
    faqs: [
      {
        question: "What are the requirements to study abroad?",
        answer:
          "Requirements vary by country and program but generally include academic transcripts, proof of English proficiency (IELTS/TOEFL), recommendation letters, and a statement of purpose. Our team helps you prepare all required documents.",
      },
      {
        question:
          "Can I apply to study abroad with a second-class or lower grade?",
        answer:
          "Yes, there are universities that accept students with lower GPAs, provided other factors (like strong personal statements or relevant experience) strengthen your application.",
      },
      {
        question: "When should I start my study abroad application?",
        answer:
          "We recommend starting 12–18 months before your intended intake to allow enough time for applications, visa processes, and scholarships.",
      },
    ],
  },
  "Visa & Immigration FAQs": {
    icon: <Plane className="w-6 h-6 text-[#62b514]" />,
    faqs: [
      {
        question: "How do you assist with student visa applications?",
        answer:
          "We provide complete guidance on preparing visa documents, mock interview training, and application filing to ensure the best chance of approval.",
      },
      {
        question: "What are the chances of getting my student visa approved?",
        answer:
          "With Crest Study Consult, our students achieve a 98% visa success rate due to careful documentation and preparation.",
      },
    ],
  },
  "Financial & Scholarship FAQs": {
    icon: <DollarSign className="w-6 h-6 text-[#DAA520]" />,
    faqs: [
      {
        question: "Can I get a scholarship to study abroad?",
        answer:
          "Yes. We guide you through available scholarships from universities, governments, and private organizations. Many partial and full scholarships are available for Nigerian and African students.",
      },
      {
        question: "How much does it cost to study abroad?",
        answer: `Tuition fees vary depending on the country and program. On average:

            *   UK: £10,000–£20,000/year
            *   Canada: CAD 15,000–25,000/year
            *   USA: $15,000–$35,000/year

            Our counsellors provide detailed cost estimates tailored to your chosen university.`,
      },
    ],
  },
  "After Admission FAQs": {
    icon: <GraduationCap className="w-6 h-6 text-[#62b514]" />,
    faqs: [
      {
        question: "Can I work while studying abroad?",
        answer:
          "Yes. Most countries allow international students to work part-time (usually 20 hours per week) during term and full-time during holidays.",
      },
      {
        question: "Do you provide support after I arrive abroad?",
        answer:
          "Yes. We offer pre-departure orientation, airport pickup (where available), and connect students with alumni networks for easier integration.",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: Object.values(faqData)
    .flatMap((category) => category.faqs)
    .map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
};

export default function FaqPage() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20 md:py-32 bg-gradient-to-br from-[#62b514]/10 via-white to-[#DAA520]/10"
        >
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Find answers to common questions about studying abroad with Crest
              Study Consult.
            </motion.p>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="py-16"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {Object.entries(faqData).map(([category, { icon, faqs }]) => (
                <div key={category} className="mb-12">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex items-center mb-6"
                  >
                    {icon}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ml-4">
                      {category}
                    </h2>
                  </motion.div>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-4"
                  >
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      >
                        <AccordionItem
                          value={`item-${index}`}
                          className="bg-white rounded-lg shadow-md border border-gray-200/80 overflow-hidden"
                        >
                          <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-gray-800 hover:bg-gray-50 px-6 py-4">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: faq.answer.replace(/<br>/g, "<br />"),
                              }}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
        x
      </main>
      <FooterSection />
    </>
  );
}
