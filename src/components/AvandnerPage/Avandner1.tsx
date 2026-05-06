import React from 'react';

// Տվյալների տիպերի սահմանում
interface DepositBenefit {
  label: string;
  value: string;
  subValue?: string;
}

interface DepositCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  benefits: DepositBenefit[];
}

const DepositSection: React.FC<{ deposit: DepositCardProps }> = ({ deposit }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 py-16 border-b border-gray-100 last:border-0 w-full">
      {/* Ձախ հատված: Նկար */}
      <div className="w-full lg:w-[450px] shrink-0">
        <img 
          src={deposit.image} 
          alt={deposit.title} 
          className="w-full h-auto rounded-[32px] shadow-sm object-cover"
        />
      </div>

      {/* Աջ հատված: Տեղեկատվություն */}
      <div className="flex-1 w-full">
        <h2 className="text-[32px] font-black text-gray-900 mb-4">{deposit.title}</h2>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-10 max-w-[700px]">
          {deposit.description}
        </p>

        {/* Ցուցանիշներ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 mb-10">
          {deposit.benefits.map((benefit, idx) => (
            <div key={idx}>
              <span className="text-[12px] text-gray-400 block mb-2">{benefit.label}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-[28px] font-bold text-[#6c24b5] leading-none">
                  {benefit.value}
                </span>
                {benefit.subValue && (
                  <span className="text-[20px] font-bold text-[#6c24b5]">{benefit.subValue}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Կոճակ */}
        <button className="flex items-center gap-2 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-10 py-3 rounded-full text-[14px] font-bold transition-all group">
          Մանրամասն
          <span className="text-xl transition-transform group-hover:translate-x-1">›</span>
        </button>
      </div>
    </div>
  );
};

const EvocaDepositsPage: React.FC = () => {
  const depositData: DepositCardProps[] = [
    {
      id: 1,
      title: "Դասական ավանդ",
      description: "Ձեր անհոգ ապագայի համար առաջարկում ենք ավելացնել Ձեր խնայողությունները՝ ներդնելով Դասական ավանդ՝ կայուն և բարձր եկամտաբերությամբ:",
      image: "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg",
      benefits: [
        { label: "Սկսած", value: "100,000", subValue: "֏" },
        { label: "Ժամկետ", value: "31-1,825", subValue: "օր" },
        { label: "Մինչև", value: "10.5%", subValue: "֏" },
        { label: "Սկսած", value: "100,000", subValue: "֏" }
      ]
    },
    {
      id: 2,
      title: "Մանկական ավանդ",
      description: "Ձեր երեխայի անհոգ ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդ: «Մանկական» ժամկետային ավանդն ընդունվում ենք ֆիզիկական անձանցից՝ երեխաների անունով ներդնելու պայմանով:",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg",
      benefits: [
        { label: "Սկսած", value: "100,000", subValue: "֏" },
        { label: "Մինչև", value: "18", subValue: "լրանալը" },
        { label: "Տոկոսադրույք", value: "9.5%", subValue: "֏" },
        { label: "Սկսած", value: "40,000", subValue: "֏" }
      ]
    },
    {
      id: 3,
      title: "Ավանդ Evoca Online",
      description: "Ցանկանու՞մ եք ներդնել ավանդ բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ: Ձևակերպե՛ք EvocaONLINE ավանդը՝ առանց բանկ այցելելու:",
      image: "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg",
      benefits: [
        { label: "Սկսած", value: "100,000", subValue: "֏" },
        { label: "Ժամկետ", value: "31-1,825", subValue: "օր" },
        { label: "Տոկոսադրույք", value: "10.75%", subValue: "֏" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header-ի հատվածը (ըստ նկարի) */}
      <div className="bg-[#6c24b5] py-4 px-6 mb-12">
        <div className="max-w-[1280px] mx-auto flex gap-8 text-white font-bold text-sm">
          <span className="cursor-pointer border-b-2 border-white pb-1">Ավանդներ</span>
          <span className="opacity-70 cursor-pointer hover:opacity-100 transition-opacity">Կարևոր տեղեկատվություն</span>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6">
        <nav className="text-[12px] text-gray-400 mb-8 flex gap-2">
          <span>🏠</span> <span>›</span> <span>Անհատ</span> <span>›</span> <span>Ավանդներ</span>
        </nav>
        
        <h1 className="text-[40px] font-black text-gray-900 mb-12">Ավանդներ</h1>

        <div className="space-y-4">
          {depositData.map((deposit) => (
            <DepositSection key={deposit.id} deposit={deposit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EvocaDepositsPage;