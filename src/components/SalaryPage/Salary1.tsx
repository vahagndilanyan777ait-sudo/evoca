import React from 'react';

const EvocaSalaryBanner: React.FC = () => {
  return (
    <div className="min-h-[600px] bg-white font-sans overflow-hidden">
      {/* Breadcrumbs */}
      <div className="max-w-[1200px] mx-auto px-6 py-4">
        <nav className="flex items-center gap-2 text-[12px] text-gray-400">
          <span className="hover:text-gray-600 cursor-pointer">🏠</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="text-[#6c24b5] font-medium">EvocaSALARY</span>
        </nav>
      </div>

      {/* Main Banner Container */}
      <div className="max-w-[1200px] mx-auto px-4 mt-8">
        <div className="relative flex flex-col lg:flex-row items-stretch">
          
          {/* Տեքստային հատված (Ձախ կողմ) */}
          <div className="flex-1 bg-[#f3f4f8] rounded-l-[40px] rounded-br-[150px] p-10 lg:p-20 z-10 flex flex-col justify-center">
            <h2 className="text-[#333] text-[24px] font-bold mb-2 tracking-tight">
              EVOCA
            </h2>
            <h1 className="text-[#333] text-[36px] lg:text-[44px] font-black leading-tight mb-8">
              ԱՇԽԱՏԱՎԱՐՁԱՅԻՆ <br /> ՆԱԽԱԳԻԾ
            </h1>
            
            <div className="space-y-2 text-[15px] text-gray-600 font-medium">
              <p>Քո աշխատավարձը կարող է քեզ տալ շատ ավելին:</p>
              <p>Պարզապես պետք է ընտրել Evocabank-ը:</p>
            </div>
          </div>

          {/* Նկարի հատված (Աջ կողմ) */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-[500px]">
            {/* Մանուշակագույն ֆոն */}
            <div className="absolute inset-0 bg-[#6c24b5] rounded-[40px] lg:rounded-none lg:rounded-r-[40px]">
              {/* 3D Wallet Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <img 
                  src="https://www.evoca.am/images-cache/menu/1/17738355890361/780x585.png" // Evoca-ի իրական 3D նկարի հղումը
                  alt="Evoca Salary Wallet"
                  className="w-full h-full object-contain transform scale-110"
                />
              </div>
            </div>
          </div>

          {/* Սոցիալական կոճակներ (Ձախակողմյան փոքր մենյուն) */}
          <div className="absolute left-[-40px] top-1/4 hidden xl:flex flex-col gap-4 py-4 px-2 bg-white/50 backdrop-blur-sm rounded-full shadow-sm border border-gray-100">
            <div className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#6c24b5] cursor-pointer text-[10px] font-bold">f</div>
            <div className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#6c24b5] cursor-pointer text-[10px] font-bold">in</div>
            <div className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#6c24b5] cursor-pointer text-[10px] font-bold">p</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvocaSalaryBanner;