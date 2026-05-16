import React from 'react';
// Swiper-ի հիմնական կոմպոնենտները
import { Swiper, SwiperSlide } from 'swiper/react';
// Անհրաժեշտ մոդուլները
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper-ի CSS ֆայլերը (Կարևոր է՝ առանց սրա չի աշխատի)
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
    image: "https://www.evoca.am/images-cache/sliders/1/17480089224912/4012c7541d8db15b5666bb0e4f4bdf7a-576x486.png", // Տեղադրիր քարտի նկարի հղումը
  },
  {
    id: 2,
    title: "Evoca Աշխատավարձային Նախագիծ",
    description: "Բեր աշխատավարձդ Evoca: Տար շատ ավելին...",
    buttonText: "Իմանալ ավելին",
    link: "/salary",
    image: "https://www.evoca.am/images-cache/sliders/1/17740137222872/7152cafab4609e8483a365f79ecf04cb-577x486.png", // Տեղադրիր քարտի նկարի հղումը
  },
  {
    id: 3,
    title: "Կարճ հեռախոսահամար՝ 8444",
    description: "Բարի գալուստ, Evocabank։ Մենք սպասում ենք Ձեր զանգին․․․",
    buttonText: "Իմանալ ավելին",
    link: "/news",
    image: "https://www.evoca.am/images-cache/sliders/1/17612202124044/b74e87ec0e83aa10cb128d41f0ada026-577x486.png", // Տեղադրիր քարտի նկարի հղումը
  },
   {
    id: 4,
    title: "Visa Vision",
    description: "Ձեռք բեր Visa Vision քարտ քո նախընտրած գույնով, դիզայնով ու ոճով և օգտվիր բազմաթիվ առավելություններից",
    buttonText: "Իմանալ ավելին",
    link: "/cards",
    image: "https://www.evoca.am/images-cache/sliders/1/16856146843579/345dd727d7ee28e2cd6ec180e5d65740-577x486.jpg", // Տեղադրիր քարտի նկարի հղումը
  },
   {
    id: 5,
    title: "Visa Infinite",
    description: "Ձեռք բեր Visa վճարային համակարգի ամենաբարձր դասի քարտը հենց հիմա",
    buttonText: "Իմանալ ավելին",
    link: "/cards",
    image: "https://www.evoca.am/images-cache/sliders/1/17737433784078/126c54e244e880fd563d8af43979486c-577x485.png", // Տեղադրիր քարտի նկարի հղումը
  },
   {
    id: 6,
    title: "Հիփոթեքային վարկեր Evocabank-ում` ամենահարմար պայմաններով",
    description: "Ձե՛ռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:",
    buttonText: "Իմանալ ավելին",
    link: "/loans",
    image: "https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg", // Տեղադրիր քարտի նկարի հղումը
  },
   {
    id: 7,
    title: "UnionPay Gold",
    description: "Ամբողջ աշխարհում քո արագ և հարմար վճարումների ուղեկիցը",
    buttonText: "Իմանալ ավելին",
    link: "/cards",
    image: "https://www.evoca.am/images-cache/sliders/1/17262130779724/2fee1054871280f57daf5204f901c563-577x486.png", // Տեղադրիր քարտի նկարի հղումը
  },
   {
    id: 8,
    title: "Օնլայն ավանդ EvocaTOUCH հավելվածով",
    description: "Դի’ր ավանդ Evocabank-ում` բարձր, շա՜տ բարձր տոկոսներով:",
    buttonText: "Ծանոթանալ պայմաններին",
    link: "/deposits",
    image: "https://www.evoca.am/images-cache/sliders/1/16178037539626/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg", // Տեղադրիր քարտի նկարի հղումը
  },
];

const HeroSlider: React.FC = () => {
  return (
    <section className="relative w-full bg-[#e5e5e5] overflow-hidden">
      {/* Ձախ կողմի սպիտակ կորությունը (Background Decor) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="bg-white w-[50%] h-full rounded-br-[400px] hidden lg:block" />
      </div>

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
            return `<span class="${className} !bg-gray-400 !opacity-100 w-2 h-2 mx-1"></span>`;
          },
        }}
        className="z-10"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="container mx-auto px-6 lg:px-24 min-h-[500px] flex flex-col lg:flex-row items-center py-12">
              
              {/* Տեքստային բլոկ */}
              <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left z-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-[#333]">
                  {slide.title}
                </h1>
                <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                  {slide.description}
                </p>
                <a href={slide.link} className="bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-10 py-3 rounded-full font-bold transition-all transform active:scale-95">
                  {slide.buttonText}
                </a>
              </div>

              {/* Նկարի բլոկ */}
              <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full max-w-[550px] object-contain drop-shadow-2xl rotate-[-12deg]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Կառավարման վահանակ (Navigation + Pagination) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-20">
          <button className="custom-prev text-2xl text-[#6c24b5] cursor-pointer hover:scale-125 transition-transform">
            ←
          </button>
          
          <div className="custom-pagination flex items-center">
            {/* Swiper-ը այստեղ կավելացնի կետիկները */}
          </div>

          <button className="custom-next text-2xl text-[#6c24b5] cursor-pointer hover:scale-125 transition-transform">
            →
          </button>
        </div>
      </Swiper>

      {/* Հեռախոսի լողացող կոճակը */}
      <div className="absolute bottom-6 right-6 z-30">
        <button className="bg-[#d8b4fe] p-4 rounded-full shadow-lg hover:bg-[#c084fc] transition-colors text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;