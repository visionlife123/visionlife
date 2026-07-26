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
    <div className="fixed bottom-6 right-6 z-[70] flex flex-col items-end gap-3">
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-80 sm:w-96 bg-white rounded-lg shadow-2xl overflow-hidden border border-dark/10 origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-[#FFD700] p-4 flex items-center gap-3">
              <button
                onClick={() => openWhatsApp()}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors cursor-pointer"
              >
                <WhatsAppIcon className="w-6 h-6 text-dark" />
              </button>
              <div className="flex-1 cursor-pointer" onClick={() => openWhatsApp()}>
                <p className="text-dark font-bold text-sm">Vision Life Ministries</p>
                <p className="text-dark/80 text-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-dark rounded-full animate-pulse" />
                  Online now
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-dark/10 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 text-dark" />
              </button>
            </div>

            {/* Body */}
            <div
              className="p-4 h-64 overflow-y-auto flex flex-col gap-3"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e5e5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundColor: '#ECE5DD',
              }}
            >
              {/* Incoming message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%] self-start"
              >
                <p className="text-dark text-sm leading-relaxed">
                  Hello and welcome to Vision Life Ministries! 🙏
                </p>
                <p className="text-dark text-sm leading-relaxed mt-2">
                  How can we help you today? Send us a message and we will respond on WhatsApp.
                </p>
                <p className="text-dark/40 text-[10px] mt-1 text-right">Just now</p>
              </motion.div>

              {/* Quick replies */}
              <div className="flex flex-wrap gap-2 mt-1">
                {[
                  'Prayer Request',
                  'Service Times',
                  'I want to visit',
                ].map((quick) => (
                  <button
                    key={quick}
                    onClick={() => openWhatsApp(quick)}
                    className="bg-white/90 hover:bg-white text-dark text-xs px-3 py-1.5 rounded-full shadow-sm transition-colors cursor-pointer"
                  >
                    {quick}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="bg-white p-3 border-t border-dark/5 flex items-center gap-2">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 bg-dark/5 border border-dark/10 rounded-full px-4 py-2 text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:border-[#128C7E] transition-colors"
              />
              <button
                onClick={handleSend}
                className="w-9 h-9 shrink-0 rounded-full bg-[#128C7E] hover:bg-[#075E54] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Footer */}
            <div className="bg-dark/5 px-4 py-2 text-center">
              <p className="text-dark/40 text-[10px]">
                Powered by WhatsApp • {WHATSAPP_DISPLAY}
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
              className="absolute inset-0 rounded-full bg-[#FFD700]"
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
              className="absolute inset-0 rounded-full bg-[#FFD700]"
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
          animate={!open ? {
            scale: [1, 1.06, 1],
            rotate: [0, 4, -4, 4, 0]
          } : {
            scale: 1,
            rotate: 0,
          }}
          transition={!open ? {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 8
          } : {
            duration: 0.2
          }}
          whileHover={{ scale: 1.3, rotate: 0 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFD700] hover:bg-[#FFE44D] shadow-2xl flex items-center justify-center cursor-pointer z-10 ring-4 ring-dark/10"
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
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-dark" />
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
                <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-dark" />
              </motion.span>
            )
            }
          </AnimatePresence>
        </motion.button>

        {/* Notification dot */}
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-burgundy rounded-full border-2 border-white flex items-center justify-center z-20">
            <span className="text-white text-[8px] font-bold">1</span>
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
