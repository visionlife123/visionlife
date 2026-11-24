'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Play, Clock, User, Calendar, BookOpen, Headphones,
  Video, Download, Share2, ArrowRight, Pause, RefreshCw
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import {
  fadeInUp, blurIn, staggerContainer, staggerItem, staggerItemScale,
  viewportOnce, EASE_OUT,
} from '@/lib/animations';

interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  duration: string;
  category: string;
  description: string;
  scripture: string;
  imageUrl: string;
  featured: boolean;
}

const categories = ['All', 'Sunday Service', 'Healing Service', 'Bible Study', 'Missions Sunday'];

// Fallback sermons if API is empty
const fallbackSermons: Sermon[] = [
  {
    id: '1', title: 'The Power of the Gospel', preacher: 'Pastor Akampulira Edson',
    date: 'January 12, 2025', duration: '45 min', category: 'Sunday Service',
    description: 'Exploring the transformative power of the Gospel and how it saves, heals, and delivers. Drawing from 1 Corinthians 15:1-4, we discover why the Gospel is of first importance.',
    scripture: '1 Corinthians 15:1-4', imageUrl: '/images/sermon.png', featured: true,
  },
  {
    id: '2', title: 'Walking in Divine Purpose', preacher: 'Pastor Akampulira Edson',
    date: 'January 5, 2025', duration: '52 min', category: 'Sunday Service',
    description: "Discovering God's plans for prosperity and a hopeful future. Understanding that where there is no vision, the people perish, but clarity of purpose leads to thriving.",
    scripture: 'Proverbs 29:18, Jeremiah 29:11', imageUrl: '/images/cross-sunrise.png', featured: false,
  },
  {
    id: '3', title: 'Healing for the Brokenhearted', preacher: 'Pr. Rwebiaro Benon',
    date: 'December 29, 2024', duration: '38 min', category: 'Healing Service',
    description: "Vision Life Ministries is a restoration ministry designed to heal the brokenhearted. This sermon explores God's heart for restoration and wholeness.",
    scripture: 'Isaiah 61:1-3', imageUrl: '/images/sermon.png', featured: false,
  },
  {
    id: '4', title: 'Kingdom Identity: Who You Are in Christ', preacher: 'Pastor Akampulira Edson',
    date: 'December 22, 2024', duration: '48 min', category: 'Bible Study',
    description: 'Understanding our identity in Christ is foundational to living a purposeful life. This teaching explores what it means to be a new creation in Christ.',
    scripture: '2 Corinthians 5:17', imageUrl: '/images/bible-study.png', featured: false,
  },
  {
    id: '5', title: 'The Great Commission: Go Ye Therefore', preacher: 'Pastor Akampulira Edson',
    date: 'December 15, 2024', duration: '41 min', category: 'Missions Sunday',
    description: 'Woe to me if I do not preach the Gospel! A powerful message on the urgency and joy of fulfilling the Great Commission in our generation.',
    scripture: 'Matthew 28:19-20, 1 Corinthians 9:16', imageUrl: '/images/community.png', featured: false,
  },
  {
    id: '6', title: "Financial Stewardship: God's Way", preacher: 'Pastor Akampulira Edson',
    date: 'December 8, 2024', duration: '35 min', category: 'Sunday Service',
    description: 'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion. Understanding biblical principles of financial stewardship and generosity.',
    scripture: '2 Corinthians 9:7', imageUrl: '/images/give-hands.png', featured: false,
  },
];

