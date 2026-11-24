'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  ArrowRight, Clock, Globe, Heart, Mail, MapPin, MessageCircle, Phone, Send,
} from 'lucide-react';
import { Eyebrow, PageHero, PullQuote, SectionHead } from '@/components/church/Editorial';
import { EASE_OUT, staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Our Location',
    details: ['Rakai District', 'Uganda, East Africa'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+974 5119 3650', '+256741096594', '+256777348011'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@visionlifeministries.com', 'visionlifevisionlifeministries@gmail.com'],
  },
  {
    icon: Clock,
    title: 'Service Times',
    details: ['Sunday: 9:00 AM — 12:00 PM', 'Wednesday Bible Study: 5:00 PM', 'Friday Prayer: 6:00 PM'],
  },
];

const reasons = [
  {
    icon: MessageCircle,
    title: 'Prayer Request',
    description: 'Share your prayer needs and our team will lift you up in prayer.',
  },
  {
    icon: Heart,
    title: 'Counseling',
    description: 'Speak with our pastoral team for spiritual guidance and support.',
  },
  {
    icon: Globe,
    title: 'Missions Partnership',
    description: 'Learn how you can partner with us in reaching communities.',
  },
  {
    icon: ArrowRight,
    title: 'General Inquiry',
    description: 'Have questions about our ministry, programs, or events? Ask us.',
  },
];

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const hasEmailConfig = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

