import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, FileText, ChevronRight, Info, Search } from 'lucide-react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase'; // Համոզվիր, որ firebase config-ը ճիշտ է ներմուծված

interface CardBenefit {
  label: string;
  value: string;
  description: string;
}

interface BankCardProps {
  id: number;
  title: string;
  description: string;
  mainImage: string;
  category: string[];
  benefits?: CardBenefit[];
}

const CardSection: React.FC<{ card: BankCardProps }> = ({ card }) => (
  <div className="flex flex-col lg:flex-row items-start gap-8 py-12 border-b border-gray-100 last:border-0 w-full animate-fadeIn">
    <div className="relative w-full lg:w-[420px] flex items-center justify-center">
      <img src={card.mainImage} alt={card.title} className="w-full max-w-[380px] rounded-2xl shadow-xl hover:scale-105 transition-all duration-300" />
    </div>
    <div className="flex-1 w-full">
      <h2 className="text-[28px] font-extrabold text-gray-900 mb-4">{card.title}</h2>
      <p className="text-[14px] text-gray-500 leading-relaxed mb-8 max-w-[650px]">{card.description}</p>
      <div className="flex flex-wrap items-start gap-x-12 gap-y-8">
        {card.benefits?.map((b, i) => (
          <div key={i} className="max-w-[160px]">
            <span className="text-[12px] text-gray-400 block mb-1">{b.label}</span>
            <span className="text-[24px] font-bold text-[#6c24b5] block leading-none">{b.value}</span>
            <p className="text-[11px] text-gray-500 mt-3 leading-snug">{b.description}</p>
          </div>
        ))}
      </div>
      <button className="mt-10 flex items-center gap-3 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-8 py-2.5 rounded-full text-[13px] font-bold transition-all group">
        Մանրամասն <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const CardsPage: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const [cardData, setCardData] = useState<BankCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // --- Firebase Integration ---
  useEffect(() => {
    const cardsRef = ref(db, 'bankCards');
    const unsubscribe = onValue(cardsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const cardsArray: BankCardProps[] = Array.isArray(data)
          ? data.filter(item => item !== null)
          : Object.keys(data).map(key => ({ ...data[key] }));
        setCardData(cardsArray);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase error:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const subNavItems = [
    { label: "Քարտեր", path: "/cards" },
    { label: "Քարտերի տրամադրում և սպասարկում", path: "/card-service" },
    { label: "Սոցիալական ապահովության վճարային քարտեր", path: "/social-cards" },
    { label: "Evoca Benefits", path: "/benefits" },
  ];

  const filteredCards = useMemo(() => {
    if (activeFilter === 'Բոլորը') return cardData;
    return cardData.filter(card => card.category?.includes(activeFilter));
  }, [activeFilter, cardData]);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-lg bg-white">
        Քարտերը բեռնվում են...
      </div>
    );
  }

  const renderContent = () => {
    switch (location.pathname) {
      case "/card-service":
        return (
          <div className="py-10 animate-fadeIn">
            <h2 className="text-2xl font-bold text-center mb-10 text-[#333]">Քարտերի տրամադրում և սպասարկում</h2>
            <div className="space-y-2 max-w-4xl mx-auto">
              {[
                { title: "Կենսաթոշակային քարտեր" },
                { title: "Visa Digital քարտեր (Տեղեկատվական ամփոփագիր)", date: "17.03.2026" },
                { title: "Վճարային քարտերի տրամադրման և սպասարկման պայմաններ", date: "01.02.2026թ" },
                { title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ", date: "16.05.2025" }
              ].map((doc, i) => (
                <div key={i} className="group flex items-center justify-between p-4 bg-[#f8f5ff] hover:bg-[#efeaff] transition-all rounded-sm cursor-pointer border-l-2 border-transparent hover:border-[#6600cc]">
                  <div className="flex items-center space-x-4">
                    <div className="bg-white p-2 rounded shadow-sm group-hover:scale-110 transition-transform">
                      <FileText size={18} className="text-[#6600cc]" />
                    </div>
                    <span className="text-sm font-medium text-[#444]">
                      {doc.title} {doc.date && <span className="ml-2 text-[11px] text-gray-500 font-normal">({doc.date})</span>}
                    </span>
                  </div>
                  <Download size={16} className="text-gray-300 group-hover:text-[#6600cc]" />
                </div>
              ))}
            </div>
          </div>
        );

      case "/social-cards":
        return (
          <div className="py-6 animate-fadeIn max-w-[1100px] mx-auto">
            <div className="bg-[#f8f5ff] rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center mb-12">
              <div className="flex-1 p-8 lg:p-16">
                <h1 className="text-[32px] font-extrabold text-gray-900 leading-tight mb-6">Սոցիալական ապահովության վճարային քարտեր</h1>
                <p className="text-gray-600 text-[15px]">Այսուհետ Դուք կարող եք ստանալ Ձեր կենսաթոշակը կամ սոցիալական նպաստը Evocabank-ի քարտով:</p>
              </div>
              <img src="https://www.evoca.am/images-cache/menu/1/17218011250749/780x585.jpg" className="w-full max-w-[400px] object-contain" alt="Social" />
            </div>
            <div className="px-8 space-y-6 text-gray-700">
               <h2 className="text-xl font-bold">Վճարային քարտերով կատարվող գործառույթները</h2>
               <ul className="space-y-3">
                  {["Կանխիկացում բանկոմատներից", "Անկանխիկ վճարումներ", "Կոմունալ վճարումներ EvocaTOUCH-ով"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600" /> {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        );

      case "/benefits":
        return (
          <div className="py-6 animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-extrabold mb-6">Բացահայտիր Evoca քարտերի բենեֆիթները</h2>
              <div className="max-w-md mx-auto relative">
                <input type="text" placeholder="Որոնել" className="w-full bg-gray-100 rounded-full py-3 px-6 text-sm outline-none focus:ring-2 focus:ring-purple-500" />
                <Search className="absolute right-4 top-3 text-gray-400" size={18} />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <aside className="w-full lg:w-64 space-y-6">
                <h3 className="font-bold border-b pb-2 text-sm uppercase text-gray-400">Ֆիլտրներ</h3>
                <div>
                  <p className="text-xs font-bold mb-3">ՈԼՈՐՏ</p>
                  {['Սնունդ', 'Նվերներ', 'Հանգիստ'].map(f => (
                    <label key={f} className="flex items-center gap-2 mb-2 cursor-pointer text-sm text-gray-600">
                      <input type="checkbox" className="rounded text-purple-600" /> {f}
                    </label>
                  ))}
                </div>
              </aside>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Chronograph", sale: "15%" },
                  { name: "Paul Armenia", sale: "10%" },
                  { name: "Swarovski", sale: "10%" }
                ].map((b, i) => (
                  <div key={i} className="bg-white border rounded-2xl p-6 hover:shadow-lg transition-all group">
                    <div className="h-32 bg-gray-100 rounded-xl mb-4 flex items-center justify-center font-bold text-gray-400 uppercase">{b.name}</div>
                    <p className="text-purple-700 font-black text-xl">{b.sale} {b.name}</p>
                    <Info size={16} className="mt-4 text-gray-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <>
            <div className="flex flex-wrap gap-3 mb-12">
              {['Բոլորը', 'Պրեմիում', 'Նվեր քարտեր', 'Visa', 'Mastercard'].map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-6 py-2 rounded-full text-[13px] font-bold border transition-all ${activeFilter === f ? 'bg-[#6c24b5] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="flex flex-col w-full">
              {filteredCards.length === 0 ? (
                <div className="text-center text-gray-500 py-10">Քարտեր չեն գտնվել:</div>
              ) : (
                filteredCards.map(card => <CardSection key={card.id} card={card} />)
              )}
            </div>
          </>
        );
    }
  };

  return (
    <div className="w-full font-sans bg-white min-h-screen">
      <div className="w-full bg-[#6c24b5] sticky top-0 z-50 shadow-lg">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 flex overflow-x-auto">
          {subNavItems.map((item) => (
            <Link key={item.path} to={item.path} className={`py-5 px-6 text-white text-[13px] font-bold whitespace-nowrap border-b-4 transition-all ${location.pathname === item.path ? 'border-white bg-[#5a1e96]' : 'border-transparent hover:bg-[#5a1e96]'}`}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-8">
        <nav className="flex items-center gap-2 text-[10px] text-gray-400 mb-8 uppercase tracking-widest font-bold">
          <Link to="/">Գլխավոր</Link> <span>/</span>
          <span className="text-gray-900">{subNavItems.find(i => i.path === location.pathname)?.label || 'Քարտեր'}</span>
        </nav>
        {renderContent()}
      </div>
    </div>
  );
};

export default CardsPage;