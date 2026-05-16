import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  words: string[];
  name: string;
  position: string;
}

const TeamTestimonials: React.FC = () => {
  const data: Testimonial[] = [
    {
      id: 1,
      words: ["Թրենդային", "Պահանջված", "Ուրախ"],
      name: "Հարություն Սահակյան",
      position: "Անվտանգության մասնագետ"
    },
    {
      id: 2,
      words: ["Դինամիկ", "Պրպտող", "Զարգացող"],
      name: "Լիլիթ Գաբրոյան",
      position: "Գլխավոր ֆինանսական տնօրեն"
    },
    {
      id: 3,
      words: ["Կրեատիվ", "Նորարար", "Մանուշակագույն"],
      name: "Ալլա Զաքարյան",
      position: "Վճարային գործիքների մասնագետ"
    }
  ];

  // Կարուսելի ինդեքսը (օգտագործվում է միայն մոբայլ տարբերակում)
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const handlePrev = () => {
    setCurrentMobileIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentMobileIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white py-12 sm:py-20 px-4 sm:px-8 md:px-10 font-sans select-none antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Վերնագիր */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-[#1a1a1a] text-center mb-10 sm:mb-16 max-w-2xl mx-auto leading-snug">
          Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
        </h2>

        {/* Կարուսելի հիմնական հատվածը */}
        <div className="relative flex items-center justify-center gap-2 sm:gap-4 max-w-6xl mx-auto">
          
          {/* Ձախ սլաք (Ցուցադրվում է միայն մոբայլում/պլանշետում թերթելու համար) */}
          <button 
            onClick={handlePrev}
            className="md:hidden text-[#6c24b5] hover:opacity-70 transition-opacity p-1 bg-gray-50 rounded-full"
          >
            <ChevronLeft size={32} strokeWidth={2} />
          </button>

          {/* Քարտերի ցանց / Կարուսելի կոնտեյներ */}
          <div className="w-full">
            {/* Desktop տարբերակ՝ 3 սյունակով */}
            <div className="hidden md:grid grid-cols-3 gap-6 w-full">
              {data.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>

            {/* Mobile տարբերակ՝ միայն ակտիվ քարտը սահուն անիմացիայով */}
            <div className="block md:hidden w-full animate-fadeIn">
              <Card item={data[currentMobileIndex]} />
            </div>
          </div>

          {/* Աջ սլաք (Ցուցադրվում է միայն մոբայլում/պլանշետում թերթելու համար) */}
          <button 
            onClick={handleNext}
            className="md:hidden text-[#6c24b5] hover:opacity-70 transition-opacity p-1 bg-gray-50 rounded-full"
          >
            <ChevronRight size={32} strokeWidth={2} />
          </button>
        </div>

        {/* Pagination Dots (Ցուցադրվում է միայն մոբայլում) */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentMobileIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentMobileIndex === idx ? 'bg-[#6c24b5] w-6' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// Առանձնացված Քարտի Կոմպոնենտ ավելի մաքուր կոդի համար
const Card: React.FC<{ item: Testimonial }> = ({ item }) => (
  <div className="bg-[#f8f5ff] p-8 sm:p-10 pt-12 sm:pt-14 rounded-2xl relative flex flex-col justify-between min-h-[280px] sm:min-h-[320px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md w-full">
    
    {/* Չակերտներ (Դեկորատիվ գծեր) */}
    <div className="absolute top-0 right-6 sm:right-8 transform -translate-y-1/2 z-10">
      <div className="flex gap-1.5">
        <div className="w-3.5 h-8 sm:w-4 sm:h-10 bg-[#6c24b5] rounded-b-full shadow-md" />
        <div className="w-3.5 h-8 sm:w-4 sm:h-10 bg-[#6c24b5] rounded-b-full shadow-md" />
      </div>
    </div>

    {/* 3 բառերը */}
    <div className="space-y-1.5 sm:space-y-2">
      {item.words.map((word, idx) => (
        <p key={idx} className="text-[#6c24b5] text-xl sm:text-2xl md:text-[26px] font-black leading-tight tracking-tight">
          {word}
        </p>
      ))}
    </div>

    {/* Անուն և պաշտոն */}
    <div className="mt-8 sm:mt-10 border-t border-purple-100/50 pt-4">
      <h4 className="text-[#1a1a1a] text-xs sm:text-sm font-extrabold mb-1 tracking-tight">
        {item.name}
      </h4>
      <p className="text-gray-400 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase">
        {item.position}
      </p>
    </div>
  </div>
);

export default TeamTestimonials;