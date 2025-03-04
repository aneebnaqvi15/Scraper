'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckIcon,
  LightningBoltIcon,
  SparklesIcon,
  StarIcon,
} from '@heroicons/react/outline';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const features = {
  basic: [
    'Up to 1,000 tweets per day',
    'Basic search filters',
    'CSV export',
    'Email support',
    '24-hour data retention',
  ],
  pro: [
    'Up to 10,000 tweets per day',
    'Advanced search filters',
    'Multiple export formats',
    'Priority email support',
    '7-day data retention',
    'Sentiment analysis',
    'Real-time notifications',
  ],
  enterprise: [
    'Unlimited tweets per day',
    'Custom search filters',
    'All export formats',
    '24/7 priority support',
    '30-day data retention',
    'Advanced analytics',
    'Custom integrations',
    'Dedicated account manager',
  ],
};

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for small projects and individual researchers',
    price: {
      monthly: 29,
      yearly: 290,
    },
    features: features.basic,
    icon: LightningBoltIcon,
    gradient: 'from-brand-blue-light to-brand-blue-dark',
  },
  {
    name: 'Pro',
    description: 'Ideal for teams and growing businesses',
    price: {
      monthly: 99,
      yearly: 990,
    },
    features: features.pro,
    icon: SparklesIcon,
    gradient: 'from-brand-purple-light to-brand-purple-dark',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations requiring maximum capabilities',
    price: {
      monthly: 299,
      yearly: 2990,
    },
    features: features.enterprise,
    icon: StarIcon,
    gradient: 'from-brand-cyan-light to-brand-cyan-dark',
  },
];

// Add this FAQ data
const faqs = [
  {
    question: "How does TweetScraper's data collection work?",
    answer: "TweetScraper uses advanced algorithms to collect Twitter data in real-time. Our system respects Twitter's rate limits while maximizing data collection efficiency. We support various search parameters including keywords, hashtags, user profiles, and date ranges, ensuring you get the most relevant data for your needs.",
    gradient: "from-brand-blue-light to-brand-purple-light"
  },
  {
    question: "What's the difference between Basic and Pro plans?",
    answer: "The Pro plan offers higher monthly tweet limits, advanced analytics features, priority support, and custom export formats. You'll also get access to sentiment analysis, trend detection, and real-time monitoring capabilities. Pro users can schedule automated scraping tasks and receive detailed reports.",
    gradient: "from-brand-purple-light to-brand-cyan-light"
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll only pay the prorated difference for the remainder of your billing cycle. When downgrading, your new rate will take effect at the start of your next billing cycle. All your collected data remains accessible.",
    gradient: "from-brand-cyan-light to-brand-blue-light"
  },
  {
    question: "Is historical Twitter data available?",
    answer: "Yes, TweetScraper can access historical Twitter data based on your plan level. Basic plans can access data up to 7 days old, while Pro and Enterprise plans can access older data. Enterprise customers can request custom historical data packages tailored to their needs.",
    gradient: "from-brand-blue-light to-brand-purple-light"
  },
  {
    question: "What export formats are supported?",
    answer: "We support multiple export formats including CSV, JSON, and Excel. Pro and Enterprise users can also access our API for direct data integration. Advanced export options include custom field selection, filtered exports, and automated scheduled exports to your preferred storage solution.",
    gradient: "from-brand-purple-light to-brand-cyan-light"
  },
  {
    question: "Do you offer custom solutions for enterprises?",
    answer: "Absolutely! Our Enterprise plan is fully customizable to your organization's needs. We offer dedicated support, custom API solutions, advanced analytics, and tailored data collection strategies. Contact our team to discuss your specific requirements and get a custom quote.",
    gradient: "from-brand-cyan-light to-brand-blue-light"
  }
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-purple-light to-brand-cyan-light mb-4 tracking-tight">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Select the perfect plan for your Twitter data collection needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative rounded-full w-14 h-8 bg-dark-200 transition-colors duration-300 focus:outline-none"
            >
              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-brand-blue-light to-brand-purple-light transition-transform duration-300 transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly billing
              <span className="ml-1.5 text-brand-purple-light">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient Border */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${plan.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />

              {/* Card Content */}
              <div className="relative bg-dark-100/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-brand-blue-light/50 transition-all duration-300">
                {plan.popular && (
                  <div className="absolute top-0 right-6 transform -translate-y-1/2">
                    <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-brand-purple-dark text-brand-purple-light ring-1 ring-brand-purple-light/20">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="mt-2 text-sm text-gray-400">{plan.description}</p>
                  </div>
                  <div className={`p-3 bg-gradient-to-r ${plan.gradient} rounded-xl`}>
                    <plan.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="ml-2 text-gray-400">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-brand-blue-light mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-4 px-8 rounded-xl text-white font-medium bg-gradient-to-r ${
                    plan.gradient
                  } ${
                    plan.popular ? 'shadow-lg shadow-brand-purple-dark/20' : ''
                  } transition-all duration-300 hover:shadow-xl`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-purple-light to-brand-cyan-light"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-gray-400 text-lg"
            >
              Everything you need to know about TweetScraper
            </motion.p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue-light to-brand-purple-light rounded-xl opacity-0 group-hover:opacity-20 transition duration-500" />
                      <Disclosure.Button className="relative flex w-full items-center justify-between rounded-xl bg-gray-800/50 backdrop-blur-xl px-6 py-4 text-left border border-gray-700 hover:border-gray-600 transition-all duration-300">
                        <span className="text-lg font-medium text-white">
                          {faq.question}
                        </span>
                        <ChevronDownIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-brand-blue-light transition-transform duration-300`}
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-200 ease-in"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="relative mt-1 rounded-xl bg-gray-800/30 backdrop-blur-sm px-6 py-4 text-gray-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl" />
                          <div className="relative">
                            {faq.answer}
                          </div>
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>

          {/* Support CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="mailto:support@tweetscraper.com"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-brand-blue-light to-brand-purple-light text-white font-medium hover:from-brand-blue-dark hover:to-brand-purple-dark transition-all duration-300"
            >
              Contact Support
              <ChevronDownIcon className="ml-2 h-5 w-5 rotate-[-90deg]" />
            </a>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
} 