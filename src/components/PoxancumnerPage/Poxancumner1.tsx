import React from 'react';

const MoneyTransfersBanner: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Մանուշակագույն Ենթամենյու */}
      <div className="bg-[#6c24b5] w-full py-3 px-4">
        <div className="max-w-[1200px] mx-auto flex gap-8 text-white text-[13px] font-medium">
          <span className="border-b-2 border-white pb-1 cursor-pointer">Դրամական փոխանցումներ</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Վճարային համակարգեր</span>
        </div>
      </div>

      {/* Breadcrumbs & Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-8">
          <span className="hover:text-gray-600 cursor-pointer">🏠</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Փոխանցումներ</span>
          <span>›</span>
          <span className="text-[#6c24b5]">Դրամական փոխանցումներ</span>
        </nav>

        {/* Banner Section */}
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#f8f5fb] rounded-[40px] overflow-hidden min-h-[450px]">
          {/* Տեքստային հատված */}
          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
            <h1 className="text-[36px] lg:text-[44px] font-black text-gray-900 leading-tight mb-8">
              Դրամական <br /> փոխանցումներ
            </h1>
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[480px]">
              Իրականացնում ենք դրամական փոխանցումներ Հայաստանի տարածքում և դեպի արտերկիր՝ դրամով և արտարժույթով։ Փոխանցումներն իրականացվում են միջազգային բանկային ստանդարտներին համապատասխանող հանձնարարականներով։
            </p>
          </div>

          {/* Նկարի հատված */}
          <div className="flex-1 relative min-h-[350px]">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16115828343472/780x585.jpg" 
              alt="Evoca Bank Branch Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Սոցիալական կոճակներ (Կողքի ուղղահայաց մենյուն, որը երևում է նկարում) */}
        <div className="fixed left-4 top-1/3 hidden xl:flex flex-col gap-4 py-4 px-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-gray-100">
          <div className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#6c24b5] cursor-pointer text-xs transition-colors">f</div>
          <div className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#6c24b5] cursor-pointer text-xs transition-colors">in</div>
          <div className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#6c24b5] cursor-pointer text-xs transition-colors">p</div>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransfersBanner;