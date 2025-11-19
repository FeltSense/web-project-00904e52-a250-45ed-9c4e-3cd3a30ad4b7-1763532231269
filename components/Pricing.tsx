'use client';

import { Check, Zap } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Unlimited product discoveries',
    'Advanced rating & voting system',
    'Personalized trending feed',
    'Social shopping features',
    'Early access to deals',
    'Priority customer support',
    'Exclusive member-only products',
    'Ad-free shopping experience',
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join millions of smart shoppers and unlock the full shopping experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-12 lg:p-16">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                  <span className="text-white font-semibold flex items-center">
                    <Zap className="h-4 w-4 mr-2 fill-current" />
                    Most Popular
                  </span>
                </div>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-white mb-4">Premium Membership</h3>
                <div className="flex items-center justify-center">
                  <span className="text-6xl lg:text-7xl font-bold text-white">$29</span>
                  <span className="text-2xl text-blue-100 ml-3">/month</span>
                </div>
                <p className="text-blue-100 mt-4 text-lg">Unlimited access to all premium features</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-400" />
                    </div>
                    <span className="text-white text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Get Started Now
                </a>
                <p className="text-blue-100 mt-6 text-sm">
                  Cancel anytime. No questions asked.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">30 Days</div>
              <div className="text-gray-600">Money-back guarantee</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Premium support</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">Happy members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}