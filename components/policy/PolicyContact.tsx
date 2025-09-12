"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

interface PolicyContactProps {
  title?: string;
  description?: string;
  contactInfo?: ContactInfo;
  additionalInfo?: string;
  index?: number;
}

export default function PolicyContact({
  title = "Contact Us",
  description = "If you have any questions or complaints about how we handle your data, please contact our Data Protection Officer (DPO):",
  contactInfo = {
    email: "[Insert Email]",
    phone: "[Insert Phone]",
    address: "[Insert Office Address]"
  },
  additionalInfo = "If you are not satisfied with our response, you may contact the Nigeria Data Protection Commission (NDPC) directly at: www.ndpc.gov.ng",
  index = 0
}: PolicyContactProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
      className="bg-gradient-to-br from-[#62b514]/5 to-[#DAA520]/5 p-8 md:p-10 rounded-lg border-2 border-[#62b514]/20"
    >
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-[#62b514]/10 rounded-lg mr-4">
          <Mail className="w-6 h-6 text-[#62b514]" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-semibold text-gray-800 mb-4">Data Protection Officer (DPO)</h3>
          <div className="space-y-3">
            {contactInfo.email && (
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3 text-[#62b514]" />
                <span>Email: {contactInfo.email}</span>
              </div>
            )}
            {contactInfo.phone && (
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3 text-[#62b514]" />
                <span>Phone: {contactInfo.phone}</span>
              </div>
            )}
            {contactInfo.address && (
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-[#62b514]" />
                <span>Address: {contactInfo.address}</span>
              </div>
            )}
          </div>
        </div>
        {additionalInfo && (
          <p className="text-gray-600 text-sm">
            {additionalInfo.includes('www.ndpc.gov.ng') ? (
              <>
                If you are not satisfied with our response, you may contact the Nigeria Data Protection Commission (NDPC) directly at:{' '}
                <a href="https://www.ndpc.gov.ng" className="text-[#62b514] hover:underline font-medium">
                  www.ndpc.gov.ng
                </a>
              </>
            ) : (
              additionalInfo
            )}
          </p>
        )}
      </div>
    </motion.div>
  );
}