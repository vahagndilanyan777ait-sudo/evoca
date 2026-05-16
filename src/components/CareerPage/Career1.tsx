import React, { useState } from 'react';

const CultureHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Մշակույթ');

  const navItems = [
    'Մշակույթ',
    'Առավելություններ',
    'Հաճախ տրվող հարցեր',
    'Ինչպես ընդունվել աշխատանքի Evocabank-ում'
  ];

  return (
    <div className="w-full font-sans antialiased">
      
      {/* Նավիգացիոն մենյու (Հորիզոնական scroll-ով մոբայլի համար) */}
      <nav className="bg-[#6c24b5] w-full flex justify-start md:justify-center items-center overflow-x-auto whitespace-nowrap sticky top-0 z-50 shadow-md scrollbar-none">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`px-5 sm:px-6 py-4 text-white text-xs sm:text-[13px] font-bold transition-colors duration-300 whitespace-nowrap ${
              activeTab === item 
                ? 'bg-[#5a1e96]' 
                : 'hover:bg-[#5a1e96]'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Հիմնական բաները (Hero Section) */}
      <div 
        className="relative w-full min-h-[400px] md:h-[450px] bg-cover bg-center flex items-center py-12 md:py-0 px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjdQi7DqtM0nlZX-2PI4GhqM5X40VZOizImGRcsiKNl6QbT5Ov')`
        }}
      >
        
        {/* Սպիտակ քարտը (Responsive ձևաչափով) */}
        <div className="bg-[#fcfcfd]/95 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-tl-[24px] sm:rounded-tl-[40px] rounded-br-[24px] sm:rounded-br-[40px] shadow-2xl w-full max-w-[550px] relative z-10 mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-[#1a1a1a] text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">
            {activeTab} {/* Փոփոխվում է դինամիկ ըստ ընտրված տաբի */}
          </h1>
          <p className="text-[#4a4a4a] text-sm sm:text-[15px] md:text-base leading-relaxed font-medium text-justify md:text-left">
            Evoca-ում աշխատելը հաճելի է: Առօրյան լցված է նորարարություններով: 
            Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում:
          </p>
        </div>

        {/* Դեկորատիվ տարր (Լոգոյի եռանկյունին հետնաֆոնի վրա) */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none z-0">
          {/* Այստեղ կարող եք տեղադրել ձեր SVG կամ լոգոն */}
        </div>
      </div>

    </div>
  );
};

export default CultureHero;