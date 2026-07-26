'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Music, BookOpen, Heart, Users, Baby, Globe,
  HandHeart, Shield, Sparkles, Star, Cross
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  scaleIn, blurIn,
  staggerContainer, staggerItem, viewportOnce, EASE_OUT,
} from '@/lib/animations';

interface Ministry {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  meetingTime?: string;
}

const ministries: Ministry[] = [
  {
    icon: <Music className="w-8 h-8 group-icon" />,
    title: 'Worship & Arts Ministry',
    description: 'Leading the congregation into God\'s presence through Spirit-filled worship, music, dance, and creative arts. Our worship team is dedicated to creating an atmosphere where heaven meets earth.',
    color: 'from-gold to-gold-dark',
  },
  {
    icon: <Users className="w-8 h-8 group-icon" />,
    title: 'Youth Ministry',
    description: 'Empowering the next generation to discover their identity in Christ, develop their gifts, and impact their world. Through dynamic services, mentorship, and outreach, we raise young Kingdom leaders.',
    color: 'from-burgundy to-burgundy-dark',
  },
  {
    icon: <Baby className="w-8 h-8 group-icon" />,
    title: 'Children\'s Ministry',
    description: 'Nurturing children in the love and knowledge of God through age-appropriate Bible teaching, worship, and activities. We believe in planting seeds of faith that will last a lifetime.',
    color: 'from-gold-dark to-gold',
  },
  {
    icon: <Heart className="w-8 h-8 group-icon" />,
    title: 'Healing & Deliverance Ministry',
    description: 'A restoration ministry designed to heal the brokenhearted and set the captives free. Through prayer, counseling, and the power of the Holy Spirit, we minister to the whole person — spirit, soul, and body.',
    color: 'from-burgundy-dark to-burgundy',
  },
  {
    icon: <BookOpen className="w-8 h-8 group-icon" />,
    title: 'Bible Study & Discipleship',
    description: 'Equipping believers with deep understanding of Scripture through structured study programs. From new believers\' classes to advanced theological training, we build a strong biblical foundation.',
    color: 'from-gold to-gold-dark',
  },
  {
    icon: <Shield className="w-8 h-8 group-icon" />,
    title: 'Men\'s Ministry',
    description: 'Building men of integrity, purpose, and spiritual strength. We equip men to be godly leaders in their homes, workplaces, and communities through fellowship, Bible study, and accountability.',
    color: 'from-burgundy to-burgundy-dark',
  },
  {
    icon: <Sparkles className="w-8 h-8 group-icon" />,
    title: 'Women\'s Ministry',
    description: 'Empowering women to embrace their God-given identity and purpose. Through fellowship, teaching, and mentoring, we help women grow in faith and impact their spheres of influence.',
    color: 'from-gold-dark to-gold',
  },
  {
    icon: <Globe className="w-8 h-8 group-icon" />,
    title: 'Missions & Outreach',
    description: 'Taking the Gospel beyond our walls to communities, villages, and nations. We establish churches, schools, and development projects in some of the remotest areas of Uganda and beyond.',
    color: 'from-burgundy-dark to-burgundy',
  },
  {
    icon: <HandHeart className="w-8 h-8 group-icon" />,
    title: 'Compassion & Care Ministry',
    description: 'Demonstrating God\'s love through practical acts of compassion. We support vulnerable groups including people living with HIV/AIDS, orphans, widows, and those in crisis situations.',
    color: 'from-gold to-gold-dark',
  },
];

export function MinistriesPage() {
  const router = useRouter();

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/youth-ministry.png)' }} />
          <div className="absolute inset-0 bg-linear-to-b from-dark/80 via-dark/60 to-dark" />
        </div>
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto py-32">
          <motion.span
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default"
          >
            Our Ministries
          </motion.span>
          <motion.h1
            initial={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Serve in <span className="text-gold-gradient animate-gradient-shift">Ministry</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            Every believer is called to serve. Discover your place in the body of Christ and make
            an eternal impact through our various ministries.
          </motion.p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="relative bg-cream py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-burgundy/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding relative">
          <motion.div
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-burgundy/10 border border-burgundy/20 rounded-full text-burgundy text-xs font-medium tracking-widest uppercase mb-6 hover:bg-burgundy/20 transition-colors cursor-default">
              Explore
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              Explore Our <span className="text-burgundy">Ministries</span>
            </h2>
            <p className="text-dark/60 text-base max-w-2xl mx-auto">
              Each ministry is designed to help you grow, serve, and make a difference. Find where
              God is calling you to serve.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {ministries.map((ministry) => (
              <motion.div key={ministry.title} variants={staggerItem}>
                <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-sm h-full overflow-hidden hover-lift hover-shimmer cursor-default">
                  <div className={`h-1.5 bg-linear-to-r ${ministry.color}`} />
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-lg bg-linear-to-br ${ministry.color} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500`}>
                      {ministry.icon}
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-burgundy transition-colors">{ministry.title}</h3>
                    <p className="text-dark/60 text-sm leading-relaxed mb-4">{ministry.description}</p>
                    {ministry.meetingTime && (
                      <div className="flex items-center gap-2 text-xs text-gold-dark bg-gold/5 px-3 py-2 rounded-sm group-hover:bg-gold/10 transition-colors">
                        <Star className="w-3 h-3 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500" />
                        {ministry.meetingTime}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl animate-breathe" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-burgundy rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="relative max-w-4xl mx-auto section-padding text-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Cross className="w-12 h-12 text-gold mx-auto mb-6 group-icon-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Called to <span className="text-gold-gradient animate-gradient-shift">Serve</span>?
            </h2>
            <p className="text-white/60 text-base max-w-xl mx-auto mb-8">
              God has gifted every believer with unique talents and abilities for the advancement
              of His Kingdom. Discover your ministry and step into your calling today.
            </p>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <button
                onClick={() => { router.push('/contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-gold hover:bg-gold-dark text-dark font-bold px-8 py-4 text-sm tracking-wider uppercase rounded-sm cursor-pointer transition-colors btn-shine"
              >
                Get Involved Today
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
