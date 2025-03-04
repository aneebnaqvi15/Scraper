'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MenuIcon,
  XIcon,
  ChartBarIcon,
  CloudDownloadIcon,
  CreditCardIcon,
  DocumentTextIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from '@heroicons/react/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
  { name: 'New Scrape', href: '/scrape', icon: CloudDownloadIcon },
  { name: 'Results', href: '/results', icon: DocumentTextIcon },
  { name: 'Pricing', href: '/pricing', icon: CreditCardIcon },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-100/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/dashboard" className="flex-shrink-0">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-blue-light via-brand-purple-light to-brand-cyan-light"
            >
              TweetScraper
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    <item.icon className={`h-5 w-5 mr-2 transition-colors duration-300 ${
                      isActive ? 'text-brand-blue-light' : 'text-current'
                    }`} />
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-dark-200/50 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* User Profile & Mobile Menu Button */}
          <div className="flex items-center">
            {/* User Profile Dropdown */}
            <div className="hidden md:block relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
              >
                <UserCircleIcon className="h-6 w-6" />
                <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${
                  isProfileOpen ? 'rotate-180' : ''
                }`} />
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-dark-100/80 backdrop-blur-xl border border-white/10 shadow-lg"
                  >
                    <div className="py-1">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">Your Profile</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">Settings</a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">Sign out</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-100/80 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-white bg-dark-200/50'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className={`h-5 w-5 mr-3 ${
                      isActive ? 'text-brand-blue-light' : 'text-current'
                    }`} />
                    {item.name}
                  </Link>
                );
              })}
              {/* Mobile Profile Links */}
              <div className="pt-4 border-t border-white/10">
                <a href="#" className="flex items-center px-3 py-2 rounded-xl text-base font-medium text-gray-400 hover:text-white hover:bg-white/5">
                  <UserCircleIcon className="h-5 w-5 mr-3" />
                  Your Profile
                </a>
                <a href="#" className="flex items-center px-3 py-2 rounded-xl text-base font-medium text-gray-400 hover:text-white hover:bg-white/5">
                  Settings
                </a>
                <a href="#" className="flex items-center px-3 py-2 rounded-xl text-base font-medium text-gray-400 hover:text-white hover:bg-white/5">
                  Sign out
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 