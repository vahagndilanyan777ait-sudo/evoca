import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Info, X } from 'lucide-react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase'; // Համոզվիր, որ այս ֆայլը ճիշտ կոնֆիգուրացված է քո նախագծում

// --- Types ---
interface DepositBenefit {
  label: string;
  value: string;
  subValue?: string;
}

interface DepositCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  benefits: DepositBenefit[];
}

// --- Sub-Components ---
const DepositSection: React.FC<{ 
  deposit: DepositCardProps; 
  onDetailsClick: (deposit: DepositCardProps) => void; 
}> = ({ deposit, onDetailsClick }) => (
  <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 py-8 lg:py-16 border-b border-gray-100 last:border-0 w-full animate-fadeIn">
    {/* Image Container */}
    <div className="w-full lg:w-[450px] shrink-0 max-w-md lg:max-w-none mx-auto lg:mx-0">
      <img 
        src={deposit.image} 
        alt={deposit.title} 
        className="w-full h-auto rounded-[24px] lg:rounded-[32px] shadow-lg object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    
    {/* Content Container */}
    <div className="flex-1 w-full text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-gray-900 mb-3 lg:mb-4">{deposit.title}</h2>
      <p className="text-sm sm:text-[15px] text-gray-500 leading-relaxed mb-6 lg:mb-10 max-w-[700px] mx-auto lg:mx-0">{deposit.description}</p>
      
      {/* Benefits Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6 gap-x-4 mb-8 lg:mb-10 text-left">
        {deposit.benefits?.map((benefit, idx) => (
          <div key={idx} className="flex flex-col justify-between">
            <span className="text-[11px] sm:text-[12px] text-gray-400 block mb-1 sm:mb-2 min-h-[32px] lg:min-h-0">{benefit.label}</span>
            <div className="flex items-baseline gap-1 text-[#6c24b5]">
              <span className="text-2xl sm:text-[28px] font-bold leading-none">{benefit.value}</span>
              {benefit.subValue && <span className="text-base sm:text-[20px] font-bold">{benefit.subValue}</span>}
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => onDetailsClick(deposit)}
        className="inline-flex items-center gap-2 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-8 lg:px-10 py-3 rounded-full text-xs sm:text-[14px] font-bold transition-all group"
      >
        Մանրամասն <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

// --- Main Page Component ---
const EvocaDepositsPage: React.FC = () => {
  const location = useLocation();

  const subNavItems = [
    { label: "Ավանդներ", path: "/deposits" },
    { label: "Կարևոր տեղեկատվություն", path: "/deposits-info" },
  ];

  // --- Firebase-ի States ---
  const [depositData, setDepositData] = useState<DepositCardProps[]>([]);
  const [generalProvisions, setGeneralProvisions] = useState<string[]>([]);
  const [requiredInfo, setRequiredInfo] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Մոդալ Պատուհանի States ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeposit, setSelectedDeposit] = useState<DepositCardProps | null>(null);

  // --- Տվյալների ստացում Realtime Database-ից ---
  useEffect(() => {
    const dbRef = ref(db);

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        if (data.depositData) setDepositData(data.depositData);
        if (data.depositGeneralProvisions) setGeneralProvisions(data.depositGeneralProvisions);
        if (data.depositRequiredInfo) setRequiredInfo(data.depositRequiredInfo);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase-ից տվյալների ներբեռնման սխալ:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Մանրամասն կոճակի սեղմման ֆունկցիա
  const handleOpenModal = (deposit: DepositCardProps) => {
    setSelectedDeposit(deposit);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Արգելափակում ենք էջի սքրոլը, երբ մոդալը բաց է
  };

  // Մոդալի փակման ֆունկցիա
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDeposit(null);
    document.body.style.overflow = 'unset'; // Վերականգնում ենք էջի սքրոլը
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-base sm:text-lg">
        Բեռնվում է...
      </div>
    );
  }

  const renderContent = () => {
    switch (location.pathname) {
      case "/deposits-info":
        return (
          <div className="py-4 sm:py-6 animate-fadeIn max-w-[1100px] mx-auto text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-gray-900 mb-6 lg:mb-8 text-center sm:text-left">Կարևոր տեղեկատվություն</h2>
            
            <div className="space-y-6">
              {/* Ընդհանուր դրույթներ բաժին */}
              <section className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 p-5 sm:p-8 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold text-[#6c24b5] mb-4 sm:mb-6">Ընդհանուր դրույթներ</h3>
                <div className="space-y-4">
                  {generalProvisions.map((text, idx) => (
                    <div key={idx} className="flex gap-3 sm:gap-4 items-start border-b border-gray-50 pb-4 last:border-0">
                      <span className="text-[#6c24b5] font-bold text-sm sm:text-base">{idx + 1}.</span>
                      <p className="text-xs sm:text-[14px] text-gray-600 leading-relaxed text-justify sm:text-left">{text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Անհրաժեշտ տեղեկատվություն բաժին */}
              <section className="bg-[#f8f5ff] rounded-2xl sm:rounded-3xl border border-purple-100 p-5 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 uppercase tracking-tight text-center sm:text-left">Անհրաժեշտ տեղեկատվություն</h3>
                <div className="grid gap-3 sm:gap-4">
                  {requiredInfo.map((text, idx) => (
                    <div key={idx} className="flex items-start sm:items-center gap-3 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-[#6c24b5] shrink-0 mt-1.5 sm:mt-0" />
                      <p className="text-xs sm:text-[14px] text-gray-700 font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ծանուցում */}
              <div className="p-4 sm:p-6 bg-blue-50 rounded-xl sm:rounded-2xl flex gap-3 sm:gap-4 border border-blue-100">
                <Info className="text-blue-500 shrink-0" size={22} />
                <p className="text-[11px] sm:text-[13px] text-blue-800 leading-relaxed italic">
                  Նշված դրույթները ժամկետային ավանդների ներգրավման հաստատված հրապարակային պայմաններն են։ Յուրաքանչյուր ավանդի տեսակի համար կարող են գործել առանձնահատուկ պայմաններ։
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="animate-fadeIn">
            <h1 className="text-3xl sm:text-[40px] font-black text-gray-900 mb-6 lg:mb-12 text-center lg:text-left">Ավանդներ</h1>
            <div className="space-y-4">
              {depositData.map((deposit) => (
                <DepositSection 
                  key={deposit.id} 
                  deposit={deposit} 
                  onDetailsClick={handleOpenModal} 
                />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      {/* Sticky Sub-Header (Scrollable on Mobile)
        Ուղղված է top-[70px] և md:top-[80px], որպեսզի հիմնական Header-ի վրա չնստի
      */}
      <div className="bg-[#6c24b5] sticky top-[70px] md:top-[80px] z-40 shadow-md overflow-x-auto scrollbar-none">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex gap-6 sm:gap-8 whitespace-nowrap">
          {subNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-4 sm:py-5 text-white text-xs sm:text-sm font-bold border-b-4 transition-all ${
                location.pathname === item.path ? 'border-white opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content Workspace */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Breadcrumbs (Scrollable on small screens) */}
        <nav className="text-[11px] sm:text-[12px] text-gray-400 mb-6 sm:mb-8 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1">
          <Link to="/" className="hover:text-purple-600 shrink-0">🏠</Link>
          <span className="shrink-0">›</span>
          <span className="shrink-0">Անհատ</span>
          <span className="shrink-0">›</span>
          <span className="text-gray-900 font-medium shrink-0">
            {subNavItems.find(i => i.path === location.pathname)?.label || 'Ավանդներ'}
          </span>
        </nav>

        {renderContent()}
      </div>

      {/* --- Դինամիկ Մոդալ Պատուհան (Evoca Style Popup) --- */}
      {isModalOpen && selectedDeposit && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop-ին սեղմելիս նույնպես փակվում է */}
          <div className="absolute inset-0" onClick={handleCloseModal} />
          
          {/* Modal Card */}
          <div className="relative w-full max-w-5xl bg-white rounded-[32px] p-6 sm:p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-y-auto max-h-[90vh] z-10 transition-transform duration-300 scale-100 text-left">
            
            {/* Close Button */}
            <button 
              onClick={handleCloseModal}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left Column: Content */}
            <div className="flex-1 w-full order-2 md:order-1">
              <h2 className="text-3xl sm:text-[36px] font-black text-[#0f172a] mb-4 tracking-tight">
                {selectedDeposit.title}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-8 md:mb-10 max-w-[520px]">
                {selectedDeposit.description}
              </p>

              {/* Benefits Layout in Modal */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-gray-100 pt-6 sm:pt-8">
                {selectedDeposit.benefits?.map((benefit, idx) => (
                  <div key={idx} className="flex flex-col justify-start">
                    <span className="text-xs text-gray-400 block mb-1 font-medium">{benefit.label}</span>
                    <div className="flex items-baseline gap-0.5 text-[#6c24b5]">
                      <span className="text-2xl sm:text-[32px] font-black tracking-tight leading-none">{benefit.value}</span>
                      {benefit.subValue && <span className="text-lg sm:text-[22px] font-black">{benefit.subValue}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: DB Image Custom Presentation */}
            <div className="w-full md:w-[420px] shrink-0 order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-[360px] md:max-w-none aspect-[4/3] md:aspect-auto">
                <img 
                  src={selectedDeposit.image} 
                  alt={selectedDeposit.title} 
                  className="w-full h-full md:h-[280px] rounded-[24px] md:rounded-[32px] shadow-xl object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      )}

      {/* CSS Utilities */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.35s ease-out forwards; }
        
        /* Թաքցնում է հորիզոնական scrollbar-ը */
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default EvocaDepositsPage;