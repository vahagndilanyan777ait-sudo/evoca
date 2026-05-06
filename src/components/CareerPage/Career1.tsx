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
    <div className="w-full font-sans">
      {/* Նավիգացիոն մենյու */}
      <nav className="bg-[#6c24b5] w-full flex justify-center items-center overflow-x-auto whitespace-nowrap">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`px-6 py-4 text-white text-[13px] font-bold transition-colors duration-300 ${
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
        className="relative w-full h-[500px] md:h-[400px] bg-cover bg-center flex items-center px-4 md:px-20"
        style={{ 
          backgroundImage: `url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSjdQi7DqtM0nlZX-2PI4GhqM5X40VZOizImGRcsiKNl6QbT5Ov')` // Փոխարինիր իրական հղումով
        }}
      >
        {/* Սպիտակ քարտը */}
        <div className="bg-[#fcfcfd] p-8 md:p-12 rounded-tl-[40px] rounded-br-[40px] shadow-2xl max-w-[550px] relative z-10">
          <h1 className="text-[#1a1a1a] text-3xl md:text-4xl font-black mb-6">
            Մշակույթ
          </h1>
          <p className="text-[#4a4a4a] text-[15px] md:text-base leading-relaxed font-medium">
            Evoca-ում աշխատելը հաճելի է: Առօրյան լցված է նորարարություններով: 
            Այստեղ տաղանդները անընդհատ զարգանում են ու կատարելագործվում:
          </p>
        </div>

        {/* Դեկորատիվ տարր (Լոգոյի եռանկյունին հետնաֆոնի վրա) */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
           {/* Սա կարող է լինել SVG կամ նկար */}
        </div>
      </div>
    </div>
  );
};

export default CultureHero;