export function SermonsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [sermons, setSermons] = useState<Sermon[]>(fallbackSermons);
  const [loading, setLoading] = useState(true);

  const fetchSermons = useCallback(async () => {
    try {
      const res = await fetch('/api/sermons');
      if (res.ok) {
        const data = await res.json();
        if (data.length > 0) {
          setSermons(data);
        }
      }
    } catch (error) {
      console.error('Error fetching sermons:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSermons();
  }, [fetchSermons]);

  const filteredSermons = activeCategory === 'All'
    ? sermons
    : sermons.filter(s => s.category === activeCategory);

  const featuredSermon = sermons.find(s => s.featured) || sermons[0];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/sermon.png)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        </div>
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto py-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default"
          >
            Sermons
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE_OUT }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Hear the <span className="text-gold-gradient animate-gradient-shift">Word</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE_OUT }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            &ldquo;So faith comes from hearing, and hearing through the word of Christ.&rdquo; — Romans 10:17
          </motion.p>
        </div>
      </section>

      {/* Sermons Section */}
      <section className="relative bg-cream py-24">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          {/* Category Filter */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap gap-2 mb-12 justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-sm text-xs font-medium tracking-wider uppercase transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold text-dark'
                    : 'bg-white text-dark/60 hover:bg-gold/10 hover:text-gold-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured Sermon */}
          {featuredSermon && (
            <motion.div
              variants={blurIn}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mb-12"
            >
              <Card className="group bg-dark border-gold/10 rounded-sm overflow-hidden hover-lift hover-shimmer cursor-default">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto hover-img-zoom">
                    <img src={featuredSermon.imageUrl} alt={featuredSermon.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/60 to-transparent flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setPlayingIndex(playingIndex === 0 ? null : 0)}
                        className="w-16 h-16 bg-gold/90 hover:bg-gold rounded-full flex items-center justify-center text-dark shadow-xl cursor-pointer hover-glow"
                      >
                        {playingIndex === 0 ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                      </motion.button>
                    </div>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-dark text-[10px] font-bold tracking-wider uppercase rounded-sm hover:bg-gold/80 transition-colors">
                      Featured
                    </div>
                    <div className="absolute inset-0 ring-2 ring-gold/0 group-hover:ring-gold/40 transition-all duration-500" />
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 bg-gold/10 text-gold text-[10px] font-medium tracking-wider uppercase rounded-sm hover:bg-gold/20 transition-colors cursor-default">
                        {featuredSermon.category}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{featuredSermon.title}</h2>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">{featuredSermon.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 mb-4">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{featuredSermon.preacher}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featuredSermon.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featuredSermon.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gold/70 mb-6">
                      <BookOpen className="w-3 h-3 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
                      Scripture: {featuredSermon.scripture}
                    </div>
                    <div className="flex gap-3">
                      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                        <Button className="bg-gold hover:bg-gold-dark text-dark font-semibold text-xs tracking-wider uppercase rounded-sm btn-shine">
                          <Play className="w-3 h-3 mr-1" /> Watch Now
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                        <Button variant="outline" className="border-gold/30 text-gold hover:bg-gold/10 text-xs rounded-sm btn-shine">
                          <Download className="w-3 h-3 mr-1" /> Download
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Sermons Grid */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSermons.filter(s => s.id !== featuredSermon?.id).map((sermon) => (
              <motion.div key={sermon.id} variants={staggerItemScale}>
                <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-sm h-full overflow-hidden hover-lift hover-shimmer cursor-default">
                  <div className="relative h-48 overflow-hidden hover-img-zoom">
                    <img
                      src={sermon.imageUrl}
                      alt={sermon.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dark/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center text-dark cursor-pointer hover-glow"
                      >
                        <Play className="w-5 h-5 ml-0.5 group-icon" />
                      </motion.button>
                    </div>
                    <div className="absolute top-3 left-3 px-2 py-0.5 bg-gold/90 text-dark text-[10px] font-bold tracking-wider uppercase rounded-sm hover:bg-gold transition-colors">
                      {sermon.category}
                    </div>
                    <div className="absolute inset-0 ring-2 ring-gold/0 group-hover:ring-gold/40 transition-all duration-500" />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-base font-bold text-dark mb-2 line-clamp-2 group-hover:text-burgundy transition-colors">{sermon.title}</h3>
                    <p className="text-dark/50 text-xs leading-relaxed mb-3 line-clamp-2">{sermon.description}</p>
                    <div className="flex items-center justify-between text-[10px] text-dark/40">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{sermon.preacher.split(' ').slice(-1)}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{sermon.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{sermon.duration}</span>
                    </div>
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
