import React from 'react';

const AccountsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Մանուշակագույն Ենթամենյու */}
      <div className="bg-[#6c24b5] w-full py-3 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-wrap gap-6 text-white text-[13px] font-medium">
          <span className="border-b-2 border-white pb-1 cursor-pointer">Հաշիվների բացում և սպասարկում</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Առավելագույն մնացորդի հաշիվներ</span>
          <span className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">Ոչ ռեզիդենտ հաճախորդների հեռահար սպասարկում</span>
        </div>
      </div>

      {/* Breadcrumbs & Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[12px] text-gray-400 mb-8">
          <span className="hover:text-gray-600 cursor-pointer">🏠</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Անհատ</span>
          <span>›</span>
          <span className="hover:text-gray-600 cursor-pointer">Հաշիվներ</span>
          <span>›</span>
          <span className="text-[#6c24b5]">Հաշիվների բացում և սպասարկում</span>
        </nav>

        {/* Banner Section */}
        <div className="relative flex flex-col lg:flex-row items-stretch bg-[#f8f5fb] rounded-[40px] overflow-hidden min-h-[400px]">
          {/* Տեքստային հատված */}
          <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center">
            <h1 className="text-[36px] lg:text-[42px] font-black text-gray-900 leading-tight mb-6">
              Հաշիվների բացում և <br /> սպասարկում
            </h1>
            <p className="text-[15px] text-gray-600 leading-relaxed max-w-[450px]">
              Առաջարկում ենք բացել դրամային և արտարժութային <span className="text-[#6c24b5] font-semibold">ընթացիկ բանկային հաշիվներ</span>, որոնց սպասարկումն իրականացնում ենք մեր <span className="text-[#6c24b5] font-semibold cursor-pointer underline">սակագների</span> համաձայն: Մեզ մոտ հաշիվներ կարող են բացել Հայաստանի ռեզիդենտ և ոչ ռեզիդենտ ֆիզիկական անձինք:
            </p>
          </div>

          {/* Նկարի հատված */}
          <div className="flex-1 relative min-h-[300px]">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg" 
              alt="Evoca Office Interior"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Ներքևի տեքստային հատված (Description) */}
        <div className="mt-16 max-w-[900px] mx-auto text-center">
          <p className="text-[14px] text-gray-700 leading-[1.8] font-medium">
            Մեր և ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <span className="uppercase font-bold">Համալիր բանկային ծառայությունների մատուցման պայմաններով</span>, որը հրապարակային առաջարկ (օֆերտա) է և ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ <span className="text-[#6c24b5] underline cursor-pointer">այստեղ</span>:
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountsPage;