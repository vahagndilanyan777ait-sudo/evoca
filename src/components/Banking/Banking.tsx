import React from 'react';

const OnlineBanking: React.FC = () => {
  return (
    <section className="relative w-full bg-[#6c24b5] py-16 px-6 lg:px-20 overflow-hidden flex items-center min-h-[600px]">
      {/* Դեկորատիվ էլեմենտներ ֆոնի վրա */}
      <div className="absolute top-10 left-10 text-white opacity-20 text-5xl">●</div>
      <div className="absolute bottom-10 right-10 text-white opacity-20 text-6xl">▲</div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow-400 rounded-full" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Ձախ հատված՝ Laptop և Phone */}
        <div className="lg:col-span-7 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="relative">
            {/* Laptop Image */}
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" 
              alt="Evocabank Laptop" 
              className="w-full max-w-[550px] drop-shadow-2xl"
            />
            {/* Play Button Overlay (Optional) */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-12 h-12 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
               </div>
            </div>
          </div>
          
          {/* Mobile Image */}
          <div className="relative -mt-20 md:mt-0 md:-ml-16">
            <img 
              src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
              alt="Evoca Mobile App" 
              className="w-48 lg:w-56 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Աջ հատված՝ Տեքստային բովանդակություն */}
        <div className="lg:col-span-5 text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Օնլայն և մոբայլ բանկինգ
          </h2>
          
          <p className="text-lg opacity-90 leading-relaxed max-w-lg">
            Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
          </p>

          <button className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors">
            Դառնալ հաճախորդ
          </button>

          {/* QR և App Stores */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <div className="bg-white p-2 rounded-lg">
              {/* QR Code Placeholder */}
              <img src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" alt="QR Code" className="w-20 h-20" />
            </div>
            
            <div className="space-y-3">
              <span className="text-xs font-medium block">Ներբեռնել հավելվածները՝</span>
              <div className="flex gap-3">
                <a href="#" className="transition-transform hover:scale-105">
                  <img src="https://apps.apple.com/am/app/evocatouch/id970309076" alt="App Store" className="h-10" />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <img src="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank&hl=en&gl=US" alt="Google Play" className="h-10" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Կետիկավոր դեկորացիա ներքևի անկյունում */}
      <div className="absolute bottom-0 left-0 p-4 opacity-30">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineBanking;