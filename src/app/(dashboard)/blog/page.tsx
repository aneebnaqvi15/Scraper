'use client';

import { motion } from 'framer-motion';
import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/outline';

const featuredPost = {
  title: 'Advanced Twitter Data Collection Techniques',
  description:
    'Learn how to effectively collect and analyze Twitter data using advanced search operators and filters.',
  image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113',
  date: '2024-01-15',
  author: 'Sarah Johnson',
  readTime: '8 min read',
  category: 'Tutorial',
};

const posts = [
  {
    title: 'Understanding Twitter API Rate Limits',
    description:
      'A comprehensive guide to working with Twitter API rate limits and how to optimize your data collection.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0',
    date: '2024-01-10',
    author: 'Mike Chen',
    readTime: '6 min read',
    category: 'Technical',
  },
  {
    title: 'Best Practices for Data Analysis',
    description:
      'Tips and tricks for analyzing Twitter data and extracting meaningful insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    date: '2024-01-05',
    author: 'Emily Davis',
    readTime: '5 min read',
    category: 'Guide',
  },
  {
    title: 'Twitter Sentiment Analysis Guide',
    description:
      'Learn how to perform sentiment analysis on Twitter data using modern NLP techniques.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0',
    date: '2024-01-01',
    author: 'Alex Thompson',
    readTime: '10 min read',
    category: 'Tutorial',
  },
];

export default function BlogPage() {
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <p className="mt-2 text-lg text-gray-600">
            Latest updates, guides, and insights about Twitter data collection
          </p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8"
        >
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {featuredPost.category}
              </span>
              <h2 className="mt-4 text-3xl font-bold text-white">{featuredPost.title}</h2>
              <p className="mt-2 text-lg text-gray-300">{featuredPost.description}</p>
              <div className="mt-4 flex items-center text-gray-200 space-x-6">
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  {featuredPost.author}
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2" />
                  {featuredPost.readTime}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Post Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {post.category}
                  </span>
                  <a href="#" className="block mt-4">
                    <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1.5" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1.5" />
                    {post.readTime}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-blue-700 rounded-2xl py-12 px-6 sm:py-16 sm:px-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Subscribe to our newsletter
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Get the latest updates and insights about Twitter data collection delivered to your inbox.
            </p>
            <form className="mt-8 sm:flex justify-center">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-700 focus:ring-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 