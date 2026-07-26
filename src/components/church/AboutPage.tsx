'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  BookOpen, Heart, Cross, Users, Globe, Shield,
  Target, Eye, Compass, Star, Award, TrendingUp,
  Church, GraduationCap, HandHeart, Scale, Building,
  Landmark, HandCoins, Briefcase, UsersRound
} from 'lucide-react';
import {
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, blurIn, rotateIn,
  staggerContainer, staggerItem, staggerItemScale, viewportOnce,
} from '@/lib/animations';

const coreValues = [
  {
    icon: <Cross className="w-7 h-7" />,
    title: 'Abiding',
    description: 'Remaining deeply connected to Christ through prayer, Scripture, faith, community, and resting in His righteousness to bear lasting spiritual fruit.',
    verse: 'John 15:1-17',
    gradient: 'from-gold to-gold-dark',
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Knowing',
    description: 'Growing in biblical and theological knowledge that transforms how we live, ensuring our actions align with what we learn.',
    verse: 'John 8:32',
    gradient: 'from-burgundy to-burgundy-dark',
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: 'Being',
    description: 'Becoming more like Christ in purpose, heart, and character, living self-sacrificially and faithfully in every aspect of life.',
    verse: '2 Corinthians 3:18',
    gradient: 'from-gold-dark to-gold',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: 'Going',
    description: 'Actively sharing the Gospel and impacting culture with God\'s redemptive work, spreading His message to all nations.',
    verse: 'John 15:5',
    gradient: 'from-burgundy-dark to-burgundy',
  },
];

