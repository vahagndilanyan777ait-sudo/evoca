import React, { useState } from 'react';

// 1. Նավիգացիայի տվյալների տիպը
interface TabItem {
  id: string;
  label: string;
}

const tabs: TabItem[] = [
  { id: 'general', label: 'Ընդհանուր' },
  { id: 'structure', label: 'Կառուցվածք' },
  { id: 'shareholders', label: 'Բաժնետերեր' },
  { id: 'management', label: 'Ղեկավարություն' },
  { id: 'partners', label: 'Գործընկերներ' },
  { id: 'awards', label: 'Մրցանակներ' },
  { id: 'reviews', label: 'Կարծիքներ' },
  { id: 'csr', label: 'CSR' },
];

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      {/* Մանուշակագույն Նավիգացիոն Շերտ */}
      <nav className="w-full bg-[#6c24b5] overflow-x-auto">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-[13px] font-bold transition-all whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'bg-white text-[#6c24b5]' 
                  : 'text-white hover:bg-[#5a1e96]'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Հիմնական բովանդակություն */}
      <div className="max-w-7xl mx-auto px-4 lg:px-20 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-12">
          Ընդհանուր տեղեկատվություն
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Տեքստային հատված */}
          <div className="space-y-6 text-[#4a4a4a] text-[15px] leading-relaxed">
            <p>
              <span className="text-[#6c24b5] font-bold">Evocabank</span> ը արագ, պարզ և նորարար 
              ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն 
              տեխնոլոգիաների ակտիվ կիրառմամբ:
            </p>
            
            <p>
              Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը:
            </p>

            <p>
              Մենք աշխատում ենք <span className="italic font-medium">mobile-first</span> ֆորմատով՝ 
              յուրաքանչյուր նոր ծառայություն նախագծելիս՝ նախևառաջ հաշվի ենք առնում դրա՝ հավելվածով 
              օգտագործման հարմարավետությունը:
            </p>

            <p className="pt-4 font-medium">
              Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:
            </p>
          </div>

          {/* Նկարի հատված */}
          <div className="relative group overflow-hidden rounded-lg shadow-2xl">
            <img 
              src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" 
              alt="Evoca Bank Branding" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Դեկորատիվ էլեմենտ (ըստ նկարի մանուշակագույն ալիքների) */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6c24b5]/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;