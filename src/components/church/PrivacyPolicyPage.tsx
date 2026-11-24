'use client';

import { motion } from 'framer-motion';
import {
  AlertCircle, CheckCircle, Cookie, Database, Eye, FileText, Lock, Mail, Users,
} from 'lucide-react';
import { Action, Eyebrow, SectionHead } from '@/components/church/Editorial';
import { EASE_OUT, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const sections = [
  {
    icon: Database,
    title: '1. Information We Collect',
    content: [
      'Personal information you voluntarily provide — such as your name, email address, phone number, and prayer requests — when you contact us, subscribe to updates, or submit a form.',
      'Communication details when you reach out via email, phone, WhatsApp, or our contact form for prayer, counseling, or general inquiries.',
      'Anonymous usage data such as browser type, device information, pages visited, and general location, collected automatically when you browse our website.',
    ],
  },
  {
    icon: Eye,
    title: '2. How We Use Your Information',
    content: [
      'To respond to your prayer requests, counseling needs, and inquiries in a timely and personal manner.',
      'To send you ministry updates, event invitations, and newsletters — only when you have expressly consented to receive them.',
      'To improve our website, content, and ministry services based on anonymous usage analytics and user feedback.',
      'To fulfill our legal, accounting, and reporting obligations as a registered faith-based organization in Uganda.',
    ],
  },
  {
    icon: Cookie,
    title: '3. Cookies & Tracking Technologies',
    content: [
      'Our website uses cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze website traffic.',
      'Essential cookies are necessary for the website to function properly and cannot be disabled.',
      'You can choose to accept or decline non-essential cookies through the consent banner displayed on your first visit. You may also clear cookies at any time through your browser settings.',
    ],
  },
  {
    icon: Users,
    title: '4. Sharing Your Information',
    content: [
      'We do not sell, rent, or trade your personal information to third parties under any circumstances.',
      'We may share your information with trusted ministry partners, pastoral team members, or service providers — strictly for the purpose of responding to your request or supporting ministry operations.',
      'We may disclose information when required by law, court order, or to protect the rights, property, or safety of Vision Life Ministries LTD, our members, or others.',
    ],
  },
  {
    icon: Lock,
    title: '5. Data Security',
    content: [
      'We implement appropriate technical, administrative, and physical safeguards designed to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
      'Access to personal information is restricted to authorized personnel who need it to perform their ministry duties.',
      'While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    icon: FileText,
    title: '6. Your Rights',
    content: [
      'You have the right to access, update, or correct the personal information we hold about you.',
      'You may request that we delete your personal information from our records, subject to legal retention requirements.',
      'You may opt out of receiving marketing or ministry communications at any time by clicking the unsubscribe link in our emails or contacting us directly.',
      'You may request a copy of all personal data we hold about you by submitting a written request.',
    ],
  },
  {
    icon: Users,
    title: "7. Children's Privacy",
    content: [
      'Our ministry serves families and young people, but our website is not directed to children under the age of 13 without parental involvement.',
      'We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can promptly delete it.',
    ],
  },
  {
    icon: AlertCircle,
    title: '8. Third-Party Links',
    content: [
      'Our website may contain links to third-party websites, social media platforms, and external services such as YouTube, Facebook, and WhatsApp.',
      'We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.',
    ],
  },
];

const yourRights = [
  'Access the personal data we hold about you',
  'Request correction of inaccurate information',
  'Request deletion of your personal data',
  'Opt out of marketing communications',
  'Withdraw consent for data processing',
  'Request a data portability copy',
];

export function PrivacyPolicyPage() {
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
            Privacy <span className="display-italic text-gold">policy</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: EASE_OUT }}
            className="body-lg mt-6 max-w-2xl text-cream/55"
          >
            How Vision Life Ministries LTD collects, uses, and protects your personal information.
          </motion.p>
          <p className="mt-5 text-[9.5px] uppercase tracking-[0.22em] text-gold/70">
            Last Updated: January 2026
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="section-sm">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Our Commitment</Eyebrow>
              <h2 className="t-h3 mt-5 text-dark">
                Your privacy, <span className="display-italic">treated with care</span>.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[15px] leading-relaxed text-dark/70">
                Vision Life Ministries LTD (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) is committed to protecting and respecting your privacy. This
                Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website, attend our services, or interact with our
                ministry. We comply with applicable data protection laws, including Uganda&rsquo;s
                Data Protection and Privacy Act and the General Data Protection Regulation (GDPR).
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-dark/55">
                By using our website and services, you consent to the practices described in this
                Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy sections */}
      <section className="pb-8">
        <div className="shell">
          <div className="border-t border-dark/12">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.article
                  key={section.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6, delay: (i % 3) * 0.04, ease: EASE_OUT }}
                  className="grid gap-5 border-b border-dark/12 py-9 lg:grid-cols-12 lg:gap-10"
                >
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-3">
                      <Icon className="size-4 shrink-0 text-gold-ink/70" />
                      <h2 className="font-display text-[1.35rem] leading-snug text-dark">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  <ul className="space-y-3 lg:col-span-8">
                    {section.content.map((para) => (
                      <li key={para} className="flex items-start gap-3">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-gold-dark/60" />
                        <p className="text-[13.5px] leading-relaxed text-dark/60">{para}</p>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rights */}
      <section className="section-sm">
        <div className="shell">
          <div className="rounded-2xl bg-dark p-7 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <SectionHead
                tone="light"
                eyebrow="At a Glance"
                title={
                  <>
                    Your <span className="display-italic text-gold">rights</span>.
                  </>
                }
                titleClassName="t-h3 mt-4"
              />
              <CheckCircle className="size-7 text-gold" />
            </div>

            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-9 grid gap-4 sm:grid-cols-2"
            >
              {yourRights.map((right) => (
                <motion.div
                  key={right}
                  variants={staggerItem}
                  className="flex items-start gap-3 border-t border-white/10 pt-4"
                >
                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" />
                  <p className="text-[13px] leading-relaxed text-cream/60">{right}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="pb-24">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-8 border-t border-dark/12 pt-10 lg:flex-row lg:items-end">
            <div className="max-w-xl">
              <Eyebrow>Privacy Questions?</Eyebrow>
              <h2 className="t-h3 mt-4 text-dark">
                If you have any questions about this Privacy Policy.
              </h2>
              <p className="mt-4 text-[13.5px] leading-relaxed text-dark/55">
                If you have any questions about this Privacy Policy or wish to exercise any of your
                rights regarding your personal data, please contact us:
              </p>
              <div className="mt-6 space-y-2.5">
                <p className="text-[13px] font-medium text-dark">Vision Life Ministries LTD</p>
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

            <Action href="/contact-us" variant="gold" icon="right">
              Contact Us
            </Action>
          </div>

          <p className="mt-12 max-w-3xl border-t border-dark/10 pt-6 text-[11.5px] italic leading-relaxed text-dark/40">
            This Privacy Policy may be updated from time to time to reflect changes in our practices
            or legal requirements. The &ldquo;Last Updated&rdquo; date at the top of this page
            indicates the most recent revision. We encourage you to review this page periodically.
          </p>
        </div>
      </section>
    </div>
  );
}
