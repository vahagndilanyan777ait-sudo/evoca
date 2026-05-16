import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase'; // Համոզվիր, որ քո firebase.ts ֆայլի path-ը ճիշտ է

// 1. Տվյալների տիպերի սահմանում
interface BestArticle {
  id: number;
  category: string;
  title: string;
  date?: string;
  imageUrl: string;
  description?: string;
  isMain?: boolean;
}

const BestSection: React.FC = () => {
  // --- States Firebase-ի տվյալների համար ---
  const [articles, setArticles] = useState<BestArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // --- Տվյալների ստացում բազայից ---
  useEffect(() => {
    const articlesRef = ref(db, 'bestArticles');

    const unsubscribe = onValue(articlesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const articlesArray: BestArticle[] = Array.isArray(data)
          ? data.filter(item => item !== null)
          : Object.keys(data).map(key => ({ ...data[key] }));
        
        setArticles(articlesArray);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase-ից հոդվածների ստացման սխալ:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Գլխավոր (Banner) և ստորին (Grid) հոդվածների առանձնացում
  const mainItem = articles.find(a => a.isMain);
  const bottomItems = articles.filter(a => !a.isMain);

  // --- Բեռնման էկրան ---
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#2d004d] font-bold text-base sm:text-lg bg-white p-4 text-center">
        Լավագույն նյութերը բեռնվում են...
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 md:px-10 lg:px-20 font-sans antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Հետնաֆոնային տեքստ "Լավագույն" (Responsive չափսերով) */}
        <div className="relative h-10 sm:h-16 md:h-20 mb-6 sm:mb-8 select-none">
          <h2 className="text-[44px] sm:text-[80px] md:text-[100px] font-black text-gray-50 absolute -top-4 sm:-top-10 md:-top-12 left-0 whitespace-nowrap opacity-70 tracking-tight">
            Լավագույն
          </h2>
        </div>

        {articles.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-sm sm:text-base">Նյութեր չեն գտնվել:</div>
        ) : (
          <>
            {/* ԳԼԽԱՎՈՐ ԲԼՈԿ (Banner) */}
            {mainItem && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10 mb-12 sm:mb-20">
                {/* Նկարը սև դեկորատիվ անկյուններով */}
                <div className="lg:col-span-7 relative group px-2 sm:px-0">
                  {/* Անկյունային դեկորներ, որոնք մոբայլում մի փոքր ավելի սեղմ են */}
                  <div className="absolute -top-2.5 -right-1 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 border-t-[5px] sm:border-t-8 border-r-[5px] sm:border-r-8 border-[#1a1a1a] z-10" />
                  <div className="absolute -bottom-2.5 -right-1 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 border-b-[5px] sm:border-b-8 border-r-[5px] sm:border-r-8 border-[#1a1a1a] z-10" />
                  
                  <div className="overflow-hidden rounded-sm bg-gray-50 shadow-sm">
                    <img 
                      src={mainItem.imageUrl} 
                      alt={mainItem.title} 
                      className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                {/* Տեքստային մասը */}
                <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#2d004d] rounded-sm shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-gray-600 uppercase tracking-wider">
                      {mainItem.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-[#1a1a1a] leading-tight max-w-xl mx-auto md:mx-0">
                    {mainItem.title}
                  </h3>
                  {mainItem.description && (
                    <p className="text-[#555] text-sm sm:text-[16px] leading-relaxed max-w-xl mx-auto md:mx-0 font-medium text-justify md:text-left">
                      {mainItem.description}
                    </p>
                  )}
                  {mainItem.date && (
                    <div className="text-gray-400 text-xs sm:text-sm font-bold tracking-wide pt-1">
                      {mainItem.date}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ՍՏՈՐԻՆ ՑԱՆՑ (Grid) */}
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 ${!mainItem ? 'lg:grid-cols-4' : ''}`}>
              {bottomItems.map((item) => (
                <div key={item.id} className="flex flex-col group cursor-pointer justify-between">
                  <div>
                    <div className="overflow-hidden rounded-sm mb-4 aspect-video shadow-sm bg-gray-50">
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-0.5 h-3 bg-[#6c24b5]" />
                        <span className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-[14px] font-extrabold text-[#1a1a1a] leading-snug sm:line-clamp-2 h-auto sm:h-10 group-hover:text-[#6c24b5] transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default BestSection;