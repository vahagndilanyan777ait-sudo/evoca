import React, { useState } from 'react';

// 1. Կատեգորիաների տվյալները
const categories = ["Բիզնես", "Կենսակերպ", "Ներդրումներ"];

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Կենսակերպ");

  return (
    <section className="w-full bg-[#fcfcfd] py-12 px-4 md:px-10 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center text-[10px] md:text-xs text-gray-400 mb-6 space-x-2">
          <span className="cursor-pointer hover:text-gray-600">🏠</span>
          <span>›</span>
          <span className="text-gray-600">Բլոգ</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-12">Բլոգ</h1>

        {/* Toolbar: Categories & Archive */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[13px] font-bold transition-all border ${
                  activeCategory === cat 
                  ? 'bg-[#6c24b5] text-white border-[#6c24b5]' 
                  : 'bg-[#eeeeee] text-[#555] border-transparent hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <button className="flex items-center justify-center bg-[#f0e8f8] text-[#6c24b5] font-bold text-[13px] px-8 py-2.5 rounded-full hover:bg-[#e6d9f5] transition-colors group">
            Արխիվ <span className="ml-2 transition-transform group-hover:translate-x-1">›</span>
          </button>
        </div>

        {/* Main Featured Post Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-6 lg:pr-10">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-[#2d004d] rounded-sm" /> {/* Մուգ քառակուսին */}
              <span className="text-sm font-extrabold text-[#1a1a1a]">Կենսակերպ</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] leading-tight">
              Monthly Recap
            </h2>
            
            <p className="text-[#4a4a4a] text-lg leading-relaxed max-w-lg font-medium">
              Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ:
            </p>
            
            <div className="text-gray-400 text-sm font-bold pt-4 tracking-wide">
              05.01.2026
            </div>
          </div>

          {/* Right: Image with Decorative L-Shapes */}
          <div className="relative">
            {/* Top-Left Decorative Corner */}
            <div className="absolute -top-5 -left-5 w-10 h-10 border-t-[6px] border-l-[6px] border-[#1a1a1a] z-10" />
            
            {/* Bottom-Left Decorative Corner */}
            <div className="absolute -bottom-5 -left-5 w-6 h-6 border-b-[6px] border-l-[6px] border-[#1a1a1a] z-10" />
            
            <div className="overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png" // Փոխարինիր իրական հղումով
                alt="Monthly Recap" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;