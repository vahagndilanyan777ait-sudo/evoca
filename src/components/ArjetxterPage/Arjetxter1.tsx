import React from 'react';

const InvestmentServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#333]">
      {/* Մանուշակագույն Ենթամենյու */}
      <div className="bg-[#6c24b5] w-full py-3 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-6 text-white text-[12px] font-bold uppercase tracking-wider">
          <span className="border-b-2 border-white pb-1 cursor-pointer">Ներդրումային ծառայություններ</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Պարտատոմսեր</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">ՀՊՊ ծառայություններ</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Ռեպո/Հակադարձ Ռեպո գործարքներ</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">EvocaINVEST</span>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-8">
          <span className="hover:text-gray-600 cursor-pointer">🏠</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Արժեթղթեր</span>
          <span>›</span>
          <span className="text-[#6c24b5]">Ներդրումային ծառայություններ</span>
        </nav>

        {/* Banner Section */}
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#f8f5fb] rounded-[40px] overflow-hidden min-h-[400px] mb-16">
          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
            <h1 className="text-[32px] lg:text-[40px] font-black text-gray-900 leading-tight mb-6">
              Ներդրումային <br /> ծառայություններ
            </h1>
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[450px]">
              Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան:
            </p>
          </div>
          <div className="flex-1 relative min-h-[300px] bg-[#d7c4f3]/30">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
              alt="Investment Growth Concept"
              className="absolute inset-0 w-full h-full object-contain p-8"
            />
          </div>
        </div>

        {/* Detailed Information Section */}
        <div className="max-w-[900px] space-y-8 text-[14px] leading-relaxed text-gray-700">
          <p>
            Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
          </p>

          <section>
            <h3 className="text-[#6c24b5] font-black mb-4">Ինչպե՞ս դառնալ հաճախորդ.</h3>
            <p>
              Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ <span className="text-[#6c24b5] underline cursor-pointer">այստեղ</span>:
            </p>
            <p className="mt-4">
              Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-[#6c24b5] font-black">Հասցե՝</h3>
            <p>Երևան, Հանրապետության 44/2</p>
          </section>

          <section className="space-y-2">
            <h3 className="text-[#6c24b5] font-black">Հետադարձ կապ՝</h3>
            <div className="font-bold">
              <p>Հեռ.` 033 777 453</p>
              <p>374 33 603055</p>
            </div>
            <div className="flex gap-2 mt-2">
              <span className="text-green-500 text-xl">💬</span> {/* WhatsApp/Viber icons placeholder */}
            </div>
          </section>

          <section>
            <p>էլ. հասցե՝ <a href="mailto:investsecurities@evoca.am" className="text-[#6c24b5] underline font-bold">investsecurities@evoca.am</a></p>
          </section>

          {/* Warning Section */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-[13px] text-gray-500 font-medium">
              <span className="text-[#6c24b5] font-black uppercase mr-2">ՈՒՇԱԴՐՈՒԹՅՈՒՆ՝</span> 
              Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑՈՒՄ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentServices;