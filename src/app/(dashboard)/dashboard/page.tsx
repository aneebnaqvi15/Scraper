'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChartBarIcon,
  ClockIcon,
  CloudDownloadIcon,
  SearchIcon,
  TrendingUpIcon,
  LightningBoltIcon,
  ChartPieIcon,
  SparklesIcon,
  BeakerIcon,
  CogIcon,
  DocumentSearchIcon,
  ArrowSmRightIcon,
  FireIcon,
  StatusOnlineIcon,
  UserGroupIcon,
  EyeIcon,
  LocationMarkerIcon,
  HashtagIcon,
  UserIcon,
  ChatAlt2Icon,
  HeartIcon,
  RefreshIcon,
  GlobeIcon,
  QuestionMarkCircleIcon,
  DocumentTextIcon,
} from '@heroicons/react/outline';
import Link from 'next/link';

const stats = [
  {
    name: 'Total Scrapes',
    value: '24',
    change: '+12%',
    changeType: 'positive',
    icon: SearchIcon,
    description: 'Successful data collections',
    trend: [40, 35, 45, 50, 55, 60, 65],
  },
  {
    name: 'Tweets Collected',
    value: '12,456',
    change: '+25%',
    changeType: 'positive',
    icon: CloudDownloadIcon,
    description: 'Total tweets gathered',
    trend: [30, 45, 35, 50, 40, 60, 55],
  },
  {
    name: 'Location Data',
    value: '68%',
    change: '+8%',
    changeType: 'positive',
    icon: LocationMarkerIcon,
    description: 'Tweets with location',
    trend: [40, 45, 50, 55, 60, 65, 68],
  },
  {
    name: 'Engagement Rate',
    value: '3.8%',
    change: '+1.2%',
    changeType: 'positive',
    icon: ChatAlt2Icon,
    description: 'Likes, retweets, replies',
    trend: [2.4, 2.8, 2.9, 3.1, 3.4, 3.6, 3.8],
  },
];

const insights = [
  {
    title: 'Popular Hashtags',
    description: '#ChiropractorNZ and #Chiropractic lead discussions',
    icon: HashtagIcon,
    color: 'from-brand-blue-light to-brand-blue-dark',
    badge: 'Trending',
  },
  {
    title: 'User Engagement',
    description: 'Tweets with location data get 2.3x more interaction',
    icon: HeartIcon,
    color: 'from-brand-purple-light to-brand-purple-dark',
    badge: 'Hot',
  },
  {
    title: 'Content Distribution',
    description: '72% positive sentiment across collected tweets',
    icon: ChartPieIcon,
    color: 'from-brand-cyan-light to-brand-cyan-dark',
    badge: 'High Quality',
  },
];

const recentScrapes = [
  {
    id: 1,
    query: '(#ChiropractorNZ OR #ChiroNZ) AND (#BackPain OR #NeckPain)',
    date: '2024-05-12',
    tweets: 357,
    status: 'completed',
    engagement: '3.2%',
    sentiment: 'positive',
    locations: 'Auckland, Wellington, Christchurch',
  },
  {
    id: 2,
    query: '#FitnessNZ AND (#Wellness OR #Health)',
    date: '2024-05-08',
    tweets: 245,
    status: 'completed',
    engagement: '2.8%',
    sentiment: 'positive',
    locations: 'Auckland, Queenstown, Hamilton',
  },
  {
    id: 3,
    query: '(#PhysioNZ OR #PhysiotherapyNZ) AND #Recovery',
    date: '2024-05-02',
    tweets: 189,
    status: 'completed',
    engagement: '3.5%',
    sentiment: 'mixed',
    locations: 'Wellington, Dunedin, Christchurch',
  },
];

const howItWorks = [
  {
    title: 'Configure',
    description: 'Define complex Twitter search queries with boolean operators and filters',
    icon: DocumentSearchIcon,
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Collect',
    description: 'Our advanced scraper retrieves tweets, user data, engagement metrics and location information',
    icon: CloudDownloadIcon,
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Process',
    description: 'Data is cleaned, structured, and enriched with sentiment analysis',
    icon: BeakerIcon,
    gradient: 'from-cyan-500 to-cyan-600',
  },
  {
    title: 'Analyze',
    description: 'Explore your data through visualizations, filters, and exportable formats',
    icon: ChartPieIcon,
    gradient: 'from-emerald-500 to-emerald-600',
  },
];

