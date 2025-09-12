"use client";

import {
  ShieldCheck,
  FileText,
  Users,
  MessageSquare,
  Info,
} from "lucide-react";
import { PolicyHero, PolicySection, PolicyLayout, PolicyContent } from "@/components/policy";

const termsSections = [
  {
    icon: <FileText className="w-6 h-6 text-[#62b514]" />,
    title: "Website Terms of Use",
    content: [
      "Please read these Terms of Use carefully as they apply to your use of the Crest Study Consult Ltd website ('Website').",
      "By using the Website, you agree to be bound by these Terms of Use which form a legally binding agreement between you and Crest Study Consult Ltd. If you do not want to be bound by these Terms of Use, do not continue to use this Website.",
      "Further, we may amend these Terms of Use at any time. Your continued use of the Website is considered to be acceptance of the amended Terms of Use.",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#DAA520]" />,
    title: "Disclaimer",
    content: [
      "Crest Study Consult Ltd ('Crest Study Consult') tries to make the information published on this website as accurate as possible. However, the information on this website is provided on an “as is” basis without any express or implied warranty. There is no guarantee given as to the accuracy or currency of any individual item on this website.",
      "Persons accessing the website who require confirmation of information should refer to Crest Study Consult Ltd’s source for information on this website or should contact an Crest Study Consult representative. Crest Study Consult does not accept responsibility for any loss or damage occasioned by use of the information published on the website nor from any access to the website. All access and use is at the risk of the user. Crest Study Consult makes no representation that this website or any linked website is free from viruses, malware, Trojan horses etc. We recommend that you obtain appropriate virus protection and check for such viruses before accessing or downloading any content.",
    ],
  },
  {
    icon: <FileText className="w-6 h-6 text-[#62b514]" />,
    title: "Crest Study Consult Copyright",
    content: [
      "The material on this Website, including all information such as text, graphics, images, photographs and sound, is protected by copyright pursuant to the COPYRIGHT ACT, 2022, as amended from time to time and the laws of other countries. You must not alter, reproduce, store in retrieval system or transmit the material on this Website or any part thereof, unless authorised by Crest Study Consult Ltd in writing or permitted by the COPYRIGHT ACT, 2022.",
    ],
  },
  {
    icon: <Users className="w-6 h-6 text-[#DAA520]" />,
    title: "User-generated Content Terms of Use",
    content: [
      "Please read these Terms of Use carefully, as they apply to your submitting content to Crest Study Consult Ltd ('Crest Study Consult') social networks, websites and other forms of media ('User-generated Websites').",
      "When you Submit Content to a User-generated Website, you accept and agree to be bound by these Terms of Use, which form a legally binding agreement between you and Crest Study Consult. If you do not want to be bound by these Terms of Use, do not Submit Content.",
    ],
  },
  {
    icon: <Info className="w-6 h-6 text-[#62b514]" />,
    title: "Migration Preliminary Consultation - Information",
    content: [
      "Your Consultation will comprise one initial consultation of up to one hour to discuss visa options based on your goals, eligibility, background and needs.",
      "Our services are limited to the Consultation described above. If you have already had a Consultation or otherwise wish to engage Crest Study Consult Ltd to provide any further assistance, such as assisting you to prepare and lodge your visa application, reviewing application forms or checking documents we will provide you with a new Visa Services Agreement which will apply in relation to those services.",
      "Our initial Consultation is currently offered free of charge. We reserve the right to introduce a fee for this service in the future.",
      "If you engage us to provide further assistance, the fees for that assistance will be set out in a new Visa Services Agreement.",
      "No external fees or disbursements are payable at the Consultation stage.",
      "If you no longer wish to proceed with the Consultation, please notify us during regular business hours at least 24 hours before your appointment to cancel. While there is no fee for the consultation, timely cancellation allows us to offer the slot to others. No-shows or cancellations with less than the required notice may affect your ability to book future free consultations.",
    ],
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-[#DAA520]" />,
    title: "Other Important Information",
    content: [
      "We are committed to complying with the NIGERIA DATA PROTECTION ACT 2023 (NDA) and the Nigerian Privacy Principles in relation to all Personal Information and Sensitive Information that we collect from you.",
      "Our Privacy Policy, available at <a href='https://creststudyconsult.com/privacy-policy/' target='_blank' rel='noopener noreferrer' className='text-[#62b514] hover:underline'>https://creststudyconsult.com/privacy-policy/</a>, contains important information about our obligations and your rights. By using our Services, you consent to the terms set out in our Privacy Policy.",
      "Any documents collected from you at your Consultation will be kept on file, along with a record of any instructions you give us and any advice we give you. This information, together with any other documents we are required to keep on your file will be retained for a period of seven (7) years following the end of our services (either under this Agreement or a new Visa Services Agreement) after which time your file will be destroyed.",
      "Any complaints should be directed to your Contact Person. We will endeavour to resolve any issues promptly and courteously.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <PolicyLayout>
      <PolicyHero
        title="Terms of Use"
        description="Please read our terms of use carefully before using our website."
        effectiveDate="[Insert Date]"
      />
      
      <PolicyContent>
        {termsSections.map((section, index) => (
          <PolicySection
            key={index}
            title={section.title}
            icon={section.icon}
            content={section.content}
            index={index}
            useHtml={true}
          />
        ))}
      </PolicyContent>
    </PolicyLayout>
  );
}
