'use client';
import { useState, useEffect } from 'react';
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import { motion } from "framer-motion";
import {
  Shield, 
  FileText, 
  Users, 
  Database, 
  Lock, 
  Mail, 
  BookOpen
} from "lucide-react";
import Link from "next/link";
import Head from "next/head";

const privacyPolicySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Crest Study Consult Privacy Policy",
  "author": {
    "@type": "Organization",
    "name": "Crest Study Consult"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Crest Study Consult",
    "logo": {
      "@type": "ImageObject",
      "url": "https://creststudyconsult.com/crest-logo.png"
    }
  },
  "datePublished": "2025-09-11",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://creststudyconsult.com/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const privacySections = [
    {
      icon: "Shield",
      title: "Privacy Snapshot",
      content: [
        "At Crest Study Consult, your privacy is our priority. We collect and use your personal information only to provide study abroad services such as university admissions, visa applications, and scholarship guidance. Your data is kept secure, shared only with trusted partners when necessary, and never sold. You also have the right to access, correct, or request deletion of your information under the Nigeria Data Protection Act, 2023 (NDPA).",
        "<a href='#full-notice' class='text-[#62b514] hover:underline'>[Read our full Privacy Notice here]</a>"
      ],
    },
    {
      icon: "BookOpen",
      title: "Introduction",
      content: [
        "We understand that your privacy matters. Crest Study Consult is committed to protecting your personal information and complying with all relevant data protection laws, including the NDPA.",
        "Our approach is simple:",
        "<ul><li class='list-disc ml-6'>We only collect the information necessary to provide our services.</li><li class='list-disc ml-6'>We explain clearly how your data is used—no surprises.</li><li class='list-disc ml-6'>We do not keep your data longer than necessary.</li><li class='list-disc ml-6'>We do not share your information with third parties for marketing without your consent.</li></ul>",
        "This Privacy Policy explains how we handle your personal information when you use our services."
      ],
    },
    {
      icon: "Users",
      title: "Who We Are",
      content: [
        "Crest Study Consult is an education consultancy firm helping students pursue international study opportunities. Our services include counselling, admissions, visa support, scholarship guidance, and related student services.",
        "As a Data Controller, we decide how and why your personal data is processed. In certain cases, we may also act as a joint Data Controller with universities, embassies, and service providers where applications and compliance require shared responsibility.",
        "<b>Contact Details</b><br>Data Protection Officer (DPO)<br>📧 privacyofficer@creststudyconsult.com<br>📍 [Insert Office Address]<br>📞 [Insert Phone Number]"
      ],
    },
    {
      icon: "FileText",
      title: "Information We Collect",
      content: [
        "We may collect the following information:",
        "<ul><li class='list-disc ml-6'><b>Personal details:</b> Name, nationality, date of birth, passport details.</li><li class='list-disc ml-6'><b>Contact details:</b> Email, phone, address.</li><li class='list-disc ml-6'><b>Academic records:</b> Certificates, transcripts, test scores.</li><li class='list-disc ml-6'><b>Financial details:</b> Sponsorship or bank information (when required for visa/university applications).</li><li class='list-disc ml-6'><b>Sensitive data (only when required):</b> Health or medical information for visa or school compliance.</li></ul>"
      ],
    },
    {
      icon: "Database",
      title: "How We Use Your Data",
      content: [
        "We use your information to:",
        "<ul><li class='list-disc ml-6'>Process admissions and visa applications.</li><li class='list-disc ml-6'>Connect you to scholarships, institutions, and support services.</li><li class='list-disc ml-6'>Provide study abroad counselling and guidance.</li><li class='list-disc ml-6'>Keep you informed of your application progress.</li><li class='list-disc ml-6'>Comply with legal and regulatory obligations.</li></ul>",
        "We will never sell your data."
      ],
    },
    {
      icon: "Users",
      title: "Who We Share Your Data With",
      content: [
        "We may share data with:",
        "<ul><li class='list-disc ml-6'>Universities, colleges, and schools.</li><li class='list-disc ml-6'>Embassies and visa application centres.</li><li class='list-disc ml-6'>Scholarship and funding organizations.</li><li class='list-disc ml-6'>Trusted service providers (cloud storage, CRM, IT support).</li></ul>",
        "All partners and processors are required to comply with strict data protection standards."
      ],
    },
    {
      icon: "Database",
      title: "Data Retention",
      content: [
        "We retain your personal data only as long as necessary:",
        "<ul><li class='list-disc ml-6'>Admissions and visa-related data: up to 5–7 years.</li><li class='list-disc ml-6'>Legal or regulatory data: as required by law.</li></ul>",
        "After this period, data will be securely deleted or anonymized."
      ],
    },
    {
      icon: "Users",
      title: "Your Rights",
      content: [
        "You have the right to:",
        "<ul><li class='list-disc ml-6'>Access and request a copy of your data.</li><li class='list-disc ml-6'>Correct or update inaccurate information.</li><li class='list-disc ml-6'>Request deletion of data where applicable.</li><li class='list-disc ml-6'>Restrict or object to processing.</li><li class='list-disc ml-6'>Request data portability.</li><li class='list-disc ml-6'>Withdraw consent at any time.</li></ul>",
        "To exercise your rights, contact: privacyofficer@creststudyconsult.com"
      ],
    },
    {
      icon: "Lock",
      title: "How We Protect Your Data",
      content: [
        "We use technical and organizational safeguards including:",
        "<ul><li class='list-disc ml-6'>Encryption and secure cloud systems.</li><li class='list-disc ml-6'>Restricted access controls.</li><li class='list-disc ml-6'>Staff training on data handling.</li><li class='list-disc ml-6'>Confidential storage of physical files.</li></ul>"
      ],
    },
    {
      icon: "Database",
      title: "Data Transfers",
      content: [
        "Some of our partners (universities, embassies, service providers) are based outside Nigeria. Whenever your data is transferred internationally, we ensure it is protected through contracts and safeguards."
      ],
    },
    {
      icon: "BookOpen",
      title: "Cookies & Website Data",
      content: [
        "We use cookies and tracking technologies to improve your experience. For details, please see our <a href='/cookie-policy' class='text-[#62b514] hover:underline'>[Cookie Policy]</a>."
      ],
    },
    {
      icon: "Mail",
      title: "Complaints & Contact",
      content: [
        "If you have concerns about how your data is handled, contact our DPO at privacyofficer@creststudyconsult.com.",
        "If you are unsatisfied, you may escalate the matter to the Nigeria Data Protection Commission (NDPC): www.ndpc.gov.ng"
      ],
    },
    {
      icon: "FileText",
      title: "Updates to this Policy",
      content: [
        "This policy may be updated from time to time. The latest version will always be published on our website."
      ],
    },
  ];

  const IconComponent = ({ iconName }: { iconName: string }) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="w-6 h-6 text-[#62b514]" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-[#DAA520]" />;
      case "Users":
        return <Users className="w-6 h-6 text-[#62b514]" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-[#DAA520]" />;
      case "Database":
        return <Database className="w-6 h-6 text-[#62b514]" />;
      case "Lock":
        return <Lock className="w-6 h-6 text-[#DAA520]" />;
      case "Mail":
        return <Mail className="w-6 h-6 text-[#62b514]" />;
      default:
        return null;
    }
  };


  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyPolicySchema) }}
        />
      </Head>
      <Header />
      <main className="bg-gray-50 min-h-screen" id="full-notice">
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
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Your privacy is important to us. Here’s how we protect your data.
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
              {privacySections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  className="mb-12 bg-white p-8 rounded-lg shadow-md border border-gray-200/80"
                >
                  <div className="flex items-center mb-6">
                    <IconComponent iconName={section.icon} />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 ml-4">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    {isClient && section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
}
