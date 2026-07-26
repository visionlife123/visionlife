'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  BookOpen, Download, Headphones, Video, FileText,
  CandlestickChart, Music, Lightbulb, ExternalLink
} from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import {
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, blurIn,
  staggerContainer, staggerItem, staggerItemScale, viewportOnce, EASE_OUT,
} from '@/lib/animations';

interface Resource {
  id: string;
  title: string;
  type: string;
  description: string;
  category: string;
  downloadUrl: string;
  icon: string;
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  Headphones: <Headphones className="w-8 h-8" />,
  Video: <Video className="w-8 h-8" />,
  CandlestickChart: <CandlestickChart className="w-8 h-8" />,
  Music: <Music className="w-8 h-8" />,
};

const smallIconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Headphones: <Headphones className="w-5 h-5" />,
  Video: <Video className="w-5 h-5" />,
  CandlestickChart: <CandlestickChart className="w-5 h-5" />,
  Music: <Music className="w-5 h-5" />,
};

const resourceCategories = [
  { icon: <BookOpen className="w-8 h-8" />, title: 'Bible Study Guides', description: 'Comprehensive study materials to deepen your understanding of Scripture, from foundational truths to advanced theological concepts.', count: '12+ Guides', color: 'from-gold to-gold-dark' },
  { icon: <FileText className="w-8 h-8" />, title: 'Devotionals', description: 'Daily devotionals to strengthen your walk with God. Start each day anchored in His Word and filled with His Spirit.', count: '365 Daily Readings', color: 'from-burgundy to-burgundy-dark' },
  { icon: <Headphones className="w-8 h-8" />, title: 'Audio Teachings', description: 'Listen to powerful sermons and teachings on the go. Build your faith as you commute, exercise, or rest at home.', count: '50+ Messages', color: 'from-gold-dark to-gold' },
  { icon: <Video className="w-8 h-8" />, title: 'Video Sermons', description: "Watch our Sunday services, special meetings, and teaching sessions online. Experience the power of God's Word wherever you are.", count: '30+ Videos', color: 'from-burgundy-dark to-burgundy' },
  { icon: <CandlestickChart className="w-8 h-8" />, title: 'Prayer Resources', description: 'Prayer guides, warfare scriptures, and devotionals to strengthen your prayer life and deepen your communion with God.', count: '8+ Guides', color: 'from-gold to-gold-dark' },
  { icon: <Music className="w-8 h-8" />, title: 'Worship Music', description: "Spirit-filled worship music from our ministry. Let these songs usher you into God's presence and lift your spirit.", count: '20+ Songs', color: 'from-burgundy to-burgundy-dark' },
];

const fallbackResources: Resource[] = [
  { id: '1', title: 'Understanding Your Identity in Christ', type: 'Study Guide', description: 'A 30-day journey through Scripture to discover who God says you are.', category: 'Bible Study Guides', downloadUrl: '', icon: 'BookOpen' },
  { id: '2', title: 'The Gospel of Peace: Reconciliation Series', type: 'Audio Teaching', description: 'A 6-part series on spreading the ministry of peace and reconciliation in communities.', category: 'Audio Teachings', downloadUrl: '', icon: 'Headphones' },
  { id: '3', title: 'Walking in Divine Healing', type: 'Video Teaching', description: 'Learn biblical principles for receiving and ministering divine healing.', category: 'Video Sermons', downloadUrl: '', icon: 'Video' },
  { id: '4', title: 'Daily Declarations for Kingdom Living', type: 'Devotional', description: 'Powerful daily declarations rooted in Scripture to build your faith and transform your mindset.', category: 'Devotionals', downloadUrl: '', icon: 'FileText' },
];

const dailyVerse = {
  text: 'And this gospel of the kingdom will be proclaimed throughout the whole world as a testimony to all nations, and then the end will come.',
  reference: 'Matthew 24:14',
};

export function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>(fallbackResources);
  const [loading, setLoading] = useState(true);

  const fetchResources = useCallback(async () => {
    try {
      const res = await fetch('/api/resources');
      if (res.ok) {
        const data = await res.json();
        if (data.length > 0) {
          setResources(data);
        }
      }
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchResources();
  }, [fetchResources]);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bible-study.png)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        </div>
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase hover:bg-gold/20 transition-colors cursor-default">
              Resources
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Grow in <span className="text-gold-gradient animate-gradient-shift">Faith</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE_OUT }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            Access our library of spiritual resources designed to help you grow deeper in your
            relationship with God and equip you for Kingdom service.
          </motion.p>
        </div>
      </section>

      {/* Daily Verse */}
      <section className="relative bg-burgundy-gradient py-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
        <div className="max-w-4xl mx-auto section-padding text-center relative">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Lightbulb className="w-8 h-8 text-gold mx-auto mb-4 group-icon" />
            <p className="text-xs text-gold/60 tracking-widest uppercase font-medium mb-4">Verse of the Day</p>
            <p className="text-white text-lg md:text-xl font-serif italic leading-relaxed mb-4 hover-gradient-text inline-block">
              &ldquo;{dailyVerse.text}&rdquo;
            </p>
            <p className="text-gold/70 text-sm font-medium">{dailyVerse.reference}</p>
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
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
              Library
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Resource <span className="text-burgundy">Library</span>
            </h2>
            <p className="text-dark/60 text-base max-w-2xl mx-auto">
              Explore our collection of spiritual growth materials available for free download.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {resourceCategories.map((cat) => (
              <motion.div key={cat.title} variants={staggerItemScale}>
                <Card className="group bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-sm h-full overflow-hidden hover-lift hover-shimmer cursor-default">
                  <div className={`h-1.5 bg-gradient-to-r ${cat.color}`} />
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <span className="group-icon inline-flex">{cat.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-burgundy transition-colors">{cat.title}</h3>
                    <p className="text-dark/60 text-sm leading-relaxed mb-4">{cat.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold-dark text-xs font-medium">{cat.count}</span>
                      <Button variant="ghost" className="text-gold-dark hover:text-gold text-xs p-0 h-auto hover-arrow">
                        Browse <ExternalLink className="w-3 h-3 ml-1 hover-arrow-target" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Resources from API */}
      <section className="relative bg-dark py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-breathe" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
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
              Featured
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Recommended <span className="text-gold-gradient animate-gradient-shift">Resources</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4 max-w-3xl mx-auto"
          >
            {resources.map((resource) => (
              <motion.div key={resource.id} variants={staggerItem}>
                <Card className="group bg-white/5 border-gold/10 hover:border-gold/30 transition-all duration-500 rounded-sm hover-lift cursor-default">
                  <CardContent className="p-5 flex items-center gap-4">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <span className="group-icon inline-flex">{smallIconMap[resource.icon] || <FileText className="w-5 h-5" />}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-sm truncate group-hover:text-gold transition-colors">{resource.title}</h3>
                        <span className="px-2 py-0.5 bg-gold/10 text-gold text-[10px] font-medium tracking-wider uppercase rounded-sm shrink-0">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-white/50 text-xs leading-relaxed">{resource.description}</p>
                    </div>
                    <Button variant="ghost" className="text-gold hover:text-gold-light shrink-0 group-hover:scale-110 transition-transform duration-300" size="icon">
                      <Download className="w-4 h-4" />
                    </Button>
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
