import React from 'react';

// 1. Տվյալների տիպի սահմանում
interface CSRPoint {
  id: number;
  text: string;
}

// 2. Կետերի տվյալները (ըստ պատկերի)
const csrPoints: CSRPoint[] = [
  {
    id: 1,
    text: 'Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-եր,'
  },
  {
    id: 2,
    text: 'Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,'
  },
  {
    id: 3,
    text: 'Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,'
  },
  {
    id: 4,
    text: 'Հասարակության առավել խոցելի խմբեր, մասնավորապես` ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:'
  }
];

const CSRSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F9F9FB] py-20 px-4 md:px-10 lg:px-24 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Գլխավոր Վերնագիր */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-8 text-center leading-tight">
          Կորպորատիվ սոցիալական<br className="hidden md:block" /> պատասխանատվություն
        </h2>

        {/* Ներածական տեքստ */}
        <p className="text-[#4a4a4a] text-center max-w-4xl mx-auto mb-16 text-[15px] md:text-[16px] leading-relaxed">
          Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և 
          հասարակական նախաձեռնություններին հետևյալ ոլորտներում`
        </p>

        {/* Կետերի ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {csrPoints.map((point) => (
            <div key={point.id} className="flex items-start gap-4">
              {/* Մանուշակագույն հորիզոնական գիծ */}
              <div 
                className="w-10 h-[3px] bg-[#6c24b5] mt-2.5 flex-shrink-0" 
                aria-hidden="true" 
              />
              
              {/* Տեքստ */}
              <p className="text-[#333] text-[15px] md:text-[16px] font-medium leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRSection;