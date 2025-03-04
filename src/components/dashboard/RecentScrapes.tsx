'use client';

import { motion } from 'framer-motion';
import { SearchIcon, ClockIcon } from '@heroicons/react/outline';

interface Scrape {
  id: number;
  query: string;
  date: string;
  tweets: number;
  status: string;
}

interface RecentScrapesProps {
  scrapes: Scrape[];
}

export default function RecentScrapes({ scrapes }: RecentScrapesProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative mt-8 group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
      <div className="relative bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-colors duration-300">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
          Recent Scrapes
        </h2>
        <div className="overflow-hidden">
          <ul role="list" className="divide-y divide-white/5">
            {scrapes.map((scrape, index) => (
              <motion.li
                key={scrape.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                className="py-4 rounded-xl transition-colors duration-300 cursor-pointer"
              >
                <div className="px-4">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 truncate">
                      {scrape.query}
                    </p>
                    <div className="ml-2 flex-shrink-0">
                      <span className="px-3 py-1 text-sm font-medium rounded-full bg-emerald-400/10 text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
                        {scrape.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between text-sm text-gray-400">
                    <div className="flex items-center">
                      <SearchIcon className="h-5 w-5 text-gray-500 mr-1.5" />
                      <span className="font-medium">{scrape.tweets.toLocaleString()}</span>
                      <span className="ml-1">tweets</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-gray-500 mr-1.5" />
                      <span className="font-medium">{scrape.date}</span>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
} 