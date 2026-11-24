'use client';

import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight, Calendar, Clock, Cross, Globe, Heart, MapPin, Music, Star, Users,
} from 'lucide-react';
import { Action, Eyebrow, ImageReveal, Index, Media, PageHero, SectionHead } from '@/components/church/Editorial';
import { EASE_OUT, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  icon: string;
  featured: boolean;
}

const iconMap: Record<string, React.ElementType> = {
  Cross,
  Users,
  Heart,
  Star,
  Globe,
  Music,
  Calendar,
};

const sortEvents = (list: ChurchEvent[]) => {
  return [...list].sort((a, b) => {
    const aIsTarget = a.title === 'EQUIP | UG BEYOND SUCCESS';
    const bIsTarget = b.title === 'EQUIP | UG BEYOND SUCCESS';

    if (aIsTarget && !bIsTarget) return -1;
    if (!aIsTarget && bIsTarget) return 1;
    return 0;
  });
};

const fallbackEvents: ChurchEvent[] = [
  {
    id: '1', title: 'Easter Celebration Service', date: 'April 20, 2025', time: '9:00 AM — 1:00 PM',
    location: 'Canan Vision Life Church, Rakai', description: 'Join us for a powerful Easter celebration as we commemorate the resurrection of our Lord Jesus Christ. Special worship, drama presentation, and the Word.',
    category: 'Celebration', icon: 'Cross', featured: true,
  },
  {
    id: '2', title: 'EQUIP | UG BEYOND SUCCESS', date: 'Wednesday', time: '6:00 PM — 7:00 PM',
    location: 'Via Google Meeting', description: 'A leadership training session featuring Pastor Akampulira Edson, focused on equipping young people for purposeful leadership and impact.',
    category: 'Leadership', icon: 'Users', featured: true,
  },
  {
    id: '3', title: 'Youth Conference 2025', date: 'March 15-16, 2025', time: '9:00 AM — 5:00 PM',
    location: 'Vision Life Ministries Center', description: 'A two-day conference designed to ignite the fire of purpose in young people. Worship, teaching, mentorship, and creative arts.',
    category: 'Youth', icon: 'Users', featured: true,
  },
  {
    id: '4', title: 'Healing & Deliverance Crusade', date: 'February 28, 2025', time: '2:00 PM — 6:00 PM',
    location: 'Rakai District Community Grounds', description: 'Experience the healing power of God. Special prayer for the sick, oppressed, and brokenhearted. Come expectant for a miracle.',
    category: 'Crusade', icon: 'Heart', featured: false,
  },
  {
    id: '5', title: 'Marriage Enrichment Workshop', date: 'March 8, 2025', time: '10:00 AM — 3:00 PM',
    location: 'Vision Life Ministries Center', description: 'Strengthening marriages through biblical principles. Interactive sessions on communication, intimacy, and financial stewardship.',
    category: 'Workshop', icon: 'Star', featured: false,
  },
  {
    id: '6', title: 'Community Outreach: Clean Water Project', date: 'March 22, 2025', time: '8:00 AM — 4:00 PM',
    location: 'Various Villages, Rakai District', description: 'Bringing clean water to remote villages alongside the Gospel message. Volunteer to serve and make a difference in communities.',
    category: 'Outreach', icon: 'Globe', featured: false,
  },
  {
    id: '7', title: 'Monthly Prayer & Fasting', date: 'First Week of Every Month', time: '5:00 AM — 7:00 AM Daily',
    location: 'Canan Vision Life Church', description: "Join us for our monthly prayer and fasting program as we seek God's face for direction, breakthrough, and revival.",
    category: 'Prayer', icon: 'Music', featured: false,
  },
];

