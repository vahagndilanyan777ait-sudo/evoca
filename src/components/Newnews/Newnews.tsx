import React from 'react';

interface NewsItem {
  id: number;
  category: string;
  categoryColor: string;
  title: string;
  date: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    category: "Կենսակերպ",
    categoryColor: "bg-green-400",
    title: "Evocabank-ը մասնակցում է CCF 2026-ին",
    date: "17.04.2026",
    image: "https://www.evoca.am/images-cache/news/1/1776423301974/439x320.png"
  },
  {
    id: 2,
    category: "Բանկային",
    categoryColor: "bg-purple-600",
    title: "Կարեն Եղիազարյանը՝ IMF և WBG Spring Meetings 2026-ին",
    date: "13.04.2026",
    image: "https://www.evoca.am/images-cache/news/1/1776162446379/439x320.png"
  },
  {
    id: 3,
    category: "Կենսակերպ",
    categoryColor: "bg-green-400",
    title: "Evoca-ն մասնակցում է Leasing Expo 2026-ին",
    date: "09.04.2026",
    image: "https://www.evoca.am/images-cache/news/1/17758068998241/439x320.png"
  }
];

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full cursor-pointer group">
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center gap-2 mb-4">
        <span className={`w-1 h-4 ${item.categoryColor} rounded-full`}></span>
        <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
          {item.category}
        </span>
      </div>
      
      <h3 className="text-gray-800 font-bold text-lg leading-snug mb-auto group-hover:text-[#6c24b5] transition-colors">
        {item.title}
      </h3>
      
      <div className="mt-6 text-gray-300 text-xs font-medium">
        {item.date}
      </div>
    </div>
  </div>
);

const NewsSection: React.FC = () => {
  return (
    <section className="bg-[#f8faff] py-16 px-6 lg:px-20">
      <div className="container mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Վերջին նորությունները
          </h2>
          <button className="flex items-center gap-2 bg-[#f3e8ff] text-[#6c24b5] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#e9d5ff] transition-colors">
            Բոլոր նորությունները
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Grid */}
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