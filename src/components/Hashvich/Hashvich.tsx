import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type CalcType = 'vark' | 'avand';

const Calculator: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<CalcType>('vark');

  // State-եր արժեքների համար
  const [amount, setAmount] = useState<number>(5000000); 
  const [percent, setPercent] = useState<number>(12);     
  const [duration, setDuration] = useState<number>(60);   
  const [repaymentType, setRepaymentType] = useState<'spring' | 'annuity'>('annuity');

  const isVark = activeTab === 'vark';

  // Տաբերի փոփոխության ֆունկցիա՝ սահմանաչափերի շտկմամբ
  const handleTabChange = (type: CalcType) => {
    setActiveTab(type);
    if (type === 'vark') {
      setAmount(5000000);
      setPercent(12);
      setDuration(60); 
    } else {
      setAmount(1000000);
      setPercent(8);
      setDuration(365); 
    }
  };

  // Ֆինանսական հաշվարկների իրականացում useMemo-ի միջոցով
  const calculations = useMemo(() => {
    if (amount <= 0 || percent <= 0 || duration <= 0) {
      return { monthlyPaymentStr: '0', totalInterest: 0, netInterest: 0, totalRepayment: 0 };
    }

    if (isVark) {
      const monthlyRate = (percent / 100) / 12;

      if (repaymentType === 'annuity') {
        const monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, duration)) / (Math.pow(1 + monthlyRate, duration) - 1);
        const totalRepayment = monthlyPayment * duration;
        const totalInterest = totalRepayment - amount;
        return {
          monthlyPaymentStr: `${Math.round(monthlyPayment).toLocaleString()} ${t('calculator.currency')}`,
          totalInterest,
          totalRepayment
        };
      } else {
        const mainPayment = amount / duration;
        const firstMonthInterest = amount * monthlyRate;
        const lastMonthInterest = mainPayment * monthlyRate;
        
        const firstMonthTotal = mainPayment + firstMonthInterest;
        const lastMonthTotal = mainPayment + lastMonthInterest;
        
        const totalInterest = ((firstMonthInterest + lastMonthInterest) / 2) * duration;
        const totalRepayment = amount + totalInterest;

        return {
          monthlyPaymentStr: `${Math.round(firstMonthTotal).toLocaleString()} ${t('calculator.currency')} ... ${Math.round(lastMonthTotal).toLocaleString()} ${t('calculator.currency')}`,
          totalInterest,
          totalRepayment
        };
      }
    } else {
      const totalInterest = (amount * (percent / 100) * duration) / 365;
      const tax = totalInterest * 0.10; 
      const netInterest = totalInterest - tax;
      const dailyInterest = totalInterest / duration;

      return {
        dailyInterest,
        totalInterest,
        netInterest
      };
    }
  }, [amount, percent, duration, repaymentType, isVark, t]);

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 font-sans antialiased text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 tracking-tight">
        {t('calculator.mainTitle')}
      </h1>

      {/* Tabs */}
      <div className="flex ml-2 sm:ml-4">
        <button
          onClick={() => handleTabChange('vark')}
          className={`px-8 sm:px-12 py-3.5 rounded-t-2xl font-bold text-sm transition-all duration-300 ${
            isVark ? 'bg-white text-[#6c24b5] shadow-[0_-4px_12px_rgba(0,0,0,0.04)] border-t border-x border-gray-100 z-10' : 'bg-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          {t('calculator.tabs.loan')}
        </button>
        <button
          onClick={() => handleTabChange('avand')}
          className={`px-8 sm:px-12 py-3.5 rounded-t-2xl font-bold text-sm transition-all duration-300 ${
            !isVark ? 'bg-white text-[#6c24b5] shadow-[0_-4px_12px_rgba(0,0,0,0.04)] border-t border-x border-gray-100 z-10' : 'bg-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          {t('calculator.tabs.deposit')}
        </button>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-2xl rounded-tl-none shadow-xl p-6 sm:p-10 border border-gray-100/80 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Inputs */}
          <div className="space-y-10">
            
            {/* Amount Input */}
            <div className="relative group">
              <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 bg-white group-hover:border-purple-300 transition-colors">
                <label className="text-gray-400 text-xs sm:text-sm font-medium">
                  {isVark ? t('calculator.labels.loanAmount') : t('calculator.labels.depositAmount')}
                </label>
                <input 
                  type="number" 
                  value={amount === 0 ? '' : amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="text-right text-lg sm:text-xl font-black outline-none w-1/2 text-gray-800 bg-transparent"
                  min="0"
                  max="50000000"
                />
              </div>
              <input 
                type="range" 
                min="50000" 
                max={isVark ? "50000000" : "20000000"} 
                step="10000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="absolute -bottom-1 left-0 w-full h-1 accent-[#6c24b5] appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-2 px-1">
                <span>50 000</span>
                <span>{amount.toLocaleString()} {t('calculator.currency')}</span>
                <span>{isVark ? '50 000 000' : '20 000 000'}</span>
              </div>
            </div>

            {/* Percent Input */}
            <div className="relative group">
              <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 bg-white group-hover:border-purple-300 transition-colors">
                <label className="text-gray-400 text-xs sm:text-sm font-medium">
                  {t('calculator.labels.annualRate')}
                </label>
                <div className="text-lg sm:text-xl font-black text-[#6c24b5]">{percent} %</div>
              </div>
              <input 
                type="range" 
                min="1" 
                max={isVark ? "24" : "16"} 
                step="0.5"
                value={percent} 
                onChange={(e) => setPercent(Number(e.target.value))} 
                className="absolute -bottom-1 left-0 w-full h-1 accent-[#6c24b5] appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-2 px-1">
                <span>1%</span>
                <span>{isVark ? '24%' : '16%'}</span>
              </div>
            </div>

            {/* Duration Input */}
            <div className="relative group">
              <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4 bg-white group-hover:border-purple-300 transition-colors">
                <label className="text-gray-400 text-xs sm:text-sm font-medium">
                  {isVark ? t('calculator.labels.duration') : t('calculator.labels.depositDuration')}
                </label>
                <div className="text-lg sm:text-xl font-black text-gray-800">
                  {duration} {isVark ? t('calculator.durationUnit.month', { count: duration }) : t('calculator.durationUnit.day', { count: duration })}
                </div>
              </div>
              <input 
                type="range" 
                min={isVark ? "1" : "91"} 
                max={isVark ? "84" : "1095"} 
                step="1"
                value={duration} 
                onChange={(e) => setDuration(Number(e.target.value))} 
                className="absolute -bottom-1 left-0 w-full h-1 accent-[#6c24b5] appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-semibold mt-2 px-1">
                <span>{isVark ? `1 ${t('calculator.durationUnit.month_short')}` : `91 ${t('calculator.durationUnit.day_short')}`}</span>
                <span>{isVark ? `84 ${t('calculator.durationUnit.month_short')}` : `1095 ${t('calculator.durationUnit.day_short')} (${t('calculator.labels.threeYears')})`}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculations / Options */}
          <div className="flex flex-col justify-between bg-slate-50/60 rounded-2xl p-6 sm:p-8 border border-slate-100">
            {isVark ? (
              /* Վարկի համար նախատեսված աջ մաս */
              <div className="space-y-6">
                <div>
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
                    {t('calculator.repayment.title')}
                  </div>
                  <div className="flex gap-8 bg-white p-2 rounded-xl border border-gray-100 shadow-sm">
                    <label className="flex-1 flex items-center justify-center gap-2.5 cursor-pointer py-2.5 rounded-lg transition-all select-none">
                      <input type="radio" name="type" checked={repaymentType === 'annuity'} onChange={() => setRepaymentType('annuity')} className="w-4 h-4 accent-[#6c24b5]" />
                      <span className={`text-sm font-bold ${repaymentType === 'annuity' ? 'text-[#6c24b5]' : 'text-gray-600'}`}>
                        {t('calculator.repayment.annuity')}
                      </span>
                    </label>
                    <label className="flex-1 flex items-center justify-center gap-2.5 cursor-pointer py-2.5 rounded-lg transition-all select-none">
                      <input type="radio" name="type" checked={repaymentType === 'spring'} onChange={() => setRepaymentType('spring')} className="w-4 h-4 accent-[#6c24b5]" />
                      <span className={`text-sm font-bold ${repaymentType === 'spring' ? 'text-[#6c24b5]' : 'text-gray-600'}`}>
                        {t('calculator.repayment.spring')}
                      </span>
                    </label>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-gray-200/60">
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-purple-100 shadow-sm">
                    <span className="text-xs font-bold text-gray-500 uppercase">
                      {t('calculator.results.monthlyPayment')}
                    </span>
                    <span className="text-base sm:text-lg font-black text-[#6c24b5]">{calculations.monthlyPaymentStr}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-1">
                    <span className="text-xs text-gray-500 font-medium">
                      {t('calculator.results.totalInterest')}
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {Math.round(calculations.totalInterest || 0).toLocaleString()} {t('calculator.currency')}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-1 border-t border-dashed border-gray-200">
                    <span className="text-xs text-gray-500 font-medium">
                      {t('calculator.results.totalRepayment')}
                    </span>
                    <span className="text-sm font-bold text-gray-800">
                      {Math.round(calculations.totalRepayment || 0).toLocaleString()} {t('calculator.currency')}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Ավանդի համար նախատեսված աջ մաս */
              <div className="space-y-5">
                <div className="border-b border-gray-200/60 pb-3 flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-medium max-w-[200px]">
                    {t('calculator.results.dailyInterest')}
                  </span>
                  <span className="text-base font-bold text-gray-800">
                    {Math.round(calculations.dailyInterest || 0).toLocaleString()} {t('calculator.currency')}
                  </span>
                </div>
                <div className="border-b border-gray-200/60 pb-3 flex justify-between items-center">
                  <span className="text-xs text-gray-500 font-medium max-w-[200px]">
                    {t('calculator.results.totalDepositInterest')}
                  </span>
                  <span className="text-base font-bold text-gray-800">
                    {Math.round(calculations.totalInterest || 0).toLocaleString()} {t('calculator.currency')}
                  </span>
                </div>
                <div className="bg-purple-50/50 border border-purple-100 p-4 rounded-xl flex justify-between items-center">
                  <span className="text-xs font-bold text-[#6c24b5] uppercase max-w-[180px]">
                    {t('calculator.results.netInterest')}
                  </span>
                  <span className="text-lg font-black text-[#6c24b5]">
                    {Math.round(calculations.netInterest || 0).toLocaleString()} {t('calculator.currency')}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400/90 leading-normal italic bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm">
                  {t('calculator.disclaimers.depositTax')}
                </p>
              </div>
            )}

            {/* Footer Alert & Disclaimer */}
            <div className="mt-8 pt-6 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[11px] text-gray-400 leading-normal max-w-[320px] text-center sm:text-left">
                {t('calculator.disclaimers.infoOnly')}
              </p>
              <button className="w-full sm:w-auto bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-8 py-3 rounded-full text-xs font-bold transition-all shadow-md hover:shadow-purple-500/10 active:scale-98 shrink-0">
                {isVark ? t('calculator.buttons.applyLoan') : t('calculator.buttons.orderDeposit')}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;