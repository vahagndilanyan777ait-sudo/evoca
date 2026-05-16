import React from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  // Տվյալների բազան թարգմանության պատրաստ կառուցվածքով
  const newsData: NewsCardProps[] = [
    {
      id: 1,
      category: t('news.cat.products', 'Պրոդուկտներ'),
      title: "Ձեռք բեր քո երազանքների բնակարանը 12%-ով",
      description: "Մինչև մայիսի 20-ը Evocabank-ի և ԱՐԱ շրջանակում ձեռք բեր բնակարան երկրորդային շուկայից 12%-ով՝ նախկին 13%-ի փոխարեն:",
      date: "28.03.2025",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17429755745448/780x585.png",
      isMain: true
    },
    {
      id: 2,
      category: t('news.cat.banking', 'Բանկային'),
      title: "Evocabank-ը մասնակցել է Miami-Dubai Chamber of Commerce-ին",
      date: "04.02.2025",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17386587462914/438x328.png"
    },
    {
      id: 3,
      category: t('news.cat.banking', 'Բանկային'),
      title: "Evocabank. 2024 թվականի ամփոփում",
      date: "17.01.2025",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17371104329802/438x328.jpg"
    },
    {
      id: 4,
      category: t('news.cat.banking', 'Բանկային'),
      title: "Evocabank-ը կներգրավի 10 մլն ԱՄՆ դոլար BSTDB-ից",
      date: "13.10.2024",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17304388351704/438x328.png"
    }
  ];

  const mainNews = newsData.find(n => n.isMain);
  const secondaryNews = newsData.filter(n => !n.isMain);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-10 lg:px-20 font-sans antialiased border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* ԳԼԽԱՎՈՐ ՆՈՐՈՒԹՅՈՒՆ (Banner Style - 50/50 Split) */}
        {mainNews && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-28">
            
            {/* Ձախ կողմ: Տեքստային մասը (5/12 սյունակ) */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-5 px-1">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-4 bg-[#e100ff] rounded-full shadow-sm" />
                <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                  {mainNews.category}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 leading-tight tracking-tight hover:text-[#6c24b5] transition-colors cursor-pointer">
                {mainNews.title}
              </h2>
              
              <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-xl">
                {mainNews.description}
              </p>
              
              <div className="text-gray-400 text-xs sm:text-sm font-bold tracking-wide pt-2">
                {mainNews.date}
              </div>
            </div>

            {/* Աջ կողմ: Նկարը մանուշակագույն անկյուններով (7/12 սյունակ) */}
            <div className="lg:col-span-7 order-1 lg:order-2 group relative px-2 sm:px-0">
              {/* Դեկորատիվ անկյուններ աջ կողմում */}
              <div className="absolute -top-3 -right-1 sm:-right-3 w-10 h-10 border-t-[6px] border-r-[6px] border-[#e100ff] z-20 pointer-events-none rounded-tr-sm" />
              <div className="absolute -bottom-3 -right-1 sm:-right-3 w-6 h-6 border-b-[6px] border-r-[6px] border-[#e100ff] z-20 pointer-events-none rounded-br-sm" />
              
              <div className="overflow-hidden rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] bg-gray-50 border border-gray-100">
                <img 
                  src={mainNews.imageUrl} 
                  alt={mainNews.title} 
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/[0.01] transition-colors duration-500 pointer-events-none" />
              </div>
            </div>

          </div>
        )}

        {/* ՓՈՔՐ ՆՈՐՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆՑ (3 Սյունակ) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {secondaryNews.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Container */}
              <div className="overflow-hidden rounded-xl mb-4.5 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-gray-100/30 relative">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-52 sm:h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/[0.01] transition-colors duration-500" />
              </div>
              
              {/* Details Content */}
              <div className="space-y-2.5 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3.5 bg-[#6c24b5] rounded-full" />
                  <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
                
                <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem] group-hover:text-[#6c24b5] transition-colors duration-300">
                  {item.title}
                </h4>
                
                <span className="block text-gray-400 text-[11px] font-bold tracking-wider pt-1">
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