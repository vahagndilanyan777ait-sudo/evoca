import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase'; // Ներմուծում ենք բազայի config-ը

// --- Types ---
interface TabItem {
  id: string;
  label: string;
}

interface Member {
  name: string;
  role: string;
  image: string;
}

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const AboutUsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  // --- States Firebase-ի տվյալների համար ---
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [partnersData, setPartnersData] = useState<Partner[]>([]);
  const [board, setBoard] = useState<Member[]>([]);
  const [executive, setExecutive] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Տվյալների ներբեռնում Firebase-ից ---
  useEffect(() => {
    const dbRef = ref(db); // Կարդում ենք բազայի արմատից (root)

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        if (data.tabs) setTabs(data.tabs);
        if (data.partnersData) setPartnersData(data.partnersData);
        if (data.board) setBoard(data.board);
        if (data.executive) setExecutive(data.executive);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase-ից տվյալների ստացման սխալ:", error);
      setLoading(false);
    });

    return () => unsubscribe(); // Մաքրում ենք listener-ը
  }, []);

  // --- Sub-Components ---
  const MemberCard = ({ member }: { member: Member }) => (
    <div className="flex flex-col items-center text-center group">
      <div className="w-48 h-56 mb-4 overflow-hidden rounded-lg shadow-md border border-gray-100">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <h4 className="font-bold text-[#1a1a1a] text-sm mb-1 uppercase tracking-tight">{member.name}</h4>
      <p className="text-xs text-gray-500 leading-tight max-w-[180px]">{member.role}</p>
    </div>
  );

  // --- Render Functions ---
  const renderGeneral = () => (
    <div className="animate-fadeIn">
      <section className="max-w-7xl mx-auto px-4 lg:px-20 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-12">Ընդհանուր տեղեկատվություն</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-[#4a4a4a] text-[16px] leading-relaxed">
            <p><span className="text-[#6c24b5] font-bold">Evocabank</span>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է:</p>
            <p>Մենք աշխատում ենք <span className="italic font-medium">mobile-first</span> ֆորմատով:</p>
            <p className="pt-4 font-bold text-[#1a1a1a]">Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:</p>
          </div>
          <div className="rounded-lg shadow-2xl overflow-hidden">
            <img src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" alt="Evoca" />
          </div>
        </div>
      </section>
    </div>
  );

  const renderStructure = () => (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-16 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">Բանկի կառուցվածքը</h1>
        <div className="w-20 h-1 bg-[#6c24b5] mx-auto"></div>
      </div>
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-gray-100 flex justify-center">
        <img src="https://www.evoca.am/file_manager/structure/Organizational%20Structure-arm.png" alt="Structure" className="w-full h-auto max-w-5xl" />
      </div>
    </div>
  );

  const renderShareholders = () => (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-16 animate-fadeIn">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-12">Բաժնետերեր</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <img src="https://www.evoca.am/file_manager/Shareholders/Mareta%20Gevorkyan%20Evocabank.png" alt="Mareta Gevorkyan" className="w-full object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#6c24b5]">Մարետա Գևորկյան</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Մարետա Գևորկյանը միանձնյա տիրապետում է «Evocabank»-ի բաժնետոմսերի 100%-ին:</p>
        </div>
      </div>
    </div>
  );

  const renderManagement = () => (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-16 animate-fadeIn">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-16 text-[#1a1a1a]">Ղեկավարություն</h1>
      <div className="mb-20">
        <h2 className="text-xl font-black text-[#6c24b5] uppercase tracking-wider mb-10 border-b border-gray-100 pb-2">Բանկի Խորհուրդ</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {board.map((m, i) => <MemberCard key={i} member={m} />)}
        </div>
      </div>
      <div className="mb-20">
        <h2 className="text-xl font-black text-[#6c24b5] uppercase tracking-wider mb-10 border-b border-gray-100 pb-2">Բանկի Վարչություն</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {executive.map((m, i) => <MemberCard key={i} member={m} />)}
        </div>
      </div>
    </div>
  );

  const renderPartners = () => (
    <div className="max-w-7xl mx-auto px-4 lg:px-20 py-16 animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4">Գործընկերներ</h1>
        <div className="w-20 h-1 bg-[#6c24b5] mx-auto"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partnersData.map((partner) => (
          <div 
            key={partner.id} 
            className="flex items-center justify-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );

  // --- Switch Content Manager ---
  const renderTabContent = () => {
    switch (activeTab) {
      case 'general': return renderGeneral();
      case 'structure': return renderStructure();
      case 'shareholders': return renderShareholders();
      case 'management': return renderManagement();
      case 'partners': return renderPartners();
      default: return <div className="flex justify-center py-20 text-gray-400 italic">Շուտով...</div>;
    }
  };

  // Եթե տվյալները դեռ բազայից չեն եկել, ցույց ենք տալիս սպասման էկրան
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-lg">
        Բեռնվում է...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans">
      <nav className="w-full bg-[#6c24b5] sticky top-0 z-50 overflow-x-auto shadow-md">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-[13px] font-bold transition-all whitespace-nowrap
                ${activeTab === tab.id ? 'bg-white text-[#6c24b5]' : 'text-white hover:bg-[#5a1e96]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      <main>{renderTabContent()}</main>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default AboutUsPage;