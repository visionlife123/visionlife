'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '97450769794'; // +974 5076 9794
const WHATSAPP_DISPLAY = '+974 5076 9794';

export function WhatsAppChatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openWhatsApp = (customMessage?: string) => {
    const text = encodeURIComponent(
      customMessage || "Hello Vision Life Ministries! I would like to know more about your church."
    );
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setOpen(false);
    setMessage('');
  };

  const handleSend = () => {
    if (!message.trim()) return;
    openWhatsApp(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="w-[19rem] origin-bottom-right overflow-hidden rounded-2xl border border-dark/10 bg-cream shadow-[0_30px_80px_-35px_rgba(10,10,10,0.55)] sm:w-96"
          >
            {/* Header */}
            <div className="flex items-center gap-3 bg-dark p-4">
              <button
                onClick={() => openWhatsApp()}
                className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gold/15 transition-colors hover:bg-gold/30"
                aria-label="Open WhatsApp"
              >
                <WhatsAppIcon className="size-5 text-gold" />
              </button>
              <div className="flex-1 cursor-pointer" onClick={() => openWhatsApp()}>
                <p className="font-display text-lg leading-tight text-cream">
                  Vision Life Ministries
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[9px] uppercase tracking-[0.18em] text-cream/45">
                  <span className="size-1.5 rounded-full bg-gold" />
                  Online on WhatsApp
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex size-8 cursor-pointer items-center justify-center rounded-full text-cream/50 transition-colors hover:bg-cream/10 hover:text-cream"
                aria-label="Close chat"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Body */}
            <div className="flex h-64 flex-col gap-3 overflow-y-auto bg-cream p-4">
              {/* Incoming message */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="max-w-[88%] self-start rounded-xl rounded-tl-sm border border-dark/8 bg-white p-3 shadow-sm"
              >
                <p className="text-[13px] leading-relaxed text-dark/75">
                  Hello and welcome to Vision Life Ministries! 🙏
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-dark/75">
                  How can we help you today? Send us a message and we will respond on WhatsApp.
                </p>
                <p className="mt-1.5 text-right text-[9px] uppercase tracking-[0.16em] text-dark/30">
                  Just now
                </p>
              </motion.div>

              {/* Quick replies */}
              <div className="mt-1 flex flex-wrap gap-2">
                {['Prayer Request', 'Service Times', 'I want to visit'].map((quick) => (
                  <button
                    key={quick}
                    onClick={() => openWhatsApp(quick)}
                    className="cursor-pointer rounded-full border border-dark/15 px-3 py-1.5 text-[9.5px] uppercase tracking-[0.14em] text-dark/60 transition-colors hover:border-dark hover:bg-dark hover:text-cream"
                  >
                    {quick}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 border-t border-dark/10 bg-cream p-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message…"
                className="flex-1 rounded-full border border-dark/12 bg-white px-4 py-2.5 text-[13px] text-dark placeholder:text-dark/35 focus:border-gold focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-dark text-cream transition-colors hover:bg-burgundy"
                aria-label="Send message"
              >
                <Send className="size-4" />
              </button>
            </div>

            {/* Footer */}
            <div className="border-t border-dark/8 px-4 py-2 text-center">
              <p className="text-[9px] uppercase tracking-[0.16em] text-dark/35">
                WhatsApp · {WHATSAPP_DISPLAY}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with Pulse Waves */}
      <div className="relative">
        {/* Pulse waves */}
        {!open && (
          <>
            <motion.span
              className="absolute inset-0 rounded-full bg-gold"
              animate={{
                scale: [1, 1.8],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-gold"
              animate={{
                scale: [1, 1.8],
                opacity: [0.25, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 1.5,
              }}
            />
          </>
        )}

        {/* Main Button */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative z-10 flex size-14 cursor-pointer items-center justify-center rounded-full bg-gold shadow-2xl ring-4 ring-dark/10 transition-colors hover:bg-gold-light sm:size-16"
          aria-label={open ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <X className="size-6 text-dark sm:size-7" />
              </motion.span>
            ) : (
              <motion.span
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <WhatsAppIcon className="size-7 text-dark sm:size-8" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Notification dot */}
        {!open && (
          <span className="absolute -right-1 -top-1 z-20 flex size-4 items-center justify-center rounded-full border-2 border-cream bg-burgundy">
            <span className="text-[8px] font-bold text-white">1</span>
          </span>
        )}
      </div>
    </div>
  );
}

// Custom WhatsApp icon (since lucide-react doesn't have one)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.031 0C5.396 0 .016 5.38.016 12.016c0 2.124.553 4.195 1.603 6.015L.038 23.993l6.104-1.602a12.013 12.013 0 005.889 1.53h.005c6.634 0 12.016-5.38 12.016-12.015C24.05 5.27 18.665 0 12.031 0zm-.005 21.947h-.003a9.97 9.97 0 01-5.083-1.39l-.364-.216-3.778.991 1.008-3.684-.237-.377a9.947 9.947 0 01-1.524-5.31c.002-5.503 4.478-9.98 9.98-9.98 2.665.002 5.172 1.04 7.054 2.923a9.927 9.927 0 012.92 7.058c-.004 5.503-4.48 9.98-9.973 9.98zm5.474-7.471c-.3-.15-1.775-.876-2.05-.976-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.49-.893-.795-1.495-1.778-1.67-2.078-.175-.3-.02-.463.13-.613.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.243-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1s2.115 3.225 5.125 4.525c.717.31 1.275.495 1.71.633.72.228 1.375.195 1.89.118.577-.086 1.775-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
    </svg>
  );
}
