"use client";

import { PolicyLayout, PolicyHero, PolicyContent, PolicySection, PolicyContact } from "@/components/policy";
import { AlertTriangle, Shield, FileText, Users, Globe, Info } from "lucide-react";

export default function DisclaimerPage() {
  const disclaimerText = [
    {
      title: "Accuracy of Information",
      content: `While Crest Study Consult has attempted to make the information on this server as accurate as possible, the information on this website server is for personal and/or educational use only and is provided in good faith without any express or implied warranty. There is no guarantee given as to the accuracy or currency of any individual item on the website.`,
    },
    {
      title: "Confirmation of Information",
      content: `Persons accessing the website who require confirmation of any information should refer to Crest Study Consult’s sourcing the information for this website. Crest Study Consult does not accept responsibility for any loss or damage occasioned by use of the information contained on the server nor from any access to the server. While Crest Study Consult will make every effort to ensure the availability and integrity of its resources, it cannot guarantee that these will always be available, and/or free of any defects, including viruses. Users should take this into account when accessing the resources. All access and use is at the risk of the user.`,
    },
    {
      title: "External Links",
      content: `Crest Study Consult has provided hypertext links to a number of other websites as a service to users of this website. This service does not mean that Crest Study Consult endorses those sites or material on them in any way. Crest Study Consult is not responsible for the use of a hypertext link for which a commercial charge applies. Individual users are responsible for any charges that their use may incur.`,
    },
  ];

  const disclaimerSections = disclaimerText.map((section, index) => {
    const icons = [Shield, FileText, Users, Globe, Info, AlertTriangle];
    return {
      title: section.title,
      icon: icons[index % icons.length],
      content: section.content
    };
  });

  const contactInfo = {
    title: "Contact Us",
    description: "For questions about this disclaimer or our services:",
    email: "info@creststudyconsult.com",
    phone: "+234 (0) 123 456 7890",
    address: "Crest Study Consult\nLagos, Nigeria"
  };

  return (
    <PolicyLayout>
      <PolicyHero
        title="Disclaimer"
        description="Please read our disclaimer carefully before using our website and services. This disclaimer outlines the terms and conditions of use for Crest Study Consult's website and services."
        effectiveDate="Last Updated: September 12, 2025"
        icon={AlertTriangle}
      />
      
      <PolicyContent>
        {disclaimerSections.map((section, index) => (
          <PolicySection
            key={index}
            title={section.title}
            icon={<section.icon className="w-6 h-6" />}
            content={section.content}
            index={index}
          />
        ))}
        
        <PolicyContact
          contactInfo={contactInfo}
          index={disclaimerSections.length}
        />
      </PolicyContent>
    </PolicyLayout>
  );
}
