
import React, { useState } from 'react';
import { Heart, Star, Users, CheckCircle, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [donationType, setDonationType] = useState('one-time');
  
  const amounts = [25, 50, 100, 250, 500, 1000];
  
  const impact = [
    { amount: 25, description: 'Funds one moral story for hundreds of children' },
    { amount: 50, description: 'Supports voice acting and animation for two stories' },
    { amount: 100, description: 'Covers translation into one additional language' },
    { amount: 250, description: 'Sponsors a complete story series on one moral value' },
    { amount: 500, description: 'Funds educational resources for 50 families' },
    { amount: 1000, description: 'Supports a month of content creation and distribution' }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-mint-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-800 mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto mb-8">
            Your generous contribution helps us create more moral stories and reach 
            children worldwide. Every donation makes a lasting impact.
          </p>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gold-200 inline-block">
            <p className="text-lg text-sage-700 mb-2">
              <span className="font-semibold text-gold-600">Coming Soon</span>
            </p>
            <p className="text-sm text-sage-500">
              Donation Option Will Be Available Soon
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-sage-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">

              {/* Impact Description */}
              <div className="mb-8 p-6 bg-mint-50 rounded-lg border border-mint-200">
                <h4 className="font-semibold text-sage-800 mb-2 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-mint-600" />
                  Your Impact
                </h4>
                <p className="text-sage-600">
                  {impact.find(i => i.amount >= selectedAmount)?.description || 
                   'Supports our mission to create moral education content for Muslim children worldwide'}
                </p>
              </div>
              
              {/* Payment Form */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-sage-800 mb-4">Payment Information</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-sage-800 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-sage-300 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-sage-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className="w-full p-3 border border-sage-300 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-sage-800 mb-2">
                    Card Number *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full p-3 border border-sage-300 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-sage-500 pr-12"
                      placeholder="1234 5678 9012 3456"
                    />
                    <CreditCard className="absolute right-3 top-3 w-6 h-6 text-sage-400" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-sage-800 mb-2">
                      Expiry Date *
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-sage-300 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sage-800 mb-2">
                      CVV *
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 border border-sage-300 rounded-md focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                      placeholder="123"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="anonymous" className="w-4 h-4 text-sage-600" />
                  <label htmlFor="anonymous" className="text-sm text-sage-600">
                    Make this donation anonymous
                  </label>
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-4 text-lg"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate ${selectedAmount} {donationType === 'monthly' ? 'Monthly' : 'Now'}
                </Button>
                
                <p className="text-xs text-sage-500 text-center">
                  Your donation is secure and processed through encrypted channels. 
                  You will receive a receipt via email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Why Donate */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Why Your Support Matters
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-mint-200 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-mint-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Global Reach</h3>
                <p className="text-sage-600">
                  Your donation helps us reach children in over 15 countries, 
                  providing moral education regardless of economic circumstances.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gold-200 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Quality Content</h3>
                <p className="text-sage-600">
                  We invest in high-quality animation, professional voice acting, 
                  and scholar-reviewed content to ensure maximum impact.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-sage-200 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Heart className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Lasting Impact</h3>
                <p className="text-sage-600">
                  Every story we create continues to educate and inspire children 
                  for years to come, building stronger communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Transparency */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-800 mb-8">
            Complete Transparency
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 rounded-xl p-6 border border-sage-200">
              <h3 className="text-xl font-semibold text-sage-800 mb-4">How We Use Donations</h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-sage-600">Content Creation</span>
                  <span className="font-medium text-sage-800">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sage-600">Technology & Platform</span>
                  <span className="font-medium text-sage-800">20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sage-600">Education Resources</span>
                  <span className="font-medium text-sage-800">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sage-600">Operations</span>
                  <span className="font-medium text-sage-800">5%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 rounded-xl p-6 border border-sage-200">
              <h3 className="text-xl font-semibold text-sage-800 mb-4">Our Commitment</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-mint-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sage-600">100% of donations go directly to mission</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-mint-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sage-600">Quarterly impact reports to all donors</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-mint-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sage-600">Full financial transparency</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-mint-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sage-600">Cancel monthly donations anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Donate;
