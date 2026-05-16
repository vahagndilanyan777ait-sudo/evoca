import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// 1. Տվյալների տիպի սահմանում
interface VideoCardProps {
  title: string;
  thumbnail: string;
  isMain?: boolean;
}

// 2. Վիդեո քարտի առանձին կոմպոնենտ
const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, isMain }) => (
  <div className={`bg-white rounded-2xl p-3 sm:p-4 shadow-2xl transition-all duration-500 w-full ${isMain ? 'scale-100 z-10 opacity-100' : 'scale-90 opacity-40'}`}>
    <div className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-900 aspect-video flex items-center justify-center">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
        <div className="w-12 h-12 border-2 border-cyan-400 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
          <Play className="text-cyan-400 fill-cyan-400 ml-0.5" size={20} />
        </div>
      </div>
    </div>
    <div className="mt-3 sm:mt-4 py-1 text-left">
      <h3 className={`font-extrabold text-[#1a1a1a] tracking-tight line-clamp-2 ${isMain ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'}`}>{title}</h3>
    </div>
  </div>
);

const CultureCarousel: React.FC = () => {
  // Վիդեոների տվյալների բազա
  const videos = [
    {
      title: "Evocabank neon art corporate party",
      thumbnail: "https://www.evoca.am/images-cache/culture_sliders/1/16196059430279/744x419.jpg"
    },
    {
      title: "Evoca New Year Corporate Party 2022",
      thumbnail: "https://www.evoca.am/images-cache/culture_sliders/1/16760069357338/744x419.jpg"
    },
    {
      title: "EVOCAISLAND Evoca Summer Party 2022",
      thumbnail: "https://www.evoca.am/images-cache/culture_sliders/1/16760071256254/744x419.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Սկզբնական կենտրոնական քարտը (ինդեքս 1)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  // Օժանդակ ֆունկցիա՝ հարաբերական դիրքերը (ձախ, կենտրոն, աջ) որոշելու համար
  const getCardIndex = (position: 'left' | 'main' | 'right') => {
    if (position === 'left') return (currentIndex === 0 ? videos.length - 1 : currentIndex - 1);
    if (position === 'right') return (currentIndex === videos.length - 1 ? 0 : currentIndex + 1);
    return currentIndex;
  };

  return (
    <div className="relative w-full min-h-screen bg-[#6c24b5] py-12 sm:py-16 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center overflow-hidden font-sans antialiased">
      
      {/* Լողացող դեկորատիվ պատկերներ (Միայն Desktop-ի համար) */}
      <div className="hidden md:block absolute top-10 left-10 text-pink-400/60 animate-pulse rotate-12 text-xl">▲</div>
      <div className="hidden md:block absolute bottom-20 right-20 text-yellow-400/60 animate-bounce text-xl">▼</div>
      <div className="hidden md:block absolute top-1/4 right-10 text-cyan-300/60 text-xl">●</div>
      <div className="hidden md:block absolute bottom-1/4 left-1/3 text-pink-500/40 text-xl">■</div>

      {/* Տեքստային հատված */}
      <div className="w-full max-w-6xl text-white mb-10 sm:mb-16 text-center md:text-left md:px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 tracking-tight">Մշակույթ</h2>
        <p className="text-xs sm:text-sm leading-relaxed opacity-90 max-w-2xl mx-auto md:mx-0 text-justify md:text-left">
          Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք, այլ նաև կյանքից վերցնում ենք ամեն ինչ։ 
          Անընդհատ սովորում ենք, մեր փորձը կիսում ենք գործընկերների հետ, սպորտով ենք զբաղվում և հանգստանում։ Միացեք մեզ։
        </p>
      </div>

      {/* Կարուսելի հատվածը */}
      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 px-2">
        
        {/* Քարտերի բլոկ */}
        <div className="flex items-center justify-center w-full gap-4 md:gap-6 lg:gap-8 overflow-hidden">
          
          {/* Ձախ քարտ (Ցուցադրվում է միայն մեծ էկրաններին) */}
          <div className="hidden lg:block w-1/4 min-w-[260px] max-w-[300px] pointer-events-none transform transition-all duration-500">
            <VideoCard 
              title={videos[getCardIndex('left')].title} 
              thumbnail={videos[getCardIndex('left')].thumbnail} 
            />
          </div>

          {/* Կենտրոնական քարտ (Միշտ ակտիվ և մեծ) */}
          <div className="w-full sm:w-[85%] md:w-[65%] lg:w-[50%] max-w-[620px] transform transition-all duration-500">
            <VideoCard 
              isMain 
              title={videos[getCardIndex('main')].title} 
              thumbnail={videos[getCardIndex('main')].thumbnail} 
            />
          </div>

          {/* Աջ քարտ (Ցուցադրվում է միայն մեծ էկրաններին) */}
          <div className="hidden lg:block w-1/4 min-w-[260px] max-w-[300px] pointer-events-none transform transition-all duration-500">
            <VideoCard 
              title={videos[getCardIndex('right')].title} 
              thumbnail={videos[getCardIndex('right')].thumbnail} 
            />
          </div>
        </div>

        {/* Նավիգացիոն Կոճակներ */}
        {/* Ձախ սլաք */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-0 lg:-left-12 top-[unset] bottom-[-60px] md:bottom-[unset] md:top-1/2 md:-translate-y-1/2 bg-white/10 hover:bg-white/20 text-white hover:text-cyan-400 p-2 sm:p-3 rounded-full transition-all z-20 shadow-lg backdrop-blur-sm"
        >
          <ChevronLeft size={28} className="md:w-10 md:h-10" strokeWidth={2} />
        </button>

        {/* Աջ սլաք */}
        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-0 lg:-right-12 top-[unset] bottom-[-60px] md:bottom-[unset] md:top-1/2 md:-translate-y-1/2 bg-white/10 hover:bg-white/20 text-white hover:text-cyan-400 p-2 sm:p-3 rounded-full transition-all z-20 shadow-lg backdrop-blur-sm"
        >
          <ChevronRight size={28} className="md:w-10 md:h-10" strokeWidth={2} />
        </button>
      </div>

      {/* Ներքևի դեկորատիվ կոճակ (Միայն մեծ էկրանների համար՝ էջի բալանսը պահելու համար) */}
      <div className="hidden md:block absolute bottom-8 right-8">
        <button className="bg-white/10 hover:bg-white/20 p-4 rounded-full backdrop-blur-md transition-all text-white/70 hover:text-white">
          <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
          </div>
        </button>
      </div>

    </div>
  );
};

export default CultureCarousel;