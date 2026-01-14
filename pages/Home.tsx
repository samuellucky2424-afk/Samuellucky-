
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST, BUSINESS_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center hero-gradient text-white">
        <div className="absolute inset-0 bg-blue-900/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-blue-600 text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6">
              Official Logistics & Rentals Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Fast Logistics. <br />
              <span className="text-blue-400">Reliable Rentals.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-xl leading-relaxed font-light">
              {BUSINESS_INFO.tagline}. Based in Onitsha, we deliver efficiency to your doorstep and quality equipment to your site.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center"
              >
                Explore Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm border-t border-white/10 hidden lg:block">
           <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-4 gap-4">
              {[
                { label: 'Deliveries Made', val: '5,000+' },
                { label: 'Active Rentals', val: '150+' },
                { label: 'Happy Clients', val: '1,200+' },
                { label: 'Years Experience', val: '10+' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold">{stat.val}</div>
                  <div className="text-xs text-blue-200 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1570675621540-846190bd0c3c?auto=format&fit=crop&q=80&w=800" 
                alt="Delivery vehicle" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-50 rounded-3xl -z-0"></div>
              <div className="absolute top-12 -left-8 bg-blue-600 text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
                 <p className="text-3xl font-bold">100%</p>
                 <p className="text-xs uppercase font-medium">Safe & Secure</p>
              </div>
            </div>
            <div>
              <h2 className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Your Local Experts in Logistics and Equipment Hire.
              </h3>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Adogee Logistics and Rental Service Company is a premier provider of logistics and equipment solutions in Onitsha, Anambra State. 
                We understand the unique pulse of Onitsha's commerce and provide tailored services that keep your business moving.
              </p>
              <div className="space-y-4 mb-10">
                 {[
                   'Fast & Reliable Delivery Across Anambra',
                   'Premium Vehicles & Construction Equipment',
                   'Competitive Transparent Pricing',
                   'Expert Team with Deep Local Knowledge'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                     </div>
                     <span className="text-slate-700 font-medium">{item}</span>
                   </div>
                 ))}
              </div>
              <Link to="/about" className="inline-block text-blue-700 font-bold hover:text-blue-800 transition-colors group">
                Learn More About Our Mission
                <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-700 font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">What We Offer</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_LIST.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-3">
                  {service.description}
                </p>
                <Link to="/services" className="text-blue-700 font-semibold text-sm hover:underline">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full -mr-48 -mt-48 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full -ml-32 -mb-32 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Moving?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Contact Adogee today for a custom quote on your logistics or rental needs. 
            Reliability is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/contact" 
              className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Request a Service
            </Link>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Call Us: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
