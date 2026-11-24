'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight, BookOpen, Church, Clock, Globe, HandHeart, Heart,
  MapPin, Phone, Shield, Sparkles, Users,
} from 'lucide-react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import {
  Action, ArrowLink, Eyebrow, ImageReveal, Index, Media, PullQuote, SectionHead,
} from '@/components/church/Editorial';
import {
  EASE_OUT, staggerContainer, staggerItem, viewportOnce,
} from '@/lib/animations';

/* ------------------------------------------------------------------ */
/*  Content — all copy, names and verses are the ministry's own        */
/* ------------------------------------------------------------------ */

const HERO_IMAGE =
  'https://res.cloudinary.com/dbembxeoi/image/upload/v1795527764/WhatsApp_Image_2026-11-17_at_3.43.01_AM_jxo2as.jpg';

const pathwaySteps = [
  {
    step: '01',
    title: 'Encounter Christ',
    subtitle: 'Spiritual Wellbeing & Worship',
    description:
      'Prayer, Worship Encounters, Spiritual Healing — experiencing the transformative presence of God.',
    icon: Globe,
  },
  {
    step: '02',
    title: 'Grow in Christ',
    subtitle: 'Discipleship & Formation',
    description:
      'Biblical Teaching, Spiritual Disciplines, Christlike Character — deepening your walk with God.',
    icon: BookOpen,
  },
  {
    step: '03',
    title: 'Discover Calling',
    subtitle: 'Identity & Purpose',
    description:
      'Identity in Christ, Gift Discovery, Destiny Clarity — finding your God-given purpose.',
    icon: Sparkles,
  },
  {
    step: '04',
    title: 'Equip Believers',
    subtitle: 'Leadership & Development',
    description:
      'Ministry Training, Leadership Growth, Spiritual Activation — preparing for kingdom service.',
    icon: Shield,
  },
  {
    step: '05',
    title: 'Impact Society',
    subtitle: 'Community Transformation',
    description:
      'Compassion Ministry, Skills & Empowerment, Social Outreach — making a difference in communities.',
    icon: Users,
  },
  {
    step: '06',
    title: 'Send Light',
    subtitle: 'Mission & Kingdom Influence',
    description:
      "Community Witness, Marketplace Influence, Global Mission — extending God's kingdom beyond borders.",
    icon: HandHeart,
  },
];

const weeklyRhythm = [
  { day: 'Sunday', name: 'Worship Service', time: '9:00 AM — 12:00 PM' },
  { day: 'Wednesday', name: 'Bible Study', time: '5:00 PM' },
  { day: 'Friday', name: 'Prayer Meeting', time: '6:00 PM' },
  { day: 'Saturday', name: 'Youth Service', time: '4:00 PM' },
];

const featuredMinistries = [
  {
    index: '01',
    title: 'Worship & Arts Ministry',
    description:
      "Leading the congregation into God's presence through Spirit-filled worship, music, dance, and creative arts. Our worship team is dedicated to creating an atmosphere where heaven meets earth.",
    image:
      'https://res.cloudinary.com/dbembxeoi/image/upload/v1795530085/WhatsApp_Image_2026-11-17_at_4.51.04_AMghfdh_uhpfgg.jpg',
    alt: 'The congregation worshipping together with hands raised at Vision Life Ministries',
  },
  {
    index: '02',
    title: 'Missions & Outreach',
    description:
      'Taking the Gospel beyond our walls to communities, villages, and nations. We establish churches, schools, and development projects in some of the remotest areas of Uganda and beyond.',
    image:
      'https://res.cloudinary.com/dbembxeoi/image/upload/v1784185747/WhatsApp_Image_2026-07-16_at_9.26.00_AM_y9hlxf.jpg',
    alt: 'Children learning in class at God Is Able Nursery and Primary School',
  },
  {
    index: '03',
    title: 'Healing & Deliverance Ministry',
    description:
      'A restoration ministry designed to heal the brokenhearted and set the captives free. Through prayer, counseling, and the power of the Holy Spirit, we minister to the whole person — spirit, soul, and body.',
    image:
      'https://res.cloudinary.com/dbembxeoi/image/upload/v1795531600/tttytytey_hhe2ir.jpg',
    alt: 'Members of the Vision Life Ministries community gathered together',
  },
];

const whatToExpect = [
  {
    icon: Church,
    title: 'Sunday Worship',
    description:
      'Join us every Sunday 9:00 AM for a powerful encounter with God through praise, worship, and the Word.',
  },
  {
    icon: BookOpen,
    title: 'Bible Study',
    description:
      'Structured classes to grow your faith, from foundation to leadership, diving deep into Scripture.',
  },
  {
    icon: Heart,
    title: 'Healing & Deliverance',
    description:
      "Experience God's healing power through prayer and deliverance consultations with our pastoral team.",
  },
  {
    icon: Users,
    title: 'Community Outreach',
    description:
      'Reaching communities with compassion, empowerment, and the Gospel in Rakai District and beyond.',
  },
  {
    icon: HandHeart,
    title: 'Giving',
    description:
      'Partner with us in tithes, offerings, and kingdom investment to transform lives and communities.',
  },
  {
    icon: Globe,
    title: 'Missions',
    description:
      'Establishing churches and schools in remote villages, spreading the Gospel to all nations.',
  },
];

const testimonials = [
  {
    quote:
      "Before I came to Vision Life Ministries, I was broken and had lost all hope. Through the healing and deliverance ministry, I encountered God's restoring power. Today I am free, whole, and serving in the worship team. God truly restores!",
    name: 'Grace Nakamya',
    designation: 'Worship Team Member, VLM Rakai',
    src: '/images/testimonial-1.png',
  },
  {
    quote:
      'The youth ministry at Vision Life changed the trajectory of my life. I was heading down a destructive path, but through the discipleship program, I discovered my purpose in Christ. Now I mentor other young people in our community.',
    name: 'Emmanuel Ssebunya',
    designation: 'Youth Leader, VLM Rakai',
    src: '/images/testimonial-2.png',
  },
  {
    quote:
      'As a widow, I struggled to provide for my children. The compassion ministry at Vision Life not only provided practical support but also equipped me with skills through their financial empowerment program. I can now sustain my family with dignity.',
    name: 'Margaret Nalubega',
    designation: "Women's Ministry Member, VLM Rakai",
    src: '/images/testimonial-3.png',
  },
  {
    quote:
      "The Bible study program deepened my understanding of God's Word in ways I never imagined. From a new believer to now leading a home cell group — the equipping pathway at VLM is real and transformative. I am living proof.",
    name: 'Pastor James Mugerwa',
    designation: 'Cell Group Leader, VLM Rakai',
    src: '/images/testimonial-4.png',
  },
  {
    quote:
      'I attended a crusade organized by Vision Life in my village and gave my life to Christ. Since then, the church they planted in our community has become my family. The missions team didn\u2019t just preach — they stayed to disciple and empower us.',
    name: 'Rebecca Ainembabazi',
    designation: 'Church Member, VLM Mission Church',
    src: '/images/testimonial-5.png',
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ['0%', '16%']);
  const heroFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="min-w-0 overflow-hidden bg-cream">
      {/* ============================================================ */}
      {/* 01 · HERO                                                    */}
      {/* ============================================================ */}
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-dark"
      >
        <motion.div style={{ y: heroImageY }} className="absolute inset-0 -z-20">
          <img
            src={HERO_IMAGE}
            alt="Vision Life Ministries congregation gathered in worship"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-[116%] w-full object-cover object-[center_35%]"
          />
        </motion.div>

        <div className="absolute inset-0 -z-10 bg-linear-to-t from-dark via-dark/60 to-dark/35" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-dark/80 via-dark/20 to-transparent" />

        <motion.div
          style={{ opacity: heroFade }}
          className="shell relative z-10 w-full pb-10 pt-36 md:pb-14"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE_OUT }}
            >
              <Eyebrow tone="light">Rakai District · Uganda</Eyebrow>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="hidden text-[10px] uppercase tracking-[0.24em] text-cream/45 md:block"
            >
              Reaching · Restoring · Equipping
            </motion.p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 48, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, delay: 0.2, ease: EASE_OUT }}
            className="t-hero mt-7 text-cream"
          >
            <span className="block text-gold-gradient">Vision Life</span>
            <span className="block">Ministries</span>
          </motion.h1>

          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:items-end">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: EASE_OUT }}
              className="body-lg max-w-xl text-cream/70 md:col-span-6 lg:col-span-5"
            >
              Reaching people with the love of God, restoring people to the wholeness of
              Christ&apos;s image, equipping people to minister effectively.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.85, ease: EASE_OUT }}
              className="flex flex-wrap items-center gap-3 md:col-span-6 md:justify-end lg:col-span-7"
            >
              <Action href="/about-us" variant="gold">
                I&apos;m New Here
              </Action>
              <Action href="/contact-us" variant="outlineLight" icon="right">
                Plan a Visit
              </Action>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 flex flex-col gap-4 border-t border-white/12 pt-6 pr-16 sm:flex-row sm:items-center sm:justify-between sm:pr-20"
          >
            <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-cream/50">
              <Clock className="size-3.5 text-gold" />
              Sunday Worship · 9:00 AM — 12:00 PM
            </p>
            <div className="flex items-center gap-6">
              <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-cream/40">
                <MapPin className="size-3.5 text-gold/70" />
                Rakai, Uganda
              </p>
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-cream/30">
                Scroll
                <span className="relative block h-8 w-px overflow-hidden bg-white/15">
                  <span className="absolute inset-x-0 top-0 h-3 animate-scroll-cue bg-gold" />
                </span>
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* 02 · WELCOME / FIRST-TIME VISITORS                           */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-cream section">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <ImageReveal className="relative">
                <Media
                  src="https://res.cloudinary.com/dbembxeoi/image/upload/v1795527764/WhatsApp_Image_2026-11-17_at_2.46.14_AM_ajwbuy.jpg"
                  alt="Vision Life Ministries family gathered after a Sunday service"
                  className="aspect-[16/10] rounded-[1.25rem] sm:aspect-[16/9] lg:aspect-[4/5]"
                  priority
                />
                <div className="absolute -bottom-5 -right-2 rounded-2xl bg-dark px-6 py-5 text-cream shadow-2xl sm:-right-5">
                  <p className="font-display text-4xl leading-none text-gold">2017</p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-cream/50">
                    Established
                  </p>
                </div>
              </ImageReveal>
            </div>

            <div className="lg:col-span-7 lg:pl-6">
              <motion.div
                variants={staggerContainer(0.12)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <motion.div variants={staggerItem}>
                  <Eyebrow>Welcome Home</Eyebrow>
                </motion.div>

                <motion.h2 variants={staggerItem} className="t-h2 mt-5 text-dark">
                  Called to <span className="display-italic text-burgundy">transform</span>,
                  sent to <span className="display-italic text-gold-ink">shine</span>.
                </motion.h2>

                <motion.p variants={staggerItem} className="body-lg mt-7 text-dark/65">
                  Vision Life Ministries is a Spirit-filled Christian church and restoration
                  ministry in Rakai District, Uganda, designed to heal the brokenhearted. Rooted in
                  East Africa, our faith-based organisation spreads the message of God&apos;s love
                  throughout Uganda, Africa and the nations through Sunday worship services, healing
                  and deliverance ministry, Bible study, prayer, discipleship and many other church
                  services.
                </motion.p>

                <motion.p variants={staggerItem} className="mt-5 text-[15px] leading-relaxed text-dark/55">
                  If you are visiting for the first time, you are not a stranger here. Come as you
                  are, sit with us, and let us worship together.
                </motion.p>

                <motion.div
                  variants={staggerItem}
                  className="mt-9 grid gap-x-8 gap-y-6 border-t border-dark/10 pt-8 sm:grid-cols-3"
                >
                  {[
                    { k: 'Sunday', v: '9:00 AM' },
                    { k: 'Location', v: 'Rakai, Uganda' },
                    { k: 'Everyone', v: 'Welcome' },
                  ].map((item) => (
                    <div key={item.k}>
                      <p className="text-[9px] uppercase tracking-[0.24em] text-dark/35">
                        {item.k}
                      </p>
                      <p className="mt-2 font-display text-xl text-dark">{item.v}</p>
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={staggerItem} className="mt-9 flex flex-wrap gap-3">
                  <Action href="/about-us" variant="gold" icon="right">
                    Our Story
                  </Action>
                  <Action href="/ministries" variant="outlineDark" icon="none">
                    Find Your Place
                  </Action>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03 · SUNDAY WORSHIP + WEEKLY RHYTHM                          */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-dark section">
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute -left-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-gold blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-burgundy blur-3xl" />
        </div>

        <div className="shell relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow tone="light">Gather With Us</Eyebrow>
              <h2 className="t-h2 mt-5 text-cream">
                A weekly rhythm of <span className="display-italic text-gold">worship</span> and
                Word.
              </h2>
              <p className="body-lg mt-6 max-w-md text-cream/55">
                Join us every Sunday 9:00 AM for a powerful encounter with God through praise,
                worship, and the Word.
              </p>

              <ImageReveal className="mt-9">
                <Media
                  src="/images/reatify-times.jpg"
                  alt="Vision Life Ministries congregation during a Sunday gathering"
                  className="aspect-[16/11] rounded-[1.25rem]"
                  overlay
                />
              </ImageReveal>
            </div>

            <div className="lg:col-span-7 lg:pt-6">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {weeklyRhythm.map((item, i) => (
                  <motion.li
                    key={item.day}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: EASE_OUT }}
                    className="group grid grid-cols-12 items-baseline gap-3 py-7 transition-colors duration-500 hover:bg-white/[0.03] sm:gap-4 sm:px-3"
                  >
                    <span className="col-span-3 font-display text-sm tracking-[0.14em] text-gold/70 sm:col-span-2">
                      {item.day}
                    </span>
                    <span className="col-span-9 font-display text-2xl leading-tight text-cream transition-colors duration-500 group-hover:text-gold sm:col-span-5 sm:text-3xl">
                      {item.name}
                    </span>
                    <span className="col-span-12 text-[10.5px] uppercase tracking-[0.18em] text-cream/40 sm:col-span-5 sm:text-right">
                      {item.time}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {whatToExpect.slice(0, 2).map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-xl border border-white/8 p-5">
                      <Icon className="size-5 text-gold" />
                      <p className="mt-4 font-display text-xl text-cream">{item.title}</p>
                      <p className="mt-2 text-[13px] leading-relaxed text-cream/45">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Action href="/events" variant="cream" icon="right">
                  See What&apos;s On
                </Action>
                <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-cream/40">
                  <MapPin className="size-3.5 text-gold/70" />
                  Rakai District, Uganda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 04 · TRANSFORMATION PATHWAY                                  */}
      {/* ============================================================ */}
      <section className="relative bg-cream section">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Eyebrow>Our Journey</Eyebrow>
                <h2 className="t-h2 mt-5 text-dark">
                  The <span className="display-italic">Vision Life</span> transformation
                  pathway.
                </h2>
                <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-dark/55">
                  Six intentional steps from encountering Christ to impacting nations.
                </p>
                <p className="mt-8 hidden items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-dark/35 lg:flex">
                  <span className="h-px w-8 bg-dark/20" />
                  Six steps, one calling
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-dark/12">
                {pathwaySteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.7, delay: (i % 3) * 0.06, ease: EASE_OUT }}
                      className="group grid grid-cols-12 gap-4 border-b border-dark/12 py-7 transition-colors duration-500 hover:bg-dark/[0.025] sm:gap-6 sm:px-3"
                    >
                      <div className="col-span-2 flex items-start gap-3 sm:col-span-1">
                        <Index>{step.step}</Index>
                      </div>
                      <div className="col-span-10 sm:col-span-8">
                        <h3 className="font-display text-[1.65rem] leading-tight text-dark transition-colors duration-500 group-hover:text-burgundy sm:text-[1.9rem]">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-[9.5px] uppercase tracking-[0.2em] text-gold-ink/80">
                          {step.subtitle}
                        </p>
                        <p className="mt-3 max-w-xl text-[13.5px] leading-relaxed text-dark/55">
                          {step.description}
                        </p>
                      </div>
                      <div className="col-span-12 flex items-start justify-end sm:col-span-3">
                        <span className="flex size-11 items-center justify-center rounded-full border border-dark/10 text-dark/35 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-dark">
                          <Icon className="size-4.5" />
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-dark/40">
                <span>Transformed Lives</span>
                <span className="size-1 rounded-full bg-gold" />
                <span>Equipped Believers</span>
                <span className="size-1 rounded-full bg-burgundy" />
                <span>Empowered Community</span>
                <span className="size-1 rounded-full bg-gold" />
                <span>Kingdom Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 05 · FEATURED MINISTRIES                                     */}
      {/* ============================================================ */}
      <section className="relative bg-dark section">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              tone="light"
              eyebrow="Ministries"
              title={
                <>
                  Where God is <span className="display-italic text-gold">at work</span> among us.
                </>
              }
              className="max-w-2xl"
            />
            <ArrowLink href="/ministries" tone="light" className="shrink-0">
              All Nine Ministries
            </ArrowLink>
          </div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-8 md:grid-cols-3"
          >
            {featuredMinistries.map((ministry) => (
              <motion.article key={ministry.title} variants={staggerItem} className="group">
                <Link href="/ministries" className="block">
                  <div className="relative overflow-hidden rounded-[1.15rem]">
                    <Media
                      src={ministry.image}
                      alt={ministry.alt}
                      className="aspect-[4/5]"
                      imgClassName="grayscale-[18%] transition-all duration-[1200ms] group-hover:grayscale-0"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark/70 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 font-display text-xs tracking-[0.2em] text-cream/60">
                      {ministry.index}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[1.7rem] leading-tight text-cream transition-colors duration-500 group-hover:text-gold">
                    {ministry.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-cream/45">
                    {ministry.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[9.5px] uppercase tracking-[0.22em] text-gold/70">
                    Explore
                    <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 06 · ABOUT / STORY                                           */}
      {/* ============================================================ */}
      <section className="relative bg-cream section">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="t-h2 mt-5 text-dark">
                Established in <span className="display-italic text-burgundy">2017</span>.
              </h2>

              <p className="mt-7 text-[15px] leading-relaxed text-dark/65">
                Life Vision Ministries LTD was established on 6th September 2017 and is incorporated
                in Uganda under the Companies Act 2012. It is a religious and charitable
                organisation dedicated to empowering communities through Spiritual connection to
                Almighty God.
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-dark/55">
                We are a Christian Faith-based organisation that spreads the message of God
                throughout our Sunday Ministry, Healing and Deliverance consultation, Bible study,
                and many other church services. We strive to make the word of God more accessible to
                everybody in the communities.
              </p>

              <div className="mt-8 border-l-2 border-gold pl-5">
                <PullQuote attribution="1 Corinthians 9:16">
                  For if I preach the gospel, that gives me no ground for boasting. For necessity is
                  laid upon me. Woe to me if I do not preach the gospel!
                </PullQuote>
              </div>

              <div className="mt-9 flex flex-wrap gap-6">
                <Action href="/about-us" variant="outlineDark" icon="right">
                  Read the Full Story
                </Action>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              <div className="relative">
                <ImageReveal>
                  <Media
                    src="https://res.cloudinary.com/dbembxeoi/image/upload/v1795527764/WhatsApp_Image_2026-11-17_at_2.46.14_AM_ajwbuy.jpg"
                    alt="The Vision Life Ministries church building in Rakai, Uganda"
                    className="aspect-[5/4] rounded-[1.25rem]"
                  />
                </ImageReveal>

                <div className="absolute -bottom-6 left-4 right-4 rounded-xl bg-cream p-5 shadow-[0_24px_60px_-30px_rgba(10,10,10,0.45)] sm:left-8 sm:right-auto sm:w-64">
                  <p className="text-[9px] uppercase tracking-[0.24em] text-dark/35">
                    Incorporated in Uganda
                  </p>
                  <p className="mt-2 font-display text-2xl leading-none text-dark">
                    6 September 2017
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 07 · TESTIMONIES                                             */}
      {/* ============================================================ */}
      <section className="relative bg-cream section">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Testimonies"
              title={
                <>
                  Lives <span className="display-italic text-burgundy">transformed</span> by
                  God&apos;s grace.
                </>
              }
              className="max-w-2xl"
            />
            <p className="max-w-xs text-[12.5px] leading-relaxed text-dark/45">
              Hear from members of our community whose lives have been changed through the power of
              God.
            </p>
          </div>

          <div className="mt-14">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 09 · GIVING                                                  */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-dark section">
        <div className="shell">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Eyebrow tone="light">Give Generously</Eyebrow>
              <h2 className="t-h2 mt-5 text-cream">
                Partner with us in <span className="display-italic text-gold">kingdom work</span>.
              </h2>

              <p className="mt-7 max-w-lg font-display text-[1.4rem] italic leading-relaxed text-cream/70">
                &ldquo;Each of you should give what you have decided in your heart to give, not
                reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
              </p>
              <p className="mt-3 text-[9.5px] uppercase tracking-[0.22em] text-gold/70">
                2 Corinthians 9:7
              </p>

              <div className="mt-9 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">
                    Bank Transfer
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-cream/60">
                    Housing Finance Bank
                    <br />
                    Vision Life Ministries LTD
                    <br />
                    <span className="text-cream/80">1110000064228</span>
                  </p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">
                    Airtel Money
                  </p>
                  <p className="mt-3 text-[13px] leading-relaxed text-cream/60">
                    Akampulira Edson
                    <br />
                    <span className="text-cream/80">+256-741096594</span>
                  </p>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Action href="/give" variant="gold" icon="right">
                  Give Now
                </Action>
                <Action href="/contact-us" variant="outlineLight" icon="none">
                  Talk to Us
                </Action>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ImageReveal>
                <Media
                  src="https://res.cloudinary.com/dbembxeoi/image/upload/v1795528030/WhatsApp_Image_2026-11-17_at_4.56.00_AM_ldkckq.jpg"
                  alt="Hands joined together in generosity and support at Vision Life Ministries"
                  className="aspect-[5/4] rounded-[1.25rem]"
                  overlay
                />
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 10 · CONTACT CTA                                             */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-cream section">
        <div className="shell">
          <div className="rounded-[1.5rem] bg-dark px-6 py-14 text-cream sm:px-10 md:px-14 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <Eyebrow tone="light">Come and See</Eyebrow>
                <h2 className="t-h1 mt-6 text-cream">
                  There is a place <br />
                  for you <span className="display-italic text-gold">here</span>.
                </h2>
                <p className="body-lg mt-6 max-w-lg text-cream/55">
                  We would love to hear from you. Whether you need prayer, counseling, or have
                  questions about our ministry — we are here for you.
                </p>
              </div>

              <div className="lg:col-span-4 lg:text-right">
                <Action href="/contact-us" variant="gold">
                  Contact Us
                </Action>
              </div>
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <a
                href="https://maps.google.com/?q=Rakai,Uganda"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Visit</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-cream/70 transition-colors group-hover:text-gold">
                    Rakai District
                    <br />
                    Uganda, East Africa
                  </p>
                </div>
              </a>

              <a href="tel:+97450769794" className="group flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Call</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-cream/70 transition-colors group-hover:text-gold">
                    +974 5076 9794
                    <br />
                    +974 5119 3650
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@visionlifeministries.com"
                className="group flex items-start gap-3"
              >
                <Heart className="mt-0.5 size-4 shrink-0 text-gold" />
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Write</p>
                  <p className="mt-2 break-all text-[13px] leading-relaxed text-cream/70 transition-colors group-hover:text-gold">
                    info@visionlifeministries.com
                    <br />
                    visionlifevisionlifeministries@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