export function EventsPage() {
  const [events, setEvents] = useState<ChurchEvent[]>(fallbackEvents);
  const [loading, setLoading] = useState(true);

  const fetchEvents = useCallback(async () => {
    try {
      const res = await fetch('/api/events');
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setEvents(data);
        }
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const featuredEvents = sortEvents(events.filter((e) => e.featured));
  const orderedEvents = sortEvents(events);
  const remainingEvents = orderedEvents.filter((event) => !featuredEvents.some((f) => f.id === event.id));

  return (
    <div className="min-w-0 overflow-hidden bg-cream">
      <PageHero
        image="https://res.cloudinary.com/dbembxeoi/image/upload/v1795527765/WhatsApp_Image_2026-11-17_at_3.20.01_AM_sitd3e.jpg"
        imageClassName="object-[center_70%]"
        alt="The Vision Life Ministries community gathered for a church event"
        eyebrow="Events"
        title={
          <>
            Upcoming <span className="display-italic text-gold">events</span>.
          </>
        }
        description="Join us for powerful gatherings that transform lives and build community."
        meta={
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-cream/50">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Gather</p>
              <p className="mt-1.5 font-display text-lg text-cream">All are welcome</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Where</p>
              <p className="mt-1.5 font-display text-lg text-cream">Rakai, Uganda</p>
            </div>
          </div>
        }
      />

      {/* ---------------------------------------------------------- */}
      {/* Featured events                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Featured"
              title={
                <>
                  Moments to <span className="display-italic text-burgundy">gather</span>.
                </>
              }
              className="max-w-2xl"
            />
            <p className="shrink-0 text-[10px] uppercase tracking-[0.22em] text-dark/35">
              {loading ? 'Updating…' : `${featuredEvents.length} featured`}
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 grid gap-8 lg:grid-cols-3"
          >
            {featuredEvents.map((event, i) => {
              const Icon = iconMap[event.icon] ?? Calendar;
              const images = [
                '/images/community.png',
                '/images/bible-study.png',
                '/images/youth-ministry.png',
              ];
              return (
                <motion.article
                  key={event.id}
                  variants={staggerItem}
                  className="group flex flex-col"
                >
                  <Link href="/contact-us" className="block">
                    <div className="relative overflow-hidden rounded-[1.15rem]">
                      <Media
                        src={images[i % images.length]}
                        alt={`${event.title} at Vision Life Ministries`}
                        className="aspect-[4/3]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-dark/70 px-3 py-1.5 text-[9px] uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
                        {event.category}
                      </span>
                    </div>

                    <div className="mt-5 flex items-baseline justify-between gap-4">
                      <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-gold-ink">
                        <Calendar className="size-3.5" />
                        {event.date}
                      </p>
                      <Index>0{i + 1}</Index>
                    </div>

                    <h3 className="mt-3 font-display text-[1.6rem] leading-tight text-dark transition-colors duration-500 group-hover:text-burgundy">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-dark/55">
                      {event.description}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-dark/10 pt-4 text-[11px] text-dark/45">
                      <p className="flex items-center gap-2">
                        <Clock className="size-3.5 text-gold-ink/60" />
                        {event.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="size-3.5 text-gold-ink/60" />
                        {event.location}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* All events                                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="section bg-dark">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                <Eyebrow tone="light">Calendar</Eyebrow>
                <h2 className="t-h2 mt-5 text-cream">
                  All upcoming <span className="display-italic text-gold">events</span>.
                </h2>
                <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-cream/50">
                  From weekly gatherings to community outreach, there is always a way to be part of
                  what God is doing.
                </p>
                <div className="mt-9">
                  <Action href="/contact-us" variant="cream">
                    Ask About an Event
                  </Action>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-white/10">
                {(remainingEvents.length > 0 ? remainingEvents : orderedEvents).map((event, i) => {
                  const Icon = iconMap[event.icon] ?? Calendar;
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.55, delay: (i % 4) * 0.05, ease: EASE_OUT }}
                      className="group grid grid-cols-12 gap-4 border-b border-white/10 py-6 transition-colors duration-400 hover:bg-white/[0.03] sm:px-3"
                    >
                      <div className="col-span-2 flex items-start sm:col-span-1">
                        <Icon className="size-5 text-gold/70" />
                      </div>
                      <div className="col-span-10 sm:col-span-9">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="font-display text-[1.35rem] leading-tight text-cream transition-colors duration-400 group-hover:text-gold">
                            {event.title}
                          </h3>
                          <span className="rounded-full border border-gold/25 px-2.5 py-0.5 text-[8.5px] uppercase tracking-[0.16em] text-gold/70">
                            {event.category}
                          </span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[10.5px] text-cream/35">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="size-3" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="size-3" />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="size-3" />
                            {event.location}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-12 flex justify-end sm:col-span-2">
                        <Link
                          href="/contact-us"
                          aria-label={`Contact us about ${event.title}`}
                          className="flex size-9 items-center justify-center rounded-full border border-white/15 text-cream/50 transition-colors duration-400 hover:border-gold hover:bg-gold hover:text-dark"
                        >
                          <ArrowUpRight className="size-4" />
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Invitation                                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="section-sm">
        <div className="shell">
          <ImageReveal className="relative overflow-hidden rounded-[1.5rem] bg-cream">
            <Media
              src="/images/cross-sunrise.png"
              alt="A cross silhouetted against the sunrise"
              className="aspect-[16/9] md:aspect-[21/9]"
              overlay
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-7 sm:p-10">
              <p className="text-[9.5px] uppercase tracking-[0.22em] text-gold">
                Nothing compares
              </p>
              <h2 className="t-h3 mt-3 max-w-xl text-cream">
                Photos capture a moment. Come and experience God with us.
              </h2>
              <div className="mt-5">
                <Action href="/contact-us" variant="gold" icon="right">
                  Plan Your Visit
                </Action>
              </div>
            </div>
          </ImageReveal>
        </div>
      </section>
    </div>
  );
}
