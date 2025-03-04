'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LockClosedIcon,
  MailIcon,
  ArrowRightIcon,
  LightningBoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
} from '@heroicons/react/outline';

const features = [
  {
    icon: LightningBoltIcon,
    title: 'Real-time Scraping',
    description: 'Get instant access to Twitter data',
    gradient: 'from-brand-blue-light to-brand-blue-dark',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure Analysis',
    description: 'Advanced data protection',
    gradient: 'from-brand-purple-light to-brand-purple-dark',
  },
  {
    icon: ChartBarIcon,
    title: 'Deep Insights',
    description: 'Comprehensive analytics tools',
    gradient: 'from-brand-cyan-light to-brand-cyan-dark',
  },
];

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left Panel - Login Form */}
      <div className="w-full lg:w-1/2 p-8 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-purple-light to-brand-cyan-light mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-300 text-lg">Sign in to your account</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="space-y-4">
            <div className="relative group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-purple-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center">
                  <MailIcon className="absolute left-4 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-blue-light focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-light to-brand-cyan-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center">
                  <LockClosedIcon className="absolute left-4 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-purple-light focus:border-transparent transition-all"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-gray-900/50 text-brand-blue-light focus:ring-brand-blue-light"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>
            <a href="#" className="text-sm text-brand-blue-light hover:text-brand-blue-dark transition-colors">
              Forgot password?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center px-8 py-4 rounded-xl text-white font-medium bg-gradient-to-r from-brand-blue-light to-brand-purple-light hover:from-brand-blue-dark hover:to-brand-purple-dark transition-all duration-300 ${
              isLoading ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? (
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Sign in
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </motion.button>

          <p className="text-center text-sm text-gray-300">
            Don't have an account?{' '}
            <Link href="/signup" className="text-brand-blue-light hover:text-brand-blue-dark transition-colors font-medium">
              Sign up
            </Link>
          </p>
        </motion.form>
      </div>

      {/* Right Panel - Features */}
      <div className="hidden lg:block w-1/2 p-12 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Transform Your Twitter Data Analysis
            </h2>
            <p className="text-gray-300 text-lg">
              Access powerful tools and insights with your TweetScraper account
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative group rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-50" />
                <div className="relative p-6 flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.gradient}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 