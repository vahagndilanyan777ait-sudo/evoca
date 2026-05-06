import React from 'react';

const OnlineBankingHero: React.FC = () => {
  return (
    <div className="relative w-full bg-[#6c24b5] overflow-hidden rounded-tl-[100px] md:rounded-tl-[160px] min-h-[500px] flex items-center">
      {/* Դեկորատիվ երկրաչափական պատկերներ (Floating elements) */}
      <div className="absolute top-10 left-20 w-8 h-8 border-2 border-pink-400 rounded-full opacity-60 animate-pulse" />
      <div className="absolute bottom-20 left-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-yellow-400 rotate-12" />
      <div className="absolute top-1/4 right-10 w-6 h-6 border-2 border-white rotate-45 opacity-40" />
      <div className="absolute bottom-10 right-20 text-pink-400 text-4xl font-bold opacity-50 rotate-12">~</div>

      <div className="max-w-[1300px] mx-auto px-6 py-12 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Ձախ հատված: Laptop և Phone սարքեր */}
        <div className="relative flex items-end gap-4 lg:gap-0 h-full">
          {/* Laptop */}
          <div className="relative z-10 w-[300px] md:w-[500px] lg:w-[600px]">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
              alt="Evoca Online Banking Laptop"
              className="w-full h-auto drop-shadow-2xl"
            />
            {/* Play Button Overlay on Laptop */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-cyan-400 border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>

          {/* Phone (փոքր-ինչ առաջ քաշված) */}
          <div className="absolute -right-12 bottom-0 z-20 w-[100px] md:w-[160px] lg:w-[180px]">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
              alt="Evoca Mobile App"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Dot pattern background */}
          <div className="absolute -bottom-6 -left-6 grid grid-cols-5 gap-2 opacity-30">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
            ))}
          </div>
        </div>

        {/* Աջ հատված: Տեքստ և Կոճակներ */}
        <div className="flex-1 text-white text-center lg:text-left z-10">
          <h1 className="text-[32px] md:text-[44px] font-black mb-6 leading-tight">
            Օնլայն և մոբայլ բանկինգ
          </h1>
          <p className="text-[14px] md:text-[16px] leading-relaxed opacity-90 max-w-[550px] mb-10">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
          </p>

          <button className="bg-white text-[#6c24b5] px-10 py-3.5 rounded-full text-[15px] font-bold hover:bg-gray-100 transition-all mb-12 shadow-lg">
            Դառնալ հաճախորդ
          </button>

          {/* App Stores & QR */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-2 rounded-lg w-24 h-24 flex items-center justify-center">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                alt="QR Code" 
                className="w-full h-full"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-medium opacity-80 uppercase tracking-widest">
                Ներբեռնել հավելվածները՝
              </span>
              <div className="flex gap-3">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="https://apps.apple.com/am/app/evocatouch/id970309076" alt="App Store" className="h-10" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <img src="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank&hl=en&gl=US" alt="Google Play" className="h-10" />
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