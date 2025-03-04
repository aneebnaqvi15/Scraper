'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SearchIcon,
  CalendarIcon,
  HashtagIcon,
  UserIcon,
  LocationMarkerIcon,
  ChatIcon,
  ChartBarIcon,
  AdjustmentsIcon,
  ClockIcon,
  DocumentTextIcon,
  GlobeIcon,
} from '@heroicons/react/outline';

interface ScrapeFormData {
  tags: string;
  startDate: string;
  endDate: string;
  maxTweets: number;
  includeLocation: boolean;
  includeEngagement: boolean;
  includeReplies: boolean;
  scrollTimeout: number;
  maxScrollAttempts: number;
  useProfileLocationAsFallback: boolean;
}

export default function ScrapePage() {
  const [formData, setFormData] = useState<ScrapeFormData>({
    tags: '',
    startDate: '2024-05-01',
    endDate: '2024-06-01',
    maxTweets: 1000,
    includeLocation: true,
    includeEngagement: true,
    includeReplies: true,
    scrollTimeout: 7000,
    maxScrollAttempts: 100,
    useProfileLocationAsFallback: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? checked 
        : ['maxTweets', 'scrollTimeout', 'maxScrollAttempts'].includes(name)
          ? Math.max(1, parseInt(value) || 1)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Form data:', formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-purple-light to-brand-cyan-light">
            New Twitter Scrape
          </h1>
          <p className="mt-2 text-gray-400 text-lg">
            Configure your Twitter data collection parameters
          </p>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700"
        >
          {/* Basic Parameters */}
          <div className="space-y-4">
            {/* Query/Tags */}
            <div className="relative group">
              <label htmlFor="tags" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                <SearchIcon className="h-4 w-4 mr-2 text-brand-blue-light" />
                Search Query (Boolean operators supported)
              </label>
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-purple-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <textarea
                  name="tags"
                  id="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  rows={5}
                  className="block w-full p-4 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-blue-light focus:border-transparent transition-all"
                  placeholder="Example: (#ChiropractorNZ OR #ChiroNZ) AND (#Chiropractic OR #Chiropractor) AND (#BackPain OR #NeckPain) since:2024-05-01 until:2024-06-01 lang:en"
                />
              </div>
              <p className="mt-2 text-xs text-gray-400">
                Create complex queries with hashtags, keywords, and boolean operators (AND, OR). You can use parentheses for grouping.
              </p>
            </div>
            
            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <label htmlFor="startDate" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2 text-brand-purple-light" />
                  Start Date
                </label>
                <div className="relative rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-light to-brand-cyan-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative flex items-center">
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="block w-full p-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-purple-light focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="relative group">
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2 text-brand-cyan-light" />
                  End Date
                </label>
                <div className="relative rounded-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan-light to-brand-blue-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                  <div className="relative flex items-center">
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="block w-full p-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-cyan-light focus:border-transparent transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Tweet Limit */}
            <div className="relative group">
              <label htmlFor="maxTweets" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                <DocumentTextIcon className="h-4 w-4 mr-2 text-brand-blue-light" />
                Maximum Tweets to Collect
              </label>
              <div className="relative rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-purple-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="relative flex items-center">
                  <input
                    type="number"
                    name="maxTweets"
                    id="maxTweets"
                    min="1"
                    max="5000"
                    value={formData.maxTweets}
                    onChange={handleChange}
                    className="block w-full p-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-blue-light focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-400">Recommended: 500-1500 tweets for optimal performance</p>
            </div>
          </div>

          {/* Data Collection Options */}
          <div className="pt-6 border-t border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4 flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-2 text-brand-purple-light" />
              Data Collection Options
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Include Location */}
              <label className="relative flex items-start p-4 bg-gray-900/30 rounded-xl border border-gray-700/50 hover:border-gray-700 transition-all cursor-pointer group">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="includeLocation"
                    checked={formData.includeLocation}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-700 bg-gray-900/50 text-brand-blue-light focus:ring-brand-blue-light"
                  />
                </div>
                <div className="ml-3">
                  <span className="text-sm text-gray-300 flex items-center">
                    <LocationMarkerIcon className="h-4 w-4 mr-2 text-brand-blue-light" />
                    Location Data
                  </span>
                  <p className="text-xs text-gray-400 mt-1">Collect location from tweets and user profiles</p>
                </div>
              </label>

              {/* Include Engagement */}
              <label className="relative flex items-start p-4 bg-gray-900/30 rounded-xl border border-gray-700/50 hover:border-gray-700 transition-all cursor-pointer group">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="includeEngagement"
                    checked={formData.includeEngagement}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-700 bg-gray-900/50 text-brand-purple-light focus:ring-brand-purple-light"
                  />
                </div>
                <div className="ml-3">
                  <span className="text-sm text-gray-300 flex items-center">
                    <ChartBarIcon className="h-4 w-4 mr-2 text-brand-purple-light" />
                    Engagement Metrics
                  </span>
                  <p className="text-xs text-gray-400 mt-1">Collect likes, retweets, and replies</p>
                </div>
              </label>

              {/* Include Replies */}
              <label className="relative flex items-start p-4 bg-gray-900/30 rounded-xl border border-gray-700/50 hover:border-gray-700 transition-all cursor-pointer group">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="includeReplies"
                    checked={formData.includeReplies}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-700 bg-gray-900/50 text-brand-cyan-light focus:ring-brand-cyan-light"
                  />
                </div>
                <div className="ml-3">
                  <span className="text-sm text-gray-300 flex items-center">
                    <ChatIcon className="h-4 w-4 mr-2 text-brand-cyan-light" />
                    Collect Replies
                  </span>
                  <p className="text-xs text-gray-400 mt-1">Fetch replies to collected tweets</p>
                </div>
              </label>
            </div>
          </div>

          {/* Advanced Options Toggle */}
          <div className="pt-2">
            <button 
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-sm font-medium text-brand-blue-light hover:text-brand-blue-dark flex items-center transition-colors"
            >
              <AdjustmentsIcon className="h-4 w-4 mr-2" />
              {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
            </button>
          </div>

          {/* Advanced Options */}
          {showAdvanced && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pt-4 border-t border-gray-700"
            >
              <h3 className="text-md font-medium text-white mb-4 flex items-center">
                <AdjustmentsIcon className="h-5 w-5 mr-2 text-brand-cyan-light" />
                Advanced Configuration
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Scroll Timeout */}
                <div className="relative group">
                  <label htmlFor="scrollTimeout" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <ClockIcon className="h-4 w-4 mr-2 text-brand-blue-light" />
                    Scroll Timeout (ms)
                  </label>
                  <div className="relative rounded-xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-purple-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                    <input
                      type="number"
                      name="scrollTimeout"
                      id="scrollTimeout"
                      min="1000"
                      max="15000"
                      step="1000"
                      value={formData.scrollTimeout}
                      onChange={handleChange}
                      className="block w-full p-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-blue-light focus:border-transparent transition-all"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Time to wait between scrolls (default: 7000ms)</p>
                </div>

                {/* Max Scroll Attempts */}
                <div className="relative group">
                  <label htmlFor="maxScrollAttempts" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <ChartBarIcon className="h-4 w-4 mr-2 text-brand-purple-light" />
                    Max Scroll Attempts
                  </label>
                  <div className="relative rounded-xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-light to-brand-cyan-light opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
                    <input
                      type="number"
                      name="maxScrollAttempts"
                      id="maxScrollAttempts"
                      min="10"
                      max="200"
                      value={formData.maxScrollAttempts}
                      onChange={handleChange}
                      className="block w-full p-3 bg-gray-900/50 border border-gray-700 text-white placeholder-gray-400 rounded-xl focus:ring-2 focus:ring-brand-purple-light focus:border-transparent transition-all"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-400">Maximum number of scroll attempts (default: 100)</p>
                </div>
              </div>

              {/* Use Profile Location As Fallback */}
              <div className="mt-4">
                <label className="relative flex items-start p-4 bg-gray-900/30 rounded-xl border border-gray-700/50 hover:border-gray-700 transition-all cursor-pointer group">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="useProfileLocationAsFallback"
                      checked={formData.useProfileLocationAsFallback}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-700 bg-gray-900/50 text-brand-cyan-light focus:ring-brand-cyan-light"
                    />
                  </div>
                  <div className="ml-3">
                    <span className="text-sm text-gray-300 flex items-center">
                      <GlobeIcon className="h-4 w-4 mr-2 text-brand-cyan-light" />
                      Use Profile Location as Fallback
                    </span>
                    <p className="text-xs text-gray-400 mt-1">If tweet has no location, use the profile location instead</p>
                  </div>
                </label>
              </div>
            </motion.div>
          )}

          {/* Submit Button */}
          <div className="pt-6 flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full md:w-auto px-8 py-3 text-white font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue-light focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 
                ${isLoading 
                  ? 'bg-gray-700 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-brand-blue-light via-brand-purple to-brand-cyan-light hover:shadow-lg hover:shadow-brand-blue-light/20'
                }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : 'Start Scraping'}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
} 