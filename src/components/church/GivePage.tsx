'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Shield, Globe, Church, GraduationCap,
  HandHeart, Users, Building, Phone
} from 'lucide-react';
import {
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, blurIn,
  staggerContainer, staggerItem, staggerItemScale, viewportOnce, EASE_OUT,
} from '@/lib/animations';

const givingOptions = [
  {
    icon: <Building className="w-8 h-8 group-icon" />,
    title: 'Bank Transfer',
    description: 'Transfer directly to our ministry bank account. Use the details below for local or international transfers.',
    color: 'from-burgundy to-burgundy-dark',
  },
  {
    icon: <Globe className="w-8 h-8 group-icon" />,
    title: 'Mobile Money',
    description: 'Give conveniently via mobile money. Available on all major Ugandan mobile networks.',
    color: 'from-gold-dark to-gold',
  },
  {
    icon: <HandHeart className="w-8 h-8 group-icon" />,
    title: 'In-Person Giving',
    description: 'Visit us at any of our Sunday services or weekday meetings to give your tithes and offerings in person.',
    color: 'from-gold to-gold-dark',
  },
];

const impactAreas = [
  {
    icon: <Church className="w-6 h-6 group-icon" />,
    title: 'Church Planting',
    description: 'Establish churches in remote villages across Uganda',
  },
  {
    icon: <GraduationCap className="w-6 h-6 group-icon" />,
    title: 'Education',
    description: 'Build schools and provide education for children',
  },
  {
    icon: <HandHeart className="w-6 h-6 group-icon" />,
    title: 'Community Care',
    description: 'Support vulnerable groups including HIV/AIDS patients',
  },
  {
    icon: <Globe className="w-6 h-6 group-icon" />,
    title: 'Missions',
    description: 'Spread the Gospel to all nations and communities',
  },
  {
    icon: <Users className="w-6 h-6 group-icon" />,
    title: 'Youth Empowerment',
    description: 'Train and equip the next generation of leaders',
  },
  {
    icon: <Shield className="w-6 h-6 group-icon" />,
    title: 'Peace & Reconciliation',
    description: 'Promote peace in communities affected by conflict',
  },
];

export function GivePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/give-hands.png)' }} />
          <div className="absolute inset-0 bg-linear-to-b from-dark/80 via-dark/60 to-dark" />
        </div>
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto py-32">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase animate-breathe hover:bg-gold/20 transition-colors cursor-default">
              Give
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Give <span className="text-gold-gradient animate-gradient-shift">Generously</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-8"
          >
            &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly
            or under compulsion, for God loves a cheerful giver.&rdquo; — 2 Corinthians 9:7
          </motion.p>
        </div>
      </section>

      {/* Giving Options */}
      <section className="relative bg-cream py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-burgundy/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding relative">
          <motion.div
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-burgundy/10 border border-burgundy/20 rounded-full text-burgundy text-xs font-medium tracking-widest uppercase mb-6 hover:bg-burgundy/20 transition-colors cursor-default">
              Ways to Give
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Ways to <span className="text-burgundy">Give</span>
            </h2>
            <p className="text-dark/60 text-base max-w-2xl mx-auto">
              Your generous giving helps us reach more people with the love of God,
              plant churches, build schools, and transform communities.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {givingOptions.map((option) => (
              <motion.div key={option.title} variants={staggerItemScale}>
                <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-sm h-full text-center overflow-hidden hover-lift hover-shimmer cursor-default">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br ${option.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      {option.icon}
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-burgundy transition-colors">{option.title}</h3>
                    <p className="text-dark/60 text-sm leading-relaxed">{option.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/cross-sunrise.png)' }} />
          <div className="absolute inset-0 bg-dark/90" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-3xl animate-breathe" />
        </div>
        <div className="relative max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default">
              Your Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Your Giving <span className="text-gold-gradient animate-gradient-shift">Makes a Difference</span>
            </h2>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Every contribution goes directly toward advancing the Kingdom of God and transforming lives.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {impactAreas.map((area) => (
              <motion.div
                key={area.title}
                variants={staggerItem}
                className="group flex items-start gap-4 p-4 bg-white/5 border border-gold/10 hover:border-gold/40 rounded-sm hover-lift cursor-default transition-all duration-500"
              >
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 group-hover:bg-gold/20">
                  {area.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1 group-hover:text-gold transition-colors">{area.title}</h4>
                  <p className="text-white/50 text-xs">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bank Details */}
      <section className="relative bg-cream py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-breathe" />
        <div className="max-w-5xl mx-auto section-padding relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="h-full"
            >
              <Card className="group bg-white border-0 shadow-lg rounded-sm overflow-hidden hover-lift hover-shimmer cursor-default h-full flex flex-col justify-between">
                <div>
                  <div className="h-1.5 bg-linear-to-r from-gold to-burgundy animate-gradient-shift" />
                  <CardContent className="p-8 text-center flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-gold/10 to-burgundy/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 group-hover:from-gold/20 group-hover:to-burgundy/20">
                        <Building className="w-10 h-10 group-icon" />
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-burgundy transition-colors">Bank Transfer Details</h3>
                      <p className="text-dark/60 text-sm mb-6">Use the following details for direct bank transfers</p>
                    </div>
                    <div className="space-y-3 text-left w-full max-w-sm mx-auto">
                      {[
                        { label: 'Bank Name', value: 'Housing Finance Bank' },
                        { label: 'Account Name', value: 'Vision Life Ministries LTD' },
                        { label: 'Account Number', value: '1110000064228' },
                      ].map((detail) => (
                        <div key={detail.label} className="flex justify-between items-center py-2 border-b border-dark/5 last:border-0 hover:bg-gold/5 px-2 rounded-sm transition-colors">
                          <span className="text-dark/50 text-xs">{detail.label}</span>
                          <span className="text-dark font-medium text-sm">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>

            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="h-full"
            >
              <Card className="group bg-white border-0 shadow-lg rounded-sm overflow-hidden hover-lift hover-shimmer cursor-default h-full flex flex-col justify-between">
                <div>
                  <div className="h-1.5 bg-linear-to-r from-red-600 to-red-800 animate-gradient-shift" />
                  <CardContent className="p-8 text-center flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-br from-red-600/10 to-red-800/10 flex items-center justify-center text-red-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 group-hover:from-red-600/20 group-hover:to-red-800/20">
                        <Phone className="w-10 h-10 group-icon" />
                      </div>
                      <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-red-600 transition-colors">Airtel Money Transfers</h3>
                      <p className="text-dark/60 text-sm mb-6">Use the following details for Airtel Money transfers</p>
                    </div>
                    <div className="space-y-3 text-left w-full max-w-sm mx-auto">
                      {[
                        { label: 'Account Name', value: 'Akampulira Edson' },
                        { label: 'Mobile Number', value: '+256-741096594' },
                      ].map((detail) => (
                        <div key={detail.label} className="flex justify-between items-center py-2 border-b border-dark/5 last:border-0 hover:bg-red-50 px-2 rounded-sm transition-colors">
                          <span className="text-dark/50 text-xs">{detail.label}</span>
                          <span className="text-dark font-medium text-sm">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
