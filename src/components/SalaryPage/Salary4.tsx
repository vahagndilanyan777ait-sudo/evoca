import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Հարցերի տվյալների տիպը
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const SalaryProjectFAQ: React.FC = () => {
  const { t } = useTranslation();
  
  // Պահում ենք բացված հարցի ID-ն: Լռելյայն առաջինը բաց է:
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: t('faq.q1', 'Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:'),
      answer: t('faq.a1', 'Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից:')
    },
    {
      id: 2,
      question: t('faq.q2', 'Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում:'),
      answer: t('faq.a2', 'Ոչ, Դուք կարող եք միանալ նախագծին թե՛ նոր գործատուի դեպքում, թե՛ եթե արդեն ունեք մշտական աշխատանք և պարզապես ցանկանում եք փոխել Ձեր սպասարկող բանկը:')
    },
    {
      id: 3,
      question: t('faq.q3', 'Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:'),
      answer: t('faq.a3', 'Այո, իհարկե: Դուք կարող եք դիմել օնլայն կամ այցելել մեր ցանկացած մասնաճյուղ, և մենք սիրով կսպասարկենք Ձեզ:')
    },
    {
      id: 4,
      question: t('faq.q4', 'Ե՞րբ կսկսեմ օգտվել արտոնություններից:'),
      answer: t('faq.a4', 'Արտոնություններն ակտիվանում են այն պահից, երբ Ձեր առաջին աշխատավարձը փոխանցվում է Ձեր Evoca քարտին:')
    },
    {
      id: 5,
      question: t('faq.q5', 'Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:'),
      answer: t('faq.a5', 'Այո, Դուք կարող եք համակցել տարբեր քարտային տեսակներ Ձեր աշխատավարձային հաշվին՝ ըստ Ձեր նախասիրությունների:')
    },
    {
      id: 6,
      question: t('faq.q6', 'Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար:'),
      answer: t('faq.a6', 'Դիմել կարող եք EvocaTouch հավելվածի միջոցով, կայքի օնլայն հայտով կամ այցելելով բանկի մոտակա մասնաճյուղ:')
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-14 font-sans antialiased text-gray-950">
      
      {/* Բաժնի Գլխամաս */}
      <div className="flex items-center gap-3 mb-8">
        <span className="w-1.5 h-5 bg-[#6c24b5] rounded-full" />
        <h2 className="text-base sm:text-lg font-black text-gray-950 uppercase tracking-wider">
          {t('faq.section_title', 'Հաճախ տրվող հարցեր')}
        </h2>
      </div>

      {/* Ակորդեոնների ցանկ */}
      <div className="space-y-3.5">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`border rounded-2xl bg-white transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'border-purple-200 shadow-[0_12px_30px_rgba(108,36,181,0.04)] ring-1 ring-purple-100' 
                  : 'border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:border-gray-200'
              }`}
            >
              {/* Հարցի Գլխամասային Կոճակ */}
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-purple-50/10 gap-4"
              >
                <span className={`text-sm sm:text-15px font-black tracking-tight transition-colors duration-300 ${
                  isOpen ? 'text-[#6c24b5]' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>

                {/* Պտտվող Նրբագեղ SVG Սլաք */}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                  isOpen ? 'bg-purple-50 text-[#6c24b5] rotate-180' : 'bg-gray-50 text-gray-400'
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Պատասխանի Հատված CSS Grid CSS Smooth Max-Height Transition-ով */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-gray-500 leading-relaxed font-medium max-w-3xl">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalaryProjectFAQ;