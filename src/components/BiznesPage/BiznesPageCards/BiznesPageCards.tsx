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

  // --- State Մոդալ Պատուհանի համար ---
  const [activeLoan, setActiveLoan] = useState<Loan | null>(null);

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
    <section className="bg-white min-h-screen font-sans antialiased relative">
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
                {/* Նկարի հատված */}
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
                        <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase font-semibold block sm:hidden">Տոկոսադրույք</p>
                        <p className="text-xl sm:text-2xl font-black text-[#6c24b5] sm:mt-5">{loan.rate}</p>
                        <p className="text-[10px] sm:text-[11px] text-gray-400 uppercase font-semibold mt-0.5">
                          {loan.id === "2" ? "Տոկոսադրույքի սուբսիդավորման չափ" : "Տարեկան տոկոսադրույք"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Կոճակ՝ սեղմելիս բացում է Մոդալը */}
                  <div className="flex justify-center md:justify-start">
                    <button 
                      onClick={() => setActiveLoan(loan)}
                      className="w-full sm:w-fit flex items-center justify-center gap-3 bg-[#eee5f8] text-[#6c24b5] px-8 py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-[#6c24b5] hover:text-white transition-all duration-300 group"
                    >
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

      {/* --- ԴԻՆԱՄԻԿ ՄՈԴԱԼ ՊԱՏՈՒՀԱՆ --- */}
      {activeLoan && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 font-sans antialiased animate-fadeInFast">
          {/* Մոդալի արտաքին ստվերով բլոկը */}
          <div className="relative bg-white w-full max-w-[1000px] rounded-[32px] p-6 sm:p-12 flex flex-col md:flex-row gap-8 items-center shadow-2xl animate-scaleUp max-h-[90vh] overflow-y-auto md:overflow-hidden">
            
            {/* Փակելու Կոճակ (X) */}
            <button 
              onClick={() => setActiveLoan(null)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 rounded-full transition-colors z-20"
            >
              ✕
            </button>

            {/* Ձախ Կողմ՝ Տեքստային բովանդակություն */}
            <div className="flex-1 space-y-6 pt-4 md:pt-0 w-full">
              <div>
                <h2 className="text-2xl sm:text-[32px] font-black text-gray-900 tracking-tight mb-4 leading-tight">
                  {activeLoan.title}
                </h2>
                <p className="text-xs sm:text-[15px] text-gray-600 leading-relaxed font-normal text-justify md:text-left">
                  {activeLoan.description}
                </p>
              </div>

              <hr className="border-gray-100" />

              {/* Պարամետրերի Grid-ը մոդալի ներսում */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                {/* Գումար / Սահմանաչափ */}
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-bold uppercase block">
                    ԳՈՒՄԱՐ / ՍԱՀՄԱՆԱՉԱՓ
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#6c24b5] block">
                    {activeLoan.amount}
                  </span>
                </div>

                {/* Ժամկետ */}
                <div className="space-y-1">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-bold uppercase block">
                    ԺԱՄԿԵՏ
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#6c24b5] block">
                    {activeLoan.duration}
                  </span>
                </div>

                {/* Տոկոսադրույք */}
                <div className="space-y-1 col-span-2">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-bold uppercase block">
                    ՏՈԿՈՍԱԴՐՈՒՅՔ
                  </span>
                  <span className="text-xl sm:text-2xl font-black text-[#6c24b5] block">
                    {activeLoan.rate}
                  </span>
                </div>
              </div>
            </div>

            {/* Աջ Կողմ՝ Նկար և Դիմելու կոճակ */}
            <div className="flex-1 w-full flex flex-col items-center justify-center bg-[#f8f9fa] md:bg-white p-4 md:p-0 rounded-2xl md:rounded-none">
              <div className="w-full max-w-[360px] flex items-center justify-center p-4">
                <img
                  src={activeLoan.imageUrl}
                  alt={activeLoan.title}
                  className="w-full h-auto object-contain max-h-[220px] drop-shadow-xl"
                />
              </div>

              {/* Օնլայն Դիմելու Կոճակ */}
              <button className="mt-6 w-full max-w-[280px] bg-[#6c24b5] hover:bg-[#5a1e96] text-white font-bold text-sm py-3.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 text-center">
                Դիմել Օնլայն
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Օժանդակ ոճեր և Անիմացիաներ */}
      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fadeInFast { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
        
        .animate-fadeInFast { animation: fadeInFast 0.2s ease-out forwards; }
        .animate-scaleUp { animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
};

export default BusinessLoans;