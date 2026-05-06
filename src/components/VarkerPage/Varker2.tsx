import React from 'react';

// Ինտերֆեյս վարկի տվյալների համար
interface LoanInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  amount: string;
  duration: string;
  rate: string;
  subRate?: string; // Լրացուցիչ տոկոսադրույքի համար (օրինակ՝ պետական սուբսիդավորում)
}

const LoanCard: React.FC<{ loan: LoanInfo }> = ({ loan }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-10 border-b border-gray-100 last:border-0 items-start">
      {/* Նկարի հատված */}
      <div className="w-full md:w-[350px] flex-shrink-0">
        <img 
          src={loan.image} 
          alt={loan.title} 
          className="w-full h-[220px] object-cover rounded-2xl shadow-sm"
        />
      </div>

      {/* Տեքստային հատված */}
      <div className="flex-1">
        <h2 className="text-[22px] font-extrabold text-gray-900 leading-tight mb-4">
          {loan.title}
        </h2>
        <p className="text-[13px] text-gray-500 leading-relaxed mb-6 max-w-[600px]">
          {loan.description}
        </p>

        {/* Պայմանների ցուցակ */}
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
              <p className="text-[10px] text-gray-400 mt-1 leading-tight uppercase">
                Պետության կողմից սուբսիդավորվող տոկոսադրույք
              </p>
            </div>
          )}
        </div>

        {/* Կոճակ */}
        <button className="flex items-center gap-2 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-6 py-2.5 rounded-full text-sm font-bold transition-colors">
          Մանրամասն
          <span className="text-lg">›</span>
        </button>
      </div>
    </div>
  );
};

const LoansList: React.FC = () => {
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
    <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-10 bg-white">
      {loans.map(loan => (
        <LoanCard key={loan.id} loan={loan} />
      ))}
    </div>
  );
};

export default LoansList;