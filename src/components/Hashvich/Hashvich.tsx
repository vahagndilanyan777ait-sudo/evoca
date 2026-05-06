import React, { useState } from 'react';

type CalcType = 'vark' | 'avand';

const Calculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CalcType>('vark');

  // State-եր արժեքների համար
  const [amount, setAmount] = useState(0);
  const [percent, setPercent] = useState(1);
  const [duration, setDuration] = useState(activeTab === 'vark' ? 1 : 91);
  const [repaymentType, setRepaymentType] = useState<'spring' | 'annuity'>('spring');

  const isVark = activeTab === 'vark';

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Հաշվիչներ</h1>

      {/* Tabs */}
      <div className="flex ml-4">
        <button
          onClick={() => { setActiveTab('vark'); setDuration(1); }}
          className={`px-12 py-3 rounded-t-2xl font-bold transition-all ${
            isVark ? 'bg-white text-gray-800 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-10' : 'bg-transparent text-gray-400'
          }`}
        >
          Վարկ
        </button>
        <button
          onClick={() => { setActiveTab('avand'); setDuration(91); }}
          className={`px-12 py-3 rounded-t-2xl font-bold transition-all ${
            !isVark ? 'bg-white text-gray-800 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-10' : 'bg-transparent text-gray-400'
          }`}
        >
          Ավանդ
        </button>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-2xl rounded-tl-none shadow-xl p-10 border border-gray-50 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Inputs */}
          <div className="space-y-10">
            {/* Amount Input */}
            <div className="relative">
              <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4">
                <label className="text-gray-500 text-sm">{isVark ? 'Վարկի գումար' : 'Ներդրվող գումար'}</label>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="text-right text-xl font-bold outline-none w-1/2"
                />
              </div>
              <input type="range" min="0" max="50000000" className="absolute -bottom-1 left-0 w-full h-1 accent-[#6c24b5] appearance-none cursor-pointer" />
              <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                <span>0</span>
                <span>50 000 000</span>
              </div>
            </div>

            {/* Percent Input */}
            <div className="relative">
              <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4">
                <label className="text-gray-500 text-sm">Տարեկան տոկոսադրույք</label>
                <div className="text-xl font-bold">{percent} %</div>
              </div>
              <input type="range" min="1" max="36" value={percent} onChange={(e) => setPercent(Number(e.target.value))} className="absolute -bottom-1 left-0 w-full h-1 accent-[#6c24b5] appearance-none cursor-pointer" />
              <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                <span>1%</span>
                <span>36%</span>
              </div>
            </div>

            {/* Duration Input */}
            <div className="relative">
              <div className="flex justify-between items-center border border-gray-200 rounded-xl p-4">
                <label className="text-gray-500 text-sm">{isVark ? 'Ժամկետ' : 'Ավանդի ժամկետ'}</label>
                <div className="text-xl font-bold">{duration} {isVark ? 'ամիս' : 'օր'}</div>
              </div>
              <input type="range" min={isVark ? 1 : 91} max={isVark ? 1200 : 1095} value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="absolute -bottom-1 left-0 w-full h-1 accent-[#6c24b5] appearance-none cursor-pointer" />
              <div className="flex justify-between text-[10px] text-gray-400 mt-2">
                <span>{isVark ? '1 ամիս' : '91 օր'}</span>
                <span>{isVark ? '1200 ամիս' : '1095 օր'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Calculations / Options */}
          <div className="flex flex-col justify-between">
            {isVark ? (
              /* Վարկի համար նախատեսված աջ մաս */
              <div className="space-y-8">
                <div className="text-gray-500 text-sm mb-4">Մարման ձև</div>
                <div className="flex gap-12">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="type" checked={repaymentType === 'spring'} onChange={() => setRepaymentType('spring')} className="w-5 h-5 accent-[#6c24b5]" />
                    <span className="font-bold">Զսպանակաձև</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="type" checked={repaymentType === 'annuity'} onChange={() => setRepaymentType('annuity')} className="w-5 h-5 accent-[#6c24b5]" />
                    <span className="font-bold">Անուիտետ</span>
                  </label>
                </div>
              </div>
            ) : (
              /* Ավանդի համար նախատեսված աջ մաս */
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-3 flex justify-between items-end">
                  <span className="text-xs text-gray-500 max-w-[200px]">Օրական կտրվածքով հաշվարկվող տոկոսագումար *</span>
                  <span className="text-xl font-bold">0</span>
                </div>
                <div className="border-b border-gray-100 pb-3 flex justify-between items-end">
                  <span className="text-xs text-gray-500 max-w-[200px]">Ավանդային պայմանագրի ընթացքում հաշվարկվող ընդհանուր տոկոսային եկամուտ</span>
                  <span className="text-xl font-bold">0</span>
                </div>
                <div className="border-b border-gray-100 pb-3 flex justify-between items-end">
                  <span className="text-xs text-gray-500 max-w-[200px]">Ավանդային պայմանագրի ընթացքում ավանդատուին փաստացի վճարվող զուտ տոկոսային եկամուտ</span>
                  <span className="text-xl font-bold">0</span>
                </div>
                <p className="text-[10px] text-gray-400">
                  Ներդրված ավանդի դիմաց ստացվող տոկոսագումարները հարկվում են` 10% եկամտային հարկի չափով
                </p>
              </div>
            )}

            <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
              <p className="text-[11px] text-gray-400 leading-tight max-w-[400px]">
                Բոլոր հաշվարկները կրում են մոտավոր բնույթ և չեն հանդիսանում հրապարակային առաջարկ:
              </p>
              {isVark && (
                <button className="bg-[#6c24b5] hover:bg-[#5a1e96] text-white px-16 py-3.5 rounded-full font-bold transition-all shadow-lg active:scale-95">
                  Հաշվել
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;