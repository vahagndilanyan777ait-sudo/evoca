import React from 'react';

// 1. Տվյալների տիպերի սահմանում
interface NewsCardProps {
  id: number;
  category: string;
  title: string;
  date: string;
  imageUrl: string;
  description?: string;
  isMain?: boolean;
}

const NewsSection: React.FC = () => {
  // 2. Տվյալները (ըստ պատկերի բովանդակության)
  const newsData: NewsCardProps[] = [
    {
      id: 1,
      category: "Պրոդուկտներ",
      title: "Ձեռք բեր քո երազանքների բնակարանը 12%-ով",
      description: "Մինչև մայիսի 20-ը Evocabank-ի և ԱՐԱ շրջանակում ձեռք բեր բնակարան երկրորդային շուկայից 12%-ով՝ նախկին 13%-ի փոխարեն:",
      date: "28.03.2025",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17429755745448/780x585.png", // Փոխարինիր իրական հղումով
      isMain: true
    },
    {
      id: 2,
      category: "Բանկային",
      title: "Evocabank-ը մասնակցել է Miami-Dubai Chamber of Commerce-ին",
      date: "04.02.2025",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17386587462914/438x328.png"
    },
    {
      id: 3,
      category: "Բանկային",
      title: "Evocabank. 2024 թվականի ամփոփում",
      date: "17.01.2025",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17371104329802/438x328.jpg"
    },
    {
      id: 4,
      category: "Բանկային",
      title: "Evocabank-ը կներգրավի 10 մլն ԱՄՆ դոլար BSTDB-ից",
      date: "13.10.2024",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17304388351704/438x328.png"
    }
  ];

  const mainNews = newsData.find(n => n.isMain);
  const secondaryNews = newsData.filter(n => !n.isMain);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ԳԼԽԱՎՈՐ ՆՈՐՈՒԹՅՈՒՆ (Banner Style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-24">
          {/* Նկարը մանուշակագույն անկյուններով */}
          <div className="relative order-1 lg:order-1">
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-8 border-r-8 border-[#e100ff] z-10" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-8 border-r-8 border-[#e100ff] z-10" />
            <div className="overflow-hidden rounded-sm shadow-xl">
              <img 
                src={mainNews?.imageUrl} 
                alt="Main Promo" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Տեքստային մասը */}
          <div className="order-2 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-4 bg-[#e100ff] rounded-sm" />
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                {mainNews?.category}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] leading-tight">
              {mainNews?.title}
            </h2>
            <p className="text-[#4a4a4a] text-lg leading-relaxed max-w-lg font-medium">
              {mainNews?.description}
            </p>
            <div className="text-gray-300 text-sm font-bold">
              {mainNews?.date}
            </div>
          </div>
        </div>

        {/* ՓՈՔՐ ՆՈՐՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆՑ (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {secondaryNews.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-5 shadow-md">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-3 bg-[#6c24b5]" />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
                <h4 className="text-[14px] md:text-[15px] font-extrabold text-[#1a1a1a] leading-snug line-clamp-2 min-h-[40px]">
                  {item.title}
                </h4>
                <span className="block text-gray-300 text-[11px] font-bold pt-2">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsSection;