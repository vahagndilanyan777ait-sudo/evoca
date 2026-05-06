import React from 'react';

const LogoDescription: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-24 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-8 tracking-tight">
          Բանկի լոգոտիպը
        </h2>

        {/* Բովանդակություն */}
        <div className="space-y-12">
          {/* Բացատրական տեքստ */}
          <p className="text-[#4a4a4a] text-[15px] md:text-[16px] leading-relaxed font-medium max-w-4xl">
            Բանկի լոգոն կազմված է evolution` էվոլյուցիա բառի արմատից և նմանեցված է evoke` զարթեցնել բառին: 
            Բառի երկրորդ տառը` V-ն, պատկերված է կորացված անկյուններով հավասարակողմ եռանկյունու տեսքով 
            և նմանեցված է դեպի աջ և վեր ուղղված սլաքի տեսքով` խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
          </p>

          {/* Լոգոտիպի պատկերում (SVG տարբերակով կամ Image) */}
          <div className="flex justify-start pt-4">
            <div className="flex items-baseline font-sans select-none">
              {/* "e" տառը */}
              <span className="text-[70px] md:text-[90px] font-bold text-gray-500 leading-none">e</span>
              
              {/* "V" սլաքանման տարբերակը */}
              <div className="mx-1 md:mx-2 transform translate-y-[-5px]">
                <svg 
                  width="55" 
                  height="75" 
                  viewBox="0 0 60 80" 
                  className="w-[45px] h-[60px] md:w-[55px] md:h-[75px]"
                >
                  <path 
                    d="M10 10L30 70L50 10" 
                    stroke="#6e32f0" 
                    strokeWidth="16" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none"
                  />
                </svg>
              </div>

              {/* "oca" հատվածը */}
              <span className="text-[70px] md:text-[90px] font-bold text-gray-500 leading-none">oca</span>
              
              {/* "BANK" հատվածը */}
              <span className="text-[60px] md:text-[80px] font-light text-gray-500 ml-1 leading-none tracking-tight">BANK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoDescription;