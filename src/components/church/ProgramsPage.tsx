'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  BookOpen, Users, Shield, Heart, Brain, Wallet,
  TrendingUp, GraduationCap, Stethoscope,
  HandHeart, Church
} from 'lucide-react';
import {
  fadeInUp, scaleIn, blurIn,
  staggerContainer, staggerItem, staggerItemScale, viewportOnce, EASE_OUT,
} from '@/lib/animations';

const programs = [
  {
    icon: <BookOpen className="w-8 h-8 group-icon" />,
    title: 'Bible Study Training',
    description: 'Equipping individuals with deep understanding of Scripture to strengthen their faith and daily walk with God. Our structured Bible study programs take you from foundational truths to advanced theological understanding.',
    color: 'from-gold to-gold-dark',
    features: ['Inductive Bible Study Methods', 'Old & New Testament Survey', 'Theological Foundations', 'Practical Application'],
  },
  {
    icon: <Users className="w-8 h-8 group-icon" />,
    title: 'Youth Ministry',
    description: 'Guiding and empowering young people to grow spiritually, morally, and socially as future leaders. We create safe spaces for youth to discover their identity in Christ and develop their God-given potential.',
    color: 'from-burgundy to-burgundy-dark',
    features: ['Youth Worship Services', 'Mentorship Programs', 'Leadership Development', 'Creative Arts Ministry'],
  },
  {
    icon: <Shield className="w-8 h-8 group-icon" />,
    title: 'Leadership Ministry',
    description: 'Training leaders with biblical principles to serve effectively in church and community roles. We equip leaders with the spiritual, emotional, and practical tools needed for transformative leadership.',
    color: 'from-gold-dark to-gold',
    features: ['Leadership Intensives', 'Church Governance Training', 'Servant Leadership Principles', 'Strategic Ministry Planning'],
  },
  {
    icon: <Heart className="w-8 h-8 group-icon" />,
    title: 'Family Therapy',
    description: 'Providing counselling to strengthen family relationships and resolve conflicts in a godly way. Our trained counsellors offer biblical guidance for marriages, parenting, and family dynamics.',
    color: 'from-burgundy-dark to-burgundy',
    features: ['Marriage Counseling', 'Parenting Workshops', 'Family Restoration', 'Conflict Resolution'],
  },
  {
    icon: <Brain className="w-8 h-8 group-icon" />,
    title: 'Stress Management',
    description: 'Helping individuals develop healthy coping skills to handle life\'s pressures and challenges. We integrate biblical principles with practical strategies for emotional and spiritual wellbeing.',
    color: 'from-gold to-gold-dark',
    features: ['Biblical Coping Strategies', 'Mindfulness & Prayer', 'Burnout Prevention', 'Emotional Health Workshops'],
  },
  {
    icon: <Stethoscope className="w-8 h-8 group-icon" />,
    title: 'Psychological Safety & Mental Health Wellness',
    description: 'Promoting mental health awareness and creating safe spaces for emotional healing and support. We break the stigma around mental health in communities and provide professional guidance rooted in faith.',
    color: 'from-burgundy to-burgundy-dark',
    features: ['Mental Health Awareness', 'Support Groups', 'Trauma Healing', 'Professional Counseling Referrals'],
  },
  {
    icon: <Wallet className="w-8 h-8 group-icon" />,
    title: 'Financial Empowerment Programs',
    description: 'Teaching financial management skills to improve livelihoods and economic independence. We empower individuals and families with practical tools for financial stewardship and wealth creation.',
    color: 'from-gold-dark to-gold',
    features: ['Financial Literacy Training', 'Savings & Investment Groups', 'Entrepreneurship Skills', 'Business Mentorship'],
  },
  {
    icon: <TrendingUp className="w-8 h-8 group-icon" />,
    title: 'Youth Development Projects',
    description: 'Creating opportunities for youth to gain skills, education, and mentorship for a better future. We invest in the next generation through vocational training, academic support, and character development.',
    color: 'from-burgundy-dark to-burgundy',
    features: ['Vocational Skills Training', 'Academic Support Programs', 'Career Guidance', 'Community Service Projects'],
  },
];

export function ProgramsPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bible-study.png)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        </div>
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto py-32">
          <motion.span
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default"
          >
            Our Programs
          </motion.span>
          <motion.h1
            initial={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Services & <span className="text-gold-gradient animate-gradient-shift">Programmes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            At Vision Life Ministries, we offer a wide range of spiritual, social, and community development
            services to fulfill our calling and serve God&apos;s people effectively.
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
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
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              Eight Pathways to <span className="text-gold-dark">Holistic Transformation</span>
            </h2>
            <p className="text-dark/60 text-base md:text-lg max-w-2xl mx-auto">
              Each program is designed to meet spiritual, emotional, mental, and practical needs —
              transforming lives and communities through the power of the Gospel.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {programs.map((program) => (
              <motion.div key={program.title} variants={staggerItem}>
                <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-sm h-full overflow-hidden hover-lift hover-shimmer cursor-default">
                  <div className={`h-1.5 bg-gradient-to-r ${program.color}`} />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 shrink-0 rounded-lg bg-gradient-to-br ${program.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-dark group-hover:text-burgundy transition-colors">{program.title}</h3>
                      </div>
                    </div>
                    <p className="text-dark/60 text-sm leading-relaxed mb-4">{program.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-xs text-dark/50 group-hover:text-dark/70 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform duration-300" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/community.png)' }} />
          <div className="absolute inset-0 bg-burgundy/85" />
        </div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-4xl mx-auto section-padding text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforming Communities in <span className="text-gold-gradient animate-gradient-shift">Rakai District</span>
            </h2>
            <p className="text-white/80 text-base leading-relaxed mb-8">
              Many communities we work with in Rakai District often fall far short of having the most
              basic provisions of adequate health, food, clean water, clothing, shelter, and school for
              themselves and their children. Through our programs, we are bringing hope and practical
              support alongside the Gospel message.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: <Church className="w-6 h-6 group-icon" />, label: 'Churches Planted', value: '2+' },
              { icon: <GraduationCap className="w-6 h-6 group-icon" />, label: 'Schools Built', value: '1+' },
              { icon: <Users className="w-6 h-6 group-icon" />, label: 'Lives Impacted', value: '500+' },
              { icon: <HandHeart className="w-6 h-6 group-icon" />, label: 'Communities Served', value: '5+' },
            ].map((stat) => (
              <motion.div key={stat.label} variants={staggerItemScale}>
                <div className="group text-center px-3 py-4 rounded-sm hover:bg-gold/10 transition-colors duration-500 hover-glow cursor-default">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <p className="text-gold text-2xl font-bold group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
                  <p className="text-white/50 text-xs group-hover:text-white/80 transition-colors">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full hover:bg-gold/20 hover:border-gold/40 transition-all duration-400 hover-glow cursor-default">
              <HandHeart className="w-4 h-4 text-gold group-icon-pulse" />
              <span className="text-gold/80 text-sm font-medium">Hope • Healing • Restoration • Transformation</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
