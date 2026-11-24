'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { type PageName } from '@/store/navigation';
import { MapPin, Phone, Mail, Clock, ArrowUp, Heart, ArrowUpRight } from 'lucide-react';

const quickLinks: { label: string; page: PageName }[] = [
  { label: 'About Us', page: 'about-us' },
  { label: 'Programs', page: 'programs' },
  { label: 'Ministries', page: 'ministries' },
  { label: 'Events', page: 'events' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Give', page: 'give' },
  { label: 'Contact Us', page: 'contact-us' },
];

const serviceTimes = [
  { day: 'Sunday Worship', time: '9:00 AM — 12:00 PM' },
  { day: 'Bible Study', time: 'Wednesday 5:00 PM' },
  { day: 'Prayer Meeting', time: 'Friday 6:00 PM' },
  { day: 'Youth Service', time: 'Saturday 4:00 PM' },
];

const getUrl = (page: PageName) => (page === 'home' ? '/' : `/${page}`);

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative overflow-hidden bg-dark text-cream">
      <div className="h-px w-full bg-linear-to-r from-transparent via-gold/50 to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-gold blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-burgundy blur-3xl" />
      </div>

      <div className="shell relative pt-16 md:pt-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Identity */}
          <div className="lg:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-3">
              <img
                src="/favicon.svg"
                alt=""
                className="h-12 w-12 object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="flex flex-col leading-none">
                <span className="font-display text-2xl text-cream">Vision Life</span>
                <span className="mt-1 text-[8px] uppercase tracking-[0.34em] text-cream/45">
                  Ministries LTD
                </span>
              </span>
            </Link>

            <p className="mt-7 max-w-md text-[13.5px] leading-relaxed text-cream/55">
              Vision Life Ministries Ltd is a Christ-Centered Ministry Based in Uganda,
              Committed To Preaching The Gospel of Jesus Christ And Transforming Lives
              Through Love, Faith, And Practical Support.
            </p>

            <p className="mt-6 max-w-md font-display text-[1.15rem] italic leading-relaxed text-gold/70">
              &ldquo;For if I preach the gospel, that gives me no ground for boasting.
              Woe to me if I do not preach the gospel!&rdquo;
              <span className="mt-2 block font-sans text-[9px] not-italic uppercase tracking-[0.24em] text-cream/35">
                1 Corinthians 9:16
              </span>
            </p>

            <div className="mt-8 flex items-center gap-3">
              <Link
                href="/give"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark transition-colors hover:bg-gold-light"
              >
                Give Now
                <ArrowUpRight className="size-3.5 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-cream/75 transition-colors hover:border-cream/50 hover:text-cream"
              >
                Plan a Visit
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-[9px] font-medium uppercase tracking-[0.26em] text-cream/35">
              Explore
            </h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <Link
                    href={getUrl(link.page)}
                    className="group inline-flex items-center gap-2 text-[13px] text-cream/60 transition-colors duration-300 hover:text-gold"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-400 group-hover:w-3" />
                    <span className="transition-transform duration-400 group-hover:translate-x-1">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t border-white/8 pt-5">
              <h4 className="text-[9px] font-medium uppercase tracking-[0.26em] text-cream/25">
                Legal
              </h4>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/copyright"
                    className="text-[11.5px] text-cream/45 transition-colors hover:text-gold"
                  >
                    Copyright Notice
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-[11.5px] text-cream/45 transition-colors hover:text-gold"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Gather */}
          <div className="lg:col-span-2">
            <h3 className="text-[9px] font-medium uppercase tracking-[0.26em] text-cream/35">
              Gather
            </h3>
            <ul className="mt-6 space-y-4">
              {serviceTimes.map((service) => (
                <li key={service.day} className="group">
                  <p className="flex items-center gap-2 text-[12.5px] font-medium text-cream/80 transition-colors group-hover:text-gold">
                    <Clock className="size-3.5 text-gold/70" />
                    {service.day}
                  </p>
                  <p className="mt-1 pl-5.5 text-[11.5px] text-cream/40">{service.time}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-3">
            <h3 className="text-[9px] font-medium uppercase tracking-[0.26em] text-cream/35">
              Connect
            </h3>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold/80" />
                <p className="text-[13px] leading-relaxed text-cream/60">
                  Rakai District
                  <br />
                  Uganda, East Africa
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold/80" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+97450769794"
                    className="text-[13px] text-cream/60 transition-colors hover:text-gold"
                  >
                    +974 5076 9794
                  </a>
                  <a
                    href="tel:+97451193650"
                    className="text-[13px] text-cream/60 transition-colors hover:text-gold"
                  >
                    +974 5119 3650
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold/80" />
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:info@visionlifeministries.com"
                    className="break-all text-[12.5px] text-cream/60 transition-colors hover:text-gold"
                  >
                    info@visionlifeministries.com
                  </a>
                  <a
                    href="mailto:visionlifevisionlifeministries@gmail.com"
                    className="break-all text-[12.5px] text-cream/60 transition-colors hover:text-gold"
                  >
                    visionlifevisionlifeministries@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Signature statement */}
        <div className="mt-16 border-t border-white/8 pt-12 md:mt-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2rem,6.4vw,5.75rem)] font-light leading-[0.98] tracking-[-0.02em] text-cream"
          >
            Reaching people with the love of God.
            <br />
            Restoring people to the wholeness of Christ&apos;s image.
            <br />
            <span className="italic text-gold/80">Equipping</span> people to minister effectively.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/8 py-8 md:flex-row md:items-center">
          <p className="text-[10.5px] uppercase tracking-[0.14em] text-cream/30">
            Copyright © 2026 Vision Life Ministries LTD. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <p className="flex items-center gap-1.5 text-[10.5px] text-cream/25">
              Built with <Heart className="size-3 text-burgundy" /> for God&apos;s Glory
            </p>
            <p className="text-[10.5px] text-cream/25">
              Website developed by{' '}
              <a
                href="https://www.agabaexeviar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold/70 underline-offset-2 transition-colors hover:text-gold hover:underline"
              >
                Agaba Exeviar
              </a>
            </p>
            <motion.button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/60 transition-colors hover:border-gold/60 hover:text-gold"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Back to top"
            >
              <ArrowUp className="size-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Oversized watermark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <p className="-mb-[0.18em] translate-y-[0.1em] whitespace-nowrap text-center font-display text-[clamp(4rem,17vw,17rem)] font-light leading-[0.72] tracking-[-0.04em] text-cream/[0.045]">
          Vision Life
        </p>
      </div>
    </footer>
  );
}
