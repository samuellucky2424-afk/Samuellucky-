
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Adogee</h1>
        <p className="text-slate-400 max-w-2xl mx-auto px-4">
          Committed to excellence in delivery and rental services since our inception.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              At Adogee Logistics and Rental Service Company, our mission is to provide the most reliable, efficient, and affordable logistics and rental solutions in Anambra State. We strive to empower businesses and individuals by solving their mobility and equipment challenges.
            </p>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Founded with the vision of streamlining the chaotic logistics landscape in Onitsha, we have grown into a multi-service company that locals trust for their most critical deliveries and projects.
            </p>
            <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
              <div>
                <h4 className="text-blue-700 font-bold text-lg mb-2">Our Vision</h4>
                <p className="text-slate-500 text-sm">To be the #1 logistics partner in South-Eastern Nigeria.</p>
              </div>
              <div>
                <h4 className="text-blue-700 font-bold text-lg mb-2">Our Values</h4>
                <p className="text-slate-500 text-sm">Integrity, Speed, Security, and Customer First.</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" 
               alt="Team and vehicles" 
               className="rounded-3xl shadow-xl"
             />
             <div className="absolute inset-0 bg-blue-900/10 rounded-3xl"></div>
          </div>
        </div>

        {/* Why Choose Us Grid */}
        <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100">
           <div className="text-center mb-16">
              <h2 className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-4">Excellence Guaranteed</h2>
              <h3 className="text-3xl font-extrabold">Why Choose Adogee?</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Fast Delivery',
                  text: 'We understand that time is money. Our optimized routes ensure your packages arrive faster.',
                  icon: '⚡'
                },
                {
                  title: 'Affordable Pricing',
                  text: 'Premium service doesn’t have to break the bank. We offer the best rates in Onitsha.',
                  icon: '💰'
                },
                {
                  title: 'Reliable Support',
                  text: 'Our dedicated customer support team is always available to assist with your inquiries.',
                  icon: '📞'
                }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
