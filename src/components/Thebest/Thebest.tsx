import React from 'react';

interface CardProps {
  category: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<CardProps> = ({ category, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 min-h-[180px]">
    <div>
      <span className="bg-purple-100 text-[#6c24b5] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
        {category}
      </span>
      <h3 className="text-gray-900 font-bold text-lg mt-3 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const BestFromEvoca: React.FC = () => {
  const cardsData: CardProps[] = [
    {
      category: "Թվային քարտեր",
      title: "Evoca Digital քարտ",
      description: "Evoca Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը։"
    },
    {
      category: "Նվեր քարտեր",
      title: "Evoca Gift Card",
      description: "Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը։ Քարտը հարմար է բոլոր առիթների համար։"
    },
    {
      category: "Նոր հավելված",
      title: "EvocaTOUCH 2",
      description: "EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ։"
    },
    {
      category: "Օնլայն վճարումներ",
      title: "Արագ online վճարումներ",
      description: "Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ։ Այն հասանելի է 24/7։"
    }
  ];

  return (
    <section className="relative w-full bg-[#6c24b5] py-20 overflow-hidden min-h-[600px]">
      {/* Ալիքաձև ֆոնային էֆեկտ (Custom Shape) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Ձախ հատված՝ Արձանը */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDxRm_aXScfAAOWZbnebroclsw2A7UOuOBVTzphLb5oMNl8oXK" 
                alt="Statue" 
                className="w-full max-w-[350px] object-contain drop-shadow-2xl"
              />
              {/* Դեկորատիվ երկրաչափական պատկերներ */}
              <div className="absolute top-10 -left-10 w-12 h-12 bg-purple-400 opacity-30 rotate-45 animate-pulse" />
              <div className="absolute bottom-20 -right-5 w-6 h-6 bg-yellow-400 rounded-full" />
            </div>
          </div>

          {/* Աջ հատված՝ Վերնագիր և Քարտեր */}
          <div className="lg:col-span-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center lg:text-left">
              Լավագույնը Evocabank-ից
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cardsData.map((card, index) => (
                <InfoCard 
                  key={index}
                  category={card.category}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Լրացուցիչ դեկորատիվ պատկերներ ֆոնի վրա */}
      <div className="absolute top-20 right-10 text-white opacity-20 text-4xl rotate-12">▲</div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-white opacity-5 rounded-full blur-3xl" />
    </section>
  );
};

export default BestFromEvoca;