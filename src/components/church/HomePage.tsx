'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Church, BookOpen, Heart, Users, ArrowRight, Phone,
  Globe, HandHeart, Shield, Sparkles, ChevronRight
} from 'lucide-react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import {
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, blurIn,
  staggerContainer, staggerItem, staggerItemScale, viewportOnce, EASE_OUT,
} from '@/lib/animations';

const pathwaySteps = [
  {
    icon: <Globe className="w-6 h-6" />,
    step: '01',
    title: 'Encounter Christ',
    subtitle: 'Spiritual Wellbeing & Worship',
    description: 'Prayer, Worship Encounters, Spiritual Healing — experiencing the transformative presence of God.',
    color: 'from-gold/20 to-gold/5',
    borderColor: 'border-gold/30',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    step: '02',
    title: 'Grow in Christ',
    subtitle: 'Discipleship & Formation',
    description: 'Biblical Teaching, Spiritual Disciplines, Christlike Character — deepening your walk with God.',
    color: 'from-burgundy/20 to-burgundy/5',
    borderColor: 'border-burgundy/30',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    step: '03',
    title: 'Discover Calling',
    subtitle: 'Identity & Purpose',
    description: 'Identity in Christ, Gift Discovery, Destiny Clarity — finding your God-given purpose.',
    color: 'from-gold/20 to-gold/5',
    borderColor: 'border-gold/30',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    step: '04',
    title: 'Equip Believers',
    subtitle: 'Leadership & Development',
    description: 'Ministry Training, Leadership Growth, Spiritual Activation — preparing for kingdom service.',
    color: 'from-burgundy/20 to-burgundy/5',
    borderColor: 'border-burgundy/30',
  },
  {
    icon: <Users className="w-6 h-6" />,
    step: '05',
    title: 'Impact Society',
    subtitle: 'Community Transformation',
    description: 'Compassion Ministry, Skills & Empowerment, Social Outreach — making a difference in communities.',
    color: 'from-gold/20 to-gold/5',
    borderColor: 'border-gold/30',
  },
  {
    icon: <HandHeart className="w-6 h-6" />,
    step: '06',
    title: 'Send Light',
    subtitle: 'Mission & Kingdom Influence',
    description: 'Community Witness, Marketplace Influence, Global Mission — extending God\'s kingdom beyond borders.',
    color: 'from-burgundy/20 to-burgundy/5',
    borderColor: 'border-burgundy/30',
  },
];

const whatToExpect = [
  {
    icon: <Church className="w-8 h-8" />,
    title: 'Sunday Worship',
    description: 'Join us every Sunday 9:00 AM for a powerful encounter with God through praise, worship, and the Word.',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Bible Study',
    description: 'Structured classes to grow your faith, from foundation to leadership, diving deep into Scripture.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Healing & Deliverance',
    description: 'Experience God\'s healing power through prayer and deliverance consultations with our pastoral team.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Outreach',
    description: 'Reaching communities with compassion, empowerment, and the Gospel in Rakai District and beyond.',
  },
  {
    icon: <HandHeart className="w-8 h-8" />,
    title: 'Giving',
    description: 'Partner with us in tithes, offerings, and kingdom investment to transform lives and communities.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Missions',
    description: 'Establishing churches and schools in remote villages, spreading the Gospel to all nations.',
  },
];

const testimonials = [
  {
    quote:
      "Before I came to Vision Life Ministries, I was broken and had lost all hope. Through the healing and deliverance ministry, I encountered God's restoring power. Today I am free, whole, and serving in the worship team. God truly restores!",
    name: "Grace Nakamya",
    designation: "Worship Team Member, VLM Rakai",
    src: "/images/testimonial-1.png",
  },
  {
    quote:
      "The youth ministry at Vision Life changed the trajectory of my life. I was heading down a destructive path, but through the discipleship program, I discovered my purpose in Christ. Now I mentor other young people in our community.",
    name: "Emmanuel Ssebunya",
    designation: "Youth Leader, VLM Rakai",
    src: "/images/testimonial-2.png",
  },
  {
    quote:
      "As a widow, I struggled to provide for my children. The compassion ministry at Vision Life not only provided practical support but also equipped me with skills through their financial empowerment program. I can now sustain my family with dignity.",
    name: "Margaret Nalubega",
    designation: "Women's Ministry Member, VLM Rakai",
    src: "/images/testimonial-3.png",
  },
  {
    quote:
      "The Bible study program deepened my understanding of God's Word in ways I never imagined. From a new believer to now leading a home cell group — the equipping pathway at VLM is real and transformative. I am living proof.",
    name: "Pastor James Mugerwa",
    designation: "Cell Group Leader, VLM Rakai",
    src: "/images/testimonial-4.png",
  },
  {
    quote:
      "I attended a crusade organized by Vision Life in my village and gave my life to Christ. Since then, the church they planted in our community has become my family. The missions team didn't just preach — they stayed to disciple and empower us.",
    name: "Rebecca Ainembabazi",
    designation: "Church Member, VLM Mission Church",
    src: "/images/testimonial-5.png",
  },
];

