'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building, Check, Church, Copy, Globe, GraduationCap, HandHeart, Phone,
  Shield, Users,
} from 'lucide-react';
import {
  Action, Eyebrow, ImageReveal, Media, PageHero, PullQuote, SectionHead,
} from '@/components/church/Editorial';
import { EASE_OUT, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const givingOptions = [
  {
    icon: Building,
    title: 'Bank Transfer',
    description:
      'Transfer directly to our ministry bank account. Use the details below for local or international transfers.',
  },
  {
    icon: Globe,
    title: 'Mobile Money',
    description:
      'Give conveniently via mobile money. Available on all major Ugandan mobile networks.',
  },
  {
    icon: HandHeart,
    title: 'In-Person Giving',
    description:
      'Visit us at any of our Sunday services or weekday meetings to give your tithes and offerings in person.',
  },
];

const impactAreas = [
  {
    icon: Church,
    title: 'Church Planting',
    description: 'Establish churches in remote villages across Uganda',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Build schools and provide education for children',
  },
  {
    icon: HandHeart,
    title: 'Community Care',
    description: 'Support vulnerable groups including HIV/AIDS patients',
  },
  {
    icon: Globe,
    title: 'Missions',
    description: 'Spread the Gospel to all nations and communities',
  },
  {
    icon: Users,
    title: 'Youth Empowerment',
    description: 'Train and equip the next generation of leaders',
  },
  {
    icon: Shield,
    title: 'Peace & Reconciliation',
    description: 'Promote peace in communities affected by conflict',
  },
];

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 border-b border-dark/8 py-3.5 last:border-0">
      <span className="text-[10px] uppercase tracking-[0.16em] text-dark/35">{label}</span>
      <span className="flex items-center gap-2.5">
        <span className="font-display text-[1.05rem] text-dark">{value}</span>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${label}`}
          className="flex size-7 items-center justify-center rounded-full border border-dark/12 text-dark/40 transition-colors hover:border-gold-dark hover:bg-gold/15 hover:text-dark"
        >
          {copied ? <Check className="size-3.5 text-burgundy" /> : <Copy className="size-3.5" />}
        </button>
      </span>
    </div>
  );
}

export function GivePage() {
  return (
    <div className="min-w-0 overflow-hidden bg-cream">
      <PageHero
        image="/images/give-hands.png"
        alt="Hands giving generously in support of the ministry"
        eyebrow="Give"
        title={
          <>
            Give <span className="display-italic text-gold">generously</span>.
          </>
        }
        description="Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. — 2 Corinthians 9:7"
        meta={
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-cream/50">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Every gift</p>
              <p className="mt-1.5 font-display text-lg text-cream">Advances the Kingdom</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Given in</p>
              <p className="mt-1.5 font-display text-lg text-cream">Cheerful faith</p>
            </div>
          </div>
        }
      />

      {/* ---------------------------------------------------------- */}
      {/* Ways to give                                               */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Eyebrow>Ways to Give</Eyebrow>
              <h2 className="t-h2 mt-5 text-dark">
                Three simple <span className="display-italic text-burgundy">ways</span>.
              </h2>
              <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-dark/55">
                Your generous giving helps us reach more people with the love of God, plant churches,
                build schools, and transform communities.
              </p>
            </div>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="divide-y divide-dark/12 border-y border-dark/12 lg:col-span-8"
            >
              {givingOptions.map((option, i) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={option.title}
                    variants={staggerItem}
                    className="group grid grid-cols-12 gap-4 py-7 sm:px-3"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <span className="font-display text-xs tracking-[0.18em] text-dark/30">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="col-span-10 sm:col-span-9">
                      <h3 className="font-display text-[1.5rem] leading-tight text-dark transition-colors duration-400 group-hover:text-burgundy">
                        {option.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-dark/55">
                        {option.description}
                      </p>
                    </div>
                    <div className="col-span-12 sm:col-span-2 sm:text-right">
                      <Icon className="size-5 text-gold-ink/50 sm:ml-auto" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Details                                                    */}
      {/* ---------------------------------------------------------- */}
      <section className="section bg-dark">
        <div className="shell">
          <SectionHead
            tone="light"
            eyebrow="Giving Details"
            title={
              <>
                Give with <span className="display-italic text-gold">confidence</span>.
              </>
            }
            description="Use the details below for direct bank transfers or Airtel Money. Tap the copy icon to copy a value."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="rounded-2xl bg-cream p-7 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-full bg-dark text-gold">
                  <Building className="size-5" />
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-dark/30">
                  Bank Transfer
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-dark">Bank Transfer Details</h3>
              <p className="mt-2 text-[12.5px] text-dark/50">
                Use the following details for direct bank transfers
              </p>
              <div className="mt-6">
                <CopyRow label="Bank Name" value="Housing Finance Bank" />
                <CopyRow label="Account Name" value="Vision Life Ministries LTD" />
                <CopyRow label="Account Number" value="1110000064228" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-full bg-burgundy text-white">
                  <Phone className="size-5" />
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-cream/30">
                  Mobile Money
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-cream">Airtel Money Transfers</h3>
              <p className="mt-2 text-[12.5px] text-cream/45">
                Use the following details for Airtel Money transfers
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { label: 'Account Name', value: 'Akampulira Edson' },
                  { label: 'Mobile Number', value: '+256-741096594' },
                ].map((detail) => (
                  <div
                    key={detail.label}
                    className="flex items-center justify-between gap-4 border-b border-white/8 pb-3.5 last:border-0"
                  >
                    <span className="text-[10px] uppercase tracking-[0.16em] text-cream/35">
                      {detail.label}
                    </span>
                    <span className="font-display text-[1.05rem] text-cream">{detail.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="mt-10">
            <PullQuote tone="light" attribution="2 Corinthians 9:7">
              Each of you should give what you have decided in your heart to give, not reluctantly or
              under compulsion, for God loves a cheerful giver.
            </PullQuote>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Impact                                                     */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Your Impact</Eyebrow>
              <h2 className="t-h2 mt-5 text-dark">
                Your giving <span className="display-italic text-burgundy">makes a difference</span>.
              </h2>
              <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-dark/55">
                Every contribution goes directly toward advancing the Kingdom of God and transforming
                lives.
              </p>
              <ImageReveal className="mt-9 hidden lg:block">
                <Media
                  src="https://res.cloudinary.com/dbembxeoi/image/upload/v1795528891/WhatsApp_Image_2026-07-16_at_9.26.00_AM_2_kphwmq_zcdl01.jpg"
                  alt="The community served through Vision Life Ministries"
                  className="aspect-[4/3] rounded-[1.25rem]"
                />
              </ImageReveal>
            </div>

            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid gap-px overflow-hidden rounded-2xl bg-dark/12 sm:grid-cols-2 lg:col-span-7"
            >
              {impactAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.div
                    key={area.title}
                    variants={staggerItem}
                    className="group bg-cream p-6 transition-colors duration-500 hover:bg-white"
                  >
                    <Icon className="size-5 text-gold-ink/70 transition-colors group-hover:text-gold-ink" />
                    <h3 className="mt-5 font-display text-xl text-dark">{area.title}</h3>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-dark/50">
                      {area.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-dark/12 pt-8">
            <Action href="/contact-us" variant="gold" icon="right">
              Speak With Us
            </Action>
            <Action href="/about-us" variant="outlineDark" icon="none">
              Our Story
            </Action>
          </div>
        </div>
      </section>
    </div>
  );
}
