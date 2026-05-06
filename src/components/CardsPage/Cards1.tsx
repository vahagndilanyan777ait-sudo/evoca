import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CardsPage: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('Բոլորը');

  // Ենթամենյուի կետերը
  const subNavItems = [
    { label: "Քարտեր", path: "/cards" },
    { label: "Քարտերի տրամադրում և սպասարկում", path: "/card-service" },
    { label: "Սոցիալական ապահովության վճարային քարտեր", path: "/social-cards" },
    { label: "Evoca Benefits", path: "/benefits" },
  ];

  // Ֆիլտրի կոճակները
  const filters = [
    { label: 'Բոլորը', type: 'text' },
    { label: 'Պրեմիում', type: 'text' },
    { label: 'Նվեր քարտեր', type: 'text' },
    { label: 'Թվային քարտեր', type: 'text' },
    { label: 'ArCa', type: 'logo', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/ArCa_logo.png' },
    { label: 'Visa', type: 'logo', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
    { label: 'Mastercard', type: 'logo', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
    { label: 'UnionPay', type: 'logo', src: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/UnionPay_logo.svg' },
  ];

  return (
    <div className="w-full font-sans bg-white min-h-screen">
      {/* 1. Purple Sub-header */}
      <div className="w-full bg-[#6c24b5]">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 flex overflow-x-auto no-scrollbar">
          {subNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-4 px-6 text-white text-[13px] font-bold whitespace-nowrap transition-colors ${
                location.pathname === item.path ? 'bg-[#5a1e96]' : 'hover:bg-[#5a1e96]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* 2. Breadcrumbs & Title Section */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-6">
        <nav className="flex items-center gap-2 text-[12px] text-gray-500 mb-10">
          <Link to="/" className="hover:text-gray-800">
             <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
               <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
             </svg>
          </Link>
          <span className="text-gray-300">›</span>
          <Link to="/individual" className="hover:text-gray-800">Անհատ</Link>
          <span className="text-gray-300">›</span>
          <Link to="/cards" className="hover:text-gray-800">Քարտեր</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-400">Քարտեր</span>
        </nav>

        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
          Քարտեր
        </h1>

        {/* 3. Filter Buttons */}
        <div className="flex flex-wrap gap-3 items-center">
          {filters.map((filter) => (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter.label)}
              className={`h-10 px-6 rounded-full flex items-center justify-center transition-all border ${
                activeFilter === filter.label
                  ? 'bg-[#6c24b5] text-white border-[#6c24b5] shadow-md'
                  : 'bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200'
              }`}
            >
              {filter.type === 'text' ? (
                <span className="text-[13px] font-bold">{filter.label}</span>
              ) : (
                <img src={filter.src} alt={filter.label} className="h-4 object-contain grayscale hover:grayscale-0 transition-all" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;