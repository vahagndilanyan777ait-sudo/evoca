import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 lg:px-20 border-t border-gray-100 font-sans">
      <div className="container mx-auto">
        {/* Top bar with update time */}
        <div className="flex justify-end mb-10">
          <span className="text-gray-400 text-[11px]">Թարմացվել է՝ 27/04/2026 17:48</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Logo and Address Section */}
          <div className="lg:col-span-1 space-y-6">
            <img src="https://www.evoca.am/hy" alt="Evocabank" className="h-8" />
            <div className="text-gray-600 text-sm leading-relaxed">
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </div>
            <div className="space-y-4">
              <p className="text-gray-800 text-xs font-bold leading-tight">
                Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
              </p>
              <p className="text-gray-400 text-[10px] uppercase">
                1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </p>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-800 mb-6">Բանկի մասին</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-[#6c24b5] cursor-pointer">Մեր մասին</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Ղեկավարություն</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Բաժնետերեր</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Հաշվետվություններ</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Իրավական ակտեր</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Սակագներ</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Օտարվող գույք</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Կառուցապատողներ</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Գործընկեր ավտոսրահներ</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Սակագների արխիվ</li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-800 mb-6">Օգտակար հղումներ</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-[#6c24b5] cursor-pointer">Հաճախորդի իրավունքները</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Հաճախորդի ռեզիդենտության չափանիշներ</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Կարգավորում</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Գաղտնիության քաղաքականություն</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Ֆին. հաշտարար</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Ֆինանսական հանցագործությունների կանխարգելում</li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="space-y-4">
            <h4 className="font-bold text-gray-800 mb-6">Այլ հղումներ</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-[#6c24b5] cursor-pointer">EvocaONLINE</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Պահատուփեր</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Հաճախ տրվող հարցեր</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Հայտարարություններ</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Dibrary</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Բուկլետներ</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Հետադարձ կապ</li>
              <li className="hover:text-[#6c24b5] cursor-pointer">Կայքի քարտեզ</li>
            </ul>
          </div>

          {/* Social and Contact Column */}
          <div className="space-y-8">
            <div className="flex gap-4 text-gray-400">
              <span className="hover:text-[#6c24b5] cursor-pointer">f</span>
              <span className="hover:text-[#6c24b5] cursor-pointer">ig</span>
              <span className="hover:text-[#6c24b5] cursor-pointer">p</span>
              <span className="hover:text-[#6c24b5] cursor-pointer">yt</span>
              <span className="hover:text-[#6c24b5] cursor-pointer">in</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <img src="/path-to-appstore.png" alt="App Store" className="h-8 w-auto object-contain" />
              <img src="/path-to-googleplay.png" alt="Google Play" className="h-8 w-auto object-contain" />
            </div>

            <div className="space-y-4 text-[#6c24b5] font-bold text-sm">
              <p className="hover:underline cursor-pointer">Բանկի հասցեները և աշխատաժամերը</p>
              <p className="hover:underline cursor-pointer">Կապ մեզ հետ</p>
              <p className="text-lg">+374 10 605555</p>
              <p className="text-lg">8444</p>
            </div>
          </div>
        </div>

        {/* Bottom Partners/Certificates Bar */}
        <div className="border-t border-gray-50 pt-10 flex flex-wrap justify-center lg:justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <p className="text-[10px] text-gray-400 max-w-2xl leading-relaxed">
            Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված այլ անձանց հղված այլ անձանց կայքերի բովանդակության ստույգության, այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
          </p>
          <div className="flex items-center gap-6">
            <div className="h-8 w-8 bg-gray-200" /> {/* Placeholder for partner logos */}
            <div className="h-8 w-8 bg-gray-200" />
            <div className="h-8 w-16 bg-gray-200" />
            <div className="h-8 w-12 bg-gray-200" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;