import React from 'react';

const MainHero: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Հետնաֆոնային տեքստ "Գլխավոր" */}
        <div className="absolute -top-10 -left-6 z-0 select-none">
          <h2 className="text-[70px] md:text-[120px] font-black text-gray-100 opacity-70 leading-none">
            Գլխավոր
          </h2>
        </div>

        {/* Հիմնական կոնտեյներ */}
        <div className="relative z-10 flex flex-col items-center">
          
          {/* Նկարի բլոկը */}
          <div className="relative w-full max-w-5xl">
            <div className="overflow-hidden rounded-sm shadow-sm">
              <img 
                src="https://www.evoca.am/images-cache/blogs/1/16336923273854/1440x650.png" // Փոխարինիր իրական հղումով
                alt="Evoca Abstract" 
                className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-1000 hover:scale-105"
              />
            </div>

            {/* Լողացող սպիտակ քարտը (Floating Card) */}
            <div className="absolute bottom-[-40px] left-[5%] md:left-[10%] bg-white p-6 md:p-10 shadow-2xl max-w-[90%] md:max-w-[450px] rounded-sm border-b-4 border-[#6c24b5]">
              <div className="space-y-4">
                {/* Կատեգորիա */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-3 bg-[#2d004d]" />
                  <span className="text-xs font-bold text-gray-800 uppercase tracking-widest">
                    Կենսակերպ
                  </span>
                </div>

                {/* Վերնագիր */}
                <h3 className="text-xl md:text-2xl font-black text-[#1a1a1a] leading-tight">
                  Evoca-գույնի հոգեբանական նկարագիրը
                </h3>

                {/* Նկարագրություն */}
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  Գույնը մարքեթինգային գործիք է։ Այն ազդում է մարդու հոգեբանության վրա։
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ամսաթիվը ներքևի աջ հատվածում */}
        <div className="w-full text-right mt-16 md:mt-12">
          <span className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-tighter">
            Թարմացվել է՝ 14.03.2024 12:35
          </span>
        </div>

      </div>
    </section>
  );
};

export default MainHero;