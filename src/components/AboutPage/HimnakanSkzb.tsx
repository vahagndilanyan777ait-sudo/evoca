import React from 'react';

// 1. Տվյալների տիպի սահմանում
interface CoreValue {
  id: number;
  title: string;
  description: string;
}

// 2. Արժեքների տվյալները (ըստ պատկերի)
const coreValues: CoreValue[] = [
  {
    id: 1,
    title: 'Ազնվություն',
    description: 'Մենք ազնիվ ենք գործում բոլոր հարաբերություններում։'
  },
  {
    id: 2,
    title: 'Նորարարություն',
    description: 'Մենք շարունակաբար ներդնում և կիրառում ենք նորարարություններ՝ առաջարկելով հաճախորդներին նորագույն տեխնոլոգիաների լավագույն լուծումները։'
  },
  {
    id: 3,
    title: 'Հուսալիություն',
    description: 'Մենք կայուն ենք և հուսալի թե՛ հաճախորդների, և թե՛ գործընկերների համար։'
  },
  {
    id: 4,
    title: 'Թափանցիկություն',
    description: 'Մենք բաց ենք և թափանցիկ հանրության առջև, միաժամանակ փակ՝ հաճախորդի բանկային և առևտրային գաղտնիքի պահպանման հարցում։'
  },
  {
    id: 5,
    title: 'Հաճախորդների վստահություն',
    description: 'Հաճախորդները մեր գործունեության կենտրոնում են։ Մենք գնահատում և ամուր ենք պահում հաճախորդների վստահությունը։'
  },
  {
    id: 6,
    title: 'Հարմարավետություն',
    description: 'Մենք ձգտում ենք բարելավել հաճախորդների կենսակերպը՝ դարձնելով այն առավել հարմարավետ։'
  },
  {
    id: 7,
    title: 'Գործարար հեղինակություն',
    description: 'Բարի համբավը մեր ամենաթանկ և անփոխարինելի ակտիվն է։'
  },
  {
    id: 8,
    title: 'Թիմային ոգի',
    description: 'Մենք համախմբել ենք լավագույն թիմը՝ մեր հաճախորդներին լավագույն սպասարկում ապահովելու համար։'
  },
];

const CoreValuesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Գլխավոր Վերնագիր */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-16 tracking-tight">
          Հիմնական արժեքները և սկզբունքները
        </h2>

        {/* Արժեքների ցանց (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {coreValues.map((value) => (
            <div key={value.id} className="flex flex-col space-y-4">
              {/* Ենթավերնագիր */}
              <h3 className="text-[#6c24b5] text-2xl font-bold tracking-tight">
                {value.title}
              </h3>
              
              {/* Նկարագրություն */}
              <p className="text-[#4a4a4a] text-[15px] leading-relaxed font-medium opacity-90">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;