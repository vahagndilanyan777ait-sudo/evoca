import React, { useState } from 'react';

// Mock image URLs for demonstration. Replace with actual asset paths.
const LAPTOP_MOCKUP = "https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg";
const PHONE_MOCKUP = "https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg";
const EVOCA_LOGO_TEXT = "evoca";
const QR_CODE = "https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png";

const testimonials = [
  {
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրող։ Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից...",
    author: "Կամո Թովմասյան",
    title: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer",
    rating: 5,
  },
  {
    text: "Մեկ այլ հիանալի կարծիք բանկի մասին, որը ցույց է տալիս նրանց նորարարական և հաճախորդամետ մոտեցումը թվային աշխարհում:",
    author: "Անուն Ազգանուն",
    title: "Պաշտոն, Ընկերություն",
    rating: 5,
  },
];

const EvocaLandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      
      {/* 1. Purple Hero Section */}
      <section className="relative bg-[#6c24b5] text-white p-6 sm:p-10 md:p-16 overflow-hidden rounded-bl-[50px] md:rounded-bl-[100px]">
        
        {/* Background Decorative Shapes */}
        <div className="absolute top-6 left-6 text-purple-400 opacity-40 rotate-[-15deg] pointer-events-none">
          <svg width="50" height="50" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="10" fill="none"/></svg>
        </div>
        <div className="absolute bottom-10 right-10 text-pink-400 opacity-30 rotate-[15deg] pointer-events-none hidden sm:block">
          <svg width="40" height="60" viewBox="0 0 100 150"><path d="M10 10 L90 10 L90 140 L10 140 Z" stroke="currentColor" strokeWidth="10" fill="none"/></svg>
        </div>
        {/* Tiny dots grid */}
        <div className="absolute bottom-6 left-10 grid grid-cols-5 gap-1 opacity-20 pointer-events-none">
          {[...Array(15)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full"></div>)}
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* Left Side: Device Mockups */}
          <div className="relative flex justify-center items-center w-full mt-4 lg:mt-0 px-4 sm:px-0">
            {/* Laptop */}
            <div className="relative z-10 w-full max-w-[440px] sm:max-w-lg">
              <img src={LAPTOP_MOCKUP} alt="Laptop Mockup" className="w-full h-auto rounded-xl shadow-2xl" />
              
              {/* Internal laptop content simulation */}
              <div className="absolute inset-0 p-[5%] flex flex-col justify-around text-black pointer-events-none opacity-0 sm:opacity-100">
                <div className="flex justify-between items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-sm">🌿</div>
                  <div className="w-16 h-8 bg-purple-100 rounded-md p-1 text-[9px] border border-purple-300">💳 Evoca</div>
                </div>
                <div className="flex justify-around items-end">
                  <div className="text-2xl font-bold text-purple-700">%</div>
                  <div className="w-16 h-16 bg-yellow-100 rounded-md p-1 text-yellow-800 text-[9px] flex flex-col justify-end">💰 Coins</div>
                </div>
              </div>
            </div>
            
            {/* Phone (Responsive positioning) */}
            <div className="absolute -bottom-6 right-2 sm:right-4 md:-right-10 z-20 w-24 sm:w-32 md:w-36 bg-black p-1.5 rounded-2xl shadow-xl border-2 sm:border-4 border-gray-800 transform rotate-[2deg]">
              <img src={PHONE_MOCKUP} alt="Phone Mockup" className="w-full rounded-lg sm:rounded-xl" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-1 text-center pointer-events-none">
                <span className="text-sm sm:text-base font-black text-white tracking-widest uppercase">{EVOCA_LOGO_TEXT}</span>
                <div className="flex gap-1 mt-1">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text & Actions */}
          <div className="space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight max-w-xl">
              Օնլայն և մոբայլ բանկինգ
            </h1>
            <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed max-w-xl">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
            </p>
            <div>
              <button className="bg-white text-[#6c24b5] font-bold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition-all active:scale-95 duration-300">
                Դառնալ հաճախորդ
              </button>
            </div>
            
            {/* QR & App Stores */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6 border-t border-white/20 w-full justify-center lg:justify-start">
              {/* Hide QR on mobile, as users can't scan their own screen easily */}
              <img src={QR_CODE} alt="QR Code" className="w-20 h-20 bg-white p-1 rounded-xl hidden sm:block shadow-inner flex-shrink-0" />
              <div className="space-y-2 text-center sm:text-left w-full sm:w-auto">
                <p className="text-xs sm:text-sm opacity-80 font-medium">Ներբեռնել հավելվածը՝</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#" className="block w-full sm:w-32 bg-black p-2 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="App Store" className="w-full h-auto mx-auto"/>
                  </a>
                  <a href="#" className="block w-full sm:w-32 bg-black p-2 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="w-full h-auto mx-auto"/>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Testimonial Slider Section */}
      <section className="py-16 md:py-24 px-4 sm:px-8 bg-white relative">
        
        {/* Floating Social Icons - Hidden on smaller screens */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 space-y-4 text-gray-400 font-bold text-xs tracking-widest hidden xl:block select-none">
          <a href="#" className="block hover:text-[#6c24b5] transition-colors rotate-90 mb-6">FACEBOOK</a>
          <a href="#" className="block hover:text-[#6c24b5] transition-colors rotate-90 mb-6">INSTAGRAM</a>
          <a href="#" className="block hover:text-[#6c24b5] transition-colors rotate-90">LINKEDIN</a>
        </div>

        {/* Decorative background waves */}
        <div className="absolute left-10 bottom-10 text-purple-300 opacity-40 rotate-12 pointer-events-none hidden md:block">
          <svg width="40" height="20" viewBox="0 0 100 50"><path d="M0 25 C25 0, 75 50, 100 25" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
        </div>
        <div className="absolute right-10 top-10 text-pink-300 opacity-40 -rotate-12 pointer-events-none hidden md:block">
          <svg width="40" height="20" viewBox="0 0 100 50"><path d="M0 25 C25 0, 75 50, 100 25" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
        </div>

        <div className="max-w-3xl mx-auto text-center relative px-2 sm:px-6">
          
          {/* Big Quotes Visuals - Hidden on Mobile */}
          <div className="absolute left-[-40px] lg:left-[-70px] top-6 text-gray-200 text-7xl font-serif hidden sm:block select-none">“</div>
          <div className="absolute right-[-40px] lg:right-[-70px] bottom-16 text-gray-200 text-7xl font-serif hidden sm:block select-none">”</div>
          
          {/* Decorative Emojis - Hidden on smaller views */}
          <div className="absolute left-[-100px] top-1/3 text-4xl opacity-40 hidden xl:block select-none">👌</div>
          <div className="absolute right-[-100px] top-1/3 text-4xl opacity-40 hidden xl:block select-none">👍</div>

          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl sm:text-3xl select-none">★</span>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed mb-8 px-2">
            "{testimonials[currentSlide].text}"
          </p>

          {/* Author Info */}
          <div className="space-y-1">
            <p className="font-bold text-base sm:text-lg text-gray-900">{testimonials[currentSlide].author}</p>
            <p className="text-xs text-[#6c24b5] font-bold uppercase tracking-widest">{testimonials[currentSlide].title}</p>
          </div>

          {/* Slider Pagination Dots */}
          <div className="flex justify-center gap-2.5 mt-10">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === index ? 'bg-[#6c24b5] w-6' : 'bg-gray-300 w-2.5'}`}
                aria-label={`Go to slide {index + 1}`}
              />
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default EvocaLandingPage;