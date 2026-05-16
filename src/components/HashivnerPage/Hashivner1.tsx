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
      case "/accounts-max-balance": // Կարող ես փոխել քո նախընտրած path-ով
        return (
          <div className="animate-fadeIn p-4 md:p-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch bg-white rounded-tl-[80px] overflow-hidden shadow-sm">

              {/* Տեքստային հատված */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <h1 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 leading-tight">
                  Առարկայազուրկ <br /> մետաղական հաշիվներ
                </h1>

                <p className="text-gray-500 text-base md:text-lg leading-relaxed italic">
                  Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ,
                  որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար:
                  Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում
                  խնայողություններ կատարել անկանխիկ ոսկով, ինչպես նաև
                  ավելացնել դրանք՝ միջազգային շուկայում ոսկու գնի
                  բարձրացման շնորհիվ:
                </p>
              </div>

              {/* Նկարի հատված */}
              <div className="flex-1 min-h-[300px]">
                <img
                  src="https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png"
                  alt="Gold bars"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        );






      case "/non-resident-service":
        return (
          <div className="animate-fadeIn p-4 md:p-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch bg-white rounded-tl-[80px] overflow-hidden shadow-sm">

              {/* Տեքստային հատված */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#F9F9FB]">
                <h1 className="text-2xl md:text-4xl font-black text-[#2D2D2D] mb-6 leading-tight">
                  Ոչ ռեզիդենտ <br /> հաճախորդների հեռավար <br /> սպասարկում
                </h1>

                <p className="text-gray-500 text-base md:text-lg leading-relaxed italic">
                  Բանկ այցելելն այլևս պարտադիր չէ։ Անգամ եթե չեք
                  բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել
                  հաշիվներ օնլայն եղանակով աշխարհի ցանկացած կետից
                  և ցանկացած պահի։
                </p>
              </div>

              {/* Նկարի հատված */}
              <div className="flex-1 bg-black flex items-center justify-center min-h-[350px]">
                <img
                  src="https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png" // Այստեղ տեղադրիր սև ֆոնով Evoca նշանի նկարը
                  alt="Remote service"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        );
      case "/accounts":
        return (
          <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20 font-sans">
            <div className="flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden bg-gradient-to-br from-slate-50 to-purple-50/30 shadow-sm border border-purple-100/40">

              {/* Ձախ կողմի Տեքստային բլոկ */}
              <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white/80 backdrop-blur-sm rounded-r-3xl md:rounded-r-none z-10">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Հաշիվների բացում և սպասարկում

                </h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-light">
                  Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձիք:
                </p>
              </div>

              {/* Աջ կողմի Նկարի բլոկ */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[450px]">
                <img
                  src={'https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg'}
                  alt="Bank branch interior"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {/* Թեթև էֆեկտ նկարի վրա, որպեսզի դիզայնն ավելի փափուկ լինի */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent mix-blend-overlay" />
              </div>

            </div>
          </section>);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Մանուշակագույն Ենթամենյու */}
      <div className="bg-[#6c24b5] w-full py-3 px-4 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-6 text-white text-[13px] font-medium">
          {subNavItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`pb-1 transition-all border-b-2 hover:opacity-100 ${location.pathname === item.path
                  ? "border-white opacity-100"
                  : "border-transparent opacity-70"
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Breadcrumbs & Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-8">
          <Link to="/" className="hover:text-gray-600">🏠</Link>
          <span>›</span>
          <span>Անհատ</span>
          <span>›</span>
          <span className="cursor-pointer hover:text-gray-600">Հաշիվներ</span>
          <span>›</span>
          <span className="text-[#6c24b5]">
            {subNavItems.find(i => i.path === location.pathname)?.label || "Հաշիվների բացում"}
          </span>
        </nav>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default AccountsPage;