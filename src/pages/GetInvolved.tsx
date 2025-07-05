
import React from 'react';
import { Users, Heart, Star, BookOpen, Mic, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GetInvolved = () => {
  const opportunities = [
    {
      title: 'Voice Artists',
      description: 'Bring our characters to life with your voice. Perfect for native Arabic, Urdu, or English speakers.',
      icon: Mic,
      requirements: ['Clear voice recording setup', 'Passion for children\'s education', 'Flexible schedule']
    },
    {
      title: 'Islamic Scholars',
      description: 'Review stories for Islamic authenticity and provide guidance on moral teachings.',
      icon: BookOpen,
      requirements: ['Islamic studies background', 'Experience with children\'s education', 'Commitment to accuracy']
    },
    {
      title: 'Creative Illustrators',
      description: 'Create beautiful character designs and storyboard concepts for our AI animations.',
      icon: Palette,
      requirements: ['Digital art skills', 'Experience with character design', 'Understanding of Islamic aesthetics']
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-mint-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-800 mb-6">
            Join Our Mission
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Be part of a global movement to empower Muslim children through moral storytelling. 
            Together, we can create lasting impact in the hearts and minds of the next generation.
          </p>
        </div>
      </section>
      
      {/* Partnership Opportunities */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-sage-600">
              We're looking for Islamic schools, NGOs, and organizations to join our mission
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-mint-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-mint-600 mb-4" />
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">Islamic Schools</h3>
                <p className="text-sage-600 mb-6">
                  Integrate our moral stories into your curriculum. Perfect for character education, 
                  Islamic studies classes, and assembly programs. We provide teacher guides and 
                  discussion materials.
                </p>
                <ul className="text-sage-600 space-y-2 mb-6">
                  <li>• Free access to all educational content</li>
                  <li>• Customized lesson plans and activities</li>
                  <li>• Teacher training and support</li>
                  <li>• Progress tracking and assessment tools</li>
                </ul>
                <Button className="bg-mint-600 hover:bg-mint-700">
                  Partner With Us
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-gold-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-gold-600 mb-4" />
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">NGOs & Organizations</h3>
                <p className="text-sage-600 mb-6">
                  Use our content in your community programs, youth initiatives, and family support 
                  services. Help spread moral education to underserved communities worldwide.
                </p>
                <ul className="text-sage-600 space-y-2 mb-6">
                  <li>• Bulk licensing for community use</li>
                  <li>• Multilingual content support</li>
                  <li>• Community leader training</li>
                  <li>• Impact measurement tools</li>
                </ul>
                <Button className="bg-gold-600 hover:bg-gold-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Volunteer Opportunities */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-sage-600">
              Share your talents to help create world-class moral education content
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="border-sage-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <opportunity.icon className="w-12 h-12 text-sage-600 mb-4" />
                  <h3 className="text-xl font-semibold text-sage-800 mb-3">{opportunity.title}</h3>
                  <p className="text-sage-600 mb-4">{opportunity.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-sage-800 mb-2">What we're looking for:</h4>
                    <ul className="text-sm text-sage-600 space-y-1">
                      {opportunity.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>• {req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button size="sm" variant="outline" className="w-full border-sage-300 text-sage-600 hover:bg-sage-50">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Sponsorship */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Sponsor a Story
            </h2>
            <p className="text-xl text-sage-600">
              Leave a lasting legacy by sponsoring moral stories that will impact thousands of children
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-mint-200 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-mint-600 mb-2">$500</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Bronze Sponsor</h3>
                <ul className="text-sage-600 space-y-2 mb-6">
                  <li>• Sponsor one story episode</li>
                  <li>• Logo in end credits</li>
                  <li>• Social media recognition</li>
                  <li>• Impact report</li>
                </ul>
                <Button className="bg-mint-600 hover:bg-mint-700">
                  Sponsor Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-gold-200 bg-white/80 backdrop-blur-sm text-center border-2">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-gold-600 mb-2">$1,500</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Gold Sponsor</h3>
                <ul className="text-sage-600 space-y-2 mb-6">
                  <li>• Sponsor three story episodes</li>
                  <li>• Featured logo placement</li>
                  <li>• Dedicated social posts</li>
                  <li>• Quarterly impact reports</li>
                  <li>• Recognition on website</li>
                </ul>
                <Button className="bg-gold-600 hover:bg-gold-700">
                  Sponsor Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-sage-200 bg-white/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-sage-600 mb-2">$5,000</div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Platinum Sponsor</h3>
                <ul className="text-sage-600 space-y-2 mb-6">
                  <li>• Sponsor a full series (10 episodes)</li>
                  <li>• Co-branding opportunities</li>
                  <li>• Press release inclusion</li>
                  <li>• Custom content creation</li>
                  <li>• Partnership announcement</li>
                </ul>
                <Button className="bg-sage-600 hover:bg-sage-700">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-sage-600">
              Ready to join our mission? Fill out the form below and we'll get in touch
            </p>
          </div>
          
          <Card className="border-sage-200 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-sage-800 mb-2">
                      Full Name *
                    </label>
                    <Input className="border-sage-300" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sage-800 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" className="border-sage-300" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-sage-800 mb-2">
                      Organization/School
                    </label>
                    <Input className="border-sage-300" placeholder="Organization name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sage-800 mb-2">
                      Interest Area
                    </label>
                    <select className="w-full p-3 border border-sage-300 rounded-md">
                      <option>Select your interest</option>
                      <option>School Partnership</option>
                      <option>NGO Collaboration</option>
                      <option>Volunteer Opportunity</option>
                      <option>Sponsorship</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-sage-800 mb-2">
                    Message
                  </label>
                  <Textarea 
                    className="border-sage-300" 
                    rows={4}
                    placeholder="Tell us more about how you'd like to get involved..."
                  />
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="bg-sage-600 hover:bg-sage-700 px-8 py-4">
                    <Star className="mr-2 h-5 w-5" />
                    Join Our Mission
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GetInvolved;
