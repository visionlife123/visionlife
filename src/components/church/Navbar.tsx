'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { type PageName } from '@/store/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

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

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const currentPage = pathname === '/' ? 'home' : pathname?.replace(/^\/+|\/+$/g, '') || 'home';
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getUrl = (page: PageName) => page === 'home' ? '/home' : `/${page}`;

  // Exclude Contact Us since it is a separate button
  const desktopNavItems = navItems.filter(item => item.page !== 'contact-us');

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-zinc-950/95 backdrop-blur-md border-gold/20 shadow-lg shadow-black/60 h-20'
          : 'bg-zinc-950/85 backdrop-blur-md border-gold/10 shadow-md h-20'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-9xl mx-auto px-4 sm:px-6 h-full">
        {/* Desktop Layout (lg and up - includes laptops and desktops) */}
        <div className="hidden lg:flex items-center justify-between h-full">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <img
              src="/favicon.svg"
              alt="Vision Life Ministries Logo"
              className="w-11 h-11 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-gold font-bold text-sm md:text-base tracking-wider uppercase leading-tight group-hover:text-gold-light transition-colors">
                Vision Life
              </span>
              <span className="text-gold-light/70 text-[10px] md:text-xs tracking-widest uppercase">
                Ministries LTD
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="flex items-center gap-1 xl:gap-2">
            {desktopNavItems.map((item) => (
              <Link
                key={item.page}
                href={getUrl(item.page)}
                className={`relative px-3 xl:px-4 py-2 text-xs xl:text-sm font-semibold tracking-wider uppercase transition-colors cursor-pointer hover-underline focus:outline-none ${
                  currentPage === item.page
                    ? 'text-gold font-bold'
                    : 'text-white/80 hover:text-gold'
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="flex items-center">
            <Link href="/contact-us">
              <Button
                className="bg-gold hover:bg-gold-dark text-dark font-semibold px-5 py-2 text-xs xl:text-sm tracking-wide uppercase rounded-sm btn-shine"
              >
                <Phone className="w-4 h-4 mr-1.5" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile & Tablet Layout (less than lg - includes all phones and tablets) */}
        <div className="flex lg:hidden items-center justify-between h-full">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <img
              src="/favicon.svg"
              alt="Vision Life Ministries Logo"
              className="w-9 h-9 object-contain"
            />
            <div className="flex flex-col text-left">
              <span className="text-gold font-bold text-xs sm:text-sm tracking-wider uppercase leading-none">
                Vision Life
              </span>
              <span className="text-gold-light/70 text-[8px] sm:text-[9px] tracking-widest uppercase">
                Ministries
              </span>
            </div>
          </Link>

          {/* Hamburger Icon Trigger using Sheet Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gold hover:text-gold-light hover:bg-gold/5 focus:outline-none focus:ring-0 cursor-pointer h-10 w-10 relative z-[110]"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-zinc-950 border-l border-gold/20 text-white w-80 p-0 z-[100] flex flex-col justify-between"
              hideClose
            >
              <div>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between p-6 border-b border-gold/10 bg-zinc-900/40">
                  <Link href="/" className="flex items-center gap-2">
                    <img
                      src="/favicon.svg"
                      alt="Vision Life Ministries Logo"
                      className="w-8 h-8 object-contain"
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-gold font-bold text-xs tracking-wider uppercase leading-none">
                        Vision Life
                      </span>
                      <span className="text-gold-light/70 text-[8px] tracking-widest uppercase">
                        Ministries
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Nav Items List inside drawer */}
                <div className="py-6 px-4 space-y-1 overflow-y-auto">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.page}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={getUrl(item.page)}
                        className={`block w-full text-left px-5 py-3.5 rounded-sm text-sm font-bold tracking-wider uppercase transition-all cursor-pointer ${
                          currentPage === item.page
                            ? 'text-gold bg-gold/10 border-l-2 border-gold'
                            : 'text-white/70 hover:text-gold hover:bg-gold/5 border-l-2 border-transparent'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Drawer Footer with Quick Contact Call-to-Action */}
              <div className="p-6 border-t border-gold/10 bg-zinc-900/30">
                <Link href="/contact-us">
                  <Button
                    className="w-full bg-gold hover:bg-gold-dark text-dark font-bold py-3.5 text-xs tracking-wider uppercase rounded-sm btn-shine flex items-center justify-center gap-2 shadow-lg shadow-gold/10"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </Button>
                </Link>
                <p className="text-center text-white/30 text-[10px] tracking-widest uppercase mt-4">
                  Rakai District, Uganda
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
