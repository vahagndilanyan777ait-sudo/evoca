import React from 'react';

const AccountContactBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg')`, // Սա Evoca-ի իրական ֆոնային նկարն է
        }}
      >
        {/* Մութ շերտ (Overlay) նկարի վրա տեքստը կարդալի դարձնելու համար */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-[1200px] mx-auto px-6 flex items-center justify-center">
        <div className="max-w-[700px] text-center">
          <h2 className="text-white text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-relaxed tracking-wide">
            Հաշիվներ բացելու նպատակով կարող եք դիմել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի»-ի)։
          </h2>
        </div>
      </div>

      {/* Social Icons (Կողքի փոքրիկ սոց․ նշանները, որոնք երևում են նկարում) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 bg-white/10 p-2 rounded-full backdrop-blur-sm">
        <div className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white cursor-pointer transition-colors text-[10px]">
          f
        </div>
        <div className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white cursor-pointer transition-colors text-[10px]">
          in
        </div>
        <div className="w-6 h-6 flex items-center justify-center text-white/70 hover:text-white cursor-pointer transition-colors text-[10px]">
          p
        </div>
      </div>
    </div>
  );
};

export default AccountContactBanner;