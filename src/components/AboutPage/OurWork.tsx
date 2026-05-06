import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-12 ml-4">
          Մեր առաքելությունը
        </h2>

        <div className="relative">
          {/* Նկարի բլոկ */}
          <div className="w-full md:w-11/12 ml-auto overflow-hidden rounded-sm shadow-lg">
            <img 
              src="https://www.evoca.am/images-cache/about_pages/1/160992374514/946x430.jpg" 
              alt="Evoca Office" 
              className="w-full h-[300 md:h-[500px] object-cover"
            />
          </div>

          {/* Տեքստային բլոկ (Overlapping Card) */}
          <div className="relative md:absolute md:bottom-[-60px] md:left-0 bg-[#f9f9fb] p-8 md:p-12 w-full md:w-[650px] shadow-xl border-l-[6px] border-[#6c24b5] z-10 mt-6 md:mt-0">
            <div className="space-y-6">
              <p className="text-[#333] text-[16px] md:text-[18px] leading-relaxed font-medium">
                Նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ մատուցել 
                ֆինանսական ծառայությունները պարզ, արագ և հարմարավետ 
                եղանակով՝ գործելով <span className="italic font-bold">mobile-first</span> ձևաչափով։
              </p>
              
              <p className="text-[#4a4a4a] text-[15px] md:text-[17px] leading-relaxed">
                Մենք մշտապես կատարելագործում ենք մեր ծառայությունները՝ 
                դարձնելով մարդկանց կյանքն ավելի հարմարավետ։
              </p>
            </div>
          </div>
        </div>
        
        {/* Ավելացնում ենք դատարկ տարածություն ներքևից, որպեսզի բացարձակ դիրքով տեքստը չծածկի հաջորդ բաժինը */}
        <div className="h-20 md:h-32"></div>
      </div>
    </section>
  );
};

export default MissionSection;