import React from 'react';
import { useTranslation } from 'react-i18next';

interface CardProps {
  category: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<CardProps> = ({ category, title, description }) => (
  <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 min-h-[190px] group hover:-translate-y-1">
    <div>
      <span className="bg-purple-100 text-[#6c24b5] text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider inline-block">
        {category}
      </span>
      <h3 className="text-gray-900 font-bold text-base sm:text-lg mt-3 mb-2 group-hover:text-[#6c24b5] transition-colors">
        {title}
      </h3>
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

const BestFromEvoca: React.FC = () => {
  const { t } = useTranslation();

  // Ստեղծում ենք 4 տարրից բաղկացած դատարկ զանգված՝ i18n-ից ըստ ինդեքսի կարդալու համար
  const cardsIndexes = [0, 1, 2, 3];

  return (
    <section className="relative w-full bg-[#6c24b5] py-12 sm:py-16 lg:py-20 overflow-hidden min-h-[600px] flex items-center">
      {/* Ալիքաձև ֆոնային էֆեկտ (Custom Shape) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-15">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto min-h-[150px] object-cover">
          <path fill="#ffffff" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-8 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Ձախ հատված՝ Արձանը */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start mb-6 lg:mb-0">
            <div className="relative max-w-[260px] sm:max-w-[320px] lg:w-full">
              <img 
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQDxRm_aXScfAAOWZbnebroclsw2A7UOuOBVTzphLb5oMNl8oXK" 
                alt="Statue" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              {/* Դեկորատիվ երկրաչափական պատկերներ */}
              <div className="absolute top-6 -left-6 w-8 h-8 sm:w-12 sm:h-12 bg-purple-400 opacity-30 rotate-45 animate-pulse" />
              <div className="absolute bottom-12 -right-3 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full" />
            </div>
          </div>

          {/* Աջ հատված՝ Վերնագիր և Քարտեր */}
          <div className="lg:col-span-8 w-full">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center lg:text-left tracking-wide">
              {t('bestFromEvoca.sectionTitle')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {cardsIndexes.map((index) => (
                <InfoCard 
                  key={index}
                  category={t(`bestFromEvoca.cards.${index}.category`)}
                  title={t(`bestFromEvoca.cards.${index}.title`)}
                  description={t(`bestFromEvoca.cards.${index}.description`)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Լրացուցիչ դեկորատիվ պատկերներ ֆոնի վրա */}
      <div className="absolute top-12 right-6 sm:top-20 sm:right-10 text-white opacity-10 text-2xl sm:text-4xl rotate-12 select-none">
        ▲
      </div>
      <div className="absolute bottom-40 right-20 w-24 h-24 sm:w-32 sm:h-32 bg-white opacity-5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default BestFromEvoca;