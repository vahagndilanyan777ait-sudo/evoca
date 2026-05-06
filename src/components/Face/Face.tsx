import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Այս տվյալները կօգտագործվեն դեմքերի փոփոխման համար:
// Իրական նախագծում օգտագործիր իրական նկարների URL-ներ:
const faceImages = [
  'https://www.evoca.am/img/temp/biometric/face3.png', // image_4.png-ի դեմքը
  'https://www.evoca.am/img/temp/biometric/face1.png',
  'https://www.evoca.am/img/temp/biometric/face2.png',
];

const FaceChangeHero: React.FC = () => {
  const [currentFaceIndex, setCurrentFaceIndex] = useState(0);

  // Ինտերվալ, որը փոխում է դեմքը ամեն 4 վայրկյանը մեկ
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFaceIndex((prevIndex) => (prevIndex + 1) % faceImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-20 px-6 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Անիմացիոն Ձախ Հատված (Դեմքի Տարածք) */}
        <div className="relative flex justify-center items-center">
          {/* Բիոմետրիկ Նախշը (Dots) */}
          <div className="absolute inset-0 z-0 flex justify-center items-center opacity-40">
            {/* Օգտագործում ենք SVG որպես ֆոնային նախշ */}
            <svg width="400" height="400" viewBox="0 0 400 400">
              <defs>
                <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                  <circle cx="2" cy="2" r="1.5" fill="#e5e7eb" />
                </pattern>
              </defs>
              <rect width="400" height="400" fill="url(#dotPattern)" />
            </svg>
          </div>

          {/* Մանուշակագույն Եռանկյունը */}
          <div className="relative w-full max-w-[400px] aspect-square flex justify-center items-center">
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#6c24b5]" fill="currentColor">
              <path d="M50 5 L95 90 L5 90 Z" />
            </svg>

            {/* Անիմացվող Դեմքի Նկարը */}
            <div className="relative w-[80%] h-[80%] rounded-full overflow-hidden z-10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFaceIndex} // Բանալին պետք է, որ Framer Motion-ը իմանա, որ սա նոր տարր է
                  src={faceImages[currentFaceIndex]}
                  alt="Biometric face"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Սպիտակ կետիկների շերտը դեմքի վրա (Բիոմետրիա) */}
              <div className="absolute inset-0 z-20 pointer-events-none grid grid-cols-6 grid-rows-6 opacity-80">
                {[...Array(36)].map((_, i) => (
                  <div key={i} className="flex justify-center items-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Աջ Հատված (Տեքստ և Գործողություններ) */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#333] leading-tight">
              Դարձի՛ր Evocabank-ի հաճախորդ բիոմետրիկ նույնականացմամբ
            </h1>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
              Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և ստացի՛ր քարտ
            </p>
          </div>

          <div className="flex items-center gap-8 pt-4">
            {/* QR Կոդի Հատված */}
            <div className="border-[12px] border-[#6c24b5] p-1 rounded-3xl w-40 h-40 flex justify-center items-center bg-white shadow-xl">
              <img 
                src="https://www.evoca.am/img/biometric-section-QR-Code.png" // Օգտագործիր իրական QR կոդի նկար
                alt="QR Code to Download App"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Գործողության Կոճակ */}
            <div className="relative pt-12">
                <button className="bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-10 py-3.5 rounded-full font-bold text-sm transition-all transform active:scale-95 shadow-lg">
                    Իմանալ ավելին
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaceChangeHero;