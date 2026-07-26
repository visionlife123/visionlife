'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Shield, Lock, Eye, Cookie, Users, FileText, Mail,
  ArrowRight, Database, AlertCircle, CheckCircle,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, blurIn,
  staggerContainer, staggerItem, staggerItemScale, viewportOnce, EASE_OUT,
} from '@/lib/animations';

const sections = [
  {
    icon: <Database className="w-6 h-6" />,
    title: '1. Information We Collect',
    content: [
      'Personal information you voluntarily provide — such as your name, email address, phone number, and prayer requests — when you contact us, subscribe to updates, or submit a form.',
      'Communication details when you reach out via email, phone, WhatsApp, or our contact form for prayer, counseling, or general inquiries.',
      'Anonymous usage data such as browser type, device information, pages visited, and general location, collected automatically when you browse our website.',
    ],
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: '2. How We Use Your Information',
    content: [
      'To respond to your prayer requests, counseling needs, and inquiries in a timely and personal manner.',
      'To send you ministry updates, event invitations, and newsletters — only when you have expressly consented to receive them.',
      'To improve our website, content, and ministry services based on anonymous usage analytics and user feedback.',
      'To fulfill our legal, accounting, and reporting obligations as a registered faith-based organization in Uganda.',
    ],
  },
  {
    icon: <Cookie className="w-6 h-6" />,
    title: '3. Cookies & Tracking Technologies',
    content: [
      'Our website uses cookies and similar technologies to enhance your browsing experience, remember your preferences, and analyze website traffic.',
      'Essential cookies are necessary for the website to function properly and cannot be disabled.',
      'You can choose to accept or decline non-essential cookies through the consent banner displayed on your first visit. You may also clear cookies at any time through your browser settings.',
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: '4. Sharing Your Information',
    content: [
      'We do not sell, rent, or trade your personal information to third parties under any circumstances.',
      'We may share your information with trusted ministry partners, pastoral team members, or service providers — strictly for the purpose of responding to your request or supporting ministry operations.',
      'We may disclose information when required by law, court order, or to protect the rights, property, or safety of Vision Life Ministries LTD, our members, or others.',
    ],
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: '5. Data Security',
    content: [
      'We implement appropriate technical, administrative, and physical safeguards designed to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
      'Access to personal information is restricted to authorized personnel who need it to perform their ministry duties.',
      'While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: '6. Your Rights',
    content: [
      'You have the right to access, update, or correct the personal information we hold about you.',
      'You may request that we delete your personal information from our records, subject to legal retention requirements.',
      'You may opt out of receiving marketing or ministry communications at any time by clicking the unsubscribe link in our emails or contacting us directly.',
      'You may request a copy of all personal data we hold about you by submitting a written request.',
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: '7. Children\'s Privacy',
    content: [
      'Our ministry serves families and young people, but our website is not directed to children under the age of 13 without parental involvement.',
      'We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can promptly delete it.',
    ],
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
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
  const router = useRouter();

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-breathe" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-burgundy rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="relative max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase hover:bg-gold/20 transition-colors cursor-default">
                Legal
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <Shield className="inline-block w-10 h-10 md:w-14 md:h-14 text-gold mr-3 -mt-2 group-icon" />
              Privacy <span className="text-gold-gradient animate-gradient-shift">Policy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE_OUT }}
              className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              How Vision Life Ministries LTD collects, uses, and protects your personal information.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: EASE_OUT }}
              className="text-gold/70 text-xs mt-4 tracking-wider uppercase"
            >
              Last Updated: January 2026
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16">
        <div className="max-w-4xl mx-auto section-padding">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Card className="bg-white border-0 shadow-md rounded-sm overflow-hidden hover-lift cursor-default">
              <div className="h-1.5 bg-gradient-to-r from-gold to-burgundy" />
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-dark mb-4">Our Commitment to Your Privacy</h2>
                <p className="text-dark/70 text-sm md:text-base leading-relaxed">
                  Vision Life Ministries LTD (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is
                  committed to protecting and respecting your privacy. This Privacy Policy explains how
                  we collect, use, disclose, and safeguard your information when you visit our website,
                  attend our services, or interact with our ministry. We comply with applicable data
                  protection laws, including Uganda&rsquo;s Data Protection and Privacy Act and the
                  General Data Protection Regulation (GDPR).
                </p>
                <p className="text-dark/70 text-sm md:text-base leading-relaxed mt-3">
                  By using our website and services, you consent to the practices described in this
                  Privacy Policy.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="bg-cream pb-16">
        <div className="max-w-4xl mx-auto section-padding">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            {sections.map((section) => (
              <motion.div key={section.title} variants={staggerItem}>
                <Card className="group bg-white border border-dark/5 hover:shadow-lg transition-shadow duration-500 rounded-sm hover-lift cursor-default">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 shrink-0 rounded-lg bg-gradient-to-br from-gold/10 to-burgundy/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <span className="group-icon inline-flex">{section.icon}</span>
                      </div>
                      <h2 className="text-dark font-bold text-lg md:text-xl mt-1 group-hover:text-burgundy transition-colors">{section.title}</h2>
                    </div>
                    <ul className="space-y-2 pl-2">
                      {section.content.map((para, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-2 shrink-0" />
                          <p className="text-dark/70 text-sm leading-relaxed">{para}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Your Rights Quick List */}
      <section className="bg-cream pb-20">
        <div className="max-w-4xl mx-auto section-padding">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Card className="bg-dark border-gold/10 rounded-sm overflow-hidden hover-lift cursor-default">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <CheckCircle className="w-5 h-5 group-icon" />
                  </div>
                  <h2 className="text-gold font-bold text-xl group-hover:text-gold-light transition-colors">Your Rights at a Glance</h2>
                </div>
                <motion.div
                  variants={staggerContainer(0.08)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {yourRights.map((right, i) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      className="group flex items-center gap-2.5 hover:translate-x-1 transition-transform duration-300 cursor-default"
                    >
                      <CheckCircle className="w-4 h-4 text-gold shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <p className="text-white/70 text-sm group-hover:text-white transition-colors">{right}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-cream pb-24">
        <div className="max-w-4xl mx-auto section-padding">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Card className="group bg-white border-0 shadow-md rounded-sm overflow-hidden hover-lift cursor-default">
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Mail className="w-7 h-7 group-icon" />
                </div>
                <h2 className="text-dark font-bold text-2xl mb-3 group-hover:text-burgundy transition-colors">Privacy Questions?</h2>
                <p className="text-dark/60 text-sm md:text-base leading-relaxed mb-6 max-w-xl mx-auto">
                  If you have any questions about this Privacy Policy or wish to exercise any of your
                  rights regarding your personal data, please contact us:
                </p>
                <div className="bg-cream rounded-sm p-5 border border-dark/5 max-w-md mx-auto space-y-2 text-left">
                  <p className="text-dark text-sm font-medium">Vision Life Ministries LTD</p>
                  <p className="text-dark/60 text-sm flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gold" />
                    info@visionlifeministries.com
                  </p>
                  <p className="text-dark/60 text-sm flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gold" />
                    visionlifevisionlifeministries@gmail.com
                  </p>
                  <p className="text-dark/60 text-sm">Rakai District, Uganda, East Africa</p>
                </div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block mt-8">
                  <button
                    onClick={() => { router.push('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark font-bold px-7 py-3 text-sm tracking-wider uppercase rounded-sm cursor-pointer transition-colors btn-shine hover-arrow"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 hover-arrow-target" />
                  </button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-dark/40 text-xs text-center mt-8 italic leading-relaxed max-w-2xl mx-auto"
          >
            This Privacy Policy may be updated from time to time to reflect changes in our practices or
            legal requirements. The &ldquo;Last Updated&rdquo; date at the top of this page indicates
            the most recent revision. We encourage you to review this page periodically.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
