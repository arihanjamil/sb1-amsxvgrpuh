import React from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#marketing', label: 'Marketing' },
    { href: '#advertising', label: 'Advertising' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-black/90 backdrop-blur-lg fixed w-full z-50 border-b border-violet-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-8 w-8 text-violet-500" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Evolvify
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-violet-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.button 
              className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-4 py-2 rounded-full hover:opacity-90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          className="md:hidden bg-black/95"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-300 hover:text-violet-400"
              >
                {item.label}
              </a>
            ))}
            <button className="w-full text-left bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-3 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}