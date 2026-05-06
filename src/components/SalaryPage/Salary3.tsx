import React from 'react';

// Ինտերֆեյս քարտի տվյալների համար
interface NewsItem {
  id: number;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  date: string;
}

const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full cursor-pointer group">
    {/* Նկարի հատված */}
    <div className="relative h-48 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    {/* Բովանդակություն */}
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-1 h-4 rounded-full ${item.categoryColor}`} />
        <span className="text-[12px] font-bold text-gray-800 uppercase tracking-wider">
          {item.category}
        </span>
      </div>
      
      <h3 className="text-[14px] font-bold text-gray-900 leading-snug mb-4 flex-grow line-clamp-2">
        {item.title}
      </h3>
      
      <span className="text-[11px] text-gray-400 font-medium">
        {item.date}
      </span>
    </div>
  </div>
);

const LatestNewsSection: React.FC = () => {
  const newsData: NewsItem[] = [
    {
      id: 1,
      image: "https://www.evoca.am/images-cache/news/1/17780463751358/439x320.png",
      category: "Բանկային",
      categoryColor: "bg-[#6c24b5]",
      title: "Evocabank-ը և Proparco-AFD-ն ստորագրել են 20 միլիոն եվրոյի...",
      date: "06.05.2026"
    },
    {
      id: 2,
      image: "https://www.evoca.am/images-cache/news/1/1776423301974/439x320.png",
      category: "Կորպորատիվ",
      categoryColor: "bg-[#4ade80]",
      title: "Evocabank-ը մասնակցում է CCF 2026-ին",
      date: "17.04.2026"
    },
    {
      id: 3,
      image: "https://www.evoca.am/images-cache/news/1/1776162446379/439x320.png",
      category: "Բանկային",
      categoryColor: "bg-[#6c24b5]",
      title: "Կարեն Եղիազարյանը՝ IMF և WBG Spring Meetings 2026-ին",
      date: "13.04.2026"
    }
  ];

  return (
    <section className="bg-[#f4f7fa] py-16 px-6 rounded-[40px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Վերնագիր և կոճակ */}
        <div className="flex flex-col md:flex-row items-center justify-center relative mb-12">
          <h2 className="text-[24px] md:text-[28px] font-black text-gray-900 tracking-tight">
            Վերջին նորությունները
          </h2>
          
          <button className="md:absolute md:right-0 mt-4 md:mt-0 flex items-center gap-2 bg-[#e8eaf6] text-[#6c24b5] px-5 py-2 rounded-full text-[12px] font-bold hover:bg-[#dee1f0] transition-colors">
            Բոլոր նորությունները
            <span className="text-[16px] leading-none">›</span>
          </button>
        </div>

        {/* Քարտերի ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <NewsCard key={news.id} item={news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;