import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// 1. Տիպերի սահմանում
type TabType = 'loans' | 'credit-history' | 'important-info';

interface LoanInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  amount: string;
  duration: string;
  rate: string;
  subRate?: string;
}

// 2. Օժանդակ կոմպոնենտներ
const LoanCard: React.FC<{ loan: LoanInfo }> = ({ loan }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 py-8 md:py-12 border-b border-gray-100 last:border-0 items-start transition-all duration-300">
      
      {/* Նկարի բլոկ */}
      <div className="w-full lg:w-[360px] flex-shrink-0">
        <img 
          src={loan.image} 
          alt={loan.title} 
          className="w-full h-[200px] sm:h-[240px] lg:h-[220px] object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        />
      </div>
      
      {/* Ինֆորմացիոն բլոկ */}
      <div className="flex-1 w-full">
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900 leading-tight mb-3">
          {loan.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[640px]">
          {loan.description}
        </p>
        
        {/* Պարամետրեր */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-10 gap-y-5 mb-8 border-l-2 border-purple-100 pl-4">
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider">Գումար</p>
            <p className="text-lg sm:text-[20px] font-black text-[#6c24b5] mt-0.5">{loan.amount}</p>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider">Ժամկետ</p>
            <p className="text-lg sm:text-[20px] font-black text-[#6c24b5] mt-0.5">{loan.duration}</p>
          </div>
          <div>
            <p className="text-[11px] text-gray-400 uppercase tracking-wider">Տոկոսադրույք</p>
            <p className="text-lg sm:text-[20px] font-black text-[#6c24b5] mt-0.5">{loan.rate}</p>
          </div>
          {loan.subRate && (
            <div className="col-span-2 sm:col-span-1 max-w-[180px]">
              <p className="text-[10px] text-purple-600 font-bold uppercase tracking-wider">Պետ. սուբսիդավորմամբ</p>
              <p className="text-lg sm:text-[20px] font-black text-pink-500 mt-0.5">{loan.subRate}</p>
            </div>
          )}
        </div>
        
        <button className="flex items-center gap-2 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 duration-200">
          Մանրամասն <span className="text-base leading-none transform translate-y-[0.5px]">›</span>
        </button>
      </div>
    </div>
  );
};

const CreditHistorySection = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="space-y-6">
      <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Վարկային պատմություն և սքոր</h1>
      
      <section className="space-y-4">
        <h2 className="text-lg sm:text-xl font-bold text-[#6c24b5]">Ի՞նչ է վարկային պատմությունը</h2>
        <p className="leading-relaxed text-gray-700 text-sm sm:text-base">
          Վարկային պատմությունը տեղեկատվություն է ձեր ստանձնած պարտավորությունների և դրանց կատարման վերաբերյալ, որը ձևավորվում է ACRA վարկային բյուրոյում:
        </p>
        <div className="bg-purple-50 p-5 sm:p-6 rounded-2xl border-l-4 border-[#6c24b5] shadow-sm">
          <h3 className="font-bold mb-3 text-[#6c24b5]">Ինչպե՞ս բարելավել պատմությունը.</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>Մարել բոլոր տեսակի ժամկետանց պարտավորությունները:</li>
            <li>Խուսափել կարճ ժամանակահատվածում նոր վարկերի հաճախակի դիմումներից:</li>
            <li>Նվազեցնել ընթացիկ վարկային բեռը (օվերդրաֆտներ, վարկային գծեր):</li>
          </ul>
        </div>
      </section>
      
      <section className="space-y-4 pt-6 border-t border-gray-100">
        <h2 className="text-lg sm:text-xl font-bold text-[#6c24b5]">Ի՞նչ է վարկային սքորը</h2>
        <p className="text-gray-700 text-sm sm:text-base">
          Սա FICO սքորն է, որը հանդիսանում է եռանիշ թվային գնահատական՝ հիմնված ձեր վարկային վարքագծի պատմական տվյալների վրա:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 border border-green-100 rounded-2xl bg-green-50/50">
            <h4 className="font-bold text-green-800 flex items-center gap-2">🟢 Դրական գործոններ</h4>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">Ժամանակին և ամբողջությամբ կատարված վճարումներ, վարկային միջոցների չափավոր օգտագործում:</p>
          </div>
          <div className="p-5 border border-red-100 rounded-2xl bg-red-50/50">
            <h4 className="font-bold text-red-800 flex items-center gap-2">🔴 Բացասական գործոններ</h4>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">Վճարումների ուշացումներ, միաժամանակյա շատ հարցումներ և բարձր ընթացիկ պարտքի հարաբերակցություն:</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const ImportantInfoSection = () => (
  <div className="space-y-6 animate-fade-in">
    <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-4">Կարևոր տեղեկատվություն</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm sm:text-base leading-relaxed">
      <li className="font-medium">Տոկոսագումարների հաշվարկը կատարվում է տարեկան 365 օրացուցային օրերի հիման վրա:</li>
      <li className="font-medium">Վարկի մարման ժամանակացույցը խախտելու դեպքում կիրառվում են տույժեր և տուգանքներ պայմանագրի համաձայն:</li>
      <li className="font-medium text-red-600">Ձեր կողմից պարտավորությունը չկատարելու կամ թերի կատարելու դեպքում այդ տվյալները ուղարկվում են վարկային բյուրո:</li>
    </ul>
    
    {/* Տարեկան փաստացի տոկոսադրույքի LaTeX բաձաձևի հատված */}
    <div className="mt-8 p-6 sm:p-8 border rounded-2xl bg-gray-50/50 shadow-inner border-gray-100 text-center">
      <h3 className="text-base sm:text-lg font-bold mb-4 text-gray-800">
        Տարեկան փաստացի տոկոսադրույքի հաշվարկի հիմնարար բանաձևը
      </h3>
      <div className="py-6 overflow-x-auto my-2 bg-white rounded-xl border border-gray-100 p-4">
        <img src='https://www.evoca.am/file_manager/formula-1.jpg' className="text-lg font-serif tracking-wide text-gray-900"/>
        
      </div>
      <div className="mt-4">
        <p className="text-[#6c24b5] font-black text-lg">Օրինակելի փաստացի տոկոսադրույք՝ 19.95%</p>
        <p className="text-xs text-gray-400 mt-1">Հաշվարկը կրում է տեղեկատվական բնույթ:</p>
      </div>
    </div>
  </div>
);

