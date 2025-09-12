"use client";

import { motion } from "framer-motion";
import { useConsentModal } from "@/hooks/use-consent-modal";
import { Button } from "@/components/ui/button";
import {
  PolicyLayout,
  PolicyHero,
  PolicyContent,
  PolicySection,
  PolicyContact,
} from "@/components/policy";
import {
  Cookie,
  Shield,
  Users,
  Settings,
  Globe,
  AlertTriangle,
} from "lucide-react";

export default function CookiePolicy() {
  const { openModal } = useConsentModal();

  const cookieSections = [
    {
      title: "What Are Cookies?",
      icon: <Cookie className="w-6 h-6" />,
      content:
        "Cookies are small text files stored on your device (computer, tablet, or phone) when you visit a website. They help websites function properly, remember your preferences, and improve user experience.",
    },
    {
      title: "Types of Cookies We Use",
      icon: <Shield className="w-6 h-6" />,
      content: `We use the following categories of cookies:

        • **Strictly Necessary Cookies**: These are essential for our website to function (e.g., security, load balancing, form submissions). Without them, some services cannot be provided.

        • **Performance & Analytics Cookies**: Collect information about how visitors use our site (e.g., pages visited, time spent). Help us improve site performance and content.

        • **Functionality Cookies**: Remember your preferences (e.g., language, study destination interests). Enhance personalization of services.

        • **Targeting & Advertising Cookies**: Used to show relevant study abroad services, events, or partner ads. May be placed by third parties like Google or Facebook.`,
    },
    {
      title: "Third-Party Cookies",
      icon: <Globe className="w-6 h-6" />,
      content: `Some cookies may be set by trusted third parties to deliver services such as:

• Website analytics (Google Analytics, Meta Pixel)
• Social media integrations (Facebook, LinkedIn)
• Advertising and retargeting platforms

We do not control these third-party cookies. Please check their privacy policies for details.`,
    },
    {
      title: "How We Use Cookies",
      icon: <Users className="w-6 h-6" />,
      content: `Cookies help us:

• Keep our website secure and functional
• Understand how users interact with our site
• Personalize counselling session offers and content
• Provide targeted information about universities, scholarships, and visa services`,
    },
    {
      title: "Managing Your Cookie Preferences",
      icon: <Settings className="w-6 h-6" />,
      content: `You can manage your cookie choices in the following ways:

**On Our Website:**
Use the Cookie Consent Banner at the bottom of the page to Accept All, Reject Non-Essential, or Customize Settings.

**Through Your Browser:**
Most browsers allow you to block or delete cookies in settings. Examples:

• Chrome: Settings > Privacy and Security > Cookies
• Safari: Preferences > Privacy > Manage Website Data
• Firefox: Options > Privacy & Security > Cookies and Site Data

Blocking cookies may affect site performance and limit features.`,
    },
    {
      title: "Updates to This Policy",
      icon: <AlertTriangle className="w-6 h-6" />,
      content:
        "We may update this Cookie Policy from time to time to reflect changes in technology, law, or our practices. The latest version will always be available on our website.",
    },
  ];

  const contactInfo = {
    title: "Contact Us",
    description:
      "For questions about this Cookie Policy or how we use cookies:",
    email: "privacyofficer@creststudyconsult.com",
    phone: "[Insert Phone]",
    address: "Data Protection Officer (DPO)\nCrest Study Consult",
  };

  return (
    <PolicyLayout>
      <PolicyHero
        title="Cookie Policy"
        description="At Crest Study Consult, we use cookies and similar technologies to enhance your browsing experience, provide personalized study abroad recommendations, and analyze website traffic. This Cookie Policy explains what cookies are, how we use them, and how you can manage your cookie preferences."
        effectiveDate="September 12, 2025"
        icon={Cookie}
      />

      <PolicyContent>
        {cookieSections.map((section, index) => (
          <PolicySection
            key={index}
            title={section.title}
            icon={section.icon}
            content={section.content}
            index={index}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: cookieSections.length * 0.1 }}
          className="mb-12 text-center"
        >
          <Button
            onClick={openModal}
            className="bg-[#62b514] hover:bg-[#62b514]/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Open Cookie Preferences Panel
          </Button>
        </motion.div>

        <PolicyContact
          contactInfo={contactInfo}
          index={cookieSections.length + 1}
        />
      </PolicyContent>
    </PolicyLayout>
  );
}
