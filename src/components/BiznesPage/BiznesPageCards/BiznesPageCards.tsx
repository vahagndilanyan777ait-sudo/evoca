import React from 'react';

// Տվյալների տիպավորումը
interface Loan {
  id: string;
  title: string;
  description: string;
  duration: string;
  amount: string;
  rate: string;
  imageUrl: string;
}

// Ստատիկ տվյալներ (առանց բազայի)
const LOANS_DATA: Loan[] = [
  {
    id: "1",
    title: "Արագ բիզնես վարկ/վարկային գիծ",
    description: "Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով:",
    duration: "60 ամիս",
    amount: "30 մլն ֏",
    rate: "8.5-14.5%",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png" // Օգտագործիր քո նկարի իրական path-ը
  },
  {
    id: "2",
    title: "Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ",
    description: "Evocabank-ը տրամադրում է բիզնես վարկ՝ տեքստիլ հումքի ներմուծման համար: Շտապեք դիմել, զարգացնել Ձեր բիզնեսը և դառնալ ոլորտում մրցունակ:",
    duration: "36 ամիս",
    amount: "500 մլն ֏",
    rate: "8%",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png" // Օգտագործիր քո նկարի իրական path-ը
  },
  {
    id: "3",
    title: "Բիզնես վարկ",
    description: "Զարգացրե'ք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով:",
    duration: "10 տարի",
    amount: "1 մլն ֏",
    rate: "6%-ից",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg" // Օգտագործիր քո նկարի իրական path-ը
  },
  {
    id: "4",
    title: "Փոքր և միջին բիզնեսի վարկավորում",
    description: "Առաջարկում ենք փոքր և միջին բիզնես վարկեր: Լրացրեք Online հայտը և Ձեր անհատական բիզնես խորհրդատուն կապ կհաստատի Ձեզ հետ 1 աշխատանքային օրվա ընթացքում:",
    duration: "84 ամիս",
    amount: "750 մլն. ֏",
    rate: "7%-ից",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16148653401062/415x261.jpg" // Փոխիր իրական path-ով
  },
  {
    id: "5",
    title: "Փոքր և միջին բիզնեսի վարկավորում Լիկվիդ +",
    description: "Ստացիր բիզնես վարկ Լիկվիդ+ Evocabank-ից շահավետ պայմաններով",
    duration: "60 ամիս",
    amount: "150 մլն ֏",
    rate: "6.5%-ից",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16507186179774/415x261.png" // Փոխիր իրական path-ով
  },
  {
    id: "6",
    title: "Փոքր և միջին բիզնեսի վարկավորում «Գործընկեր»",
    description: "Եթե Դուք զբաղվում եք փոքր և միջին բիզնեսով և նախատեսում եք ակտիվորեն օգտվել բանկային տարբեր ծառայություններից, այս վարկատեսակը հենց Ձեզ համար է:",
    duration: "60 ամիս",
    amount: "750 մլն. ֏",
    rate: "6%-ից",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16148661034998/415x261.jpg" // Փոխիր իրական path-ով
  },
  {
    id: "7",
    title: "Evoca GO",
    description: "Օգտվեք Եվրոպական Ներդրումային Բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից:",
    duration: "90 ամիս",
    amount: "500 մլն. ֏",
    rate: "10.5 % ֏",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg"
  },
  {
    id: "8",
    title: "Վարկեր ԳՀՀ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր",
    description: "Եթե Դուք ցանկանում եք ձեռք բերել ԷՄ սարքավորումներ և մեքենաներ կամ իրականացնել այլ էներգաարդյունավետ ներդրումներ, այս վարկատեսակը Ձեզ համար է:",
    duration: "5 տարի",
    amount: "500 մլն. ֏",
    rate: "9%-ից",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg"
  },
  {
    id: "9",
    title: "KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
    description: "Էներգաարդյունավետ և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով:",
    duration: "120 ամիս",
    amount: "10 մլն. ֏",
    rate: "9.5%",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg"
  },
  {
    id: "10",
    title: "Պարզ բիզնես վարկ",
    description: "Ստացեք Պարզ բիզնես վարկ՝ անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույքով: Որոշումը կայացվում է 2-4 աշխատանքային օրում:",
    duration: "60 ամիս",
    amount: "50 մլն. ֏",
    rate: "7.5%-ից",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg"
  },
  {
    id: "11",
    title: "Հաշվի վարկավորում",
    description: "Հանդիսանո՞ւմ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը:",
    duration: "180 օր",
    amount: "30%",
    rate: "7%-ից",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg"
  },
  {
    id: "12",
    title: "Վարկային գիծ",
    description: "Եթե ունեք կազմակերպություն կամ անհատ ձեռնարկատեր եք և ցանկանում եք մշտապես ունենալ հասանելի վարկային միջոցներ:",
    duration: "5 տարի",
    amount: "1 մլրդ. ֏",
    rate: "7%-ից",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg"
  },
  {
    id: "13",
    title: "Արտադրողականության խթանման ծրագրի ներքո վարկ (գործում է մինչև 31.12.2026թ.)",
    description: "Մատչելի ֆինանսավորում Ձեր բիզնեսը արդիականացնելու և արտադրողականությունը խթանելու նպատակով:",
    duration: "120 ամիս",
    amount: "1 մլրդ. ֏",
    rate: "6%",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg"
  },
  {
    id: "14",
    title: "KFW բանկի կողմից ՄՓՄՁ-ների ֆինանսավորում",
    description: "Կատարեք Ձեր կապիտալ ներդրումները և իրականացրեք բիզնես գործունեության նպատակները Evocabank-ի հետ:",
    duration: "60 ամիս",
    amount: "160 մլն. ֏",
    rate: "9,5%-ից",
    imageUrl: "https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png"
  }
];

