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
        // Եթե տվյալները գալիս են որպես օբյեկտ (Firebase-ի առանձնահատկությունն է երբեմն), 
        // վերածում ենք զանգվածի, հակառակ դեպքում ուղղակի դնում ենք զանգվածը
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
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-lg bg-white">
        Վարկերի տվյալները բեռնվում են...
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen font-sans">
      {/* Մանուշակագույն Header Banner */}
      <div className="bg-[#6c24b5] py-3 text-center">
        <h2 className="text-white text-sm font-bold uppercase tracking-wide">Բիզնես վարկեր</h2>
      </div>

      {/* Breadcrumbs */}
      <div className="px-4 lg:px-20 py-4 text-xs text-gray-400 flex items-center gap-2">
        <span className="cursor-pointer hover:text-gray-600">🏠</span> 
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span> 
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Վարկեր</span> 
        <span>›</span>
        <span className="text-gray-800 font-medium">Բիզնես վարկեր</span>
      </div>

      <div className="px-4 lg:px-20 pb-20">
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-12">Բիզնես վարկեր</h1>

        {loansData.length === 0 ? (
          <div className="text-center text-gray-500 py-10">Վարկեր չեն գտնվել:</div>
        ) : (
          <div className="flex flex-col gap-10">
            {loansData.map((loan) => (
              <div 
                key={loan.id} 
                className="flex flex-col md:flex-row bg-[#f8f9fa] rounded-3xl overflow-hidden shadow-sm border border-gray-100"
              >
                {/* Նկարի հատված (Ձախ կողմ) */}
                <div className="md:w-[400px] bg-white flex items-center justify-center p-8 shrink-0">
                  <img 
                    src={loan.imageUrl} 
                    alt={loan.title} 
                    className="w-full h-auto object-contain max-h-[220px]"
                  />
                </div>

                {/* Տեքստային հատված (Աջ կողմ) */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                      {loan.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-2xl">
                      {loan.description}
                    </p>

                    {/* Պարամետրերի Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-semibold">Մինչև</p>
                        <p className="text-2xl font-black text-[#6c24b5]">{loan.duration}</p>
                        <p className="text-[11px] text-gray-400 uppercase font-semibold mt-1">Ժամկետ</p>
                      </div>
                      
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-semibold">Մինչև</p>
                        <p className="text-2xl font-black text-[#6c24b5]">{loan.amount}</p>
                        <p className="text-[11px] text-gray-400 uppercase font-semibold mt-1 leading-tight">
                          Սահմանաչափ կամ <br /> համարժեք արտարժույթ
                        </p>
                      </div>

                      <div>
                        <p className="text-2xl font-black text-[#6c24b5] mt-5">{loan.rate}</p>
                        <p className="text-[11px] text-gray-400 uppercase font-semibold mt-1">
                          {loan.id === "2" ? "Տոկոսադրույքի սուբսիդավորման չափ" : "Տարեկան տոկոսադրույք"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Կոճակ */}
                  <button className="w-fit flex items-center gap-3 bg-[#eee5f8] text-[#6c24b5] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#6c24b5] hover:text-white transition-all duration-300 group">
                    Մանրամասն 
                    <span className="text-[12px] group-hover:translate-x-1 transition-transform">❯</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessLoans;