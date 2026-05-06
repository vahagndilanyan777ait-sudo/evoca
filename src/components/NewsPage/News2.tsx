import React from 'react';

// 1. Տվյալների տիպերի սահմանում
interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  imageUrl: string;
  description?: string;
  isLarge?: boolean;
}

// 2. Տվյալները (ըստ պատկերի)
const newsData: NewsItem[] = [
  {
    id: 1,
    category: "Պրոդուկտներ",
    title: "Վճարիր Evoca Mastercard-ով և մասնակցիր մեքենայի խաղարկությանը",
    description: "Կատարիր անկանխիկ վճարումներ Evoca Mastercard-ով և շահիր IM LS6 RWD էլեկտրական մեքենա ու այլ մրցանակներ:",
    date: "01.04.2025",
    imageUrl: "https://www.evoca.am/images-cache/news/1/17545729507567/616x462.png", // Փոխարինիր իրական հղումով
    isLarge: true
  },
  {
    id: 2,
    category: "Մրցանակներ",
    title: "2 նոր մրցանակ Evocabank-ին Global Business & Finance-ի կողմից",
    date: "30.01.2025",
    imageUrl: "https://www.evoca.am/images-cache/news/1/17382449387143/450x295.png"
  },
  {
    id: 3,
    category: "Բանկային",
    title: "Համագործակցության նոր ֆորմատ Evoca-ի, ՀՊՏՀ-ի և...",
    date: "20.01.2025",
    imageUrl: "https://www.evoca.am/images-cache/news/1/17373763573222/450x295.jpg"
  },
  {
    id: 4,
    category: "Բանկային",
    title: "Evocabank-ը և IFC-ն համագործակցության...",
    date: "11.12.2024",
    imageUrl: "https://www.evoca.am/images-cache/news/1/17339403687437/450x295.jpg"
  },
  {
    id: 5,
    category: "Մրցանակներ",
    title: "2 նոր մրցանակ Global Business and Finance Magazine-ի կողմից",
    date: "01.02.2024",
    imageUrl: "https://www.evoca.am/images-cache/news/1/17067716894602/450x295.png"
  }
];

const NewsGrid: React.FC = () => {
  const mainNews = newsData.find(item => item.isLarge);
  const sideNews = newsData.filter(item => !item.isLarge);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Հետնաֆոնային տեքստ "Բաց մի թող" */}
        <div className="relative mb-12">
          <h2 className="text-[60px] md:text-[100px] font-black text-gray-100 absolute -top-10 -left-2 select-none z-0 leading-none">
            Բաց մի թող
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
          
          {/* ՁԱԽ ԿՈՂՄ: Գլխավոր մեծ նորությունը (5/12 սյունակ) */}
          <div className="lg:col-span-5 flex flex-col group cursor-pointer">
            <div className="relative overflow-hidden rounded-sm mb-6">
              {/* Մանուշակագույն դեկորատիվ անկյուն */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-[12px] border-l-[12px] border-[#e100ff] z-10" />
              <img 
                src={mainNews?.imageUrl} 
                alt="Main News" 
                className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#e100ff]" />
                <span className="text-sm font-bold text-gray-600 uppercase tracking-wider">{mainNews?.category}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight">
                {mainNews?.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                {mainNews?.description}
              </p>
              <span className="block text-gray-300 text-xs font-bold">{mainNews?.date}</span>
            </div>
          </div>

          {/* ԱՋ ԿՈՂՄ: Փոքր նորությունների ցանցը (7/12 սյունակ) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {sideNews.map((item) => (
              <div key={item.id} className="flex flex-col group cursor-pointer">
                <div className="overflow-hidden rounded-sm mb-4">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-3 bg-[#6c24b5]" />
                    <span className="text-[11px] font-bold text-gray-600 uppercase tracking-widest">{item.category}</span>
                  </div>
                  <h4 className="text-[15px] font-extrabold text-[#1a1a1a] leading-snug line-clamp-2 h-10">
                    {item.title}
                  </h4>
                  <span className="block text-gray-300 text-[11px] font-bold pt-2">{item.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsGrid;