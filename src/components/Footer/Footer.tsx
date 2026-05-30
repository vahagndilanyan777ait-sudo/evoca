import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FooterSectionProps {
  title: string;
  children: React.ReactNode;
}

// Սահուն անիմացիայով ակորդեոն մոբայլի համար
const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 lg:border-none py-4 lg:py-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center lg:block text-left font-bold text-gray-800 mb-0 lg:mb-6 select-none focus:outline-none"
      >
        <span className="text-[15px] lg:text-[16px]">{title}</span>
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 lg:hidden ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`grid transition-all duration-300 ease-in-out lg:block ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 lg:opacity-100 overflow-hidden'}`}>
        <div className="overflow-hidden lg:overflow-visible">
          {children}
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const { t } = useTranslation();

  // Օգնող զանգվածներ թարգմանությունները loop անելու համար
  const aboutLinks = [
    'aboutUs', 'management', 'shareholders', 'reports', 
    'legalActs', 'tariffs', 'alienatedProperty', 'developers', 
    'partnerSalons', 'tariffsArchive'
  ];

  const usefulLinks = [
    'clientRights', 'residentCriteria', 'regulation', 
    'privacyPolicy', 'finOmbudsman', 'finCrimePrevention'
  ];

  const otherLinks = [
    'evocaOnline', 'safes', 'faq', 'announcements', 
    'dibrary', 'booklets', 'feedback', 'sitemap'
  ];

  return (
    <footer className="bg-white pt-12 lg:pt-16 pb-8 px-4 sm:px-6 lg:px-20 border-t border-gray-100 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Թարմացման ամսաթիվ */}
        <div className="flex justify-center sm:justify-end mb-8 lg:mb-10">
          <span className="text-gray-400 text-[11px] tracking-wide">
            {t('footer.updatedAt', { date: '27/04/2026 17:48' })}
          </span>
        </div>

        {/* Հիմնական Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Լոգո և Հասցե */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="text-2xl font-black tracking-wider text-[#6c24b5] uppercase">
              Evocabank
            </div>
            
            <div className="text-gray-600 text-sm leading-relaxed font-medium">
              {t('footer.address.city')}, 0010,<br />
              {t('footer.address.street')}
            </div>
            <div className="space-y-3 max-w-xs">
              <p className="text-gray-800 text-xs font-bold leading-tight">
                {t('footer.cbaNotice')}
              </p>
              <p className="text-gray-400 text-[10px] tracking-wider uppercase font-semibold">
                1990 - 2026, © {t('footer.allRightsReserved')}
              </p>
            </div>
          </div>

          {/* Սյունակ 1. Բանկի մասին */}
          <FooterSection title={t('footer.sections.aboutBank')}>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              {aboutLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#6c24b5] transition-colors block">
                    {t(`footer.links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Սյունակ 2. Օգտակար հղումներ */}
          <FooterSection title={t('footer.sections.usefulLinks')}>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              {usefulLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#6c24b5] transition-colors block">
                    {t(`footer.links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Սյունակ 3. Այլ հղումներ */}
          <FooterSection title={t('footer.sections.otherLinks')}>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              {otherLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-[#6c24b5] transition-colors block">
                    {t(`footer.links.${link}`)}
                  </a>
                </li>
              ))}
            </ul>
          </FooterSection>

          {/* Սոց. ցանցեր և Կոնտակտներ */}
          <div className="space-y-6 pt-6 lg:pt-0 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex gap-5 text-gray-400">
              <a href="#" className="hover:text-[#6c24b5] transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="hover:text-[#6c24b5] transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="hover:text-[#6c24b5] transition-colors" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93 $.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
            
            {/* Մոբայլ հավելվածներ */}
            <div className="flex flex-row sm:flex-col gap-3 w-full justify-center sm:justify-start">
              <a href="https://apps.apple.com/am/app/evocatouch/id970309076" target="_blank" rel="noreferrer" className="bg-black text-white px-3 py-1.5 rounded-xl flex items-center gap-2 hover:scale-102 transition-transform border border-neutral-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z"/></svg>
                <div className="text-left font-sans">
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 leading-none">Download on the</p>
                  <p className="text-xs font-semibold leading-tight">App Store</p>
                </div>
              </a>

              <a href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank" target="_blank" rel="noreferrer" className="bg-black text-white px-3 py-1.5 rounded-xl flex items-center gap-2 hover:scale-102 transition-transform border border-neutral-800">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M5.25 2.25c-.14 0-.28.03-.41.09L13.5 11l-8.66 8.66c.13.06.27.09.41.09.28 0 .54-.11.75-.32l11.66-11.66c.41-.41.41-1.07 0-1.48L6 2.57c-.21-.21-.47-.32-.75-.32zM4.19 3.59c-.06.13-.09.27-.09.41v16c0 .14.03.28.09.41L12.5 12 4.19 3.59z"/></svg>
                <div className="text-left font-sans">
                  <p className="text-[9px] uppercase tracking-wider text-gray-400 leading-none">Get it on</p>
                  <p className="text-xs font-semibold leading-tight">Google Play</p>
                </div>
              </a>
            </div>

            {/* Հասցեներ և Հեռախոսներ */}
            <div className="space-y-3 text-[#6c24b5] font-extrabold text-sm w-full">
              <a href="#" className="hover:underline block transition-all">{t('footer.contacts.branchesAndHours')}</a>
              <a href="#" className="hover:underline block transition-all">{t('footer.contacts.contactUs')}</a>
              <div className="pt-2 space-y-1">
                <p className="text-xl text-gray-900 tracking-wide font-sans">+374 10 605555</p>
                <p className="text-xl text-gray-900 tracking-wider font-sans">8444</p>
              </div>
            </div>
          </div>

        </div>

        {/* Ներքևի ծանուցում */}
        <div className="border-t border-gray-100 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-gray-400 max-w-3xl leading-relaxed text-justify sm:text-left font-medium">
            {t('footer.disclaimer')}
          </p>
          
          <div className="flex items-center gap-5 opacity-40 grayscale hover:grayscale-0 transition-all duration-300 shrink-0">
            <div className="h-6 w-10 bg-gray-200 rounded-md" /> 
            <div className="h-6 w-10 bg-gray-200 rounded-md" />
            <div className="h-6 w-12 bg-gray-200 rounded-md" />
            <div className="h-6 w-8 bg-gray-200 rounded-md" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;