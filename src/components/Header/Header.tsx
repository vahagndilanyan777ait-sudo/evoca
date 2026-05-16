import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // <--- Ներմուծում ենք hook-ը

interface NavItemProps {
  label: string;
  to: string;
  isActive?: boolean;
  isDropdown?: boolean;
}

const TopNavItem: React.FC<NavItemProps> = ({ label, to, isActive, isDropdown }) => (
  <Link 
    to={to} 
    className={`cursor-pointer text-[13px] flex items-center gap-1 hover:text-[#6c24b5] transition-colors ${
      isActive ? 'text-[#6c24b5] font-bold' : 'text-gray-700'
    }`}
  >
    {label}
    {isDropdown && <span className="text-[10px]">▼</span>}
  </Link>
);

const Navbar: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation(); // <--- ստանում ենք 't' ֆունկցիան և 'i18n' օբյեկտը
  const [langOpen, setLangOpen] = useState(document.readyState === "complete" ? false : false);

  // Լեզուն փոխելու ֆունկցիա
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  // Հիմնական նավիգացիոն կետերը՝ օգտագործելով t() ֆունկցիան
  const mainNavItems = [
    { label: t('loans'), path: "/loans" },
    { label: t('cards'), path: "/cards" },
    { label: t('deposits'), path: "/deposits" },
    { label: t('accounts'), path: "/accounts" },
    { label: t('transfers'), path: "/transfers" },
    { label: t('securities'), path: "/securities" },
    { label: "EvocaSALARY", path: "/salary" }, // Եթե անունը չի փոխվում
    { label: "EvocaTOUCH", path: "/touch" },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white font-sans">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 lg:px-20 py-2 border-b border-gray-50">
        <div className="flex items-center gap-6">
          <TopNavItem label={t('individual')} to="/" isActive={location.pathname === "/"} />
          <TopNavItem label={t('business')} to="/biznes" isActive={location.pathname === "/biznes"} />
          <TopNavItem label={t('speedpay')} to="/speedpay" isActive={location.pathname === "/speedpay"} />
          <TopNavItem label={t('about')} to="/about" isActive={location.pathname === "/about"} />
          <TopNavItem label={t('news')} to="/news" isActive={location.pathname === "/news"} />
          <TopNavItem label={t('blog')} to="/blog" isActive={location.pathname === "/blog"} />
          <TopNavItem label={t('career')} to="/career" isActive={location.pathname === "/career"} />
        </div>
        
        <div className="flex items-center gap-6">
          <TopNavItem label={t('onlineApps')} to="/online-applications" isDropdown />
          <TopNavItem label={t('contact')} to="/contact" isDropdown />
          
          <div className="flex items-center gap-4 ml-4 text-gray-600 text-lg relative">
            <span className="cursor-pointer hover:text-black">📍</span>
            <span className="cursor-pointer hover:text-black text-sm font-bold">?</span>
            
            {/* Լեզվի Ընտրության Բաժին (🌐) */}
            <div className="relative">
              <span 
                className="cursor-pointer hover:text-black text-base flex items-center gap-1 uppercase font-semibold text-xs border border-gray-300 px-1.5 py-0.5 rounded"
                onClick={() => setLangOpen(!langOpen)}
              >
                🌐 {i18n.language.substring(0, 2)}
              </span>
              
              {langOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg py-1 text-sm z-50 min-w-[70px]">
                  <button onClick={() => changeLanguage('am')} className="block w-full text-left px-3 py-1 hover:bg-gray-100 font-medium text-xs">AM</button>
                  <button onClick={() => changeLanguage('en')} className="block w-full text-left px-3 py-1 hover:bg-gray-100 font-medium text-xs">EN</button>
                </div>
              )}
            </div>

            <span className="cursor-pointer hover:text-black">🔍</span>
            <span className="cursor-pointer hover:text-black">☰</span>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="flex justify-between items-center px-4 lg:px-20 py-4">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <span className="text-3xl font-bold tracking-tighter text-gray-400">e</span>
            <span className="text-3xl font-bold tracking-tighter text-[#6c24b5]">voca</span>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-[15px] font-medium text-gray-900">
            {mainNavItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`hover:text-[#6c24b5] transition-colors ${
                  location.pathname === item.path ? 'text-[#6c24b5]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/wilco" className="text-gray-900 whitespace-nowrap hover:text-[#6c24b5]">
              Wilco Wealth Management
            </Link>
          </nav>
        </div>

        <button className="bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md active:scale-95">
          EvocaONLINE
        </button>
      </div>
    </header>
  );
};

export default Navbar;