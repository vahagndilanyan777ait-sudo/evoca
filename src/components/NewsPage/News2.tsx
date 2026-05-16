import React from 'react';
import { useTranslation } from 'react-i18next';

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

const NewsGrid: React.FC = () => {
  const { t } = useTranslation();

  // 2. Տվյալները կոմպոնենտի ներսում (թարգմանության պատրաստ)
  const newsData: NewsItem[] = [
    {
      id: 1,
      category: t('news.cat.products', 'Պրոդուկտներ'),
      title: "Վճարիր Evoca Mastercard-ով և մասնակցիր մեքենայի խաղարկությանը",
      description: "Կատարիր անկանխիկ վճարումներ Evoca Mastercard-ով և շահիր IM LS6 RWD էլեկտրական մեքենա ու այլ արժեքավոր մրցանակներ:",
      date: "01.04.2025",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17545729507567/616x462.png",
      isLarge: true
    },
    {
      id: 2,
      category: t('news.cat.awards', 'Մրցանակներ'),
      title: "2 նոր մրցանակ Evocabank-ին Global Business & Finance-ի կողմից",
      date: "30.01.2025",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17382449387143/450x295.png"
    },
    {
      id: 3,
      category: t('news.cat.banking', 'Բանկային'),
      title: "Համագործակցության նոր ֆորմատ Evoca-ի, ՀՊՏՀ-ի և...",
      date: "20.01.2025",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17373763573222/450x295.jpg"
    },
    {
      id: 4,
      category: t('news.cat.banking', 'Բանկային'),
      title: "Evocabank-ը և IFC-ն համագործակցության...",
      date: "11.12.2024",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17339403687437/450x295.jpg"
    },
    {
      id: 5,
      category: t('news.cat.awards', 'Մրցանակներ'),
      title: "2 նոր մրցանակ Global Business and Finance Magazine-ի կողմից",
      date: "01.02.2024",
      imageUrl: "https://www.evoca.am/images-cache/news/1/17067716894602/450x295.png"
    }
  ];

  const mainNews = newsData.find(item => item.isLarge);
  const sideNews = newsData.filter(item => !item.isLarge);

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-20 font-sans overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Հետնաֆոնային էլեգանտ տեքստ "Բաց մի թող" */}
        <div className="absolute -top-16 left-0 right-0 pointer-events-none select-none z-0 hidden md:block">
          <h2 
            className="text-[90px] lg:text-[130px] font-black text-transparent uppercase tracking-wider opacity-60 leading-none whitespace-nowrap"
            style={{ WebkitTextStroke: '1px #f1f3f9' }}
          >
            {t('news.dontMiss', 'Բաց մի թող')}
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 relative z-10">
          
          {/* ՁԱԽ ԿՈՂՄ: Գլխավոր մեծ նորությունը (5/12 սյունակ) */}
          {mainNews && (
            <div className="lg:col-span-5 flex flex-col group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                {/* Մանուշակագույն/Վարդագույն դեկորատիվ անկյուն */}
                <div className="absolute top-0 left-0 w-14 h-14 border-t-[6px] border-l-[6px] border-[#e100ff] z-20 pointer-events-none rounded-tl-sm" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-[6px] border-r-[6px] border-[#e100ff] z-20 pointer-events-none rounded-tr-sm" />
                
                <img 
                  src={mainNews.imageUrl} 
                  alt={mainNews.title} 
                  className="w-full h-[300px] sm:h-[400px] lg:h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/[0.02] transition-colors duration-500" />
              </div>

              <div className="space-y-3.5 px-1">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3.5 bg-[#e100ff] rounded-full" />
                  <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                    {mainNews.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-950 leading-tight group-hover:text-[#6c24b5] transition-colors duration-300">
                  {mainNews.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                  {mainNews.description}
                </p>
                <span className="block text-gray-400 text-xs font-bold tracking-wide pt-2">
                  {mainNews.date}
                </span>
              </div>
            </div>
          )}

          {/* ԱՋ ԿՈՂՄ: Փոքր նորությունների ցանցը (7/12 սյունակ) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 lg:pt-2">
            {sideNews.map((item) => (
              <div key={item.id} className="flex flex-col group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-48 sm:h-44 md:h-48 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-purple-950/0 group-hover:bg-purple-950/[0.01] transition-colors duration-500" />
                </div>

                <div className="space-y-2.5 px-1">
                  <div className="flex items-center gap-2">
                    <span className="w-1 h-3 bg-[#6c24b5] rounded-full" />
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
      </div>
    </section>
  );
};

export default NewsGrid;