
import React from 'react';
import { Calendar, BookOpen, Heart, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const posts = [
    {
      title: 'The Power of 8-Second Stories: Why Short-Form Content Works for Kids',
      excerpt: 'Discover the science behind our bite-sized moral tales and how they capture young attention spans while delivering powerful lessons.',
      author: 'Zuhair Arif',
      date: '2024-01-15',
      category: 'Education',
      readTime: '5 min read'
    },
    {
      title: 'Behind the Scenes: Creating AI-Powered Islamic Animations',
      excerpt: 'Take a peek into our creative process using cutting-edge AI tools like Google Veo and Suno to bring moral stories to life.',
      author: 'Omar Al-Hassan',
      date: '2024-01-10',
      category: 'Technology',
      readTime: '7 min read'
    },
    {
      title: 'Uncle Hasan\'s Vision: Empowering the Next Generation',
      excerpt: 'An exclusive interview with our 83-year-old philanthropist about his mission to make Muslims global leaders and torchbearers.',
      author: 'Amina Khalil',
      date: '2024-01-05',
      category: 'Inspiration',
      readTime: '6 min read'
    },
    {
      title: 'Parenting in the Digital Age: Balancing Screen Time with Values',
      excerpt: 'Expert tips on how to use technology as a tool for moral education while maintaining healthy boundaries.',
      author: 'Dr. Fatima Ahmed',
      date: '2024-01-01',
      category: 'Parenting',
      readTime: '8 min read'
    },
    {
      title: 'From Aligarh to the World: Our Global Mission',
      excerpt: 'How a student project at AMU became a global movement to transform Islamic education for children.',
      author: 'Zuhair Arif',
      date: '2023-12-28',
      category: 'Mission',
      readTime: '4 min read'
    },
    {
      title: 'Building Character Through Stories: The Islamic Perspective',
      excerpt: 'Understanding the deep connection between storytelling and character development in Islamic tradition.',
      author: 'Sheikh Abdullah',
      date: '2023-12-20',
      category: 'Islamic Education',
      readTime: '9 min read'
    }
  ];
  
  const categories = ['All', 'Education', 'Technology', 'Inspiration', 'Parenting', 'Mission', 'Islamic Education'];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-mint-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-800 mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Insights, stories, and guidance on Islamic education, parenting, and our mission 
            to empower Muslim children worldwide through moral storytelling.
          </p>
        </div>
      </section>
      
      {/* Categories */}
      <section className="pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-sage-300 text-sage-600 hover:bg-sage-50"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-sage-800 mb-8 text-center">Featured Article</h2>
          
          <Card className="border-gold-200 bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video bg-gradient-to-br from-gold-100 to-mint-100 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-sage-600" />
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    <span className="text-sage-500 text-sm">5 min read</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-sage-800 mb-4">
                    The Power of 8-Second Stories: Why Short-Form Content Works for Kids
                  </h3>
                  
                  <p className="text-sage-600 mb-6">
                    Discover the science behind our bite-sized moral tales and how they capture 
                    young attention spans while delivering powerful lessons that stick with children long after viewing.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-sage-500" />
                      <span className="text-sm text-sage-600">Zuhair Arif</span>
                      <Calendar className="w-4 h-4 text-sage-500 ml-4" />
                      <span className="text-sm text-sage-600">Jan 15, 2024</span>
                    </div>
                    <Button className="bg-sage-600 hover:bg-sage-700">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Blog Posts Grid */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-sage-800 mb-8 text-center">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <Card key={index} className="border-sage-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow group">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-mint-100 to-sage-100 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-sage-600 group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-mint-100 text-mint-700 px-2 py-1 rounded text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-sage-500 text-xs">{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-sage-800 mb-3 group-hover:text-sage-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sage-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-sage-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 px-4 bg-sage-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get the latest insights on Islamic education, parenting tips, and behind-the-scenes stories
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-sage-800 focus:outline-none focus:ring-2 focus:ring-gold-500"
            />
            <Button className="bg-gold-500 hover:bg-gold-600 text-white px-6">
              <Heart className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm opacity-75 mt-4">
            No spam, just valuable content. Unsubscribe anytime.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
