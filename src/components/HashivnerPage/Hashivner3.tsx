import React, { useState } from 'react';

// Տվյալների տիպերի սահմանում
interface AccordionItem {
  id: number;
  title: string;
  content?: string[];
}

interface DocumentItem {
  id: number;
  title: string;
  date: string;
}

const InfoPage: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "Անհրաժեշտ փաստաթղթեր",
      content: [
        "Հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն:",
        "Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ:",
        "Մեր պահանջով այլ փաստաթղթեր:"
      ]
    },
    { id: 2, title: "Հաշիվ բացելու ընթացակարգ" },
    { id: 3, title: "Բանկային հաշիվների սպասարկում" },
    { id: 4, title: "Հաշիվների սպասարկմանն առնչվող այլ դրույթներ" },
    { id: 5, title: "Բանկային հաշվի պայմանագրի լուծման պայմաններ" },
    { id: 6, title: "Երաշխավորված ավանդների սահմանաչափերը" },
    { id: 7, title: "ՈՒՇԱԴՐՈՒԹՅՈՒՆ" },
    { id: 8, title: "Օտարերկրյա հաշիվների հարկման համապատասխանության ակտի (FATCA) ծանուցում" },
  ];

  const documents: DocumentItem[] = [
    { id: 1, title: "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ)", date: "19.02.26" },
    { id: 2, title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ", date: "16.05.2025" },
    { id: 3, title: "Բանկային հաշիվների բացման սակագներ և դրույթներ", date: "01.02.2026թ" },
  ];

  return (
    <div className="max-w-[1000px] mx-auto p-6 font-sans bg-white min-h-screen">
      {/* Անհրաժեշտ տեղեկատվություն Header */}
      <h2 className="text-[18px] font-black text-gray-900 mb-6 uppercase tracking-wider">
        Անհրաժեշտ տեղեկատվություն
      </h2>

      {/* Accordion Section */}
      <div className="space-y-3 mb-16">
        {accordionData.map((item) => (
          <div 
            key={item.id} 
            className={`border rounded-xl transition-all duration-300 ${
              openId === item.id ? 'border-[#6c24b5] shadow-sm' : 'border-gray-200'
            }`}
          >
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className={`text-[14px] font-bold ${openId === item.id ? 'text-[#6c24b5]' : 'text-gray-700'}`}>
                {item.title}
              </span>
              <span className={`transform transition-transform ${openId === item.id ? 'rotate-180 text-[#6c24b5]' : 'text-gray-400'}`}>
                {openId === item.id ? '˄' : '˅'}
              </span>
            </button>
            
            {openId === item.id && item.content && (
              <div className="px-6 pb-6 animate-fadeIn">
                <ul className="list-disc list-inside space-y-3">
                  {item.content.map((line, idx) => (
                    <li key={idx} className="text-[13px] text-gray-600 leading-relaxed pl-2">
                      <span className="relative -left-2">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Փաստաթղթեր Section */}
      <h2 className="text-[18px] font-black text-gray-900 mb-6 uppercase tracking-wider">
        Փաստաթղթեր
      </h2>

      <div className="space-y-3">
        {documents.map((doc) => (
          <div 
            key={doc.id}
            className="flex items-center gap-4 p-4 bg-[#f8f5fb] rounded-xl hover:bg-[#f2ecf7] transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm">
              {/* PDF Icon Placeholder */}
              <span className="text-[#6c24b5] text-xl">📄</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between flex-1 gap-1">
              <span className="text-[14px] font-bold text-gray-800 group-hover:text-[#6c24b5] transition-colors">
                {doc.title}
              </span>
              <span className="text-[12px] text-gray-400 font-medium">
                {doc.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPage;