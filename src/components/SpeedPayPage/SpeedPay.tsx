import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Globe, 
  Flame, 
  Tv, 
  ShieldAlert, 
  Coins, 
  Ticket 
} from 'lucide-react';

// Ինտերֆեյս քարտի տվյալների համար
interface ServiceCard {
  id: number;
  title: string;
  iconType: 'brand' | 'globe' | 'utility' | 'tv' | 'police' | 'credit' | 'ticket';
}

const SpeedPay: React.FC = () => {
  const { t } = useTranslation();

  const services: ServiceCard[] = [
    { id: 1, title: 'EVOCABANK', iconType: 'brand' },
    { id: 2, title: t('services.mobile', 'Միջազգային բջջային օպերատորներ'), iconType: 'globe' },
    { id: 3, title: t('services.utilities', 'Կոմունալ վճարումներ'), iconType: 'utility' },
    { id: 4, title: t('services.internet_tv', 'Ինտերնետ և TV'), iconType: 'tv' },
    { id: 5, title: t('services.police', 'ՃՈ վճարներ'), iconType: 'police' },
    { id: 6, title: t('services.credits', 'Վարկային կազմակերպություններ'), iconType: 'credit' },
    { id: 7, title: t('services.events', 'Միջոցառումներ'), iconType: 'ticket' },
  ];

  // Ռենդեր ենք անում համապատասխան սրբապատկերը (Icon)
  const renderIcon = (type: string) => {
    const iconStyle = "w-10 h-10 text-gray-400 group-hover:text-[#6c24b5] transition-colors duration-300 stroke-[1.5]";
    
    switch (type) {
      case 'globe': return <Globe className={iconStyle} />;
      case 'utility': return <Flame className={iconStyle} />;
      case 'tv': return <Tv className={iconStyle} />;
      case 'police': return <ShieldAlert className={iconStyle} />;
      case 'credit': return <Coins className={iconStyle} />;
      case 'ticket': return <Ticket className={iconStyle} />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6fa] py-16 px-4 sm:px-8 md:px-12 font-sans antialiased text-gray-950">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* --- Էսթետիկ Գլխամասային Վերնագիր --- */}
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <span className="text-[11px] font-black tracking-widest text-[#6c24b5] uppercase bg-purple-50 px-3 py-1 rounded-full">
            SPEEDPAY SYSTEM
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-950 tracking-tight uppercase">
            {t('services.main_title', 'Գլխավոր Բաժին')}
          </h1>
        </div>

        {/* --- Քարտերի Կատարյալ Ցանց (Responsive CSS Grid) --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => {
            const isBrand = service.iconType === 'brand';
            
            return (
              <div
                key={service.id}
                className={`group bg-white aspect-square rounded-[32px] p-6 sm:p-8 
                  flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-500 cursor-pointer
                  ${isBrand 
                    ? 'border-2 border-[#6c24b5] shadow-[0_15px_35px_rgba(108,36,181,0.08)]' 
                    : 'border border-gray-100/70 shadow-[0_10px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_40px_rgba(108,36,181,0.04)] hover:border-purple-100'
                  }
                  hover:-translate-y-1 active:scale-98`}
              >
                {/* Բրենդային քարտի համար հետնաշերտի նուրբ փայլ */}
                {isBrand && (
                  <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#6c24b5]/5 rounded-full blur-xl pointer-events-none" />
                )}

                {/* Սրբապատկերի բլոկ */}
                <div className="mb-5 sm:mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-out">
                  {isBrand ? (
                    <div className="w-14 h-14 bg-[#6c24b5] rounded-2xl flex items-center justify-center shadow-md shadow-purple-200">
                      {/* Evocabank Sharp Geometric Minimalist Custom Logo SVG */}
                      <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 20L50 80L85 20" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-gray-50 group-hover:bg-purple-50/50 rounded-2xl flex items-center justify-center transition-colors duration-300">
                      {renderIcon(service.iconType)}
                    </div>
                  )}
                </div>

                {/* Տեքստային Վերնագիր */}
                <h3 className={`text-xs sm:text-[13px] sm:text-sm font-black leading-snug tracking-tight px-1 transition-colors duration-300
                  ${isBrand 
                    ? 'text-[#6c24b5] tracking-wider font-black' 
                    : 'text-gray-800 group-hover:text-gray-950'
                  }`}
                >
                  {service.title}
                </h3>
                
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default SpeedPay;