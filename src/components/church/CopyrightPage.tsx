'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle, BookOpen, FileText, Image as ImageIcon, Mail, Shield, Sparkles,
} from 'lucide-react';
import { Action, Eyebrow, SectionHead } from '@/components/church/Editorial';
import { EASE_OUT, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const protections = [
  {
    icon: FileText,
    title: 'Text & Written Content',
    description:
      'All written content on this website — including articles, sermons, devotionals, program descriptions, and ministry materials — is the intellectual property of Vision Life Ministries LTD and may not be reproduced without permission.',
  },
  {
    icon: ImageIcon,
    title: 'Images & Media',
    description:
      'All photographs, illustrations, graphics, logos, and videos displayed on this site are protected by copyright law. They may not be downloaded, copied, or used for commercial purposes without prior written consent.',
  },
  {
    icon: BookOpen,
    title: 'Sermons & Teachings',
    description:
      'Sermon recordings, teachings, and related materials are the property of Vision Life Ministries LTD. They may be shared for personal, non-commercial use with proper attribution to the ministry.',
  },
  {
    icon: Sparkles,
    title: 'Brand & Logo',
    description:
      'The Vision Life Ministries name, logo, and brand identity are trademarks of the ministry. Their use is reserved and may not be used by third parties without express written authorization.',
  },
];

const permissions = [
  'You may share links to our content on social media and personal networks.',
  'You may quote brief excerpts of written content with proper attribution to Vision Life Ministries LTD.',
  'You may download and share sermon recordings for personal, non-commercial, ministry use.',
  'You may NOT reproduce, modify, or distribute any content for commercial purposes without permission.',
  'You may NOT remove or alter any copyright, trademark, or attribution notices from any content.',
];

export function CopyrightPage() {
  return (
    <div className="min-w-0 overflow-hidden bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark pb-16 pt-40 md:pb-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-burgundy blur-3xl" />
        </div>
        <div className="shell relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <Eyebrow tone="light">Legal</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.15, ease: EASE_OUT }}
            className="t-h1 mt-6 max-w-4xl text-cream"
          >
            Copyright <span className="display-italic text-gold">notice</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT }}
            className="body-lg mt-6 max-w-2xl text-cream/55"
          >
            Information about the ownership and permitted use of content on the Vision Life
            Ministries website.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-sm">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Overview</Eyebrow>
              <p className="mt-5 font-display text-2xl leading-snug text-dark">
                &copy; 2026 Vision Life Ministries LTD.
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-dark/40">
                All rights reserved
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[15px] leading-relaxed text-dark/70">
                All content published on this website — including but not limited to text, graphics,
                logos, images, audio recordings, video recordings, sermons, and software — is the
                property of Vision Life Ministries LTD unless otherwise stated, and is protected
                under applicable Ugandan and international copyright laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is protected */}
      <section className="section-sm bg-dark">
        <div className="shell">
          <SectionHead
            tone="light"
            eyebrow="Ownership"
            title={
              <>
                What is <span className="display-italic text-gold">protected</span>.
              </>
            }
          />

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2"
          >
            {protections.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="group bg-dark p-7 transition-colors duration-500 hover:bg-white/[0.03] sm:p-8"
                >
                  <Icon className="size-5 text-gold" />
                  <h3 className="mt-6 font-display text-xl text-cream transition-colors duration-500 group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-cream/45">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Permitted use */}
      <section className="section-sm">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <Shield className="size-5 text-gold-ink" />
                <Eyebrow>Permitted Use</Eyebrow>
              </div>
              <h2 className="t-h3 mt-5 text-dark">
                Share freely. <span className="display-italic">Credit faithfully.</span>
              </h2>
            </div>

            <ul className="lg:col-span-8">
              {permissions.map((permission, i) => {
                const restricted = permission.includes('NOT');
                return (
                  <motion.li
                    key={permission}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: EASE_OUT }}
                    className="flex items-start gap-4 border-b border-dark/12 py-5 first:border-t"
                  >
                    <span
                      className={`mt-2 size-1.5 shrink-0 rounded-full ${
                        restricted ? 'bg-burgundy' : 'bg-gold-dark'
                      }`}
                    />
                    <p
                      className={`text-[13.5px] leading-relaxed ${
                        restricted ? 'font-medium text-burgundy-dark' : 'text-dark/65'
                      }`}
                    >
                      {permission}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Permission request */}
      <section className="pb-16">
        <div className="shell">
          <div className="grid gap-8 rounded-2xl bg-white p-7 shadow-[0_30px_80px_-60px_rgba(10,10,10,0.5)] sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <AlertCircle className="size-5 text-burgundy" />
                <p className="text-[9.5px] uppercase tracking-[0.22em] text-dark/40">
                  Requesting Permission
                </p>
              </div>
              <p className="mt-5 text-[14.5px] leading-relaxed text-dark/65">
                For permission to use any of our content beyond the scope of the permitted uses
                outlined above — including commercial use, republishing, or large-scale
                distribution — please contact us directly using the details below:
              </p>
            </div>

            <div className="lg:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-dark/35">
                Vision Life Ministries LTD
              </p>
              <div className="mt-4 space-y-2.5">
                <a
                  href="mailto:info@visionlifeministries.com"
                  className="flex items-center gap-2.5 break-all text-[13px] text-dark/60 transition-colors hover:text-burgundy"
                >
                  <Mail className="size-4 shrink-0 text-gold-ink" />
                  info@visionlifeministries.com
                </a>
                <a
                  href="mailto:visionlifevisionlifeministries@gmail.com"
                  className="flex items-center gap-2.5 break-all text-[13px] text-dark/60 transition-colors hover:text-burgundy"
                >
                  <Mail className="size-4 shrink-0 text-gold-ink" />
                  visionlifevisionlifeministries@gmail.com
                </a>
                <p className="text-[13px] text-dark/50">Rakai District, Uganda, East Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="pb-24">
        <div className="shell">
          <div className="rounded-2xl border border-gold-dark/20 bg-gold/8 p-6 sm:p-8">
            <p className="text-[12.5px] italic leading-relaxed text-dark/60">
              <strong className="not-italic text-burgundy">Disclaimer:</strong> The information on
              this website is provided by Vision Life Ministries LTD for general informational and
              ministry purposes. All information is provided in good faith; however, we make no
              representation or warranty of any kind regarding the accuracy, adequacy, validity,
              reliability, or completeness of any content on this site. Any reliance you place on
              such information is strictly at your own risk.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-dark/12 pt-8 sm:flex-row sm:items-center">
            <p className="text-[13px] text-dark/55">
              Have questions about our copyright policy?
            </p>
            <Action href="/contact-us" variant="gold" icon="right">
              Contact Us
            </Action>
          </div>
        </div>
      </section>
    </div>
  );
}
