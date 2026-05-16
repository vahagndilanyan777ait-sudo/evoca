import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Կատեգորիաների դինամիկ թարգմանվող զանգված
  const categories = [
    { id: 'banking', label: t('news.cat.banking', 'Բանկային') },
    { id: 'products', label: t('news.cat.products', 'Պրոդուկտներ') },
    { id: 'innovations', label: t('news.cat.innovations', 'Նորարարություններ') },
    { id: 'lifestyle', label: t('news.cat.lifestyle', 'Կենսակերպ') },
    { id: 'awards', label: t('news.cat.awards', 'Մրցանակներ') },
    { id: 'csr', label: t('news.cat.csr', 'CSR') },
    { id: 'other', label: t('news.cat.other', 'Այլ') }
  ];

  return (
    <section className="w-full bg-[#fcfcfd] py-12 px-4 md:px-10 lg:px-20 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs & Title */}
        <div className="mb-10">
          <div className="flex items-center text-xs text-gray-400 mb-4 space-x-2 font-medium">
            <Link to="/" className="hover:text-black transition-colors">🏠</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-600 font-semibold">{t('news.title', 'Նորություններ')}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-950 tracking-tight">
            {t('news.title', 'Նորություններ')}
          </h1>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-14 md:mb-20">
          {/* «Բոլորը» կոճակը, որը մաքրում է ֆիլտրը */}
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all border ${
              activeCategory === null 
                ? 'bg-[#6c24b5] text-white border-[#6c24b5] shadow-md shadow-purple-500/10' 
                : 'bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200/80'
            }`}
          >
            {t('news.all', 'Բոլորը')}
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all border ${
                activeCategory === cat.id 
                  ? 'bg-[#6c24b5] text-white border-[#6c24b5] shadow-md shadow-purple-500/10' 
                  : 'bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Featured News Card (Գլխավոր Մեծ Նորություն) */}
        {/* Այստեղ սովորաբար ցուցադրվում է ընտրված կատեգորիայի ամենաթարմ նորությունը */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-white p-6 sm:p-8 lg:p-0 rounded-3xl border border-gray-100/50 lg:border-none shadow-sm lg:shadow-none">
          
          {/* Left: Text Content */}
          <div className="space-y-5 lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center space-x-2.5">
              <span className="w-1.5 h-4 bg-[#b4ff00] rounded-full shadow-sm" />
              <span className="text-xs sm:text-sm font-black text-gray-400 uppercase tracking-widest">
                {t('news.cat.lifestyle', 'Կենսակերպ')}
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight hover:text-[#6c24b5] transition-colors cursor-pointer">
              Evocabank-ը մասնակցում է CCF 2026-ին
            </h2>
            
            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-xl">
              Ապրիլի 18-19-ին Evoca-ն կմասնակցի Career City Fest 2026-ին. 
              արի՛, բացահայտի՛ր կարիերայի նոր հնարավորություններն ու միացի՛ր մեր մեծ ու նորարար թիմին։
            </p>
            
            <div className="text-gray-400 text-xs sm:text-sm font-bold tracking-wider pt-2">
              17.04.2026
            </div>
          </div>

          {/* Right: Image with Evoca-style Decorative Corners */}
          <div className="relative group lg:col-span-7 order-1 lg:order-2 px-4 sm:px-0">
            {/* Decorative Corners (Կանաչ անկյունակներ) - pointer-events-none-ը կարևոր է */}
            <div className="absolute -top-3 -left-1 sm:-left-3 w-10 h-10 border-t-[6px] border-l-[6px] border-[#b4ff00] z-10 pointer-events-none rounded-tl-sm" />
            <div className="absolute -bottom-3 -left-1 sm:-left-3 w-6 h-6 border-b-[6px] border-l-[6px] border-[#b4ff00] z-10 pointer-events-none rounded-bl-sm" />
            <div className="absolute -top-3 -right-1 sm:-right-3 w-6 h-6 border-t-[6px] border-r-[6px] border-[#b4ff00] z-10 pointer-events-none rounded-tr-sm" />
            
            {/* Image Wrapper */}
            <div className="overflow-hidden rounded-2xl shadow-[0_15px_45px_rgba(0,0,0,0.06)] bg-gray-50 border border-gray-100">
              <img 
                src="https://www.evoca.am/images-cache/news/1/1776423301974/780x585.png" 
                alt="CCF 2026" 
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="eager"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/[0.02] transition-colors duration-500 rounded-2xl pointer-events-none" />
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
};

export default NewsSection;