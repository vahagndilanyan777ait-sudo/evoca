import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

// Swiper-ի ստանդարտ սթայլերը
import 'swiper/css';
import 'swiper/css/navigation';

const partners = [
  { id: 1, name: 'Dignisi', logo: 'https://www.evoca.am/images-cache/partners/1/17072192942611/185x80_grayscale.png' },
  { id: 2, name: 'Wizzy', logo: 'https://www.evoca.am/images-cache/partners/1/17072192635138/185x80_grayscale.png' },
  { id: 3, name: 'Kamo Blog', logo: 'https://www.evoca.am/images-cache/partners/1/17072192435541/185x80_grayscale.png' },
  { id: 4, name: 'Dalma', logo: 'https://www.evoca.am/images-cache/partners/1/16104577054001/185x80_grayscale.png' },
  { id: 5, name: 'Nor tun', logo: 'https://www.evoca.am/images-cache/partners/1/16104583322099/185x80_grayscale.png' },
];

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();
  // Սլայդերը կառավարելու համար Ref
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20 bg-white overflow-hidden antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Ձախ հատված՝ Տեքստ */}
        <div className="lg:col-span-4 z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-4 sm:mb-6 tracking-tight">
            {t('partnersSection.title')}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md lg:max-w-sm text-justify lg:text-left">
            {t('partnersSection.description')}
          </p>
          <a href='/about' className="inline-flex items-center gap-2 bg-[#f3e8ff] text-[#6c24b5] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e9d5ff] transition-colors shadow-sm">
            {t('partnersSection.allPartnersBtn')}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Աջ հատված՝ Սլայդեր և Ձեռքի պատկեր */}
        <div className="lg:col-span-8 relative flex flex-col md:flex-row items-center w-full mt-4 lg:mt-0">
          
          {/* Դեղին կետիկավոր շրջանակ */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] border-[2px] border-dotted border-yellow-400 rounded-full opacity-30 -translate-x-1/4 pointer-events-none" />

          {/* Ձեռքի պատկեր */}
          <div className="relative z-20 hidden md:block shrink-0 select-none">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsU85AuICo56Iv2ZpVOF4wTKSa8O3_GiQ0H-c9_s486og4mABz" 
              alt="Evoca Partners" 
              className="w-48 lg:w-64 h-auto object-contain drop-shadow-xl translate-x-4"
            />
          </div>

          {/* Swiper Slider բլոկ */}
          <div className="w-full bg-gray-50/60 backdrop-blur-sm rounded-2xl md:rounded-r-3xl md:rounded-l-none py-8 md:py-12 px-8 sm:px-12 flex items-center relative z-10 md:-ml-12 md:pl-20 border border-gray-100 overflow-hidden">
            
            {/* Ձախ սլաք */}
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-2 sm:left-4 md:left-14 z-30 text-[#6c24b5] hover:scale-110 transition-transform bg-white/80 p-1 rounded-full shadow-sm md:shadow-none"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Սլայդեր */}
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView={4}
              spaceBetween={0}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 1 },
                550: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
              }}
              className="w-full"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id} className="flex items-center">
                  <div className="flex items-center w-full justify-center">
                    {/* Լոգո */}
                    <div className="flex-1 flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer p-4 h-20">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-10 sm:max-h-12 w-auto object-contain" 
                      />
                    </div>
                    {/* Բաժանարար գիծ */}
                    <div className="hidden sm:block h-12 w-[1px] bg-gray-200/80 shrink-0" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Աջ սլաք */}
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-2 sm:right-4 md:right-4 z-30 text-[#6c24b5] hover:scale-110 transition-transform bg-white/80 p-1 rounded-full shadow-sm md:shadow-none"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;