const getStartedSteps = [
  {
    number: 1,
    title: 'Create Your Query',
    description: 'Define search criteria with hashtags, keywords, boolean operators, and date ranges',
    icon: DocumentSearchIcon,
    action: {
      text: 'Start a new scrape',
      href: '/scrape',
    },
  },
  {
    number: 2,
    title: 'Configure Settings',
    description: 'Set tweet limits, enable location tracking, engagement metrics, and reply collection',
    icon: CogIcon,
    action: {
      text: 'Configure options',
      href: '/scrape',
    },
  },
  {
    number: 3,
    title: 'Explore Results',
    description: 'Review collected tweets, filter by sentiment or location, and export your data',
    icon: SparklesIcon,
    action: {
      text: 'Browse results',
      href: '/results',
    },
  },
];

// Enhanced MiniChart component with dynamic animation
function MiniChart({ data }: { data: number[] }) {
  // Normalize data to fit in our view
  const maxValue = Math.max(...data);
  const normalizedData = data.map(value => (value / maxValue) * 100);
  
  return (
    <div className="h-10 w-20 flex items-end justify-between">
      {normalizedData.map((value, index) => (
        <motion.div
          key={index}
          className="w-1 bg-gradient-to-t from-brand-blue-dark to-brand-blue-light rounded-t-sm"
          initial={{ height: 0 }}
          animate={{ height: `${value}%` }}
          transition={{ 
            duration: 1, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
        />
      ))}
    </div>
  );
}

// Animated counter component
function AnimatedCounter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    // Remove any non-numeric characters for the animation calculation
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const startTime = Date.now();
    
    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      const currentValue = Math.floor(numericValue * progress);
      
      // Format with the same non-numeric characters
      let formattedValue = value;
      if (value.includes(',')) {
        formattedValue = currentValue.toLocaleString();
      } else {
        formattedValue = currentValue.toString();
        
        // Add % if original value had it
        if (value.includes('%')) {
          formattedValue += '%';
        }
      }
      
      setDisplayValue(formattedValue);
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };
    
    updateCounter();
  }, [value, duration]);
  
  return <span>{displayValue}</span>;
}

