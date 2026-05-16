import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const EvocaSalaryBenefits: React.FC = () => {
  const { t } = useTranslation();
  
  // Ակորդեոնի վիճակի կառավարում վարկերի բաժնի համար
  const [openLoanTab, setOpenLoanTab] = useState<string | null>('overdraft');

  const toggleLoanTab = (tab: string) => {
    setOpenLoanTab(openLoanTab === tab ? null : tab);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 py-16 font-sans antialiased text-gray-950 space-y-16">
      
      {/* --- Ներածական էսթետիկ տեքստ --- */}
      <div className="max-w-3xl border-l-4 border-[#6c24b5] pl-6 py-2 bg-purple-50/30 rounded-r-2xl">
        <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-medium">
          {t('benefits.intro', 'Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ')} <span className="font-black text-[#6c24b5]">{t('benefits.intro_bold', 'նոր հնարավորություններ ու առավելություններ:')}</span>
        </p>
      </div>

      {/* --- ԲԱԺԻՆ 1 & 2 & 3: ՔԱՐՏԱՅԻՆ ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐԻ ՑԱՆՑ --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Քարտ 1: Mastercard Gold */}
        <div className="bg-white border border-gray-100 rounded-[28px] p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(108,36,181,0.05)] hover:border-purple-100/70 transition-all duration-300 flex flex-col justify-between group">
          <div className="space-y-5">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black tracking-widest text-[#6c24b5] bg-purple-50 px-3 py-1.5 rounded-full uppercase">
                {t('benefits.free_badge', 'Անվճար')}
              </span>
              <span className="text-2xl font-black text-[#6c24b5]">2%</span>
            </div>
            <h3 className="text-lg font-black tracking-tight text-gray-900 group-hover:text-[#6c24b5] transition-colors">
              Mastercard Gold
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] text-gray-500 font-medium">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#6c24b5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>{t('benefits.mc_p1', 'Պրեմիում դասի քարտ')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#6c24b5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>{t('benefits.mc_p2', 'Հասանելի ամբողջ աշխարհում')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#6c24b5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>{t('benefits.mc_p3', 'Դրական մնացորդին՝ 2% տարեկան տոկոս')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Քարտ 2: Evoca Travel Card */}
        <div className="bg-white border border-gray-100 rounded-[28px] p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(108,36,181,0.05)] hover:border-purple-100/70 transition-all duration-300 flex flex-col justify-between group">
          <div className="space-y-5">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black tracking-widest text-[#6c24b5] bg-purple-50 px-3 py-1.5 rounded-full uppercase">
                {t('benefits.discount_badge', '50% Զեղչ')}
              </span>
              <span className="text-xs font-black text-[#6c24b5] bg-purple-100/60 px-2 py-1 rounded-md">Lounge Key</span>
            </div>
            <h3 className="text-lg font-black tracking-tight text-gray-900 group-hover:text-[#6c24b5] transition-colors">
              Evoca Travel Card
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] text-gray-500 font-medium">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#6c24b5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Մինչև <span className="text-[#6c24b5] font-bold">1.5% cashback</span> արտերկրում</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#6c24b5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span><span className="text-[#6c24b5] font-bold">6 անվճար</span> մուտք Lounge Key և Fast Track</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Քարտ 3: Evoca Benefits */}
        <div className="bg-white border border-gray-100 rounded-[28px] p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(108,36,181,0.05)] hover:border-purple-100/70 transition-all duration-300 flex flex-col justify-between group md:col-span-2 lg:col-span-1">
          <div className="space-y-5">
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-black tracking-widest text-white bg-[#6c24b5] px-3 py-1.5 rounded-full uppercase">
                {t('benefits.partner_badge', '100+ Գործընկեր')}
              </span>
            </div>
            <h3 className="text-lg font-black tracking-tight text-gray-900 group-hover:text-[#6c24b5] transition-colors">
              Evoca Benefits
            </h3>
            <ul className="space-y-3 text-xs sm:text-[13px] text-gray-500 font-medium">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#6c24b5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Մինչև <span className="text-[#6c24b5] font-bold">25% զեղչեր</span> տարբեր կետերում</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#6c24b5] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span>Մինչև <span className="text-[#6c24b5] font-bold">25% կուտակվող cashback</span></span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* --- ԲԱԺԻՆ 4: ՑԱԾՐ ՏՈԿՈՍԱԴՐՈՒՅՔՈՎ ՎԱՐԿԵՐ (ACCORDION STYLE) --- */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-5 bg-[#6c24b5] rounded-full" />
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight uppercase">
            {t('loans.title', 'Ավելի ցածր տոկոսադրույքով վարկեր')}
          </h2>
        </div>

        <div className="border border-gray-100 rounded-[24px] overflow-hidden bg-white shadow-sm divide-y divide-gray-50">
          
          {/* Ակորդեոն 1: Օվերդրավտ */}
          <div className="transition-all">
            <button 
              onClick={() => toggleLoanTab('overdraft')}
              className="w-full flex items-center justify-between p-6 text-left font-black text-sm sm:text-base text-gray-950 hover:bg-purple-50/20 transition-colors"
            >
              <span>{t('loans.overdraft_title', 'Օվերդրավտ կամ Մարման գրաֆիկով վարկ')}</span>
              <svg className={`w-5 h-5 text-[#6c24b5] transition-transform duration-300 ${openLoanTab === 'overdraft' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${openLoanTab === 'overdraft' ? 'max-h-[300px] p-6 bg-purple-50/10' : 'max-h-0'}`}>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-gray-500">
                <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs"><span className="block text-[10px] font-black text-[#6c24b5] uppercase mb-1">Առավելագույն Չափ</span>Մինչև աշխատավարձի 15-ապատիկը</li>
                <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs"><span className="block text-[10px] font-black text-[#6c24b5] uppercase mb-1">Գումար</span>Մինչև 10 մլն դրամ</li>
                <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs"><span className="block text-[10px] font-black text-[#6c24b5] uppercase mb-1">Ժամկետ</span>Մինչև 60 ամիս</li>
              </ul>
            </div>
          </div>

          {/* Ակորդեոն 2: Ավտովարկ */}
          <div className="transition-all">
            <button 
              onClick={() => toggleLoanTab('car')}
              className="w-full flex items-center justify-between p-6 text-left font-black text-sm sm:text-base text-gray-950 hover:bg-purple-50/20 transition-colors"
            >
              <span>{t('loans.car_title', 'Ավտովարկ (0.5% ցածր տոկոսադրույք)')}</span>
              <svg className={`w-5 h-5 text-[#6c24b5] transition-transform duration-300 ${openLoanTab === 'car' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${openLoanTab === 'car' ? 'max-h-[300px] p-6 bg-purple-50/10' : 'max-h-0'}`}>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-gray-500">
                <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs"><span className="block text-[10px] font-black text-[#6c24b5] uppercase mb-1">Առավելություն</span>0.5%-ով ցածր տոկոսադրույք</li>
                <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs"><span className="block text-[10px] font-black text-[#6c24b5] uppercase mb-1">Գումար</span>Մինչև 50 մլն դրամ</li>
                <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs"><span className="block text-[10px] font-black text-[#6c24b5] uppercase mb-1">Ժամկետ</span>Մինչև 84 ամիս</li>
              </ul>
              <p className="text-xs text-gray-400 mt-4 font-medium pl-1">• Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից։</p>
            </div>
          </div>

          {/* Ակորդեոն 3: Անշարժ Գույք */}
          <div className="transition-all">
            <button 
              onClick={() => toggleLoanTab('realty')}
              className="w-full flex items-center justify-between p-6 text-left font-black text-sm sm:text-base text-gray-950 hover:bg-purple-50/20 transition-colors"
            >
              <span>{t('loans.realty_title', 'Անշարժ գույքի գրավով սպառողական վարկ')}</span>
              <svg className={`w-5 h-5 text-[#6c24b5] transition-transform duration-300 ${openLoanTab === 'realty' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={`transition-all duration-300 overflow-hidden ${openLoanTab === 'realty' ? 'max-h-[300px] p-6 bg-purple-50/10' : 'max-h-0'}`}>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-medium text-gray-500">
                <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs"><span className="block text-[10px] font-black text-[#6c24b5] uppercase mb-1">Առավելություն</span>0.5%-ով ցածր տոկոսադրույք</li>
                <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs"><span className="block text-[10px] font-black text-[#6c24b5] uppercase mb-1">Գումար</span>Մինչև 100 մլն դրամ</li>
                <li className="bg-white p-4 rounded-xl border border-gray-100 shadow-2xs"><span className="block text-[10px] font-black text-[#6c24b5] uppercase mb-1">Ժամկետ</span>Մինչև 120 ամիս</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default EvocaSalaryBenefits;