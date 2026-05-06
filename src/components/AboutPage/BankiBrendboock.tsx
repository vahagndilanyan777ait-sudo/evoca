import React from 'react';

const BrandbookSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-24 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-8 tracking-tight">
          Բանկի բրենդբուքը
        </h2>

        {/* Նկարագրություն */}
        <div className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-relaxed font-medium mb-12 max-w-4xl">
          <p className="mb-2">
            Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները, 
            տառատեսակները և բրենդի այլ կարևոր տարրերը:
          </p>
          <p>
            Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ կառուցելու համար:
          </p>
        </div>

        {/* Brandbook Banner */}
        <div className="relative group cursor-pointer overflow-hidden rounded-sm shadow-2xl">
          {/* Background Image/Gradient Container */}
          <div className="w-full h-[200px] md:h-[280px] bg-black relative overflow-hidden flex items-center justify-center">
            {/* Այստեղ կարող ես դնել իրական նկարը կամ օգտագործել այս վիզուալ էֆեկտը */}
            <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-purple-900 via-black to-purple-800 animate-pulse" />
            
            {/* Վերնագիր բաների վրա */}
            <h3 className="relative z-10 text-white text-5xl md:text-7xl font-black tracking-[0.2em] select-none transition-transform duration-500 group-hover:scale-105">
              BRANDBOOK
            </h3>

            {/* Click Here Button Overlay */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
              <button className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-all active:scale-95 shadow-lg">
                <span className="text-xs">✨</span>
                Click Here
              </button>
            </div>
          </div>

          {/* Hover Overlay effect */}
          <div className="absolute inset-0 bg-[#6c24b5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
};

export default BrandbookSection;