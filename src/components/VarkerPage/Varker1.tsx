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
    <div className="flex flex-col md:flex-row gap-8 py-10 border-b border-gray-100 last:border-0 items-start animate-fadeIn">
      <div className="w-full md:w-[350px] flex-shrink-0">
        <img 
          src={loan.image} 
          alt={loan.title} 
          className="w-full h-[220px] object-cover rounded-2xl shadow-sm"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-[22px] font-extrabold text-gray-900 leading-tight mb-4">{loan.title}</h2>
        <p className="text-[13px] text-gray-500 leading-relaxed mb-6 max-w-[600px]">{loan.description}</p>
        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-8">
          <div>
            <p className="text-xs text-gray-400 mb-1">Մինչև</p>
            <p className="text-[20px] font-bold text-[#6c24b5]">{loan.amount}</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider">Գումար</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Մինչև</p>
            <p className="text-[20px] font-bold text-[#6c24b5]">{loan.duration}</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider">Ժամկետ</p>
          </div>
          <div>
            <p className="text-xs text-gray-400 mb-1">Սկսած</p>
            <p className="text-[20px] font-bold text-[#6c24b5]">{loan.rate}</p>
            <p className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider">Տոկոսադրույքից</p>
          </div>
          {loan.subRate && (
            <div className="max-w-[150px]">
              <p className="text-xs text-transparent mb-1">.</p>
              <p className="text-[20px] font-bold text-[#6c24b5]">{loan.subRate}</p>
              <p className="text-[10px] text-gray-400 mt-1 leading-tight uppercase">Պետական սուբսիդավորմամբ</p>
            </div>
          )}
        </div>
        <button className="flex items-center gap-2 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-6 py-2.5 rounded-full text-sm font-bold transition-colors">
          Մանրամասն <span className="text-lg">›</span>
        </button>
      </div>
    </div>
  );
};

const CreditHistorySection = () => (
  <div className="animate-fadeIn space-y-8">
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Վարկային պատմություն և սքոր</h1>
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-[#6c24b5]">Ի՞նչ է վարկային պատմությունը</h2>
        <p className="leading-relaxed text-gray-700">Վարկային պատմությունը տեղեկատվություն է ձեր ստանձնած պարտավորությունների և դրանց կատարման վերաբերյալ:</p>
        <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-[#6c24b5]">
          <h3 className="font-bold mb-2 text-[#6c24b5]">Ինչպե՞ս բարելավել պատմությունը.</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Մարել ժամկետանց պարտավորությունները:</li>
            <li>Խուսափել նոր վարկերի հաճախակի դիմումներից:</li>
          </ul>
        </div>
      </section>
      <section className="space-y-4 pt-6 border-t">
        <h2 className="text-xl font-bold text-[#6c24b5]">Ի՞նչ է վարկային սքորը</h2>
        <p className="text-gray-700">Սա FICO սքորն է, որը թվային գնահատական է ձեր վարկունակության վերաբերյալ:</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 border rounded-xl bg-green-50"><h4 className="font-bold text-green-700">Դրական գործոններ</h4><p className="text-sm mt-2">Ժամանակին կատարված վճարումներ:</p></div>
          <div className="p-6 border rounded-xl bg-red-50"><h4 className="font-bold text-red-700">Բացասական գործոններ</h4><p className="text-sm mt-2">Ուշացումներ և բարձր բեռ:</p></div>
        </div>
      </section>
    </div>
  </div>
);

const ImportantInfoSection = () => (
  <div className="animate-fadeIn space-y-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">Կարևոր տեղեկատվություն</h2>
    <ul className="list-disc pl-5 space-y-3 text-gray-700">
      <li className="font-medium">Տոկոսագումարների հաշվարկը կատարվում է 365 օրացուցային օրերի համար:</li>
      <li className="font-medium">Վարկի մարման ժամանակացույցը խախտելու դեպքում կիրառվում են տույժեր:</li>
    </ul>
    <div className="mt-10 p-8 border rounded-2xl bg-white shadow-sm border-gray-100">
      <h3 className="text-lg font-bold mb-6 text-center">Տարեկան փաստացի տոկոսադրույքի հաշվարկի օրինակ</h3>
      <div className="flex flex-col items-center space-y-4">
        <div className="text-xl italic font-serif">A = ∑ Kₙ / (1 + i)<sup>Dₙ/365</sup></div>
        <div className="text-[#6c24b5] font-bold text-lg">Փաստացի տոկոսադրույք՝ 19.95%</div>
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

      title: "Գույքի գրավով ապահովված անհատական վարկ (վարկունակության գնահատմամբ)",

      description: "Շտապ գումա՞ր է անհրաժեշտ ընթացիկ ծախսերը հոգալու համար, և ցածր տոկոսադրույքով վարկատեսա՞կ ես փնտրում: Արի՛ Evocabank:",

      image: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg",

      amount: "100 մլն. ֏",

      duration: "24-120 ամիս",

      rate: "15%-ից",

      // Կարող ես ավելացնել լրացուցիչ պայմաններ Component-ում, եթե պետք է

    },

    {

      id: 5,

      title: "Action",

      description: "Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի:",

      image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png",

      amount: "10 մլն ֏",

      duration: "60 ամիս",

      rate: "15%" // Եթե նկարում չկա, դրել եմ մոտավոր

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
    <div className="w-full font-sans bg-white min-h-screen">
      {/* Տաբերի հատված */}
      <div className="w-full bg-[#6c24b5] sticky top-0 z-40 shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-20 flex overflow-x-auto no-scrollbar">
          {[
            { id: 'loans', label: 'Վարկեր' },
            { id: 'credit-history', label: 'Վարկային պատմություն և սքոր' },
            { id: 'important-info', label: 'Կարևոր տեղեկատվություն' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as TabType)}
              className={`py-4 px-6 text-white text-[14px] font-medium whitespace-nowrap transition-all border-b-4 ${
                activeTab === item.id ? 'bg-[#5a1e96] border-white opacity-100' : 'border-transparent opacity-80 hover:bg-[#5a1e96]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-[#6c24b5]">Գլխավոր</Link>
          <span>›</span>
          <span className="text-gray-900 font-medium capitalize">
            {activeTab === 'loans' ? 'Վարկեր' : activeTab.replace('-', ' ')}
          </span>
        </nav>

        {/* Բովանդակություն */}
        <main>
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