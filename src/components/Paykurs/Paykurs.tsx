import React, { useState } from 'react';

const CurrencyExchange: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cash' | 'non-cash' | 'gold'>('cash');

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Ձախ հատված՝ Տեքստ և Հաշվիչ */}
        <div className="lg:col-span-8">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-8 max-w-3xl font-medium">
            20,000 ԱՄՆ դոլարից ավել կամ դրան հաամարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան հաամարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:
          </p>

          <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 overflow-hidden max-w-4xl">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {['Կանխիկ', 'Անկանխիկ', 'Ոսկու փոխարժեք'].map((tab, idx) => {
                const tabKey = idx === 0 ? 'cash' : idx === 1 ? 'non-cash' : 'gold';
                return (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey as any)}
                    className={`flex-1 py-4 text-sm font-bold transition-all ${
                      activeTab === tabKey ? 'text-[#6c24b5] bg-white' : 'text-gray-400 bg-gray-50/30'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Փոխարժեքների աղյուսակ */}
              <div className="space-y-6">
                <div className="grid grid-cols-3 text-[10px] uppercase font-bold text-gray-300 tracking-widest px-2">
                  <div className="col-span-1"></div>
                  <div className="text-center">Առք</div>
                  <div className="text-center">Վաճառք</div>
                </div>

                {[
                  { code: 'USD', buy: '368', sell: '372', up: true },
                  { code: 'EUR', buy: '427', sell: '439', up: true },
                  { code: 'RUB', buy: '4.85', sell: '5.05', up: true },
                ].map((cur) => (
                  <div key={cur.code} className="grid grid-cols-3 items-center py-3 border-b border-gray-50 last:border-0">
                    <div className="flex items-center gap-3 font-bold text-gray-700">
                      <div className="w-6 h-4 bg-gray-200 rounded-sm overflow-hidden flex items-center justify-center text-[8px] text-gray-400">FLAG</div>
                      {cur.code}
                    </div>
                    <div className="text-center font-bold text-gray-800 flex items-center justify-center gap-1">
                      <span className="text-[10px] text-red-500">▼</span> {cur.buy}
                    </div>
                    <div className="text-center font-bold text-gray-800 flex items-center justify-center gap-1">
                      <span className="text-[10px] text-green-500">▲</span> {cur.sell}
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center pt-4">
                  <span className="text-[10px] text-gray-300">Թարմացվել է՝ 02.05.26</span>
                  <button className="text-[#6c24b5] text-xs font-bold hover:underline">Այլ արժույթներ</button>
                </div>
              </div>

              {/* Հաշվիչի մուտքագրման դաշտեր */}
              <div className="space-y-6 flex flex-col justify-center border-l border-gray-50 pl-0 md:pl-10">
                <div className="space-y-2">
                  <label className="text-[11px] text-gray-400 font-bold uppercase">Ունեմ</label>
                  <div className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3 bg-gray-50/30">
                    <input type="text" defaultValue="0" className="bg-transparent outline-none font-bold text-gray-700 w-full" />
                    <select className="bg-transparent font-bold text-[#6c24b5] outline-none text-sm cursor-pointer">
                      <option>AMD</option>
                      <option>USD</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] text-gray-400 font-bold uppercase">Կստանամ</label>
                  <div className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3 bg-gray-50/30">
                    <input type="text" defaultValue="0" className="bg-transparent outline-none font-bold text-gray-700 w-full" />
                    <select className="bg-transparent font-bold text-[#6c24b5] outline-none text-sm cursor-pointer">
                      <option>USD</option>
                      <option>AMD</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Աջ հատված՝ Քարտեզ */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">Մեր հասցեները</h2>
            <p className="text-gray-400 text-sm">Բանկի հասցեները, աշխատաժամերը, բանկոմատները</p>
          </div>

          <div className="relative group cursor-pointer w-full max-w-[320px]">
            <div className="absolute inset-0 bg-[#6c24b5]/5 rounded-3xl blur-2xl group-hover:bg-[#6c24b5]/10 transition-all" />
            <img 
              src="/path-to-folded-map-image.png" 
              alt="Map illustration" 
              className="relative w-full drop-shadow-xl transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Map Pin Icon Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6c24b5] p-3 rounded-2xl shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
            </div>
          </div>

          <button className="flex items-center gap-3 bg-[#f3e8ff] text-[#6c24b5] px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-[#e9d5ff] transition-all w-full lg:w-auto justify-center">
            Դիտել քարտեզը
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CurrencyExchange;