const objectives = [
  { icon: <Cross className="w-5 h-5" />, title: 'Preach the Gospel', description: 'Proclaim Jesus Christ as the only way of salvation through faith, fulfilling the Great Commission.' },
  { icon: <Users className="w-5 h-5" />, title: 'Evangelism & Ministry Activities', description: 'Conduct revival meetings, seminars, crusades, camps, and rallies to spread the Gospel.' },
  { icon: <Church className="w-5 h-5" />, title: 'Church Planting', description: 'Establish churches under the ministry\'s name in different localities.' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Empowerment & Talent Development', description: 'Identify and develop God-given talents and abilities for personal growth and ministry effectiveness.' },
  { icon: <HandHeart className="w-5 h-5" />, title: 'Support for Vulnerable Groups', description: 'Provide love and care to people living with HIV/AIDS and other vulnerable communities.' },
  { icon: <GraduationCap className="w-5 h-5" />, title: 'Promote Christian Education', description: 'Improve children\'s education by opening Christian schools, colleges, Bible schools, and daycare centres.' },
  { icon: <Scale className="w-5 h-5" />, title: 'Peace & Reconciliation', description: 'Cooperate with churches, missions, and organisations to promote peace in the country.' },
  { icon: <Building className="w-5 h-5" />, title: 'Community Development', description: 'Build or support schools, orphanages, hospitals, youth and women development projects, and financial empowerment programs.' },
  { icon: <Landmark className="w-5 h-5" />, title: 'Fundraising & Publicity', description: 'Organise fundraising activities and promote the ministry\'s objectives locally and internationally.' },
  { icon: <Briefcase className="w-5 h-5" />, title: 'Property & Asset Management', description: 'Acquire, lease, or purchase property and equipment necessary for ministry activities.' },
  { icon: <HandCoins className="w-5 h-5" />, title: 'Partnerships & Grants', description: 'Collaborate with governments, NGOs, and organisations to receive grants and donations supporting the ministry\'s work.' },
  { icon: <UsersRound className="w-5 h-5" />, title: 'Employment & Staffing', description: 'Hire necessary staff and volunteers to fulfill the ministry\'s objectives.' },
];

const completedOutreaches = [
  'Canan Vision Life Church was established',
  'Establishment of God Is Able Nursery and Primary School',
];

export function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/church-building.png)' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        </div>
        <div className="relative z-10 text-center section-padding max-w-4xl mx-auto py-32">
          <motion.span
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Know <span className="text-gold-gradient">Our Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto"
          >
            A Christ-centered ministry dedicated to empowering communities through spiritual connection to Almighty God.
          </motion.p>
        </div>
      </section>

      {/* Historical Background */}
      <section className="relative bg-cream py-24">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <span className="inline-block px-4 py-1.5 bg-burgundy/10 border border-burgundy/20 rounded-full text-burgundy text-xs font-medium tracking-widest uppercase mb-6 hover:bg-burgundy/20 transition-colors cursor-default">
                Historical Background
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Established in <span className="text-burgundy">2017</span>
              </h2>
              <p className="text-dark/70 text-base leading-relaxed mb-4">
                Life Vision Ministries LTD was established on 6th September 2017 and is incorporated in Uganda
                under the Companies Act 2012. It is a religious and charitable organisation dedicated to
                empowering communities through Spiritual connection to Almighty God.
              </p>
              <p className="text-dark/70 text-base leading-relaxed mb-4">
                We are a Christian Faith-based organisation that spreads the message of God throughout our
                Sunday Ministry, Healing and Deliverance consultation, Bible study, and many other church services.
                We strive to make the word of God more accessible to everybody in the communities.
              </p>
              <p className="text-dark/70 text-base leading-relaxed mb-6">
                We spread the gospel of Jesus Christ and the Ministry of peace and reconciliation in communities,
                cultures, and the country at large in conflicts. Many communities we work with in Rakai District
                often fall far short of having the most basic provisions of adequate health, food, clean water,
                clothing, shelter, and school for themselves and their children.
              </p>
              <div className="p-4 bg-gold/5 border-l-4 border-gold rounded-r-sm hover:bg-gold/10 transition-colors cursor-default">
                <p className="text-dark/80 text-sm italic">
                  &ldquo;For if I preach the gospel, that gives me no ground for boasting. For necessity is laid
                  upon me. Woe to me if I do not preach the gospel!&rdquo;
                </p>
                <p className="text-gold-dark text-xs mt-2 font-medium">— 1 Corinthians 9:16</p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative"
            >
              <div className="relative rounded-sm overflow-hidden shadow-2xl hover-img-zoom group">
                <img src="/images/community.png" alt="Community" className="w-full h-96 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
                <div className="absolute inset-0 ring-2 ring-gold/0 group-hover:ring-gold/40 transition-all duration-500" />
              </div>
              <motion.div
                whileHover={{ scale: 1.05, rotate: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="absolute -bottom-6 -left-6 bg-gold text-dark p-6 rounded-sm shadow-xl hover-glow"
              >
                <p className="text-3xl font-bold">2017</p>
                <p className="text-xs font-medium tracking-wider uppercase">Established</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative bg-dark py-24">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <motion.div
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default">
              Our Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Along with Spreading the <span className="text-gold-gradient animate-gradient-shift">Gospel</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              { icon: <Church className="w-6 h-6 group-icon" />, text: 'Establish churches and schools in some of the remotest villages in Uganda.' },
              { icon: <GraduationCap className="w-6 h-6 group-icon" />, text: 'Strengthen and develop existing means of livelihood, bring primary education to school children, literacy and numeracy to youth and adults.' },
              { icon: <BookOpen className="w-6 h-6 group-icon" />, text: 'Promote the furtherance of the spread of the gospel and teaching of Jesus Christ in traditional church settings.' },
              { icon: <Heart className="w-6 h-6 group-icon" />, text: 'Provide love and care to people living with HIV/AIDS and cooperate with churches, missions, and organisations for peace.' },
            ].map((item, i) => (
              <motion.div key={i} variants={i % 2 === 0 ? fadeInLeft : fadeInRight}>
                <Card className="group bg-white/5 border-gold/10 hover:border-gold/40 transition-all duration-500 rounded-sm h-full hover-lift hover-shimmer cursor-default">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-500">
                      {item.icon}
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative bg-cream py-24 overflow-hidden">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Card className="group bg-white border-0 shadow-xl rounded-sm h-full overflow-hidden hover-lift hover-shimmer cursor-default">
                <div className="h-2 bg-gradient-to-r from-gold to-gold-dark animate-gradient-shift" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark group-hover:text-gold-dark transition-colors">Vision Statement</h3>
                      <p className="text-gold-dark text-xs tracking-wider uppercase font-medium">Proverbs 29:18</p>
                    </div>
                  </div>
                  <p className="text-dark/80 text-base leading-relaxed mb-4 font-medium">
                    To raise a Christ-centered generation transformed by the Word of God, equipped in identity,
                    purpose, and destiny, and empowered to impact nations through love, service, and Kingdom influence.
                  </p>
                  <Separator className="my-4 bg-gold/20" />
                  <div className="space-y-3">
                    <p className="text-dark/60 text-sm">
                      <span className="text-burgundy font-semibold">Where there is no vision, the people perish,</span> but whoever
                      obeys the law is happy — Proverbs 29:18.
                    </p>
                    <p className="text-dark/60 text-sm">
                      Expressing God&apos;s vision suggesting clear purpose and direction is essential for thriving.
                      Emphasizing God&apos;s plans for prosperity and a hopeful future — Jeremiah 29:11.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <Card className="group bg-white border-0 shadow-xl rounded-sm h-full overflow-hidden hover-lift hover-shimmer cursor-default">
                <div className="h-2 bg-gradient-to-r from-burgundy to-burgundy-dark animate-gradient-shift" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-burgundy to-burgundy-dark flex items-center justify-center group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark group-hover:text-burgundy transition-colors">Mission Statement</h3>
                      <p className="text-burgundy text-xs tracking-wider uppercase font-medium">Matthew 28:19-20</p>
                    </div>
                  </div>
                  <p className="text-dark/80 text-base leading-relaxed mb-4 font-medium">
                    Our mission is to express the love of God to the world and serve humanity with compassion,
                    while making Christ known to all nations. We are committed to teaching biblical principles
                    that transform lives, training and equipping believers for ministry, and developing men
                    and women who understand their God-given identity, purpose, and significance for the
                    advancement of the Kingdom of God.
                  </p>
                  <Separator className="my-4 bg-burgundy/20" />
                  <p className="text-dark/60 text-sm">
                    To train, equip, motivate, and empower men and women for Kingdom-based significance, and by
                    extension, societal impact. Through image building, identity, vision, and purpose based ministry,
                    to the end that the individual will realize the significance of his or her individuality, gain a
                    positive picture of his or her God-given destiny, resulting in self-discovery and a maximized
                    life for Kingdom advancement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative bg-dark py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-breathe" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding relative">
          <motion.div
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default">
              Core Values
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The Foundation of <span className="text-gold-gradient animate-gradient-shift">Our Faith</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((value) => (
              <motion.div key={value.title} variants={staggerItemScale}>
                <Card className={`group bg-gradient-to-br from-white/5 to-transparent border border-gold/10 hover:border-gold/40 transition-all duration-500 rounded-sm h-full text-center hover-lift hover-shimmer cursor-default`}>
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      {value.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-gold transition-colors">{value.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-3">{value.description}</p>
                    <p className="text-gold/60 text-xs font-medium group-hover:text-gold transition-colors">{value.verse}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Objectives */}
      <section className="relative bg-cream py-24">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-burgundy/10 border border-burgundy/20 rounded-full text-burgundy text-xs font-medium tracking-widest uppercase mb-6 hover:bg-burgundy/20 transition-colors cursor-default">
              Core Objectives
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
              Our <span className="text-burgundy">Strategic</span> Objectives
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {objectives.map((obj) => (
              <motion.div key={obj.title} variants={staggerItem}>
                <Card className="group bg-white hover:shadow-xl border-dark/5 hover:border-gold/40 transition-all duration-500 rounded-sm h-full hover-lift cursor-default">
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-gold/10 to-burgundy/10 flex items-center justify-center text-burgundy group-hover:text-gold-dark group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:from-gold/20 group-hover:to-burgundy/20">
                      {obj.icon}
                    </div>
                    <div>
                      <h4 className="text-dark font-bold text-sm mb-1 group-hover:text-burgundy transition-colors">{obj.title}</h4>
                      <p className="text-dark/60 text-xs leading-relaxed">{obj.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overall Aim */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/cross-sunrise.png)' }} />
          <div className="absolute inset-0 bg-dark/85" />
        </div>
        <div className="relative max-w-4xl mx-auto section-padding text-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Compass className="w-12 h-12 text-gold mx-auto mb-6 animate-breathe" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Overall Aim</h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              The aim of Vision Life Ministries Ltd is to raise empowered, Spirit-led believers who live
              purposeful, impactful lives, advancing the Kingdom of God in their communities, nations, and
              the world. We seek to inspire transformation, cultivate strong biblical foundations, and
              prepare individuals for meaningful ministry and global influence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Pastors */}
      <section className="relative bg-cream py-24">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <motion.div
            variants={blurIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold-dark text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default">
              Our Pastors
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-dark">
              Spiritual <span className="text-burgundy">Leadership</span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                name: 'Pastor Akampulira Edson',
                role: 'The Vision Bearer & Managing Director',
                description: 'Called by God to establish Vision Life Ministries, Pastor Edson carries the vision to reach, restore, and equip believers for Kingdom impact.',
                image: '/images/pastor-edson.png',
              },
              {
                name: 'Pr. Rwebiaro Benon',
                role: 'Co-Founder, Overseas Canan Life Church Ministries',
                description: 'A dedicated co-laborer in the Gospel, Pr. Benon oversees the Canan Life Church Ministries and partners in the vision of transformation.',
                image: '/images/pastor-benon.png',
              },
            ].map((pastor) => (
              <motion.div key={pastor.name} variants={staggerItemScale}>
                <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-sm overflow-hidden text-center hover-lift hover-shimmer cursor-default">
                  <div className="h-2 bg-gradient-to-r from-gold to-burgundy animate-gradient-shift" />
                  <CardContent className="p-8">
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gold/20 shadow-lg bg-gradient-to-br from-gold/20 to-burgundy/20 flex items-center justify-center group-hover:ring-gold/50 group-hover:scale-105 transition-all duration-500">
                      {pastor.image ? (
                        <img
                          src={pastor.image}
                          alt={`Portrait of ${pastor.name}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Star className="w-10 h-10 text-gold" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-dark mb-1 group-hover:text-burgundy transition-colors">{pastor.name}</h3>
                    <p className="text-burgundy text-xs font-medium tracking-wider uppercase mb-4">{pastor.role}</p>
                    <p className="text-dark/60 text-sm leading-relaxed">{pastor.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Completed Outreaches */}
      <section className="relative bg-dark py-20">
        <div className="max-w-7xl 2xl:max-w-9xl mx-auto section-padding">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Completed <span className="text-gold-gradient animate-gradient-shift">Outreaches</span>
            </h2>
          </motion.div>
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-2xl mx-auto space-y-4"
          >
            {completedOutreaches.map((outreach, i) => (
              <motion.div
                key={i}
                variants={fadeInLeft}
                className="group flex items-center gap-4 p-4 bg-gold/5 border border-gold/10 rounded-sm hover:bg-gold/10 hover:border-gold/40 transition-all duration-400 hover-lift cursor-default"
              >
                <div className="w-8 h-8 shrink-0 rounded-full bg-gold/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  <Award className="w-4 h-4 text-gold" />
                </div>
                <p className="text-white/80 text-sm group-hover:text-white transition-colors">{outreach}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
