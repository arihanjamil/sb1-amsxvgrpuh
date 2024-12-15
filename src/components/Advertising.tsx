import React from 'react';
import { Newspaper, Radio, MonitorSmartphone, PenTool } from 'lucide-react';

export default function Advertising() {
  return (
    <section id="advertising" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Advertising Channels</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reach your target audience through multiple advertising channels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
              alt="Marketing Strategy"
              className="rounded-lg shadow-lg object-cover h-[400px] w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Strategic Advertising</h3>
              <p className="text-gray-200">Data-driven campaigns that deliver results</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Newspaper className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Print Media</h3>
              <p className="text-gray-600">Traditional advertising through newspapers, magazines, and brochures</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Radio className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Broadcast Media</h3>
              <p className="text-gray-600">Television and radio advertising campaigns</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <MonitorSmartphone className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Digital Media</h3>
              <p className="text-gray-600">Online advertising across multiple platforms</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <PenTool className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Creative Design</h3>
              <p className="text-gray-600">Eye-catching visuals and compelling copy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}