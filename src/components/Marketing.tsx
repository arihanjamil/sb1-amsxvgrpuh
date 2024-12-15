import React from 'react';
import { TrendingUp, Target, BarChart3, Globe } from 'lucide-react';

const marketingServices = [
  {
    icon: <TrendingUp className="h-12 w-12 text-indigo-600" />,
    title: 'Social Media Marketing',
    description: 'Strategic social media campaigns across all major platforms to boost engagement and brand awareness.',
    features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
  },
  {
    icon: <Target className="h-12 w-12 text-indigo-600" />,
    title: 'PPC Advertising',
    description: 'Results-driven pay-per-click campaigns that maximize ROI and drive qualified traffic.',
    features: ['Google Ads', 'Facebook Ads', 'Keyword Research', 'Conversion Tracking']
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-indigo-600" />,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve your search rankings and organic visibility.',
    features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO']
  },
  {
    icon: <Globe className="h-12 w-12 text-indigo-600" />,
    title: 'Content Marketing',
    description: 'Engaging content that tells your story and connects with your target audience.',
    features: ['Blog Writing', 'Email Marketing', 'Video Content', 'Infographics']
  }
];

export default function Marketing() {
  return (
    <section id="marketing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Marketing Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Boost your brand visibility and drive growth with our comprehensive marketing services
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {marketingServices.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3">
                  {service.icon}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}