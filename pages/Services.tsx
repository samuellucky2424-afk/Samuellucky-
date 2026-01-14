
import React from 'react';
import { SERVICES_LIST } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const logistics = SERVICES_LIST.filter(s => s.category === 'logistics');
  const rentals = SERVICES_LIST.filter(s => s.category === 'rental');

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-blue-800 py-24 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Comprehensive Services</h1>
        <p className="text-blue-100 max-w-2xl mx-auto px-4">
          From last-mile delivery to heavy machinery rentals, we have you covered.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Logistics Section */}
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Logistics & Delivery</h2>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {logistics.map((service) => (
              <div key={service.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all flex items-start space-x-6">
                <div className="hidden sm:flex w-14 h-14 bg-blue-100 text-blue-700 rounded-xl items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {['Same-day delivery in Onitsha', 'State-wide package tracking', 'Professional handling'].map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-500">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-blue-700 font-bold text-sm hover:underline">Request this service</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rental Section */}
        <div>
          <div className="flex items-center space-x-4 mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Quality Equipment Rentals</h2>
            <div className="flex-1 h-px bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rentals.map((service) => (
              <div key={service.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-200 transition-all flex items-start space-x-6">
                <div className="hidden sm:flex w-14 h-14 bg-blue-100 text-blue-700 rounded-xl items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {['Flexible daily/weekly rates', 'Well-maintained fleet', 'Operator assistance available'].map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-slate-500">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-blue-700 font-bold text-sm hover:underline">Check Availability</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
