'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { type PageName } from '@/store/navigation';
import { Menu, X, Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { EASE_OUT } from '@/lib/animations';

const navItems: { label: string; page: PageName }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About Us', page: 'about-us' },
  { label: 'Programs', page: 'programs' },
  { label: 'Ministries', page: 'ministries' },
  { label: 'Events', page: 'events' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Give', page: 'give' },
  { label: 'Contact Us', page: 'contact-us' },
];

const getUrl = (page: PageName) => (page === 'home' ? '/' : `/${page}`);

export function Navbar() {
  const pathname = usePathname();
  const currentPage =
    pathname === '/' ? 'home' : pathname?.replace(/^\/+|\/+$/g, '') || 'home';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const desktopItems = navItems.filter((item) => item.page !== 'contact-us');

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE_OUT }}
          className={cn(
            'pointer-events-auto mx-auto flex w-full max-w-[84rem] items-center justify-between gap-6 rounded-full border px-3 py-2.5 transition-all duration-500 sm:px-4',
            scrolled
              ? 'border-white/10 bg-dark/85 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl'
              : 'border-white/12 bg-dark/30 backdrop-blur-md',
          )}
          aria-label="Primary"
        >
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-full pl-1 pr-2 focus:outline-none"
            aria-label="Vision Life Ministries — home"
          >
            <img
              src="/favicon.svg"
              alt=""
              className="h-9 w-9 object-contain transition-transform duration-500 group-hover:scale-105 sm:h-10 sm:w-10"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[1.2rem] font-medium tracking-[-0.01em] text-cream sm:text-[1.35rem]">
                Vision Life
              </span>
              <span className="mt-1 text-[7.5px] font-medium uppercase tracking-[0.34em] text-cream/45">
                Ministries
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {desktopItems.map((item) => {
              const active = currentPage === item.page;
              return (
                <Link
                  key={item.page}
                  href={getUrl(item.page)}
                  className={cn(
                    'relative rounded-full px-3 py-2 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 xl:px-3.5',
                    active
                      ? 'text-gold'
                      : 'text-cream/65 hover:text-cream',
                  )}
                >
                  {item.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute inset-x-3 -bottom-0.5 h-px bg-gold/80"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark transition-colors duration-400 hover:bg-gold-light"
            >
              <Phone className="size-3.5" />
              Contact Us
              <ArrowUpRight className="size-3.5 transition-transform duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold/60 hover:text-gold lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
          >
            <Menu className="size-5" />
          </button>
        </motion.nav>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
            className="fixed inset-0 z-[70] overflow-y-auto overscroll-contain bg-dark text-cream lg:hidden"
            data-lenis-prevent
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="absolute inset-0 -z-10 opacity-[0.06]">
              <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-gold blur-3xl" />
              <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-burgundy blur-3xl" />
            </div>

            <div className="flex items-center justify-between px-5 pt-5">
              <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
                <img src="/favicon.svg" alt="" className="h-9 w-9 object-contain" />
                <span className="flex flex-col leading-none">
                  <span className="font-display text-xl text-cream">Vision Life</span>
                  <span className="mt-1 text-[7.5px] uppercase tracking-[0.32em] text-cream/45">
                    Ministries
                  </span>
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold/60 hover:text-gold"
                aria-label="Close navigation menu"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav className="mt-10 px-5 pb-10" aria-label="Mobile">
              <ul>
                {navItems.map((item, index) => {
                  const active = currentPage === item.page;
                  return (
                    <motion.li
                      key={item.page}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 + index * 0.045, duration: 0.6, ease: EASE_OUT }}
                      className="border-b border-white/8"
                    >
                      <Link
                        href={getUrl(item.page)}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline justify-between gap-4 py-4"
                      >
                        <span className="flex items-baseline gap-4">
                          <span className="w-5 text-[9px] tracking-[0.18em] text-cream/30">
                            0{index + 1}
                          </span>
                          <span
                            className={cn(
                              'font-display text-[2rem] leading-none transition-colors duration-300',
                              active ? 'text-gold' : 'text-cream group-hover:text-gold',
                            )}
                          >
                            {item.label}
                          </span>
                        </span>
                        <ArrowUpRight className="size-4 shrink-0 text-cream/30 transition-all duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: EASE_OUT }}
                className="mt-10 space-y-3 text-[13px] text-cream/55"
              >
                <p className="flex items-center gap-3">
                  <MapPin className="size-4 text-gold" /> Rakai District, Uganda
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="size-4 text-gold" /> +974 5076 9794
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="size-4 text-gold" /> info@visionlifeministries.com
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.58, duration: 0.6, ease: EASE_OUT }}
                className="mt-8"
              >
                <Link
                  href="/contact-us"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-dark"
                >
                  <Phone className="size-4" /> Contact Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
