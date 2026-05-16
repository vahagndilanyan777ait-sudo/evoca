import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

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
  // Սլայդերը կառավարելու համար Ref
  const swiperRef = useRef<any>(null);

  return (
    <section className="relative w-full py-20 px-6 lg:px-20 bg-white overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Ձախ հատված՝ Տեքստ */}
        <div className="lg:col-span-4 z-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Գործընկերներ</h2>
          <p className="text-gray-600 leading-relaxed mb-10 max-w-sm">
            Դարձե՛ք Evocabank-ի Գործընկեր և եկե՛ք միասին գնանք դեպի գունեղ նոր իրականություն: 
            Դառնալով Evoca ընտանիքի անդամ՝ Դուք մուտք կգործեք ժամանակակից և յուրահատուկ աշխարհ: 
            Մենք մշտապես բաց ենք հետաքրքիր առաջարկների ու համագործակցությունների համար:
          </p>
          <a href='/about' className="flex items-center gap-2 bg-[#f3e8ff] text-[#6c24b5] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e9d5ff] transition-colors">
            Բոլոր գործընկերները
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Աջ հատված՝ Սլայդեր և Ձեռքի պատկեր */}
        <div className="lg:col-span-8 relative flex items-center">
          
          {/* Դեղին կետիկավոր շրջանակ */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border-[2px] border-dotted border-yellow-400 rounded-full opacity-40 -translate-x-1/4" />

          {/* Ձեռքի պատկեր */}
          <div className="relative z-20 hidden md:block">
            <img 
              src="data:image/jpeg;base64,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" 
              className="w-64 lg:w-80 object-contain drop-shadow-xl"
            />
          </div>

          {/* Swiper Slider բլոկ */}
          <div className="flex-1 bg-gray-50/50 backdrop-blur-sm rounded-r-3xl py-12 px-10 flex items-center relative z-10 -ml-20 pl-28 border-l border-gray-100 overflow-hidden">
            
            {/* Ձախ սլաք */}
            <button 
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute left-24 z-30 text-[#6c24b5] hover:scale-110 transition-transform"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 }
              }}
              className="w-full"
            >
              {partners.map((partner) => (
                <SwiperSlide key={partner.id} className="flex items-center">
                  <div className="flex items-center w-full">
                    {/* Լոգո */}
                    <div className="flex-1 flex justify-center items-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer p-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-12 w-auto object-contain" 
                      />
                    </div>
                    {/* Բաժանարար գիծ */}
                    <div className="h-16 w-[1px] bg-gray-200" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Աջ սլաք */}
            <button 
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute right-4 z-30 text-[#6c24b5] hover:scale-110 transition-transform"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;