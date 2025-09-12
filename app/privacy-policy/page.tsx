"use client";

import { PolicyLayout, PolicyHero, PolicyContent, PolicySection, PolicyContact } from "@/components/policy";
import { Shield, Eye, Lock, Users, Clock, FileText, Mail, Phone, MapPin, UserCheck, Database, Share2, Trash2, Download, AlertTriangle } from "lucide-react";

export default function PrivacyPolicyPage() {
  const privacyContent = [
    {
      title: "Privacy Snapshot",
      icon: <Eye className="w-6 h-6" />,
      content: `At Crest Study Consult, your privacy is our priority. We collect and use your personal information only to provide study abroad services such as university admissions, visa applications, and scholarship guidance. Your data is kept secure, shared only with trusted partners when necessary, and never sold. You also have the right to access, correct, or request deletion of your information under the Nigeria Data Protection Act, 2023 (NDPA).`
    },
    {
      title: "Introduction",
      icon: <FileText className="w-6 h-6" />,
      content: `We understand that your privacy matters. Crest Study Consult is committed to protecting your personal information and complying with all relevant data protection laws, including the NDPA.\n\nOur approach is simple:\n\n• We only collect the information necessary to provide our services\n• We explain clearly how your data is used—no surprises\n• We do not keep your data longer than necessary\n• We do not share your information with third parties for marketing without your consent\n\nThis Privacy Policy explains how we handle your personal information when you use our services.`
    },
    {
      title: "Who We Are",
      icon: <Users className="w-6 h-6" />,
      content: `Crest Study Consult is an education consultancy firm helping students pursue international study opportunities. Our services include counselling, admissions, visa support, scholarship guidance, and related student services.\n\nAs a Data Controller, we decide how and why your personal data is processed. In certain cases, we may also act as a joint Data Controller with universities, embassies, and service providers where applications and compliance require shared responsibility.`
    },
    {
      title: "Information We Collect",
      icon: <Database className="w-6 h-6" />,
      content: `We may collect the following information:\n\n• Personal details: Name, nationality, date of birth, passport details\n• Contact details: Email, phone, address\n• Academic records: Certificates, transcripts, test scores\n• Financial details: Sponsorship or bank information (when required for visa/university applications)\n• Sensitive data (only when required): Health or medical information for visa or school compliance`
    },
    {
      title: "How We Use Your Data",
      icon: <UserCheck className="w-6 h-6" />,
      content: `We use your information to:\n\n• Process admissions and visa applications\n• Connect you to scholarships, institutions, and support services\n• Provide study abroad counselling and guidance\n• Keep you informed of your application progress\n• Comply with legal and regulatory obligations\n\nWe will never sell your data.`
    },
    {
      title: "Who We Share Your Data With",
      icon: <Share2 className="w-6 h-6" />,
      content: `We may share data with:\n\n• Universities, colleges, and schools\n• Embassies and visa application centres\n• Scholarship and funding organizations\n• Trusted service providers (cloud storage, CRM, IT support)\n\nAll partners and processors are required to comply with strict data protection standards.`
    },
    {
      title: "Data Retention",
      icon: <Clock className="w-6 h-6" />,
      content: `We retain your personal data only as long as necessary:\n\n• Admissions and visa-related data: up to 5–7 years\n• Legal or regulatory data: as required by law\n\nAfter this period, data will be securely deleted or anonymized.`
    },
    {
      title: "Your Rights",
      icon: <Shield className="w-6 h-6" />,
      content: `You have the right to:\n\n• Access and request a copy of your data\n• Correct or update inaccurate information\n• Request deletion of data where applicable\n• Restrict or object to processing\n• Request data portability\n• Withdraw consent at any time\n\nTo exercise your rights, contact: privacyofficer@creststudyconsult.com`
    },
    {
      title: "How We Protect Your Data",
      icon: <Lock className="w-6 h-6" />,
      content: `We use technical and organizational safeguards including:\n\n• Encryption and secure cloud systems\n• Restricted access controls\n• Staff training on data handling\n• Confidential storage of physical files`
    },
    {
      title: "Data Transfers",
      icon: <Download className="w-6 h-6" />,
      content: `Some of our partners (universities, embassies, service providers) are based outside Nigeria. Whenever your data is transferred internationally, we ensure it is protected through contracts and safeguards.`
    },
    {
      title: "Cookies & Website Data",
      icon: <Eye className="w-6 h-6" />,
      content: `We use cookies and tracking technologies to improve your experience. For details, please see our Cookie Policy.`
    },
    {
      title: "Updates to this Policy",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: `This policy may be updated from time to time. The latest version will always be published on our website.`
    }
  ];

  const contactInfo = {
    title: "Contact Information",
    description: "For privacy-related questions or concerns, contact us at:",
    email: "privacyofficer@creststudyconsult.com",
    phone: "+234 812 345 6789",
    address: "123 Education Street\nLagos, Nigeria",
    additionalInfo: "If you have questions about this Privacy Policy or how we handle your data, please don't hesitate to contact us. We're here to help and ensure your privacy is protected."
  };

  return (
    <PolicyLayout>
      <PolicyHero
        title="Privacy Policy"
        description="Your privacy matters to us. Learn how we collect, use, and protect your personal information in compliance with data protection laws including the Nigeria Data Protection Act, 2023 (NDPA)."
        effectiveDate="Last Updated: September 12, 2025"
        icon={Shield}
      />
      
      <PolicyContent>
        {privacyContent.map((section, index) => (
          <PolicySection
            key={index}
            title={section.title}
            icon={section.icon}
            content={section.content}
            index={index}
          />
        ))}
        
        <PolicyContact
          contactInfo={contactInfo}
          index={privacyContent.length}
        />
      </PolicyContent>
    </PolicyLayout>
  );
}