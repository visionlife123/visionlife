'use client';

import { motion } from 'framer-motion';
import {
  BookOpen, Brain, Church, GraduationCap, HandHeart, Heart, Shield,
  Stethoscope, TrendingUp, Users, Wallet,
} from 'lucide-react';
import {
  Action, Eyebrow, ImageReveal, Index, Media, PageHero, SectionHead,
} from '@/components/church/Editorial';
import {
  EASE_OUT, staggerContainer, staggerItem, viewportOnce,
} from '@/lib/animations';

const programs = [
  {
    icon: BookOpen,
    title: 'Bible Study Training',
    description:
      'Equipping individuals with deep understanding of Scripture to strengthen their faith and daily walk with God. Our structured Bible study programs take you from foundational truths to advanced theological understanding.',
    features: [
      'Inductive Bible Study Methods',
      'Old & New Testament Survey',
      'Theological Foundations',
      'Practical Application',
    ],
  },
  {
    icon: Users,
    title: 'Youth Ministry',
    description:
      'Guiding and empowering young people to grow spiritually, morally, and socially as future leaders. We create safe spaces for youth to discover their identity in Christ and develop their God-given potential.',
    features: [
      'Youth Worship Services',
      'Mentorship Programs',
      'Leadership Development',
      'Creative Arts Ministry',
    ],
  },
  {
    icon: Shield,
    title: 'Leadership Ministry',
    description:
      'Training leaders with biblical principles to serve effectively in church and community roles. We equip leaders with the spiritual, emotional, and practical tools needed for transformative leadership.',
    features: [
      'Leadership Intensives',
      'Church Governance Training',
      'Servant Leadership Principles',
      'Strategic Ministry Planning',
    ],
  },
  {
    icon: Heart,
    title: 'Family Therapy',
    description:
      'Providing counselling to strengthen family relationships and resolve conflicts in a godly way. Our trained counsellors offer biblical guidance for marriages, parenting, and family dynamics.',
    features: [
      'Marriage Counseling',
      'Parenting Workshops',
      'Family Restoration',
      'Conflict Resolution',
    ],
  },
  {
    icon: Brain,
    title: 'Stress Management',
    description:
      "Helping individuals develop healthy coping skills to handle life's pressures and challenges. We integrate biblical principles with practical strategies for emotional and spiritual wellbeing.",
    features: [
      'Biblical Coping Strategies',
      'Mindfulness & Prayer',
      'Burnout Prevention',
      'Emotional Health Workshops',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Psychological Safety & Mental Health Wellness',
    description:
      'Promoting mental health awareness and creating safe spaces for emotional healing and support. We break the stigma around mental health in communities and provide professional guidance rooted in faith.',
    features: [
      'Mental Health Awareness',
      'Support Groups',
      'Trauma Healing',
      'Professional Counseling Referrals',
    ],
  },
  {
    icon: Wallet,
    title: 'Financial Empowerment Programs',
    description:
      'Teaching financial management skills to improve livelihoods and economic independence. We empower individuals and families with practical tools for financial stewardship and wealth creation.',
    features: [
      'Financial Literacy Training',
      'Savings & Investment Groups',
      'Entrepreneurship Skills',
      'Business Mentorship',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Youth Development Projects',
    description:
      'Creating opportunities for youth to gain skills, education, and mentorship for a better future. We invest in the next generation through vocational training, academic support, and character development.',
    features: [
      'Vocational Skills Training',
      'Academic Support Programs',
      'Career Guidance',
      'Community Service Projects',
    ],
  },
];

const stats = [
  { icon: Church, label: 'Churches Planted', value: '5' },
  { icon: GraduationCap, label: 'Schools Built', value: '1+' },
  { icon: Users, label: 'Lives Impacted', value: '500+' },
  { icon: HandHeart, label: 'Communities Served', value: '50+' },
];

export function ProgramsPage() {
  return (
    <div className="min-w-0 overflow-hidden bg-cream">
      <PageHero
        image="/images/bible-study.png"
        alt="Vision Life Ministries Bible study group gathered around the Word"
        eyebrow="Our Programs"
        title={
          <>
            Services & <span className="display-italic text-gold">programmes</span>.
          </>
        }
        description="At Vision Life Ministries, we offer a wide range of spiritual, social, and community development services to fulfill our calling and serve God's people effectively."
        meta={
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-cream/50">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Pathways</p>
              <p className="mt-1.5 font-display text-lg text-cream">Eight programs</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Focus</p>
              <p className="mt-1.5 font-display text-lg text-cream">Spirit, soul & body</p>
            </div>
          </div>
        }
      />

      {/* ---------------------------------------------------------- */}
      {/* Programme list                                             */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <Eyebrow>What We Offer</Eyebrow>
                <h2 className="t-h2 mt-5 text-dark">
                  Eight pathways to{' '}
                  <span className="display-italic text-gold-ink">holistic transformation</span>.
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-dark/55">
                  Each program is designed to meet spiritual, emotional, mental, and practical needs
                  — transforming lives and communities through the power of the Gospel.
                </p>

                <ImageReveal className="mt-9 hidden lg:block">
                  <Media
                    src="/images/bible-study.png"
                    alt="Members studying Scripture together at Vision Life Ministries"
                    className="aspect-[4/3] rounded-[1.25rem]"
                  />
                </ImageReveal>

                <div className="mt-9 flex flex-wrap gap-3">
                  <Action href="/contact-us" variant="gold" icon="right">
                    Join a Program
                  </Action>
                  <Action href="/give" variant="outlineDark" icon="none">
                    Support the Work
                  </Action>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-dark/12">
                {programs.map((program, i) => {
                  const Icon = program.icon;
                  return (
                    <motion.article
                      key={program.title}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.65, delay: (i % 3) * 0.05, ease: EASE_OUT }}
                      className="group border-b border-dark/12 py-7 transition-colors duration-500 hover:bg-dark/[0.025] sm:px-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Icon className="size-5 shrink-0 text-gold-ink/60" />
                          <h3 className="font-display text-[1.45rem] leading-snug text-dark transition-colors duration-500 group-hover:text-burgundy sm:text-[1.6rem]">
                            {program.title}
                          </h3>
                        </div>
                        <Index>{String(i + 1).padStart(2, '0')}</Index>
                      </div>

                      <p className="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-dark/55">
                        {program.description}
                      </p>

                      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                        {program.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-[11px] text-dark/45"
                          >
                            <span className="size-1 rounded-full bg-gold-dark/60" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Community impact                                           */}
      {/* ---------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-dark section">
        <img
          src="/images/community.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-dark via-burgundy-dark/70 to-dark/70" />

        <div className="shell relative">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow tone="light">Community Impact</Eyebrow>
              <h2 className="t-h2 mt-5 text-cream">
                Transforming communities in{' '}
                <span className="display-italic text-gold">Rakai District</span>.
              </h2>
              <p className="body-lg mt-6 max-w-xl text-cream/60">
                Many communities we work with in Rakai District often fall far short of having the
                most basic provisions of adequate health, food, clean water, clothing, shelter, and
                school for themselves and their children. Through our programs, we are bringing hope
                and practical support alongside the Gospel message.
              </p>
              <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-gold/70">
                Hope · Healing · Restoration · Transformation
              </p>
            </div>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/15 lg:col-span-5"
            >
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    variants={staggerItem}
                    className="bg-dark/70 p-6 backdrop-blur-sm"
                  >
                    <Icon className="size-5 text-gold" />
                    <p className="t-stat mt-6 text-cream">{stat.value}</p>
                    <p className="mt-2 text-[9.5px] uppercase tracking-[0.18em] text-cream/40">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* CTA                                                        */}
      {/* ---------------------------------------------------------- */}
      <section className="section-sm">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-6 border-t border-dark/12 pt-10 md:flex-row md:items-center">
            <SectionHead
              eyebrow="Take the Next Step"
              title={
                <>
                  Ready to grow? <span className="display-italic">We will walk with you</span>.
                </>
              }
              titleClassName="t-h3 mt-4"
            />
            <div className="flex flex-wrap gap-3">
              <Action href="/events" variant="gold" icon="right">
                Upcoming Events
              </Action>
              <Action href="/contact-us" variant="outlineDark" icon="none">
                Ask a Question
              </Action>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
