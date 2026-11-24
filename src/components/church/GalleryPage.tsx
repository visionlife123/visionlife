'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Action, Eyebrow, PageHero, PullQuote } from '@/components/church/Editorial';
import { EASE_OUT, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

interface GalleryImage {
  src: string;
  title: string;
  caption: string;
  category: string;
  /** Tailwind span classes for a masonry-like layout on large screens */
  span: string;
}

const galleryImages: GalleryImage[] = [
  // School
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528897/WhatsApp_Image_2026-07-16_at_9.26.00_AM_y9hlxf_wcqvco.jpg', title: 'School Life 01', caption: 'A moment from God Is Able Nursery and Primary School.', category: 'School', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528891/WhatsApp_Image_2026-07-16_at_9.26.00_AM_1_we0gfq_vadlf3.jpg', title: 'School Life 02', caption: 'A moment from God Is Able Nursery and Primary School.', category: 'School', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528891/WhatsApp_Image_2026-07-16_at_9.26.00_AM_2_kphwmq_zcdl01.jpg', title: 'School Life 03', caption: 'A moment from God Is Able Nursery and Primary School.', category: 'School', span: 'lg:col-span-1 lg:row-span-1' },
  // Bible Study
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528888/WhatsApp_Image_2026-07-16_at_9.26.01_AM_xzdv0y_pctten.jpg', title: 'Bible Study 01', caption: 'Studying the Word together.', category: 'Bible Study', span: 'lg:col-span-2 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528887/WhatsApp_Image_2026-07-16_at_9.26.00_AM_5_pxqok4_earcmk.jpg', title: 'Bible Study 02', caption: 'Studying the Word together.', category: 'Bible Study', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795531601/WhatsApp_Image_2026-11-17_at_4.57.08_AMfg_ehddbn.jpg', title: 'Bible Study 03', caption: 'Studying the Word together.', category: 'Bible Study', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795531600/WhatsApp_Image_2026-11-17_at_4.57.09_AMgg_povwta.jpg', title: 'Bible Study 04', caption: 'Studying the Word together.', category: 'Bible Study', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795531599/WhatsApp_Image_2026-11-17_at_4.57.09_AMtehy_gnymiy.jpg', title: 'Bible Study 05', caption: 'Studying the Word together.', category: 'Bible Study', span: 'lg:col-span-2 lg:row-span-1' },
  // Worship
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528030/WhatsApp_Image_2026-11-17_at_4.56.00_AM_ldkckq.jpg', title: 'Worship 01', caption: 'Worship and praise.', category: 'Worship', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795531600/tttytytey_hhe2ir.jpg', title: 'Worship 02', caption: 'Worship and praise.', category: 'Worship', span: 'lg:col-span-1 lg:row-span-1' },
  // Called Ministry
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528890/WhatsApp_Image_2026-07-16_at_9.26.00_AM_4_ljpwjh_skppym.jpg', title: 'Called Ministry 01', caption: 'Called to serve.', category: 'Called Ministry', span: 'lg:col-span-2 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528889/WhatsApp_Image_2026-07-16_at_9.26.00_AM_3_mtbn5q_sixlmt.jpg', title: 'Called Ministry 02', caption: 'Called to serve.', category: 'Called Ministry', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528888/WhatsApp_Image_2026-07-16_at_9.26.01_AM_1_e7cs6k_pklvb1.jpg', title: 'Called Ministry 03', caption: 'Called to serve.', category: 'Called Ministry', span: 'lg:col-span-1 lg:row-span-1' },
  // Bible Study Training Theology
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528886/WhatsApp_Image_2026-07-16_at_9.26.01_AM_2_hwz4ar_xoqpm8.jpg', title: 'Theology Training 01', caption: 'Bible study, training and theology.', category: 'Bible Study Training Theology', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528886/WhatsApp_Image_2026-07-16_at_9.26.01_AM_4_cej08q_ydi9nn.jpg', title: 'Theology Training 02', caption: 'Bible study, training and theology.', category: 'Bible Study Training Theology', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528886/WhatsApp_Image_2026-07-16_at_9.26.01_AM_5_q1mdjz_aqhn3s.jpg', title: 'Theology Training 03', caption: 'Bible study, training and theology.', category: 'Bible Study Training Theology', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795528886/WhatsApp_Image_2026-07-16_at_9.26.01_AM_3_q0sm0t_rfiefs.jpg', title: 'Theology Training 04', caption: 'Bible study, training and theology.', category: 'Bible Study Training Theology', span: 'lg:col-span-1 lg:row-span-1' },
  // Vision Canaan Church Construction
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795529710/WhatsApp_Image_2026-11-17_at_3.58.57_AMsdfgs_zihf8y.jpg', title: 'Vision Canaan 01', caption: 'Building the house of the Lord — Vision Canaan.', category: 'Vision Canaan Church Construction', span: 'lg:col-span-2 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795529711/WhatsApp_Image_2026-11-17_at_3.58.57_AMm_rx7fpy.jpg', title: 'Vision Canaan 02', caption: 'Building the house of the Lord — Vision Canaan.', category: 'Vision Canaan Church Construction', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795529711/WhatsApp_Image_2026-11-17_at_3.58.57_AMmm_xubvk4.jpg', title: 'Vision Canaan 03', caption: 'Building the house of the Lord — Vision Canaan.', category: 'Vision Canaan Church Construction', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795529723/WhatsApp_Image_2026-11-17_at_3.58.58_AMds_rw3ez2.jpg', title: 'Vision Canaan 04', caption: 'Building the house of the Lord — Vision Canaan.', category: 'Vision Canaan Church Construction', span: 'lg:col-span-2 lg:row-span-2' },
  // Beyond Success
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795529941/WhatsApp_Image_2026-11-17_at_4.02.36_AM_vagich.jpg', title: 'Beyond Success 01', caption: 'Leadership training and personal growth.', category: 'Beyond Success', span: 'lg:col-span-2 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795529942/WhatsApp_Image_2026-11-17_at_4.13.15_AM_nexizl.jpg', title: 'Beyond Success 02', caption: 'Leadership training and personal growth.', category: 'Beyond Success', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795529943/WhatsApp_Image_2026-11-17_at_4.07.18_AM_veymrk.jpg', title: 'Beyond Success 03', caption: 'Leadership training and personal growth.', category: 'Beyond Success', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795529944/WhatsApp_Image_2026-11-17_at_4.07.17_AM_xqdsom.jpg', title: 'Beyond Success 04', caption: 'Leadership training and personal growth.', category: 'Beyond Success', span: 'lg:col-span-2 lg:row-span-2' },
  // Global Ministries
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795530085/WhatsApp_Image_2026-11-17_at_4.51.04_AMgfgf_ishr4n.jpg', title: 'Global Ministries 01', caption: 'Taking the Gospel to the nations.', category: 'Global Ministries', span: 'lg:col-span-2 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795530085/WhatsApp_Image_2026-11-17_at_4.51.04_AMghfdh_uhpfgg.jpg', title: 'Global Ministries 02', caption: 'Taking the Gospel to the nations.', category: 'Global Ministries', span: 'lg:col-span-1 lg:row-span-1' },
  { src: 'https://res.cloudinary.com/dbembxeoi/image/upload/v1795530085/WhatsApp_Image_2026-11-17_at_4.51.04_AM_zc46gn.jpg', title: 'Global Ministries 03', caption: 'Taking the Gospel to the nations.', category: 'Global Ministries', span: 'lg:col-span-1 lg:row-span-1' },
];

