import React from 'react';

const WhyWorkWithUs: React.FC = () => {
  return (
    <section className="w-full bg-white py-10 md:py-16 px-4 md:px-10 lg:px-20 font-sans antialiased overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Վերնագիր և Տեքստ */}
        <div className="mb-8 md:mb-10 space-y-4 md:space-y-6 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight">
            Ինչու՞ աշխատել Evoca-ում
          </h2>
          
          <p className="text-[#4a4a4a] text-xs sm:text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto md:mx-0 text-justify md:text-left">
            «Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ։ Աշխատակիցներն ուրախ են, 
            մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների 
            մասին»
          </p>
        </div>

        {/* Պատկերի բլոկ (Responsive բարձրությամբ) */}
        <div className="relative w-full overflow-hidden rounded-sm shadow-sm bg-gray-50">
          <img 
            src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg"
            alt="Working at Evoca" 
            className="w-full h-[220px] sm:h-[350px] md:h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyWorkWithUs;