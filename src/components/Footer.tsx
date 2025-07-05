
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-mint-400 to-gold-500 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Wise Tales</span>
            </div>
            <p className="text-sage-300 mb-6 max-w-md">
              Empowering Muslim children worldwide through AI-powered moral storytelling. 
              A vision brought to life by Uncle Hasan's generous support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sage-300 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="text-sage-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sage-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/watch" className="text-sage-300 hover:text-white transition-colors">Watch Stories</Link></li>
              <li><Link to="/parents" className="text-sage-300 hover:text-white transition-colors">For Parents</Link></li>
              <li><Link to="/get-involved" className="text-sage-300 hover:text-white transition-colors">Get Involved</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/donate" className="text-sage-300 hover:text-white transition-colors">Donate</Link></li>
              <li><Link to="/contact" className="text-sage-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-sage-300 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-sage-700 mt-8 pt-8 text-center">
          <p className="text-sage-300 mb-2">
            "Changing the world, one story at a time."
          </p>
          <p className="text-sm text-sage-400">
            © 2024 Wise Tales. All rights reserved. | Aligarh, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
