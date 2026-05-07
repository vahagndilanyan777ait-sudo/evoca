import React, { useState } from 'react';

// Նկարների և պատկերակների համար (փոխարինեք իրական հղումներով)
// Mock image URLs for demonstration. Replace with actual asset paths.
const LAPTOP_MOCKUP = "https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg";
const PHONE_MOCKUP = "https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg";
const EVOCA_LOGO_TEXT = "evoca"; // Simplification
const QR_CODE = "https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png";

// Testimonials դատա
const testimonials = [
  {
    text: "Բանկ, որ իր ռեբրենդինգի շքեղ միջոցառմամբ ու աշխատանքային ձևաչափով բանկային ոլորտում ամրապնդեց որակ և ճաշակ թելադրող։ Evocabank-ն առաջին իսկ վայրկյանից ստիպեց նորովի և ժամանակակից...",
    author: "Կամո Թովմասյան",
    title: "KAMOBLOG մեդիա-հարթակի հիմնադիր, influencer",
    rating: 5,
  },
  // Ավելացրեք ավելի շատ կարծիքներ սլայդերի համար
  {
    text: "Մեկ այլ հիանալի կարծիք բանկի մասին, որը ցույց է տալիս նրանց նորարարական մոտեցումը:",
    author: "Անուն Ազգանուն",
    title: "Պաշտոն, Ընկերություն",
    rating: 5,
  },
];

const EvocaLandingPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* 1. Purple Hero Section */}
      <section className="relative bg-[#6200EA] text-white p-8 md:p-16 overflow-hidden rounded-bl-[100px]">
        {/* Background Decorative Shapes (SVG inserts for accuracy) */}
        <div className="absolute top-10 left-10 text-pink-400 opacity-80 rotate-[-15deg]">
          <svg width="60" height="60" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="10" fill="none"/></svg>
        </div>
        <div className="absolute bottom-10 right-10 text-pink-400 opacity-80 rotate-[15deg]">
          <svg width="40" height="60" viewBox="0 0 100 150"><path d="M10 10 L90 10 L90 140 L10 140 Z" stroke="currentColor" strokeWidth="10" fill="none"/></svg>
        </div>
        {/* Tiny dots grid */}
        <div className="absolute bottom-10 left-1/4 grid grid-cols-5 gap-1 opacity-30">
            {[...Array(25)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>)}
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Side: Device Mockups */}
          <div className="relative flex justify-center items-center">
            {/* Laptop */}
            <div className="relative z-10 w-full max-w-lg">
              <img src={LAPTOP_MOCKUP} alt="Laptop Mockup" className="w-full rounded-lg shadow-2xl" />
              {/* Internal laptop content simulation */}
              <div className="absolute inset-0 p-[5%] flex flex-col justify-around text-black">
                {/* Simplified internal graphics to match style */}
                <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">🌿</div>
                    <div className="w-20 h-12 bg-purple-100 rounded-lg p-1 text-xs border border-purple-300">💳 Evoca Card</div>
                </div>
                <div className="flex justify-around items-end">
                    <div className="text-4xl font-bold text-purple-700">%</div>
                    <div className="w-20 h-24 bg-yellow-100 rounded-lg p-2 text-yellow-800 text-xs flex flex-col justify-end">💰 Coins</div>
                </div>
              </div>
            </div>
            
            {/* Phone */}
            <div className="absolute -bottom-10 -right-10 md:-right-16 z-20 w-32 md:w-40 bg-black p-2 rounded-2xl shadow-xl border-4 border-gray-800">
              <img src={PHONE_MOCKUP} alt="Phone Mockup" className="w-full rounded-xl" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                <span className="text-xl font-black text-white tracking-widest">{EVOCA_LOGO_TEXT}</span>
                {/* Simulating phone app dots */}
                <div className="flex gap-1 mt-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/50 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text & Actions */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Օնլայն և մոբայլ բանկինգ
            </h1>
            <p className="text-lg opacity-90 leading-relaxed max-w-xl">
              Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է, որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ։
            </p>
            <button className="bg-white text-[#6200EA] font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
              Դառնալ հաճախորդ
            </button>
            
            {/* QR & App Stores */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/20">
              <img src={QR_CODE} alt="QR Code" className="w-20 h-20 bg-white p-1 rounded-md" />
              <div className="space-y-3">
                <p className="text-sm opacity-80">Ներբեռնել հավելվածը՝</p>
                <div className="flex gap-3">
                  <a href="#" className="block w-36 bg-black p-2 rounded-lg border border-gray-700 hover:border-gray-500">
                    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="App Store" className="w-full"/>
                  </a>
                  <a href="#" className="block w-36 bg-black p-2 rounded-lg border border-gray-700 hover:border-gray-500">
                    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="w-full"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Testimonial Slider Section */}
      <section className="py-20 px-8 bg-white relative">
        {/* Floating Social Icons */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 space-y-4 text-gray-400">
            <a href="#" className="block hover:text-[#6200EA]">FB</a>
            <a href="#" className="block hover:text-[#6200EA]">IG</a>
            <a href="#" className="block hover:text-[#6200EA]">IN</a>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-20 bottom-10 text-purple-400 rotate-12">
            <svg width="40" height="20" viewBox="0 0 100 50"><path d="M0 25 C25 0, 75 50, 100 25" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
        </div>
        <div className="absolute right-20 bottom-20 text-pink-400 -rotate-12">
            <svg width="40" height="20" viewBox="0 0 100 50"><path d="M0 25 C25 0, 75 50, 100 25" stroke="currentColor" strokeWidth="8" fill="none"/></svg>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          
          {/* Hands & Quotes decoration */}
          <div className="absolute left-[-80px] top-10 text-gray-300 text-6xl">“</div>
          <div className="absolute right-[-80px] bottom-20 text-gray-300 text-6xl">”</div>
          <div className="absolute left-[-120px] top-1/3 text-gray-400 text-6xl opacity-60">👌</div>
          <div className="absolute right-[-120px] top-1/3 text-gray-400 text-6xl opacity-60 rotate-180">👍</div>

          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-3xl">★</span>
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 px-6">
            {testimonials[currentSlide].text}
          </p>

          {/* Author Info */}
          <div className="space-y-1">
            <p className="font-bold text-lg text-gray-900">{testimonials[currentSlide].author}</p>
            <p className="text-sm text-gray-500 uppercase tracking-wider">{testimonials[currentSlide].title}</p>
          </div>

          {/* Slider Pagination Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#6200EA] w-6' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EvocaLandingPage;