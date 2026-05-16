import React, { useState } from 'react';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

// Օժանդակ կոմպոնենտ մոբայլում ակորդեոն էֆեկտ ստանալու համար
const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 lg:border-none py-4 lg:py-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center lg:block text-left font-bold text-gray-800 mb-0 lg:mb-6 select-none focus:outline-none"
      >
        <span>{title}</span>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 lg:hidden ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`mt-4 lg:mt-0 lg:block ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-12 lg:pt-16 pb-8 px-4 sm:px-6 lg:px-20 border-t border-gray-100 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Թարմացման ամսաթիվ */}
        <div className="flex justify-center sm:justify-end mb-8 lg:mb-10">
          <span className="text-gray-400 text-[11px] tracking-wide">Թարմացվել է՝ 27/04/2026 17:48</span>
        </div>

        {/* Հիմնական Grid կառուցվածք */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Լոգո և Հասցե */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <img src="https://www.evoca.am/images/logo.svg" alt="Evocabank" className="h-7 w-auto" />
            <div className="text-gray-600 text-sm leading-relaxed font-medium">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </div>
            <div className="space-y-3 max-w-xs">
              <p className="text-gray-800 text-xs font-bold leading-tight">
                Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
              </p>
              <p className="text-gray-400 text-[10px] tracking-wider uppercase font-semibold">
                1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </p>
            </div>
          </div>

          {/* Սյունակ 1 */}
          <FooterSection title="Բանկի մասին">
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Մեր մասին</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Ղեկավարություն</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Բաժնետերեր</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Հաշվետվություններ</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Իրավական ակտեր</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Սակագներ</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Օտարվող գույք</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Կառուցապատողներ</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Գործընկեր ավտոսրահներ</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Սակագների արխիվ</li>
            </ul>
          </FooterSection>

          {/* Սյունակ 2 */}
          <FooterSection title="Օգտակար հղումներ">
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Հաճախորդի իրավունքները</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Հաճախորդի ռեզիդենտության չափանիշներ</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Կարգավորում</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Գաղտնիության քաղաքականություն</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Ֆին. հաշտարար</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Ֆինանսական հանցագործությունների կանխարգելում</li>
            </ul>
          </FooterSection>

          {/* Սյունակ 3 */}
          <FooterSection title="Այլ հղումներ">
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">EvocaONLINE</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Պահատուփեր</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Հաճախ տրվող հարցեր</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Հայտարարություններ</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Dibrary</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Բուկլետներ</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Հետադարձ կապ</li>
              <li className="hover:text-[#6c24b5] transition-colors cursor-pointer">Կայքի քարտեզ</li>
            </ul>
          </FooterSection>

          {/* Սոց. ցանցեր և Կոնտակտներ */}
          <div className="space-y-6 pt-4 lg:pt-0 flex flex-col items-center sm:items-start text-center sm:text-left">
            {/* Սոց. ցանցերի SVG իկոնաներ */}
            <div className="flex gap-5 text-gray-400">
              <a href="#" className="hover:text-[#6c24b5] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="hover:text-[#6c24b5] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="hover:text-[#6c24b5] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            
            {/* Մոբայլ հավելվածների կոճակներ */}
            <div className="flex flex-row sm:flex-col gap-3 w-full justify-center sm:justify-start">
              <a href="https://apps.apple.com/am/app/evocatouch/id970309076" target="_blank" rel="noreferrer" className="transition-transform hover:scale-102">
                <img src="https://www.evoca.am/images/app-store.svg" alt="App Store" className="h-9 w-auto" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank" target="_blank" rel="noreferrer" className="transition-transform hover:scale-102">
                <img src="https://www.evoca.am/images/google-play.svg" alt="Google Play" className="h-9 w-auto" />
              </a>
            </div>

            {/* Հեռախոսահամարներ */}
            <div className="space-y-3 text-[#6c24b5] font-extrabold text-sm w-full">
              <p className="hover:underline cursor-pointer transition-all">Բանկի հասցեները և աշխատաժամերը</p>
              <p className="hover:underline cursor-pointer transition-all">Կապ մեզ հետ</p>
              <div className="pt-2 space-y-1">
                <p className="text-xl text-gray-900 tracking-wide">+374 10 605555</p>
                <p className="text-xl text-gray-900 tracking-wider">8444</p>
              </div>
            </div>
          </div>

        </div>

        {/* Ներքևի ծանուցում և սերտիֆիկատներ */}
        <div className="border-t border-gray-100 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-400 max-w-3xl leading-relaxed text-justify sm:text-left font-medium">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: «Էվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց կայքերի բովանդակության ստույգության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          
          {/* Սերտիֆիկատների/Գործընկերների լոգոներ (Օրինակ՝ Visa, Mastercard և այլն) */}
          <div className="flex items-center gap-5 opacity-40 grayscale hover:grayscale-0 transition-all duration-300 shrink-0">
            <div className="h-6 w-10 bg-gray-300 rounded" /> 
            <div className="h-6 w-10 bg-gray-300 rounded" />
            <div className="h-6 w-12 bg-gray-300 rounded" />
            <div className="h-6 w-8 bg-gray-300 rounded" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;