
import React from 'react';
import { BookOpen, Download, Heart, Users, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Parents = () => {
  const benefits = [
    "Age-appropriate moral education for 3-12 year olds",
    "Screen time that actually builds character and values",
    "Stories reviewed by moral educators and child development experts",
    "Perfect for family time, bedtime stories, or quiet moments",
    "Builds confidence and leadership qualities in children"
  ];
  
  const resources = [
    {
      title: 'Story Discussion Guide',
      description: 'Help your child reflect on the moral lessons in each story',
      type: 'PDF Guide',
      icon: BookOpen
    },
    {
      title: 'Islamic Values Coloring Pages',
     description: 'Beautiful coloring activities featuring moral values and our characters',
      type: 'Printable Pack',
      icon: Download
    },
    {
      title: 'Family Activity Cards',
      description: 'Games and activities to reinforce moral lessons at home',
      type: 'Activity Set',
      icon: Heart
    },
    {
      title: 'Parent-Child Conversation Starters',
     description: 'Questions to deepen understanding of moral values',
      type: 'Discussion Guide',
      icon: Users
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-mint-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-sage-800 mb-6">
            For Parents & Educators
          </h1>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto">
            Empower your children with stories that build character, strengthen values, 
            and inspire them to become confident leaders of tomorrow.
          </p>
        </div>
      </section>
      
      {/* Why Moral Education Matters */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-sage-800 mb-6">
                Why Moral Education Matters
              </h2>
              <p className="text-lg text-sage-600 mb-6">
                Research shows that children who receive strong moral education in their 
                early years develop better emotional intelligence, stronger relationships, 
                and greater resilience in facing life's challenges.
              </p>
              <p className="text-lg text-sage-600 mb-8">
                In today's world, it's more important than ever to give our children 
                a strong foundation in moral values while preparing them to be 
                confident leaders in their communities.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-mint-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sage-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-mint-100 to-sage-100 rounded-2xl p-8">
              <div className="text-center">
                <Star className="w-16 h-16 text-gold-500 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-sage-800 mb-4">
                  "The best gift you can give your child is strong moral character"
                </h3>
                <p className="text-sage-600 italic">
                  Building tomorrow's leaders starts today
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How We're Different */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              How Wise Tales is Different
            </h2>
            <p className="text-xl text-sage-600 max-w-3xl mx-auto">
              Unlike traditional moral cartoons, our stories are designed 
              specifically for modern families who want authentic values with contemporary appeal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-mint-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <BookOpen className="w-12 h-12 text-mint-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Scholar-Reviewed</h3>
                <p className="text-sage-600">
                  Every story is reviewed by moral educators to ensure authentic, 
                  age-appropriate moral guidance that parents can trust.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gold-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-gold-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Emotionally Engaging</h3>
                <p className="text-sage-600">
                  Our stories connect with children's hearts, making moral lessons 
                  memorable and inspiring positive behavior changes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-sage-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-3">Community-Focused</h3>
                <p className="text-sage-600">
                  Built by students for children, fostering a sense of 
                  identity and belonging in the global community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Free Resources */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Free Resources for Families
            </h2>
            <p className="text-xl text-sage-600">
              Extend the learning beyond screen time with our curated family resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border-sage-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-mint-400 to-sage-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-sage-800">{resource.title}</h3>
                        <span className="text-xs bg-gold-100 text-gold-700 px-2 py-1 rounded-full">
                          {resource.type}
                        </span>
                      </div>
                      <p className="text-sage-600 mb-4">{resource.description}</p>
                      <Button size="sm" variant="outline" className="border-sage-300 text-sage-600 hover:bg-sage-50">
                        <Download className="w-4 h-4 mr-2" />
                        Download Free
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Usage Scenarios */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-sage-800 mb-6">
              Perfect for Every Setting
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-mint-600" />
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">At Home</h3>
              <p className="text-sage-600">
                Perfect for bedtime stories, family bonding time, or quiet moments 
                that teach valuable life lessons.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gold-600" />
              </div>
             <h3 className="text-xl font-semibold text-sage-800 mb-3">In Schools & Centers</h3>
              <p className="text-sage-600">
                Ideal for schools, learning centers, and educators looking 
                for engaging moral education content.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sage-600" />
              </div>
             <h3 className="text-xl font-semibold text-sage-800 mb-3">In Community Centers</h3>
              <p className="text-sage-600">
                Great for children's programs, weekend schools, and community 
                events that focus on character building.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 bg-sage-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Start Your Child's Moral Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families who are raising confident, moral leaders
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4">
              <BookOpen className="mr-2 h-5 w-5" />
              Watch Stories Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-sage-600 px-8 py-4">
              <Download className="mr-2 h-5 w-5" />
              Download Resources
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Parents;
