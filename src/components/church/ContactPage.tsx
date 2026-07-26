'use client';

import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  MapPin, Phone, Mail, Clock, Send, MessageCircle,
  Globe, Heart, ArrowRight
} from 'lucide-react';
import {
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, blurIn,
  staggerContainer, staggerItem, staggerItemScale, viewportOnce, EASE_OUT,
} from '@/lib/animations';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Our Location',
    details: ['Rakai District', 'Uganda, East Africa'],
    color: 'from-gold/20 to-gold/5',
    iconBg: 'bg-gold/10',
    iconColor: 'text-gold',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Phone',
    details: ['+974 5076 9794', '+974 5119 3650'],
    color: 'from-burgundy/20 to-burgundy/5',
    iconBg: 'bg-burgundy/10',
    iconColor: 'text-burgundy',
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email',
    details: ['info@visionlifeministries.com', 'visionlifevisionlifeministries@gmail.com'],
    color: 'from-gold/20 to-gold/5',
    iconBg: 'bg-gold/10',
    iconColor: 'text-gold',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Service Times',
    details: ['Sunday: 9:00 AM — 12:00 PM', 'Wednesday Bible Study: 5:00 PM', 'Friday Prayer: 6:00 PM'],
    color: 'from-burgundy/20 to-burgundy/5',
    iconBg: 'bg-burgundy/10',
    iconColor: 'text-burgundy',
  },
];

const reasons = [
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: 'Prayer Request',
    description: 'Share your prayer needs and our team will lift you up in prayer.',
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: 'Counseling',
    description: 'Speak with our pastoral team for spiritual guidance and support.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Missions Partnership',
    description: 'Learn how you can partner with us in reaching communities.',
  },
  {
    icon: <ArrowRight className="w-5 h-5" />,
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

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
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
          from_name: fullName,
          user_name: fullName,
          name: fullName,
          email: formData.email,
          reply_to: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Vision Life Ministries',
        },
        PUBLIC_KEY,
      );

      setFeedbackType('success');
      setFeedbackMessage('Thank you! Your message has been sent successfully.');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setFeedbackType('error');
      setFeedbackMessage('Sorry, your message could not be sent right now. Please try again later.');
    } finally {
      setIsSending(false);
      setTimeout(() => {
        setFeedbackMessage('');
        setFeedbackType(null);
      }, 5000);
    }
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      {/* Hero */}
      <section className="relative bg-dark pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gold rounded-full blur-3xl animate-breathe" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-burgundy rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto section-padding">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase hover:bg-gold/20 transition-colors cursor-default">
                Contact Us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.4, ease: EASE_OUT }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Get In <span className="text-gold-gradient animate-gradient-shift">Touch</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: EASE_OUT }}
              className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            >
              We would love to hear from you. Whether you need prayer, counseling, or have
              questions about our ministry — we are here for you.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto section-padding">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info) => (
              <motion.div key={info.title} variants={staggerItemScale}>
                <Card className={`group ${info.color} border-0 shadow-md hover:shadow-lg transition-all duration-500 rounded-sm h-full hover-lift hover-shimmer cursor-default`}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-full ${info.iconBg} flex items-center justify-center ${info.iconColor} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <span className="group-icon inline-flex">{info.icon}</span>
                    </div>
                    <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-3 group-hover:text-burgundy transition-colors">{info.title}</h3>
                    {info.details.map((detail, j) => (
                      <p key={j} className="text-white/70 text-sm leading-relaxed">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="bg-cream pb-24">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Side - Reasons */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-2 min-w-0"
            >
              <div className="bg-dark rounded-sm p-8 lg:p-10 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-2xl animate-breathe" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-burgundy/5 rounded-full blur-2xl animate-breathe" style={{ animationDelay: '1.5s' }} />

                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <MessageCircle className="w-7 h-7 text-gold group-icon" />
                  </div>
                  <h2 className="text-gold font-bold text-2xl mb-3">Reach Out To Us</h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    For where two or three gather in my name, there am I with them. — Matthew 18:20
                  </p>

                  <motion.div
                    variants={staggerContainer(0.1)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    className="space-y-5"
                  >
                    {reasons.map((reason) => (
                      <motion.div
                        key={reason.title}
                        variants={staggerItem}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-9 h-9 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <span className="group-icon inline-flex">{reason.icon}</span>
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm mb-1 group-hover:text-gold transition-colors">{reason.title}</p>
                          <p className="text-white/50 text-xs leading-relaxed">{reason.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="mt-10 pt-6 border-t border-white/10">
                    <p className="text-gold/60 text-xs italic">
                      &ldquo;Call to me and I will answer you and tell you great and unsearchable things you do not know.&rdquo; — Jeremiah 33:3
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-3 min-w-0"
            >
              <Card className="bg-white border-0 shadow-lg rounded-sm overflow-hidden w-full">
                <CardContent className="p-8 lg:p-10">
                  <h3 className="text-dark font-bold text-xl mb-2">Send Us a Message</h3>
                  <p className="text-dark/50 text-sm mb-8">Fill in the form below and we will get back to you shortly.</p>

                  {feedbackMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-6 p-4 border rounded-sm ${feedbackType === 'success' ? 'bg-gold/10 border-gold/20' : 'bg-red-500/10 border-red-500/20'}`}
                    >
                      <p className={`font-medium text-sm flex items-center gap-2 ${feedbackType === 'success' ? 'text-gold-dark' : 'text-red-600'}`}>
                        <Send className="w-4 h-4" />
                        {feedbackMessage}
                      </p>
                    </motion.div>
                  )}

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-dark/60 text-xs font-medium mb-1.5 block">First Name *</label>
                        <Input
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          required
                          className="rounded-sm h-10 text-dark placeholder:text-dark/40 border-dark/20 focus-visible:border-gold focus-visible:ring-gold/20"
                        />
                      </div>
                      <div>
                        <label className="text-dark/60 text-xs font-medium mb-1.5 block">Last Name *</label>
                        <Input
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          required
                          className="rounded-sm h-10 text-dark placeholder:text-dark/40 border-dark/20 focus-visible:border-gold focus-visible:ring-gold/20"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-dark/60 text-xs font-medium mb-1.5 block">Email *</label>
                        <Input
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          type="email"
                          required
                          className="rounded-sm h-10 text-dark placeholder:text-dark/40 border-dark/20 focus-visible:border-gold focus-visible:ring-gold/20"
                        />
                      </div>
                      <div>
                        <label className="text-dark/60 text-xs font-medium mb-1.5 block">Phone</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+256 700 000 000"
                          className="rounded-sm h-10 text-dark placeholder:text-dark/40 border-dark/20 focus-visible:border-gold focus-visible:ring-gold/20"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-dark/60 text-xs font-medium mb-1.5 block">Subject *</label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Prayer Request, General Inquiry..."
                        required
                        className="rounded-sm h-10 text-dark placeholder:text-dark/40 border-dark/20 focus-visible:border-gold focus-visible:ring-gold/20"
                      />
                    </div>
                    <div>
                      <label className="text-dark/60 text-xs font-medium mb-1.5 block">Message *</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        className="rounded-sm resize-none text-dark placeholder:text-dark/40 border-dark/20 focus-visible:border-gold focus-visible:ring-gold/20"
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                      <Button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 text-sm tracking-wide rounded-sm btn-shine disabled:opacity-70"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {isSending ? 'Sending...' : 'Send Message'}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="bg-dark py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-gold/5 rounded-full blur-3xl animate-breathe" />
          <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-burgundy/5 rounded-full blur-3xl animate-breathe" style={{ animationDelay: '1.5s' }} />
        </div>
        <div className="max-w-7xl mx-auto section-padding relative">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium tracking-widest uppercase mb-6 hover:bg-gold/20 transition-colors cursor-default">
              Find Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Visit <span className="text-gold-gradient animate-gradient-shift">Our Church</span>
            </h2>
            <p className="text-white/50 text-base max-w-2xl mx-auto">
              Come and worship with us in Rakai District, Uganda. You are always welcome!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="min-w-0"
            >
              <div className="rounded-sm overflow-hidden shadow-2xl border border-gold/10 hover:shadow-2xl transition-shadow duration-500 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.50737078586!2d31.3!3d-0.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d71f3f4e4f4b47%3A0x3c1e2b6e2e4b9f10!2sRakai%2C%20Uganda!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vision Life Ministries Location - Rakai District, Uganda"
                  className="w-full"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-6 min-w-0"
            >
              <div className="group flex items-start gap-4 hover-lift cursor-default">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <MapPin className="w-5 h-5 group-icon" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-1 group-hover:text-gold transition-colors">Physical Address</p>
                  <p className="text-white/50 text-sm leading-relaxed">Rakai District, Uganda, East Africa</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 hover-lift cursor-default">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-burgundy/10 flex items-center justify-center text-burgundy group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Clock className="w-5 h-5 group-icon" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-1 group-hover:text-gold transition-colors">Service Schedule</p>
                  <div className="space-y-1">
                    <p className="text-white/50 text-sm">Sunday Worship — 9:00 AM to 12:00 PM</p>
                    <p className="text-white/50 text-sm">Bible Study — Wednesday 5:00 PM</p>
                    <p className="text-white/50 text-sm">Prayer Meeting — Friday 6:00 PM</p>
                    <p className="text-white/50 text-sm">Youth Service — Saturday 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="group flex items-start gap-4 hover-lift cursor-default">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Phone className="w-5 h-5 group-icon" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-1 group-hover:text-gold transition-colors">Call Us</p>
                  <p className="text-white/50 text-sm">+974 5076 9794</p>
                  <p className="text-white/50 text-sm">+974 5119 3650</p>
                </div>
              </div>

              <div className="group flex items-start gap-4 hover-lift cursor-default">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-burgundy/10 flex items-center justify-center text-burgundy group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Mail className="w-5 h-5 group-icon" />
                </div>
                <div>
                  <p className="text-white font-semibold text-base mb-1 group-hover:text-gold transition-colors">Email Us</p>
                  <p className="text-white/50 text-sm">info@visionlifeministries.com</p>
                  <p className="text-white/50 text-sm">visionlifevisionlifeministries@gmail.com</p>
                </div>
              </div>

              <motion.div
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="pt-4"
              >
                <p className="text-gold/60 text-sm italic">
                  &ldquo;For I was a stranger and you invited me in, I needed clothes and you clothed me,
                  I was sick and you looked after me.&rdquo; — Matthew 25:35-36
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
