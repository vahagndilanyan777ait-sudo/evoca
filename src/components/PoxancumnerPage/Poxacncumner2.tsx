import React from 'react';

const GeneralTermsAndBanner: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Տեքստային բաժին: Ընդհանուր դրույթներ */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h2 className="text-[20px] font-black text-gray-900 mb-6 uppercase tracking-wide">
          Ընդհանուր դրույթներ
        </h2>
        
        <div className="space-y-6 text-[14px] text-gray-700 leading-relaxed max-w-[1000px]">
          <p>
            Ձեր բանկային փոխհարաբերությունները կարգավորվում են պայմանագրով, «Բանկերի և բանկային գործունեության մասին» ՀՀ օրենքով, ՀՀ Կենտրոնական բանկի իրավական ակտերով, ՀՀ այլ իրավական ակտերով, որոնցից քաղվածքներին կարող եք ծանոթանալ բանկի տարածքում կամ բանկի պաշտոնական կայքէջում:
          </p>
          
          <p>
            Ձեր փոխանցումները կատարվում են վճարման հանձնարարականի հիման վրա: Քաղվածքի ստացման չափը, վայրը սահմանվում է պայմանագրով: Կարող եք ստանալ նաև այլ փաստաթղթեր:
          </p>
          
          <p>
            Փոխանցումները կատարվում են հերթականությամբ՝ միևնույն ժամին բանկ ներկայացված վճարման հանձնարարականները կատարվում են հերթականությամբ: Մինչև ժամը 15:30-ը բանկ ներկայացված վճարման հանձնարարականները կատարվում են նույն բանկային օրը, իսկ ժամը 15:30-ից հետո ներկայացվածները՝ հաջորդ բանկային օրը, եթե պայմանագրով այլ բան նախատեսված չէ:
          </p>
          
          <p>
            Բանկի կողմից սահմանված փոխանցումների սակագները կարող եք տեսնել <span className="text-[#6c24b5] underline cursor-pointer font-bold">սակագների սանդղակում</span>: Ձեր փոխանցումները կարող են իրականացվել նաև ՀՀ դրամով, որի դեպքում սահմանված կարգով կիրականացվի արտարժույթի փոխարկում՝ բանկի կողմից տվյալ պահին սահմանված փոխարժեքով:
          </p>
          
          <p>
            Մենք պարտավոր ենք տրամադրել յուրաքանչյուր փոխանցման կատարմանը հավաստող փաստաթուղթ, որտեղ նշված կլինի փոխանցման գումարը, արժույթը, միջնորդավճարի չափը և այլ մանրամասներ:
          </p>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
          style={{ 
            backgroundImage: `https://www.evoca.am/images-cache/menu/1/1611294541215/1920x530.jpg')`, // Evoca-ի իրական ֆոնային նկարը
          }}
        >
          {/* Մութ շերտ (Overlay) */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content Container */}
        <div className="relative h-full max-w-[1200px] mx-auto px-6 flex items-center justify-center">
          <div className="max-w-[800px] text-center">
            <h2 className="text-white text-[24px] md:text-[32px] lg:text-[38px] font-black leading-tight tracking-wide drop-shadow-lg">
              Կարող եք գումարներ փոխանցել ինչպես <br /> ձեր հաշվից, այնպես էլ առանց հաշվի <br /> բացման:
            </h2>
          </div>
        </div>

        {/* Floating Social Icons (նկարում երևացող ձախակողմյան նշանները) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          <span className="text-white/70 hover:text-white cursor-pointer text-[10px] font-bold">f</span>
          <span className="text-white/70 hover:text-white cursor-pointer text-[10px] font-bold">in</span>
          <span className="text-white/70 hover:text-white cursor-pointer text-[10px] font-bold">p</span>
        </div>
      </div>
    </div>
  );
};

export default GeneralTermsAndBanner;