'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { EASE_OUT } from '@/lib/animations';

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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
          role="region"
          aria-label="Cookie and privacy notice"
        >
          <div className="pointer-events-auto mx-auto max-w-4xl overflow-hidden rounded-2xl border border-cream/12 bg-dark/95 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:gap-8">
              <div className="min-w-0 flex-1">
                <p className="text-[9px] uppercase tracking-[0.26em] text-gold/80">Privacy</p>
                <h2 className="mt-2 font-display text-2xl leading-tight text-cream sm:text-[26px]">
                  Cookies &amp; your <span className="display-italic text-gold">experience</span>
                </h2>
                <p className="mt-2 max-w-xl text-[12.5px] leading-relaxed text-cream/55">
                  We use cookies to enhance your browsing experience, understand site traffic and
                  improve our services. Accepting consents to this use. You can also continue with
                  essential cookies only.
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[9.5px] uppercase tracking-[0.18em] text-cream/40">
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
                  >
                    Privacy Policy
                  </Link>
                  <button
                    type="button"
                    onClick={() => window.open('https://gdpr.eu/what-is-gdpr/', '_blank')}
                    className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-gold"
                  >
                    About GDPR
                    <ArrowUpRight className="size-3" />
                  </button>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
                <button
                  type="button"
                  onClick={decline}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-cream/65 transition-all duration-400 hover:border-cream/60 hover:text-cream"
                >
                  <X className="size-3.5" />
                  Essential only
                </button>
                <button
                  type="button"
                  onClick={accept}
                  className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-dark transition-colors duration-400 hover:bg-gold-light"
                >
                  <span className="relative z-[2]">Accept all</span>
                  <ArrowUpRight className="relative z-[2] size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
