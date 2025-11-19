'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Fashion Enthusiast',
      company: 'New York',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: "ShopVibe has completely transformed how I discover new products. The trending feed is spot-on, and I've found so many amazing items I would never have discovered otherwise!",
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Tech Buyer',
      company: 'San Francisco',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'The rating system is incredibly helpful. I can trust the reviews because they come from real shoppers. Saved me from several bad purchases already!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Home Decor Lover',
      company: 'Austin',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'I love the social aspect! Following other shoppers with similar tastes has opened up a whole new world of products. The community here is fantastic.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Fitness Enthusiast',
      company: 'Miami',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'The personalized recommendations are scary good! It\'s like the app knows exactly what I\'m looking for. Best shopping platform I\'ve ever used.',
      rating: 5,
    },
    {
      name: 'Lisa Anderson',
      role: 'Beauty Expert',
      company: 'Los Angeles',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      quote: 'As someone who shops a lot, having all the trending products in one place is a game-changer. The interface is beautiful and so easy to use!',
      rating: 5,
    },
    {
      name: 'James Wilson',
      role: 'Gadget Collector',
      company: 'Seattle',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'I\'ve been using ShopVibe for 6 months and my shopping experience has improved dramatically. The verified reviews give me confidence in every purchase.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Loved by Millions of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Smart Shoppers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our community is saying about their shopping experience
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-blue-100"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100" />
                  <p className="text-gray-700 leading-relaxed relative z-10 pl-6">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-12 py-8">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">50K+</div>
              <div className="text-sm text-gray-600">Verified Reviews</div>
            </div>
            <div className="h-16 w-px bg-gray-300"></div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}