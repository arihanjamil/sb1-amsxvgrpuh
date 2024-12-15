import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Code, Megaphone, Users, Sparkles } from 'lucide-react';
import { FadeInWhenVisible } from './animations/FadeInWhenVisible';

const services = [
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Viral Strategy',
    description: 'Making your brand trend faster than a TikTok dance 💃'
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Epic Websites',
    description: 'Websites that hit different, no cap 💯'
  },
  {
    icon: <Megaphone className="h-8 w-8" />,
    title: 'Social Buzz',
    description: 'Getting your content more likes than a cat video 🐱'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Vibe Check',
    description: 'Keeping your brand aesthetic on point ✨'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-pink-500" />
            <span className="text-pink-500 font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Services That Slap
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No mid content here - just pure fire 🔥
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 0] }}
                className="bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50 p-8 rounded-2xl border border-pink-500/20 backdrop-blur-xl hover:border-pink-500/40 transition-colors"
              >
                <div className="mb-4 text-pink-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}