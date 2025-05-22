
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin } from 'lucide-react';

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ContactSection = () => {
  return (
    <motion.section
      className="py-16 px-4 md:px-8 text-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Section Title */}
      <motion.div variants={itemVariants} className="flex items-center mb-14">
        <h2 className="section-title group flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-bold relative overflow-hidden mb-0 -ml-5">
          <motion.span
            className="w-10 h-0.5 bg-foreground origin-left"
            whileHover={{ scaleX: 1.5 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
          <motion.span
            className="relative inline-block"
            whileHover={{ y: -3, scale: 1.03 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            GET IN TOUCH
            <motion.span
              className="absolute left-0 -bottom-1 w-full h-0.5 bg-foreground scale-x-0 origin-left"
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </motion.span>
        </h2>
      </motion.div>

      <Card className="bg-secondary-gradient rounded-2xl p-6 md:p-7 text-left text-base md:text-md relative overflow-hidden min-h-[300px] -ml-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="group cursor-pointer flex items-center space-x-4">
                <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:translate-x-2">
                  <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-md flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <Mail size={20} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground transition-colors duration-300">Email</p>
                    <p className="font-medium group-hover:text-white transition-colors duration-300">siddiqueearhaan@gmail.com</p>
                  </div>
                </div>
              </div>


              {/* Phone */}
              <div className="group cursor-pointer flex items-center space-x-4">
                <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:translate-x-2">
                  <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-md flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <Phone size={20} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground transition-colors duration-300">Phone</p>
                    <p className="font-medium group-hover:text-white transition-colors duration-300">+91 9876543210</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group cursor-pointer flex items-center space-x-4">
                <div className="flex items-center space-x-3 transition-transform duration-300 group-hover:translate-x-2">
                  <div className="w-12 h-12 bg-black/50 backdrop-blur-md rounded-md flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <MapPin size={20} className="text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground transition-colors duration-300">Location</p>
                    <p className="font-medium group-hover:text-white transition-colors duration-300">ITM College, Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Send Me a Message</h3>

            <form className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="What's your name?"
                  className="bg-background/50 border border-border/30 h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="What's your email?"
                  className="bg-background/50 border border-border/30 h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="What would you like to say?"
                  className="bg-background/50 border border-border/30 min-h-[120px]"
                />
              </div>

              <Button className="w-full py-6 text-base font-medium uppercase">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Card>
    </motion.section>
  );
};

export default ContactSection;
