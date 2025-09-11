"use client";

import FooterSection from "@/components/sections/footer";
import Header from "@/components/sections/header";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

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

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20 md:py-32 bg-gradient-to-br from-[#62b514]/10 via-white to-[#DAA520]/10"
        >
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center items-center mb-4"
            >
              <ShieldAlert className="w-12 h-12 text-[#DAA520]" />
            </motion.div>
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-gray-900"
            >
              Disclaimer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Please read our disclaimer carefully before using our website.
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
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md border border-gray-200/80">
              {disclaimerText.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-[#62b514] pb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <FooterSection />
    </>
  );
}