const tabs = [
  { key: 'Worship', label: 'Worship', description: 'Worship and praise.' },
  { key: 'School', label: 'School', description: 'The establishment of the school — God Is Able Nursery and Primary School.' },
  { key: 'Bible Study', label: 'Bible Study', description: 'Studying the Word together.' },
  { key: 'Called Ministry', label: 'Called Ministry', description: 'Called to serve.' },
  { key: 'Bible Study Training Theology', label: 'Theology Training', description: 'Bible study, training and theology.' },
  { key: 'Vision Canaan Church Construction', label: 'Vision Canaan', description: 'Building the house of the Lord — Vision Canaan.' },
  { key: 'Beyond Success', label: 'Beyond Success', description: 'Leadership training and personal growth.' },
  { key: 'Global Ministries', label: 'Global Ministries', description: 'Taking the Gospel to the nations.' },
];

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryImages.filter((img) => img.category === activeTab);

  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? current : (current - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);
  const goNext = useCallback(() => {
    setLightboxIndex((current) =>
      current === null ? current : (current + 1) % filtered.length,
    );
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, goPrev, goNext]);

  // Reset lightbox when tab changes
  useEffect(() => {
    setLightboxIndex(null);
  }, [activeTab]);

  const current = lightboxIndex === null ? null : filtered[lightboxIndex];
  const activeTabMeta = tabs.find((t) => t.key === activeTab)!;

  return (
    <div className="min-w-0 overflow-hidden bg-cream">
      <PageHero
        image="https://res.cloudinary.com/dbembxeoi/image/upload/v1784185745/WhatsApp_Image_2026-07-16_at_9.26.01_AM_1_e7cs6k.jpg"
        alt="Vision Life Ministries congregation in worship"
        eyebrow="Gallery"
        title={
          <>
            Moments of <span className="display-italic text-gold">grace</span>.
          </>
        }
        description="A visual journey through the life of the ministry — worship, fellowship, education, and the people God has brought together in Rakai and beyond."
        meta={
          <p className="text-[10px] uppercase tracking-[0.22em] text-cream/40">
            {galleryImages.length} photographs · Rakai, Uganda
          </p>
        }
      />

      {/* ---------------------------------------------------------- */}
      {/* Gallery                                                    */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>The Life of the Church</Eyebrow>
              <h2 className="t-h2 mt-5 text-dark">
                Worship, fellowship & <span className="display-italic text-burgundy">mission</span>.
              </h2>
            </div>
            <p className="max-w-xs text-[12.5px] leading-relaxed text-dark/45">
              Select any photograph to view it full size.
            </p>
          </div>

          {/* Tabs */}
          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const count = galleryImages.filter((i) => i.category === tab.key).length;
              const isActive = tab.key === activeTab;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.18em] transition-all duration-400 ${
                    isActive
                      ? 'border-dark bg-dark text-cream'
                      : 'border-dark/15 text-dark/55 hover:border-dark/40 hover:text-dark'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`text-[9px] ${isActive ? 'text-gold' : 'text-dark/30'}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <p className="mt-6 max-w-xl text-[13.5px] leading-relaxed text-dark/55">
            {activeTabMeta.description}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={staggerContainer(0.06)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 8 }}
              className="mt-8 grid auto-rows-[190px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:auto-rows-[210px] lg:grid-cols-4"
            >
              {filtered.map((img, i) => (
                <motion.button
                  key={img.src}
                  type="button"
                  variants={staggerItem}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Open photograph: ${img.title}`}
                  className={`group relative overflow-hidden rounded-xl bg-dark/5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${img.span}`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading={i < 4 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-dark/10 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-4 bottom-4 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-[8.5px] uppercase tracking-[0.2em] text-gold/80">
                      {img.category}
                    </p>
                    <p className="mt-1 font-display text-lg leading-tight text-cream">
                      {img.title}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Scripture                                                  */}
      {/* ---------------------------------------------------------- */}
      <section className="section-sm bg-dark">
        <div className="shell">
          <PullQuote tone="light" attribution="1 Chronicles 16:24">
            Declare his glory among the nations, his marvelous deeds among all peoples.
          </PullQuote>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* CTA                                                        */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-6 border-t border-dark/12 pt-10 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="t-h3 text-dark">
                Come and <span className="display-italic text-burgundy">experience</span> God with
                us.
              </h2>
              <p className="mt-4 text-[13.5px] leading-relaxed text-dark/55">
                Photos capture a moment, but nothing compares to being part of what God is doing.
                Join us at our next service or event.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Action href="/events" variant="gold" icon="right">
                View Events
              </Action>
              <Action href="/contact-us" variant="outlineDark" icon="none">
                Visit Us
              </Action>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Lightbox                                                   */}
      {/* ---------------------------------------------------------- */}
      <Dialog open={lightboxIndex !== null} onOpenChange={(open) => { if (!open) closeLightbox(); }}>
        <DialogContent className="w-[96vw] max-w-6xl overflow-hidden rounded-xl border border-white/10 bg-dark/97 p-0 text-cream">
          <DialogTitle className="sr-only">
            {current ? current.title : 'Gallery image viewer'}
          </DialogTitle>

          {current ? (
            <div className="relative">
              <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-4">
                <p className="font-display text-xs tracking-[0.18em] text-cream/60">
                  <span className="text-gold">{String((lightboxIndex ?? 0) + 1).padStart(2, '0')}</span>
                  <span className="mx-1.5 text-cream/30">/</span>
                  {String(filtered.length).padStart(2, '0')}
                </p>
                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close gallery viewer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-dark"
                >
                  <X className="size-5" />
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                  className="flex max-h-[78vh] min-h-[50vh] items-center justify-center bg-black/40"
                >
                  <img
                    src={current.src}
                    alt={current.title}
                    className="max-h-[78vh] w-auto max-w-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col gap-4 border-t border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[8.5px] uppercase tracking-[0.2em] text-gold/80">
                    {current.category}
                  </p>
                  <p className="mt-1.5 font-display text-xl text-cream">{current.title}</p>
                  <p className="mt-1 text-[12.5px] text-cream/45">{current.caption}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous photograph"
                    className="flex size-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-dark"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next photograph"
                    className="flex size-10 items-center justify-center rounded-full border border-white/15 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-dark"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