const fieldClasses =
  'h-11 rounded-none border-0 border-b border-dark/20 bg-transparent px-0 text-[14px] text-dark placeholder:text-dark/30 focus-visible:border-gold-dark focus-visible:ring-0';

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setFeedbackMessage('');
    setFeedbackType(null);

    if (!hasEmailConfig) {
      setFeedbackType('error');
      setFeedbackMessage('The contact form is not configured yet. Please contact us directly at info@visionlifeministries.com.');
      setIsSending(false);
      setTimeout(() => {
        setFeedbackMessage('');
        setFeedbackType(null);
      }, 5000);
      return;
    }

    try {
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          time: new Date().toLocaleString(),
          message: formData.message,
          to_name: 'Vision Life Ministries',
        },
        PUBLIC_KEY,
      );

      setFeedbackType('success');
      setFeedbackMessage('Thank you! Your message has been sent successfully.');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      const detail =
        (error as { text?: string; message?: string })?.text ||
        (error as { text?: string; message?: string })?.message ||
        '';
      setFeedbackType('error');
      setFeedbackMessage(
        detail
          ? `Sorry, your message could not be sent: ${detail}`
          : 'Sorry, your message could not be sent right now. Please try again later.',
      );
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setFeedbackMessage('');
        setFeedbackType(null);
      }, 5000);
    }
  };

  return (
    <div className="min-w-0 overflow-hidden bg-cream">
      <PageHero
        image="https://res.cloudinary.com/dbembxeoi/image/upload/v1795527764/WhatsApp_Image_2026-11-17_at_2.46.14_AM_ajwbuy.jpg"
        alt="Vision Life Ministries church building in Rakai District, Uganda"
        eyebrow="Contact Us"
        title={
          <>
            Get in <span className="display-italic text-gold">touch</span>.
          </>
        }
        description="We would love to hear from you. Whether you need prayer, counseling, or have questions about our ministry — we are here for you."
        meta={
          <div className="flex flex-wrap gap-x-10 gap-y-3 text-cream/50">
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Call</p>
              <p className="mt-1.5 font-display text-lg text-cream">+256741096594</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-cream/30">Email</p>
              <p className="mt-1.5 font-display text-lg text-cream">info@visionlifeministries.com</p>
            </div>
          </div>
        }
      />

      {/* ---------------------------------------------------------- */}
      {/* Contact details                                            */}
      {/* ---------------------------------------------------------- */}
      <section className="section-sm">
        <div className="shell">
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-px overflow-hidden rounded-2xl bg-dark/12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  variants={staggerItem}
                  className="group bg-cream p-7 transition-colors duration-500 hover:bg-white"
                >
                  <Icon className="size-5 text-gold-ink/70" />
                  <h3 className="mt-5 text-[9px] uppercase tracking-[0.22em] text-dark/40">
                    {info.title}
                  </h3>
                  <div className="mt-3 space-y-1.5">
                    {info.details.map((detail) => (
                      <p key={detail} className="break-words text-[13px] leading-relaxed text-dark/65">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Form                                                       */}
      {/* ---------------------------------------------------------- */}
      <section className="pb-24">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Reach Out</Eyebrow>
              <h2 className="t-h2 mt-5 text-dark">
                Send us a <span className="display-italic text-burgundy">message</span>.
              </h2>
              <p className="mt-5 text-[14px] italic leading-relaxed text-dark/50">
                For where two or three gather in my name, there am I with them. — Matthew 18:20
              </p>

              <div className="mt-9 border-t border-dark/12">
                {reasons.map((reason, i) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={reason.title}
                      className="group flex items-start gap-4 border-b border-dark/12 py-5"
                    >
                      <span className="font-display text-xs tracking-[0.16em] text-dark/25">
                        0{i + 1}
                      </span>
                      <Icon className="mt-0.5 size-4 shrink-0 text-gold-ink/60" />
                      <div>
                        <p className="font-display text-lg leading-snug text-dark">{reason.title}</p>
                        <p className="mt-1 text-[12.5px] leading-relaxed text-dark/50">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9">
                <PullQuote attribution="Jeremiah 33:3">
                  Call to me and I will answer you and tell you great and unsearchable things you do
                  not know.
                </PullQuote>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className="lg:col-span-7"
            >
              <div className="rounded-2xl border border-dark/8 bg-white p-6 shadow-[0_30px_80px_-50px_rgba(10,10,10,0.4)] sm:p-9">
                {feedbackMessage ? (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mb-7 flex items-start gap-3 rounded-lg border p-4 ${
                      feedbackType === 'success'
                        ? 'border-gold-dark/25 bg-gold/10'
                        : 'border-burgundy/25 bg-burgundy/5'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    <Send
                      className={`mt-0.5 size-4 shrink-0 ${
                        feedbackType === 'success' ? 'text-gold-ink' : 'text-burgundy'
                      }`}
                    />
                    <p
                      className={`text-[13px] leading-relaxed ${
                        feedbackType === 'success' ? 'text-gold-ink' : 'text-burgundy-dark'
                      }`}
                    >
                      {feedbackMessage}
                    </p>
                  </motion.div>
                ) : null}

                <form className="space-y-7" onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-dark/40"
                      >
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                        required
                        className={fieldClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-dark/40"
                      >
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        required
                        className={fieldClasses}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-dark/40"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        type="email"
                        required
                        className={fieldClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-dark/40"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+256 700 000 000"
                        className={fieldClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[9px] uppercase tracking-[0.2em] text-dark/40"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      className="resize-none rounded-none border-0 border-b border-dark/20 bg-transparent px-0 text-[14px] text-dark placeholder:text-dark/30 focus-visible:border-gold-dark focus-visible:ring-0"
                    />
                  </div>

                  <div className="flex flex-col gap-4 border-t border-dark/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[10.5px] leading-relaxed text-dark/35">
                      We will never share your details.
                    </p>
                    <Button
                      type="submit"
                      disabled={isSending}
                      className="group h-auto rounded-full bg-dark px-7 py-3.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cream transition-colors duration-400 hover:bg-burgundy disabled:opacity-60"
                    >
                      <Send className="mr-2 size-3.5" />
                      {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Map                                                        */}
      {/* ---------------------------------------------------------- */}
      <section className="section bg-dark">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHead
                tone="light"
                eyebrow="Find Us"
                title={
                  <>
                    Visit <span className="display-italic text-gold">our church</span>.
                  </>
                }
                description="Come and worship with us in Rakai District, Uganda. You are always welcome!"
              />

              <div className="mt-9 space-y-6">
                {[
                  { icon: MapPin, label: 'Physical Address', lines: ['Rakai District, Uganda, East Africa'] },
                  {
                    icon: Clock,
                    label: 'Service Schedule',
                    lines: [
                      'Sunday Worship — 9:00 AM to 12:00 PM',
                      'Bible Study — Wednesday 5:00 PM',
                      'Prayer Meeting — Friday 6:00 PM',
                      'Youth Service — Saturday 4:00 PM',
                    ],
                  },
                  { icon: Phone, label: 'Call Us', lines: ['+974 5076 9794', '+974 5119 3650'] },
                  {
                    icon: Mail,
                    label: 'Email Us',
                    lines: ['info@visionlifeministries.com', 'visionlifevisionlifeministries@gmail.com'],
                  },
                ].map((block) => {
                  const Icon = block.icon;
                  return (
                    <div key={block.label} className="flex items-start gap-4 border-t border-white/10 pt-5">
                      <Icon className="mt-0.5 size-4 shrink-0 text-gold" />
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-cream/30">
                          {block.label}
                        </p>
                        <div className="mt-2 space-y-1">
                          {block.lines.map((line) => (
                            <p key={line} className="break-words text-[13px] leading-relaxed text-cream/60">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.9, ease: EASE_OUT }}
              className="lg:col-span-7"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.50737078586!2d31.3!3d-0.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d71f3f4e4f4b47%3A0x3c1e2b6e2e4b9f10!2sRakai%2C%20Uganda!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="480"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vision Life Ministries Location - Rakai District, Uganda"
                  className="w-full"
                />
              </div>
              <p className="mt-5 text-[11.5px] uppercase tracking-[0.16em] text-cream/30">
                &ldquo;For I was a stranger and you invited me in&hellip;&rdquo; — Matthew 25:35-36
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