// 3. Հիմնական Էջ
const LoansPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('loans');

  const loans: LoanInfo[] = [
    {
      id: 1,
      title: "Հեծանիվի ձեռքբերման վարկ",
      description: "Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ:",
      image: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png",
      amount: "300,000 ֏",
      duration: "36 ամիս",
      rate: "16%",
      subRate: "16%"
    },
    {
      id: 2,
      title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ",
      description: "Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:",
      image: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png",
      amount: "50 մլն ֏",
      duration: "60 ամիս",
      rate: "14%"
    },
    {
      id: 3,
      title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով",
      description: "Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով:",
      image: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg",
      amount: "80 մլն. ֏",
      duration: "240 ամիս",
      rate: "13.2%"
    },
    {
      id: 4,
      title: "Գույքի գրավով ապահովված անհատական վարկ",
      description: "Շտապ գումա՞ր է անհրաժեշտ ընթացիկ ծախսերը հոգալու համար, և ցածր տոկոսադրույքով վարկատեսա՞կ ես փնտրում: Արի՛ Evocabank:",
      image: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg",
      amount: "100 մլն. ֏",
      duration: "24-120 ամիս",
      rate: "15%-ից"
    },
    {
      id: 5,
      title: "Action",
      description: "Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի:",
      image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png",
      amount: "10 մլն ֏",
      duration: "60 ամիս",
      rate: "15%"
    },
    {
      id: 6,
      title: "EvocaHOME",
      description: "Ցանկանու՞մ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք: Evoca-ի կողմից առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը:",
      image: "https://www.evoca.am/images-cache/loans/1/17198124761415/415x261.png",
      amount: "10 մլն ֏",
      duration: "60 ամիս",
      rate: "16%"
    },
    {
      id: 7,
      title: "Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին",
      description: "Evocabank-ը միշտ ձեր կողքին է: Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:",
      image: "https://www.evoca.am/images-cache/loans/1/17364209867562/415x261.png",
      amount: "55 մլն ֏",
      duration: "120 ամիս",
      rate: "13%"
    },
    {
      id: 8,
      title: "Անհատական վարկ «Ներդրումային»",
      description: "Ոչ թե վարկ, այլ ներդրում. գիտեիր՞, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ:",
      image: "https://www.evoca.am/images-cache/loans/1/17364087555297/415x261.png",
      amount: "350 մլն ֏",
      duration: "240 ամիս",
      rate: "15%"
    },
    {
      id: 9,
      title: "Ավտոկայանատեղիի ձեռքբերման վարկ",
      description: "Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:",
      image: "https://www.evoca.am/images-cache/loans/1/17419413852954/415x261.jpg",
      amount: "8 մլն ֏",
      duration: "60 ամիս",
      rate: "16%"
    },
    {
      id: 11,
      title: "Հողամասի ձեռքբերման վարկ",
      description: "Փնտրու՞մ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար: Դու արդեն գտել ես այն:",
      image: "https://www.evoca.am/images-cache/loans/1/17421922764367/415x261.jpg",
      amount: "80 մլն. ֏",
      duration: "240 ամիս",
      rate: "14%-ից"
    },
    {
      id: 12,
      title: "Միկրովերանորոգման վարկ Բանկի ռեսուրսներով",
      description: "Պլանավորու՞մ ես բնակարանի վերանորոգում: Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից:",
      image: "https://www.evoca.am/images-cache/loans/1/17461652642369/415x261.png",
      amount: "5 մլն. ֏",
      duration: "60 ամիս",
      rate: "17%"
    },
    {
      id: 13,
      title: "EvocaPOWER",
      description: "Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից: EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության:",
      image: "https://www.evoca.am/images-cache/loans/1/17552479364123/415x261.png",
      amount: "5 մլն. ֏",
      duration: "60 ամիս",
      rate: "0%"
    },
    {
      id: 14,
      title: "Օնլայն օվերդրաֆտ",
      description: "Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:",
      image: "https://www.evoca.am/images-cache/loans/1/16142479093829/415x261.jpg",
      amount: "10 մլն ֏",
      duration: "36 ամիս",
      rate: "16%"
    }
  ];

  return (
    <div className="w-full font-sans bg-white min-h-screen text-gray-800 antialiased">
      
      {/* Տաբերի հատված */}
      <div className="w-full bg-[#6c24b5] sticky top-0 z-40 shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
          {[
            { id: 'loans', label: 'Վարկեր' },
            { id: 'credit-history', label: 'Վարկային պատմություն և սքոր' },
            { id: 'important-info', label: 'Կարևոր տեղեկատվություն' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as TabType)}
              className={`py-4 px-5 sm:px-6 text-white text-[13px] sm:text-[14px] font-bold whitespace-nowrap transition-all border-b-4 cursor-pointer ${
                activeTab === item.id 
                  ? 'bg-[#5a1e96] border-white opacity-100 shadow-sm' 
                  : 'border-transparent opacity-75 hover:opacity-100 hover:bg-[#5a1e96]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Հիմնական բովանդակության կոնտեյներ */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-6 sm:py-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-10 select-none">
          <Link to="/" className="hover:text-[#6c24b5] transition-colors">Գլխավոր</Link>
          <span className="text-gray-300">›</span>
          <span className="text-gray-800 font-semibold">
            {activeTab === 'loans' && 'Վարկեր'}
            {activeTab === 'credit-history' && 'Վարկային պատմություն'}
            {activeTab === 'important-info' && 'Կարևոր տեղեկատվություն'}
          </span>
        </nav>

        {/* Բովանդակություն */}
        <main className="min-h-[400px]">
          {activeTab === 'loans' && (
            <div className="divide-y divide-gray-100">
              {loans.map(loan => <LoanCard key={loan.id} loan={loan} />)}
            </div>
          )}
          {activeTab === 'credit-history' && <CreditHistorySection />}
          {activeTab === 'important-info' && <ImportantInfoSection />}
        </main>
        
      </div>
    </div>
  );
};

export default LoansPage;