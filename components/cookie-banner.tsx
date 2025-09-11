'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useConsentModal } from '@/hooks/use-consent-modal';
import { Button } from './ui/button';



export const CookieBanner = () => {
  const { openModal } = useConsentModal();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000); // Show banner after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);


  // Add countdown to clear banner after 20 seconds of no interaction
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    if (showBanner) {
      // If the banner is shown, start a timer.
      const timerId = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown <= 1) {
            // When the countdown reaches 1, clear the timer and hide the banner.
            clearInterval(timerId);
            setShowBanner(false);
            return 20; // Reset countdown for the next time
          }
          // Otherwise, just decrement the countdown.
          return prevCountdown - 1;
        });
      }, 1000);

      // The cleanup function runs when the banner is hidden or the component unmounts.
      return () => clearInterval(timerId);
    }
  }, [showBanner]); // This effect only needs to run when `showBanner` changes.

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({ accepted: true, timestamp: new Date() }));
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', JSON.stringify({ accepted: false, timestamp: new Date() }));
    setShowBanner(false);
  };

  const handleManage = () => {
    openModal();
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t border-gray-200"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-700 mb-4 md:mb-0 md:mr-4">
              <b>Cookie Notice:</b> We use cookies to improve your browsing experience, analyze site traffic, and deliver personalized study abroad recommendations. By continuing to use this site, you agree to our use of cookies in line with our{' '}
              <Link href="/privacy-policy" className="text-[#62b514] font-semibold hover:underline">
                Privacy Policy
              </Link>
              . You can adjust your cookie preferences at any time.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 flex-shrink-0 w-full md:w-auto">
              <Button onClick={handleAccept} className="bg-[#62b514] text-white hover:bg-[#529b11] w-full md:w-auto">Accept All</Button>
              <Button onClick={handleReject} variant="outline" className="w-full md:w-auto">Reject Non-Essential</Button>
              <Button onClick={handleManage} variant="ghost" className="w-full md:w-auto">Manage Preferences</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
