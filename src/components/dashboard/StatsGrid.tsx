'use client';

import { motion } from 'framer-motion';
import { ArrowSmUpIcon, ArrowSmDownIcon } from '@heroicons/react/outline';

interface Stat {
  name: string;
  value: string;
  icon: any;
  change: string;
  changeType: 'positive' | 'negative';
}

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500" />
          <div className="relative bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-colors duration-300">
            <div className="flex items-center">
              <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-xl">
                <stat.icon className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-400 truncate group-hover:text-gray-300 transition-colors">
                    {stat.name}
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-bold text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                      stat.changeType === 'positive' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {stat.changeType === 'positive' ? (
                        <ArrowSmUpIcon className="h-4 w-4 flex-shrink-0" />
                      ) : (
                        <ArrowSmDownIcon className="h-4 w-4 flex-shrink-0" />
                      )}
                      <span className="sr-only">
                        {stat.changeType === 'positive' ? 'Increased by' : 'Decreased by'}
                      </span>
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </div>
        </motion.div>
      ))}
    </div>
  );
} 