// Glowing badge component
function GlowingBadge({ text, color = 'blue' }: { text: string, color?: string }) {
  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${colorClasses[color as keyof typeof colorClasses]}`}>
      {text}
    </span>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-12"
      >
        {/* Header */}
        <header className="text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight"
          >
            <span className="inline-block relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-purple-light to-brand-cyan-light">
                Twitter Scraper Dashboard
              </span>
              <span className="absolute -bottom-1.5 left-0 w-full h-1.5 bg-gradient-to-r from-brand-blue-light/50 via-brand-purple-light/50 to-brand-cyan-light/50 rounded-full blur-sm"></span>
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 text-gray-400 max-w-3xl mx-auto md:mx-0"
          >
            Monitor your Twitter data collection, browse insights, and manage scraping operations from one central location.
          </motion.p>
        </header>

        {/* Animated Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative overflow-hidden rounded-xl bg-gray-800/40 border border-gray-700 p-4 hover:bg-gray-800/60 hover:border-gray-600 backdrop-blur-sm transition-all duration-300"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-8 w-24 h-24 bg-gradient-radial from-brand-blue-light/20 to-transparent rounded-full blur-xl"></div>
                
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-gray-700/60 to-gray-800/60 border border-gray-700/50">
                    <Icon className="h-5 w-5 text-brand-blue-light" />
                  </div>
                  <MiniChart data={stat.trend} />
                </div>
                
                <h3 className="text-sm font-medium text-gray-400">{stat.name}</h3>
                <div className="mt-1 flex items-baseline">
                  <p className="text-2xl font-bold text-white">
                    <AnimatedCounter value={stat.value} />
                  </p>
                  <p className={`ml-2 text-xs font-medium ${
                    stat.changeType === 'positive' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stat.change}
                  </p>
                </div>
                <p className="mt-1 text-xs text-gray-500">{stat.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-bold text-white flex items-center">
            <SparklesIcon className="h-5 w-5 mr-2 text-brand-purple-light" />
            Key Insights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              
              return (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.3 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="relative overflow-hidden group rounded-xl bg-gray-800/40 border border-gray-700/50 p-5 hover:bg-gray-800/60 hover:border-gray-600 backdrop-blur-sm transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 rounded-full bg-gradient-to-br ${insight.color} bg-opacity-10`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <GlowingBadge 
                      text={insight.badge} 
                      color={
                        insight.color.includes('blue') ? 'blue' : 
                        insight.color.includes('purple') ? 'purple' : 
                        insight.color.includes('cyan') ? 'cyan' : 
                        'blue'
                      } 
                    />
                  </div>
                  
                  <h3 className="text-md font-medium text-white group-hover:text-brand-blue-light transition-colors duration-300">{insight.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{insight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recent Scrapes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white flex items-center">
              <ClockIcon className="h-5 w-5 mr-2 text-brand-cyan-light" />
              Recent Twitter Scrapes
            </h2>
            <Link
              href="/results"
              className="text-sm font-medium text-brand-blue-light hover:text-brand-blue-dark flex items-center transition-colors"
            >
              View all
              <ArrowSmRightIcon className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-gray-700/50 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700/50">
                <thead className="bg-gray-800/60">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Query
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Tweets
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Top Locations
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Engagement
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Sentiment
                    </th>
                    <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800/20 divide-y divide-gray-700/50">
                  {recentScrapes.map((scrape, index) => (
                    <motion.tr 
                      key={scrape.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 * index + 0.4 }}
                      className="hover:bg-gray-700/20 transition-colors duration-200"
                    >
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white truncate max-w-[180px]">
                        {scrape.query}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                        {scrape.date}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                        {scrape.tweets.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                        {scrape.locations}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {scrape.engagement}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          scrape.sentiment === 'positive' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                            : scrape.sentiment === 'negative'
                            ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                            : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                        }`}>
                          {scrape.sentiment}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-right">
                        <Link
                          href={`/results?id=${scrape.id}`}
                          className="text-brand-blue-light hover:text-brand-blue-dark transition-colors"
                        >
                          View
                        </Link>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-6 bg-gray-800/20 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6"
        >
          <h2 className="text-xl font-bold text-white flex items-center">
            <LightningBoltIcon className="h-5 w-5 mr-2 text-brand-purple-light" />
            How TweetScraper Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg transform rotate-1 scale-[1.02]"></div>
                  <div className="relative p-5 bg-gray-800/60 rounded-lg border border-gray-700/80">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-br flex-shrink-0 mb-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Get Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-bold text-white flex items-center">
            <FireIcon className="h-5 w-5 mr-2 text-brand-cyan-light" />
            Get Started
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getStartedSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index + 0.6 }}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-gray-600 transition-all duration-300 overflow-hidden"
                >
                  {/* Background glow effect */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-radial from-brand-blue-light/10 via-brand-purple-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full blur-xl"></div>
                  
                  {/* Number */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-700/60 flex items-center justify-center text-gray-400 font-bold border border-gray-600/50 group-hover:bg-brand-blue-light/20 group-hover:text-brand-blue-light group-hover:border-brand-blue-light/30 transition-all duration-300">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-gradient-to-br from-gray-700/70 to-gray-800/70 border border-gray-700/50 inline-flex mb-4 group-hover:from-gray-700/90 group-hover:to-gray-800/90 group-hover:border-gray-600/80 transition-all duration-300">
                    <Icon className="h-6 w-6 text-brand-blue-light" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-blue-light transition-colors duration-300">{step.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{step.description}</p>
                  
                  {/* Action button */}
                  <Link
                    href={step.action.href}
                    className="inline-flex items-center text-sm font-medium text-brand-blue-light hover:text-brand-blue-dark transition-colors duration-200"
                  >
                    {step.action.text}
                    <ArrowSmRightIcon className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-200" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
} 