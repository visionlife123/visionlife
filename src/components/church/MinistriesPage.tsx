'use client';

import { motion } from 'framer-motion';
import {
  Baby, BookOpen, Cross, Globe, HandHeart, Heart, Music, Shield, Sparkles, Users,
} from 'lucide-react';
import { Action, Eyebrow, PageHero } from '@/components/church/Editorial';
import {
  EASE_OUT, staggerContainer, staggerItem, viewportOnce,
} from '@/lib/animations';

const ministries = [
  {
    icon: Music,
    title: 'Worship & Arts Ministry',
    description:
      "Leading the congregation into God's presence through Spirit-filled worship, music, dance, and creative arts. Our worship team is dedicated to creating an atmosphere where heaven meets earth.",
  },
  {
    icon: Users,
    title: 'Youth Ministry',
    description:
      'Empowering the next generation to discover their identity in Christ, develop their gifts, and impact their world. Through dynamic services, mentorship, and outreach, we raise young Kingdom leaders.',
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    description:
      'Nurturing children in the love and knowledge of God through age-appropriate Bible teaching, worship, and activities. We believe in planting seeds of faith that will last a lifetime.',
  },
  {
    icon: Heart,
    title: 'Healing & Deliverance Ministry',
    description:
      'A restoration ministry designed to heal the brokenhearted and set the captives free. Through prayer, counseling, and the power of the Holy Spirit, we minister to the whole person — spirit, soul, and body.',
  },
  {
    icon: BookOpen,
    title: 'Bible Study & Discipleship',
    description:
      "Equipping believers with deep understanding of Scripture through structured study programs. From new believers' classes to advanced theological training, we build a strong biblical foundation.",
  },
  {
    icon: Shield,
    title: "Men's Ministry",
    description:
      'Building men of integrity, purpose, and spiritual strength. We equip men to be godly leaders in their homes, workplaces, and communities through fellowship, Bible study, and accountability.',
  },
  {
    icon: Sparkles,
    title: "Women's Ministry",
    description:
      'Empowering women to embrace their God-given identity and purpose. Through fellowship, teaching, and mentoring, we help women grow in faith and impact their spheres of influence.',
  },
  {
    icon: Globe,
    title: 'Missions & Outreach',
    description:
      'Taking the Gospel beyond our walls to communities, villages, and nations. We establish churches, schools, and development projects in some of the remotest areas of Uganda and beyond.',
  },
  {
    icon: HandHeart,
    title: 'Compassion & Care Ministry',
    description:
      "Demonstrating God's love through practical acts of compassion. We support vulnerable groups including people living with HIV/AIDS, orphans, widows, and those in crisis situations.",
  },
];

export function MinistriesPage() {
  return (
    <div className="min-w-0 overflow-hidden bg-cream">
      <PageHero
        image="https://res.cloudinary.com/dbembxeoi/image/upload/v1795527764/WhatsApp_Image_2026-11-17_at_3.06.33_AM_ciuynr.jpg"
        imageClassName="object-[center_70%]"
        alt="Young people worshipping together at Vision Life Ministries"
        eyebrow="Our Ministries"
        title={
          <>
            Serve in <span className="display-italic text-gold">ministry</span>.
          </>
        }
        description="Every believer is called to serve. Discover your place in the body of Christ and make an eternal impact through our various ministries."
        meta={
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-cream/50">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Ministries</p>
              <p className="mt-1.5 font-display text-lg text-cream">Nine expressions</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Calling</p>
              <p className="mt-1.5 font-display text-lg text-cream">Every believer</p>
            </div>
          </div>
        }
      />

      {/* ---------------------------------------------------------- */}
      {/* Ministries grid                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <Eyebrow>Explore</Eyebrow>
              <h2 className="t-h2 mt-5 text-dark">
                Explore our <span className="display-italic text-burgundy">ministries</span>.
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-dark/55">
                Each ministry is designed to help you grow, serve, and make a difference. Find where
                God is calling you to serve.
              </p>
            </div>
            <p className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-dark/35">
              Nine ways to belong
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-dark/12 md:grid-cols-2 lg:grid-cols-3"
          >
            {ministries.map((ministry, i) => {
              const Icon = ministry.icon;
              return (
                <motion.article
                  key={ministry.title}
                  variants={staggerItem}
                  className="group relative flex flex-col bg-cream p-7 transition-colors duration-500 hover:bg-white sm:p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex size-11 items-center justify-center rounded-full border border-dark/10 text-dark/40 transition-all duration-500 group-hover:border-gold group-hover:bg-gold group-hover:text-dark">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-display text-xs tracking-[0.18em] text-dark/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-[1.5rem] leading-tight text-dark transition-colors duration-500 group-hover:text-burgundy">
                    {ministry.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[13px] leading-relaxed text-dark/55">
                    {ministry.description}
                  </p>

                  <span className="mt-6 h-px w-full bg-dark/8">
                    <span className="block h-px w-0 bg-gold-dark transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  </span>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Called to serve                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-dark py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div className="absolute left-1/3 top-0 h-[26rem] w-[26rem] rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-[24rem] w-[24rem] rounded-full bg-burgundy blur-3xl" />
        </div>

        <div className="shell-narrow relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.9, ease: EASE_OUT }}
          >
            <Cross className="mx-auto size-8 text-gold" />
            <p className="eyebrow eyebrow-center mt-7 justify-center text-cream/50">
              Called to Serve
            </p>
            <h2 className="t-h1 mt-6 text-cream">
              God has gifted you <br />
              <span className="display-italic text-gold">for a purpose</span>.
            </h2>
            <p className="body-lg mt-6 text-cream/55">
              God has gifted every believer with unique talents and abilities for the advancement of
              His Kingdom. Discover your ministry and step into your calling today.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Action href="/contact-us" variant="gold">
                Get Involved Today
              </Action>
              <Action href="/programs" variant="outlineLight" icon="none">
                See Our Programs
              </Action>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
