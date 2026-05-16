import React from 'react';

const EvocaTouchPage = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen p-4 sm:p-8 lg:p-16 font-sans text-gray-800 leading-relaxed overflow-hidden">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10 lg:p-12 relative">
        
        {/* Breadcrumbs / Header Placeholder */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 sm:mb-8 select-none">
          <span className="hover:text-[#6c24b5] transition-colors cursor-pointer">🏠 Անհատ</span>
          <span className="text-gray-300">›</span>
          <span className="text-gray-400">EvocaTOUCH</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
          EvocaTOUCH
        </h1>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7 space-y-6 text-[15px] text-gray-600">
            <p className="text-lg text-gray-800 font-normal leading-relaxed">
              Շատերին թվում է՝ դժվար ու անիրական է ֆինանսական ոլորտում լինել կրեատիվ, սակայն Evocabank-ին 
              տարիներ շարունակ հաջողվում է գտնել <span className="font-semibold text-[#6c24b5] italic">out of box</span> լուծումներ և շուկային ներկայանալ նոր և ժամանակակից 
              պրոդուկտներով:
            </p>

            <p>
              Այդ գաղափարների շարքից է նոր EvocaTOUCH հավելվածը, որն առանձնանում է ժամանակակից թվային 
              լուծումներով և հնարավորություններով:
            </p>

            <p>
              EvocaTOUCH հավելվածն անվտանգ է, հարմար և նախատեսված է անմիջապես smartphone-ից մի շարք 
              բանկային ծառայություններից օգտվելու համար: Կարևորելով հավելվածի անվտանգ օգտագործումը՝ Բանկն 
              ապահովում է օգտատերերի մասին ինֆորմացիայի և կատարած գործարքների պաշտպանությունը՝ 
              օգտագործելով գաղտնագրման վերջին տեխնոլոգիաները:
            </p>

            <p>
              Հավելվածը գրվել է User Interface և User Experience նորագույն սկզբունքներով, ունի գունային 2 appearance՝ <span className="font-medium text-gray-900">Dark</span> և 
              <span className="font-medium text-gray-900"> Light</span>: Այն ավելի նման է facebook-ի կամ instagram-ի feed-ի՝ ամենակարևոր ու շատ օգտագործվող ֆունկցիաներն 
              անմիջապես առաջին էջին են՝ Քարտեր, Հաշիվներ, Վարկեր, Ավանդներ: Օգտատերերը հնարավորություն ունեն 
              ստեղծել Template-ներ, որի շնորհիվ բանկային փոխանցումները կատարվում են ավելի արագ ու հեշտ:
            </p>

            <div className="bg-purple-50 rounded-2xl p-5 border border-purple-100 my-6">
              <p className="text-sm font-medium text-gray-800">
                ⚡ Նոր հավելվածն առաջարկում է գործառույթների լայն շրջանակ, որը վերացնում է ֆիզիկական մասնաճյուղ այցելելու անհրաժեշտությունը։ Առանց գրանցման և սպասարկման վճարի՝ դուք կարող եք.
              </p>
            </div>

            {/* List Section */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
              {[
                "Բացել բանկային հաշիվներ",
                "Պատվիրել թվային քարտ վայրկյաններում",
                "Ստանալ օնլայն վարկ",
                "Ներդնել բարձր տոկոսով ավանդ",
                "Փոխանցումներ տեղական և արտերկրյա բանկերին",
                "Կատարել կոմունալ վճարումներ",
                "Ստանալ և վճարել ԱՊՊԱ ու տուգանքներ",
                "Փոխանցումներ կոնտակտային տվյալներով",
                "24/7 աջակցություն նամակների միջոցով"
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-2.5 text-sm">
                  <span className="text-[#6c24b5] font-bold mt-0.5 text-base flex-shrink-0">✓</span>
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>

            <p className="pt-4">
              Հավելվածից օգտվելու հարմարավետությունն ու անվտանգությունը բարձրացնելու համար օգտատերը կարող է 
              ակտիվացնել կենսաչափական նույնականացում՝ օգտագործելով մատնահետքի կամ դեմքի ճանաչման 
              համակարգերը: 
            </p>

            <p className="font-semibold text-[#6c24b5] italic text-base pt-4 border-t border-gray-100">
              «EvocaTOUCH-ը պարզապես բանկային հավելված չէ. կարծում ենք, այն ձեզ համար դառնալու է ապրելակերպի մի մաս:»
            </p>

            {/* Download Badges Action */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <a href="#" className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors shadow-sm">
                <span className="text-2xl">🍏</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold -mt-1">App Store</p>
                </div>
              </a>
              <a href="#" className="w-full sm:w-auto bg-black text-white px-5 py-2.5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors shadow-sm">
                <span className="text-2xl">🤖</span>
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold -mt-1">Google Play</p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Component Placeholder */}
          <div className="lg:col-span-5 w-full sticky top-8 hidden lg:flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/19] bg-gradient-to-tr from-[#6c24b5] to-[#8b3fd6] rounded-[45px] p-3.5 shadow-2xl border-4 border-gray-900 overflow-hidden group">
              {/* Phone Speaker & Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
              
              {/* App Screen Content Mockup */}
              <div className="w-full h-full bg-slate-900 rounded-[36px] p-4 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="space-y-4 pt-6">
                  <div className="flex justify-between items-center text-xs opacity-60">
                    <span>EvocaTOUCH</span>
                    <span>12:00 PM</span>
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center font-bold text-xl text-purple-300">
                    eT
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Բարի գալուստ</h4>
                    <p className="text-xs text-gray-400">Ձեր ֆինանսները ափի մեջ</p>
                  </div>
                </div>

                {/* Simulated UI Cards inside Phone */}
                <div className="space-y-2.5 pb-2">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl text-xs space-y-1.5 transform group-hover:scale-105 transition-transform">
                    <div className="flex justify-between">
                      <span className="opacity-60">Visa Infinite</span>
                      <span className="font-bold">7,500,000 ֏</span>
                    </div>
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-purple-400" />
                    </div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl text-xs flex justify-between items-center opacity-80">
                    <span>Օնլայն Փոխանցումներ</span>
                    <span>⚡</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background blur decorative circles */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-44 h-44 bg-purple-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 -top-10 -left-10 w-44 h-44 bg-blue-100 rounded-full blur-3xl opacity-40" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default EvocaTouchPage;