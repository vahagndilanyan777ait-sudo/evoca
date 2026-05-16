import React from 'react';

const MainHero: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 md:py-20 px-4 md:px-10 lg:px-20 font-sans overflow-hidden antialiased">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Հետնաֆոնային տեքստ "Գլխավոր" (Responsive չափսերով) */}
        <div className="absolute -top-6 md:-top-10 -left-2 md:-left-6 z-0 select-none">
          <h2 className="text-[44px] sm:text-[80px] md:text-[120px] font-black text-gray-50 opacity-80 leading-none tracking-tight">
            Գլխավոր
          </h2>
        </div>

        {/* Հիմնական կոնտեյներ */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Նկարի և Քարտի բլոկը */}
          <div className="relative w-full max-w-5xl flex flex-col md:block">
            
            {/* Նկարի հատված */}
            <div className="overflow-hidden rounded-sm shadow-sm bg-gray-50">
              <img 
                src="https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png"
                alt="Evoca Abstract" 
                className="w-full h-[200px] sm:h-[320px] md:h-[450px] object-cover transition-transform duration-1000 hover:scale-[1.02]"
              />
            </div>

            {/* Լողացող սպիտակ քարտը (Floating Card) */}
            {/* Մոբայլում relative է և նստում է նկարի տակ, desktop-ում դառնում է absolute */}
            <div className="relative md:absolute bottom-0 md:bottom-[-40px] left-0 md:left-[5%] lg:left-[10%] bg-white p-5 sm:p-6 md:p-10 shadow-xl md:shadow-2xl w-full md:max-w-[450px] rounded-sm border-b-4 border-[#6c24b5] mt-[-20px] md:mt-0 mx-auto max-w-[92%] sm:max-w-[95%] md:w-auto">
              <div className="space-y-3 md:space-y-4">
                {/* Կատեգորիա */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-5 h-2.5 sm:w-6 sm:h-3 bg-[#2d004d] shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700 uppercase tracking-widest">
                    Կենսակերպ
                  </span>
                </div>

                {/* Վերնագիր */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1a1a1a] leading-tight">
                  Evoca-գույնի հոգեբանական նկարագիրը
                </h3>

                {/* Նկարագրություն */}
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium text-justify sm:text-left">
                  Գույնը մարքեթինգային գործիք է։ Այն ազդում է մարդու հոգեբանության վրա։
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Ամսաթիվը ներքևի աջ հատվածում */}
        <div className="w-full text-center md:text-right mt-8 md:mt-16 relative z-10">
          <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-wider block md:inline">
            Թարմացվել է՝ 14.03.2024 12:35
          </span>
        </div>

      </div>
    </section>
  );
};

export default MainHero;