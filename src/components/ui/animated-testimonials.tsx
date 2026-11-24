'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EASE_OUT } from '@/lib/animations';

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
  interval = 8000,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay || paused || reduce) return;
    const timer = setInterval(handleNext, interval);
    return () => clearInterval(timer);
  }, [autoplay, interval, paused, reduce, handleNext]);

  const current = testimonials[active];

  return (
    <div
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Quote */}
      <div className="order-2 lg:order-1 lg:col-span-7">
        <Quote className="size-8 text-gold-ink/40" aria-hidden />

        <div className="relative mt-4 min-h-[15rem] sm:min-h-[13rem]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={active}
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduce ? 0 : -12 }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              aria-live="polite"
            >
              <blockquote className="t-quote text-balance text-dark">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-display text-xl text-dark">{current.name}</span>
                <span className="hidden h-3 w-px bg-dark/20 sm:block" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-dark/45">
                  {current.designation}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-dark/10 pt-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimony"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-dark/60 transition-colors hover:border-dark hover:bg-dark hover:text-cream"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimony"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-dark/15 text-dark/60 transition-colors hover:border-dark hover:bg-dark hover:text-cream"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          <p className="font-display text-sm tracking-[0.12em] text-dark/45">
            <span className="text-dark">0{active + 1}</span>
            <span className="mx-1.5">/</span>
            <span>0{testimonials.length}</span>
          </p>
        </div>
      </div>

      {/* Portrait + selectors */}
      <div className="order-1 lg:order-2 lg:col-span-5">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-2 rounded-[1.6rem] border border-gold-ink/15" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-dark/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.src}
                src={current.src}
                alt={`Portrait of ${current.name}`}
                loading="lazy"
                decoding="async"
                initial={{ opacity: 0, scale: reduce ? 1 : 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: EASE_OUT }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-dark/35 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2.5">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Read the testimony of ${testimonial.name}`}
              aria-current={index === active}
              className={cn(
                'relative h-11 w-11 overflow-hidden rounded-full border transition-all duration-400',
                index === active
                  ? 'scale-105 border-gold-ink/70'
                  : 'border-transparent opacity-55 hover:opacity-90',
              )}
            >
              <img
                src={testimonial.src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
