import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, FileText, ChevronRight, Search, X } from 'lucide-react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase';

// ---------------- Interfaces ----------------
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

// ---------------- ՄԵԿ ՔԱՐՏԻ ՑՈՒՑԱԴՐՈՒՄԸ ԸՆԴՀԱՆՈՒՐ ՑՈՒՑԱԿՈՒՄ ----------------
interface CardSectionProps {
  card: BankCardProps;
  onOpenDetails: (card: BankCardProps) => void;
}

const CardSection: React.FC<CardSectionProps> = ({ card, onOpenDetails }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 py-8 lg:py-12 border-b border-gray-100 last:border-0 w-full animate-fadeIn">
      {/* Քարտի նկարի բլոկ */}
      <div className="relative w-full lg:w-[420px] flex items-center justify-center">
        <img
          src={card.mainImage}
          alt={card.title}
          className="w-full max-w-[280px] sm:max-w-[34px] md:max-w-[380px] rounded-2xl shadow-lg lg:shadow-xl hover:scale-105 transition-all duration-300"
        />
      </div>
      
      {/* Տեքստային բլոկ */}
      <div className="flex-1 w-full text-center lg:text-left mt-4 lg:mt-0">
        <h2 className="text-2xl sm:text-[28px] font-extrabold text-gray-900 mb-3 lg:mb-4">{card.title}</h2>
        <p className="text-xs sm:text-[14px] text-gray-500 leading-relaxed mb-6 lg:mb-8 max-w-[650px] mx-auto lg:mx-0">
          {card.description}
        </p>

        {/* Բենեֆիթներ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap justify-center lg:justify-start gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8">
          {card.benefits?.map((b, i) => (
            <div key={i} className="max-w-[160px] mx-auto lg:mx-0 text-center lg:text-left">
              <span className="text-[11px] sm:text-[12px] text-gray-400 block mb-1">{b.label}</span>
              <span className="text-xl sm:text-[24px] font-bold text-[#6c24b5] block leading-none">{b.value}</span>
              <p className="text-[10px] sm:text-[11px] text-gray-500 mt-2 sm:mt-3 leading-snug">{b.description}</p>
            </div>
          ))}
        </div>

        {/* Կոճակ */}
        <button
          onClick={() => onOpenDetails(card)}
          className="mt-8 lg:mt-10 inline-flex items-center gap-2.5 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all group"
        >
          Մանրամասն <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

// ---------------- ՔԱՐՏԻ ՄԱՆՐԱՄԱՍՆԵՐԻ ՄՈԴԱԼ ՊԱՏՈՒՀԱՆԸ ----------------
interface CardModalProps {
  card: BankCardProps | null;
  onClose: () => void;
}

const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      {/* Մոդալ Պատուհան */}
      <div className="relative bg-white rounded-[24px] sm:rounded-[32px] w-full max-w-5xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto p-5 sm:p-8 md:p-12 shadow-2xl z-10 animate-scaleUp">
        
        {/* Փակելու X կոճակ */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors z-20"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 mt-4">
          
          {/* Ձախ կողմ՝ Տեքստային հատված */}
          <div className="flex-1 space-y-4 sm:space-y-6 w-full text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-[40px] font-black text-gray-900 leading-tight tracking-tight">
              {card.title}
            </h1>
            <p className="text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-medium text-justify md:text-left">
              {card.description}
            </p>

            {/* Բենեֆիթների բլոկը մոդալում */}
            {card.benefits && card.benefits.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 mt-4 border-t border-gray-100 text-left">
                {card.benefits.map((b, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[10px] sm:text-[11px] text-gray-400 block font-semibold">{b.label}</span>
                    <span className="text-lg sm:text-xl font-extrabold text-[#6c24b5] block">{b.value}</span>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 leading-tight font-medium">{b.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Աջ կողմ՝ Քարտի մեծ պատկերը */}
          <div className="w-full md:w-[45%] flex justify-center items-center">
            <img
              src={card.mainImage}
              alt={card.title}
              className="w-full max-w-[24px] sm:max-w-[320px] md:max-w-[420px] h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

// ---------------- ՀԻՄՆԱԿԱՆ ԷՋԻ ԲԱՂԱԴՐԻՉԸ ----------------
const CardsPage: React.FC = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState('Բոլորը');
  const [cardData, setCardData] = useState<BankCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCard, setSelectedCard] = useState<BankCardProps | null>(null);

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
      console.error("Firebase fetch error:", error);
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
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-base sm:text-lg bg-white p-4 text-center">
        Տվյալները բեռնվում են...
      </div>
    );
  }

  const renderContent = () => {
    switch (location.pathname) {
      case "/card-service":
        return (
          <div className="py-4 sm:py-10 animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-10 text-[#333]">Քարտերի տրամադրում և սպասարկում</h2>
            <div className="space-y-3 max-w-4xl mx-auto">
              {[
                { title: "Կենսաթոշակային քարտեր" },
                { title: "Visa Digital քարտեր (Տեղեկատվական ամփոփագիր)", date: "17.03.2026" },
                { title: "Վճարային քարտերի տրամադրման և սպասարկման պայմաններ", date: "01.02.2026թ" },
                { title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ", date: "16.05.2025" }
              ].map((doc, i) => (
                <div key={i} className="group flex items-center justify-between p-3.5 sm:p-4 bg-[#f8f5ff] hover:bg-[#efeaff] transition-all rounded-sm cursor-pointer border-l-2 border-transparent hover:border-[#6600cc] gap-4">
                  <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
                    <div className="bg-white p-2 rounded shadow-sm group-hover:scale-110 transition-transform shrink-0">
                      <FileText size={18} className="text-[#6600cc]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#444] break-words sm:line-clamp-1">
                      {doc.title} {doc.date && <span className="block sm:inline ml-0 sm:ml-2 text-[10px] sm:text-[11px] text-gray-400 font-normal">({doc.date})</span>}
                    </span>
                  </div>
                  <Download size={16} className="text-gray-300 group-hover:text-[#6600cc] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        );

      case "/social-cards":
        return (
          <div className="py-2 animate-fadeIn max-w-[1100px] mx-auto">
            <div className="bg-[#f8f5ff] rounded-[24px] sm:rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center p-6 sm:p-8 lg:p-16 gap-6">
              <div className="flex-1 text-center md:text-left p-0">
                <h1 className="text-2xl sm:text-[32px] font-extrabold text-gray-900 leading-tight mb-4 sm:mb-6">Սոցիալական ապահովության վճարային քարտեր</h1>
                <p className="text-gray-600 text-xs sm:text-[15px] leading-relaxed">Այսուհետ Դուք կարող եք ստանալ Ձեր կենսաթոշակը կամ սոցիալական նպաստը Evocabank-ի քարտով:</p>
              </div>
              <img src="https://www.evoca.am/images-cache/menu/1/17218011250749/780x585.jpg" className="w-full max-w-[280px] sm:max-w-[340px] object-contain rounded-xl" alt="Social" />
            </div>
          </div>
        );

      case "/benefits":
        return (
          <div className="py-4 animate-fadeIn">
            <div className="text-center mb-8">
              <h2 className="text-xl sm:text-2xl font-extrabold mb-4 sm:mb-6">Բացահայտիր Evoca քարտերի բենեֆիթները</h2>
              <div className="max-w-md mx-auto relative px-1">
                <input type="text" placeholder="Որոնել" className="w-full bg-gray-100 rounded-full py-2.5 sm:py-3 px-5 sm:px-6 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-purple-500" />
                <Search className="absolute right-4 top-2.5 sm:top-3.5 text-gray-400" size={16} />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <>
            {/* Ֆիլտրերի ցանկ */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center sm:justify-start">
              {['Բոլորը', 'Պրեմիում', 'Նվեր քարտեր', 'Visa', 'Mastercard'].map((f) => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-bold border transition-all ${activeFilter === f ? 'bg-[#6c24b5] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                  {f}
                </button>
              ))}
            </div>

            {/* Քարտերի արտածում */}
            <div className="flex flex-col w-full">
              {filteredCards.length === 0 ? (
                <div className="text-center text-gray-500 py-10 text-sm">Քարտեր չեն գտնվել:</div>
              ) : (
                filteredCards.map(card => (
                  <CardSection 
                    key={card.id} 
                    card={card} 
                    onOpenDetails={(selected) => setSelectedCard(selected)} 
                  />
                ))
              )}
            </div>
          </>
        );
    }
  };

  return (
    <div className="w-full font-sans bg-[#faf9fc] min-h-screen antialiased">
      {/* Մանուշակագույն վերևի սթիքի մենյու */}
      <div className="w-full bg-[#6c24b5] sticky top-0 z-50 shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 flex overflow-x-auto scrollbar-none">
          {subNavItems.map((item) => {
            const isActive = item.path === "/cards" 
              ? location.pathname === "/cards"
              : location.pathname.startsWith(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`py-4 sm:py-5 px-4 sm:px-6 text-white text-xs sm:text-[13px] font-bold whitespace-nowrap border-b-4 transition-all ${
                  isActive ? 'border-white bg-[#5a1e96]' : 'border-transparent hover:bg-[#5a1e96]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Հիմնական սպիտակ ֆոնով բովանդակության բլոկը */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-20 py-6 sm:py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-gray-400 mb-6 sm:mb-12 uppercase tracking-widest font-bold px-1">
          <Link to="/">Գլխավոր</Link> <span>/</span>
          <Link to="/cards" className="text-gray-900">Քարտեր</Link>
        </nav>

        {/* Բովանդակության սպիտակ բլոկ */}
        <div className="bg-white rounded-[20px] sm:rounded-[32px] p-4 sm:p-8 md:p-16 shadow-[0_4px_40px_rgba(0,0,0,0.01)] min-h-[400px]">
          {renderContent()}
        </div>
      </div>

      {/* Մանրամասների Մոդալ */}
      <CardModal 
        card={selectedCard} 
        onClose={() => setSelectedCard(null)} 
      />
    </div>
  );
};

export default CardsPage;