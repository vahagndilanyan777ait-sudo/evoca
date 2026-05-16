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

interface Award {
  id: number;
  year: string;
  title: string;
  organization: string;
  logo: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  stars: number;
  avatarBgStyle: string; // Անհատական ոճ ձևավորված պատկերի համար
  decorType: 'lightning' | 'triangle' | 'wave' | 'dots'; 
}

const AboutUsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  // --- States Firebase-ի տվյալների համար ---
  const [tabs, setTabs] = useState<TabItem[]>([]);
  const [partnersData, setPartnersData] = useState<Partner[]>([]);
  const [board, setBoard] = useState<Member[]>([]);
  const [executive, setExecutive] = useState<Member[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Տվյալների ներբեռնում Firebase-ից ---
  useEffect(() => {
    const dbRef = ref(db);

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        if (data.tabs) setTabs(data.tabs);
        if (data.partnersData) setPartnersData(data.partnersData);
        if (data.board) setBoard(data.board);
        if (data.executive) setExecutive(data.executive);
        if (data.awards) setAwards(data.awards);
        if (data.testimonials) setTestimonials(data.testimonials);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase-ից տվյալների ստացման սխալ:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // --- Իրական մրցանակների տվյալները (Fallback) ---
  const localAwards: Award[] = [
    { id: 1, year: "2025 թ.", title: "Best AI-Powered Mobile App", organization: "The Digital Banker", logo: "https://www.evoca.am/images-cache/awards/1/17701876298505/140x65.png" },
    { id: 2, year: "2025 թ.", title: "Highest Cashless Achievement", organization: "Visa International", logo: "https://www.evoca.am/images-cache/awards/1/17696923392309/140x65.png" },
    { id: 3, year: "2025 թ.", title: "Լավագույն թվային բանկը Հայաստանում 2025", organization: "Global Finance", logo: "https://www.evoca.am/images-cache/awards/1/17635322442852/140x65.png" },
    { id: 4, year: "2025 թ.", title: "Ամենանորարար ՓՄՁ Վարկավորման գործընկերը ՀՀ-ում", organization: "International Business Magazine", logo: "https://www.evoca.am/images-cache/awards/1/17574258664115/140x65.jpg" },
    { id: 5, year: "2025 թ.", title: "Լավագույն Բանկը Հայաստանում 2025", organization: "International Investor Magazine", logo: "https://www.evoca.am/images-cache/awards/1/1751877049822/140x65.png" },
    { id: 6, year: "2025 թ.", title: "Award for the Development of International Banking Cooperation", organization: "BACEE", logo: "https://www.evoca.am/images-cache/awards/1/17518766542368/140x65.jpg" },
    { id: 7, year: "2025 թ.", title: "Լավագույն ՓՄՁ բանկը Հայաստանում", organization: "The Digital Banker", logo: "https://www.evoca.am/images-cache/awards/1/17435922177711/140x65.png" },
    { id: 8, year: "2025 թ.", title: "Best Mobile Banking in Armenia", organization: "Global Banking & Finance Review", logo: "https://www.evoca.am/images-cache/awards/1/17383050368673/140x65.png" },
    { id: 9, year: "2025 թ.", title: "Most Innovative Digital Bank in Armenia", organization: "Global Business & Finance Magazine", logo: "https://www.evoca.am/images-cache/awards/1/17383046771156/140x65.png" },
    { id: 10, year: "2025 թ.", title: "Excellence in New Products Development", organization: "Mastercard", logo: "https://www.evoca.am/images-cache/awards/1/17375257427062/140x65.png" },
  ];

  // --- Իրական կարծիքների տվյալները (Fallback) ---
  const localTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Սուսաննա Վանյան",
      role: "Հաճախորդ",
      text: "Հայաստանի իրականության մեջ բացառիկ հրաշք բանկ։ Միայն այս հնարավորությունը ընձեռելով երիտասարդ ընտանիքներին՝ նման ցածր տոկոսով բնակարան ձեռք բերել, արժանի է մեծ հարգանքի։ Շնորհակալ ենք, որ Դուք կաք։",
      stars: 5,
      avatarBgStyle: "rounded-tl-[80px] rounded-br-[60px] rounded-tr-[30px] rounded-bl-[40px]",
      decorType: "lightning"
    },
    {
      id: 2,
      name: "Նոննե Գևորգյան",
      role: "Հաճախորդ",
      text: "Գերազանց սպասարկում, ընտիր ու հավես անձնակազմ Ազատության մասնաճյուղում։ Վարկային բաժնից շատ շնորհակալ եմ, վարկս ձևակերպվեց առանց ավելորդ քաշքշուկների՝ հեշտ, arg, որակյալ։ Սպասարկող աղջիկներն էլ միշտ ժպտերես ու բարեհամբույր։ Դարձել եմ արդեն մշտական հաճախորդ։",
      stars: 5,
      avatarBgStyle: "rounded-full",
      decorType: "triangle"
    },
    {
      id: 3,
      name: "Արամ Ազարյան",
      role: "Ինդիգո Branding-ի հիմնադիր",
      text: "Դեպի նոր իրականություն. ահա թե ուր ենք մենք շարժվում՝ ամեն մի նախագիծ Evocabank-ի հետ հաջողությամբ ավարտելիս։ Ավելի քան 5 տարվա համագործակցությամբ՝ կարելի է ասել, որ միասին անցել ենք մի մեծ ճանապարհ՝ փոխըմբռնումով, ստեղծարար պահերով և ընկերական ու ջերմ հարաբերություններով։ Վստահորեն կարող ենք նշել, որ ձեր ամենանորարարական և համարձակ գործընկերներից մեկն է Evocabank-ը՝ միշտ պատրաստ նորությունների և ստեղծագործ դուրս բերումների։",
      stars: 5,
      avatarBgStyle: "rounded-tl-[50px] rounded-br-[50px] rounded-tr-[50px] rounded-bl-[50px] transform rotate-45",
      decorType: "wave"
    },
    {
      id: 4,
      name: "Էլեն Վարդանյան",
      role: "Հաճախորդ",
      text: "Լավագույն նորարարական և թվային բանկը՝ լավագույն ծառայություններով և անձնակազմով։",
      stars: 5,
      avatarBgStyle: "rounded-2xl",
      decorType: "dots"
    },
    {
      id: 5,
      name: "Կամո Թովմասյան",
      role: "KAMOBlog մեդիա հարթակի հիմնադիր, influencer",
      text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակն ու ճաշակ թելադրեց։ Evocabank-ն առաջին իսկ վայրկյանից ստիպեց հզորացնել և ժամանակակից հայացքով նայել երբեմնի կարծրացած բանկային ծանր մթնոլորտին։ Հրաշալի թիմ, յուրահատուկ լուծումներ ու, իրոք, նոր իրականություն։",
      stars: 5,
      avatarBgStyle: "rounded-tl-[70px] rounded-br-[70px] rounded-tr-[20px] rounded-bl-[20px]",
      decorType: "lightning"
    }
  ];

  const awardsList = awards.length > 0 ? awards : localAwards;
  const testimonialsList = testimonials.length > 0 ? testimonials : localTestimonials;

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
      
      <div className="mb-12 md:mb-20">
        <h2 className="text-base sm:text-lg md:text-xl font-black text-[#6c24b5] uppercase tracking-wider mb-6 md:mb-10 border-b border-gray-100 pb-2 text-center lg:text-left">Բանկի Խորհուրդ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 sm:gap-y-12 gap-x-4 sm:gap-x-8">
          {board.map((m, i) => <MemberCard key={i} member={m} />)}
        </div>
      </div>
      
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

  const renderAwards = () => (
    <div className="w-full bg-[#f8f9fc] min-h-screen py-10 md:py-16 px-4 sm:px-6 lg:px-20 animate-fadeIn relative overflow-hidden">
      <div className="hidden xl:flex flex-col justify-between items-center fixed left-6 top-32 bottom-20 w-[240px] pointer-events-none select-none z-10">
        <div className="flex flex-col items-center">
          <img 
            src="https://www.evoca.am/file_manager/Awards/wreath.png" 
            alt="Wreath" 
            className="w-40 h-auto object-contain animate-pulse"
            onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/2590/2590425.png" }}
          />
        </div>
        <div className="flex flex-col items-center">
          <img 
            src="https://www.evoca.am/file_manager/Awards/cup.png" 
            alt="Cup" 
            className="w-36 h-auto object-contain"
            onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/3112/3112946.png" }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto xl:pl-[240px]">
        <div className="text-center lg:text-left mb-10 md:mb-14">
          <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">Մրցանակներ</h1>
          <div className="w-12 h-1 bg-[#6c24b5] mt-3 mx-auto lg:mx-0 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {awardsList.map((award) => (
            <div 
              key={award.id} 
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between gap-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group"
            >
              <div className="flex-1 space-y-2">
                <span className="text-[#6c24b5] font-black text-sm tracking-wider uppercase bg-purple-50 px-3 py-1 rounded-full">
                  {award.year}
                </span>
                <h3 className="font-extrabold text-[#1a1a1a] text-sm sm:text-[15px] leading-snug pt-1 group-hover:text-[#6c24b5] transition-colors">
                  {award.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium tracking-wide">
                  {award.organization}
                </p>
              </div>

              <div className="w-20 sm:w-24 h-14 flex items-center justify-center flex-shrink-0 bg-gray-50/50 rounded-xl p-2 border border-gray-50">
                <img 
                  src={award.logo} 
                  alt={award.organization} 
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:block absolute right-0 top-1/4 bottom-1/4 w-[20%] bg-white rounded-l-[160px] pointer-events-none opacity-50"></div>
    </div>
  );

  const renderTestimonials = () => (
    <div className="w-full bg-[#f3f4f9]/40 min-h-screen py-12 md:py-20 px-4 sm:px-6 lg:px-32 animate-fadeIn relative overflow-hidden">
      <div className="text-center mb-16 md:mb-24">
        <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">Կարծիքներ</h1>
        <div className="w-16 h-1 bg-[#6c24b5] mt-3 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto space-y-20 md:space-y-32 relative z-10">
        {testimonialsList.map((t, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div 
              key={t.id} 
              className={`flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 ${isEven ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="relative flex-shrink-0 w-[260px] sm:w-[290px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-indigo-50 rounded-[45px] transform -rotate-3 opacity-60"></div>
                <div className={`w-full aspect-square bg-white shadow-xl border border-gray-100/80 flex flex-col items-center justify-center p-6 text-center relative z-10 overflow-visible ${t.avatarBgStyle}`}>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 select-none pointer-events-none">
                    {t.decorType === 'lightning' && <span className="text-4xl animate-bounce text-cyan-400 font-black">⚡</span>}
                    {t.decorType === 'triangle' && <span className="text-4xl animate-pulse text-pink-500 font-black">▲</span>}
                    {t.decorType === 'wave' && <span className="text-4xl text-purple-500 font-black">❖</span>}
                    {t.decorType === 'dots' && <span className="text-4xl text-yellow-500 font-black">●</span>}
                  </div>

                  <h3 className="font-black text-[#1a1a1a] text-base sm:text-lg tracking-tight leading-tight mb-1">{t.name}</h3>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-bold tracking-wide uppercase">{t.role}</p>

                  <div className="absolute -right-5 bottom-4 w-12 h-14 opacity-80 filter drop-shadow-md select-none pointer-events-none">
                    <span className="text-3xl">🗿</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 relative bg-white/70 lg:bg-transparent p-6 sm:p-8 lg:p-0 rounded-3xl shadow-sm lg:shadow-none border border-gray-100 lg:border-none">
                <div className={`absolute -top-6 ${isEven ? 'right-4 lg:-right-8' : 'left-4 lg:-left-12'} text-5xl sm:text-6xl text-[#6c24b5] font-serif opacity-90 select-none pointer-events-none`}>
                  “
                </div>

                <div className="space-y-4 relative z-10 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start items-center gap-1">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[#333333] text-sm sm:text-base lg:text-[15px] font-medium leading-relaxed tracking-wide text-justify lg:text-left">
                    {t.text.includes("Evocabank") ? (
                      <>
                        {t.text.split("Evocabank")[0]}
                        <span className="text-[#6c24b5] font-bold">Evocabank</span>
                        {t.text.split("Evocabank")[1]}
                      </>
                    ) : t.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute left-0 bottom-0 top-0 w-24 bg-white/40 rounded-r-[100px] pointer-events-none hidden lg:block"></div>
    </div>
  );

  // --- ԱՎԵԼԱՑՎԱԾ Է. Կորպորատիվ Սոցիալական Պատասխանատվություն (CSR) ---
  const renderCSR = () => (
    <div className="w-full bg-white animate-fadeIn">
      {/* Բրեդքրամբս (Breadcrumbs) նավիգացիա */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-6">
        <nav className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold text-gray-400 select-none">
          <span className="cursor-pointer hover:text-[#6c24b5] transition-colors" onClick={() => setActiveTab('general')}>🏠</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-[#6c24b5] transition-colors" onClick={() => setActiveTab('general')}>Մեր մասին</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-[#6c24b5] transition-colors" onClick={() => setActiveTab('general')}>Evoca-ի մասին</span>
          <span>/</span>
          <span className="text-gray-600 font-bold">CSR</span>
        </nav>
      </div>

      {/* Գլխավոր Բովանդակություն */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-10 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Տեքստային Բլոկ */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#1a1a1a] leading-tight tracking-tight">
              Կորպորատիվ <br className="hidden sm:inline" />
              Սոցիալական <br className="hidden sm:inline" />
              Պատասխանատվություն
            </h1>
            
            <div className="w-16 h-1 bg-[#6c24b5] mx-auto lg:mx-0 rounded-full"></div>
            
            <p className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              Մենք մեծ կարևորություն ենք տալիս <span className="text-[#6c24b5] font-bold">CSR</span>-ին՝ ապահովելով 
              մեր գործունեության դրական ազդեցությունը թե՛ հասարակության, թե՛ շրջակա միջավայրի վրա:
            </p>
          </div>

          {/* Վիզուալ/Նկարի Բլոկ (3D Hand Sign Heart) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] rounded-[32px] sm:rounded-[48px] overflow-hidden shadow-2xl bg-gradient-to-tr from-[#6c24b5] to-[#8a3cd9] p-1 group">
              <div className="w-full h-full bg-[#6c24b5] rounded-[31px] sm:rounded-[47px] overflow-hidden relative flex items-center justify-center">
                
                {/* Ֆոնային դեկորատիվ շրջաններ */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700"></div>
                <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl"></div>

                {/* Գլխավոր 3D Պատկերը (Մատներով սիրտ) */}
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/17108330711252/780x585.png" 
                  alt="Corporate Social Responsibility" 
                  className="w-[75%] sm:w-[70%] h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 select-none pointer-events-none filter drop-shadow-2xl"
                  onError={(e) => { 
                    // Fallback եթե նկարի ուղիղ հղումը փոխվի
                    e.currentTarget.src = "https://img.freepik.com/free-vector/korean-heart-sign-concept-illustration_114360-16347.jpg" 
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>
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
      case 'awards': return renderAwards();
      case 'testimonials': return renderTestimonials();
      case 'csr': return renderCSR(); // Նոր ավելացված case
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
              className={`px-4 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[13px] font-bold transition-all whitespace-nowrap border-b-2 cursor-pointer
                ${activeTab === tab.id 
                  ? 'bg-white text-[#6c24b5] border-white' 
                  : 'text-white border-transparent hover:bg-[#5a1e96]'}`}
            >
              {tab.label}
            </button>
          ))}
          
          {/* Fallback տաբեր, եթե Firebase-ի tabs զանգվածում դեռ ավելացված չեն */}
          {!tabs.some(t => t.id === 'awards') && (
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-4 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[13px] font-bold transition-all whitespace-nowrap border-b-2 cursor-pointer
                ${activeTab === 'awards' ? 'bg-white text-[#6c24b5] border-white' : 'text-white border-transparent hover:bg-[#5a1e96]'}`}
            >
              Մրցանակներ
            </button>
          )}
          {!tabs.some(t => t.id === 'testimonials') && (
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-4 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[13px] font-bold transition-all whitespace-nowrap border-b-2 cursor-pointer
                ${activeTab === 'testimonials' ? 'bg-white text-[#6c24b5] border-white' : 'text-white border-transparent hover:bg-[#5a1e96]'}`}
            >
              Կարծիքներ
            </button>
          )}
          {!tabs.some(t => t.id === 'csr') && (
            <button
              onClick={() => setActiveTab('csr')}
              className={`px-4 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[13px] font-bold transition-all whitespace-nowrap border-b-2 cursor-pointer
                ${activeTab === 'csr' ? 'bg-white text-[#6c24b5] border-white' : 'text-white border-transparent hover:bg-[#5a1e96]'}`}
            >
              CSR
            </button>
          )}
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="w-full">{renderTabContent()}</main>

      {/* Animation & Helpers Styles */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default AboutUsPage;