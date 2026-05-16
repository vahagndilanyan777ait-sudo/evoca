import React, { useState, useRef } from 'react';
import { 
  ChevronLeft, ChevronRight, Play, Mail, Globe, Paperclip, 
  RotateCw, User, FileText, X, ChevronDown, ChevronUp,
  HeartPulse, Plane, Building2, Percent, Award, Gift, Sun, Moon
} from 'lucide-react';

// ==========================================
// 1. ՏՎՅԱԼՆԵՐԻ ՏԻՊԵՐ (INTERFACES)
// ==========================================
interface VideoCardProps {
  title: string;
  thumbnail: string;
  isMain?: boolean;
  isDarkMode: boolean;
}

interface Testimonial {
  id: number;
  words: string[];
  name: string;
  position: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface StepItem {
  number: number;
  title: string;
  content: string;
}

interface ThemeProps {
  isDarkMode: boolean;
}

// ==========================================
// 2. ՕԺԱՆԴԱԿ ԿՈՄՊՈՆԵՆՏՆԵՐ
// ==========================================

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, isMain, isDarkMode }) => (
  <div className={`rounded-2xl p-3 sm:p-4 shadow-xl transition-all duration-500 w-full ${isMain ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-40'} ${isDarkMode ? 'bg-[#25103a]' : 'bg-white'}`}>
    <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900 aspect-video flex items-center justify-center">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
          <Play className="text-cyan-400 fill-cyan-400 ml-0.5" size={20} />
        </div>
      </div>
    </div>
    <div className="mt-3 py-1 text-left">
      <h3 className={`font-extrabold tracking-tight line-clamp-2 ${isMain ? 'text-base' : 'text-xs sm:text-sm'} ${isDarkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>{title}</h3>
    </div>
  </div>
);

const TestimonialCard: React.FC<{ item: Testimonial; isDarkMode: boolean }> = ({ item, isDarkMode }) => (
  <div className={`p-6 sm:p-8 pt-12 rounded-2xl relative flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:-translate-y-1 hover:shadow-md w-full ${isDarkMode ? 'bg-[#25103a]' : 'bg-[#f8f5ff]'}`}>
    <div className="absolute top-0 right-6 transform -translate-y-1/2 z-10">
      <div className="flex gap-1.5">
        <div className="w-3.5 h-8 bg-[#6c24b5] rounded-b-full shadow-md" />
        <div className="w-3.5 h-8 bg-[#6c24b5] rounded-b-full shadow-md" />
      </div>
    </div>
    <div className="space-y-1">
      {item.words.map((word, idx) => (
        <p key={idx} className="text-[#6c24b5] text-xl sm:text-2xl font-black leading-tight tracking-tight dark:text-purple-400">
          {word}
        </p>
      ))}
    </div>
    <div className={`mt-6 border-t pt-4 ${isDarkMode ? 'border-purple-900/50' : 'border-purple-100/50'}`}>
      <h4 className={`text-xs sm:text-sm font-extrabold mb-1 ${isDarkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>{item.name}</h4>
      <p className="text-gray-400 text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase">{item.position}</p>
    </div>
  </div>
);

// --- HERO & NAVIGATION COMPONENT ---
interface CultureHeroProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const CultureHero: React.FC<CultureHeroProps> = ({ activeTab, setActiveTab, isDarkMode, setIsDarkMode }) => {
  const navItems = [
    'Մշակույթ',
    'Առավելություններ',
    'Հաճախ տրվող հարցեր',
    'Ինչպես ընդունվել աշխատանքի Evocabank-ում'
  ];

  // Յուրաքանչյուր էջի համար նախատեսված եզակի բաններների հասցեները
  const backgroundImages: Record<string, string> = {
    'Մշակույթ': 'https://www.evoca.am/images-cache/menu/1/16195117975601/1920x634.jpg',
    'Առավելություններ': 'https://www.evoca.am/images-cache/menu/1/16194612394395/1920x634.jpg',
    'Հաճախ տրվող հարցեր': 'https://www.evoca.am/images-cache/menu/1/16194612949534/1920x634.jpg',
    'Ինչպես ընդունվել աշխատանքի Evocabank-ում': 'https://www.evoca.am/images-cache/menu/1/16194613464502/1920x634.jpg'
  };

  const currentBgImage = backgroundImages[activeTab] || backgroundImages['Մշակույթ'];

  return (
    <div className="w-full font-sans antialiased relative">
      {/* BACKGROUND CHANGERS / THEME TOGGLE */}
      <div className="absolute top-4 right-4 z-[60] flex items-center bg-black/10 backdrop-blur-md p-1.5 rounded-full border border-white/10">
        <button 
          onClick={() => setIsDarkMode(false)} 
          className={`p-1.5 rounded-full transition-all ${!isDarkMode ? 'bg-white text-[#6c24b5] shadow' : 'text-white/70 hover:text-white'}`}
        >
          <Sun size={16} />
        </button>
        <button 
          onClick={() => setIsDarkMode(true)} 
          className={`p-1.5 rounded-full transition-all ${isDarkMode ? 'bg-[#6c24b5] text-white shadow' : 'text-white/70 hover:text-white'}`}
        >
          <Moon size={16} />
        </button>
      </div>

      <nav className="bg-[#6c24b5] w-full flex justify-start md:justify-center items-center overflow-x-auto whitespace-nowrap sticky top-0 z-50 shadow-md scrollbar-none pr-16 md:pr-0">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`px-5 sm:px-6 py-4 text-white text-xs sm:text-[13px] font-bold transition-colors duration-300 whitespace-nowrap ${
              activeTab === item ? 'bg-[#5a1e96] border-b-2 border-cyan-400' : 'hover:bg-[#5a1e96]'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* HERO BANNER WITH DYNAMIC BACKGROUND */}
      <div 
        className="relative w-full min-h-[280px] md:min-h-[380px] flex items-center px-4 sm:px-8 md:px-16 lg:px-20 overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ 
          backgroundImage: !isDarkMode ? `url(${currentBgImage})` : 'none',
          backgroundColor: isDarkMode ? '#1f0933' : '#6c24b5'
        }}
      >
        {/* Dark overlay for better text contrast over the images in Light Mode */}
        {!isDarkMode && <div className="absolute inset-0 bg-black/10 pointer-events-none" />}

        {/* Դեկորատիվ էլեմենտներ հետնաֆոնում (երևում են միայն մուգ ռեժիմում) */}
        {isDarkMode && (
          <div className="absolute right-4 md:right-20 top-1/2 -translate-y-1/2 flex items-center gap-6 opacity-30 md:opacity-100 pointer-events-none max-w-[40%] md:max-w-none">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-[16px] border-dashed border-[#6c24b5]/20 animate-spin [animation-duration:20s]" />
            <div className="w-24 h-24 md:w-36 md:h-36 bg-purple-500/20 rounded-3xl rotate-45" />
          </div>
        )}

        <div className={`backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-[550px] relative z-10 mx-auto md:mx-0 text-center md:text-left border ${isDarkMode ? 'bg-[#130321]/90 border-purple-900/50' : 'bg-white/90 border-purple-100/50'}`}>
          <h1 className={`text-xl sm:text-2xl md:text-3xl font-black mb-4 ${isDarkMode ? 'text-white' : 'text-[#6c24b5]'}`}>
            {activeTab}
          </h1>
          <p className={`text-xs sm:text-sm md:text-base leading-relaxed font-semibold ${isDarkMode ? 'text-purple-200' : 'text-[#4a4a4a]'}`}>
            Միացի՛ր թիմին, որն ամենից ակտիվ, նորարարական և երջանիկ աշխատակիցներն ունի։
          </p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. ԱՌԱՆՁԻՆ ԷՋԵՐԻ ԿՈՄՊՈՆԵՆՏՆԵՐ (SUB-PAGES)
// ==========================================

// --- 1. ՄՇԱԿՈՒՅԹ ԷՋ ---
const CultureSubPage: React.FC<ThemeProps> = ({ isDarkMode }) => {
  const videos = [
    { title: "Evocabank neon art corporate party", thumbnail: "https://www.evoca.am/images-cache/culture_sliders/1/16196059430279/744x419.jpg" },
    { title: "Evoca New Year Corporate Party 2022", thumbnail: "https://www.evoca.am/images-cache/culture_sliders/1/16760069357338/744x419.jpg" },
    { title: "EVOCAISLAND Evoca Summer Party 2022", thumbnail: "https://www.evoca.am/images-cache/culture_sliders/1/16760071256254/744x419.jpg" }
  ];
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="w-full space-y-6 animate-fadeIn">
      {/* Ինչու՞ աշխատել բաժին */}
      <section className={`w-full py-12 px-4 md:px-10 lg:px-20 transition-colors duration-500 ${isDarkMode ? 'bg-[#130321]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className={`text-xl sm:text-2xl font-black text-center md:text-left ${isDarkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>Ինչու՞ աշխատել Evoca-ում</h2>
          <p className={`text-sm leading-relaxed text-justify md:text-left ${isDarkMode ? 'text-purple-200' : 'text-[#4a4a4a]'}`}>
            «Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ։ Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին»
          </p>
          <div className={`overflow-hidden rounded-2xl shadow-md border ${isDarkMode ? 'border-purple-900/30' : 'border-gray-100'}`}>
            <img src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg" alt="Evoca" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Կարուսել */}
      <section className="w-full bg-[#6c24b5] py-16 px-4 md:px-12 lg:px-20 flex flex-col items-center justify-center text-white">
        <div className="w-full max-w-6xl mb-10 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Մշակույթ</h2>
          <p className="text-sm opacity-90 max-w-2xl text-justify md:text-left">
            Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ։ Անընդհատ սովորում ենք, սպորտով զբաղվում և հանգստանում։
          </p>
        </div>
        <div className="relative w-full max-w-5xl flex items-center justify-center gap-4">
          <button onClick={() => setCurrentIndex(prev => prev === 0 ? videos.length - 1 : prev - 1)} className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all z-20">
            <ChevronLeft size={24} />
          </button>
          <div className="w-full max-w-[550px]">
            <VideoCard isMain isDarkMode={isDarkMode} title={videos[currentIndex].title} thumbnail={videos[currentIndex].thumbnail} />
          </div>
          <button onClick={() => setCurrentIndex(prev => prev === videos.length - 1 ? 0 : prev + 1)} className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all z-20">
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* Թիմի կարծիքները */}
      <TeamTestimonials isDarkMode={isDarkMode} />
    </div>
  );
};

// --- 2. ԱՌԱՎԵԼՈՒԹՅՈՒՆՆԵՐ ԷՋ ---
const AdvantagesSubPage: React.FC<ThemeProps> = ({ isDarkMode }) => {
  const advantages = [
    { icon: <HeartPulse size={36} className="text-[#6c24b5]" />, title: "Առողջության ապահովագրություն" },
    { icon: <Plane size={36} className="text-[#6c24b5]" />, title: "Ճամփորդական ապահովագրություն" },
    { icon: <Building2 size={36} className="text-[#6c24b5]" />, title: "Evocabank-ի ծառայությունների արտոնյալ պայմաններ, ապահովագրական ծառայությունների զեղչեր" },
    { icon: <Percent size={36} className="text-[#6c24b5]" />, title: "Սպորտային զեղչեր" },
    { icon: <Award size={36} className="text-[#6c24b5]" />, title: "Տոնական և տարելիցների բոնուսներ" },
    { icon: <Gift size={36} className="text-[#6c24b5]" />, title: "Պարգևատրումներ ծննդյան օրվան, ամուսնության և երեխա ունենալիս" }
  ];

  return (
    <div className={`w-full py-16 px-4 sm:px-8 md:px-16 lg:px-24 animate-fadeIn transition-colors duration-500 ${isDarkMode ? 'bg-[#130321]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-xl sm:text-2xl font-black mb-12 text-center md:text-left tracking-tight border-b pb-4 ${isDarkMode ? 'text-white border-purple-900/40' : 'text-[#1a1a1a] border-gray-100'}`}>
          Մեր առավելությունները
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {advantages.map((item, idx) => (
            <div key={idx} className={`flex flex-col items-center md:items-start text-center md:text-left space-y-4 p-5 rounded-2xl transition-colors duration-300 ${isDarkMode ? 'hover:bg-purple-950/40' : 'hover:bg-purple-50/40'}`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm shrink-0 ${isDarkMode ? 'bg-[#25103a]' : 'bg-[#f4eefa]'}`}>
                {item.icon}
              </div>
              <p className={`text-xs sm:text-sm font-bold leading-relaxed tracking-tight max-w-[280px] md:max-w-none ${isDarkMode ? 'text-purple-100' : 'text-[#3a3a3a]'}`}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. ՀԱՃԱԽ ՏՐՎՈՂ ՀԱՐՑԵՐ (FAQ) ԷՋ ---
const FAQSubPage: React.FC<ThemeProps> = ({ isDarkMode }) => {
  const faqs: FAQItem[] = [
    {
      question: "Կարո՞ղ եմ միաժամանակ դիմել տարբեր աշխատատեղերի համար։",
      answer: "Մեկ օգտատիրոջ կողմից ներկայացվող դիմումների քանակն անսահմանափակ է, սակայն խնդրում ենք դիմել միայն այն աշխատանքների համար, որում նշված պահանջներին և հմտություններին համապատասխանում եք։"
    },
    {
      question: "Դիմումը ներկայացնելուց որքան ժամանակ հետո ինձ կհրավիրեն հարցազրույցի։",
      answer: "Մեր HR թիմը մանրամասն ուսումնասիրում է բոլոր հայտերը։ Համապատասխանության դեպքում մենք կապ կհաստատենք Ձեզ հետ առավելագույնը 2 շաբաթվա ընթացքում։"
    },
    {
      question: "Հարցազրույցի ընթացքում լինելու՞ է թեստավորում։",
      answer: "Կախված հաստիքից՝ որոշ դեպքերում մասնագիտական առաջադրանք կամ թեստավորում նախատեսվում է հիմնական հարցազրույցի փուլում կամ դրանից առաջ։"
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className={`w-full py-14 px-4 sm:px-8 md:px-16 animate-fadeIn transition-colors duration-500 ${isDarkMode ? 'bg-[#130321]' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="space-y-3 mb-10">
          <h2 className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>Հարցերի ցանկ</h2>
          <p className={`text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում այդքան յուրահատուկ։ Աշխատակիցներն ուրախ են, մոտիվացված, իսկ առավելությունների մեծ փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին:
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`border rounded-xl overflow-hidden shadow-sm transition-all ${isDarkMode ? 'border-purple-900/50 bg-[#19062b]' : 'border-purple-100 bg-white'}`}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={`w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-[13px] transition-colors gap-4 ${isDarkMode ? 'text-white hover:bg-purple-950/40' : 'text-[#1a1a1a] hover:bg-purple-50/20'}`}
                >
                  <span className={isOpen ? 'text-[#6c24b5] dark:text-purple-400' : ''}>{faq.question}</span>
                  {isOpen ? <ChevronUp size={18} className="text-[#6c24b5] dark:text-purple-400 shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
                </button>
                {isOpen && (
                  <div className={`p-4 pt-1 border-t text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'border-purple-900/30 text-purple-200 bg-[#210c35]/50' : 'border-purple-50 text-gray-600 bg-[#fbfaff]/50'} animate-slideDown`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// --- 4. ԻՆՉՊԵՍ ԸՆԴՈՒՆՎԵԼ ԱՇԽԱՏԱՆՔԻ ԷՋ ---
const HowToJoinSubPage: React.FC<ThemeProps> = ({ isDarkMode }) => {
  const steps: StepItem[] = [
    { number: 1, title: "Առաջին փուլ՝ Դիմում", content: "Evocabank-ում աշխատանքի դիմելիս թեկնածուի ճանապարհը սկսվում է հայտի ներկայացումից, որն իրականացվում է կայքէջում հայտը լրացնելով կամ cv@evocabank.am էլ․ հասցեին Ձեր ինքնակենսագրականն ուղարկելով։" },
    { number: 2, title: "Երկրորդ փուլ՝ Հարցազրույցներ", content: "Մեր HR մասնագետների կողմից ընտրված թեկնածուները հրավիրվում են նախնական և մասնագիտական հարցազրույցների՝ փոխադարձ ծանոթության նպատակով։" },
    { number: 3, title: "Երրորդ փուլ՝ Թեստավորում և ամփոփում", content: "Անհրաժեշտության դեպքում իրականացվում է մասնագիտական կարողությունների թեստավորում և արդյունքների վերջնական ամփոփում։" },
    { number: 4, title: "Չորրորդ փուլ՝ Ստուգումներ", content: "Վերջնական փուլում իրականացվում են անվտանգության և ներքին կանոնակարգերով սահմանված ստանդարտ ստուգումներ։" }
  ];

  const [activeStep, setActiveStep] = useState<number | null>(1);

  return (
    <div className="w-full space-y-4 animate-fadeIn">
      {/* Փուլերի բաժին */}
      <section className={`w-full py-12 px-4 sm:px-8 md:px-16 transition-colors duration-500 ${isDarkMode ? 'bg-[#130321]' : 'bg-white'}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-center text-lg sm:text-xl font-black mb-8 ${isDarkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>Աշխատանքի ընդունվելու փուլեր</h2>
          <div className="space-y-4 relative before:absolute before:left-[21px] before:top-6 before:bottom-6 before:w-0.5 before:border-l-2 before:border-dashed before:border-purple-200">
            {steps.map((step) => {
              const isOpen = activeStep === step.number;
              return (
                <div key={step.number} className={`relative z-10 border rounded-xl shadow-sm overflow-hidden ${isDarkMode ? 'border-purple-900/50 bg-[#19062b]' : 'border-purple-100 bg-white'}`}>
                  <button
                    onClick={() => setActiveStep(isOpen ? null : step.number)}
                    className={`w-full flex items-center p-3.5 text-left font-extrabold text-xs sm:text-[13px] gap-4 ${isDarkMode ? 'text-white' : 'text-[#1a1a1a]'}`}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 font-bold text-xs ${isOpen ? 'bg-[#6c24b5] text-white' : 'bg-purple-100 text-[#6c24b5]'}`}>
                      {step.number}
                    </div>
                    <span className="flex-1">{step.title}</span>
                    {isOpen ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                  </button>
                  {isOpen && (
                    <div className={`pl-14 pr-4 pb-4 text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'text-purple-200 bg-[#210c35]/30' : 'text-gray-600 bg-purple-50/10'}`}>
                      {step.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Դիմումի Ֆորմա */}
      <CareerForm isDarkMode={isDarkMode} />
    </div>
  );
};

// ==========================================
// 4. ՄՇՏԱԿԱՆ ԲԱԺԻՆՆԵՐ (SHARED SECTIONS)
// ==========================================

const TeamTestimonials: React.FC<ThemeProps> = ({ isDarkMode }) => {
  const data: Testimonial[] = [
    { id: 1, words: ["Թրենդային", "Պահանջված", "Ուրախ"], name: "Հարություն Սահակյան", position: "Անվտանգության մասնագետ" },
    { id: 2, words: ["Դինամիկ", "Պրպտող", "Զարգացող"], name: "Լիլիթ Գաբրոյան", position: "Գլխավոր ֆինանսական տնօրեն" },
    { id: 3, words: ["Կրեատիվ", "Նորարար", "Մանուշակագույն"], name: "Ալլա Զաքարյան", position: "Վճարային գործիքների մասնագետ" }
  ];
  const [mobileIdx, setMobileIdx] = useState(0);

  return (
    <section className={`w-full py-14 px-4 sm:px-8 select-none transition-colors duration-500 ${isDarkMode ? 'bg-[#130321]' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-base sm:text-lg md:text-xl font-black text-center mb-12 max-w-xl mx-auto ${isDarkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
          Հարցրու՛ մեր թիմին. «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
        </h2>
        <div className="flex items-center justify-center gap-2 max-w-5xl mx-auto">
          <button onClick={() => setMobileIdx(p => p === 0 ? data.length - 1 : p - 1)} className={`md:hidden p-1 rounded-full text-[#6c24b5] ${isDarkMode ? 'bg-purple-950/50' : 'bg-gray-50'}`}>
            <ChevronLeft size={28} />
          </button>
          <div className="w-full">
            <div className="hidden md:grid grid-cols-3 gap-6 w-full">
              {data.map((item) => <TestimonialCard key={item.id} item={item} isDarkMode={isDarkMode} />)}
            </div>
            <div className="block md:hidden w-full">
              <TestimonialCard item={data[mobileIdx]} isDarkMode={isDarkMode} />
            </div>
          </div>
          <button onClick={() => setMobileIdx(p => p === data.length - 1 ? 0 : p + 1)} className={`md:hidden p-1 rounded-full text-[#6c24b5] ${isDarkMode ? 'bg-purple-950/50' : 'bg-gray-50'}`}>
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

const CareerForm: React.FC<ThemeProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', phone: '', email: '', facebook: '', linkedin: '', coverLetter: '', captcha: '' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <section className={`w-full py-12 px-4 sm:px-6 md:px-10 font-sans border-t transition-colors duration-500 ${isDarkMode ? 'bg-[#130321] border-purple-950' : 'bg-white border-purple-50'}`}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-black text-[#6c24b5] dark:text-purple-400 mb-3">Դառնալ թիմի անդամ</h2>
          <p className={`text-xs sm:text-sm max-w-md mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Եթե ցանկանում ես միանալ <span className="text-[#6c24b5] dark:text-purple-400 font-bold">EvocaTEAM</span>-ին, կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը։
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className={`text-[12px] font-bold ${isDarkMode ? 'text-purple-200' : 'text-gray-700'}`}>Անուն <span className="text-red-500">*</span></label>
              <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="text" required className={`w-full border rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#6c24b5] ${isDarkMode ? 'bg-[#19062b] border-purple-900/50 text-white' : 'bg-white border-gray-200'}`} /></div>
            </div>
            <div className="space-y-1.5">
              <label className={`text-[12px] font-bold ${isDarkMode ? 'text-purple-200' : 'text-gray-700'}`}>Ազգանուն <span className="text-red-500">*</span></label>
              <div className="relative"><User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="text" required className={`w-full border rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#6c24b5] ${isDarkMode ? 'bg-[#19062b] border-purple-900/50 text-white' : 'bg-white border-gray-200'}`} /></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className={`text-[12px] font-bold ${isDarkMode ? 'text-purple-200' : 'text-gray-700'}`}>Հեռախոսահամար <span className="text-red-500">*</span></label>
              <div className={`flex border rounded-xl overflow-hidden focus-within:border-[#6c24b5] ${isDarkMode ? 'border-purple-900/50' : 'border-gray-200'}`}>
                <div className={`flex items-center gap-1 px-3 border-r text-xs font-semibold text-gray-500 ${isDarkMode ? 'bg-[#210c35] border-purple-900/50' : 'bg-gray-50'}`}><img src="https://flagcdn.com/w20/am.png" alt="AM" className="w-4 h-auto" /><span>+374</span></div>
                <input type="tel" required placeholder="0XX XXXXXX" className={`w-full py-2.5 px-3 text-sm outline-none ${isDarkMode ? 'bg-[#19062b] text-white' : 'bg-white'}`} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className={`text-[12px] font-bold ${isDarkMode ? 'text-purple-200' : 'text-gray-700'}`}>Էլ. հասցե</label>
              <div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="email" className={`w-full border rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#6c24b5] ${isDarkMode ? 'bg-[#19062b] border-purple-900/50 text-white' : 'bg-white border-gray-200'}`} /></div>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className={`text-[12px] font-bold ${isDarkMode ? 'text-purple-200' : 'text-gray-700'}`}>Facebook էջի հղում</label>
            <div className="relative"><Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="url" placeholder="https://facebook.com/..." className={`w-full border rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#6c24b5] ${isDarkMode ? 'bg-[#19062b] border-purple-900/50 text-white' : 'bg-white border-gray-200'}`} /></div>
          </div>
          <div className="space-y-1.5">
            <label className={`text-[12px] font-bold ${isDarkMode ? 'text-purple-200' : 'text-gray-700'}`}>LinkedIn էջի հղում</label>
            <div className="relative"><Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} /><input type="url" placeholder="https://linkedin.com/in/..." className={`w-full border rounded-xl py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#6c24b5] ${isDarkMode ? 'bg-[#19062b] border-purple-900/50 text-white' : 'bg-white border-gray-200'}`} /></div>
          </div>
          <div className="space-y-1.5">
            <label className={`text-[12px] font-bold ${isDarkMode ? 'text-purple-200' : 'text-gray-700'}`}>Ուղեկցող նամակ</label>
            <textarea rows={3} className={`w-full border rounded-xl py-2.5 px-3 text-sm outline-none focus:border-[#6c24b5] resize-none ${isDarkMode ? 'bg-[#19062b] border-purple-900/50 text-white' : 'bg-white border-gray-200'}`} />
          </div>
          <div className="space-y-1.5">
            <label className={`text-[12px] font-bold ${isDarkMode ? 'text-purple-200' : 'text-gray-700'}`}>Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span></label>
            <input type="file" ref={fileInputRef} accept=".pdf,.doc,.docx" className="hidden" onChange={(e) => e.target.files && setSelectedFile(e.target.files[0])} />
            <div onClick={() => fileInputRef.current?.click()} className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${isDarkMode ? 'border-purple-900/50 bg-[#19062b] hover:border-[#6c24b5]' : 'border-gray-200 bg-gray-50/50 hover:border-[#6c24b5]'}`}>
              {selectedFile ? (
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border shadow-sm ${isDarkMode ? 'bg-[#210c35] border-purple-900/50' : 'bg-white border-gray-200'}`}>
                  <FileText className="text-[#6c24b5]" size={16} />
                  <span className={`text-xs font-medium max-w-[200px] truncate ${isDarkMode ? 'text-purple-100' : 'text-gray-700'}`}>{selectedFile.name}</span>
                  <button onClick={(e) => { e.stopPropagation(); setSelectedFile(null); }} className="text-gray-400 hover:text-red-500"><X size={14} /></button>
                </div>
              ) : (
                <>
                  <span className="text-gray-400 text-xs font-medium">Կցել ֆայլը (PDF, DOC, DOCX)</span>
                  <Paperclip className="text-gray-400" size={18} />
                </>
              )}
            </div>
          </div>
          <div className="space-y-1.5 pt-1">
            <label className={`text-[12px] font-bold ${isDarkMode ? 'text-purple-200' : 'text-gray-700'}`}>Ստուգման ծածկագիր <span className="text-red-500">*</span></label>
            <div className={`border p-3 rounded-xl w-fit flex flex-col gap-2 ${isDarkMode ? 'border-purple-900/50 bg-[#19062b]' : 'border-gray-200 bg-gray-50/20'}`}>
              <div className="flex items-center gap-2">
                <input type="text" required placeholder="Ծածկագիրը" className={`border rounded-lg px-2.5 py-1.5 text-sm outline-none focus:border-[#6c24b5] w-[140px] ${isDarkMode ? 'bg-[#210c35] border-purple-900/50 text-white' : 'bg-white'}`} />
                <button type="button" className="text-gray-400 hover:text-[#6c24b5]"><RotateCw size={16} /></button>
              </div>
              <div className={`border p-2 flex items-center justify-center select-none rounded-lg shadow-inner ${isDarkMode ? 'bg-[#130321] border-purple-900/50' : 'bg-white'}`}>
                <span className="text-lg font-black tracking-[8px] text-gray-600 italic line-through font-mono">7KYWG6</span>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#6c24b5] text-white font-bold py-3 rounded-full hover:bg-[#5a1e96] transition-all shadow-md mt-4 text-sm">
            Ես ուզում եմ աշխատել Evoca-ում :)
          </button>
        </form>
      </div>
    </section>
  );
};

// ==========================================
// 5. ԳԼԽԱՎՈՐ ԷՋԸ (MAIN PAGE WITH SWITCH CASE)
// ==========================================
const CareerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Մշակույթ');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const renderSubPage = () => {
    switch (activeTab) {
      case 'Մշակույթ':
        return <CultureSubPage isDarkMode={isDarkMode} />;
      case 'Առավելություններ':
        return <AdvantagesSubPage isDarkMode={isDarkMode} />;
      case 'Հաճախ տրվող հարցեր':
        return <FAQSubPage isDarkMode={isDarkMode} />;
      case 'Ինչպես ընդունվել աշխատանքի Evocabank-ում':
        return <HowToJoinSubPage isDarkMode={isDarkMode} />;
      default:
        return <CultureSubPage isDarkMode={isDarkMode} />;
    }
  };

  return (
    <div className={`w-full min-h-screen flex flex-col transition-colors duration-500 ${isDarkMode ? 'bg-[#130321]' : 'bg-gray-50'}`}>
      {/* Նավիգացիա և Hero բաններ */}
      <CultureHero activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Դինամիկ Էջի Բովանդակություն */}
      <main className="w-full flex-1">
        {renderSubPage()}
      </main>
    </div>
  );
};

export default CareerPage;