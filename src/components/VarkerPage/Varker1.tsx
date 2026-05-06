import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LoansPage: React.FC = () => {
  const location = useLocation();

  // Ենթամենյուի կետերը
  const subNavItems = [
    { label: "Վարկեր", path: "/loans" },
    { label: "Վարկային պատմություն և սքոր", path: "/credit-history" },
    { label: "Կարևոր տեղեկատվություն", path: "/important-info" },
  ];

  return (
    <div className="w-full font-sans">
      {/* 1. Purple Sub-header */}
      <div className="w-full bg-[#6c24b5] overflow-x-auto shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 flex">
          {subNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-4 px-6 text-white text-[14px] font-medium whitespace-nowrap transition-colors border-b-4 ${
                location.pathname === item.path 
                  ? 'bg-[#5a1e96] border-white' 
                  : 'border-transparent hover:bg-[#5a1e96]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* 2. Breadcrumbs Section */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-6">
        <nav className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-800 flex items-center">
             {/* Home Icon (SVG) */}
             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
               <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
             </svg>
          </Link>
          <span>›</span>
          <Link to="/individual" className="hover:text-gray-800">Անհատ</Link>
          <span>›</span>
          <Link to="/loans" className="hover:text-gray-800">Վարկեր</Link>
          <span>›</span>
          <span className="text-gray-400">Վարկեր</span>
        </nav>

        {/* 3. Main Title */}
        <h1 className="mt-8 text-4xl font-extrabold text-gray-900 tracking-tight">
          Վարկեր
        </h1>
      </div>
    </div>
  );
};

export default LoansPage;