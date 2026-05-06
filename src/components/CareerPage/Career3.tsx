import React from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// 1. Տվյալների տիպի սահմանում
interface VideoCardProps {
  title: string;
  thumbnail: string;
  isMain?: boolean;
}

// 2. Վիդեո քարտի առանձին կոմպոնենտ
const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, isMain }) => (
  <div className={`bg-white rounded-lg p-3 shadow-2xl transition-all duration-500 ${isMain ? 'scale-100 z-10' : 'scale-90 opacity-60'}`}>
    <div className="relative group cursor-pointer overflow-hidden rounded-md">
      <img src={thumbnail} alt={title} className="w-full h-auto object-cover" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Play className="text-cyan-400 fill-cyan-400" size={24} />
        </div>
      </div>
    </div>
    <div className="mt-4 py-2">
      <h3 className={`font-bold text-[#1a1a1a] ${isMain ? 'text-lg' : 'text-sm'}`}>{title}</h3>
    </div>
  </div>
);

const CultureCarousel: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#6c24b5] py-16 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Լողացող դեկորատիվ պատկերներ (Floating Shapes) */}
      <div className="absolute top-10 left-10 text-pink-400 animate-pulse rotate-12">▲</div>
      <div className="absolute bottom-20 right-20 text-yellow-400 animate-bounce">▼</div>
      <div className="absolute top-1/4 right-10 text-cyan-300">●</div>
      <div className="absolute bottom-1/4 left-1/3 text-pink-500 opacity-50">■</div>

      {/* Տեքստային հատված */}
      <div className="max-w-4xl text-white mb-12 self-start md:ml-20">
        <h2 className="text-3xl font-black mb-4">Մշակույթ</h2>
        <p className="text-sm leading-relaxed opacity-90 max-w-2xl">
          Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ։ 
          Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում։ Միացեք մեզ։
        </p>
      </div>

      {/* Կարուսելի հատվածը */}
      <div className="relative w-full max-w-6xl flex items-center justify-center gap-4">
        
        {/* Ձախ սլաք */}
        <button className="absolute left-0 md:-left-10 text-white hover:text-cyan-400 transition-colors z-20">
          <ChevronLeft size={48} strokeWidth={1} />
        </button>

        {/* Քարտերը */}
        <div className="flex items-center gap-2 md:gap-8 overflow-hidden">
          {/* Ձախ քարտ (Փոքր) */}
          <div className="hidden lg:block w-72">
            <VideoCard 
              title="Evocabank neon art corporate party" 
              thumbnail="https://www.evoca.am/images-cache/culture_sliders/1/16196059430279/744x419.jpg" 
            />
          </div>

          {/* Կենտրոնական քարտ (Մեծ) */}
          <div className="w-full md:w-[600px]">
            <VideoCard 
              isMain 
              title="Evoca New Year Corporate Party 2022" 
              thumbnail="https://www.evoca.am/images-cache/culture_sliders/1/16760069357338/744x419.jpg" 
            />
          </div>

          {/* Աջ քարտ (Փոքր) */}
          <div className="hidden lg:block w-72">
            <VideoCard 
              title="EVOCAISLAND Evoca Summer Party 2022" 
              thumbnail="https://www.evoca.am/images-cache/culture_sliders/1/16760071256254/744x419.jpg" 
            />
          </div>
        </div>

        {/* Աջ սլաք */}
        <button className="absolute right-0 md:-right-10 text-white hover:text-cyan-400 transition-colors z-20">
          <ChevronRight size={48} strokeWidth={1} />
        </button>
      </div>

      {/* Ներքևի կոնտակտային կոճակ (աջ անկյունում) */}
      <div className="absolute bottom-8 right-8">
        <button className="bg-white/20 hover:bg-white/30 p-4 rounded-full backdrop-blur-md transition-all">
          <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CultureCarousel;