import React from 'react';

const EvocaSalaryBenefits: React.FC = () => {
  return (
    <div className="max-w-[850px] mx-auto px-6 py-12 font-sans text-[#333]">
      {/* Ներածական տեքստ */}
      <p className="text-[14px] leading-relaxed mb-10">
        Evoca աշխատավարձային նախագիծը մեկնարկել է նրանց համար, ովքեր, իրենց աշխատավարձը քարտին ստանալուց բացի, ցանկանում են նաև ստանալ <span className="font-bold text-[#6c24b5]">նոր հնարավորություններ ու առավելություններ</span>:
      </p>

      {/* Բաժին 1: Mastercard Gold */}
      <section className="mb-10">
        <h3 className="text-[15px] font-black text-[#6c24b5] mb-4 uppercase tracking-wide">
          Բեր աշխատավարձդ Evoca, Տար անվճար <span className="underline cursor-pointer">Mastercard Gold</span>
        </h3>
        <ul className="space-y-3 ml-4">
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span>Պրեմիում դասի քարտ</span>
          </li>
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span>Հասանելի ամբողջ աշխարհում</span>
          </li>
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span>Գումարի անվտանգության բարձր մակարդակ</span>
          </li>
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span>Դրական մնացորդի նկատմամբ <span className="font-bold text-[#6c24b5]">2% տարեկան տոկոսադրույք</span></span>
          </li>
        </ul>
      </section>

      {/* Բաժին 2: Evoca Travel Card */}
      <section className="mb-10">
        <h3 className="text-[15px] font-black text-[#6c24b5] mb-4 uppercase tracking-wide">
          Բեր աշխատավարձդ Evoca, Տար 50% զեղչով <span className="underline cursor-pointer">Evoca Travel Card</span>
        </h3>
        <ul className="space-y-3 ml-4">
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span>Մինչև <span className="font-bold text-[#6c24b5]">1.5% cashback</span> արտասահմանում իրականացված վճարումների համար</span>
          </li>
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span>Անվճար <span className="font-bold text-[#6c24b5]">6 մուտք</span> Lounge Key սրահներ քեզ և հյուրերիդ համար</span>
          </li>
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span>Անվճար <span className="font-bold text-[#6c24b5]">6 անգամ</span> Fast track-ից օգտվելու հնարավորություն քեզ և հյուրերիդ համար</span>
          </li>
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span>Այլ ճամփորդական առավելություններ</span>
          </li>
        </ul>
      </section>

      {/* Բաժին 3: Բենեֆիթներ */}
      <section className="mb-10">
        <h3 className="text-[15px] font-black text-[#6c24b5] mb-4 uppercase tracking-wide">
          Բեր աշխատավարձդ Evoca, Տար մի շարք <span className="underline cursor-pointer">Բենեֆիթներ</span>
        </h3>
        <p className="text-[13px] mb-4 leading-relaxed">
          Դառնալով Evoca քարտապան՝ կունենաս հնարավորություն օգտվելու <span className="font-bold text-[#6c24b5]">Evoca Benefits</span> նախագծից և մեր 100-ից ավել գործընկերների մոտ կստանաս՝
        </p>
        <ul className="space-y-3 ml-4">
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span className="font-bold text-[#6c24b5]">Մինչև 25% զեղչ</span>
          </li>
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span className="font-bold text-[#6c24b5]">Մինչև 25% cashback</span>
          </li>
          <li className="flex items-start gap-3 text-[13px]">
            <span className="text-[#6c24b5] mt-1">•</span>
            <span>Նվեր քարտեր</span>
          </li>
        </ul>
      </section>

      {/* Բաժին 4: Վարկեր */}
      <section className="mb-10">
        <h3 className="text-[15px] font-black text-[#6c24b5] mb-6 uppercase tracking-wide">
          Բեր աշխատավարձդ Evoca, Տար ավելի ցածր տոկոսադրույքով վարկեր
        </h3>
        
        {/* Օվերդրավտ */}
        <div className="mb-8">
          <h4 className="text-[14px] font-bold text-[#6c24b5] underline cursor-pointer mb-4">
            Օվերդրավտ կամ Մարման գրաֆիկով վարկ
          </h4>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span>Մինչև աշխատավարձի <span className="font-bold text-[#6c24b5]">15-ապատիկի չափով</span></span>
            </li>
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span>Մինչև <span className="font-bold text-[#6c24b5]">10 մլն դրամ</span> գումար</span>
            </li>
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span>Մինչև <span className="font-bold text-[#6c24b5]">60 ամիս</span> մարման ժամկետ</span>
            </li>
          </ul>
        </div>

        {/* Ավտովարկ */}
        <div className="mb-8">
          <h4 className="text-[14px] font-bold text-[#6c24b5] underline cursor-pointer mb-4">
            Ավտովարկ
          </h4>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span><span className="font-bold text-[#6c24b5]">0.5-ով</span> ցածր տոկոսադրույք</span>
            </li>
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span>Մինչև <span className="font-bold text-[#6c24b5]">50 մլն դրամ</span> գումար</span>
            </li>
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span>Մինչև <span className="font-bold text-[#6c24b5]">84 ամիս</span> մարման ժամկետ</span>
            </li>
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span>Նախընտրած մեքենայի ձեռքբերում՝ ինչպես առաջնային, այնպես էլ երկրորդային շուկայից</span>
            </li>
          </ul>
        </div>

        {/* Անշարժ գույք */}
        <div>
          <h4 className="text-[14px] font-bold text-[#6c24b5] underline cursor-pointer mb-4">
            Անշարժ գույքի գրավով սպառողական վարկ
          </h4>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span><span className="font-bold text-[#6c24b5]">0.5-ով</span> ցածր տոկոսադրույք</span>
            </li>
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span>Մինչև <span className="font-bold text-[#6c24b5]">100 մլն դրամ</span> գումար</span>
            </li>
            <li className="flex items-start gap-3 text-[13px]">
              <span className="text-[#6c24b5] mt-1">•</span>
              <span>Մինչև <span className="font-bold text-[#6c24b5]">120 ամիս</span> մարման ժամկետ</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default EvocaSalaryBenefits;