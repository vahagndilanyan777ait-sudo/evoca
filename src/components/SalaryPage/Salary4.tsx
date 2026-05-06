import React, { useState } from 'react';

// Հարցերի տվյալների տիպը
interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const SalaryProjectFAQ: React.FC = () => {
  // Պահում ենք բացված հարցի ID-ն: Լռելյայն առաջինը բաց է:
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "Ո՞վ կարող է միանալ Evoca աշխատավարձային նախագծին:",
      answer: "Evoca աշխատավարձային նախագծին կարող է միանալ յուրաքանչյուր ֆիզիկական անձ, ով ցանկանում է իր աշխատավարձը ստանալ Evocabank-ի քարտով՝ անկախ գործունեության ոլորտից կամ զբաղվածությունից:"
    },
    {
      id: 2,
      question: "Կարո՞ղ եմ օգտվել միայն նոր գործատու ունենալու դեպքում:",
      answer: "Ոչ, Դուք կարող եք միանալ նախագծին թե՛ նոր գործատուի դեպքում, թե՛ եթե արդեն ունեք մշտական աշխատանք և պարզապես ցանկանում եք փոխել Ձեր սպասարկող բանկը:"
    },
    {
      id: 3,
      question: "Կարո՞ղ եմ դիմել, եթե դեռ Evoca-ի հաճախորդ չեմ:",
      answer: "Այո, իհարկե: Դուք կարող եք դիմել օնլայն կամ այցելել մեր ցանկացած մասնաճյուղ, և մենք սիրով կսպասարկենք Ձեզ:"
    },
    {
      id: 4,
      question: "Ե՞րբ կսկսեմ օգտվել արտոնություններից:",
      answer: "Արտոնություններն ակտիվանում են այն պահից, երբ Ձեր առաջին աշխատավարձը փոխանցվում է Ձեր Evoca քարտին:"
    },
    {
      id: 5,
      question: "Կարո՞ղ եմ ունենալ մի քանի քարտ աշխատավարձային նախագծի շրջանակում:",
      answer: "Այո, Դուք կարող եք համակցել տարբեր քարտային տեսակներ Ձեր աշխատավարձային հաշվին՝ ըստ Ձեր նախասիրությունների:"
    },
    {
      id: 6,
      question: "Ինչպե՞ս կարող եմ դիմել աշխատավարձային նախագծին միանալու համար:",
      answer: "Դիմել կարող եք EvocaTouch հավելվածի միջոցով, կայքի օնլայն հայտով կամ այցելելով բանկի մոտակա մասնաճյուղ:"
    }
  ];

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-[850px] mx-auto px-4 py-12 font-sans">
      <h2 className="text-[18px] font-black text-gray-900 mb-8 uppercase tracking-wider">
        Հաճախ տրվող հարցեր
      </h2>

      <div className="space-y-3">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`border rounded-xl transition-all duration-300 overflow-hidden ${
              openId === faq.id 
                ? 'border-[#6c24b5] ring-1 ring-[#6c24b5]' 
                : 'border-gray-200'
            }`}
          >
            {/* Հարցի գլխամաս */}
            <button
              onClick={() => toggleAccordion(faq.id)}
              className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <span className={`text-[18px] transition-transform duration-300 ${
                  openId === faq.id ? 'rotate-180 text-[#6c24b5]' : 'text-gray-400'
                }`}>
                  {openId === faq.id ? '˄' : '˅'}
                </span>
                <span className={`text-[14px] font-bold ${
                  openId === faq.id ? 'text-[#6c24b5]' : 'text-gray-800'
                }`}>
                  {faq.question}
                </span>
              </div>
            </button>

            {/* Պատասխանի հատված */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                openId === faq.id 
                  ? 'max-h-[500px] opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-12 pb-6 text-[13px] text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryProjectFAQ;