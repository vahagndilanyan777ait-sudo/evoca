import React from 'react';
// Swiper-ի հիմնական կոմպոնենտները
import { Swiper, SwiperSlide } from 'swiper/react';
// Անհրաժեշտ մոդուլները
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper-ի CSS ֆայլերը
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideItem {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  image: string;
}

const slidesData: SlideItem[] = [
  {
    id: 1,
    title: "Evoca Travel Card",
    description: "Այս քարտն իր բազմաթիվ առավելություններով կդառնա քո ճամփորդական անբաժան ընկերը",
    buttonText: "Իմանալ ավելին",
    link: "/cards",
    image: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png",
  },
  {
    id: 2,
    title: "Evoca Աշխատավարձային Նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    buttonText: "Իմանալ ավելին",
    link: "/salary",
    image: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png",
  },
  {
    id: 3,
    title: "Կարճ հեռախոսահամար՝ 8444",
    description: "Բարի գալուստ, Evocabank։ Մենք սպասում ենք Ձեր զանգին․․․",
    buttonText: "Իմանալ ավելին",
    link: "/news",
    image: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png",
  },
  {
    id: 4,
    title: "Visa Vision",
    description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
    buttonText: "Իմանալ ավելին",
    link: "/cards",
    image: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg",
  },
  {
    id: 5,
    title: "Visa Infinite",
    description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
    buttonText: "Իմանալ ավելին",
    link: "/cards",
    image: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png",
  },
  {
    id: 6,
    title: "Հիփոթեքային վարկեր Evocabank-ում` ամենահարմար պայմաններով",
    description: "Ձե՛ռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:",
    buttonText: "Իմանալ ավելին",
    link: "/loans",
    image: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
  },
  {
    id: 7,
    title: "UnionPay Gold",
    description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
    buttonText: "Իմանալ ավելին",
    link: "/cards",
    image: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png",
  },
  {
    id: 8,
    title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
    description: "Դի’ր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:",
    buttonText: "Ծանոթանալ պայմաններին",
    link: "/deposits",
    image: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg",
  },
];

const HeroSlider: React.FC = () => {
  return (
    <section className="relative w-full bg-[#e5e5e5] overflow-hidden">
      {/* Ձախ կողմի սպիտակ կորությունը (Background Decor) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="bg-white w-[50%] h-full rounded-br-[400px] hidden lg:block" />
      </div>

      {/* Ակտիվ կետիկի (Active Bullet) գույնը սահմանող CSS ոճ (inline injection) */}
      <style>{`
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #6c24b5 !important;
          width: 24px !important;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
      `}</style>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-gray-400 opacity-100 w-2 h-2 mx-1 rounded-full block cursor-pointer transition-all"></span>`;
          },
        }}
        className="z-10"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="container mx-auto px-4 sm:px-8 lg:px-24 min-h-[550px] lg:min-h-[600px] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between py-12 lg:py-0">
              
              {/* Տեքստային բլոկ */}
              <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left z-10 mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333] leading-tight max-w-xl">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-md">
                  {slide.description}
                </p>
                <div className="pt-2">
                  <a 
                    href={slide.link} 
                    className="inline-block bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-8 sm:px-10 py-3 rounded-full font-bold transition-all transform active:scale-95 shadow-md hover:shadow-lg"
                  >
                    {slide.buttonText}
                  </a>
                </div>
              </div>

              {/* Նկարի բլոկ */}
              <div className="w-full lg:w-1/2 flex justify-center relative z-10 px-4 sm:px-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[530px] h-auto object-contain drop-shadow-2xl transition-transform duration-500 lg:rotate-[-8deg] hover:rotate-0"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Կառավարման վահանակ (Navigation + Pagination) */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-6 z-20 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
          <button className="custom-prev text-xl sm:text-2xl text-[#6c24b5] cursor-pointer hover:scale-125 transition-transform font-bold select-none">
            ←
          </button>
          
          <div className="custom-pagination flex items-center justify-center">
            {/* Swiper-ը այստեղ կավելացնի կետիկները */}
          </div>

          <button className="custom-next text-xl sm:text-2xl text-[#6c24b5] cursor-pointer hover:scale-125 transition-transform font-bold select-none">
            →
          </button>
        </div>
      </Swiper>

      {/* Հեռախոսի լողացող կոճակը (Թաքցված է շատ փոքր էկրանների վրա, որ չփակի տեքստը) */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 hidden sm:block">
        <button className="bg-[#d8b4fe] p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#c084fc] transition-all transform hover:scale-110 text-white">
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;