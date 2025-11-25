'use client';

import { useState } from 'react';

export default function WhoIsItFor() {
  const [activeIndex, setActiveIndex] = useState(0);
  const audiences = [
    {
      title: 'Amateur Investors',
      description: 'Perfect for those starting their trading journey',
      features: ['Focus on a curated list', 'Simple daily insights', 'No complex charts needed'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      bgAccent: 'bg-blue-500/5',
    },
    {
      title: 'Short-term Traders',
      description: 'Built for active market participants',
      features: ['High-volume screening', 'Probability-based ranking', 'Save time on research'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      bgAccent: 'bg-purple-500/5',
    },
    {
      title: 'Investment Groups',
      description: 'Enterprise solutions for teams',
      features: ['Consensus data', 'Back-tested models', 'API access available'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500',
      bgAccent: 'bg-emerald-500/5',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            Who Is It For
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            Built for Every Type of Trader
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Whether you're just starting or managing a portfolio, we've got you covered
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Cards Stack */}
          <div className="relative h-[420px] sm:h-[480px] md:h-[420px]">
            {audiences.map((audience, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex - 1 + audiences.length) % audiences.length;
              const isNext = index === (activeIndex + 1) % audiences.length;
              
              let position = 'translate-x-0 opacity-0 scale-75 pointer-events-none';
              if (isActive) {
                position = 'translate-x-0 opacity-100 scale-100 z-30 pointer-events-auto';
              } else if (isPrev) {
                position = '-translate-x-[85%] sm:-translate-x-[70%] opacity-0 sm:opacity-30 scale-75 sm:scale-90 z-10 pointer-events-none sm:pointer-events-auto';
              } else if (isNext) {
                position = 'translate-x-[85%] sm:translate-x-[70%] opacity-0 sm:opacity-30 scale-75 sm:scale-90 z-10 pointer-events-none sm:pointer-events-auto';
              }

              return (
                <div
                  key={audience.title}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${position}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`h-full bg-gray-800/50 backdrop-blur-sm rounded-3xl border-2 p-5 sm:p-8 flex flex-col ${
                    isActive 
                      ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/20' 
                      : 'border-gray-700/50 cursor-pointer hover:border-gray-600'
                  } transition-all duration-300`}>
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} rounded-3xl transition-opacity duration-300 ${
                      isActive ? 'opacity-10' : 'opacity-0'
                    }`}></div>

                    {/* Content */}
                    <div className="relative flex flex-col h-full">
                      {/* Icon and Number */}
                      <div className="flex items-start justify-between mb-4 sm:mb-5">
                        <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${audience.gradient} shadow-xl transition-transform duration-300 ${
                          isActive ? 'scale-110' : 'scale-100'
                        }`}>
                          <div className="text-white">
                            {audience.icon}
                          </div>
                        </div>
                        <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-sm sm:text-lg font-bold transition-all duration-300 ${
                          isActive 
                            ? 'bg-gradient-to-br from-indigo-500/30 to-purple-500/30 text-white border-2 border-indigo-500/50' 
                            : 'bg-gray-700/50 text-gray-400'
                        }`}>
                          {index + 1}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className={`text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 transition-all duration-300 ${
                        isActive 
                          ? 'text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text' 
                          : 'text-white'
                      }`}>
                        {audience.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-base text-gray-400 mb-4 sm:mb-5 leading-snug">
                        {audience.description}
                      </p>

                      {/* Features list */}
                      <ul className="space-y-3 sm:space-y-3 flex-1">
                        {audience.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-6 h-6 sm:w-6 sm:h-6 rounded-lg bg-gradient-to-br ${audience.gradient} flex items-center justify-center shadow-sm transition-transform duration-200 ${
                              isActive ? 'scale-110' : 'scale-100'
                            }`}>
                              <svg className="w-4 h-4 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className={`text-base sm:text-base leading-relaxed transition-colors duration-200 ${
                              isActive ? 'text-white' : 'text-gray-300'
                            }`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Decorative gradient line */}
                      <div className={`mt-5 sm:mt-6 h-1 w-16 sm:w-20 rounded-full bg-gradient-to-r ${audience.gradient} transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setActiveIndex((activeIndex - 1 + audiences.length) % audiences.length)}
            className="absolute left-2 sm:left-0 bottom-6 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-12 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800/90 backdrop-blur-sm border-2 border-gray-700 flex items-center justify-center text-white hover:bg-gray-700 hover:border-indigo-500 active:scale-95 transition-all duration-200 z-40 shadow-xl"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setActiveIndex((activeIndex + 1) % audiences.length)}
            className="absolute right-2 sm:right-0 bottom-6 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-12 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-800/90 backdrop-blur-sm border-2 border-gray-700 flex items-center justify-center text-white hover:bg-gray-700 hover:border-indigo-500 active:scale-95 transition-all duration-200 z-40 shadow-xl"
            aria-label="Next"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 sm:gap-2.5 mt-6 sm:mt-8">
            {audiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  index === activeIndex 
                    ? 'w-10 sm:w-8 bg-gradient-to-r from-indigo-500 to-purple-500' 
                    : 'w-2.5 sm:w-2 bg-gray-600 hover:bg-gray-500 active:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}