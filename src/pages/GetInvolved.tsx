import React from "react";
import { Video, Sparkles, Building2, Rocket, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AIAdsPage = () => {
  const services = [
    {
      title: "AI-Powered Advertisement Videos",
      description:
        "High-quality promotional videos created with advanced AI tools. Perfect for marketing campaigns, brand awareness, and digital advertising.",
      icon: Video,
    },
    {
      title: "Product & Brand Explainer Videos",
      description:
        "Crisp, engaging videos explaining your product, service, or brand story — ideal for websites, landing pages, and social media.",
      icon: Sparkles,
    },
    {
      title: "Corporate & Business Promo Videos",
      description:
        "Professional company profile videos, corporate messages, and internal communication content created with AI efficiency.",
      icon: Building2,
    },
    {
      title: "Startup Launch Videos",
      description:
        "Fast, budget-friendly launch videos for startups — pitch videos, app previews, and product reveal animations.",
      icon: Rocket,
    },
    {
      title: "Social Media Ad Creatives",
      description:
        "AI-generated reels, shorts, and ad creatives designed to boost engagement and conversions across all platforms.",
      icon: Briefcase,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            AI-Generated Advertisement Videos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wise Tales creates high-quality AI-powered advertisement videos for
            brands, startups, and companies worldwide. Fast, modern, affordable,
            and customized for your marketing needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What We Create
            </h2>
            <p className="text-lg text-gray-600">
              Professional video solutions tailored for business growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-gray-200 bg-white shadow-sm hover:shadow-xl transition"
              >
                <CardContent className="p-8 text-center">
                  <service.icon className="w-14 h-14 text-gray-700 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Brands Choose Wise Tales
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            We combine creativity with advanced AI technology to deliver
            stunning video content that helps businesses increase engagement,
            attract customers, and strengthen their digital presence.
          </p>

          <ul className="text-gray-700 text-lg space-y-3 max-w-3xl mx-auto">
            <li>• Fast video production with high-quality results</li>
            <li>• 100% customized advertisement concepts</li>
            <li>• Perfect for social media ads & marketing campaigns</li>
            <li>• Professional scripts, voiceover & visual storytelling</li>
            <li>• Unlimited revisions until you're satisfied</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Start Your Video Project
            </h2>
            <p className="text-lg text-gray-600">
              Contact us and we’ll respond within 12 hours.
            </p>
          </div>

          <Card className="border-gray-300 bg-white">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Full Name *
                    </label>
                    <Input className="border-gray-300" placeholder="Your full name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-800 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      className="border-gray-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">
                    Message
                  </label>
                  <Textarea
                    className="border-gray-300"
                    rows={4}
                    placeholder="Tell us about the video you'd like to create..."
                  />
                </div>

                <div className="text-center">
                  <Button className="bg-gray-800 hover:bg-gray-900 text-white px-10 py-4 text-lg">
                    Contact Us
                  </Button>
                </div>

                {/* Contact Info Display */}
                <div className="text-center mt-8">
                  <p className="text-lg text-gray-700 font-medium">Or reach us directly:</p>
                  <p className="text-gray-800 text-xl mt-2 font-semibold">
                    📧 wisetalesofficial@gmail.com
                  </p>
                  <p className="text-gray-800 text-xl mt-1 font-semibold">
                    📞 +91 87872 07995
                  </p>
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

export default AIAdsPage;
