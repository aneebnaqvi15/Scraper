'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
  GlobeAltIcon,
} from '@heroicons/react/outline';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative mt-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/80 backdrop-blur-xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue-light to-brand-purple-light rounded-xl opacity-0 group-hover:opacity-20 transition duration-500" />
            <div className="relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light to-brand-purple-light mb-4">
                About TweetScraper
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                TweetScraper is your advanced solution for Twitter data collection and analysis. 
                We provide powerful tools to help researchers, businesses, and analysts gather 
                valuable insights from Twitter conversations.
              </p>
              <div className="flex items-center space-x-4">
                <GlobeAltIcon className="h-5 w-5 text-brand-blue-light" />
                <span className="text-gray-400">Serving clients worldwide</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple-light to-brand-cyan-light rounded-xl opacity-0 group-hover:opacity-20 transition duration-500" />
            <div className="relative p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple-light to-brand-cyan-light mb-4">
                Contact Us
              </h3>
              <div className="space-y-4">
                <motion.a
                  href="mailto:contact@tweetscraper.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-brand-blue-light transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <MailIcon className="h-5 w-5" />
                  <span>contact@tweetscraper.com</span>
                </motion.a>
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 text-gray-300 hover:text-brand-purple-light transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <PhoneIcon className="h-5 w-5" />
                  <span>+1 (234) 567-890</span>
                </motion.a>
                <motion.div
                  className="flex items-center space-x-3 text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <LocationMarkerIcon className="h-5 w-5 text-brand-cyan-light" />
                  <span>123 Tech Street, Digital City</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-700/50 py-6"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TweetScraper. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <Link 
                href="/privacy" 
                className="text-sm text-gray-400 hover:text-brand-blue-light transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-gray-400 hover:text-brand-purple-light transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
} 