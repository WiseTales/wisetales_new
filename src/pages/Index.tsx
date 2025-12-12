
import React from 'react';
import { Link } from 'react-router-dom';

import { Play, Heart, Users, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mint-50 to-cream-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 text-gold-200 animate-pulse">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,15 85,85 15,85" fill="currentColor" opacity="0.3"/>
            </svg>
          </div>
          <div className="absolute top-40 right-20 w-24 h-24 text-mint-200 animate-bounce">
            <Star className="w-full h-full" />
          </div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 text-gold-300 animate-pulse">
            <Heart className="w-full h-full" />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-sage-800 mb-4 animate-fade-in">
              Wise Tales
            </h1>
            <p className="text-2xl md:text-3xl text-sage-600 font-medium mb-2">
              Little Stories. Big Hearts.
            </p>
            <p className="text-lg text-sage-500 max-w-2xl mx-auto">
             Cartoon Animations that uplift children worldwide through moral storytelling
            </p>
          </div>
          
          <div className="mb-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gold-200 inline-block">
            <p className="text-lg text-sage-700 mb-2">
              <span className="font-semibold text-gold-600">Backed by Our Founder</span> — 
              A fully funded visionary initiative
            </p>
            <p className="text-sm text-sage-500">
              Empowering the next generation of leaders
            </p>
          </div>
          
         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
  <Link to="/watch">
    <Button size="lg" className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 text-lg">
      <Play className="mr-2 h-5 w-5" />
      Watch Now
    </Button>
  </Link>

  <Button size="lg" variant="outline" className="border-gold-400 text-gold-600 hover:bg-gold-50 px-8 py-4 text-lg">
    <Heart className="mr-2 h-5 w-5" />
    Support Us
  </Button>

  <Button size="lg" variant="outline" className="border-sage-400 text-sage-600 hover:bg-sage-50 px-8 py-4 text-lg">
    <Users className="mr-2 h-5 w-5" />
    Join the Mission
  </Button>
</div>

          
          {/* Video Preview Placeholder */}
         {/* Featured Story Preview – Auto-playing Video */}
<div className="max-w-4xl mx-auto">
  <div className="relative bg-sage-100 rounded-2xl p-8 border-2 border-gold-200">
    <div className="aspect-video bg-gradient-to-br from-mint-200 to-sage-200 rounded-xl overflow-hidden">

      {/* Autoplay YouTube Embed */}
      <iframe
        className="w-full h-full rounded-xl"
        src="https://www.youtube.com/embed/8XDaItRuw00?autoplay=1&mute=1&controls=1&loop=1&playlist=8XDaItRuw00"
        title="The Magic Feather"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>

    </div>
  </div>
</div>


          
        </div>
      </section>
      
      {/* Mission Highlights */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-sage-800 mb-12">
            Our Sacred Mission
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-mint-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-mint-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Moral Education</h3>
                <p className="text-sage-600">
                  Teaching honesty, gratitude, respect, kindness, and love through engaging AI-powered animations for children aged 3-12.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gold-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Global Impact</h3>
                <p className="text-sage-600">
                  Empowering children worldwide to become confident leaders and torchbearers of positive change.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-sage-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Universal Values</h3>
                <p className="text-sage-600">
                  Rooted in authentic moral teachings while embracing cutting-edge technology for modern storytelling.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-mint-100 to-sage-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-800 mb-12">Growing Impact</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/80 rounded-xl p-6 border border-mint-200">
              <div className="text-3xl font-bold text-mint-600 mb-2">10,000+</div>
              <div className="text-sm text-sage-600">Views in First Month</div>
            </div>
            <div className="bg-white/80 rounded-xl p-6 border border-gold-200">
              <div className="text-3xl font-bold text-gold-600 mb-2">50+</div>
              <div className="text-sm text-sage-600">Stories Created</div>
            </div>
            <div className="bg-white/80 rounded-xl p-6 border border-sage-200">
              <div className="text-3xl font-bold text-sage-600 mb-2">15</div>
              <div className="text-sm text-sage-600">Countries Reached</div>
            </div>
            <div className="bg-white/80 rounded-xl p-6 border border-mint-200">
              <div className="text-3xl font-bold text-mint-600 mb-2">100%</div>
              <div className="text-sm text-sage-600">Funded Vision</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 bg-sage-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Help us create the next generation of confident, moral leaders
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4">
              <Link to="/donate" className="flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-600 px-8 py-4">
              <Link to="/get-involved" className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
