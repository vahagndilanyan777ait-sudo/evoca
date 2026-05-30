import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NewsItem {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  date: string;
  image: string;
}

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => (
  <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(108,36,181,0.08)] transition-all duration-300 flex flex-col h-full cursor-pointer group border border-gray-100/50">
    
    {/* Image Container */}
    <div className="relative h-56 sm:h-64 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        loading="lazy"
      />
      {/* Թեթև մութ շերտ նկարի վրա hover-ի ժամանակ */}
      <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/5 transition-colors duration-500" />
    </div>
    
    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      {/* Category */}
      <div className="flex items-center gap-2 mb-3.5">
        <span className={`w-1 h-3.5 ${item.categoryColor} rounded-full`} />
        <span className="text-gray-400 text-[11px] font-extrabold uppercase tracking-widest">
          {item.category}
        </span>
      </div>
      
      {/* Title */}
      <h3 className="text-gray-800 font-bold text-base sm:text-lg leading-snug mb-auto group-hover:text-[#6c24b5] transition-colors duration-300 line-clamp-2">
        {item.title}
      </h3>
      
      {/* Date */}
      <div className="mt-6 text-gray-400 text-xs font-semibold tracking-wide">
        {item.date}
      </div>
    </div>
  </div>
);

const NewsSection: React.FC = () => {
  const { t } = useTranslation();

  // Տվյալները կապված են i18n-ի հետ՝ լիարժեք բազմալեզու աջակցման համար
  const newsData: NewsItem[] = [
    {
      id: 1,
      category: t('newsSection.lifestyle', 'Կենսակերպ'),
      categoryColor: "bg-[#22c55e]", // Մաքուր Tailwind green-500
      title: t('newsSection.items.ccf', 'Evocabank-ը մասնակցում է CCF 2026-ին'),
      date: "17.04.2026",
      image: "https://www.evoca.am/images-cache/news/1/1776423301974/439x320.png"
    },
    {
      id: 2,
      category: t('newsSection.banking', 'Բանկային'),
      categoryColor: "bg-[#6c24b5]", // Evoca Purple
      title: t('newsSection.items.imf', 'Կարեն Եղիազարյանը՝ IMF և WBG Spring Meetings 2026-ին'),
      date: "13.04.2026",
      image: "https://www.evoca.am/images-cache/news/1/1776162446379/439x320.png"
    },
    {
      id: 3,
      category: t('newsSection.lifestyle', 'Կենսակերպ'),
      categoryColor: "bg-[#22c55e]",
      title: t('newsSection.items.leasing', 'Evoca-ն մասնակցում է Leasing Expo 2026-ին'),
      date: "09.04.2026",
      image: "https://www.evoca.am/images-cache/news/1/17758068998241/439x320.png"
    }
  ];

  return (
    <section className="bg-[#f8faff] py-16 px-4 sm:px-6 lg:px-20 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            {t('newsSection.latestTitle', 'Վերջին նորությունները')}
          </h2>
          
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 bg-[#6c24b5]/5 text-[#6c24b5] px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#6c24b5] hover:text-white transition-all duration-300 group shadow-sm shrink-0"
          >
            {t('newsSection.viewAll', 'Բոլոր նորությունները')}
            <svg 
              className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth={2.5} 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsSection;