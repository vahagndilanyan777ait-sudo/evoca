import React, { useState } from 'react';

// --- Interfaces ---
interface PaymentSystem {
  id: number;
  logo: string;
  name: string;
  description: string;
  phone?: string;
  schedule?: string;
}

const MoneyTransfersPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'transfers' | 'systems'>('transfers');
  const [activeAccordionId, setActiveAccordionId] = useState<number | null>(1);

  // --- Data for Payment Systems (From Image) ---
  const paymentSystems: PaymentSystem[] = [
    {
      id: 1,
      name: "MONEYTUN",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/1738743146575/200x100.png",
      description: "MoneyTun-ը գործում է 2007 թվականից: Կազմակերպության նպատակն է Ամերիկայի և Հայաստանի միջև ապահով և պաշտպանված գործարքների ապահովումը...",
      phone: "+374 10 27 72 85",
      schedule: "Երկուշաբթի-ուրբաթ 10:00-17:30"
    },
    {
      id: 2,
      name: "RIA",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/16510581265332/200x100.png",
      description: "Գործում է 182 երկրի ավելի քան 509,000 սպասարկման կետերում: Փոխանցումները կատարվում են դոլարով և եվրոյով:",
      phone: "+374 94 23 59 00"
    },
    {
      id: 3,
      name: "UBPAY",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17304660969195/200x100.png",
      description: "UBPay - ը արագ դրամական փոխանցումների համակարգ է նախատեսված ֆիզիկական անձանց միջև ոչ առևտրային փոխանցումների համար:",
      phone: "+374 43 00 49 35"
    },
    {
      id: 4,
      name: "INTELEXPRESS",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/16133289933621/200x100.png",
      description: "Գործում է 90 երկրի ավելի քան 57,000 կետերում (Ռուսաստան, ԱՊՀ այլ երկրներ, Մեծ Բրիտանիա, Չինաստան և այլն):",
      phone: "+995 32 2 49 25 25"
    },
    {
      id: 5,
      name: "STAK",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17651707946608/200x100.png",
      description: "«ՍՏԱԿ» դրամական փոխանցումների միասնական համակարգի նպատակը հաճախորդներին մատչելի և որակյալ ծառայությունների մատուցումն է:",
    },
    {
      id: 6,
      name: "MONEYGRAM",
      logo: "https://www.evoca.am/images-cache/payment_systems/1/17651703221475/200x100.png",
      description: "Գործում է 170 երկրի ավելի քան 125,000 կետերում: Արտերկրից Հայաստան փոխանցվում է դոլար և եվրո:",
      phone: "1-800-926-9400"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      
      {/* --- HEADER NAVIGATION (TABS) --- */}
      <div className="bg-[#6c24b5] w-full py-3 px-4 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex gap-8 text-white text-[13px] font-medium">
          <button 
            onClick={() => setActiveTab('transfers')}
            className={`pb-1 transition-all border-b-2 ${activeTab === 'transfers' ? 'border-white opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
          >
            Դրամական փոխանցումներ
          </button>
          <button 
            onClick={() => setActiveTab('systems')}
            className={`pb-1 transition-all border-b-2 ${activeTab === 'systems' ? 'border-white opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
          >
            Վճարային համակարգեր
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-8">
          <span className="hover:text-gray-600 cursor-pointer">🏠</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Փոխանցումներ</span>
          <span>›</span>
          <span className="text-[#6c24b5]">
            {activeTab === 'transfers' ? 'Դրամական փոխանցումներ' : 'Վճարային համակարգեր'}
          </span>
        </nav>

        {/* --- CONTENT CONDITIONAL RENDERING --- */}
        {activeTab === 'transfers' ? (
          /* SECTION 1: MAIN TRANSFERS CONTENT */
          <>
            <div className="relative flex flex-col lg:flex-row items-stretch bg-[#f8f5fb] rounded-[40px] overflow-hidden min-h-[450px]">
              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                <h1 className="text-[36px] lg:text-[44px] font-black text-gray-900 leading-tight mb-8">
                  Դրամական <br /> փոխանցումներ
                </h1>
                <p className="text-[15px] text-gray-600 leading-relaxed max-w-[480px]">
                  Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով։ Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող հանձնարարականներով։
                </p>
              </div>
              <div className="flex-1 relative min-h-[350px]">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
                  alt="Evoca Bank"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="py-12">
              <h2 className="text-[20px] font-black text-gray-900 mb-6 uppercase tracking-wide">Ընդհանուր դրույթներ</h2>
              <div className="space-y-4 text-[14px] text-gray-700 max-w-[900px]">
                <p>Ձեր բանկային փոխհարաբերությունները կարգավորվում են պայմանագրով և ՀՀ օրենսդրությամբ:</p>
                <p>Մինչև ժամը 15:30-ը ներկայացված հանձնարարականները կատարվում են նույն բանկային օրը:</p>
              </div>
            </div>
          </>
        ) : (
          /* SECTION 2: PAYMENT SYSTEMS GRID (FROM YOUR IMAGE) */
          <div className="animate-fadeIn">
            <h1 className="text-[32px] font-black text-gray-900 mb-10 text-center">Վճարային համակարգեր</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {paymentSystems.map((sys) => (
                <div key={sys.id} className="bg-white border border-gray-100 rounded-[30px] p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                  <div className="h-16 flex items-center justify-center mb-6">
                    <img src={sys.logo} alt={sys.name} className="max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-6 flex-1">
                    {sys.description}
                  </p>
                  {sys.phone && (
                    <div className="pt-4 border-t border-gray-50 w-full">
                      <span className="text-[11px] text-[#6c24b5] font-bold block mb-1">ՀԵՌԱԽՈՍԱՀԱՄԱՐ</span>
                      <span className="text-[13px] font-medium text-gray-800">{sys.phone}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- COMMON FOOTER (Visible on both tabs) --- */}
      <div className="relative w-full bg-[#6c24b5] rounded-tl-[80px] md:rounded-tl-[150px] py-16 mt-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="relative">
            <img src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" alt="Laptop" className="w-[300px] md:w-[450px]" />
          </div>
          <div className="flex-1 text-white text-center lg:text-left">
            <h3 className="text-[28px] md:text-[38px] font-black mb-4">EvocaTouch</h3>
            <p className="text-[14px] opacity-80 mb-8">Կառավարեք Ձեր հաշիվները աշխարհի ցանկացած կետից:</p>
            <button className="bg-white text-[#6c24b5] px-10 py-3 rounded-full text-[14px] font-bold hover:bg-gray-100 transition-colors">
              Մանրամասն
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransfersPage;