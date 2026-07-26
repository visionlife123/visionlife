'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Calendar, Clock, MapPin, Users, Star, ArrowRight,
  Cross, Music, Heart, Globe, Phone
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  fadeInUp, blurIn, scaleIn, staggerContainer, staggerItem, staggerItemScale,
  viewportOnce, EASE_OUT,
} from '@/lib/animations';

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

const iconMap: Record<string, React.ReactNode> = {
  Cross: <Cross className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  Star: <Star className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />,
  Calendar: <Calendar className="w-6 h-6" />,
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
  const router = useRouter();
  const [events, setEvents] = useState<ChurchEvent[]>(fallbackEvents);
  const [loading, setLoading] = useState(true);

  const handleContactUs = () => {
    router.push('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fetchEvents = useCallback(async () => {
    try {
      const res = await fetch('/api/events');
      if (res.ok) {
        const data = await res.json();
        if (data.length > 0) {
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

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/community.png)' }} />
          <div className="absolute inset-0 bg-linear-to-b from-dark/80 via-dark/60 to-dark" />
        </div>
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto py-32">
          <motion.span
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default"
          >
            Events
          </motion.span>
          <motion.h1
            initial={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Upcoming <span className="text-gold-gradient animate-gradient-shift">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            Join us for powerful gatherings that transform lives and build community.
          </motion.p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="relative bg-cream py-24">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <motion.div
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Featured <span className="text-burgundy">Events</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {featuredEvents.map((event) => (
              <motion.div key={event.id} variants={staggerItem}>
                <Card className="group bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden h-full hover-lift hover-shimmer cursor-default">
                  <div className="h-2 bg-linear-to-r from-gold to-burgundy animate-gradient-shift" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-gold to-gold-dark flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                        {iconMap[event.icon] || <Calendar className="w-6 h-6 group-icon" />}
                      </div>
                      <span className="px-3 py-1 bg-burgundy/10 text-burgundy text-[10px] font-bold tracking-wider uppercase rounded-sm hover:bg-burgundy/20 transition-colors cursor-default">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-burgundy transition-colors">{event.title}</h3>
                    <p className="text-dark/60 text-sm leading-relaxed mb-4">{event.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-xs text-dark/50">
                        <Calendar className="w-3.5 h-3.5 text-gold-dark group-hover:scale-110 transition-transform duration-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-dark/50">
                        <Clock className="w-3.5 h-3.5 text-gold-dark group-hover:scale-110 transition-transform duration-500" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-dark/50">
                        <MapPin className="w-3.5 h-3.5 text-gold-dark group-hover:scale-110 transition-transform duration-500" />
                        {event.location}
                      </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block hover-arrow">
                      <Button
                        onClick={handleContactUs}
                        className="bg-gold hover:bg-gold-dark text-dark font-semibold text-xs tracking-wider uppercase rounded-sm btn-shine"
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Contact Us <ArrowRight className="w-3 h-3 ml-1 hover-arrow-target" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* All Events */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-dark mb-8 text-center">
              All Upcoming Events
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4 max-w-3xl mx-auto"
          >
            {orderedEvents.map((event) => (
              <motion.div key={event.id} variants={staggerItem}>
                <Card className="group bg-white hover:shadow-lg border-dark/5 hover:border-gold/30 transition-all duration-500 rounded-sm hover-lift cursor-default">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-linear-to-br from-gold/10 to-burgundy/10 flex items-center justify-center text-burgundy group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 group-hover:from-gold/20 group-hover:to-burgundy/20">
                      {iconMap[event.icon] || <Calendar className="w-6 h-6 group-icon" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-dark font-bold text-sm truncate group-hover:text-burgundy transition-colors">{event.title}</h4>
                        <span className="px-2 py-0.5 bg-burgundy/5 text-burgundy text-[10px] font-medium tracking-wider uppercase rounded-sm shrink-0 hover:bg-burgundy/20 transition-colors cursor-default">
                          {event.category}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-[10px] text-dark/40">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{event.date}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{event.time}</span>
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{event.location}</span>
                      </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        variant="outline"
                        onClick={handleContactUs}
                        className="border-gold/30 text-gold-dark hover:bg-gold/10 text-xs rounded-sm shrink-0 hidden sm:flex btn-shine"
                      >
                        Contact Us
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
