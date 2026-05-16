import React, { useState } from 'react';

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
        "Հաշվի բացման դիմում՝ բանկի ձևանմուշի համաձայն:",
        "Անձնագիր և սոցիալական քարտ կամ հանրային ծառայությունների համարանիշ (ՀԾՀ) չունենալու մասին տեղեկանք, կամ նույնականացման քարտ:",
        "Բանկի պահանջով՝ հաճախորդի գործունեությունը և ֆինանսական վիճակը հավաստող այլ փաստաթղթեր:"
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
    { id: 1, title: "Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ)", date: "19.02.2026" },
    { id: 2, title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ", date: "16.05.2025" },
    { id: 3, title: "Բանկային հաշիվների բացման սակագներ և դրույթներ", date: "01.02.2026" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white min-h-screen font-sans antialiased text-gray-800">
      
      {/* Անհրաժեշտ տեղեկատվություն Header */}
      <h2 className="text-base sm:text-[17px] font-black text-gray-900 mb-6 uppercase tracking-wider border-l-4 border-[#6c24b5] pl-3">
        Անհրաժեշտ տեղեկատվություն
      </h2>

      {/* Accordion Section */}
      <div className="space-y-3 mb-14">
        {accordionData.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div 
              key={item.id} 
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen ? 'border-[#6c24b5]/60 shadow-sm bg-purple-50/5' : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="w-full flex items-center justify-between p-4 text-left select-none focus:outline-none"
              >
                <span className={`text-sm font-bold tracking-wide transition-colors duration-200 ${isOpen ? 'text-[#6c24b5]' : 'text-gray-700'}`}>
                  {item.title}
                </span>
                <svg 
                  className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#6c24b5]' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Սահուն բացվող-փակվող Container CSS Grid-ի միջոցով */}
              <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <div className="px-5 pb-5 pt-1 border-t border-gray-50">
                    {item.content && item.content.length > 0 ? (
                      <ul className="space-y-3.5">
                        {item.content.map((line, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[13px] text-gray-600 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6c24b5] mt-1.5 shrink-0" />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-[13px] text-gray-400 italic pl-5">Բովանդակությունը գտնվում է թարմացման փուլում:</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Փաստաթղթեր Section */}
      <h2 className="text-base sm:text-[17px] font-black text-gray-900 mb-6 uppercase tracking-wider border-l-4 border-[#6c24b5] pl-3">
        Փաստաթղթեր
      </h2>

      {/* Documents List */}
      <div className="space-y-3">
        {documents.map((doc) => (
          <div 
            key={doc.id}
            className="flex items-center gap-4 p-4 bg-[#fbf9fe] border border-transparent rounded-xl hover:bg-[#f6f0fc] hover:border-purple-100 transition-all cursor-pointer group"
          >
            {/* Էսթետիկ PDF Իկոնա */}
            <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100 shrink-0 group-hover:border-purple-200 transition-colors">
              <svg className="w-5 h-5 text-[#6c24b5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            
            {/* Տեքստային ինֆորմացիա */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-1 gap-2">
              <span className="text-sm font-bold text-gray-800 group-hover:text-[#6c24b5] transition-colors line-clamp-2 sm:line-clamp-none">
                {doc.title}
              </span>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-[12px] text-gray-400 font-semibold bg-gray-100/70 px-2 py-0.5 rounded">
                  {doc.date}
                </span>
                
                {/* Ներբեռնման (Download) սլաք, որը հայտնվում է Hover-ի ժամանակ */}
                <svg 
                  className="w-4 h-4 text-[#6c24b5] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoPage;