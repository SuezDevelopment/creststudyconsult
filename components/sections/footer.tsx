import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {},
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact"
      className="bg-[#313b3d] text-white py-16 w-full flex flex-col items-center"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-5"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Image
                src="/crest-logo.png"
                alt="Crest Study Consult"
                width={62}
                height={62}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#62b514]">CREST</span>
                <span className="text-xs font-medium text-gray-300">
                  STUDY CONSULT
                </span>
              </div>
            </motion.div>
            <p className="text-gray-400">
              Your trusted partner for international education. Guiding students
              to achieve their study abroad dreams.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#DAA520] transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {[
            {
              title: "Services",
              links: [
                "University Selection",
                "Application Support",
                "Visa Assistance",
                "Test Preparation",
              ],
            },
            {
              title: "Destinations",
              links: ["USA", "Canada", "Australia", "UK"],
            },
            {
              title: "Support",
              links: ["Contact Us", "Student Portal", "Resources", "FAQ"],
            },
          ].map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-[#DAA520]">
                {section.title}
              </h4>
              <div className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.div
                    key={link}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href="#"
                      className="block text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                    >
                      {link}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-[#DAA520]">Visit Us</h4>
            <div className="space-y-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h5 className="text-sm font-semibold text-white">
                  Lagos Office
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  33B Akin Adesola St,
                  <br />
                  Victoria Island, Lagos 106104,
                  <br />
                  Lagos
                </p>
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h5 className="text-sm font-semibold text-white">
                  Ibadan Office
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  16 Yawuri Akobo,
                  <br />
                  Ojurin, Ibadan,
                  <br />
                  Oyo
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Crest Study Consult. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link, index) => (
                <motion.div
                  key={link}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-[#DAA520] text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
