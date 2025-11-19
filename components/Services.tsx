'use client';

import { TrendingUp, ThumbsUp, Users, Sparkles, Award, ShoppingCart } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Trending Discovery',
      description: 'Stay ahead of the curve with real-time trending products curated by our community of millions.',
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
      icon: ThumbsUp,
      title: 'Smart Rating System',
      description: 'Vote and rate products with our intelligent system that learns your preferences for better recommendations.',
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    },
    {
      icon: Users,
      title: 'Social Shopping',
      description: 'Connect with like-minded shoppers, share discoveries, and build your shopping community.',
      color: 'from-pink-500 to-pink-600',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    },
    {
      icon: Sparkles,
      title: 'Personalized Feeds',
      description: 'Get AI-powered product recommendations tailored to your taste and shopping history.',
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    },
    {
      icon: Award,
      title: 'Verified Reviews',
      description: 'Read authentic reviews from verified purchasers and make confident buying decisions.',
      color: 'from-green-500 to-green-600',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80',
    },
    {
      icon: ShoppingCart,
      title: 'Seamless Shopping',
      description: 'Shop directly from trending lists with one-click purchasing and exclusive member deals.',
      color: 'from-indigo-500 to-indigo-600',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
    },
  ];

  return (
    <section id="discover" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Shop Smarter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the revolution in social shopping with powerful features designed to enhance your shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}