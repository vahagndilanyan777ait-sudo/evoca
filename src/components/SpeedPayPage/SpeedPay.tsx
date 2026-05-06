import React from 'react';

interface ServiceCard {
  id: number;
  title: string;
  iconSrc: string;
  isBrand?: boolean;
}

const services: ServiceCard[] = [
  { id: 1, title: 'EVOCABANK', iconSrc: '🏦', isBrand: true },
  { id: 2, title: 'Միջազգային բջջային օպերատորներ', iconSrc: '🌐' },
  { id: 3, title: 'Կոմունալ վճարումներ', iconSrc: '🔥' },
  { id: 4, title: 'Ինտերնետ և TV', iconSrc: '📺' },
  { id: 5, title: 'ՃՈ վճարներ', iconSrc: '🚔' },
  { id: 6, title: 'Վարկային կազմակերպություններ', iconSrc: '💸' },
  { id: 7, title: 'Միջոցառումներ', iconSrc: '🎟️' },
];

const SpeedPay: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F6F8] py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#1a1a1a] mb-16 tracking-tight">
          Գլխավոր
        </h1>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white w-full sm:w-[calc(50%-1.5rem)] md:w-64 aspect-square rounded-[2.5rem] p-8 
                         flex flex-col items-center justify-center text-center shadow-sm 
                         hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.isBrand ? (
                  <div className="flex flex-col items-center">
                    <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
                        <path d="M20 20L50 80L80 20" stroke="#6e32f0" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                ) : (
                  <span className="text-6xl">{service.iconSrc}</span>
                )}
              </div>
              <h3 className={`text-[15px] font-bold leading-tight px-2
                ${service.isBrand ? 'text-[#6e32f0] tracking-[0.1em]' : 'text-[#333]'}`}>
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeedPay;