'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  UserIcon,
  MailIcon,
  LockClosedIcon,
  CheckCircleIcon,
  SparklesIcon,
  DatabaseIcon,
  CogIcon,
} from '@heroicons/react/outline';

const benefits = [
  'Advanced Twitter data scraping capabilities',
  'Real-time analytics and insights',
  'Customizable data filters',
  'Export in multiple formats',
  'Priority customer support',
  'Regular feature updates',
];

const steps = [
  {
    icon: UserIcon,
    title: 'Create Account',
    description: 'Start with basic information',
    gradient: 'from-brand-blue-light to-brand-blue-dark',
  },
  {
    icon: SparklesIcon,
    title: 'Choose Plan',
    description: 'Select your subscription',
    gradient: 'from-brand-purple-light to-brand-purple-dark',
  },
  {
    icon: DatabaseIcon,
    title: 'Start Scraping',
    description: 'Begin collecting data',
    gradient: 'from-brand-cyan-light to-brand-cyan-dark',
  },
];

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row">
      {/* Left Panel - Features */}
      <div className="w-full lg:w-1/2 p-8 sm:p-12 bg-gray-900/50">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Join the Future of Twitter Analytics
            </h2>
            <p className="text-gray-300 text-lg">
              Get started with TweetScraper and unlock powerful data insights
            </p>
          </motion.div>

          {/* Steps */}
          <div className="space-y-6 mb-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="relative group rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-50" />
                <div className="relative p-6 flex items-center">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${step.gradient}`}>
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="h-8 w-8 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-300 font-medium">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                className="flex items-center p-3 rounded-lg bg-gray-800/30 backdrop-blur-sm"
              >
                <CheckCircleIcon className="h-5 w-5 text-brand-blue-light mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="w-full lg:w-1/2 p-8 sm:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-purple-light to-brand-cyan-light mb-2">
            Create Account
          </h1>
          <p className="text-gray-300 text-lg">Start your journey with TweetScraper</p>
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
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-purple-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center">
                  <UserIcon className="absolute left-4 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-blue-light focus:border-transparent transition-all"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-light to-brand-cyan-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center">
                  <MailIcon className="absolute left-4 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-purple-light focus:border-transparent transition-all"
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
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan-light to-brand-blue-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center">
                  <LockClosedIcon className="absolute left-4 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="block w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-cyan-light focus:border-transparent transition-all"
                    placeholder="Create a password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-700 bg-gray-900/50 text-brand-blue-light focus:ring-brand-blue-light"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="terms" className="text-sm text-gray-300">
                I agree to the{' '}
                <a href="#" className="text-brand-blue-light hover:text-brand-blue-dark transition-colors font-medium">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-brand-blue-light hover:text-brand-blue-dark transition-colors font-medium">
                  Privacy Policy
                </a>
              </label>
            </div>
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
                Create Account
                <CogIcon className="ml-2 h-5 w-5 animate-spin-slow" />
              </>
            )}
          </motion.button>

          <p className="text-center text-sm text-gray-300">
            Already have an account?{' '}
            <Link href="/login" className="text-brand-blue-light hover:text-brand-blue-dark transition-colors font-medium">
              Sign in
            </Link>
          </p>
        </motion.form>
      </div>
    </div>
  );
} 