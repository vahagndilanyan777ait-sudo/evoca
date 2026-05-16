import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AccountsPage: React.FC = () => {
  const location = useLocation();

  // Ենթամենյուի էլեմենտների սահմանում
  const subNavItems = [
    { label: "Հաշիվների բացում և սպասարկում", path: "/accounts" },
    { label: "Առավելագույն մնացորդի հաշիվներ", path: "/accounts-max-balance" },
    { label: "Ոչ ռեզիդենտ հաճախորդների հեռահար սպասարկում", path: "/non-resident-service" },
  ];

  // Ֆունկցիա, որը որոշում է թե որ բովանդակությունը ցույց տալ ըստ URL-ի
  const renderContent = () => {
    switch (location.pathname) {
      case "/accounts-max-balance":
        return (
          <div className="animate-fadeIn w-full">
            <div className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl md:rounded-none md:rounded-tl-[80px] overflow-hidden shadow-md md:shadow-sm border border-gray-100">
              {/* Տեքստային հատված */}
              <div className="flex-1 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-6 leading-tight">
                  Առարկայազուրկ <br className="hidden md:block" /> մետաղական հաշիվներ
                </h1>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed italic text-justify md:text-left">
                  Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ,
                  որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար:
                  Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում
                  խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև
                  ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի
                  բարձրացման շնորհիվ:
                </p>
              </div>
              {/* Նկարի հատված */}
              <div className="flex-1 min-h-[260px] sm:min-h-[320px] md:min-h-[450px]">
                <img
                  src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png"
                  alt="Gold bars"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        );

      case "/non-resident-service":
        return (
          <div className="animate-fadeIn w-full">
            <div className="flex flex-col md:flex-row items-stretch bg-white rounded-2xl md:rounded-none md:rounded-tl-[80px] overflow-hidden shadow-md md:shadow-sm border border-gray-100">
              {/* Տեքստային հատված */}
              <div className="flex-1 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center bg-[#F9F9FB] text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#2D2D2D] mb-6 leading-tight">
                  Ոչ ռեզիդենտ <br className="hidden md:block" /> հաճախորդների հեռավար <br className="hidden md:block" /> սպասարկում
                </h1>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed italic text-justify md:text-left">
                  Բանկ այցելելն այլևս պարտադիր չէ։ Անգամ եթե չեք
                  բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել
                  հաշիվներ օնլայն եղանակով աշխարհի ցանկացած կետից
                  և ցանկացած պահի։
                </p>
              </div>
              {/* Նկարի հատված */}
              <div className="flex-1 bg-black flex items-center justify-center min-h-[260px] sm:min-h-[320px] md:min-h-[450px]">
                <img
                  src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png"
                  alt="Remote service"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        );

      case "/accounts":
      default: // Ապահովում է, որ / հասցեով կամ սխալ path-ով մտնելիս էջը դատարկ չմնա
        return (
          <div className="animate-fadeIn w-full">
            <div className="flex flex-col md:flex-row items-stretch rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-purple-50/30 shadow-md md:shadow-sm border border-purple-100/40">
              {/* Ձախ կողմի Տեքստային բլոկ */}
              <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 flex flex-col justify-center bg-white/80 backdrop-blur-sm text-center md:text-left z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-800 mb-6 leading-tight">
                  Հաշիվների բացում <br className="hidden md:block" /> և սպասարկում
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-light text-justify md:text-left">
                  Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձիք:
                </p>
              </div>
              {/* Աջ կողմի Նկարի բլոկ */}
              <div className="w-full md:w-1/2 relative min-h-[260px] sm:min-h-[320px] md:min-h-[450px]">
                <img
                  src='https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg'
                  alt="Bank branch interior"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent mix-blend-overlay" />
              </div>
            </div>
          </div>
        );
    }
  };

  // Ընթացիկ էջի վերնագիրը breadcrumbs-ի համար
  const currentActiveLabel = subNavItems.find(i => i.path === location.pathname)?.label || "Հաշիվների բացում և սպասարկում";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased">
      
      {/* Մանուշակագույն Ենթամենյու */}
      <div className="bg-[#6c24b5] w-full py-1.5 px-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex flex-nowrap overflow-x-auto gap-6 text-white text-[13px] font-semibold whitespace-nowrap scrollbar-none py-2">
          {subNavItems.map((item) => {
            const isSelfActive = location.pathname === item.path || (item.path === '/accounts' && location.pathname === '/');
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`pb-1 transition-all border-b-2 hover:opacity-100 ${
                  isSelfActive ? "border-white opacity-100" : "border-transparent opacity-70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Հիմնական Բովանդակություն */}
      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center flex-wrap gap-2 text-[11px] sm:text-[12px] text-gray-400 mb-6 sm:mb-8 font-medium">
          <Link to="/" className="hover:text-gray-600 transition-colors">🏠</Link>
          <span className="select-none">›</span>
          <span className="text-gray-500">Անհատ</span>
          <span className="select-none">›</span>
          <Link to="/accounts" className="hover:text-gray-600 transition-colors">Հաշիվներ</Link>
          <span className="select-none">›</span>
          <span className="text-[#6c24b5] font-semibold truncate max-w-[200px] sm:max-w-none">
            {currentActiveLabel}
          </span>
        </nav>

        {/* Dynamic Content Component */}
        <main className="w-full">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AccountsPage;