'use client';

import { ArrowRight, TrendingUp, Users, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-purple-900/90"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <TrendingUp className="h-4 w-4 text-yellow-400" />
            <span className="text-white text-sm font-medium">Trending Now: Discover What's Hot</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover, Rate & Shop
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              The Smartest Way
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join millions of shoppers discovering trending products, rating their favorites, and making smarter purchase decisions together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#pricing"
              className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <span>Start Shopping Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#discover"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              Explore Trending
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="h-8 w-8 text-blue-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">2.5M+</div>
              <div className="text-blue-200 text-sm">Active Shoppers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Star className="h-8 w-8 text-yellow-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">15M+</div>
              <div className="text-blue-200 text-sm">Product Ratings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <TrendingUp className="h-8 w-8 text-green-400 mb-3 mx-auto" />
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-blue-200 text-sm">Trending Items</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}