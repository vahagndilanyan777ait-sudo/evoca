import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section className="w-full bg-[#6c24b5] py-20 px-6 md:px-20 lg:px-40 flex flex-col md:flex-row items-start md:items-center justify-start gap-8 md:gap-16">
      {/* Վերնագիր */}
      <div className="flex-shrink-0">
        <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight">
          Մեր տեսլականը
        </h2>
      </div>

      {/* Բովանդակություն */}
      <div className="flex items-start gap-4 max-w-2xl">
        {/* Հորիզոնական գիծը */}
        <div className="w-10 h-[2px] bg-white mt-3 flex-shrink-0" aria-hidden="true" />
        
        {/* Տեքստը */}
        <p className="text-white text-lg md:text-xl font-medium leading-relaxed opacity-95">
          Լինել ամենանորարար և առաջադեմ բանկային ծառայություններ մատուցող 
          ֆինանսական հաստատությունը Հայաստանում, որի բոլոր ծառայություններից 
          հնարավոր կլինի օգտվել առանց բանկ այցելելու:
        </p>
      </div>
    </section>
  );
};

export default VisionSection;