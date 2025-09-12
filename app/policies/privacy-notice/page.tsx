"use client";

import { Shield, Eye, Lock, Users, Clock, FileText } from "lucide-react";
import { PolicyHero, PolicySection, PolicyContact, PolicyLayout, PolicyContent } from "@/components/policy";

export default function PrivacyNoticePage() {
  const privacyContent = [
    {
      title: "Who We Are",
      icon: <Users className="w-6 h-6" />,
      content: `Crest Study Consult is a study abroad advisory firm that helps students and families with:\n\n• University admissions\n• Visa applications\n• Scholarship opportunities\n• Counselling and guidance services\n\nWe act as a Data Controller, which means we decide how your personal data is collected and used.`
    },
    {
      title: "What Data We Collect",
      icon: <FileText className="w-6 h-6" />,
      content: `When you use our services, we may collect:\n\n• Personal Identification: Full name, nationality, date of birth, passport details\n• Contact Details: Phone number, email, home address\n• Academic Information: Transcripts, certificates, test scores (IELTS, TOEFL, GRE, etc.)\n• Financial Information: Bank statements, sponsorship/guardian details, scholarship records\n• Other Information: Health or disability status (if required by universities/embassies)`
    },
    {
      title: "How We Use Your Data",
      icon: <Eye className="w-6 h-6" />,
      content: `We use your personal data to:\n\n• Process university and visa applications\n• Connect you with scholarships and funding opportunities\n• Provide study abroad counselling and advisory services\n• Communicate with you about your applications and progress\n• Comply with legal or regulatory requirements\n\nWe will never sell your personal data.`
    },
    {
      title: "Who We Share Your Data With",
      icon: <Users className="w-6 h-6" />,
      content: `We may share your information with:\n\n• Universities and Colleges Abroad (for admission processing)\n• Embassies and Visa Application Centres (for visa submissions)\n• Scholarship and Funding Bodies (for financial aid applications)\n• Technology Providers (secure cloud storage, CRM systems, payment processors)\n\nAll partners and processors are required to keep your data safe and confidential.`
    },
    {
      title: "How Long We Keep Your Data",
      icon: <Clock className="w-6 h-6" />,
      content: `We keep your data only as long as necessary:\n\n• Academic and visa application data: up to 5 years after your service ends\n• Financial and support documents: as long as legally required\n\nAfter this, your data will be securely deleted or anonymized.`
    },
    {
      title: "Your Rights as a Data Subject",
      icon: <Shield className="w-6 h-6" />,
      content: `Under the NDPA, you have the right to:\n\n• Request access to your data\n• Correct or update inaccurate information\n• Request deletion of your data (where applicable)\n• Restrict or object to certain processing\n• Request transfer of your data to another institution (data portability)\n\nTo exercise your rights, email us at: [Insert Official Data Protection Email]`
    },
    {
      title: "How We Protect Your Data",
      icon: <Lock className="w-6 h-6" />,
      content: `We use technical and organizational safeguards, including:\n\n• Encryption for digital data storage\n• Password-protected access controls\n• Secure cloud platforms\n• Staff training on data protection\n• Confidential handling of physical files`
    },
    {
      title: "Data Breaches",
      icon: <Shield className="w-6 h-6" />,
      content: `If your data is compromised in any way:\n\n• We will take immediate steps to secure it\n• We will notify you and the Nigeria Data Protection Commission (NDPC) within 72 hours if the breach poses significant risk`
    },
    {
      title: "Updates to this Privacy Notice",
      icon: <FileText className="w-6 h-6" />,
      content: `We may update this notice from time to time to reflect changes in law or our practices. The latest version will always be available on our website.`
    }
  ];

  return (
    <PolicyLayout>
      <PolicyHero
        title="Privacy Notice"
        description="At Crest Study Consult, we care about your privacy. This notice explains how we collect, use, share, and protect your personal data in line with the Nigeria Data Protection Act, 2023 (NDPA)."
        icon={Shield}
        effectiveDate="[Insert Date]"
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
        
        <PolicyContact />
      </PolicyContent>
    </PolicyLayout>
  );
}