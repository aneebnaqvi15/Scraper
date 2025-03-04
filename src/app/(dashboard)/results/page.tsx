'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ClockIcon,
  FilterIcon,
  LocationMarkerIcon,
  UserIcon,
  ChatAlt2Icon,
  RefreshIcon,
  DownloadIcon,
  HeartIcon,
  ShareIcon,
  LinkIcon,
  EyeIcon,
  GlobeIcon,
  HashtagIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';

// Updated interface to match scraper output
interface Tweet {
  id: string;
  text: string;
  user: {
    username: string;
    displayName: string;
    profileUrl: string;
    profileImgUrl?: string;
    location?: string;
  };
  date: string;
  url: string;
  location?: string;
  engagement: {
    likes: number;
    retweets: number;
    replies: number;
    quotes: number;
  };
  sentiment?: 'positive' | 'neutral' | 'negative';
  hashtags?: string[];
  isReply?: boolean;
  replyTo?: string;
}

// Sample data based on actual scraper output structure
const tweets: Tweet[] = [
  {
    id: '1',
    text: 'Just had an amazing experience with #ChiropractorNZ! My back pain is finally gone after months of suffering. Would highly recommend Dr. Smith to anyone dealing with chronic pain. #BackPain #NeckPain #Chiropractic',
    user: {
      username: 'healthseeker',
      displayName: 'Health Seeker',
      profileUrl: 'https://twitter.com/healthseeker',
      profileImgUrl: 'https://placekitten.com/100/100',
      location: 'Auckland, New Zealand',
    },
    date: '2024-05-15T14:22:00Z',
    url: 'https://twitter.com/healthseeker/status/1',
    location: 'Wellington, New Zealand',
    engagement: {
      likes: 42,
      retweets: 12,
      replies: 5,
      quotes: 2,
    },
    sentiment: 'positive',
    hashtags: ['ChiropractorNZ', 'BackPain', 'NeckPain', 'Chiropractic'],
    isReply: false,
  },
  {
    id: '2',
    text: '@healthseeker I had a similar experience! The techniques they use are incredible. #ChiroNZ changed my life.',
    user: {
      username: 'painfreeliving',
      displayName: 'Pain Free Living',
      profileUrl: 'https://twitter.com/painfreeliving',
      profileImgUrl: 'https://placekitten.com/101/101',
      location: 'Christchurch, NZ',
    },
    date: '2024-05-15T16:45:00Z',
    url: 'https://twitter.com/painfreeliving/status/2',
    engagement: {
      likes: 18,
      retweets: 3,
      replies: 1,
      quotes: 0,
    },
    sentiment: 'positive',
    hashtags: ['ChiroNZ'],
    isReply: true,
    replyTo: 'healthseeker',
  },
  {
    id: '3',
    text: 'Not sure what to think about #Chiropractic treatments. Anyone have both good and bad experiences to share? #ChiropractorNZ',
    user: {
      username: 'healthquestions',
      displayName: 'Health Questions',
      profileUrl: 'https://twitter.com/healthquestions',
    },
    date: '2024-05-14T10:30:00Z',
    url: 'https://twitter.com/healthquestions/status/3',
    engagement: {
      likes: 7,
      retweets: 2,
      replies: 15,
      quotes: 1,
    },
    sentiment: 'neutral',
    hashtags: ['Chiropractic', 'ChiropractorNZ'],
    isReply: false,
  },
  {
    id: '4',
    text: 'Waste of money and time. My #BackPain got worse after visiting #ChiropractorNZ last month. Going back to physical therapy instead.',
    user: {
      username: 'disappointed',
      displayName: 'Disappointed Patient',
      profileUrl: 'https://twitter.com/disappointed',
      profileImgUrl: 'https://placekitten.com/102/102',
      location: 'Hamilton, NZ',
    },
    date: '2024-05-13T08:15:00Z',
    url: 'https://twitter.com/disappointed/status/4',
    location: 'Hamilton, New Zealand',
    engagement: {
      likes: 3,
      retweets: 1,
      replies: 8,
      quotes: 0,
    },
    sentiment: 'negative',
    hashtags: ['BackPain', 'ChiropractorNZ'],
    isReply: false,
  },
  {
    id: '5',
    text: 'New research shows promising results for #Chiropractic treatments for chronic #NeckPain. Read more in our latest blog post! #ChiropractorNZ #HealthNews',
    user: {
      username: 'chiroclinic',
      displayName: 'Wellington Chiro Clinic',
      profileUrl: 'https://twitter.com/chiroclinic',
      profileImgUrl: 'https://placekitten.com/103/103',
      location: 'Wellington, NZ',
    },
    date: '2024-05-12T12:00:00Z',
    url: 'https://twitter.com/chiroclinic/status/5',
    location: 'Wellington, New Zealand',
    engagement: {
      likes: 56,
      retweets: 31,
      replies: 4,
      quotes: 5,
    },
    sentiment: 'positive',
    hashtags: ['Chiropractic', 'NeckPain', 'ChiropractorNZ', 'HealthNews'],
    isReply: false,
  }
];

