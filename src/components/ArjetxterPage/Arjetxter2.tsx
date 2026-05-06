import React, { useState } from 'react';

// Տվյալների տիպերի սահմանում
interface AccordionSection {
  id: number;
  title: string;
  subSections?: {
    subtitle: string;
    description: string;
  }[];
}

const InvestmentInfo: React.FC = () => {
  // Առաջին բաժինը լռելյայն բաց է, ինչպես նկարում
  const [openId, setOpenId] = useState<number | null>(1);

  const sections: AccordionSection[] = [
    {
      id: 1,
      title: "Ներդրումային ծառայությունների մատուցման կանոններ",
      subSections: [
        {
          subtitle: "Արժեթղթերի շուկայում բրոքերային ծառայությունների մատուցման կանոններ",
          description: "Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները..."
        },
        {
          subtitle: "Արժեթղթերի Պահառության գործունեության կանոններ",
          description: "Այս կանոնները սահմանում են արժեթղթերի հաշվետերերի հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները..."
        }
      ]
    },
    {
      id: 2,
      title: "Ծառայությունների մատուցման սակագներ"
    },
    {
      id: 3,
      title: "Լրացուցիչ տեղեկատվություն"
    }
  ];

  return (
    <div className="max-w-[1000px] mx-auto p-6 font-sans bg-white">
      {/* Վերնագիր */}
      <h2 className="text-[18px] font-black text-gray-900 mb-6 uppercase tracking-wider text-center">
        Անհրաժեշտ տեղեկատվություն
      </h2>

      {/* Accordion Container */}
      <div className="space-y-4">
        {sections.map((section) => (
          <div 
            key={section.id} 
            className={`border rounded-xl transition-all duration-300 ${
              openId === section.id ? 'border-[#6c24b5] shadow-md' : 'border-gray-200'
            }`}
          >
            {/* Accordion Header */}
            <button
              onClick={() => setOpenId(openId === section.id ? null : section.id)}
              className="w-full flex items-center justify-between p-4 text-left group"
            >
              <div className="flex items-center gap-3">
                <span className={`text-[18px] transition-transform duration-300 ${openId === section.id ? 'rotate-180 text-[#6c24b5]' : 'text-gray-400'}`}>
                  {openId === section.id ? '˄' : '˅'}
                </span>
                <span className={`text-[14px] font-bold ${openId === section.id ? 'text-[#6c24b5]' : 'text-gray-700'}`}>
                  {section.title}
                </span>
              </div>
            </button>

            {/* Accordion Content */}
            {openId === section.id && section.subSections && (
              <div className="px-10 pb-8 animate-fadeIn">
                <div className="space-y-8">
                  {section.subSections.map((sub, idx) => (
                    <div key={idx} className="space-y-4">
                      <h4 className="text-[#6c24b5] text-[13px] font-bold underline cursor-pointer hover:opacity-80 transition-opacity">
                        {sub.subtitle}
                      </h4>
                      <p className="text-[12px] text-gray-600 leading-relaxed text-justify">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentInfo;