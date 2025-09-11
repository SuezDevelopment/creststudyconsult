import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 md:py-32 w-full flex flex-col items-center bg-gradient-to-r from-[#62b514] via-[#DAA520] to-[#62b514] text-white relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-black/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(218,165,32,0.2) 50%, rgba(0,0,0,0.1) 100%)",
              "linear-gradient(45deg, rgba(218,165,32,0.2) 0%, rgba(0,0,0,0.1) 50%, rgba(218,165,32,0.2) 100%)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />

        <div className="container px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            >
              Ready to Start Your Study Abroad Journey?
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-green-100"
            >
              Join thousands of students who have achieved their international
              education dreams with Crest Study Consult. Book your free
              consultation today and take the first step towards your global
              future.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 bg-white text-[#62b514] hover:bg-gray-100 shadow-xl"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Book Your Free Consultation Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>

              {/* <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-[#62b514] bg-transparent shadow-xl"
                >
                  Download Brochure
                </Button>
              </motion.div> */}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-sm text-green-200"
            >
              Free consultation • No hidden fees • Expert guidance
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
  );
}
