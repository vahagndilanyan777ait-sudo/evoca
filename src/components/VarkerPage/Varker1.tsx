import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ==========================================
// 1. ՏԻՊԵՐԻ ԵՎ ԻՆՏԵՐՖԵՅՍՆԵՐԻ ՍԱՀՄԱՆՈՒՄ
// ==========================================
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
  detailedInfo?: string;
  isTravelCard?: boolean;
}

// ==========================================
// 2. ՄԱՆՐԱՄԱՍՆ ՏԵՂԵԿՈՒԹՅԱՆ ՄՈԴԱԼ ՊԱՏՈՒՀԱՆ
// ==========================================
interface LoanModalProps {
  loan: LoanInfo | null;
  onClose: () => void;
}

const LoanDetailModal: React.FC<LoanModalProps> = ({ loan, onClose }) => {
  if (!loan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-2xl overflow-hidden p-6 md:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 items-center max-h-[90vh] overflow-y-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 rounded-full transition-colors duration-200 z-10"
        >
          ✕
        </button>

        {/* Ձախ հատված` Ինֆորմացիա */}
        <div className="flex-1 space-y-6 w-full">
          <h2 className="text-2xl md:text-3.5xl font-black text-gray-950 tracking-tight leading-tight">
            {loan.title}
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
            {loan.description}
          </p>

          <hr className="border-gray-100" />

          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Գումար / Սահմանաչափ</p>
              <p className="text-xl md:text-2xl font-black text-[#6c24b5] mt-0.5">{loan.amount}</p>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Ժամկետ</p>
              <p className="text-xl md:text-2xl font-black text-[#6c24b5] mt-0.5">{loan.duration}</p>
            </div>
            <div>
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Տոկոսադրույք</p>
              <p className="text-xl md:text-2xl font-black text-[#6c24b5] mt-0.5">{loan.rate}</p>
            </div>
            {loan.subRate && (
              <div>
                <p className="text-[11px] text-pink-600 uppercase tracking-wider font-bold">Պետ. սուբսիդավորմամբ</p>
                <p className="text-xl md:text-2xl font-black text-pink-500 mt-0.5">{loan.subRate}</p>
              </div>
            )}
          </div>

          {loan.detailedInfo && (
            <div className="pt-2">
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-bold mb-1">Լրացուցիչ տեղեկություն</p>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                {loan.detailedInfo}
              </p>
            </div>
          )}

          <div className="pt-4">
            <button className="bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-8 py-3 rounded-full text-sm font-bold shadow-md transition-all active:scale-95 duration-200">
              Դիմել Օնլայն
            </button>
          </div>
        </div>

        {/* Աջ հատված` Դինամիկ վիզուալ բլոկ */}
        <div className="w-full md:w-[420px] flex-shrink-0 flex justify-center">
          {loan.isTravelCard ? (
            <div className="relative w-full aspect-[1.58/1] rounded-[24px] bg-[#6c24b5] p-5 text-white flex flex-col justify-between overflow-hidden shadow-xl border border-purple-500/30">
              <div className="absolute top-0 left-0 bottom-0 w-[55%] bg-white p-4 flex flex-col justify-between text-gray-900 rounded-l-[22px]">
                <div className="flex items-center justify-between text-[10px] font-black tracking-wider text-gray-400">
                  <div>
                    <p className="leading-none">FROM:</p>
                    <p className="text-sm text-gray-900 mt-0.5">HOME</p>
                  </div>
                  <span className="text-base text-[#6c24b5]">✈</span>
                  <div>
                    <p className="leading-none">TO:</p>
                    <p className="text-sm text-gray-900 mt-0.5">NEXT</p>
                  </div>
                </div>
                <div className="w-full h-24 bg-gray-50 rounded-xl border border-dashed border-gray-200" />
              </div>
              <div className="ml-[58%] h-full flex flex-col justify-between items-end">
                <div className="text-right">
                  <span className="text-2xl font-black tracking-wide lowercase">evoca</span>
                  <div className="border border-white/30 rounded px-1.5 py-0.5 mt-2 text-[8px] tracking-widest uppercase font-bold bg-white/10">
                    Boarding Pass
                  </div>
                </div>
                <div className="flex gap-1 opacity-90">
                  <div className="w-8 h-8 rounded-full bg-red-500 translate-x-3 mix-blend-screen" />
                  <div className="w-8 h-8 rounded-full bg-yellow-400 mix-blend-screen" />
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full relative group overflow-hidden rounded-[28px] shadow-lg border border-gray-100 bg-gray-50 p-2">
              <img 
                src={loan.image} 
                alt={loan.title} 
                className="w-full h-auto max-h-[280px] object-cover rounded-[22px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                Evocabank
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

// ==========================================
// 3. ՕԺԱՆԴԱԿ ԼԻՍՏԻ ՔԱՐՏ (LOAN CARD)
// ==========================================
const LoanCard: React.FC<{ loan: LoanInfo; onDetailClick: () => void }> = ({ loan, onDetailClick }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 py-8 md:py-12 border-b border-gray-100 last:border-0 items-start transition-all duration-300">
      <div className="w-full lg:w-[360px] flex-shrink-0">
        <img 
          src={loan.image} 
          alt={loan.title} 
          className="w-full h-[200px] sm:h-[240px] lg:h-[220px] object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
        />
      </div>
      
      <div className="flex-1 w-full">
        <h2 className="text-xl sm:text-[22px] font-extrabold text-gray-900 leading-tight mb-3">
          {loan.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-[640px]">
          {loan.description}
        </p>
        
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
        
        <button 
          onClick={onDetailClick}
          className="flex items-center gap-2 bg-[#f3e8ff] hover:bg-[#ebd5ff] text-[#6c24b5] px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95 duration-200"
        >
          Մանրամասն <span className="text-base leading-none transform translate-y-[0.5px]">›</span>
        </button>
      </div>
    </div>
  );
};

// ==========================================
// 4. CREDIT HISTORY SECTION (ԻՐԱԿԱՆ ՏԵՔՍՏԵՐՈՎ)
// ==========================================
const CreditHistorySection: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in max-w-4xl text-gray-800 font-sans">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
          Վարկային պատմություն և սքոր
        </h1>
        <div className="w-12 h-1 bg-[#6c24b5] rounded-full" />
      </div>

      <div className="space-y-8">
        {/* Բլոկ 1 */}
        <section className="space-y-3">
          <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-[#6c24b5] rounded-full inline-block" />
            Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5">
            Վարկային պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում ձեր <b>ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅՈՒՆԸ</b> վատանում է:
          </p>
        </section>

        {/* Բլոկ 2 */}
        <section className="space-y-3">
          <h3 className="text-md sm:text-lg font-bold text-gray-900 pl-3.5">
            • Ի՞նչ է վարկային պատմությունը
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5">
            «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն՝ վարկային պատմությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվություն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվությունը:
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5 mt-2">
            Այն, որպես կանոն, օգտագործվում է ֆինանսական կազմակերպությունների կողմից վարկերի տրամադրման, ինչպես նաև արտադրանք և կամ ծառայություններ մատուցող կազմակերպությունների կողմից՝ ապառիկ վաճառքի վերաբերյալ որոշումներ կայացնելու ընթացքում:
          </p>
        </section>

        {/* Բլոկ 3 */}
        <section className="space-y-3">
          <h3 className="text-md sm:text-lg font-bold text-gray-900 pl-3.5">
            • Որո՞նք են վարկային պատմության ձևավորման աղբյուրները
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5">
            Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները, հանրային ծառայությունները)։
          </p>
        </section>

        {/* Բլոկ 4 */}
        <section className="space-y-3">
          <h3 className="text-md sm:text-lg font-bold text-gray-900 pl-3.5">
            • Ի՞նչ է վարկային բյուրոն
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5">
            Վարկային բյուրոն իրավաբանական և ֆիզիկական անձանց ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկություններ հավաքող (հավաքագրող) կազմակերպություն է:
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5 mt-2">
            Վարկային բյուրոյի ծառայությունների շնորհիվ յուրաքանչյուր իրավաբանական կամ ֆիզիկական անձ հնարավորություն է ստանում՝
          </p>
          <ul className="list-disc pl-9 space-y-2 text-sm sm:text-base text-gray-600">
            <li>Ժամանակին կատարելով իր ֆինանսական պարտավորությունները՝ կերտել դրական վարկային պատմություն և օգտվել դրա շնորհիվ ավելի բարենպաստ ֆինանսական պայմաններից:</li>
            <li>Ճիշտ կառավարել սեփական ֆինանսական պարտավորությունները և մշտապես տեղեկացված լինել սեփական ֆինանսական պարտավորությունների կատարման ընթացիկ պատկերի մասին:</li>
          </ul>
        </section>

        {/* Բլոկ 5 */}
        <section className="space-y-3">
          <h3 className="text-md sm:text-lg font-bold text-gray-900 pl-3.5">
            • Ի՞նչ է վարկային զեկույցը
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5">
            Վարկային զեկույցը փաստաթուղթ է, որը պարունակում է վարկային տեղեկատվության սուբյեկտի ֆինանսական կազմակերպությունների նկատմամբ ստանձնած պարտավորությունների կատարման վերաբերյալ տեղեկատվություն:
          </p>
        </section>

        {/* Բլոկ 6 */}
        <section className="space-y-3">
          <h3 className="text-md sm:text-lg font-bold text-gray-900 pl-3.5">
            • Որքա՞ն ժամանակ է պահպանվում վարկային պատմությունը
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5">
            Համաձայն օրենքի՝ վարկային բյուրոյի կողմից տրամադրվող վարկային զեկույցում ներառվում է հարցման պահին նախորդող հինգ տարվա տեղեկատվությունը:
          </p>
        </section>

        {/* Բլոկ 7 */}
        <section className="space-y-3">
          <h3 className="text-md sm:text-lg font-bold text-gray-900 pl-3.5">
            • Ինչպե՞ս բարելավել վարկային պատմությունը
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5">
            Նախ անհրաժեշտ է լիովին մարել նախկինում գոյացած ժամկետանց պարտավորությունների վճարումները: Բացի այդ, ներկա պահին գործող վարկերի մասով անհրաժեշտ է բացառել ժամկետանց նույնիսկ մեկ օրվա կազմակերպվող պարտավորությունների գոյացումը:
          </p>
        </section>

        {/* Բլոկ 8 */}
        <section className="space-y-3">
          <h3 className="text-md sm:text-lg font-bold text-gray-900 pl-3.5">
            • Որ ոչնչին չի ազդում վարկային պատմության սխալը
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-3.5">
            Եթե վարկատուի վարկային պատմության մեջ առկա են սխալ կամ կեղծ տվյալներ, ապա պարզաբանման և ուղղման նպատակով կարող եք համաձայն օրենքի դիմել ԱՔՌԱ վարկային բյուրոյին:
          </p>
        </section>
      </div>
    </div>
  );
};

// ==========================================
// 5. IMPORTANT INFO SECTION (ԻՐԱԿԱՆ ՏԵՔՍՏԵՐՈՎ)
// ==========================================
const ImportantInfoSection: React.FC = () => {
  const alerts = [
    "Տոկոսագումարների գծով հաշվարկները կատարվում են 365 օրացուցային օրերի համար: Եթե վճարման օրը ոչ աշխատանքային է, ապա վճարումը կատարվում է դրան հաջորդող աշխատանքային օրվա ընթացքում:",
    "Հիփոթեքային վարկերի դեպքում Դուք իրավունք ունեք մինչև ժամկետից շուտ իրականացնել վարկի մասնակի կամ ամբողջական մարում, որի դեպքում Բանկի կողմից տույժեր չեն կիրառվում:",
    "Վարկի մարման ժամանակացույցով խախտումներ անելու դեպքում վարկի ժամկետանց մասի վրա կարող է կիրառվել ՀՀ Կենտրոնական բանկի կողմից սահմանված բանկային տոկոսի հաշվարկային դրույքը, որը ամրագրվում է վարկային պայմանագրով:",
    "Դուք իրավունք ունեք նախքան վարկային պայմանագիր կնքելը ծանոթանալ պայմանագրի նախագծի հետ:",
    "Վարկի տոկոսադրույքները հաշվարկվում են ԱՆՎԱՆԱԿԱՆ ՏՈԿՈՍԱԴՐՈՒՅՔԻ հիման վրա, իսկ ՏԱՐԵԿԱՆ ՓԱՍՏԱՑԻ ՏՈԿՈՍԱԴՐՈՒՅՔԸ ցույց է տալիս, թե որքան կպատժվի վարկը Ձեզ համար տոկոսագումարները և այլ վճարները սահմանված ժամկետներում և չափերով կատարելու դեպքում: Տարեկան փաստացի տոկոսադրույքի հաշվարկման կարգին (Կանոնակարգ 8/01) կարող եք ծանոթանալ ՀՀ Կենտրոնական բանկի պաշտոնական կայքում (www.cba.am):",
    "Արտարժույթով տրամադրվող վարկերի գծով արտարժույթի փոխարժեքի փոփոխությունները կարող են ազդեցություն ունենալ վարկի մարումների վրա:",
    "Բանկը Ձեզ ՀՀ օրենսդրությամբ սահմանված կարգով և դեպքերում Ձեր նախընտրած հաղորդակցման եղանակով (5D-օրյա պարբերականությամբ) կտրամադրի վարկի վերաբերյալ քաղվածք:",
    "Պայմանագրի գործողության ընթացքում բողոքների քննության դեպքում կարող եք դրանք ներկայացնել կազմակերպությանը, սպառողների շահերի պաշտպանության գործընթացով ներկայացված է www.evoca.am կայքում և Բանկի գործունեության վայրերում: Դուք հնարավորություն ունեք բողոք-պահանջը ՀՀ օրենսդրությամբ սահմանված կարգով ներկայացնել Ֆինանսական համակարգի հաշտարարին: Ձեր իրավունքները կարող եք պաշտպանել նաև դատական միջոցով: Իրավունքների պաշտպանության գործընթացը ներկայացված է www.evoca.am կայքում և Բանկի գործունեության վայրերում տեղադրված «Ինչ անել, եթե բողոք ունեք» ձևաթղթում:",
    "ՉՈՒՇԱՑՆԵԼՈՎ ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՄԱՆ ՍԱՀՄԱՆՎԱԾ ԺԱՄԿԵՏՆԵՐԸ ՁԵՐ ԿՈՂՄԻՑ ՊԱՐՏԱՎՈՐՈՒԹՅՈՒՆԸ ՉԿԱՏԱՐԵԼՈՒ ԴԵՊՔՈՒՄ ԳՐԱՎԱԴՐՎԱԾ ԳՈՒՅՔԸ ԿԱՐՈՂ Է ԲՌՆԱԳԱՆՁՎԵԼ ԲԱՆԿԻ ԿՈՂՄԻՑ ՕՐԵՆՔՈՎ ՍԱՀՄԱՆՎԱԾ ԿԱՐԳՈՎ, ՈՒ ԴՐԱ ՀԱՇՎԻՆ ԿԱՏԱՐՎԻ ՎԱՐԿԱՅԻՆ ՊԱՐՏԱՎՈՐՈՒԹՅԱՆ ՄԱՐՈՒՄ:",
    "ՏԵՂԵԿԱՑՎԱԾ ԼԻՆԵԼՈՎ, որ Ձեր կողմից ներկայացված վարկի ստացման դիմումի հարցերի պատասխանները, այդ թվում՝ հեռախոսահամարները, սուբյեկտիվորեն լրացնելով և հավաստիացնելով, անկախ պատճառներից կարող են ունենալ անբարենպաստ ազդեցություն և ունենալ վարկային ակտիվի գնահատականի վրա:",
    "Վարկային պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում Ձեր ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ վերաբերյալ տեղեկատվությունը Ձեր Ֆինանսական պարտավորությունների կատարման վերաբերյալ տեղեկությունները մեկ աշխատանքային օրվա ընթացքում (կամ հաշվետու կիսամյակում) կփոխանցվի Ձեզ վարկ տրամադրող կազմակերպությունների կողմից Վարկային բյուրոյին և Ձեզ վարկ տրամադրող կազմակերպությունների կողմից Վարկային պատմությունը ուսումնասիրվում է վարկավորման կազմակերպությունների կողմից Ձեր վարկային հարցումները ընթացքում և մեծ դեր է խաղում վարկի տրամադրման որոշման կայացման հարցում:",
    "Վարկային պայմանագրով Ձեր կողմից ստանձնած պարտավորությունները չկատարելու կամ ոչ պատշաճ կատարելու դեպքում դուք կարող եք զրկվել անշարժ գույքի նկատմամբ Ձեր իրավունքներից:",
    "ԶԳՈՒՇԱՑՈՒՄ: ՎԱՐԿԻ ԳՈՒՄԱՐԻ ՄԱՐՄԱՆ ԺԱՄԱՆԱԿԱՑՈՒՅՑԻՑ ԽԱԽՏՈՒՄՆԵՐԻ ԴԵՊՔՈՒՄ ԳՐԱՎԱԴՐՎԱԾ ԳՈՒՅՔԸ ԿԱՐՈՂ Է ՕՐԵՆՔՈՎ ՍԱՀՄԱՆՎԱԾ ԿԱՐԳՈՎ ԲՌՆԱԳԱՆՁՎԵԼ:",
    "Վարկային պարտավորությունների չկատարման հետևանքով գրավի հաշվին պարտավորությունները մարելու դեպքում, եթե վարկային պարտավորությունները ծածկելու համար գրավի արժեքը չի բավարարում, ապա Բանկը ՀՀ օրենսդրությամբ սահմանված կարգով կարող է կատարել վարկային պարտավորությունների մարումներ Ձեր այլ գույքերի հաշվին:"
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl font-sans">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-2">
          Կարևոր տեղեկատվություն
        </h1>
        <h2 className="text-base text-[#6c24b5] font-black uppercase tracking-widest mb-3">Ուշադրություն</h2>
        <div className="w-12 h-1 bg-[#6c24b5] rounded-full" />
      </div>

      <div className="space-y-4">
        {alerts.map((text, idx) => (
          <div 
            key={idx} 
            className="p-5 bg-purple-50/40 hover:bg-purple-50/80 border border-purple-100/60 rounded-2xl flex gap-4 transition-all duration-200 shadow-sm"
          >
            <span className="text-[#6c24b5] font-black text-sm pt-0.5">•</span>
            <p className="text-sm sm:text-[14.5px] text-gray-700 leading-relaxed font-medium">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// 6. ՀԻՄՆԱԿԱՆ ԷՋ (LOANS PAGE) WITH CASE SWITCH
// ==========================================
const LoansPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('loans');
  const [selectedLoan, setSelectedLoan] = useState<LoanInfo | null>(null);

  const loans: LoanInfo[] = [
    {
    id: 1,
    title: "Հեծանիվի ձեռքբերման վարկ",
    description: "Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ:",
    image: "https://www.evoca.am/images-cache/loans/1/17701927362001/415x261.png",
    amount: "300,000 ֏",
    duration: "36 ամիս",
    rate: "16%",
    subRate: "16%",
    detailedInfo: "Այս վարկատեսակը նախատեսված է էկոլոգիապես մաքուր տրանսպորտի խթանման համար: Ֆինանսավորումն իրականացվում է հատուկ պետական ծրագրերի շրջանակներում, ինչի շնորհիվ ուսանողներն ու կրթական համակարգի աշխատակիցները ստանում են բացառիկ արտոնություններ: Մարումների գրաֆիկը անուիտետային է:"
  },
  {
    id: 2,
    title: "Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ",
    description: "Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:",
    image: "https://www.evoca.am/images-cache/loans/1/17764888992084/415x261.png",
    amount: "50 մլն ֏",
    duration: "60 ամիս",
    rate: "14%",
    detailedInfo: "Լիզինգի շնորհիվ դուք խնայում եք ձեր ժամանակը: Գույքը գրանցվում է բանկի անվամբ, իսկ դուք այն օգտագործում եք ամսական վճարների դիմաց: Ժամկետի ավարտին սեփականության իրավունքը ամբողջությամբ փոխանցվում է ձեզ: Ապահովագրությունը ներառված է պայմանագրում:"
  },
  {
    id: 3,
    title: "Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով",
    description: "Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով:",
    image: "https://www.evoca.am/images-cache/loans/1/1614244906092/415x261.jpg",
    amount: "80 մլն. ֏",
    duration: "240 ամիս",
    rate: "13.2%",
    detailedInfo: "Բանկի սեփական միջոցներով տրամադրվող հիփոթեքային վարկերը չունեն սահմանափակումներ կառուցապատողի ընտրության հարցում: Դուք կարող եք ձեռք բերել տուն ինչպես առաջնային, այնպես էլ երկրորդային շուկայից: Պահանջվում է կայուն եկամտի աղբյուր:"
  },
  {
    id: 4,
    title: "Գույքի գրավով ապահովված անհատական վարկ",
    description: "Շտապ գումա՞ր է անհրաժեշտ ընթացիկ ծախսերը հոգալու համար, և ցածր տոկոսադրույքով վարկատեսա՞կ ես փնտրում: Արի՛ Evocabank:",
    image: "https://www.evoca.am/images-cache/loans/1/16142566831396/415x261.jpg",
    amount: "100 մլն. ֏",
    duration: "24-120 ամիս",
    rate: "15%-ից",
    detailedInfo: "Որպես ապահովվածության միջոց կարող է հանդիսանալ Երևան քաղաքում կամ ՀՀ այլ մարզերում գտնվող բնակելի կամ կոմերցիոն անշարժ գույքը: Վարկի առավելագույն չափը կախված է գույքի գնահատված շուկայական արժեքից (մինչև 70%):"
  },
  {
    id: 5,
    title: "Action",
    description: "Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի:",
    image: "https://www.evoca.am/images-cache/loans/1/16994456305602/415x261.png",
    amount: "10 մլն ֏",
    duration: "60 ամիս",
    rate: "15%",
    detailedInfo: "Ամբողջությամբ թվային վարկ՝ առանց բանկ այցելելու: Սքորինգային համակարգը վայրկյանների ընթացքում վերլուծում է ձեր տվյալները և հաստատում վարկը: Գումարը անմիջապես փոխանցվում է ձեր Evocabank քարտին կամ հաշվին:"
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

  // Բովանդակության ռենդեր ըստ Case-երի (Tab Switch)
  const renderTabContent = () => {
    switch (activeTab) {
      case 'loans':
        return (
          <div className="divide-y divide-gray-100">
            {loans.map(loan => (
              <LoanCard 
                key={loan.id} 
                loan={loan} 
                onDetailClick={() => setSelectedLoan(loan)} 
              />
            ))}
          </div>
        );
      case 'credit-history':
        return <CreditHistorySection />;
      case 'important-info':
        return <ImportantInfoSection />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full font-sans bg-white min-h-screen text-gray-800 antialiased">
      {/* Տաբերի Նավիգացիա */}
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
            {activeTab === 'credit-history' && 'Վարկային պատմություն և սքոր'}
            {activeTab === 'important-info' && 'Կարևոր տեղեկատվություն'}
          </span>
        </nav>

        {/* Բովանդակություն ըստ ընտրված տաբի */}
        <main className="min-h-[400px]">
          {renderTabContent()}
        </main>
      </div>

      {/* Մոդալ */}
      <LoanDetailModal 
        loan={selectedLoan} 
        onClose={() => setSelectedLoan(null)} 
      />
    </div>
  );
};

export default LoansPage;