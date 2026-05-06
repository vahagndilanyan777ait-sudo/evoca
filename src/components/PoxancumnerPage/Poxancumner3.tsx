import React, { useState } from 'react';

// Interfaces
interface InfoItem {
  id: number;
  title: string;
  content?: string[];
}

interface DocItem {
  id: number;
  title: string;
  date?: string;
}

const TransfersInfoPage: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const infoItems: InfoItem[] = [
    {
      id: 1,
      title: "Փոխանցումներ դրամով",
      content: [
        "Մեզ մոտ գործող վճարահաշվարկային համակարգն ապահովում է արագ և հուսալի դրամային փոխանցումներ ինչպես մեր համակարգում, այնպես էլ հայաստանյան այլ բանկերի միջև:",
        "Դրամով փոխանցումները Հայաստանի տարածքում կատարվում են 1 բանկային օրվա ընթացքում:"
      ]
    },
    { id: 2, title: "Միջազգային փոխանցումներ" },
    { id: 3, title: "Վճարային համակարգեր" },
    { id: 4, title: "Փոխանցման պայմանների փոփոխում կամ չեղյալացում" }
  ];

  const documents: DocItem[] = [
    { id: 1, title: "Միջազգային վճարման հանձնարարականներով փոխանցումների իրականացման կանոններ" },
    { id: 2, title: "Համալիր բանկային ծառայությունների մատուցման պայմաններ", date: "16.05.2025" }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="max-w-[1000px] mx-auto px-6 py-12">
        
        {/* Accordion Section */}
        <h2 className="text-[18px] font-black text-gray-900 mb-6 uppercase tracking-wider">
          Անհրաժեշտ տեղեկատվություն
        </h2>
        
        <div className="space-y-3 mb-16">
          {infoItems.map((item) => (
            <div 
              key={item.id} 
              className={`border rounded-2xl transition-all duration-300 ${
                activeId === item.id ? 'border-[#6c24b5] ring-1 ring-[#6c24b5]' : 'border-gray-200'
              }`}
            >
              <button
                onClick={() => setActiveId(activeId === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`text-[14px] font-bold ${activeId === item.id ? 'text-[#6c24b5]' : 'text-gray-700'}`}>
                  {item.title}
                </span>
                <span className={`text-xl transition-transform ${activeId === item.id ? 'rotate-180 text-[#6c24b5]' : 'text-gray-400'}`}>
                  {activeId === item.id ? '˄' : '˅'}
                </span>
              </button>
              
              {activeId === item.id && item.content && (
                <div className="px-6 pb-6 animate-slideDown">
                  <ul className="space-y-4">
                    {item.content.map((line, idx) => (
                      <li key={idx} className="flex gap-3 text-[13px] text-gray-600 leading-relaxed">
                        <span className="text-[#6c24b5] mt-1.5">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Documents Section */}
        <h2 className="text-[18px] font-black text-gray-900 mb-6 uppercase tracking-wider">
          Փաստաթղթեր
        </h2>
        
        <div className="space-y-3 mb-20">
          {documents.map((doc) => (
            <div 
              key={doc.id}
              className="flex items-center gap-4 p-4 bg-[#f8f5fb] rounded-xl hover:bg-[#f2ecf7] transition-colors cursor-pointer group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                <span className="text-[#6c24b5] text-xl">📄</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between flex-1 gap-2">
                <span className="text-[13px] font-bold text-gray-800 leading-snug">
                  {doc.title}
                </span>
                {doc.date && (
                  <span className="text-[11px] text-gray-400 font-medium shrink-0">
                    {doc.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Hero Banner */}
      <div className="relative w-full bg-[#6c24b5] overflow-hidden rounded-tl-[80px] md:rounded-tl-[150px] min-h-[450px] flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 py-12 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Visuals */}
          <div className="relative flex items-end">
            <div className="relative z-10 w-[280px] md:w-[450px]">
              <img src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" alt="Laptop" className="w-full h-auto" />
              <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-cyan-400 border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
            <div className="absolute -right-8 bottom-0 z-20 w-[100px] md:w-[150px]">
              <img src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" alt="Phone" className="w-full h-auto" />
            </div>
          </div>

          {/* Text & Actions */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h3 className="text-[28px] md:text-[38px] font-black mb-6 leading-tight">
              Օնլայն և մոբայլ բանկինգ
            </h3>
            <p className="text-[14px] opacity-80 mb-8 max-w-[500px]">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է...
            </p>
            <button className="bg-white text-[#6c24b5] px-10 py-3 rounded-full text-[14px] font-bold mb-10 hover:bg-gray-100 transition-colors">
              Դառնալ հաճախորդ
            </button>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-white p-1.5 rounded-lg w-20 h-20">
                <img src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" alt="QR" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-widest opacity-70">Ներբեռնել հավելվածները՝</span>
                <div className="flex gap-3">
                  <img src="https://www.evoca.am/static/media/app-store.f78a731d.svg" alt="App Store" className="h-8" />
                  <img src="https://www.evoca.am/static/media/google-play.876b5d25.svg" alt="Google Play" className="h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransfersInfoPage;