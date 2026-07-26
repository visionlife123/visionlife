'use client';

import { useNavigation } from '@/store/navigation';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

export function ContactDialog() {
  const { isContactOpen, setIsContactOpen } = useNavigation();

  return (
    <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
      <DialogContent className="bg-dark border-gold/20 text-white max-w-2xl p-0 overflow-hidden">
        <DialogTitle className="sr-only">Contact Vision Life Ministries</DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Left side - Info */}
          <div className="md:col-span-2 bg-burgundy-gradient p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-gold font-bold text-2xl mb-2">Get In Touch</h2>
              <p className="text-white/70 text-sm mb-8">
                We would love to hear from you. Reach out to us for prayer, counseling, or any inquiries.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-white/70 text-sm">Rakai District, Uganda</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-white/70 text-sm">+974 5076 9794</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <p className="text-white/70 text-sm">info@visionlifeministries.org</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white/70 text-sm">Sunday: 9:00 AM</p>
                    <p className="text-white/50 text-xs">Wednesday & Friday services available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gold/60 text-xs italic">
                &ldquo;For where two or three gather in my name, there am I with them.&rdquo; — Matthew 18:20
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="md:col-span-3 p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/60 text-xs font-medium mb-1.5 block">First Name</label>
                  <Input
                    placeholder="John"
                    className="bg-white/5 border-gold/20 text-white placeholder:text-white/30 text-sm rounded-sm h-10"
                  />
                </div>
                <div>
                  <label className="text-white/60 text-xs font-medium mb-1.5 block">Last Name</label>
                  <Input
                    placeholder="Doe"
                    className="bg-white/5 border-gold/20 text-white placeholder:text-white/30 text-sm rounded-sm h-10"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/60 text-xs font-medium mb-1.5 block">Email</label>
                <Input
                  placeholder="john@example.com"
                  type="email"
                  className="bg-white/5 border-gold/20 text-white placeholder:text-white/30 text-sm rounded-sm h-10"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs font-medium mb-1.5 block">Subject</label>
                <Input
                  placeholder="Prayer Request, General Inquiry..."
                  className="bg-white/5 border-gold/20 text-white placeholder:text-white/30 text-sm rounded-sm h-10"
                />
              </div>
              <div>
                <label className="text-white/60 text-xs font-medium mb-1.5 block">Message</label>
                <Textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="bg-white/5 border-gold/20 text-white placeholder:text-white/30 text-sm rounded-sm resize-none"
                />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="w-full bg-gold hover:bg-gold-dark text-dark font-semibold py-3 text-sm tracking-wide rounded-sm">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
