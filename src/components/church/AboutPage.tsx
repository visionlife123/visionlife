'use client';

import { motion } from 'framer-motion';
import {
  Award, BookOpen, Briefcase, Building, Church, Compass, Cross, Eye,
  Globe, GraduationCap, HandCoins, HandHeart, Heart, Landmark, Scale,
  Target, TrendingUp, Users, UsersRound,
} from 'lucide-react';
import {
  Action, ArrowLink, Eyebrow, ImageReveal, Index, Media, PageHero, PullQuote, SectionHead,
} from '@/components/church/Editorial';
import {
  EASE_OUT, staggerContainer, staggerItem, viewportOnce,
} from '@/lib/animations';

const coreValues = [
  {
    title: 'Abiding',
    description:
      'Remaining deeply connected to Christ through prayer, Scripture, faith, community, and resting in His righteousness to bear lasting spiritual fruit.',
    verse: 'John 15:1-17',
    icon: Cross,
  },
  {
    title: 'Knowing',
    description:
      'Growing in biblical and theological knowledge that transforms how we live, ensuring our actions align with what we learn.',
    verse: 'John 8:32',
    icon: BookOpen,
  },
  {
    title: 'Being',
    description:
      'Becoming more like Christ in purpose, heart, and character, living self-sacrificially and faithfully in every aspect of life.',
    verse: '2 Corinthians 3:18',
    icon: Heart,
  },
  {
    title: 'Going',
    description:
      "Actively sharing the Gospel and impacting culture with God's redemptive work, spreading His message to all nations.",
    verse: 'John 15:5',
    icon: Globe,
  },
];

const objectives = [
  { icon: Cross, title: 'Preach the Gospel', description: 'Proclaim Jesus Christ as the only way of salvation through faith, fulfilling the Great Commission.' },
  { icon: Users, title: 'Evangelism & Ministry Activities', description: 'Conduct revival meetings, seminars, crusades, camps, and rallies to spread the Gospel.' },
  { icon: Church, title: 'Church Planting', description: "Establish churches under the ministry's name in different localities." },
  { icon: TrendingUp, title: 'Empowerment & Talent Development', description: 'Identify and develop God-given talents and abilities for personal growth and ministry effectiveness.' },
  { icon: HandHeart, title: 'Support for Vulnerable Groups', description: 'Provide love and care to people living with HIV/AIDS and other vulnerable communities.' },
  { icon: GraduationCap, title: 'Promote Christian Education', description: "Improve children's education by opening Christian schools, colleges, Bible schools, and daycare centres." },
  { icon: Scale, title: 'Peace & Reconciliation', description: 'Cooperate with churches, missions, and organisations to promote peace in the country.' },
  { icon: Building, title: 'Community Development', description: 'Build or support schools, orphanages, hospitals, youth and women development projects, and financial empowerment programs.' },
  { icon: Landmark, title: 'Fundraising & Publicity', description: "Organise fundraising activities and promote the ministry's objectives locally and internationally." },
  { icon: Briefcase, title: 'Property & Asset Management', description: 'Acquire, lease, or purchase property and equipment necessary for ministry activities.' },
  { icon: HandCoins, title: 'Partnerships & Grants', description: "Collaborate with governments, NGOs, and organisations to receive grants and donations supporting the ministry's work." },
  { icon: UsersRound, title: 'Employment & Staffing', description: "Hire necessary staff and volunteers to fulfill the ministry's objectives." },
];

const workItems = [
  { icon: Church, text: 'Establish churches and schools in some of the remotest villages in Uganda.' },
  { icon: GraduationCap, text: 'Strengthen and develop existing means of livelihood, bring primary education to school children, literacy and numeracy to youth and adults.' },
  { icon: BookOpen, text: 'Promote the furtherance of the spread of the gospel and teaching of Jesus Christ in traditional church settings.' },
  { icon: Heart, text: 'Provide love and care to people living with HIV/AIDS and cooperate with churches, missions, and organisations for peace.' },
];

