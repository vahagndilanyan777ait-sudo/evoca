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
    <div className="flex flex-col items-center text-center group w-full max-w-[200px] mx-auto">
      <div className="w-full aspect-[4/5] mb-3 overflow-hidden rounded-lg shadow-md border border-gray-100">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <h4 className="font-bold text-[#1a1a1a] text-xs sm:text-sm mb-1 uppercase tracking-tight line-clamp-2">{member.name}</h4>
      <p className="text-[11px] sm:text-xs text-gray-500 leading-tight max-w-[180px]">{member.role}</p>
    </div>
  );

  // --- Render Functions ---
  const renderGeneral = () => (
    <div className="animate-fadeIn">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-16">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-12 text-center lg:text-left">Ընդհանուր տեղեկատվություն</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-[#4a4a4a] text-sm sm:text-base lg:text-[16px] leading-relaxed order-2 lg:order-1 text-center lg:text-left">
            <p><span className="text-[#6c24b5] font-bold">Evocabank</span>-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է։</p>
            <p>Մենք աշխատում ենք <span className="italic font-medium">mobile-first</span> ֆորմատով։</p>
            <p className="pt-2 md:pt-4 font-bold text-[#1a1a1a]">Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան։</p>
          </div>
          <div className="rounded-lg shadow-xl lg:shadow-2xl overflow-hidden order-1 lg:order-2">
            <img src="https://www.evoca.am/images-cache/about_pages/1/16201288751575/780x570.png" alt="Evoca" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </div>
  );

  const renderStructure = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-16 animate-fadeIn">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-3 sm:mb-4">Բանկի կառուցվածքը</h1>
        <div className="w-16 sm:w-20 h-1 bg-[#6c24b5] mx-auto"></div>
      </div>
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl lg:shadow-2xl p-4 sm:p-6 md:p-12 border border-gray-100 flex justify-center overflow-x-auto">
        <img src="https://www.evoca.am/file_manager/structure/Organizational%20Structure-arm.png" alt="Structure" className="w-full h-auto min-w-[600px] md:min-w-0 max-w-5xl" />
      </div>
    </div>
  );

  const renderShareholders = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-16 animate-fadeIn">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 md:mb-12 text-center lg:text-left">Բաժնետերեր</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 max-w-md mx-auto lg:max-w-none">
          <img src="https://www.evoca.am/file_manager/Shareholders/Mareta%20Gevorkyan%20Evocabank.png" alt="Mareta Gevorkyan" className="w-full object-cover" />
        </div>
        <div className="space-y-4 md:space-y-6 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-[#6c24b5]">Մարետա Գևորկյան</h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Մարետա Գևորկյանը միանձնյա տիրապետում է «Evocabank»-ի բաժնետոմսերի 100%-ին։</p>
        </div>
      </div>
    </div>
  );

  const renderManagement = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-16 animate-fadeIn">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-8 md:mb-16 text-[#1a1a1a] text-center lg:text-left">Ղեկավարություն</h1>
      
      {/* Բանկի Խորհուրդ */}
      <div className="mb-12 md:mb-20">
        <h2 className="text-base sm:text-lg md:text-xl font-black text-[#6c24b5] uppercase tracking-wider mb-6 md:mb-10 border-b border-gray-100 pb-2 text-center lg:text-left">Բանկի Խորհուրդ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 sm:gap-y-12 gap-x-4 sm:gap-x-8">
          {board.map((m, i) => <MemberCard key={i} member={m} />)}
        </div>
      </div>
      
      {/* Բանկի Վարչություն */}
      <div className="mb-8 md:mb-20">
        <h2 className="text-base sm:text-lg md:text-xl font-black text-[#6c24b5] uppercase tracking-wider mb-6 md:mb-10 border-b border-gray-100 pb-2 text-center lg:text-left">Բանկի Վարչություն</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 sm:gap-y-12 gap-x-4 sm:gap-x-8">
          {executive.map((m, i) => <MemberCard key={i} member={m} />)}
        </div>
      </div>
    </div>
  );

  const renderPartners = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-8 md:py-16 animate-fadeIn">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-3 sm:mb-4">Գործընկերներ</h1>
        <div className="w-16 sm:w-20 h-1 bg-[#6c24b5] mx-auto"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {partnersData.map((partner) => (
          <div 
            key={partner.id} 
            className="flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <img 
              src={partner.logo} 
              alt={partner.name} 
              className="max-h-12 sm:max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
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
      default: return <div className="flex justify-center py-20 text-gray-400 italic text-sm">Շուտով...</div>;
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-base sm:text-lg">
        Բեռնվում է...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans antialiased">
      {/* Sticky Navbar */}
      <nav className="w-full bg-[#6c24b5] sticky top-0 z-50 overflow-x-auto scrollbar-none shadow-md">
        <div className="max-w-7xl mx-auto flex justify-start md:justify-center items-center px-4 md:px-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[13px] font-bold transition-all whitespace-nowrap border-b-2
                ${activeTab === tab.id 
                  ? 'bg-white text-[#6c24b5] border-white' 
                  : 'text-white border-transparent hover:bg-[#5a1e96]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="w-full">{renderTabContent()}</main>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.35s ease-out forwards; }
        /* Թաքցնում է նավիգացիայի scrollbar-ը հեռախոսների վրա */
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AboutUsPage;