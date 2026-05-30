import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Արժույթի տվյալների տիպերը
interface Rate {
  code: string;
  buy: number;
  sell: number;
  flag: React.ReactNode;
}

const CurrencyExchange: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'cash' | 'non-cash' | 'gold'>('cash');
  
  // Հաշվիչի վիճակներ (States)
  const [amount, setAmount] = useState<string>('1000');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('AMD');
  const [convertedAmount, setConvertedAmount] = useState<string>('0');

  // Փոխարժեքների տվյալներ (SVG դրոշակներով)
  const rates: Record<'cash' | 'non-cash' | 'gold', Rate[]> = {
    cash: [
      { code: 'USD', buy: 382.00, sell: 386.50, flag: <svg className="w-full h-full" viewBox="0 0 740 390"><path fill="#3c3b6e" d="M0 0h740v390H0z"/><path fill="#fff" d="M0 30h740v30H0zm0 60h740v30H0zm0 60h740v30H0zm0 60h740v30H0zm0 60h740v30H0zm0 60h740v30H0z"/><path fill="#3c3b6e" d="M0 0h296v210H0z"/><circle fill="#fff" cx="24.6" cy="15" r="3.5"/></svg> },
      { code: 'EUR', buy: 412.00, sell: 419.00, flag: <svg className="w-full h-full" viewBox="0 0 810 540"><path fill="#039" d="M0 0h810v540H0z"/><circle fill="#fc0" cx="405" cy="270" r="15"/><circle fill="#fc0" cx="405" cy="120" r="15"/></svg> },
      { code: 'RUB', buy: 4.10, sell: 4.35, flag: <svg className="w-full h-full" viewBox="0 0 900 600"><rect width="900" height="200" fill="#fff"/><rect width="900" height="200" y="200" fill="#0039a6"/><rect width="900" height="200" y="400" fill="#d52b1e"/></svg> },
    ],
    'non-cash': [
      { code: 'USD', buy: 383.00, sell: 385.50, flag: null },
      { code: 'EUR', buy: 413.50, sell: 418.00, flag: null },
      { code: 'RUB', buy: 4.15, sell: 4.30, flag: null },
    ],
    gold: [
      { code: 'XAU', buy: 31200, sell: 34500, flag: null }
    ]
  };

  // Ակտիվ սակագների ընտրություն ըստ թեբի
  const currentRates = rates[activeTab] || rates.cash;

  // Փոխարկման հաշվարկային տրամաբանություն (Auto-calculation EFFECT)
  useEffect(() => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      setConvertedAmount('0');
      return;
    }

    if (fromCurrency === toCurrency) {
      setConvertedAmount(amount);
      return;
    }

    // Եթե փոխանակումը AMD-ից արտարժույթ է (Բանկը Վաճառում է)
    if (fromCurrency === 'AMD') {
      const rateObj = currentRates.find(r => r.code === toCurrency);
      if (rateObj) {
        setConvertedAmount((numAmount / rateObj.sell).toFixed(2));
      }
    } 
    // Եթե արտարժույթից AMD է (Բանկը Առնում է)
    else if (toCurrency === 'AMD') {
      const rateObj = currentRates.find(r => r.code === fromCurrency);
      if (rateObj) {
        setConvertedAmount((numAmount * rateObj.buy).toFixed(2));
      }
    } 
    // Խաչաձև փոխարկում (Cross Rate, օրինակ՝ USD -> EUR)
    else {
      const fromRate = currentRates.find(r => r.code === fromCurrency);
      const toRate = currentRates.find(r => r.code === toCurrency);
      if (fromRate && toRate) {
        const amdEquiv = numAmount * fromRate.buy;
        setConvertedAmount((amdEquiv / toRate.sell).toFixed(2));
      }
    }
  }, [amount, fromCurrency, toCurrency, activeTab, currentRates]);

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20 font-sans antialiased">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Ձախ հատված՝ Տեքստ և Հաշվիչ (8/12 Սյունակ) */}
        <div className="lg:col-span-8 space-y-8">
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-3xl font-medium bg-gray-50 p-4.5 rounded-2xl border border-gray-100">
            {t('exchange.notice', '20,000 ԱՄՆ դոլարից ավել կամ դրան համարժեք այլ արտարժույթի փոխարկման դեպքում գործարքը հաստատվում է Բանկի հայեցողությամբ և Բանկի կողմից որոշված փոխարժեքով: 100,000 դրամ կամ դրան համարժեք արտարժույթից ավելի փոխանակման գործարքների իրականացման համար անհրաժեշտ է ներկայացնել անձը հաստատող փաստաթուղթ:')}
          </p>

          <div className="bg-white rounded-3xl shadow-[0_15px_45px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
            {/* Թեբեր (Tabs) */}
            <div className="flex border-b border-gray-100 bg-gray-50/50">
              {([
                { id: 'cash', label: 'Կանխիկ' },
                { id: 'non-cash', label: 'Անկանխիկ' },
                { id: 'gold', label: 'Ոսկու փոխարժեք' }
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    // Reset currencies based on type if needed
                    if (tab.id === 'gold') { setFromCurrency('XAU'); setToCurrency('AMD'); }
                    else if (fromCurrency === 'XAU') { setFromCurrency('USD'); }
                  }}
                  className={`flex-1 py-4.5 text-xs sm:text-sm font-black tracking-wide transition-all border-b-2 ${
                    activeTab === tab.id 
                      ? 'text-[#6c24b5] bg-white border-[#6c24b5]' 
                      : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
                >
                  {t(`exchange.tabs.${tab.id}`, tab.label)}
                </button>
              ))}
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              
              {/* Փոխարժեքների աղյուսակ */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 text-[10px] uppercase font-black text-gray-400 tracking-widest px-2">
                  <div>{t('exchange.currency', 'Արժույթ')}</div>
                  <div className="text-center">{t('exchange.buy', 'Առք')}</div>
                  <div className="text-center">{t('exchange.sell', 'Վաճառք')}</div>
                </div>

                <div className="divide-y divide-gray-100">
                  {currentRates.map((cur) => (
                    <div key={cur.code} className="grid grid-cols-3 items-center py-3.5 first:pt-1 last:pb-1">
                      <div className="flex items-center gap-3 font-extrabold text-gray-900 text-sm sm:text-base">
                        <div className="w-6 h-4 bg-gray-100 rounded-sm overflow-hidden shadow-sm flex items-center justify-center border border-gray-200/60">
                          {cur.flag ? cur.flag : <span className="text-[8px] text-gray-400">🪙</span>}
                        </div>
                        {t(`exchange.codes.${cur.code}`, cur.code)}
                      </div>
                      <div className="text-center font-bold text-gray-800 text-sm sm:text-base">
                        <span className="text-[9px] text-red-500 mr-1">▼</span>{cur.buy.toFixed(2)}
                      </div>
                      <div className="text-center font-bold text-gray-800 text-sm sm:text-base">
                        <span className="text-[9px] text-green-500 mr-1">▲</span>{cur.sell.toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-xs font-bold">
                  <span className="text-gray-400 text-[11px]">
                    {t('exchange.updatedAt', 'Թարմացվել է՝')} 16.05.2026
                  </span>
                  <button className="text-[#6c24b5] hover:text-[#521b8c] transition-colors">
                    {t('exchange.more', 'Այլ արժույթներ')}
                  </button>
                </div>
              </div>

              {/* Հաշվիչի մուտքագրման դաշտեր */}
              <div className="space-y-5 flex flex-col justify-center md:border-l md:border-gray-100 md:pl-10">
                
                {/* Ունեմ (Input Amount) */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                    {t('exchange.have', 'Ունեմ')}
                  </label>
                  <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-4 py-3 bg-gray-50/50 focus-within:border-[#6c24b5] focus-within:bg-white transition-all">
                    <input 
                      type="number" 
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-transparent outline-none font-black text-gray-800 text-lg w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                    />
                    <select 
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="bg-transparent font-black text-[#6c24b5] outline-none text-sm cursor-pointer ml-2"
                    >
                      {activeTab === 'gold' ? (
                        <option value="XAU">{t('exchange.codes.XAU', 'XAU')}</option>
                      ) : (
                        <>
                          <option value="USD">{t('exchange.codes.USD', 'USD')}</option>
                          <option value="AMD">{t('exchange.codes.AMD', 'AMD')}</option>
                          <option value="EUR">{t('exchange.codes.EUR', 'EUR')}</option>
                          <option value="RUB">{t('exchange.codes.RUB', 'RUB')}</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* Կստանամ (Output Result) */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider">
                    {t('exchange.get', 'Կստանամ')}
                  </label>
                  <div className="flex items-center justify-between border border-gray-200 rounded-2xl px-4 py-3 bg-gray-50/30">
                    <input 
                      type="text" 
                      value={convertedAmount} 
                      readOnly 
                      className="bg-transparent outline-none font-black text-gray-400 text-lg w-full" 
                    />
                    <select 
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="bg-transparent font-black text-[#6c24b5] outline-none text-sm cursor-pointer ml-2"
                    >
                      <option value="AMD">{t('exchange.codes.AMD', 'AMD')}</option>
                      {activeTab !== 'gold' && (
                        <>
                          <option value="USD">{t('exchange.codes.USD', 'USD')}</option>
                          <option value="EUR">{t('exchange.codes.EUR', 'EUR')}</option>
                          <option value="RUB">{t('exchange.codes.RUB', 'RUB')}</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Աջ հատված՝ Քարտեզ և Մեր հասցեները (4/12 Սյունակ) */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8 lg:space-y-0 lg:py-2">
          <div className="space-y-2 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              {t('addresses.title', 'Մեր հասցեները')}
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-medium">
              {t('addresses.subtitle', 'Բանկի հասցեները, աշխատաժամերը, բանկոմատները')}
            </p>
          </div>

          {/* Map Image Container */}
          <div className="relative group cursor-pointer w-full max-w-[290px] mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-[#6c24b5]/4 rounded-full blur-3xl group-hover:bg-[#6c24b5]/8 transition-all duration-500" />
            <img 
              src="https://www.evoca.am/img/addresses.png" 
              alt="Map Location" 
              className="relative w-full drop-shadow-[0_15px_35px_rgba(108,36,181,0.12)] transform group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            />
            
            {/* Map Pin Overlaid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#6c24b5] p-3 rounded-2xl shadow-[0_8px_25px_rgba(108,36,181,0.4)] text-white transform transition-transform duration-500 group-hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
          </div>

          {/* Action Button */}
          <button className="flex items-center gap-2 bg-[#f3e8ff] text-[#6c24b5] px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-wider hover:bg-[#e9d5ff] active:scale-[0.98] transition-all w-full lg:w-full justify-center shadow-sm shadow-purple-100">
            {t('addresses.btn', 'Դիտել քարտեզը')}
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CurrencyExchange;