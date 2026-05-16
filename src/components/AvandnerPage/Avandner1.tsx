import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Info } from 'lucide-react';
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
const DepositSection: React.FC<{ deposit: DepositCardProps }> = ({ deposit }) => (
  <div className="flex flex-col lg:flex-row items-center gap-10 py-16 border-b border-gray-100 last:border-0 w-full animate-fadeIn">
    <div className="w-full lg:w-[450px] shrink-0">
      <img 
        src={deposit.image} 
        alt={deposit.title} 
        className="w-full h-auto rounded-[32px] shadow-lg object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="flex-1 w-full">
      <h2 className="text-[32px] font-black text-gray-900 mb-4">{deposit.title}</h2>
      <p className="text-[15px] text-gray-500 leading-relaxed mb-10 max-w-[700px]">{deposit.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 mb-10">
        {deposit.benefits?.map((benefit, idx) => (
          <div key={idx}>
            <span className="text-[12px] text-gray-400 block mb-2">{benefit.label}</span>
            <div className="flex items-baseline gap-1 text-[#6c24b5]">
              <span className="text-[28px] font-bold leading-none">{benefit.value}</span>
              {benefit.subValue && <span className="text-[20px] font-bold">{benefit.subValue}</span>}
            </div>
          </div>
        ))}
      </div>
      <button className="flex items-center gap-2 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-10 py-3 rounded-full text-[14px] font-bold transition-all group">
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

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-lg">
        Բեռնվում է...
      </div>
    );
  }

  const renderContent = () => {
    switch (location.pathname) {
      case "/deposits-info":
        return (
          <div className="py-6 animate-fadeIn max-w-[1100px] mx-auto text-left">
            <h2 className="text-[32px] font-black text-gray-900 mb-8">Կարևոր տեղեկատվություն</h2>
            
            <div className="space-y-6">
              {/* Ընդհանուր դրույթներ բաժին */}
              <section className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#6c24b5] mb-6">Ընդհանուր դրույթներ</h3>
                <div className="space-y-4">
                  {generalProvisions.map((text, idx) => (
                    <div key={idx} className="flex gap-4 items-start border-b border-gray-50 pb-4 last:border-0">
                      <span className="text-[#6c24b5] font-bold">{idx + 1}.</span>
                      <p className="text-[14px] text-gray-600 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Անհրաժեշտ տեղեկատվություն բաժին */}
              <section className="bg-[#f8f5ff] rounded-3xl border border-purple-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Անհրաժեշտ տեղեկատվություն</h3>
                <div className="grid gap-4">
                  {requiredInfo.map((text, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-[#6c24b5] shrink-0" />
                      <p className="text-[14px] text-gray-700 font-medium">{text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ծանուցում */}
              <div className="p-6 bg-blue-50 rounded-2xl flex gap-4 border border-blue-100">
                <Info className="text-blue-500 shrink-0" size={24} />
                <p className="text-[13px] text-blue-800 leading-relaxed italic">
                  Նշված դրույթները ժամկետային ավանդների ներգրավման հաստատված հրապարակային պայմաններն են։ Յուրաքանչյուր ավանդի տեսակի համար կարող են գործել առանձնահատուկ պայմաններ։
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="animate-fadeIn">
            <h1 className="text-[40px] font-black text-gray-900 mb-12">Ավանդներ</h1>
            <div className="space-y-4">
              {depositData.map((deposit) => (
                <DepositSection key={deposit.id} deposit={deposit} />
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Sticky Sub-Header */}
      <div className="bg-[#6c24b5] sticky top-0 z-50 shadow-md">
        <div className="max-w-[1280px] mx-auto px-6 flex gap-8">
          {subNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-5 text-white text-sm font-bold border-b-4 transition-all ${
                location.pathname === item.path ? 'border-white opacity-100' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <nav className="text-[12px] text-gray-400 mb-8 flex items-center gap-2">
          <Link to="/" className="hover:text-purple-600">🏠</Link>
          <span>›</span>
          <span>Անհատ</span>
          <span>›</span>
          <span className="text-gray-900 font-medium">
            {subNavItems.find(i => i.path === location.pathname)?.label || 'Ավանդներ'}
          </span>
        </nav>

        {renderContent()}
      </div>
    </div>
  );
};

export default EvocaDepositsPage;