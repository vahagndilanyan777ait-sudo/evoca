import React from 'react';
import { useTranslation } from 'react-i18next';

// Ինտերֆեյս քարտի տվյալների համար
interface NewsItem {
  id: number;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  date: string;
}

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(108,36,181,0.06)] border border-gray-100/60 transition-all duration-500 flex flex-col h-full cursor-pointer">
      
      {/* Նկարի հատված կատարելագործված անիմացիայով */}
      <div className="relative h-52 overflow-hidden bg-gray-50">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none"
          loading="lazy"
        />
        {/* Նուրբ overlay էֆեկտ հովերի ժամանակ */}
        <div className="absolute inset-0 bg-[#6c24b5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
      
      {/* Բովանդակություն */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-3">
          {/* Կատեգորիա */}
          <div className="flex items-center gap-2">
            <span className={`w-1.5 h-3.5 rounded-full ${item.categoryColor} block`} />
            <span className="text-[11px] font-black tracking-widest text-gray-800 uppercase">
              {item.category}
            </span>
          </div>
          
          {/* Վերնագիր — Միշտ պահպանում է տողերի սահմանափակումը */}
          <h3 className="text-sm sm:text-base font-black text-gray-950 leading-snug group-hover:text-[#6c24b5] transition-colors duration-300 line-clamp-3">
            {item.title}
          </h3>
        </div>
        
        {/* Ամսաթիվ — Միշտ մնում է քարտի ամենաներքևի մասում */}
        <div className="pt-2 border-t border-gray-50 flex items-center justify-between">
          <span className="text-[11px] text-gray-400 font-bold tracking-wide">
            {item.date}
          </span>
          <span className="text-[#6c24b5] text-xs font-black opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
            →
          </span>
        </div>
      </div>

    </div>
  );
};

const LatestNewsSection: React.FC = () => {
  const { t } = useTranslation();

  // Նորությունների իրական/թարմ տվյալները
  const newsData: NewsItem[] = [
    {
      id: 1,
      image: "https://www.evoca.am/images-cache/news/1/17780463751358/439x320.png",
      category: t('news.cat_banking', 'Բանկային'),
      categoryColor: "bg-[#6c24b5]",
      title: "Evocabank-ը և Proparco-AFD-ն ստորագրել են 20 միլիոն եվրոյի...",
      date: "06.05.2026"
    },
    {
      id: 2,
      image: "https://www.evoca.am/images-cache/news/1/1776423301974/439x320.png",
      category: t('news.cat_corporate', 'Կորպորատիվ'),
      categoryColor: "bg-emerald-400",
      title: "Evocabank-ը մասնակցում է CCF 2026-ին",
      date: "17.04.2026"
    },
    {
      id: 3,
      image: "https://www.evoca.am/images-cache/news/1/1776162446379/439x320.png",
      category: t('news.cat_banking', 'Բանկային'),
      categoryColor: "bg-[#6c24b5]",
      title: "Կարեն Եղիազարյանը՝ IMF և WBG Spring Meetings 2026-ին",
      date: "13.04.2026"
    }
  ];

  return (
    <section className="bg-[#f4f6fa] py-16 px-4 sm:px-8 md:px-12 rounded-[32px] md:rounded-[56px] my-6">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Վերնագիր և կոճակ (Flexbox layout responsive հավասարեցմամբ) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-gray-200/50 pb-6">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="w-2 h-6 bg-[#6c24b5] rounded-full hidden sm:block" />
            <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight uppercase">
              {t('news.section_title', 'Վերջին նորություններ')}
            </h2>
          </div>
          
          <button className="flex items-center gap-2 bg-white text-[#6c24b5] border border-purple-100 hover:border-purple-200 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider shadow-xs hover:bg-purple-50/40 transition-all active:scale-98">
            {t('news.all_news_btn', 'Բոլոր նորությունները')}
            <svg className="w-3.5 h-3.5 mt-px" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Քարտերի ցանց (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-fadeIn">
          {newsData.map((news) => (
            <NewsCard key={news.id} item={news} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default LatestNewsSection;