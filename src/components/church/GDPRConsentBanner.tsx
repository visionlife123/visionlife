'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cookie, Shield, X, Check, ExternalLink } from 'lucide-react';

const STORAGE_KEY = 'vlm-gdpr-consent';

type ConsentChoice = 'accepted' | 'declined' | null;

function useConsentBanner() {
  // Start hidden on both server and client to avoid hydration mismatch
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    let stored: ConsentChoice = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY) as ConsentChoice;
    } catch {
      // localStorage not available - will show banner
    }
    if (!stored) {
      // Small delay so the banner appears after page load
      const timer = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {
      // ignore
    }
    setShow(false);
  };

  const decline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
    } catch {
      // ignore
    }
    setShow(false);
  };

  return { show, accept, decline };
}

export function GDPRConsentBanner() {
  const { show, accept, decline } = useConsentBanner();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-5xl mx-auto">
            <div className="bg-dark border border-gold/30 rounded-sm shadow-2xl overflow-hidden">
              <div className="h-0.5 bg-gradient-to-r from-gold via-burgundy to-gold" />
              <div className="p-5 sm:p-6">
                <div className="flex flex-col lg:flex-row items-start gap-5">
                  {/* Icon */}
                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-gold/10 border border-gold/30 items-center justify-center">
                    <Cookie className="w-6 h-6 text-gold" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-gold sm:hidden" />
                      <h3 className="text-gold font-bold text-sm tracking-wider uppercase">
                        Cookie & Privacy Notice
                      </h3>
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                      We use cookies and similar technologies to enhance your browsing experience,
                      analyze website traffic, and improve our services. By clicking &ldquo;Accept All&rdquo;,
                      you consent to our use of cookies in accordance with our Privacy Policy and GDPR
                      regulations. You may also choose to decline non-essential cookies.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <button
                        className="text-gold/70 hover:text-gold text-xs underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                        onClick={() => window.open('https://gdpr.eu/what-is-gdpr/', '_blank')}
                      >
                        Learn more about GDPR
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto shrink-0">
                    <Button
                      onClick={decline}
                      variant="outline"
                      className="border-gold/30 text-white/70 hover:text-gold hover:bg-gold/5 hover:border-gold/50 text-xs tracking-wider uppercase rounded-sm px-5 py-2.5 h-auto"
                    >
                      <X className="w-3.5 h-3.5 mr-1.5" />
                      Decline
                    </Button>
                    <Button
                      onClick={accept}
                      className="bg-gold hover:bg-gold-dark text-dark font-semibold text-xs tracking-wider uppercase rounded-sm px-5 py-2.5 h-auto"
                    >
                      <Check className="w-3.5 h-3.5 mr-1.5" />
                      Accept All
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
