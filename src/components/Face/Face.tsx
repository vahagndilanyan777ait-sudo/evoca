import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faceImages = [
  'https://www.evoca.am/img/temp/biometric/face3.png',
  'https://www.evoca.am/img/temp/biometric/face1.png',
  'https://www.evoca.am/img/temp/biometric/face2.png',
];

const FaceChangeHero: React.FC = () => {
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFaceIndex((prevIndex) => (prevIndex + 1) % faceImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 lg:px-20 overflow-hidden font-sans antialiased select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-6 lg:gap-12 items-center">
        
        {/* Ձախ Հատված՝ Բիոմետրիկ Դեմքի Անիմացիոն Բլոկ (md:col-span-5) */}
        <div className="relative flex justify-center items-center md:col-span-5 w-full max-w-[320px] sm:max-w-[380px] md:max-w-full aspect-square mx-auto">
          
          {/* Ֆոնային Կլորացող Կետեր (Concentric Radar Dots) */}
          <div className="absolute inset-0 z-0 flex justify-center items-center opacity-30 pointer-events-none scale-110">
            <svg width="100%" height="100%" viewBox="0 0 400 400" className="text-[#6c24b5]">
              <defs>
                <pattern id="radarDots" patternUnits="userSpaceOnUse" width="30" height="30">
                  <circle cx="3" cy="3" r="1.2" fill="currentColor" className="opacity-40" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#radarDots)" />
            </svg>
          </div>

          {/* Հիմնական Անիմացիոն Կոնտեյներ */}
          <div className="relative w-full h-full flex justify-center items-center">
            
            {/* Մանուշակագույն Շրջված Եռանկյունի (Ֆոն) */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#6c24b5]" fill="currentColor">
              <path d="M 8,16 C 6,11 10,7 16,7 L 84,7 C 90,7 94,11 92,16 L 54,86 C 52,90 48,90 46,86 Z" />
            </svg>

            {/* Դեմքի Կտրվածքը (Clip-Path)՝ կատարյալ համապատասխանեցված ֆոնին */}
            <div 
              className="absolute inset-0 z-10 overflow-hidden m-[2px]"
              style={{ 
                clipPath: 'polygon(12% 10%, 88% 10%, 50% 84%)',
                WebkitClipPath: 'polygon(12% 10%, 88% 10%, 50% 84%)'
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFaceIndex}
                  src={faceImages[currentFaceIndex]}
                  alt="Evocabank Biometric Face"
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.65, ease: 'easeInOut' }}
                  className="w-full h-full object-cover scale-[1.22] origin-center -translate-y-[2%]"
                />
              </AnimatePresence>

              {/* Դեմքի Վեկտորային Ցանց (Face Mesh Geometry) */}
              <div className="absolute inset-0 z-20 pointer-events-none opacity-70">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white/60" fill="none" stroke="currentColor" strokeWidth="0.3">
                  <path d="M50,22 L41,35 L50,48 L59,35 Z M41,35 L28,42 L38,55 L50,48 L62,55 L72,42 L59,35 M38,55 L50,72 L62,55" strokeDasharray="0.8 0.8" />
                  
                  {/* Բիոմետրիկ Կետեր */}
                  <circle cx="50" cy="22" r="1" fill="white" className="animate-ping" style={{ animationDuration: '1.8s' }} />
                  <circle cx="41" cy="35" r="0.8" fill="white" />
                  <circle cx="59" cy="35" r="0.8" fill="white" />
                  <circle cx="50" cy="48" r="1" fill="white" />
                  <circle cx="28" cy="42" r="0.8" fill="white" />
                  <circle cx="72" cy="42" r="0.8" fill="white" />
                  <circle cx="38" cy="55" r="0.8" fill="white" />
                  <circle cx="62" cy="55" r="0.8" fill="white" />
                  <circle cx="50" cy="72" r="1" fill="white" className="animate-pulse" />
                </svg>
              </div>

              {/* Լազերային Սկանավորման Հորիզոնական Գիծ */}
              <motion.div 
                className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent z-30 shadow-[0_0_6px_#fff]"
                initial={{ top: '10%' }}
                animate={{ top: '80%' }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 2.2,
                  ease: 'easeInOut'
                }}
              />
            </div>

          </div>
        </div>

        {/* Աջ Հատված՝ Տեքստ, QR կոդ և Գործողություն (md:col-span-7) */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-6 md:space-y-8 md:col-span-7 lg:pl-6">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 leading-[1.2] tracking-tight">
              Դարձի՛ր <span className="font-extrabold">Evocabank</span>-ի հաճախորդ <span className="text-[#6c24b5]">բիոմետրիկ</span> նույնականացմամբ
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
              Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացի՛ր քարտ առանց բանկ այցելելու:
            </p>
          </div>

          {/* QR Կոդի և Կոճակի Բլոկ */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 sm:gap-8 pt-2">
            
            {/* Շրջանակված QR Կոդ */}
            <div className="shrink-0 border-[8px] sm:border-[10px] border-[#6c24b5] p-1.5 rounded-[2rem] w-36 h-36 sm:w-40 sm:h-40 flex justify-center items-center bg-white shadow-md transition-transform hover:scale-[1.01] duration-300">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png"
                alt="Scan to Download EvocaTOUCH"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Գործողության կոճակ և ուղեցույց */}
            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start space-y-2">
              <button className="w-full sm:w-auto bg-[#6c24b5] hover:bg-[#581c94] text-white px-10 py-3.5 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md active:scale-98 tracking-wide">
                Իմանալ ավելին
              </button>
              <span className="text-[11px] text-gray-400 font-semibold tracking-wider uppercase hidden sm:inline-flex items-center gap-1.5">
                <span className="animate-pulse">←</span> Սկանավորիր հավելվածի համար
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FaceChangeHero;