const stats = [
  {
    title: 'Total Tweets',
    value: '357',
    icon: <ChartBarIcon className="h-5 w-5 text-brand-blue-light" />,
    change: '+24% from previous scrape',
    positive: true,
  },
  {
    title: 'Positive Sentiment',
    value: '67%',
    icon: <EmojiHappyIcon className="h-5 w-5 text-green-500" />,
    change: '+12% from previous scrape',
    positive: true,
  },
  {
    title: 'Engagement Rate',
    value: '3.2%',
    icon: <ChatAlt2Icon className="h-5 w-5 text-brand-purple-light" />,
    change: '-0.5% from previous scrape',
    positive: false,
  },
  {
    title: 'Unique Users',
    value: '218',
    icon: <UserIcon className="h-5 w-5 text-brand-cyan-light" />,
    change: '+15% from previous scrape',
    positive: true,
  },
  {
    title: 'Location Data',
    value: '73%',
    icon: <LocationMarkerIcon className="h-5 w-5 text-yellow-500" />,
    change: '+8% from previous scrape',
    positive: true,
  },
  {
    title: 'Date Range',
    value: 'May 1-31, 2024',
    icon: <ClockIcon className="h-5 w-5 text-indigo-500" />,
    change: '31 days total',
    positive: true,
  },
];

const topHashtags = [
  { tag: 'ChiropractorNZ', count: 178 },
  { tag: 'Chiropractic', count: 152 },
  { tag: 'BackPain', count: 87 },
  { tag: 'NeckPain', count: 62 },
  { tag: 'ChiroNZ', count: 43 },
];

const topLocations = [
  { location: 'Auckland, New Zealand', count: 94 },
  { location: 'Wellington, New Zealand', count: 76 },
  { location: 'Christchurch, New Zealand', count: 42 },
  { location: 'Hamilton, New Zealand', count: 28 },
  { location: 'Dunedin, New Zealand', count: 15 },
];

const filters = [
  { id: 'all', name: 'All Tweets', icon: EyeIcon },
  { id: 'positive', name: 'Positive', icon: EmojiHappyIcon },
  { id: 'neutral', name: 'Neutral', icon: QuestionMarkCircleIcon },
  { id: 'negative', name: 'Negative', icon: EmojiSadIcon },
  { id: 'replies', name: 'Replies Only', icon: ChatAlt2Icon },
  { id: 'has-location', name: 'With Location', icon: LocationMarkerIcon },
];