const BusinessLoans: React.FC = () => {
  return (
    <section className="bg-white min-h-screen font-sans">
      {/* Մանուշակագույն Header Banner */}
      <div className="bg-[#6c24b5] py-3 text-center">
        <h2 className="text-white text-sm font-bold uppercase tracking-wide">Բիզնես վարկեր</h2>
      </div>

      {/* Breadcrumbs */}
      <div className="px-4 lg:px-20 py-4 text-xs text-gray-400 flex items-center gap-2">
        <span className="cursor-pointer hover:text-gray-600">🏠</span> 
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span> 
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Վարկեր</span> 
        <span>›</span>
        <span className="text-gray-800 font-medium">Բիզնես վարկեր</span>
      </div>

      <div className="px-4 lg:px-20 pb-20">
        <h1 className="text-4xl font-bold text-gray-900 mt-6 mb-12">Բիզնես վարկեր</h1>

        <div className="flex flex-col gap-10">
          {LOANS_DATA.map((loan) => (
            <div 
              key={loan.id} 
              className="flex flex-col md:flex-row bg-[#f8f9fa] rounded-3xl overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Նկարի հատված (Ձախ կողմ) */}
              <div className="md:w-[400px] bg-white flex items-center justify-center p-8">
                <img 
                  src={loan.imageUrl} 
                  alt={loan.title} 
                  className="w-full h-auto object-contain max-h-[220px]"
                />
              </div>

              {/* Տեքստային հատված (Աջ կողմ) */}
              <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
                    {loan.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed mb-8 max-w-2xl">
                    {loan.description}
                  </p>

                  {/* Պարամետրերի Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase font-semibold">Մինչև</p>
                      <p className="text-2xl font-black text-[#6c24b5]">{loan.duration}</p>
                      <p className="text-[11px] text-gray-400 uppercase font-semibold mt-1">Ժամկետ</p>
                    </div>
                    
                    <div>
                      <p className="text-[11px] text-gray-400 uppercase font-semibold">Մինչև</p>
                      <p className="text-2xl font-black text-[#6c24b5]">{loan.amount}</p>
                      <p className="text-[11px] text-gray-400 uppercase font-semibold mt-1 leading-tight">
                        Սահմանաչափ կամ <br /> համարժեք արտարժույթ
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-black text-[#6c24b5] mt-5">{loan.rate}</p>
                      <p className="text-[11px] text-gray-400 uppercase font-semibold mt-1">
                        {loan.id === "2" ? "Տոկոսադրույքի սուբսիդավորման չափ" : "Տարեկան տոկոսադրույք"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Կոճակ */}
                <button className="w-fit flex items-center gap-3 bg-[#eee5f8] text-[#6c24b5] px-8 py-3 rounded-full font-bold text-sm hover:bg-[#6c24b5] hover:text-white transition-all duration-300 group">
                  Մանրամասն 
                  <span className="text-[12px] group-hover:translate-x-1 transition-transform">❯</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessLoans;