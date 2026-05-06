import React from 'react';

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
  categoryColor: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, category, title, date, categoryColor }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full cursor-pointer group">
    {/* Image Container */}
    <div className="relative h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-1 h-4 rounded-full ${categoryColor}`} />
        <span className="text-[12px] font-bold text-gray-800 uppercase tracking-wider">
          {category}
        </span>
      </div>
      
      <h3 className="text-[14px] font-bold text-gray-900 leading-snug mb-4 flex-grow line-clamp-2">
        {title}
      </h3>
      
      <span className="text-[11px] text-gray-400 font-medium">
        {date}
      </span>
    </div>
  </div>
);

const LatestNews: React.FC = () => {
  const newsData: NewsCardProps[] = [
    {
      image: "https://www.evoca.am/images-cache/news/1/17780463751358/439x320.png",
      category: "Բանկային",
      categoryColor: "bg-purple-600",
      title: "Evocabank-ը և Proparco-AFD-ն ստորագրել են 20 միլիոն եվրոյի...",
      date: "06.05.2026"
    },
    {
      image: "https://www.evoca.am/images-cache/news/1/1776423301974/439x320.png",
      category: "Կորպորատիվ",
      categoryColor: "bg-green-500",
      title: "Evocabank-ը մասնակցում է CCF 2026-ին",
      date: "17.04.2026"
    },
    {
      image: "https://www.evoca.am/images-cache/news/1/1776162446379/439x320.png",
      category: "Բանկային",
      categoryColor: "bg-purple-600",
      title: "Կարեն Եղիազարյանը՝ IMF և WBG Spring Meetings 2026-ին",
      date: "13.04.2026"
    }
  ];

  return (
    <section className="bg-[#f4f7fa] py-16 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center relative mb-10">
          <h2 className="text-[24px] md:text-[28px] font-black text-gray-900 tracking-tight">
            Վերջին նորությունները
          </h2>
          
          <button className="absolute right-0 flex items-center gap-2 bg-[#e0e7ff] text-[#6c24b5] px-4 py-2 rounded-full text-[12px] font-bold hover:bg-[#d1dbff] transition-colors">
            Բոլոր նորությունները
            <span className="text-[14px]">›</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;