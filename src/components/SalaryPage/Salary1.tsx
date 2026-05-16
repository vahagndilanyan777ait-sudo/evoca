import React from 'react';
import { useTranslation } from 'react-i18next';

const EvocaSalaryBanner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[600px] bg-white font-sans antialiased text-gray-900 overflow-hidden">
      
      {/* --- Breadcrumbs --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-4">
        <nav className="flex items-center gap-2 text-xs font-bold text-gray-400">
          <span className="hover:text-[#6c24b5] cursor-pointer transition-colors">🏠</span>
          <span className="text-gray-300">/</span>
          <span className="hover:text-[#6c24b5] cursor-pointer transition-colors">{t('bread.individual', 'Անհատ')}</span>
          <span className="text-gray-300">/</span>
          <span className="text-[#6c24b5] font-extrabold tracking-wide">EvocaSALARY</span>
        </nav>
      </div>

      {/* --- Main Banner Container --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 mt-6 mb-12">
        <div className="relative flex flex-col lg:flex-row items-stretch rounded-[32px] md:rounded-[48px] overflow-hidden border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
          
          {/* --- Տեքստային հատված (Ձախ կողմ) --- */}
          <div className="flex-1 bg-[#f4f5f9] p-8 sm:p-12 lg:p-20 z-10 flex flex-col justify-center rounded-t-[32px] md:rounded-t-[48px] lg:rounded-none lg:rounded-l-[48px] lg:rounded-br-[180px] relative">
            <span className="text-[#6c24b5] text-xs sm:text-sm font-black tracking-widest uppercase mb-1 sm:mb-2 block">
              EVOCA
            </span>
            <h1 className="text-gray-950 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight mb-6 sm:mb-8">
              {t('salary.title_line1', 'ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ')} <br /> 
              <span className="text-[#6c24b5]">{t('salary.title_line2', 'ՆԱԽԱԳԻԾ')}</span>
            </h1>
            
            <div className="space-y-2 text-sm sm:text-base text-gray-500 font-medium leading-relaxed max-w-md">
              <p>{t('salary.desc1', 'Քո աշխատավարձը կարող է քեզ տալ շատ ավելին:')}</p>
              <p>{t('salary.desc2', 'Պարզապես պետք է ընտրել Evocabank-ը:')}</p>
            </div>
          </div>

          {/* --- Նկարի հատված (Աջ կողմ) --- */}
          <div className="flex-1 relative min-h-[350px] sm:min-h-[420px] lg:min-h-[520px] bg-[#6c24b5]">
            {/* Background Light Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-white/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* 3D Wallet / Image Content */}
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 lg:p-12">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" 
                alt="Evoca Salary Wallet 3D Illustration"
                className="w-full h-full object-contain transform scale-105 sm:scale-110 select-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.25)] hover:scale-112 transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          {/* --- Floating Social Sidebar (Կպած է բաններին ձախից) --- */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5 py-5 px-2.5 bg-white/80 backdrop-blur-md rounded-full shadow-lg shadow-gray-200/50 border border-white/60 z-20">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#6c24b5] hover:scale-110 transition-all text-xs font-black"
            >
              f
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#6c24b5] hover:scale-110 transition-all text-[11px] font-black"
            >
              in
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#6c24b5] hover:scale-110 transition-all text-xs font-black"
            >
              i
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default EvocaSalaryBanner;