const pastors = [
  {
    name: 'Pastor Akampulira Edson',
    role: 'The Vision Bearer & Managing Director',
    description:
      'Called by God to establish Vision Life Ministries, Pastor Edson carries the vision to reach, restore, and equip believers for Kingdom impact.',
    image: '/images/pastor-edson.png',
  },
  {
    name: 'Pr. Rwebiaro Benon',
    role: 'Co-Founder, Overseas Canan Life Church Ministries',
    description:
      'A dedicated co-laborer in the Gospel, Pr. Benon oversees the Canan Life Church Ministries and partners in the vision of transformation.',
    image: '/images/pastor-benon.png',
  },
];

const completedOutreaches = [
  'Canan Vision Life Church was established',
  'Establishment of God Is Able Nursery and Primary School',
];

export function AboutPage() {
  return (
    <div className="min-w-0 overflow-hidden bg-cream">
      <PageHero
        image="https://res.cloudinary.com/dbembxeoi/image/upload/v1795527764/WhatsApp_Image_2026-11-17_at_2.46.14_AM_ajwbuy.jpg"
        alt="The Vision Life Ministries church building in Rakai District, Uganda"
        eyebrow="About Us"
        title={
          <>
            Know <span className="display-italic text-gold">our story</span>.
          </>
        }
        description="A Christ-centered ministry dedicated to empowering communities through spiritual connection to Almighty God."
        meta={
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-cream/50">
            {[
              ['Established', '2017'],
              ['Based in', 'Rakai, Uganda'],
              ['Called to', 'Reach · Restore · Equip'],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">{k}</p>
                <p className="mt-1.5 font-display text-lg text-cream">{v}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* ---------------------------------------------------------- */}
      {/* Historical background                                      */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <Eyebrow>Historical Background</Eyebrow>
              <h2 className="t-h2 mt-5 text-dark">
                Established in <span className="display-italic text-burgundy">2017</span>.
              </h2>

              <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-dark/65">
                <p>
                  Life Vision Ministries LTD was established on 6th September 2017 and is
                  incorporated in Uganda under the Companies Act 2012. It is a religious and
                  charitable organisation dedicated to empowering communities through Spiritual
                  connection to Almighty God.
                </p>
                <p>
                  We are a Christian Faith-based organisation that spreads the message of God
                  throughout our Sunday Ministry, Healing and Deliverance consultation, Bible study,
                  and many other church services. We strive to make the word of God more accessible
                  to everybody in the communities.
                </p>
                <p>
                  We spread the gospel of Jesus Christ and the Ministry of peace and reconciliation
                  in communities, cultures, and the country at large in conflicts. Many communities
                  we work with in Rakai District often fall far short of having the most basic
                  provisions of adequate health, food, clean water, clothing, shelter, and school for
                  themselves and their children.
                </p>
              </div>

              <div className="mt-9 border-l-2 border-gold pl-5">
                <PullQuote attribution="1 Corinthians 9:16">
                  For if I preach the gospel, that gives me no ground for boasting. For necessity is
                  laid upon me. Woe to me if I do not preach the gospel!
                </PullQuote>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ImageReveal className="relative lg:sticky lg:top-32">
                <Media
                  src="https://res.cloudinary.com/dbembxeoi/image/upload/v1795528030/WhatsApp_Image_2026-11-17_at_4.56.00_AM_ldkckq.jpg"
                  alt="Vision Life Ministries community gathered together in Rakai"
                  className="aspect-[16/10] rounded-[1.25rem] sm:aspect-[16/9] lg:aspect-[4/5]"
                />
                <div className="absolute -bottom-5 left-5 rounded-2xl bg-gold px-6 py-5 text-dark shadow-xl">
                  <p className="font-display text-4xl leading-none">2017</p>
                  <p className="mt-2 text-[9px] uppercase tracking-[0.24em] text-dark/60">
                    Established
                  </p>
                </div>
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* What we do                                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="section bg-dark">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow tone="light">Our Work</Eyebrow>
              <h2 className="t-h2 mt-5 text-cream">
                Along with spreading the <span className="display-italic text-gold">Gospel</span>.
              </h2>
              <p className="mt-6 max-w-md text-[14.5px] leading-relaxed text-cream/50">
                Faith without works is empty. Alongside the preaching of the Word, we serve
                communities in Rakai District with practical, lasting support.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {workItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.7, delay: i * 0.07, ease: EASE_OUT }}
                      className="group border-t border-white/10 pt-6"
                    >
                      <Icon className="size-5 text-gold" />
                      <p className="mt-5 text-[13.5px] leading-relaxed text-cream/60">
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Vision & Mission                                           */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <SectionHead
            eyebrow="Vision & Mission"
            title={
              <>
                Why we exist, and <span className="display-italic">where we are going</span>.
              </>
            }
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.article
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: EASE_OUT }}
              className="border-t-2 border-gold pt-8"
            >
              <div className="flex items-center gap-3">
                <Eye className="size-5 text-gold-ink" />
                <p className="text-[9.5px] uppercase tracking-[0.24em] text-dark/40">
                  Vision Statement · Proverbs 29:18
                </p>
              </div>
              <h3 className="t-h3 mt-5 text-dark">A Christ-centered generation.</h3>
              <p className="mt-5 text-[15px] leading-relaxed text-dark/70">
                To raise a Christ-centered generation transformed by the Word of God, equipped in
                identity, purpose, and destiny, and empowered to impact nations through love,
                service, and Kingdom influence.
              </p>
              <div className="mt-6 space-y-3 border-t border-dark/10 pt-6 text-[13.5px] leading-relaxed text-dark/55">
                <p>
                  <span className="font-medium text-burgundy">
                    Where there is no vision, the people perish,
                  </span>{' '}
                  but whoever obeys the law is happy — Proverbs 29:18.
                </p>
                <p>
                  Expressing God&apos;s vision suggesting clear purpose and direction is essential
                  for thriving. Emphasizing God&apos;s plans for prosperity and a hopeful future —
                  Jeremiah 29:11.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              className="border-t-2 border-burgundy pt-8"
            >
              <div className="flex items-center gap-3">
                <Target className="size-5 text-burgundy" />
                <p className="text-[9.5px] uppercase tracking-[0.24em] text-dark/40">
                  Mission Statement · Matthew 28:19-20
                </p>
              </div>
              <h3 className="t-h3 mt-5 text-dark">Love expressed, Christ made known.</h3>
              <p className="mt-5 text-[15px] leading-relaxed text-dark/70">
                Our mission is to express the love of God to the world and serve humanity with
                compassion, while making Christ known to all nations. We are committed to teaching
                biblical principles that transform lives, training and equipping believers for
                ministry, and developing men and women who understand their God-given identity,
                purpose, and significance for the advancement of the Kingdom of God.
              </p>
              <div className="mt-6 border-t border-dark/10 pt-6 text-[13.5px] leading-relaxed text-dark/55">
                <p>
                  To train, equip, motivate, and empower men and women for Kingdom-based
                  significance, and by extension, societal impact. Through image building, identity,
                  vision, and purpose based ministry, to the end that the individual will realize
                  the significance of his or her individuality, gain a positive picture of his or
                  her God-given destiny, resulting in self-discovery and a maximized life for
                  Kingdom advancement.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Core values                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="section bg-dark">
        <div className="shell">
          <SectionHead
            tone="light"
            eyebrow="Core Values"
            title={
              <>
                The foundation of <span className="display-italic text-gold">our faith</span>.
              </>
            }
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  className="group bg-dark p-7 transition-colors duration-500 hover:bg-white/[0.03]"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="size-6 text-gold" />
                    <Index tone="light">0{i + 1}</Index>
                  </div>
                  <h3 className="mt-8 font-display text-2xl text-cream transition-colors duration-500 group-hover:text-gold">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-cream/45">
                    {value.description}
                  </p>
                  <p className="mt-5 text-[9.5px] uppercase tracking-[0.2em] text-gold/60">
                    {value.verse}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Objectives                                                 */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Core Objectives"
              title={
                <>
                  Our <span className="display-italic text-burgundy">strategic</span> objectives.
                </>
              }
              className="max-w-2xl"
            />
            <p className="max-w-xs text-[12.5px] leading-relaxed text-dark/45">
              Twelve commitments that shape how we serve God and neighbour.
            </p>
          </div>

          <div className="mt-12 border-t border-dark/12">
            {objectives.map((obj, i) => {
              const Icon = obj.icon;
              return (
                <motion.div
                  key={obj.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.55, delay: (i % 4) * 0.04, ease: EASE_OUT }}
                  className="group grid grid-cols-12 items-baseline gap-4 border-b border-dark/12 py-5 transition-colors duration-400 hover:bg-dark/[0.025] sm:px-3"
                >
                  <span className="col-span-2 font-display text-xs tracking-[0.18em] text-dark/30 sm:col-span-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="col-span-10 sm:col-span-4">
                    <h3 className="flex items-center gap-2.5 font-display text-[1.25rem] leading-snug text-dark transition-colors duration-400 group-hover:text-burgundy">
                      <Icon className="size-4 shrink-0 text-gold-ink/50 transition-colors group-hover:text-gold-ink" />
                      {obj.title}
                    </h3>
                  </div>
                  <p className="col-span-12 text-[13px] leading-relaxed text-dark/50 sm:col-span-7">
                    {obj.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Overall aim                                                */}
      {/* ---------------------------------------------------------- */}
      <section className="relative isolate overflow-hidden bg-dark py-24 md:py-32">
        <img
          src="/images/cross-sunrise.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-dark via-dark/85 to-dark/70" />
        <div className="shell-narrow relative text-center">
          <Compass className="mx-auto size-8 text-gold" />
          <h2 className="t-h2 mt-7 text-cream">Overall Aim</h2>
          <p className="body-lg mt-6 text-cream/65">
            The aim of Vision Life Ministries Ltd is to raise empowered, Spirit-led believers who
            live purposeful, impactful lives, advancing the Kingdom of God in their communities,
            nations, and the world. We seek to inspire transformation, cultivate strong biblical
            foundations, and prepare individuals for meaningful ministry and global influence.
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Pastors                                                    */}
      {/* ---------------------------------------------------------- */}
      <section className="section">
        <div className="shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHead
              eyebrow="Our Pastors"
              title={
                <>
                  Spiritual <span className="display-italic text-burgundy">leadership</span>.
                </>
              }
            />
            <ArrowLink href="/contact-us" className="shrink-0">
              Reach the Team
            </ArrowLink>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-16">
            {pastors.map((pastor, i) => (
              <motion.article
                key={pastor.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.8, delay: i * 0.1, ease: EASE_OUT }}
                className="group"
              >
                <Media
                  src={pastor.image}
                  alt={`Portrait of ${pastor.name}`}
                  className="aspect-[4/5] rounded-[1.25rem]"
                  imgClassName="grayscale-[20%] transition-all duration-[1200ms] group-hover:grayscale-0"
                />
                <p className="mt-6 text-[9.5px] uppercase tracking-[0.24em] text-gold-ink">
                  {pastor.role}
                </p>
                <h3 className="mt-3 font-display text-[2rem] leading-tight text-dark">
                  {pastor.name}
                </h3>
                <p className="mt-3 max-w-md text-[13.5px] leading-relaxed text-dark/55">
                  {pastor.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Completed outreaches                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="section-sm bg-dark">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Eyebrow tone="light">Milestones</Eyebrow>
              <h2 className="t-h2 mt-5 text-cream">
                Completed <span className="display-italic text-gold">outreaches</span>.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {completedOutreaches.map((outreach) => (
                  <li key={outreach} className="flex items-center gap-4 py-5">
                    <Award className="size-4 shrink-0 text-gold" />
                    <p className="text-[14px] text-cream/65">{outreach}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Action href="/programs" variant="gold" icon="right">
                  Explore Our Programs
                </Action>
                <Action href="/give" variant="outlineLight" icon="none">
                  Partner With Us
                </Action>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
