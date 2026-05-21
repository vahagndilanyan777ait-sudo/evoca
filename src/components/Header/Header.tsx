import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface NavItemProps {
  label: string;
  to: string;
  isActive?: boolean;
  isDropdown?: boolean;
}

const TopNavItem: React.FC<NavItemProps> = ({ label, to, isActive, isDropdown }) => (
  <Link 
    to={to} 
    className={`cursor-pointer text-[13px] whitespace-nowrap flex items-center gap-1 hover:text-[#6c24b5] transition-colors ${
      isActive ? 'text-[#6c24b5] font-bold' : 'text-gray-700'
    }`}
  >
    {label}
    {isDropdown && <span className="text-[9px] text-gray-400">▼</span>}
  </Link>
);

const Navbar: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Լեզուն փոխելու ֆունկցիա
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  // Փակել լեզվի դրոպդաունը, երբ կտտացնում ենք դրսում
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Հիմնական նավիգացիոն կետերը
  const mainNavItems = [
    { label: t('loans'), path: "/loans" },
    { label: t('cards'), path: "/cards" },
    { label: t('deposits'), path: "/deposits" },
    { label: t('accounts'), path: "/accounts" },
    { label: t('transfers'), path: "/transfers" },
    { label: t('securities'), path: "/securities" },
    { label: "EvocaSALARY", path: "/salary" },
    { label: "EvocaTOUCH", path: "/touch" },
    
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white font-sans antialiased sticky top-0 z-50">
      <p> usumnakan krknorinak</p>
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 lg:px-20 py-2 border-b border-gray-50 bg-gray-50/50 overflow-x-auto md:overflow-visible scrollbar-none">
        <div className="flex items-center gap-5 sm:gap-6">
          <TopNavItem label={t('individual')} to="/" isActive={location.pathname === "/"} />
          <TopNavItem label={t('business')} to="/biznes" isActive={location.pathname === "/biznes"} />
          <TopNavItem label={t('speedpay')} to="/speedpay" isActive={location.pathname === "/speedpay"} />
          <TopNavItem label={t('about')} to="/about" isActive={location.pathname === "/about"} />
          <TopNavItem label={t('news')} to="/news" isActive={location.pathname === "/news"} />
          <TopNavItem label={t('blog')} to="/blog" isActive={location.pathname === "/blog"} />
          <TopNavItem label={t('career')} to="/career" isActive={location.pathname === "/career"} />
        </div>
        
        <div className="flex items-center gap-5 sm:gap-6 ml-4">
          <TopNavItem label={t('onlineApps')} to="/online-applications" isDropdown />
          <TopNavItem label={t('contact')} to="/contact" isDropdown />
          
          <div className="flex items-center gap-3.5 text-gray-500 text-base relative">
            <span className="cursor-pointer hover:text-black transition-colors">📍</span>
            
            {/* Լեզվի Ընտրության Բաժին (🌐) */}
            <div className="relative" ref={langMenuRef}>
              <button 
                className="cursor-pointer hover:text-black text-xs uppercase font-bold border border-gray-300 px-2 py-0.5 rounded flex items-center gap-1 bg-white select-none transition-colors"
                onClick={() => setLangOpen(!langOpen)}
              >
                🌐 {i18n.language ? i18n.language.substring(0, 2) : 'am'}
              </button>
              
              {langOpen && (
                <div className="absolute right-0 mt-1.5 bg-white border border-gray-200 rounded-lg shadow-xl py-1 text-xs z-50 min-w-[75px] animate-fadeIn">
                  <button onClick={() => changeLanguage('am')} className={`block w-full text-left px-3 py-2 hover:bg-gray-50 font-bold ${i18n.language.startsWith('am') ? 'text-[#6c24b5]' : 'text-gray-700'}`}>AM</button>
                  <button onClick={() => changeLanguage('en')} className={`block w-full text-left px-3 py-2 hover:bg-gray-50 font-bold ${i18n.language.startsWith('en') ? 'text-[#6c24b5]' : 'text-gray-700'}`}>EN</button>
                  <button onClick={() => changeLanguage('ru')} className={`block w-full text-left px-3 py-2 hover:bg-gray-50 font-bold ${i18n.language.startsWith('ru') ? 'text-[#6c24b5]' : 'text-gray-700'}`}>RU</button>
                </div>
              )}
            </div>

            <span className="cursor-pointer hover:text-black transition-colors text-sm">🔍</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="flex justify-between items-center px-4 lg:px-20 py-3.5">
        <div className="flex items-center gap-10">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer select-none">
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-gray-400">e</span>
            <span className="text-2xl sm:text-3xl font-black tracking-tighter text-[#6c24b5]">voca</span>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden xl:flex items-center gap-5 text-[14px] font-bold text-gray-900">
            {mainNavItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`hover:text-[#6c24b5] transition-colors whitespace-nowrap ${
                  location.pathname === item.path ? 'text-[#6c24b5]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/wilco" className="text-gray-400 hover:text-[#6c24b5] text-[13px] font-medium whitespace-nowrap border-l border-gray-200 pl-5 transition-colors">
              Wilco Wealth Management
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-5 sm:px-6 py-2 rounded-full font-bold text-xs tracking-wide transition-all shadow-md hover:shadow-purple-500/10 active:scale-95">
            EvocaONLINE
          </button>
          
          {/* Burger button mobile-ի համար (ըստ ցանկության կարող եք դարձնել սթեյթով) */}
          <button className="xl:hidden text-gray-700 hover:text-black text-xl p-1">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;