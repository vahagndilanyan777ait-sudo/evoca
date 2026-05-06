import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// 1. Տվյալների տիպի սահմանում
interface Testimonial {
  id: number;
  words: string[];
  name: string;
  position: string;
}

const TeamTestimonials: React.FC = () => {
  // 2. Տվյալները (ըստ պատկերի բովանդակության)
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

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 font-sans select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Վերնագիր */}
        <h2 className="text-xl md:text-2xl font-black text-[#1a1a1a] text-center mb-16">
          Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
        </h2>

        {/* Կարուսելի հիմնական հատվածը */}
        <div className="relative flex items-center justify-center gap-4">
          
          {/* Ձախ սլաք */}
          <button className="hidden md:block text-[#6c24b5] hover:opacity-70 transition-opacity">
            <ChevronLeft size={40} strokeWidth={1.5} />
          </button>

          {/* Քարտերի ցանցը */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {data.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#f8f5ff] p-10 pt-14 rounded-sm relative flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1"
              >
                {/* Չակերտներ (Icons) */}
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <div className="flex gap-1">
                    <div className="w-4 h-10 bg-[#6c24b5] rounded-b-full shadow-lg" />
                    <div className="w-4 h-10 bg-[#6c24b5] rounded-b-full shadow-lg" />
                  </div>
                </div>

                {/* 3 բառերը */}
                <div className="space-y-1">
                  {item.words.map((word, idx) => (
                    <p key={idx} className="text-[#6c24b5] text-2xl font-black leading-tight">
                      {word}
                    </p>
                  ))}
                </div>

                {/* Անուն և պաշտոն */}
                <div className="mt-10">
                  <h4 className="text-[#1a1a1a] text-sm font-bold mb-1">
                    {item.name}
                  </h4>
                  <p className="text-gray-400 text-[11px] font-medium leading-tight">
                    {item.position}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Աջ սլաք */}
          <button className="hidden md:block text-[#6c24b5] hover:opacity-70 transition-opacity">
            <ChevronRight size={40} strokeWidth={1.5} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2.5 h-2.5 bg-[#6c24b5] rounded-full" />
          <div className="w-2.5 h-2.5 bg-gray-300 rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default TeamTestimonials;