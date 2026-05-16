import React from 'react';

const OnlineBankingHero: React.FC = () => {
  return (
    <div className="relative w-full bg-[#6c24b5] overflow-hidden rounded-2xl md:rounded-none md:rounded-tl-[100px] lg:rounded-tl-[160px] min-h-[600px] lg:min-h-[540px] flex items-center shadow-inner">
      
      {/* Դեկորատիվ երկրաչափական պատկերներ (Floating elements) */}
      <div className="absolute top-10 left-20 w-8 h-8 border-2 border-pink-400 rounded-full opacity-40 animate-pulse hidden md:block" />
      <div className="absolute bottom-24 left-10 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-yellow-400 rotate-12 opacity-60 animate-bounce [animation-duration:4s]" />
      <div className="absolute top-1/4 right-12 w-6 h-6 border-2 border-white rotate-45 opacity-30 hidden lg:block" />
      <div className="absolute bottom-12 right-1/2 text-pink-400 text-4xl font-bold opacity-30 rotate-12 select-none pointer-events-none hidden md:block">~</div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 z-10">
        
        {/* Ձախ հատված: Laptop և Phone սարքեր */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-end mt-6 lg:mt-0">
          
          {/* Laptop Container */}
          <div className="relative w-[80%] sm:w-[70%] md:w-[85%] max-w-[520px]">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
              alt="Evoca Online Banking Laptop"
              className="w-full h-auto drop-shadow-2xl rounded-lg"
              loading="eager"
            />
            {/* Play Button Overlay on Laptop */}
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 hover:bg-white/30 transition-all duration-300 shadow-lg">
              <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-cyan-400 border-b-[7px] border-b-transparent ml-1" />
            </div>
          </div>

          {/* Phone (փոքր-ինչ առաջ քաշված և աջակողմյան դիրքով) */}
          <div className="absolute -right-2 sm:right-6 md:right-0 -bottom-4 w-[28%] sm:w-[24%] md:w-[26%] max-w-[140px] z-20">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
              alt="Evoca Mobile App"
              className="w-full h-auto drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] rounded-md sm:rounded-xl"
              loading="eager"
            />
          </div>

          {/* Dot pattern background */}
          <div className="absolute -bottom-6 left-4 md:-left-4 grid grid-cols-5 gap-2 opacity-25 select-none pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-white rounded-full" />
            ))}
          </div>
        </div>

        {/* Աջ հատված: Տեքստ և Կոճակներ */}
        <div className="w-full lg:w-1/2 text-white text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black mb-5 leading-tight tracking-wide font-sans">
            Օնլայն և մոբայլ <br className="hidden sm:block lg:hidden" /> բանկինգ
          </h1>
          <p className="text-sm sm:text-base leading-relaxed opacity-85 max-w-[520px] mb-8 font-light text-center lg:text-left">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
          </p>

          <button className="bg-white text-[#6c24b5] px-10 py-3.5 rounded-full text-sm font-black hover:bg-gray-100 transition-all duration-300 mb-10 shadow-lg active:scale-98">
            Դառնալ հաճախորդ
          </button>

          {/* App Stores & QR Container */}
          <div className="w-full border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            {/* QR Code */}
            <div className="bg-white p-2 rounded-xl w-20 h-20 flex items-center justify-center shadow-md shrink-0">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                alt="Evoca QR Code Scan" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* App Badges */}
            <div className="flex flex-col gap-2.5 text-center sm:text-left">
              <span className="text-[11px] font-bold opacity-75 uppercase tracking-widest">
                Ներբեռնել հավելվածը՝
              </span>
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {/* App Store */}
                <a 
                  href="https://apps.apple.com/am/app/evocatouch/id970309076" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-black text-white flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 hover:bg-zinc-900 transition-colors duration-200 h-10 select-none"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z"/>
                  </svg>
                  <div className="text-left flex flex-col">
                    <span className="text-[8px] uppercase leading-none opacity-60">Download on the</span>
                    <span className="text-[12px] font-semibold leading-tight -mt-0.5">App Store</span>
                  </div>
                </a>

                {/* Google Play */}
                <a 
                  href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-black text-white flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 hover:bg-zinc-900 transition-colors duration-200 h-10 select-none"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                    <path d="M3.609 1.814L13.792 12l-10.183 10.186c-.024-.008-.046-.017-.067-.03L3.11 21.73A1.854 1.854 0 012.333 20.2V3.8c0-.622.308-1.192.777-1.53l.432-.426c.021-.013.043-.022.067-.03zM14.97 10.82l2.67-2.67 4.2 2.42c.8.46.8 1.22 0 1.68l-4.2 2.42-2.67-2.67a1.666 1.666 0 010-1.18zM4.646 1.144l11.025 6.36-2.585 2.585L4.646 1.144zm0 21.712l8.44-8.44 2.585 2.585-11.025 6.36c-.001 0-.001 0 0 0z"/>
                  </svg>
                  <div className="text-left flex flex-col">
                    <span className="text-[8px] uppercase leading-none opacity-60">GET IT ON</span>
                    <span className="text-[12px] font-semibold leading-tight -mt-0.5">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OnlineBankingHero;