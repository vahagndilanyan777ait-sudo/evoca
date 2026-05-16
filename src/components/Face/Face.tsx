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
    <section className="bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-24 overflow-hidden font-sans antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Անիմացիոն Ձախ Հատված (Մոբայլում գալիս է առաջինը) */}
        <div className="relative flex justify-center items-center order-1 md:order-none w-full max-w-[320px] sm:max-w-[420px] mx-auto aspect-square">
          
          {/* Բիոմետրիկ Նախշը (Dots Background) */}
          <div className="absolute inset-0 z-0 flex justify-center items-center opacity-30 select-none pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 400 400">
              <defs>
                <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="24" height="24">
                  <circle cx="3" cy="3" r="1.5" fill="#6c24b5" className="opacity-40" />
                </pattern>
              </defs>
                <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>

          {/* Մանուշակագույն Եռանկյուն և Անիմացվող Դեմք */}
          <div className="relative w-full h-full flex justify-center items-center">
            {/* Հիմնական SVG Եռանկյունը որպես ֆոն */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#6c24b5]" fill="currentColor">
              <path d="M50 8 L93 88 L7 88 Z" />
            </svg>

            {/* Դեմքի կոնտեյներ՝ կտրված Եռանկյան ձևով (Clip-Path) */}
            <div 
              className="absolute inset-0 z-10 overflow-hidden select-none"
              style={{ clipPath: 'polygon(50% 12%, 90% 85%, 10% 85%)' }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFaceIndex}
                  src={faceImages[currentFaceIndex]}
                  alt="Biometric face"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Սպիտակ բիոմետրիկ կետիկների շերտը դեմքի վրա */}
              <div className="absolute inset-0 z-20 pointer-events-none grid grid-cols-8 grid-rows-8 opacity-60 p-12">
                {[...Array(64)].map((_, i) => (
                  <div key={i} className="flex justify-center items-center">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full shadow-sm animate-pulse" style={{ animationDelay: `${i * 50}ms` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Աջ Հատված (Տեքստ և Գործողություններ) */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight">
              Դարձի՛ր Evocabank-ի հաճախորդ <span className="text-[#6c24b5]">բիոմետրիկ</span> նույնականացմամբ
            </h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-justify md:text-left">
              Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացի՛ր քարտ առանց բանկ այցելելու:
            </p>
          </div>

          {/* QR Կոդ և Կոճակ (Responsive Layout) */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 sm:gap-8 pt-2">
            
            {/* QR Կոդի Բլոկ */}
            <div className="border-[8px] sm:border-[12px] border-[#6c24b5] p-1.5 rounded-3xl w-36 h-36 sm:w-40 sm:h-40 flex justify-center items-center bg-white shadow-xl shrink-0 transition-transform hover:scale-102">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png"
                alt="QR Code to Download App"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Գործողության Կոճակ */}
            <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
              <button className="w-full sm:w-auto bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-98 tracking-wide">
                Իմանալ ավելին
              </button>
              <span className="text-[11px] text-gray-400 mt-2 font-medium tracking-wide uppercase hidden sm:block">
                ← Սկանավորիր հավելվածի համար
              </span>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default FaceChangeHero;