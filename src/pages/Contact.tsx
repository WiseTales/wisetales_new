import React from 'react';
import { Mail, MapPin, Phone, Youtube, Instagram, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-mint-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-800 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you're a parent, educator, potential partner, 
            or just want to learn more about our mission, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">

            {/* Contact Details */}
            <Card className="border-mint-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-sage-800 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-mint-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sage-800 mb-1">Our Location</h3>
                        <p className="text-sage-600">
                          Aligarh Muslim University<br />
                          Aligarh, Uttar Pradesh<br />
                          India 202002
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-gold-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sage-800 mb-1">Email Us</h3>
              
                        <p className="text-sage-600">zuhairtoons@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-sage-800 mb-1">Phone</h3>
                        <p className="text-sage-600">+91 6394317905</p>
                       
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
             {/* Social Media */}
<Card className="border-gold-200 bg-white/80 backdrop-blur-sm">
  <CardContent className="p-8">
    <h2 className="text-2xl font-bold text-sage-800 mb-6">Follow Our Journey</h2>

    <div className="space-y-4">
      <a
        href="https://www.youtube.com/@wise_tales1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-sage-50 transition-colors group"
      >
        <Youtube className="w-6 h-6 text-red-600" />
        <div>
          <h3 className="font-semibold text-sage-800 group-hover:text-sage-600">YouTube</h3>
          <p className="text-sm text-sage-500">Watch our latest stories and behind-the-scenes content</p>
        </div>
      </a>

      <a
        href="https://wa.me/916394317905"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4 p-3 rounded-lg hover:bg-sage-50 transition-colors group"
      >
        <MessageCircle className="w-6 h-6 text-green-600" />
        <div>
          <h3 className="font-semibold text-sage-800 group-hover:text-sage-600">WhatsApp</h3>
          <p className="text-sm text-sage-500">Join our community for updates and discussions</p>
        </div>
      </a>
    </div>
  </CardContent>
</Card>

              {/* Quick Links */}
              <Card className="border-sage-200 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-sage-800 mb-6">Quick Help</h2>
                  
                  <div className="space-y-3">
                    <p className="text-sage-600"><strong>For Parents:</strong> Questions about content or how to use our stories</p>
                    <p className="text-sage-600"><strong>For Schools & Centers:</strong> Partnership and curriculum integration inquiries</p>
                    <p className="text-sage-600"><strong>For Donors:</strong> Information about donations and impact reports</p>
                    <p className="text-sage-600"><strong>For Media:</strong> Press kits and interview opportunities</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-mint-50 rounded-lg border border-mint-200">
                    <p className="text-sm text-sage-700">
                      <strong>Response Time:</strong> We typically respond to all inquiries within 24-48 hours. 
                      For urgent matters, please mention "URGENT" in your subject line.
                    </p>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>
      
      {/* FAQ Preview */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-800 mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-sage-200 bg-white/80 backdrop-blur-sm text-left">
              <CardContent className="p-6">
                <h3 className="font-semibold text-sage-800 mb-3">How can my school partner with Wise Tales?</h3>
                <p className="text-sage-600 text-sm">
                  We offer free partnerships for schools and educational institutions. 
                  Contact us through the form above to discuss curriculum integration.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-sage-200 bg-white/80 backdrop-blur-sm text-left">
              <CardContent className="p-6">
                <h3 className="font-semibold text-sage-800 mb-3">Are your stories suitable for all ages?</h3>
                <p className="text-sage-600 text-sm">
                  Our content is specifically designed for children aged 3-12, with different stories 
                  targeting various developmental stages within this range.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-sage-200 bg-white/80 backdrop-blur-sm text-left">
              <CardContent className="p-6">
                <h3 className="font-semibold text-sage-800 mb-3">How do I volunteer with Wise Tales?</h3>
                <p className="text-sage-600 text-sm">
                  We welcome volunteers in various capacities including voice acting, translation, 
                  and community outreach. Visit our "Get Involved" page for current opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-sage-200 bg-white/80 backdrop-blur-sm text-left">
              <CardContent className="p-6">
                <h3 className="font-semibold text-sage-800 mb-3">Where can I watch Wise Tales stories?</h3>
                <p className="text-sage-600 text-sm">
                  Our stories are available on our website and YouTube channel. We're also developing 
                  partnerships with educational platforms for wider distribution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
