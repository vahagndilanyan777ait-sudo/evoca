import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  label: string;
  to: string;
  isActive?: boolean;
  isDropdown?: boolean;
}

const TopNavItem: React.FC<NavItemProps> = ({ label, to, isActive, isDropdown }) => (
  <Link 
    to={to} 
    className={`cursor-pointer text-[13px] flex items-center gap-1 hover:text-[#6c24b5] transition-colors ${isActive ? 'text-[#6c24b5] font-bold' : 'text-gray-700'}`}
  >
    {label}
    {isDropdown && <span className="text-[10px]">▼</span>}
  </Link>
);

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header className="w-full border-b border-gray-200 bg-white font-sans">
      <div className="flex justify-between items-center px-4 lg:px-20 py-2 border-b border-gray-50">
        <div className="flex items-center gap-6">
          <TopNavItem label="Անհատ" to="/" isActive={location.pathname === "/"} />
          <TopNavItem label="Բիզնես" to="/biznes" isActive={location.pathname === "/biznes"} />
          <TopNavItem label="Ակնթարթային վճարումներ" to="/speedpay" isActive={location.pathname === "/speedpay"} />
          <TopNavItem label="Մեր մասին" to="/about" isActive={location.pathname === "/about"} />
          <TopNavItem label="Նորություններ" to="/news" isActive={location.pathname === "/news"} />
          <TopNavItem label="Բլոգ" to="/blog" isActive={location.pathname === "/blog"} />
          <TopNavItem label="Կարիերա" to="/career" isActive={location.pathname === "/career"} />
        </div>
        
        <div className="flex items-center gap-6">
          <TopNavItem label="Առցանց հայտեր" to="/online-applications" isDropdown />
          <TopNavItem label="Հետադարձ կապ" to="/contact" isDropdown />
          <div className="flex items-center gap-4 ml-4 text-gray-600 text-lg">
            <span className="cursor-pointer hover:text-black">📍</span>
            <span className="cursor-pointer hover:text-black text-sm font-bold">?</span>
            <span className="cursor-pointer hover:text-black">🌐</span>
            <span className="cursor-pointer hover:text-black">🔍</span>
            <span className="cursor-pointer hover:text-black">☰</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 lg:px-20 py-4">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center cursor-pointer">
            <span className="text-3xl font-bold tracking-tighter text-gray-400">e</span>
            <span className="text-3xl font-bold tracking-tighter text-[#6c24b5]">voca</span>
          </Link>

          <nav className="hidden xl:flex items-center gap-6 text-[15px] font-medium text-gray-900">
            {["Վարկեր", "Քարտեր", "Ավանդներ", "Հաշիվներ", "Փոխանցումներ", "Արժեթղթեր", "EvocaSALARY", "EvocaTOUCH"].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`} 
                className="hover:text-[#6c24b5] transition-colors"
              >
                {item}
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