import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface PaymentSystem {
  id: number;
  logo: string;
  name: string;
  description: string;
  phone?: string;
  schedule?: string;
}

const MoneyTransfersPage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'transfers' | 'systems'>('transfers');

  // Վճարային համակարգերի տվյալներ
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
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 overflow-x-hidden">
      
      {/* --- HEADER STICKY TABS --- */}
      <div className="bg-[#6c24b5] w-full py-4 px-4 md:px-8 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex gap-6 sm:gap-10 text-white text-xs sm:text-sm font-black uppercase tracking-wider">
          <button 
            onClick={() => setActiveTab('transfers')}
            className={`pb-1 transition-all border-b-2 ${
              activeTab === 'transfers' ? 'border-white opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            {t('transfers.tab_title', 'Դրամական փոխանցումներ')}
          </button>
          <button 
            onClick={() => setActiveTab('systems')}
            className={`pb-1 transition-all border-b-2 ${
              activeTab === 'systems' ? 'border-white opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            {t('systems.tab_title', 'Վճարային համակարգեր')}
          </button>
        </div>
      </div>

      {/* --- MAIN CONTAINER --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-10 overflow-x-auto whitespace-nowrap py-1">
          <span className="hover:text-[#6c24b5] cursor-pointer transition-colors">🏠</span>
          <span className="text-gray-300">/</span>
          <span className="hover:text-[#6c24b5] cursor-pointer transition-colors">{t('bread.individual', 'Անհատ')}</span>
          <span className="text-gray-300">/</span>
          <span className="hover:text-[#6c24b5] cursor-pointer transition-colors">{t('bread.transfers', 'Փոխանցումներ')}</span>
          <span className="text-gray-300">/</span>
          <span className="text-[#6c24b5]">
            {activeTab === 'transfers' ? t('transfers.tab_title', 'Դրամական փոխանցումներ') : t('systems.tab_title', 'Վճարային համակարգեր')}
          </span>
        </nav>

        {/* --- TABS BINDED CONTENT --- */}
        {activeTab === 'transfers' ? (
          /* SECTION 1: TRANSFERS INFO */
          <div className="space-y-16 animate-fadeIn">
            {/* Split Banner */}
            <div className="relative flex flex-col lg:flex-row items-stretch bg-purple-50/40 rounded-[32px] md:rounded-[48px] overflow-hidden border border-purple-100/40">
              <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 leading-tight tracking-tight">
                  {t('transfers.hero_title', 'Դրամական փոխանցումներ')}
                </h1>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
                  {t('transfers.hero_desc', 'Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով։ Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող հանձնարարականներով։')}
                </p>
              </div>
              <div className="flex-1 relative min-h-[280px] sm:min-h-[360px] lg:min-h-auto">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
                  alt="Evoca Bank Money Transfers"
                  className="absolute inset-0 w-full h-full object-cover select-none"
                />
              </div>
            </div>

            {/* General Provisions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.01)] max-w-4xl space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-4 bg-[#6c24b5] rounded-full" />
                <h2 className="text-base sm:text-17px font-black text-gray-900 uppercase tracking-wider">
                  {t('transfers.provisions_title', 'Ընդհանուր դրույթներ')}
                </h2>
              </div>
              <div className="space-y-4 text-sm text-gray-500 leading-relaxed font-medium">
                <p>• Ձեր բանկային փոխհարաբերությունները կարգավորվում են պայմանագրով և ՀՀ օրենսդրությամբ:</p>
                <p>• Մինչև ժամը 15:30-ը ներկայացված հանձնարարականները կատարվում են նույն բանկային օրը: Դրանից հետո ներկայացվածները կարող են փոխանցվել հաջորդ բանկային օրը:</p>
              </div>
            </div>
          </div>
        ) : (
          /* SECTION 2: PAYMENT SYSTEMS GRID */
          <div className="space-y-10 animate-fadeIn">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight">
                {t('systems.hero_title', 'Վճարային համակարգեր')}
              </h1>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">
                {t('systems.hero_desc', 'Արագ, ապահով և մատչելի միջազգային դրամական փոխանցումների համակարգեր')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {paymentSystems.map((sys) => (
                <div 
                  key={sys.id} 
                  className="group bg-white border border-gray-100 rounded-[24px] p-6 sm:p-8 shadow-[0_12px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(108,36,181,0.05)] hover:border-purple-100 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    {/* Logo Container */}
                    <div className="h-16 flex items-center justify-center mb-6 bg-gray-50/50 rounded-2xl p-3 border border-gray-50 group-hover:bg-white transition-colors">
                      <img 
                        src={sys.logo} 
                        alt={sys.name} 
                        className="max-h-full max-w-full object-contain grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 ease-out" 
                      />
                    </div>
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium mb-6 line-clamp-4 group-hover:text-gray-600 transition-colors">
                      {sys.description}
                    </p>
                  </div>

                  {/* Metadata / Footer of card */}
                  {sys.phone && (
                    <div className="pt-4 border-t border-gray-50 w-full flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[9px] text-[#6c24b5] font-black block tracking-widest uppercase">
                          {t('systems.contact', 'ՀԵՌԱԽՈՍԱՀԱՄԱՐ')}
                        </span>
                        <span className="text-xs font-bold text-gray-800 tracking-wide">{sys.phone}</span>
                      </div>
                      <div className="text-purple-300 group-hover:text-[#6c24b5] transition-colors p-1.5 rounded-full bg-purple-50/0 group-hover:bg-purple-50">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* --- COMMON APP PROMO FOOTER (EvocaTouch) --- */}
      <div className="relative w-full bg-[#6c24b5] rounded-tl-[48px] md:rounded-tl-[120px] py-16 md:py-20 mt-16 sm:mt-24 overflow-hidden shadow-inner">
        {/* Background gradient lights */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Laptop Image Mockup */}
          <div className="relative group max-w-[320px] sm:max-w-[420px] lg:max-w-none">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
              alt="EvocaTouch App Application" 
              className="w-full lg:w-[460px] drop-shadow-[0_15px_40px_rgba(0,0,0,0.3)] transform group-hover:scale-[1.02] transition-transform duration-700 ease-out select-none" 
            />
          </div>
          
          {/* Promo Text and CTA */}
          <div className="flex-1 text-white text-center lg:text-left space-y-5 max-w-xl">
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-none">EvocaTouch</h3>
              <p className="text-purple-200 text-sm md:text-base font-medium opacity-90">
                {t('promo.desc', 'Կառավարեք Ձեր հաշիվները և կատարեք արագ դրամական փոխանցումներ աշխարհի ցանկացած կետից՝ ընդամենը մեկ հպումով:')}
              </p>
            </div>
            <div className="pt-2">
              <button className="bg-white text-[#6c24b5] px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-wider hover:bg-gray-50 active:scale-98 shadow-xl shadow-purple-950/20 transition-all">
                {t('promo.btn', 'Մանրամասն')}
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MoneyTransfersPage;