'use client';

import React, { Suspense, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';
import Footer from '@/components/ui/Footer';

// Dynamically import Navbar with loading fallback
const Navbar = dynamic(() => import('@/components/ui/Navbar'), {
  loading: () => (
    <div className="h-16 bg-gray-900/50 backdrop-blur-xl fixed w-full z-50 border-b border-white/10 animate-pulse" />
  ),
  ssr: false
});

// Animated background particle component
function AnimatedParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white/30 rounded-full"
          initial={{ 
            x: `${Math.random() * 100}%`, 
            y: `${Math.random() * 100}%`, 
            opacity: Math.random() * 0.5 + 0.3,
            scale: Math.random() * 2 + 1
          }}
          animate={{ 
            y: ['0%', '100%'], 
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: Math.random() * 10 + 20,
            ease: 'linear',
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
}

// Loading spinner component
function LoadingSpinner() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-brand-blue-light/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-brand-blue-light rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-brand-blue-light/80 font-medium animate-pulse">Loading...</p>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-[#0A0F1C] bg-gradient-to-br from-gray-900 via-[#0A0F1C] to-blue-900/30 text-white relative overflow-hidden">
        {/* Enhanced layered background */}
        <div className="fixed inset-0 bg-mesh-blue opacity-80" />
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <AnimatedParticles />
        
        {/* Animated blobs */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
          
          {/* Additional premium blobs */}
          <div className="absolute top-[20%] right-[10%] w-60 h-60 bg-brand-blue-light rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-float" />
          <div className="absolute bottom-[30%] left-[15%] w-40 h-40 bg-brand-purple-light rounded-full mix-blend-overlay filter blur-3xl opacity-5 animate-float animation-delay-2000" />
        </div>

        {/* Navbar with improved loading */}
        <Suspense fallback={
          <div className="h-16 bg-gray-900/50 backdrop-blur-xl fixed w-full z-50 border-b border-white/10 animate-pulse" />
        }>
          <Navbar />
        </Suspense>
        
        {/* Main content with smooth page transitions */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <motion.main
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative pt-16 z-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Suspense fallback={<LoadingSpinner />}>
                  {children}
                </Suspense>
              </motion.div>
            </motion.main>
          )}
        </AnimatePresence>
        
        <Footer />
        
        {/* Premium design flourish - decorative corner accent */}
        <div className="fixed top-0 right-0 w-40 h-40 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-40 h-1 bg-gradient-to-l from-brand-blue-light/40 to-transparent"></div>
          <div className="absolute top-0 right-0 w-1 h-40 bg-gradient-to-b from-brand-blue-light/40 to-transparent"></div>
        </div>
        <div className="fixed bottom-0 left-0 w-40 h-40 pointer-events-none z-0">
          <div className="absolute bottom-0 left-0 w-40 h-1 bg-gradient-to-r from-brand-purple-light/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1 h-40 bg-gradient-to-t from-brand-purple-light/40 to-transparent"></div>
        </div>
      </div>
    </LazyMotion>
  );
} 