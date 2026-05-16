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
            <img src="data:image/png;base64,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" alt="Evocabank" className="h-7 w-auto" />
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
                <img src="https://www.nicepng.com/png/detail/25-253876_app-store-and-google-play-with-your-own.png" alt="App Store" className="h-9 w-auto" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank" target="_blank" rel="noreferrer" className="transition-transform hover:scale-102">
                <img src="data:image/png;base64,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" alt="Google Play" className="h-9 w-auto" />
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