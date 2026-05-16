import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface CardItem {
  id: string;
  name: string;
  description: string;
  image: string;
  largeImage: string;
}

const cards: CardItem[] = [
  {
    id: 'mastercard',
    name: 'Mastercard Standard',
    description: 'Ճամփորդեք հանգիստ և ապահով Evoca Travel Card-ի հետ՝ կանխիկացման լայն հնարավորություններով:',
    image: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png',
    largeImage: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png'
  },
  {
    id: 'visa-digital',
    name: 'Visa Digital',
    description: 'Ձեր վիրտուալ քարտը՝ ակնթարթային թողարկմամբ և անվտանգ առցանց գնումների համար:',
    image: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png',
    largeImage: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png'
  },
  {
    id: 'visa-classic',
    name: 'Visa Classic',
    description: 'Դասական լուծումներ ամենօրյա գործարքների, փոխանցումների և վճարումների համար:',
    image: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png',
    largeImage: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png'
  }
];

const CardSelector: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState<CardItem>(cards[0]);

  // Գտնել ընթացիկ քարտի ինդեքսը նավիգացիայի համար
  const currentIndex = cards.findIndex((c) => c.id === selectedCard.id);

  // Նավիգացիա դեպի վերև
  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedCard(cards[currentIndex - 1]);
    }
  };

  // Նավիգացիա դեպի ներքև
  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setSelectedCard(cards[currentIndex + 1]);
    }
  };

  return (
    <section className="bg-[#f4f7ff] py-20 px-4 md:px-12 lg:px-24 min-h-[650px] flex items-center font-sans antialiased overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
        
        {/* Ձախ սյունակ՝ Քարտերի ցանկը (3/12 Սյունակ) */}
        <div className="lg:col-span-3 flex flex-col items-center gap-6 order-2 lg:order-1">
          {/* Վերև Սլաք */}
          <button 
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`text-[#6c24b5] transition-all p-2 rounded-full hover:bg-purple-100/50 ${
              currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'animate-pulse cursor-pointer'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>

          {/* Փոքր Քարտերի Ցուցակ */}
          <div className="flex flex-row lg:flex-col gap-5 sm:gap-6 w-full justify-center items-center overflow-x-auto py-2 px-1 snap-x no-scrollbar">
            {cards.map((card) => {
              const isSelected = selectedCard.id === card.id;
              return (
                <div 
                  key={card.id}
                  onClick={() => setSelectedCard(card)}
                  className={`cursor-pointer transition-all duration-300 flex flex-col items-center gap-2 group snap-center min-w-[100px] sm:min-w-0 ${
                    isSelected ? 'scale-105 sm:scale-110' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-90'
                  }`}
                >
                  <div className={`rounded-xl p-0.5 transition-all ${isSelected ? 'ring-2 ring-[#6c24b5] shadow-lg' : 'ring-0'}`}>
                    <img 
                      src={card.image} 
                      alt={card.name} 
                      className="w-24 sm:w-28 md:w-32 rounded-10px object-contain"
                    />
                  </div>
                  <span className={`text-[10px] sm:text-[11px] font-black text-center uppercase tracking-wider transition-colors ${
                    isSelected ? 'text-[#6c24b5]' : 'text-gray-400'
                  }`}>
                    {card.id === 'mastercard' ? 'Travel Card' : card.name.replace('Evoca', '').trim()}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Ներքև Սլաք */}
          <button 
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
            className={`text-[#6c24b5] transition-all p-2 rounded-full hover:bg-purple-100/50 ${
              currentIndex === cards.length - 1 ? 'opacity-20 cursor-not-allowed' : 'animate-pulse cursor-pointer'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Կենտրոնական սյունակ՝ Մեծ քարտը (6/12 Սյունակ) */}
        <div className="lg:col-span-6 flex justify-center items-center relative order-1 lg:order-2 py-6 sm:py-0">
          <div className="relative w-full max-w-[420px] sm:max-w-[460px] md:max-w-[500px] transition-all duration-500">
            {/* Քարտի տակից շքեղ ստվեր */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-5 bg-purple-950/10 blur-2xl rounded-[100%]" />
            
            <img 
              src={selectedCard.largeImage} 
              alt={selectedCard.name} 
              className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] select-none animate-fadeIn"
              key={selectedCard.id} // Ապահովում է անիմացիայի վերագործարկումը փոփոխության ժամանակ
            />
          </div>
        </div>

        {/* Աջ սյունակ՝ Տեքստ, Նկարագրություն և Կոճակ (3/12 Սյունակ) */}
        <div className="lg:col-span-3 text-center lg:text-left space-y-5 sm:space-y-6 order-3">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight transition-all">
              {selectedCard.id === 'mastercard' ? 'Evoca Travel Card' : selectedCard.name}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm font-medium leading-relaxed min-h-[60px]">
              {t(`cards.desc.${selectedCard.id}`, selectedCard.description)}
            </p>
          </div>

          <div className="pt-2">
            <button className="bg-[#6c24b5] hover:bg-[#581b94] text-white px-8 sm:px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all transform active:scale-98 shadow-lg shadow-purple-200/80 w-full lg:w-auto">
              {t('cards.order_btn', 'Պատվիրել օնլայն')}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CardSelector;