export function HomePage() {
  const router = useRouter();

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dbembxeoi/image/upload/v1784185745/WhatsApp_Image_2026-07-16_at_9.26.01_AM_1_e7cs6k.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-dark/80 via-dark/60 to-dark" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[10, 25, 40, 55, 70, 85, 15, 35, 50, 65, 80, 5, 45, 60, 75, 20, 30, 90, 95, 38].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold/30 rounded-full"
              style={{
                left: `${pos}%`,
                top: `${(pos * 1.3) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 5),
                repeat: Infinity,
                delay: (i % 7) * 0.3,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-xs font-medium tracking-widest uppercase animate-breathe">
              Welcome to
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.05]"
          >
            <span className="text-gold-gradient animate-gradient-shift">Vision Life</span>
            <br />
            <span className="text-white">Ministries</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Reaching people with the love of God, Restoring people to the wholeness
            of Christ&apos;s image, Equipping people to minister effectively.
          </motion.p>

          {/* Animated pathway indicators */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {['Encounter', 'Grow', 'Discover', 'Equip', 'Impact', 'Send'].map((step, i) => (
              <motion.span
                key={step}
                className="text-gold/80 text-xs md:text-sm font-medium tracking-wider uppercase"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {step}
                {i < 5 && <ChevronRight className="inline w-3 h-3 mx-1 text-gold/40" />}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={() => { router.push('/about-us'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-gold hover:bg-gold-dark text-dark font-bold px-8 py-4 text-sm tracking-wider uppercase rounded-sm animate-pulse-glow btn-shine"
              >
                I&apos;m New Here
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button
                variant="outline"
                onClick={() => { router.push('/contact-us'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="border-gold/40 text-gold hover:bg-gold/10 hover:border-gold px-8 py-4 text-sm tracking-wider uppercase rounded-sm btn-shine transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Reach us
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="relative bg-cream py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-burgundy/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding relative">
          <motion.div
            variants={blurIn}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-burgundy/10 border border-burgundy/20 rounded-full text-burgundy text-xs font-medium tracking-widest uppercase mb-6 hover:bg-burgundy/20 transition-colors cursor-default">
              Welcome
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
              Called to <span className="text-burgundy">Transform</span>, Sent to <span className="text-gold-dark">Shine</span>
            </h2>
            <p className="text-dark/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Vision Life Ministries is a Spirit-filled Christian church and restoration ministry in
              Rakai District, Uganda, designed to heal the brokenhearted. Rooted in East Africa, our
              faith-based organisation spreads the message of God&apos;s love throughout Uganda, Africa
              and the nations through Sunday worship services, healing and deliverance ministry, Bible
              study, prayer, discipleship and many other church services.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Reaching',
                description: 'Reaching people with the love of God — going into all the world and making disciples of all nations.',
                icon: <Globe className="w-8 h-8 group-icon" />,
                gradient: 'from-gold to-gold-dark',
              },
              {
                title: 'Restoring',
                description: 'Restoring people to the wholeness of Christ\'s image — healing the brokenhearted and setting the captives free.',
                icon: <Heart className="w-8 h-8 group-icon" />,
                gradient: 'from-burgundy to-burgundy-dark',
              },
              {
                title: 'Equipping',
                description: 'Equipping people to minister effectively — training and empowering believers for kingdom service and societal impact.',
                icon: <Shield className="w-8 h-8 group-icon" />,
                gradient: 'from-gold-dark to-gold',
              },
            ].map((item) => (
              <motion.div key={item.title} variants={staggerItemScale}>
                <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-sm hover-lift hover-shimmer cursor-default h-full">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-burgundy transition-colors">{item.title}</h3>
                    <p className="text-dark/60 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Transformation Pathway */}
      <section className="relative bg-dark py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-gold/5 rounded-full blur-3xl animate-breathe" />
        </div>

        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding relative">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The <span className="text-gold-gradient animate-gradient-shift">Vision Life</span> Transformation Pathway
            </h2>
            <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
              Six intentional steps from encountering Christ to impacting nations.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {pathwaySteps.map((step) => (
              <motion.div key={step.step} variants={staggerItem}>
                <Card className={`group bg-linear-to-br ${step.color} border ${step.borderColor} hover:border-gold/50 transition-all duration-500 overflow-hidden rounded-sm h-full hover-lift hover-shimmer cursor-default`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-gold/60 text-xs font-bold tracking-wider group-hover:text-gold transition-colors">STEP {step.step}</span>
                      <div className="text-gold group-icon">{step.icon}</div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-gold transition-colors">{step.title}</h3>
                    <p className="text-gold/70 text-xs font-medium tracking-wider uppercase mb-3">{step.subtitle}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gold/10 border border-gold/20 rounded-full hover:bg-gold/20 hover:border-gold/40 transition-all duration-400 hover-glow cursor-default">
              <Sparkles className="w-4 h-4 text-gold group-icon-pulse" />
              <span className="text-gold/80 text-sm font-medium">Transformed Lives • Equipped Believers • Empowered Community • Kingdom Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="relative bg-cream py-24 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-burgundy/10 border border-burgundy/20 rounded-full text-burgundy text-xs font-medium tracking-widest uppercase mb-6 hover:bg-burgundy/20 transition-colors cursor-default">
              Join Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              What to <span className="text-gold-dark">Expect</span>
            </h2>
            <p className="text-dark/60 text-base max-w-2xl mx-auto">
              Experience the love of God in a welcoming community of believers at our church in Rakai, Uganda.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whatToExpect.map((item) => (
              <motion.div key={item.title} variants={staggerItem}>
                <Card className="group bg-white border border-dark/5 hover:border-gold/40 hover:shadow-xl transition-all duration-500 rounded-sm h-full hover-lift cursor-default">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-14 h-14 shrink-0 rounded-lg bg-linear-to-br from-gold/10 to-burgundy/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 group-hover:from-gold/20 group-hover:to-burgundy/20">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-dark font-bold text-base mb-2 group-hover:text-burgundy transition-colors">{item.title}</h3>
                      <p className="text-dark/60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-cream py-24 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <motion.div
            variants={blurIn}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-burgundy/10 border border-burgundy/20 rounded-full text-burgundy text-xs font-medium tracking-widest uppercase mb-6 hover:bg-burgundy/20 transition-colors cursor-default">
              Testimonies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              Lives <span className="text-burgundy">Transformed</span> by <span className="text-gold-dark">God&apos;s Grace</span>
            </h2>
            <p className="text-dark/60 text-base max-w-2xl mx-auto">
              Hear from members of our community whose lives have been changed through the power of God.
            </p>
          </motion.div>

          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url(/images/cross-sunrise.png)' }} />
          <div className="absolute inset-0 bg-burgundy/80" />
        </div>
        <div className="relative max-w-4xl mx-auto section-padding text-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-gold text-lg md:text-2xl font-serif italic leading-relaxed mb-6 hover-gradient-text inline-block">
              &ldquo;Now I would remind you, brothers, of the gospel I preached to you, which you received,
              in which you stand, and by which you are being saved, if you hold fast to the word I preached
              to you—unless you believed in vain.&rdquo;
            </p>
            <p className="text-gold-light/60 text-sm tracking-widest uppercase">— 1 Corinthians 15:1-4</p>
          </motion.div>
        </div>
      </section>

      {/* Give Section Preview */}
      <section className="relative bg-dark py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-breathe" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default">
                Give Generously
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Partner With Us in <span className="text-gold-gradient animate-gradient-shift">Kingdom Work</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-4">
                &ldquo;Each of you should give what you have decided in your heart to give, not reluctantly
                or under compulsion, for God loves a cheerful giver.&rdquo;
              </p>
              <p className="text-gold/60 text-sm tracking-wider uppercase mb-8">— 2 Corinthians 9:7</p>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Button
                    onClick={() => { router.push('/give'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="bg-gold hover:bg-gold-dark text-dark font-bold px-8 py-4 text-sm tracking-wider uppercase rounded-sm btn-shine"
                  >
                    Give Now
                    <ArrowRight className="w-4 h-4 ml-2 hover-arrow-target" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden shadow-2xl hover-img-zoom group">
                <img src="/images/reatify-times.jpg" alt="Vision Life Ministries outreach and kingdom work image" className="w-full h-80 object-cover object-top" />
                <div className="absolute inset-0 bg-linear-to-t from-dark/60 to-transparent" />
                <div className="absolute inset-0 ring-2 ring-gold/0 group-hover:ring-gold/40 transition-all duration-500 rounded-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
