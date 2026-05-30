import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Flame, Tv, ShieldAlert, Coins, Ticket } from 'lucide-react';

const SpeedPay: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Ծառայությունների ցանկը
  const services = [
    { id: 1, title: 'EVOCABANK', iconType: 'brand' as const },
    { id: 2, title: t('services.mobile'), iconType: 'globe' as const },
    { id: 3, title: t('services.utilities'), iconType: 'utility' as const },
    { id: 4, title: t('services.internet_tv'), iconType: 'tv' as const },
    { id: 5, title: t('services.police'), iconType: 'police' as const },
    { id: 6, title: t('services.credits'), iconType: 'credit' as const },
    { id: 7, title: t('services.events'), iconType: 'ticket' as const },
  ];

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
    <div className="min-h-screen bg-[#f4f6fa] py-16 px-4">
      

      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-3xl font-black mb-10">{t('services.main_title')}</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-3xl flex flex-col items-center shadow-sm">
              <div className="mb-4">{service.iconType === 'brand' ? '💎' : renderIcon(service.iconType)}</div>
              <h3 className="text-sm font-bold text-center">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeedPay;