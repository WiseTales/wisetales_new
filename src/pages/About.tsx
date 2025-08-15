
import React from 'react';
import { Heart, Users, Star, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const teamMembers = [
    { name: 'Professor H. Kamaal', role: 'Founder', description: 'Visionary philanthropist guiding the mission to empower young children through storytelling.' },
    { name: 'Professor S. Beg', role: 'Patron', description: 'Mentoring the team with academic excellence and strategic guidance to elevate our creative impact.' },
    { name: 'Zuhair Arif', role: 'Team Member', description: 'University student and driving force behind Wise Tales, blending values, technology, and imagination.' },
    
    { name: 'Shabab Hussain', role: 'Team Member', description: 'University student and vital force in our creative process with unwavering consistency and sincere dedication.' },
    
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-mint-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-800 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            A beautiful journey of how college students joined forces with 
             a visionary founder to create something extraordinary for children worldwide.
          </p>
        </div>
      </section>
      
      {/* Origin Story */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-sage-800 mb-6">
                A Meeting of Hearts
              </h2>
              <p className="text-lg text-sage-600 mb-6">
                It began with a simple belief: children deserve stories that inspire them 
                to become leaders, not just followers. When students from university met our founder, 
                from the US, magic happened.
              </p>
              <p className="text-lg text-sage-600 mb-6">
                Our founder had spent decades watching communities around the world, 
                and he knew that the key to empowerment lay in early childhood education. 
                With their generous backing, Wise Tales was born—a fully funded initiative 
                to create powerful moral stories.
              </p>
            </div>
            <div className="bg-gradient-to-br from-mint-100 to-sage-100 rounded-2xl p-8">
              <div className="text-center">
                <Star className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">
                  "Great stories build great souls."
                </h3>
                <p className="text-sage-600 italic">— Our Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-mint-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-mint-600 mb-4" />
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">Our Mission</h3>
                <p className="text-sage-600 text-lg">
                  To uplift children worldwide through moral storytelling, 
                  teaching honesty, gratitude, respect, love, and strong moral character 
                  to kids aged 3-12 through engaging animated stories.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gold-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-gold-600 mb-4" />
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">Our Vision</h3>
                <p className="text-sage-600 text-lg">
                  A world where every child grows up confident, moral, and empowered 
                  to become a leader and positive force in the society, carrying forward 
                  the torch of values with pride and purpose.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Our Amazing Team
            </h2>
            <p className="text-xl text-sage-600">
              Passionate individuals united by a shared vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-sage-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-mint-400 to-sage-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-2">{member.name}</h3>
                  <p className="text-gold-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sage-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sage-100 to-mint-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-mint-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-sage-800 mb-2">Education</h3>
              <p className="text-sage-600 text-sm">Knowledge as the foundation of growth</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 text-gold-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-sage-800 mb-2">Compassion</h3>
              <p className="text-sage-600 text-sm">Love and empathy in every story</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-sage-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-sage-800 mb-2">Excellence</h3>
              <p className="text-sage-600 text-sm">World-class quality in everything we do</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-mint-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-sage-800 mb-2">Community</h3>
              <p className="text-sage-600 text-sm">Building connections across the world</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
