"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
  interval = 5000,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [autoplay, interval, handleNext]);

  const isActive = (index: number) => index === active;

  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Column */}
          <div className="relative order-1 md:order-1">
            <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={false}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0"
                  style={{ pointerEvents: isActive(index) ? "auto" : "none" }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation arrows on image */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/90 border border-gold/20 flex items-center justify-center text-dark hover:bg-gold hover:text-dark transition-all duration-300 shadow-lg cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-1.5 px-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isActive(index)
                        ? "bg-gold w-6"
                        : "bg-dark/20 hover:bg-gold/40"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/90 border border-gold/20 flex items-center justify-center text-dark hover:bg-gold hover:text-dark transition-all duration-300 shadow-lg cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quote Column */}
          <div className="relative order-2 md:order-2 min-h-[280px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full"
              >
                <Quote className="w-10 h-10 text-gold/30 mb-4" />
                <motion.blockquote className="text-dark text-lg md:text-xl font-serif leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[active].quote}&rdquo;
                </motion.blockquote>
                <motion.div>
                  <p className="text-burgundy font-bold text-base">
                    {testimonials[active].name}
                  </p>
                  <p className="text-dark/50 text-sm">
                    {testimonials[active].designation}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
