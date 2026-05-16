import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase'; // Համոզվիր, որ այս ֆայլը ստեղծված է քո նախագծում

// --- Types & Interfaces ---
interface TabItem {
  id: string;
  label: string;
}

interface AccordionSection {
  id: number;
  title: string;
}

interface PaymentSystemCardProps {
  title: string;
  description: string;
  contacts: { label: string; value: string }[];
}

// --- Sub-Components ---

const PaymentCard: React.FC<PaymentSystemCardProps> = ({ title, description, contacts }) => (
  <div className="bg-white p-8 rounded-[30px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
    <div className="h-12 mb-6 flex items-center justify-center">
       <span className="text-xl font-black italic text-gray-800 uppercase">{title}</span>
    </div>
    <p className="text-[13px] text-gray-600 leading-relaxed mb-8 min-h-[100px]">{description}</p>
    <div className="mt-auto space-y-2">
      {contacts?.map((c, i) => (
        <div key={i} className="text-[12px]">
          <span className="text-[#6c24b5] font-bold block">{c.label}</span>
          <span className="text-gray-900 font-medium">{c.value}</span>
        </div>
      ))}
    </div>
  </div>
);

// --- Main Page Component ---

const InvestmentsPage: React.FC = () => {
  type TabType = 'services' | 'bonds' | 'primary-dealer' | 'repo' | 'evocainvest' | 'payments';
  const [activeSubTab, setActiveSubTab] = useState<TabType>('services');
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(1);

  // --- States Firebase-ի տվյալների համար ---
  const [investmentTabs, setInvestmentTabs] = useState<TabItem[]>([]);
  const [paymentSystems, setPaymentSystems] = useState<PaymentSystemCardProps[]>([]);
  const [accordionSections, setAccordionSections] = useState<AccordionSection[]>([]);
  const [loading, setLoading] = useState(true);

  const bannerImg = "https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg";

  // --- Տվյալների ներբեռնում Firebase-ից ---
  useEffect(() => {
    const dbRef = ref(db);

    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        if (data.investmentTabs) setInvestmentTabs(data.investmentTabs);
        if (data.paymentSystems) setPaymentSystems(data.paymentSystems);
        if (data.accordionSections) setAccordionSections(data.accordionSections);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase-ից տվյալների կարդալու սխալ:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-lg">
        Բեռնվում է...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#333]">
      
      {/* Navigation Tabs */}
      <div className="bg-[#6c24b5] w-full py-3 px-4 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-6 text-white text-[11px] font-bold uppercase tracking-wider">
          {investmentTabs.map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as TabType)}
              className={`pb-1 transition-all border-b-2 ${activeSubTab === tab.id ? 'border-white opacity-100' : 'border-transparent opacity-70'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-8">
          <span>🏠</span> › <span>Անհատ</span> › <span>Արժեթղթեր</span> › 
          <span className="text-[#6c24b5] font-medium">
             {activeSubTab === 'services' && 'Ներդրումային ծառայություններ'}
             {activeSubTab === 'bonds' && 'Պարտատոմսեր'}
             {activeSubTab === 'primary-dealer' && 'Հայաստանի կենտրոնական դեպոզիտարիա'}
             {activeSubTab === 'repo' && 'Ռեպո գործարքներ'}
             {activeSubTab === 'evocainvest' && 'EvocaINVEST'}
             {activeSubTab === 'payments' && 'Վճարային համակարգեր'}
          </span>
        </nav>

        {/* --- DYNAMIC CONTENT SECTIONS --- */}

        {/* 1. INVESTMENTS SERVICES */}
        {activeSubTab === 'services' && (
          <div className="animate-fadeIn">
            <div className="relative flex flex-col lg:flex-row items-stretch bg-[#f8f5fb] rounded-[40px] overflow-hidden min-h-[400px] mb-16">
              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                <h1 className="text-[32px] lg:text-[40px] font-black text-gray-900 leading-tight mb-6">Ներդրումային <br /> ծառայություններ</h1>
                <p className="text-[15px] text-gray-600 leading-relaxed max-w-[450px]">Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ Ձեր պահանջներին և ցանկություններին համապատասխան:</p>
              </div>
              <div className="flex-1 bg-[#f0e8f9] flex items-center justify-center p-8">
                 <img src={bannerImg} className="w-full h-full object-contain" alt="Services" />
              </div>
            </div>
            <div className="max-w-[1000px] space-y-6 text-[14px] text-gray-700 mb-20 leading-relaxed">
              <p>Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էobject-containլ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:</p>
              <h3 className="font-bold text-gray-900">Ինչպե՞ս դառնալ հաճախորդ.</h3>
              <p>Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ: Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ:</p>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#6c24b5]">
                <p className="font-bold">Հասցե՝ Երևան, Հանրապետության 44/2</p>
                <p>Հեռ.՝ 033 777 453, 374 33 603055</p>
                <p>Էլ. հասցե՝ investsecurities@evoca.am</p>
              </div>
            </div>
          </div>
        )}

        {/* 2. BONDS */}
        {activeSubTab === 'bonds' && (
          <div className="animate-fadeIn">
            <div className="relative flex flex-col lg:flex-row items-stretch bg-[#f8f5fb] rounded-[40px] overflow-hidden min-h-[400px] mb-16">
              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                <h1 className="text-[32px] lg:text-[40px] font-black text-gray-900 leading-tight mb-6">Պարտատոմսեր</h1>
                <p className="text-[15px] text-gray-600 leading-relaxed max-w-[450px]">Evocabank-ը հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և ստանալ բարձր եկամուտներ:</p>
              </div>
              <div className="flex-1 bg-[#f0e8f9] flex items-center justify-center p-8">
                <img src={bannerImg} className="w-full h-full object-contain" alt="Bonds" />
              </div>
            </div>
            <div className="max-w-[1000px] space-y-6 mb-20 text-[14px]">
              <p className="font-bold text-[#6c24b5]">Պարտատոմսերը պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ունեն մի շարք առավելություններ.</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամի» կողմից:</li>
                <li>ՀՀ ֆոնդային բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից:</li>
              </ul>
            </div>
          </div>
        )}

        {/* 3. PRIMARY DEALER / CDA */}
        {activeSubTab === 'primary-dealer' && (
          <div className="animate-fadeIn">
            <div className="relative flex flex-col lg:flex-row items-stretch bg-[#f8f5fb] rounded-[40px] overflow-hidden min-h-[400px] mb-16">
              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                <h1 className="text-[28px] lg:text-[34px] font-black text-gray-900 leading-tight mb-6">Հայաստանի կենտրոնական <br/> դեպոզիտարիա (ՀԿԴ)</h1>
                <p className="text-[15px] text-gray-600 leading-relaxed max-w-[500px]">Evocabank-ը հանդիսանում է ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր՝ միջնորդավորելով ՀԿԴ կողմից մատուցվող ծառայությունները:</p>
              </div>
              <div className="flex-1 bg-[#f0e8f9] flex items-center justify-center p-8">
                 <img src={bannerImg} className="w-full h-full object-contain" alt="CDA" />
              </div>
            </div>
            <div className="max-w-[1000px] space-y-6 text-[14px] mb-20 leading-relaxed">
              <p>ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումն իրականացնում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:</p>
              <p>Բանկը՝ որպես Հաշվի Օպերատոր և կարգավորվող շուկայի հաշվարկային համակարգի անդամ, մատուցում է ռեեստրավարման և պահառության ծառայություններ:</p>
              <div className="flex flex-col gap-4">
                 <a href="#" className="text-[#6c24b5] font-bold underline">ՀԿԴ կողմից մատուցվող ծառայությունների միջնորդավորման սակագներ</a>
                 <a href="#" className="text-[#6c24b5] font-bold underline">ՀԿԴ կողմից մատուցվող ծառայությունների միջնորդավորման կանոններ</a>
              </div>
            </div>
          </div>
        )}

        {/* 4. REPO */}
        {activeSubTab === 'repo' && (
          <div className="animate-fadeIn">
            <div className="relative flex flex-col lg:flex-row items-stretch bg-[#f8f5fb] rounded-[40px] overflow-hidden min-h-[400px] mb-16">
              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                <h1 className="text-[32px] lg:text-[40px] font-black text-gray-900 leading-tight mb-6">Ռեպո/Հակադարձ Ռեպո <br/> գործարքներ</h1>
                <p className="text-[15px] text-gray-600 leading-relaxed max-w-[450px]">Կարճաժամկետ դրամական միջոցներ ներգրավելու և տեղաբաշխելու նպատակով Evocabank-ն իրականացնում է Ռեպո/Հակադարձ Ռեպո գործարքներ:</p>
              </div>
              <div className="flex-1 bg-[#f0e8f9] flex items-center justify-center p-8">
                 <img src={bannerImg} className="w-full h-full object-contain" alt="Repo" />
              </div>
            </div>
            <div className="max-w-[1000px] space-y-6 text-[14px] mb-20">
              <p>Բանկը գործարքներ է կնքում բացառապես ՀՀ Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային ընկերություններ, Ապահովագրական ընկերություններ):</p>
              <p>Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ կողմից թողարկված պարտատոմսերով, ինչպես նաև կորպորատիվ պարտատոմսերով:</p>
            </div>
          </div>
        )}

        {/* 5. EVOCAINVEST */}
        {activeSubTab === 'evocainvest' && (
          <div className="animate-fadeIn">
            <div className="relative flex flex-col lg:flex-row items-stretch bg-[#f8f5fb] rounded-[40px] overflow-hidden min-h-[400px] mb-16">
              <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
                <h1 className="text-[32px] lg:text-[40px] font-black text-gray-900 leading-tight mb-6">Կատարիր ներդրումներ <br/> EvocaINVEST հավելվածով</h1>
                <p className="text-[15px] text-gray-600 leading-relaxed max-w-[450px]">EvocaINVEST հավելվածի միջոցով կարող ես գնել և վաճառել արժեթղթեր ավելի քան 20 երկրների ֆինանսական շուկաներում:</p>
              </div>
              <div className="flex-1 bg-[#f0e8f9] flex items-center justify-center p-8">
                 <img src={bannerImg} className="w-full h-full object-contain" alt="EvocaINVEST" />
              </div>
            </div>
            <div className="max-w-[1000px] mb-20 text-[14px]">
              <h3 className="text-[#6c24b5] font-black mb-6 uppercase">Փոքր քայլերից դեպի մեծ եկամուտներ.</h3>
              <ul className="space-y-4 list-none">
                {[
                  'Դարձիր Բանկի հաճախորդ',
                  'Բացիր Բրոքերային հաշիվ',
                  'Ներբեռնիր հավելվածը',
                  'Համալրիր հաշիվդ',
                  'Կատարիր ներդրումներ',
                  'Ստացիր և վայելիր եկամուտներդ'
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#6c24b5]"></span> {step}
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-[12px] text-red-600 font-bold uppercase">Ուշադրություն. Ֆինանսական շուկաներում գործառնությունների հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ:</p>
            </div>
          </div>
        )}

        {/* 6. PAYMENT SYSTEMS */}
        {activeSubTab === 'payments' && (
          <div className="animate-fadeIn">
            <h1 className="text-[32px] font-black text-center mb-16">Վճարային համակարգեր</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {paymentSystems.map((system, idx) => (
                <PaymentCard 
                  key={idx}
                  title={system.title}
                  description={system.description}
                  contacts={system.contacts}
                />
              ))}
            </div>
          </div>
        )}

        {/* Dynamic Accordion Section */}
        <div className="mb-24 pt-10 border-t border-gray-100">
          <h2 className="text-[18px] font-black text-gray-900 mb-8 uppercase tracking-wider text-center">Անհրաժեշտ տեղեկատվություն</h2>
          <div className="max-w-[900px] mx-auto space-y-4">
            {accordionSections.map((section) => (
              <div key={section.id} className={`border rounded-xl transition-all ${openAccordionId === section.id ? 'border-[#6c24b5] shadow-md' : 'border-gray-200'}`}>
                <button 
                  onClick={() => setOpenAccordionId(openAccordionId === section.id ? null : section.id)} 
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-[14px]"
                >
                  {section.title}
                  <span className={`transform transition-transform ${openAccordionId === section.id ? 'rotate-180' : ''}`}>˅</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentsPage;