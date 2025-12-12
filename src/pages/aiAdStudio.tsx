import React from "react";
import { Video, Sparkles, Building2, Rocket, Briefcase, Mail, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Start Your Video Project
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Contact us directly — we respond within 12 hours.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:zuhairtoons@gmail.com"
              className="flex items-center justify-center gap-3 text-2xl text-gray-800 font-semibold hover:text-gray-900"
            >
              <Mail className="w-7 h-7" />
              zuhairtoons@gmail.com
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/916394317905"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-2xl text-gray-800 font-semibold hover:text-gray-900"
            >
              <MessageCircle className="w-7 h-7" />
              +91 6394317905
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIAdsPage;
