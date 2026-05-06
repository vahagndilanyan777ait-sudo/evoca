import React from 'react';

// Տվյալների տիպերի սահմանում
interface CardBenefit {
  label: string;
  value: string;
  description: string;
}

interface BankCardProps {
  id: number;
  title: string;
  description: string;
  mainImage: string;
  backImage?: string;
  benefits?: CardBenefit[];
  price?: string;
  priceLabel?: string;
}

const CardSection: React.FC<{ card: BankCardProps }> = ({ card }) => {
  return (
    <div className="flex flex-col lg:flex-row items-start gap-8 py-12 border-b border-gray-100 last:border-0 w-full">
      {/* Ձախ հատված: Քարտի պատկերները */}
      <div className="relative w-full lg:w-[420px] min-h-[240px] flex items-center justify-center">
        {card.backImage ? (
          <div className="relative w-full max-w-[320px]">
            <img 
              src={card.mainImage} 
              alt="Front Card" 
              className="w-[85%] rounded-xl shadow-lg relative z-10 transform -translate-x-4 -translate-y-4"
            />
            <img 
              src={card.backImage} 
              alt="Back Card" 
              className="w-[85%] rounded-xl shadow-2xl absolute top-8 left-12 z-20 border border-white/20"
            />
          </div>
        ) : (
          <img 
            src={card.mainImage} 
            alt={card.title} 
            className="w-full max-w-[380px] rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
          />
        )}
      </div>

      {/* Աջ հատված: Տեղեկատվություն */}
      <div className="flex-1 w-full">
        <h2 className="text-[28px] font-extrabold text-gray-900 mb-4">{card.title}</h2>
        <p className="text-[14px] text-gray-500 leading-relaxed mb-8 max-w-[650px]">
          {card.description}
        </p>

        <div className="flex flex-wrap items-start gap-x-12 gap-y-8">
          {card.benefits?.map((benefit, idx) => (
            <div key={idx} className="max-w-[160px]">
              <span className="text-[12px] text-gray-400 block mb-1">{benefit.label}</span>
              <span className="text-[24px] font-bold text-[#6c24b5] block leading-none">
                {benefit.value}
              </span>
              <p className="text-[11px] text-gray-500 mt-3 leading-snug">
                {benefit.description}
              </p>
            </div>
          ))}

          {card.price && (
            <div className="lg:ml-auto">
              <div className="flex items-baseline gap-1">
                <span className="text-[26px] font-bold text-gray-900">{card.price}</span>
                <span className="text-[20px] font-bold text-[#6c24b5]">֏</span>
              </div>
              <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider leading-tight">
                {card.priceLabel || 'Քարտի տարեկան սպասարկում'}
              </p>
            </div>
          )}
        </div>

        <button className="mt-10 flex items-center gap-3 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-8 py-2.5 rounded-full text-[13px] font-bold transition-all group">
          Մանրամասն
          <span className="text-lg transition-transform group-hover:translate-x-1">›</span>
        </button>
      </div>
    </div>
  );
};

const EvocaCardsPage: React.FC = () => {
  const cardData: BankCardProps[] = [
    {
      id: 1,
      title: "Digital Gift Card",
      description: "Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող...",
      mainImage: "https://www.evoca.am/images-cache/cards/1/17479817930565/415x261.jpg",
      backImage: "https://www.evoca.am/static/media/gift-card-bg.7c2d9e1a.png",
      benefits: []
    },
    {
      id: 2,
      title: "Visa Infinite",
      description: "Visa Infinite-ը Visa վճարային համակարգի ամենաբարձր դասի քարտն է:",
      mainImage: "https://www.evoca.am/images-cache/cards/1/17767720288483/415x261.png",
      price: "100,000",
      benefits: [
        { label: "Կանխիկացում բանկում", value: "1%", description: "Անկախ գումարի չափից" },
        { label: "ԱրՔա կետերում", value: "1.2%", description: "ԱրՔա անդամ բանկերում" }
      ]
    },
    {
      id: 3,
      title: "Visa Vision",
      description: "Կյանքին նայիր մանուշակագույն ակնոցով ու տես Visa Vision քարտի բազմաթիվ առավելությունները:",
      mainImage: "https://www.evoca.am/static/media/visa-vision-black.80783457.png",
      backImage: "https://www.evoca.am/static/media/visa-vision-white.0c3848df.png",
      benefits: []
    },
    {
      id: 4,
      title: "Mastercard World Digital",
      description: "Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում: Պատվիրիր թվային քարտը հիմա:",
      mainImage: "https://www.evoca.am/images-cache/cards/1/17282986912132/415x261.png",
      price: "1,000",
      priceLabel: "Միանվագ",
      benefits: [
        { label: "Կանխիկացում", value: "2%", description: "Բանկի կետերում" }
      ]
    },
    {
      id: 5,
      title: "UnionPay Business Platinum",
      description: "Այս պրեմիում դասի քարտը կդառնա ձեր գործընկերը հաջողության ճանապարհին:",
      mainImage: "https://www.evoca.am/images-cache/cards/1/1772717001933/415x261.png",
      price: "15,000",
      priceLabel: "Տարեկան սպասարկում",
      benefits: [
        { label: "Կանխիկացում", value: "0.5%", description: "ՀՀ տարածքում" }
      ]
    },
    {
      id: 6,
      title: "Homplex Gift card",
      description: "Թե՛ սրճեփ, թե՛ սրճարան, թե՛ տան կահավորում: Evoca-ի նոր նվեր քարտը՝ Homplex-ից:",
      mainImage: "https://www.evoca.am/images-cache/cards/1/1714986482757/415x261.png",
      backImage: "https://www.evoca.am/static/media/homplex-back.3385cc9d.png",
      benefits: []
    },
    {
      id: 7,
      title: "Mastercard Gold",
      description: "Ընդգծիր կարգավիճակդ քո Mastercard Gold քարտով:",
      mainImage: "https://www.evoca.am/images-cache/cards/1/17639683196125/415x261.png",
      price: "15,000",
      benefits: [
        { label: "Կանխիկացում", value: "0%", description: "Բանկի կետերում" }
      ]
    },
    {
      id: 8,
      title: "Visa Classic",
      description: "Կատարիր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ առանց PIN կոդի:",
      mainImage: "https://www.evoca.am/images-cache/cards/1/17249401821904/415x261.png",
      price: "5,000",
      benefits: [
        { label: "Կանխիկացում", value: "0.2%", description: "Բանկի կետերում" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        {cardData.map((card) => (
          <CardSection key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default EvocaCardsPage;