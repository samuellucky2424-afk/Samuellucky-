
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=Hello! I would like to inquire about your logistics and rental services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.171c1.533.913 3.041 1.374 4.548 1.375 5.404 0 9.803-4.397 9.803-9.804 0-2.62-1.02-5.086-2.871-6.938-1.851-1.852-4.319-2.872-6.938-2.872-5.407 0-9.803 4.397-9.803 9.806 0 1.567.417 3.097 1.208 4.442l-.791 2.891 3.002-.788c-.01-.001-.01-.001-.01-.001zm10.743-7.147c-.244-.122-1.444-.712-1.668-.794-.224-.082-.387-.122-.55.122-.163.244-.632.794-.774.957-.142.163-.284.183-.528.061-.244-.122-1.029-.38-1.959-1.209-.724-.645-1.213-1.442-1.355-1.686-.142-.244-.015-.376.107-.497.11-.109.244-.285.366-.427.122-.142.163-.244.244-.407.081-.163.041-.305-.021-.427-.061-.122-.55-1.323-.753-1.812-.198-.477-.399-.412-.55-.412h-.468c-.163 0-.427.061-.65.305-.224.244-.854.834-.854 2.035 0 1.201.874 2.36 1.017 2.543.142.183 1.72 2.626 4.167 3.682.582.251 1.036.401 1.391.514.585.186 1.117.16 1.537.097.469-.071 1.444-.59 1.648-1.16.204-.57.204-1.059.143-1.161-.061-.102-.224-.163-.468-.285z"/>
      </svg>
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        Need help? Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;
