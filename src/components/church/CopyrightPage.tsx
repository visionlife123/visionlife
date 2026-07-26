'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Copyright, Shield, FileText, BookOpen, Image as ImageIcon,
  Mail, AlertCircle, ArrowRight, Sparkles,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, blurIn,
  staggerContainer, staggerItem, staggerItemScale, viewportOnce, EASE_OUT,
} from '@/lib/animations';

const protections = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Text & Written Content',
    description: 'All written content on this website — including articles, sermons, devotionals, program descriptions, and ministry materials — is the intellectual property of Vision Life Ministries LTD and may not be reproduced without permission.',
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: 'Images & Media',
    description: 'All photographs, illustrations, graphics, logos, and videos displayed on this site are protected by copyright law. They may not be downloaded, copied, or used for commercial purposes without prior written consent.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Sermons & Teachings',
    description: 'Sermon recordings, teachings, and related materials are the property of Vision Life Ministries LTD. They may be shared for personal, non-commercial use with proper attribution to the ministry.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Brand & Logo',
    description: 'The Vision Life Ministries name, logo, and brand identity are trademarks of the ministry. Their use is reserved and may not be used by third parties without express written authorization.',
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
              <Copyright className="inline-block w-10 h-10 md:w-14 md:h-14 text-gold mr-3 -mt-2 group-icon" />
              Copyright <span className="text-gold-gradient animate-gradient-shift">Notice</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE_OUT }}
              className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Information about the ownership and permitted use of content on the Vision Life Ministries website.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-20">
        <div className="max-w-4xl mx-auto section-padding">
          {/* Overview */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-12"
          >
            <Card className="bg-white border-0 shadow-md rounded-sm overflow-hidden hover-lift cursor-default">
              <div className="h-1.5 bg-linear-to-r from-gold to-burgundy" />
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-dark mb-4">Copyright Overview</h2>
                <p className="text-dark/70 text-sm md:text-base leading-relaxed mb-4">
                  Copyright © 2026 Vision Life Ministries LTD. All rights reserved.
                </p>
                <p className="text-dark/70 text-sm md:text-base leading-relaxed">
                  All content published on this website — including but not limited to text,
                  graphics, logos, images, audio recordings, video recordings, sermons, and
                  software — is the property of Vision Life Ministries LTD unless otherwise
                  stated, and is protected under applicable Ugandan and international copyright
                  laws.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* What's Protected */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-dark mb-6 text-center">
              What Is <span className="text-burgundy">Protected</span>
            </h2>
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {protections.map((item) => (
                <motion.div key={item.title} variants={staggerItem}>
                  <Card className="group bg-white border border-dark/5 hover:border-gold/30 hover:shadow-lg transition-all duration-500 rounded-sm h-full hover-lift cursor-default">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-gold/10 to-burgundy/10 flex items-center justify-center text-gold mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        <span className="group-icon inline-flex">{item.icon}</span>
                      </div>
                      <h3 className="text-dark font-bold text-base mb-2 group-hover:text-burgundy transition-colors">{item.title}</h3>
                      <p className="text-dark/60 text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Permissions */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-12"
          >
            <Card className="bg-dark border-gold/10 rounded-sm overflow-hidden hover-lift cursor-default">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Shield className="w-5 h-5 group-icon" />
                  </div>
                  <h2 className="text-gold font-bold text-xl group-hover:text-gold-light transition-colors">Permitted Use</h2>
                </div>
                <motion.ul
                  variants={staggerContainer(0.08)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className="space-y-3"
                >
                  {permissions.map((perm, i) => (
                    <motion.li
                      key={i}
                      variants={staggerItem}
                      className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300 cursor-default"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${perm.includes('NOT') ? 'bg-burgundy' : 'bg-gold'}`} />
                      <p className={`text-sm leading-relaxed ${perm.includes('NOT') ? 'text-burgundy-light/90 font-medium' : 'text-white/70'}`}>
                        {perm}
                      </p>
                    </motion.li>
                  ))}
                </motion.ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Request Permission */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-12"
          >
            <Card className="group bg-white border-0 shadow-md rounded-sm overflow-hidden hover-lift cursor-default">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <AlertCircle className="w-5 h-5 group-icon" />
                  </div>
                  <h2 className="text-dark font-bold text-xl group-hover:text-burgundy transition-colors">Requesting Permission</h2>
                </div>
                <p className="text-dark/70 text-sm md:text-base leading-relaxed mb-4">
                  For permission to use any of our content beyond the scope of the permitted uses
                  outlined above — including commercial use, republishing, or large-scale distribution —
                  please contact us directly using the details below:
                </p>
                <div className="bg-cream rounded-sm p-5 border border-dark/5 space-y-2">
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
              </CardContent>
            </Card>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-12"
          >
            <Card className="bg-linear-to-br from-burgundy/5 to-gold/5 border border-gold/20 rounded-sm overflow-hidden hover-lift cursor-default">
              <CardContent className="p-6">
                <p className="text-dark/70 text-xs leading-relaxed italic">
                  <strong className="not-italic text-burgundy">Disclaimer:</strong> The information
                  on this website is provided by Vision Life Ministries LTD for general informational
                  and ministry purposes. All information is provided in good faith; however, we make
                  no representation or warranty of any kind regarding the accuracy, adequacy, validity,
                  reliability, or completeness of any content on this site. Any reliance you place on
                  such information is strictly at your own risk.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center"
          >
            <p className="text-dark/60 text-sm mb-4">Have questions about our copyright policy?</p>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <button
                onClick={() => { router.push('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-dark font-bold px-7 py-3 text-sm tracking-wider uppercase rounded-sm cursor-pointer transition-colors btn-shine hover-arrow"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 hover-arrow-target" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