export default function ResultsPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTweets, setFilteredTweets] = useState<Tweet[]>(tweets);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    setIsFiltering(true);
    
    // Filter tweets based on selected filter and search query
    const filtered = tweets.filter(tweet => {
      const matchesFilter = 
        selectedFilter === 'all' || 
        (selectedFilter === 'positive' && tweet.sentiment === 'positive') ||
        (selectedFilter === 'neutral' && tweet.sentiment === 'neutral') ||
        (selectedFilter === 'negative' && tweet.sentiment === 'negative') ||
        (selectedFilter === 'replies' && tweet.isReply) ||
        (selectedFilter === 'has-location' && tweet.location);
        
      const matchesSearch = 
        !searchQuery || 
        tweet.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tweet.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tweet.user.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tweet.location && tweet.location.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (tweet.hashtags && tweet.hashtags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
        
      return matchesFilter && matchesSearch;
    });
    
    setTimeout(() => {
      setFilteredTweets(filtered);
      setIsFiltering(false);
    }, 300);
  }, [selectedFilter, searchQuery]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-purple-light to-brand-cyan-light">
            Scrape Results
          </h1>
          <p className="mt-2 text-gray-400 text-lg flex items-center">
            <span className="mr-2">Tags:</span>
            <span className="flex flex-wrap gap-2">
              <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-300 text-sm flex items-center">
                <HashtagIcon className="h-3 w-3 mr-1 text-brand-blue-light" />
                ChiropractorNZ
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-300 text-sm flex items-center">
                <HashtagIcon className="h-3 w-3 mr-1 text-brand-purple-light" />
                Chiropractic
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-300 text-sm flex items-center">
                <HashtagIcon className="h-3 w-3 mr-1 text-brand-cyan-light" />
                BackPain
              </span>
              <span className="px-2 py-1 rounded-full bg-gray-800 text-gray-300 text-sm flex items-center">
                <span className="text-xs mr-1">+2</span>
                more
              </span>
            </span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-gray-300 font-medium flex items-center">
                  {stat.icon}
                  <span className="ml-2">{stat.title}</span>
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded-full flex items-center
                  ${stat.positive ? 'bg-green-900/30 text-green-400' : 'bg-red-900/30 text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4"
            >
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <FilterIcon className="h-5 w-5 mr-2 text-brand-purple-light" />
                Filters
              </h3>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full flex items-center p-2 rounded-lg transition-colors duration-200 
                      ${selectedFilter === filter.id 
                        ? 'bg-brand-blue-light/10 text-brand-blue-light border border-brand-blue-light/30' 
                        : 'text-gray-300 hover:bg-gray-700/50 border border-transparent'}`}
                  >
                    <filter.icon className="h-4 w-4 mr-2" />
                    <span>{filter.name}</span>
                    {selectedFilter === filter.id && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto bg-brand-blue-light/20 text-brand-blue-light rounded-full text-xs px-2 py-0.5"
                      >
                        Active
                      </motion.span>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Export Options */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4"
            >
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <DownloadIcon className="h-5 w-5 mr-2 text-brand-cyan-light" />
                Export Data
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-700 hover:border-brand-blue-light/50 hover:bg-brand-blue-light/5 transition-all duration-200">
                  <span className="text-gray-300">Full JSON Export</span>
                  <DownloadIcon className="h-4 w-4 text-brand-blue-light" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-700 hover:border-brand-purple-light/50 hover:bg-brand-purple-light/5 transition-all duration-200">
                  <span className="text-gray-300">CSV Format</span>
                  <DownloadIcon className="h-4 w-4 text-brand-purple-light" />
                </button>
                <button className="w-full flex items-center justify-between p-3 rounded-lg border border-gray-700 hover:border-brand-cyan-light/50 hover:bg-brand-cyan-light/5 transition-all duration-200">
                  <span className="text-gray-300">Excel Spreadsheet</span>
                  <DownloadIcon className="h-4 w-4 text-brand-cyan-light" />
                </button>
              </div>
            </motion.div>

            {/* Insights */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4"
            >
              <h3 className="text-lg font-medium text-white mb-4 flex items-center">
                <ChartBarIcon className="h-5 w-5 mr-2 text-yellow-500" />
                Insights
              </h3>
              
              {/* Top Hashtags */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2">Top Hashtags</h4>
                <div className="space-y-2">
                  {topHashtags.map(hashtag => (
                    <div key={hashtag.tag} className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <HashtagIcon className="h-3 w-3 mr-1 text-brand-blue-light" />
                        {hashtag.tag}
                      </span>
                      <span className="text-xs bg-gray-700 text-gray-300 rounded-full px-2 py-0.5">
                        {hashtag.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Top Locations */}
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Top Locations</h4>
                <div className="space-y-2">
                  {topLocations.map(loc => (
                    <div key={loc.location} className="flex items-center justify-between">
                      <span className="text-gray-400 flex items-center">
                        <LocationMarkerIcon className="h-3 w-3 mr-1 text-brand-purple-light" />
                        {loc.location}
                      </span>
                      <span className="text-xs bg-gray-700 text-gray-300 rounded-full px-2 py-0.5">
                        {loc.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tweet List */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <input
                type="text"
                placeholder="Search tweets, hashtags, usernames, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-brand-blue-light focus:border-transparent transition-all"
              />
              <div className="absolute right-4 top-3">
                <FilterIcon className="h-5 w-5 text-gray-400" />
              </div>
            </motion.div>
            
            {/* Tweets */}
            <div className="relative min-h-[400px]">
              {isFiltering ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <RefreshIcon className="h-8 w-8 text-brand-blue-light animate-spin" />
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredTweets.length === 0 ? (
                    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 text-center">
                      <p className="text-gray-400">No tweets match your current filters</p>
                      <button 
                        onClick={() => {
                          setSelectedFilter('all');
                          setSearchQuery('');
                        }}
                        className="mt-4 text-brand-blue-light hover:text-brand-blue-dark transition-colors"
                      >
                        Reset Filters
                      </button>
                    </div>
                  ) : (
                    filteredTweets.map((tweet, index) => (
                      <motion.div
                        key={tweet.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className={`relative bg-gray-800/30 backdrop-blur-sm rounded-xl border p-4 hover:border-gray-600 transition-all duration-300
                          ${tweet.sentiment === 'positive' ? 'border-l-4 border-l-green-500 border-gray-700/50' : 
                           tweet.sentiment === 'negative' ? 'border-l-4 border-l-red-500 border-gray-700/50' : 
                           'border-gray-700/50'}`}
                      >
                        {tweet.isReply && (
                          <div className="absolute -top-4 left-8 bg-gray-700 text-xs text-gray-300 px-2 py-0.5 rounded-md">
                            Reply to @{tweet.replyTo}
                          </div>
                        )}
                        
                        <div className="flex">
                          {/* User Avatar */}
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-blue-light to-brand-purple-light flex items-center justify-center text-white font-bold">
                              {tweet.user.profileImgUrl ? (
                                <img src={tweet.user.profileImgUrl} alt={tweet.user.username} className="h-10 w-10 rounded-full" />
                              ) : (
                                tweet.user.displayName.charAt(0)
                              )}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="ml-4 flex-1">
                            {/* User Info */}
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-white font-medium">
                                  {tweet.user.displayName}
                                </h3>
                                <p className="text-gray-400 text-sm flex items-center">
                                  @{tweet.user.username}
                                  {tweet.user.location && (
                                    <span className="ml-2 flex items-center text-xs text-gray-500">
                                      <GlobeIcon className="h-3 w-3 mr-1" />
                                      {tweet.user.location}
                                    </span>
                                  )}
                                </p>
                              </div>
                              <a 
                                href={tweet.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-500 hover:text-brand-blue-light transition-colors"
                              >
                                <LinkIcon className="h-4 w-4" />
                              </a>
                            </div>
                            
                            {/* Tweet text */}
                            <p className="mt-2 text-gray-300">
                              {tweet.text.split(/(#[a-zA-Z0-9_]+)/).map((part, i) => {
                                if (part.startsWith('#')) {
                                  return (
                                    <span key={i} className="text-brand-blue-light hover:underline cursor-pointer">
                                      {part}
                                    </span>
                                  );
                                }
                                return part;
                              })}
                            </p>
                            
                            {/* Metadata */}
                            <div className="mt-3 flex flex-wrap items-center text-sm text-gray-400 gap-4">
                              {/* Date */}
                              <span className="flex items-center">
                                <ClockIcon className="h-3 w-3 mr-1" />
                                {formatDate(tweet.date)}
                              </span>
                              
                              {/* Location */}
                              {tweet.location && (
                                <span className="flex items-center">
                                  <LocationMarkerIcon className="h-3 w-3 mr-1" />
                                  {tweet.location}
                                </span>
                              )}
                              
                              {/* Sentiment */}
                              {tweet.sentiment && (
                                <span className={`flex items-center px-2 rounded-full text-xs
                                  ${tweet.sentiment === 'positive' ? 'bg-green-900/30 text-green-400' : 
                                   tweet.sentiment === 'negative' ? 'bg-red-900/30 text-red-400' : 
                                   'bg-gray-700 text-gray-300'}`}
                                >
                                  {tweet.sentiment === 'positive' && <EmojiHappyIcon className="h-3 w-3 mr-1" />}
                                  {tweet.sentiment === 'negative' && <EmojiSadIcon className="h-3 w-3 mr-1" />}
                                  {tweet.sentiment === 'neutral' && <QuestionMarkCircleIcon className="h-3 w-3 mr-1" />}
                                  {tweet.sentiment.charAt(0).toUpperCase() + tweet.sentiment.slice(1)}
                                </span>
                              )}
                            </div>
                            
                            {/* Engagement */}
                            <div className="mt-3 flex items-center space-x-4 text-sm text-gray-400">
                              <span className="flex items-center">
                                <HeartIcon className="h-4 w-4 mr-1 text-pink-500" />
                                {tweet.engagement.likes}
                              </span>
                              <span className="flex items-center">
                                <ShareIcon className="h-4 w-4 mr-1 text-green-500" />
                                {tweet.engagement.retweets}
                              </span>
                              <span className="flex items-center">
                                <ChatAlt2Icon className="h-4 w-4 mr-1 text-blue-500" />
                                {tweet.engagement.replies}
                              </span>
                              {tweet.engagement.quotes > 0 && (
                                <span className="flex items-center">
                                  <RefreshIcon className="h-4 w-4 mr-1 text-purple-500" />
                                  {tweet.engagement.quotes}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  )}
                  
                  {filteredTweets.length > 0 && (
                    <div className="flex justify-center mt-6">
                      <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
                        <RefreshIcon className="h-4 w-4 mr-2" />
                        Load More Tweets
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 