import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Users, Target, Sparkles } from 'lucide-react';
import { FloatingElement } from './animations/FloatingElement';
import { BackgroundParticles } from './animations/BackgroundParticles';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <BackgroundParticles />

        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-6 w-6 text-yellow-300" />
              <span className="text-lg font-medium">Digital Evolution Starts Here</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl mb-8 text-pink-100">
              Evolve your brand into its next-level form with Evolvify 🚀
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-fuchsia-600 px-8 py-4 rounded-full font-bold hover:bg-pink-100 flex items-center gap-2"
              >
                Start Evolving <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 backdrop-blur-sm px-8 py-4 rounded-full font-bold hover:bg-white/10"
              >
                See Our Work
              </motion.button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: <Rocket />, title: "Rapid Evolution", desc: "Level up your game 📈" },
              { icon: <Users />, title: "Team Synergy", desc: "Evolve together 🤝" },
              { icon: <Target />, title: "Precision Growth", desc: "Hit every target 🎯" }
            ].map((item, index) => (
              <FloatingElement key={index}>
                <motion.div
                  className="bg-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-pink-300 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-pink-100">{item.desc}</p>
                </motion.div>
              </FloatingElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}