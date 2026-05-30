import React from 'react';
import { useTranslation } from 'react-i18next';

const OnlineBanking: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#5406df] py-12 md:py-16 px-4 sm:px-6 lg:px-20 overflow-hidden flex items-center min-h-[550px] lg:min-h-[600px] font-sans">
      
      {/* ---------------- ՖՈՆԱՅԻՆ ԴԵԿՈՐԱՏԻՎ ԷԼԵՄԵՆՏՆԵՐ ---------------- */}
      
      {/* Ձախ կողմի մեծ սպիտակ կորը */}
      <div className="absolute top-0 left-0 h-[100%] w-[22%] bg-white rounded-br-[140px] pointer-events-none hidden lg:block" />

      {/* Ձախ վերևի վարդագույն 3D օղակ */}
      <div className="absolute top-[12%] left-[8%] select-none z-10 hidden md:block">
        <div className="w-12 h-12 rounded-full border-[10px] border-[#f45bf3] transform rotate-12 opacity-90" />
      </div>

      {/* Ձախ կողմի փոքր մուգ եռանկյուն */}
      <div className="absolute top-[10%] left-[16%] opacity-20 transform rotate-12 hidden lg:block">
        <svg width="16" height="16" fill="currentColor" className="text-black" viewBox="0 0 24 24">
          <path d="M12 2L22 22H2L12 2Z" />
        </svg>
      </div>

      {/* Ձախ մեջտեղի դեղին 3D եռանկյուն */}
      <div className="absolute bottom-[42%] left-[3%] select-none z-10 hidden md:block">
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="drop-shadow-md">
          <path d="M25 0 L50 40 L0 40 Z" fill="#fffb00" />
          <path d="M25 0 L25 40 L0 40 Z" fill="#e6c300" opacity="0.4" />
        </svg>
      </div>

      {/* Աջ վերևի շրջված քառակուսի */}
      <div className="absolute top-[12%] right-[5%] opacity-40 hidden md:block">
        <div className="w-12 h-12 border-2 border-white rounded-md transform rotate-[35deg]" />
      </div>

      {/* Աջ ներքևի վարդագույն զիգզագ */}
      <div className="absolute bottom-[15%] right-[5%] transform rotate-12 select-none z-10 hidden md:block">
        <svg width="30" height="45" viewBox="0 0 40 60" fill="none" stroke="#f45bf3" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 5 L30 15 L10 35 L30 45" />
        </svg>
      </div>

      {/* Կետիկավոր ցանց (Dot Grid) */}
      <div className="absolute bottom-0 left-[17%] opacity-40 z-10 hidden lg:block">
        <div className="grid grid-cols-6 gap-x-2.5 gap-y-1.5 p-4">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-[5px] h-[5px] bg-white rounded-full" />
          ))}
        </div>
      </div>

      {/* ---------------- ՀԻՄՆԱԿԱՆ ԲՈՎԱՆԴԱԿՈՒԹՅՈՒՆ ---------------- */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-20">
        
        {/* Ձախ հատված՝ Միասնական 3D Բաներ (Banner Graphics) */}
        <div className="lg:col-span-7 flex justify-center items-center w-full order-1 lg:order-1">
          <div className="relative w-full max-w-[480px] lg:max-w-[580px] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.35)] lg:shadow-[0_30px_50px_rgba(0,0,0,0.45)] border border-purple-900/10 transition-transform hover:scale-[1.01] duration-300">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
              alt="Evocabank Online Banking Features" 
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

        {/* Աջ հատված՝ Տեքստ և Կոճակներ */}
        <div className="lg:col-span-5 text-white flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-5 lg:space-y-6 lg:pl-4 order-2 lg:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-tight tracking-wide max-w-md lg:max-w-none">
            {t('onlineBanking.title')}
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base opacity-85 leading-relaxed font-normal tracking-wide max-w-xl mx-auto lg:mx-0">
            {t('onlineBanking.description')}
          </p>

          <div className="pt-1">
            <button className="bg-white text-gray-900 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm tracking-wide shadow-md hover:bg-gray-50 transition-all active:scale-95">
              {t('onlineBanking.becomeClientBtn')}
            </button>
          </div>

          {/* QR և Մարկետներ */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-3 w-full">
            {/* QR Կոդ */}
            <div className="bg-white p-2 rounded-xl shadow-lg shrink-0 hidden sm:block">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                alt="QR Code" 
                className="w-[60px] h-[60px] lg:w-[68px] lg:h-[68px] object-contain" 
              />
            </div>
            
            {/* Ներբեռնման կոճակներ */}
            <div className="flex flex-col space-y-1.5 text-left">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-white/75 text-center sm:text-left">
                {t('onlineBanking.downloadApps')}
              </span>
              <div className="flex flex-row gap-2">
                {/* App Store */}
                <a href="https://apps.apple.com/am/app/evocatouch/id970309076" target="_blank" rel="noreferrer" className="transition-transform hover:scale-[1.03]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store" 
                    className="h-[30px] sm:h-[34px] w-auto"
                  />
                </a>
                {/* Google Play */}
                <a href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank" target="_blank" rel="noreferrer" className="transition-transform hover:scale-[1.03]">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-[30px] sm:h-[34px] w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OnlineBanking;