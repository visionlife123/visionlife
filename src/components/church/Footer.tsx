'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { type PageName } from '@/store/navigation';
import { MapPin, Phone, Mail, Clock, ArrowUp, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const quickLinks: { label: string; page: PageName }[] = [
  { label: 'About Us', page: 'about-us' },
  { label: 'Programs', page: 'programs' },
  { label: 'Ministries', page: 'ministries' },
  { label: 'Events', page: 'events' },
  { label: 'Gallery', page: 'gallery' },
  { label: 'Give', page: 'give' },
];

export function Footer() {
  const router = useRouter();

  const getUrl = (page: PageName) => page === 'home' ? '/home' : `/${page}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 gold-shimmer" />

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl 2xl:max-w-9xl mx-auto section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '2000px', amount: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/home" className="flex items-center gap-3 mb-6 group cursor-pointer focus:outline-none">
              <img
                src="/favicon.svg"
                alt="Vision Life Ministries Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
              />
              <div>
                <h3 className="text-gold font-bold text-sm tracking-wider uppercase group-hover:text-gold-light transition-colors">Vision Life</h3>
                <p className="text-gold-light/70 text-[10px] tracking-widest uppercase">Ministries LTD</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Vision Life Ministries Ltd is a Christ-Centered Ministry Based in Uganda, Committed To Preaching The Gospel of Jesus Christ And Transforming Lives Through Love, Faith, And Practical Support.
            </p>
            <p className="text-gold/80 text-xs italic">
              &ldquo;For I preach the gospel, that gives me no ground for boasting. Woe to me if I do not preach the gospel!&rdquo; — 1 Corinthians 9:16
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '2000px', amount: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-gold font-semibold text-sm tracking-wider uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <Link
                    href={getUrl(link.page)}
                    className="group text-white/60 hover:text-gold text-sm transition-colors duration-300 cursor-pointer flex items-center gap-2 hover-translate-x"
                  >
                    <span className="w-1.5 h-1.5 bg-gold/50 rounded-full group-hover:scale-150 group-hover:bg-gold transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Legal Links */}
            <div className="mt-6 pt-6 border-t border-gold/10">
              <h5 className="text-gold/70 font-semibold text-[11px] tracking-widest uppercase mb-3">Legal</h5>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={getUrl('copyright')}
                    className="group text-white/50 hover:text-gold text-xs transition-colors duration-300 cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold/40 rounded-full group-hover:scale-150 group-hover:bg-gold transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Copyright Notice</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={getUrl('privacy')}
                    className="group text-white/50 hover:text-gold text-xs transition-colors duration-300 cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold/40 rounded-full group-hover:scale-150 group-hover:bg-gold transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Service Times */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '2000px', amount: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-gold font-semibold text-sm tracking-wider uppercase mb-6">Service Times</h4>
            <ul className="space-y-4">
              {[
                { day: 'Sunday Worship', time: '9:00 AM — 12:00 PM' },
                { day: 'Bible Study', time: 'Wednesday 5:00 PM' },
                { day: 'Prayer Meeting', time: 'Friday 6:00 PM' },
                { day: 'Youth Service', time: 'Saturday 4:00 PM' },
              ].map((svc) => (
                <li key={svc.day} className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-300 cursor-default">
                  <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                  <div>
                    <p className="text-white/80 text-sm font-medium group-hover:text-gold transition-colors">{svc.day}</p>
                    <p className="text-white/50 text-xs">{svc.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '2000px', amount: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-gold font-semibold text-sm tracking-wider uppercase mb-6">Stay Connected</h4>
            <ul className="space-y-3">
              <li className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-300 cursor-default">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">Rakai District, Uganda</p>
              </li>
              <li className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-300 cursor-default">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">+974 5076 9794</p>
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">+974 5119 3650</p>
                </div>
              </li>
              <li className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-300 cursor-default">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex flex-col">
                  <p className="text-white/60 text-sm group-hover:text-gold transition-colors">info@visionlifeministries.com</p>
                  <p className="text-white/60 text-sm group-hover:text-gold transition-colors">visionlifevisionlifeministries@gmail.com</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <Separator className="bg-gold/10 my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            Copyright © 2026 Vision Life Ministries LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <p className="text-white/30 text-xs flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-burgundy" /> for God&apos;s Glory
            </p>
            <p className="text-white/30 text-xs flex items-center gap-1.5">
              Website developed by{' '}
              <a
                href="https://www.agabaexeviar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/80 hover:text-gold underline-offset-2 hover:underline transition-colors font-medium"
              >
                Agaba Exeviar
              </a>
            </p>
            <motion.button
              onClick={scrollToTop}
              className="w-8 h-8 bg-gold/20 hover:bg-gold/30 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-4 h-4 text-gold" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
