import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../../lib/firebase'; // Համոզվիր, որ firebase.ts ֆայլի path-ը ճիշտ է

// Տվյալների տիպավորումը
interface Loan {
  id: string;
  title: string;
  description: string;
  duration: string;
  amount: string;
  rate: string;
  imageUrl: string;
}

const BusinessLoans: React.FC = () => {
  // --- States Firebase-ի համար ---
  const [loansData, setLoansData] = useState<Loan[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // --- Տվյալների ստացում բազայից ---
  useEffect(() => {
    const loansRef = ref(db, 'businessLoans');

    const unsubscribe = onValue(loansRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loansArray = Array.isArray(data) 
          ? data.filter(item => item !== null) 
          : Object.keys(data).map(key => ({ id: key, ...data[key] }));
        
        setLoansData(loansArray);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase-ից վարկերի տվյալների ստացման սխալ:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // --- Բեռնման էկրան ---
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-sm sm:text-lg bg-white p-4 text-center">
        Վարկերի տվյալները բեռնվում են...
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen font-sans antialiased">
      {/* Մանուշակագույն Header Banner */}
      <div className="bg-[#6c24b5] py-3 px-4 text-center">
        <h2 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wide">Բիզնես վարկեր</h2>
      </div>

      {/* Breadcrumbs (Scrollable on mobile) */}
      <div className="px-4 md:px-10 lg:px-20 py-4 text-[11px] sm:text-xs text-gray-400 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
        <span className="cursor-pointer hover:text-gray-600">🏠</span> 
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span> 
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Վարկեր</span> 
        <span>›</span>
        <span className="text-gray-800 font-medium">Բիզնես վարկեր</span>
      </div>

      <div className="px-4 md:px-10 lg:px-20 pb-12 sm:pb-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-4 sm:mt-6 mb-6 sm:mb-12 text-center md:text-left">
          Բիզնես վարկեր
        </h1>

        {loansData.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-sm sm:text-base">Վարկեր չեն գտնվել:</div>
        ) : (
          <div className="flex flex-col gap-6 sm:gap-10">
            {loansData.map((loan) => (
              <div 
                key={loan.id} 
                className="flex flex-col lg:flex-row bg-[#f8f9fa] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-gray-100"
              >
                {/* Նկարի հատված (Վերևում՝ mobile-ի համար, ձախ կողմում՝ desktop-ի) */}
                <div className="w-full lg:w-[400px] bg-white flex items-center justify-center p-6 sm:p-8 shrink-0 border-b lg:border-b-0 lg:border-r border-gray-50">
                  <img 
                    src={loan.imageUrl} 
                    alt={loan.title} 
                    className="w-full h-auto object-contain max-h-[160px] sm:max-h-[220px]"
                  />
                </div>

                {/* Տեքստային հատված (Աջ կողմ) */}
                <div className="flex-1 p-5 sm:p-8 lg:p-10 flex flex-col justify-between text-center md:text-left">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight">
                      {loan.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0 text-justify md:text-left">
                      {loan.description}
                    </p>

                    {/* Պարամետրերի Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 text-center sm:text-left">
                      <div className="border-b sm:border-b-0 pb-3 sm:pb-0 border-gray-200/60">
                        <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase font-semibold">Մինչև</p>
                        <p className="text-xl sm:text-2xl font-black text-[#6c24b5]">{loan.duration}</p>
                        <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase font-semibold mt-0.5">Ժամկետ</p>
                      </div>
                      
                      <div className="border-b sm:border-b-0 pb-3 sm:pb-0 border-gray-200/60">
                        <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase font-semibold">Մինչև</p>
                        <p className="text-xl sm:text-2xl font-black text-[#6c24b5]">{loan.amount}</p>
                        <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase font-semibold mt-0.5 leading-tight">
                          Սահմանաչափ կամ <br className="hidden sm:inline" /> համարժեք արտարժույթ
                        </p>
                      </div>

                      <div>
                        {/* Հավասարեցնում ենք մյուսների հետ mobile-ում և desktop-ում */}
                        <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase font-semibold block sm:hidden">Տոկոսադրույք</p>
                        <p className="text-xl sm:text-2xl font-black text-[#6c24b5] sm:mt-5">{loan.rate}</p>
                        <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase font-semibold mt-0.5">
                          {loan.id === "2" ? "Տոկոսադրույքի սուբսիդավորման չափ" : "Տարեկան տոկոսադրույք"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Կոճակ */}
                  <div className="flex justify-center md:justify-start">
                    <button className="w-full sm:w-fit flex items-center justify-center gap-3 bg-[#eee5f8] text-[#6c24b5] px-8 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-[#6c24b5] hover:text-white transition-all duration-300 group">
                      Մանրամասն 
                      <span className="text-[10px] sm:text-[12px] group-hover:translate-x-1 transition-transform">❯</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Օժանդակ ոճեր */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default BusinessLoans;