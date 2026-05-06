import React, { useState } from 'react';

interface CardItem {
  id: string;
  name: string;
  image: string;
  largeImage: string;
}

const cards: CardItem[] = [
  {
    id: 'mastercard',
    name: 'Mastercard Standard',
    image: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png',
    largeImage: 'https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png' // Սա image_b13d43.jpg-ի կենտրոնի նկարն է
  },
  {
    id: 'visa-digital',
    name: 'Visa Digital',
    image: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png',
    largeImage: 'https://www.evoca.am/images-cache/cards/1/1714986642953/415x261.png'
  },
  {
    id: 'visa-classic',
    name: 'Visa Classic',
    image: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png',
    largeImage: 'https://www.evoca.am/images-cache/cards/1/17485025148319/415x261.png'
  }
];

const CardSelector: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardItem>(cards[0]);

  return (
    <section className="bg-[#f4f7ff] py-16 px-6 lg:px-24 min-h-[600px] flex items-center">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Ձախ սյունակ՝ Քարտերի ցանկը */}
        <div className="lg:col-span-3 flex flex-col items-center gap-8">
          <button className="text-[#6c24b5] animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
            </svg>
          </button>

          <div className="flex flex-col gap-6 w-full items-center">
            {cards.map((card) => (
              <div 
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className={`cursor-pointer transition-all duration-300 flex flex-col items-center gap-2 group ${
                  selectedCard.id === card.id ? 'scale-110' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
                }`}
              >
                <img 
                  src={card.image} 
                  alt={card.name} 
                  className="w-32 rounded-lg shadow-md border-2 border-transparent group-hover:border-[#6c24b5]/30"
                />
                <span className="text-[12px] font-bold text-gray-700 text-center uppercase tracking-tight">
                  {card.name}
                </span>
              </div>
            ))}
          </div>

          <button className="text-[#6c24b5] opacity-30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Կենտրոնական սյունակ՝ Մեծ քարտը */}
        <div className="lg:col-span-6 flex justify-center items-center relative">
          <div className="relative group transition-all duration-500 transform">
            {/* Քարտի ստվերը */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/10 blur-xl rounded-[100%]" />
            
            <img 
              src={selectedCard.largeImage} 
              alt="Selected Card" 
              className="w-full max-w-[500px] object-contain drop-shadow-2xl animate-fadeIn"
              key={selectedCard.id} // Անիմացիայի համար, երբ փոխվում է
            />
          </div>
        </div>

        {/* Աջ սյունակ՝ Տեքստ և Կոճակ */}
        <div className="lg:col-span-3 text-center lg:text-left space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            {selectedCard.name === 'Mastercard Standard' ? 'Evoca Travel Card' : selectedCard.name}
          </h2>
          <button className="bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-10 py-3.5 rounded-full font-bold text-sm transition-all transform active:scale-95 shadow-lg">
            Պատվիրել օնլայն
          </button>
        </div>

      </div>
    </section>
  );
};

export default CardSelector;