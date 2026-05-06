import React, { useState } from 'react';

// 1. Կատեգորիաների տվյալները
const categories = [
  "Բանկային", "Պրոդուկտներ", "Նորարարություններ", 
  "Կենսակերպ", "Մրցանակներ", "CSR", "Այլ"
];

const NewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="w-full bg-[#fcfcfd] py-12 px-4 md:px-10 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs & Title */}
        <div className="mb-10">
          <div className="flex items-center text-xs text-gray-400 mb-4 space-x-2">
            <span>🏠</span>
            <span>{'>'}</span>
            <span className="hover:text-gray-600 cursor-pointer">Նորություններ</span>
          </div>
          <h1 className="text-4xl font-extrabold text-[#1a1a1a]">Նորություններ</h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-[13px] font-semibold transition-all border ${
                activeCategory === cat 
                ? 'bg-[#6c24b5] text-white border-[#6c24b5]' 
                : 'bg-[#eeeeee] text-[#555] border-transparent hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
          <button className="ml-auto flex items-center text-[#6c24b5] font-bold text-[13px] bg-[#f0e8f8] px-6 py-2 rounded-full hover:bg-[#e6d9f5] transition-colors">
            Բոլորը <span className="ml-2">›</span>
          </button>
        </div>

        {/* Featured News Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-4 bg-[#b4ff00] rounded-sm" /> {/* Կանաչ քառակուսին */}
              <span className="text-sm font-bold text-[#1a1a1a]">Կենսակերպ</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
              Evocabank-ը մասնակցում է CCF 2026-ին
            </h2>
            
            <p className="text-[#4a4a4a] text-lg leading-relaxed max-w-md">
              Ապրիլի 18-19-ին Evoca-ն կմասնակցի Career City Fest 2026-ին. 
              արի, բացահայտիր կարիերայի նոր հնարավորություններն ու միացիր մեր թիմին։
            </p>
            
            <div className="text-gray-400 text-sm font-medium pt-4">
              17.04.2026
            </div>
          </div>

          {/* Right: Image with Decorative Corners */}
          <div className="relative group">
            {/* Decorative Corners (Կանաչ անկյունակներ) */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-8 border-l-8 border-[#b4ff00] z-10" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-b-8 border-l-8 border-[#b4ff00] z-10" />
            
            <div className="overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://www.evoca.am/images-cache/news/1/1776423301974/780x585.png" // Փոխարինիր իրական հղումով
                alt="CCF 2026" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;