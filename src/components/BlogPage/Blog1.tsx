import React, { useState } from 'react';

// 1. Կատեգորիաների տվյալները
const categories = ["Բիզնես", "Կենսակերպ", "Ներդրումներ"];

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Կենսակերպ");

  return (
    <section className="w-full bg-[#fcfcfd] py-8 md:py-12 px-4 md:px-10 lg:px-20 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs (Scrollable on small screens) */}
        <nav className="flex items-center text-[10px] md:text-xs text-gray-400 mb-4 sm:mb-6 space-x-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
          <span className="cursor-pointer hover:text-gray-600 shrink-0">🏠</span>
          <span className="shrink-0">›</span>
          <span className="text-gray-600 shrink-0">Բլոգ</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] mb-6 sm:mb-12 text-center md:text-left">
          Բլոգ
        </h1>

        {/* Toolbar: Categories & Archive */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-bold transition-all border ${
                  activeCategory === cat 
                    ? 'bg-[#6c24b5] text-white border-[#6c24b5]' 
                    : 'bg-[#eeeeee] text-[#555] border-transparent hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <button className="w-full md:w-fit flex items-center justify-center bg-[#f0e8f8] text-[#6c24b5] font-bold text-xs sm:text-[13px] px-8 py-2.5 rounded-full hover:bg-[#e6d9f5] transition-colors group">
            Արխիվ <span className="ml-2 transition-transform group-hover:translate-x-1">›</span>
          </button>
        </div>

        {/* Main Featured Post Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left / Top: Text Content */}
          <div className="space-y-4 sm:space-y-6 lg:pr-10 text-center md:text-left order-2 lg:order-1">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#2d004d] rounded-sm shrink-0" />
              <span className="text-xs sm:text-sm font-extrabold text-[#1a1a1a] tracking-wide uppercase">
                {activeCategory}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1a1a1a] leading-tight max-w-xl mx-auto md:mx-0">
              Monthly Recap
            </h2>
            
            <p className="text-[#4a4a4a] text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-medium text-justify md:text-left">
              Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ:
            </p>
            
            <div className="text-gray-400 text-xs sm:text-sm font-bold pt-2 sm:pt-4 tracking-wide">
              05.01.2026
            </div>
          </div>

          {/* Right / Bottom: Image with Decorative L-Shapes */}
          <div className="relative px-3 sm:px-0 order-1 lg:order-2 max-w-md sm:max-w-xl lg:max-w-none mx-auto w-full">
            {/* Top-Left Decorative Corner */}
            <div className="absolute -top-3 -left-1 sm:-top-5 sm:-left-5 w-8 h-8 sm:w-10 sm:h-10 border-t-[4px] sm:border-t-[6px] border-l-[4px] sm:border-l-[6px] border-[#1a1a1a] z-10" />
            
            {/* Bottom-Left Decorative Corner */}
            <div className="absolute -bottom-3 -left-1 sm:-bottom-5 sm:-left-5 w-5 h-5 sm:w-6 sm:h-6 border-b-[4px] sm:border-b-[6px] border-l-[4px] sm:border-l-[6px] border-[#1a1a1a] z-10" />
            
            {/* Image Wrapper */}
            <div className="overflow-hidden rounded-sm shadow-xl sm:shadow-2xl">
              <img 
                src="https://www.evoca.am/images-cache/blogs/1/17683779856926/780x585.png"
                alt="Monthly Recap" 
                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Օժանդակ ոճեր */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default BlogSection;