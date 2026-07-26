'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  ChevronLeft, ChevronRight, X, ArrowRight,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  fadeInUp, scaleIn, blurIn,
  staggerContainer, staggerItem, staggerItemScale, viewportOnce, EASE_OUT,
} from '@/lib/animations';

interface GalleryImage {
  src: string;
  title: string;
  caption: string;
  category: string;
  /** Tailwind span classes for a masonry-like layout on large screens */
  span: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185747/WhatsApp_Image_2026-07-16_at_9.26.00_AM_y9hlxf.jpg',
    title: 'Worship Encounter',
    caption: 'Lifting up the name of Jesus in spirit and in truth.',
    category: 'Worship',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185746/WhatsApp_Image_2026-07-16_at_9.26.00_AM_1_we0gfq.jpg',
    title: 'Fellowship & Community',
    caption: 'Sharing the warmth of community in Rakai.',
    category: 'Community',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185746/WhatsApp_Image_2026-07-16_at_9.26.00_AM_2_kphwmq.jpg',
    title: 'Word of Faith',
    caption: "Receiving spiritual food for life's journey.",
    category: 'Discipleship',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185745/WhatsApp_Image_2026-07-16_at_9.26.00_AM_4_ljpwjh.jpg',
    title: 'Outreach Mission',
    caption: 'Reaching out to hearts in the remote villages.',
    category: 'Missions',
    span: 'lg:col-span-2 lg:row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185745/WhatsApp_Image_2026-07-16_at_9.26.00_AM_3_mtbn5q.jpg',
    title: 'Early Morning Prayer',
    caption: "Seeking God's face at the break of dawn.",
    category: 'Prayer',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185745/WhatsApp_Image_2026-07-16_at_9.26.01_AM_1_e7cs6k.jpg',
    title: 'Youth Empowerment',
    caption: 'Empowering the next generation to live for Christ.',
    category: 'Youth',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185745/WhatsApp_Image_2026-07-16_at_9.26.00_AM_5_pxqok4.jpg',
    title: 'Leadership Team',
    caption: "Dedicated leaders serving God's people in love.",
    category: 'Leadership',
    span: 'lg:col-span-2 lg:row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185745/WhatsApp_Image_2026-07-16_at_9.26.01_AM_xzdv0y.jpg',
    title: 'Healing & Miracles',
    caption: "Witnessing God's restoring power in our services.",
    category: 'Ministry',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185744/WhatsApp_Image_2026-07-16_at_9.26.01_AM_2_hwz4ar.jpg',
    title: 'Sunday Worship',
    caption: 'Praising God with one voice and heart.',
    category: 'Worship',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185744/WhatsApp_Image_2026-07-16_at_9.26.01_AM_3_q0sm0t.jpg',
    title: 'Community Outreach',
    caption: 'Extending the love of Christ to those in need.',
    category: 'Outreach',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185744/WhatsApp_Image_2026-07-16_at_9.26.01_AM_4_cej08q.jpg',
    title: 'Kingdom Partnership',
    caption: 'The joy of giving and supporting ministry work.',
    category: 'Giving',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185744/WhatsApp_Image_2026-07-16_at_9.26.01_AM_5_q1mdjz.jpg',
    title: 'Celebration of Life',
    caption: "Joyful moments celebrating God's goodness in the family of God.",
    category: 'Celebration',
    span: 'lg:col-span-1 lg:row-span-1',
  },
];

export function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const router = useRouter();

  const filteredImages = galleryImages;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/hero-worship.png)' }}
          />
          <div className="absolute inset-0 bg-linear-to-b from-dark/85 via-dark/70 to-dark" />
        </div>
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto py-32">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase animate-breathe hover:bg-gold/20 transition-colors cursor-default">
              Gallery
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Moments of <span className="text-gold-gradient animate-gradient-shift">Grace</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            A visual journey of worship, fellowship, and the transforming power of God
            in our community and beyond.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-cream pb-24">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredImages.map((img, i) => (
              <motion.button
                key={img.src}
                variants={staggerItemScale}
                onClick={() => openLightbox(i)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`group relative overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-pointer hover-lift min-h-55 ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-contain bg-dark/5 transition-transform duration-700 group-hover:scale-105"
                />
              </motion.button>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-dark/50 text-sm">No images in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/images/cross-sunrise.png)' }} />
          <div className="absolute inset-0 bg-burgundy/80" />
        </div>
        <div className="relative max-w-4xl mx-auto section-padding text-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-gold text-lg md:text-2xl font-serif italic leading-relaxed mb-6 hover-gradient-text inline-block">
              &ldquo;Declare his glory among the nations, his marvelous deeds among all peoples.&rdquo;
            </p>
            <p className="text-gold-light/60 text-sm tracking-widest uppercase">— 1 Chronicles 16:24</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-dark py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-breathe" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="relative max-w-3xl mx-auto section-padding text-center">
          <motion.div
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Come and <span className="text-gold-gradient animate-gradient-shift">Experience</span> God With Us
            </h2>
            <p className="text-white/60 text-sm md:text-base mb-8 max-w-xl mx-auto">
              Photos capture a moment, but nothing compares to being part of what God is doing.
              Join us at our next service or event.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="hover-arrow">
                <Button
                  onClick={() => { router.push('/events'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="bg-gold hover:bg-gold-dark text-dark font-bold px-7 py-3 text-sm tracking-wider uppercase rounded-sm btn-shine"
                >
                  View Events
                  <ArrowRight className="w-4 h-4 ml-2 hover-arrow-target" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  onClick={() => { router.push('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="border-gold/40 text-gold hover:bg-gold/10 hover:border-gold px-7 py-3 text-sm tracking-wider uppercase rounded-sm btn-shine transition-colors"
                >
                  Visit Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => { if (!open) closeLightbox(); }}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 bg-dark/95 border-gold/20 overflow-hidden rounded-sm">
          <DialogTitle className="sr-only">Gallery image viewer</DialogTitle>
          {lightboxIndex !== null && filteredImages[lightboxIndex] && (
            <div className="relative">
              {/* Close */}
              <button
                onClick={closeLightbox}
                aria-label="Close"
                className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-dark/70 hover:bg-gold hover:text-dark text-gold flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark/70 hover:bg-gold hover:text-dark text-gold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={goNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark/70 hover:bg-gold hover:text-dark text-gold flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={filteredImages[lightboxIndex].src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative w-full max-h-[80vh] bg-dark flex items-center justify-center">
                    <img
                      src={filteredImages[lightboxIndex].src}
                      alt={filteredImages[lightboxIndex].title}
                      className="max-w-full max-h-[80vh] object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
