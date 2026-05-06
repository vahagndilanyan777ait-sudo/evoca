import React, { useState } from 'react';

// 1. Տվյալների տիպերը
interface HistoryEvent {
  year: number;
  text: string;
  image: string;
}

// 2. Պատմության տվյալները
const historyData: HistoryEvent[] = [
  {
    year: 2025,
    text: "Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ ՓԲԸ-ից ԲԲԸ-ի: Evoca-ն և EBRD-ն ստորագրեցին համագործակցության համաձայնագիր: Ներկայացվեց Evoca Travel Card-ը: Մեկնարկեցին Evoca Partners Club-ն և Evoca Benefits նախագիծը:",
    image: "https://www.evoca.am/static/media/travel-card.jpg" // Փոխարինիր իրական հղումով
  },
  {
    year: 2024,
    text: "2024 թվականին բանկը գրանցեց աննախադեպ աճ թվային ծառայությունների ոլորտում...",
    image: "https://www.evoca.am/static/media/2024-event.jpg"
  },
  { year: 2023, text: "2023-ի ձեռքբերումները...", image: "" },
  { year: 2022, text: "2022-ի իրադարձությունները...", image: "" },
  { year: 2021, text: "2021-ի պատմությունը...", image: "" },
  { year: 2020, text: "2020-ի մեկնարկը...", image: "" },
];

const BankHistory: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  const currentEvent = historyData.find(e => e.year === selectedYear) || historyData[0];

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20 font-sans select-none">
      <div className="max-w-6xl mx-auto">
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-12">
          Բանկի պատմությունը
        </h2>

        {/* Timeline Slider */}
        <div className="relative mb-20 flex items-center justify-between">
          {/* Հորիզոնական գիծը */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2 z-0" />
          
          {/* Սլաք ձախ */}
          <button className="z-10 text-gray-400 hover:text-[#6c24b5] transition-colors text-xl">←</button>

          <div className="flex justify-between w-full px-8 z-10">
            {historyData.map((item) => (
              <div 
                key={item.year} 
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => setSelectedYear(item.year)}
              >
                <span className={`mb-3 font-bold text-lg transition-colors ${
                  selectedYear === item.year ? 'text-[#6c24b5]' : 'text-gray-400 group-hover:text-gray-600'
                }`}>
                  {item.year}
                </span>
                <div className={`w-4 h-4 rounded-full border-2 transition-all ${
                  selectedYear === item.year 
                  ? 'bg-[#6c24b5] border-[#6c24b5] scale-125 shadow-[0_0_10px_rgba(108,36,181,0.5)]' 
                  : 'bg-white border-gray-300 group-hover:border-gray-400'
                }`} />
              </div>
            ))}
          </div>

          {/* Սլաք աջ */}
          <button className="z-10 text-[#6c24b5] font-bold text-xl">→</button>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[400px]">
          {/* Տեքստային բլոկ */}
          <div className="bg-[#f9f9fb] p-10 md:p-16 rounded-l-[100px] rounded-r-none h-full flex items-center relative z-10">
            <p className="text-[#333] text-lg leading-relaxed font-medium">
              {currentEvent.text}
            </p>
          </div>

          {/* Նկարի բլոկ */}
          <div className="relative h-full min-h-[300px] lg:min-h-[450px] overflow-hidden rounded-sm group">
            <img 
              src="https://www.evoca.am/images-cache/histories/1/17574211752061/450x330.png" // Օգտագործիր image_68d184.png-ի համապատասխան նկարը
              alt="Evoca History" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay որպեսզի նման լինի դիզայնին */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9f9fb] via-transparent to-transparent hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankHistory;