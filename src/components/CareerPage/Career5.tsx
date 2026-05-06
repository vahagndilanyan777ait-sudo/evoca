import React, { useState } from 'react';
import { Mail, Globe, Paperclip, RotateCw, User, Phone } from 'lucide-react';

const CareerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    facebook: '',
    linkedin: '',
    coverLetter: '',
    captcha: ''
  });

  return (
    <section className="w-full bg-white py-12 px-4 md:px-10 font-sans">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-[#6c24b5] mb-6">
            Դառնալ թիմի անդամ
          </h2>
          <p className="text-gray-600 text-[15px] leading-relaxed">
            Եթե ցանկանում ես միանալ <span className="text-[#6c24b5] font-bold">EvocaTEAM</span>-ին, <br />
            կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը։
          </p>
        </div>

        <form className="space-y-6">
          
          {/* Անուն */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Անուն <span className="text-red-500">*</span></label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input type="text" className="w-full border border-gray-200 rounded-md py-3 pl-10 pr-4 focus:border-[#6c24b5] outline-none transition-colors" />
            </div>
          </div>

          {/* Ազգանուն */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Ազգանուն <span className="text-red-500">*</span></label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input type="text" className="w-full border border-gray-200 rounded-md py-3 pl-10 pr-4 focus:border-[#6c24b5] outline-none transition-colors" />
            </div>
          </div>

          {/* Հեռախոսահամար */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Հեռախոսահամար <span className="text-red-500">*</span></label>
            <div className="flex border border-gray-200 rounded-md overflow-hidden focus-within:border-[#6c24b5] transition-colors">
              <div className="flex items-center gap-2 px-3 bg-gray-50 border-r border-gray-200 text-[14px]">
                <img src="https://flagcdn.com/w20/am.png" alt="Armenia" className="w-5" />
                <span>+374</span>
                <span className="text-gray-400">▾</span>
              </div>
              <input type="tel" className="w-full py-3 px-4 outline-none" />
            </div>
          </div>

          {/* Էլ. հասցե */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Էլ. հասցե</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input type="email" className="w-full border border-gray-200 rounded-md py-3 pl-10 pr-4 focus:border-[#6c24b5] outline-none transition-colors" />
            </div>
          </div>

          {/* Facebook Link */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Facebook սոց. կայքում անձնական էջի հղում</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input type="text" className="w-full border border-gray-200 rounded-md py-3 pl-10 pr-4 focus:border-[#6c24b5] outline-none transition-colors" />
            </div>
          </div>

          {/* LinkedIn Link */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">LinkedIn սոց. կայքում անձնական էջի հղում</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input type="text" className="w-full border border-gray-200 rounded-md py-3 pl-10 pr-4 focus:border-[#6c24b5] outline-none transition-colors" />
            </div>
          </div>

          {/* Ուղեկցող նամակ */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Ուղեկցող նամակ</label>
            <textarea rows={4} className="w-full border border-gray-200 rounded-md py-3 px-4 focus:border-[#6c24b5] outline-none transition-colors resize-none"></textarea>
          </div>

          {/* Resume Upload */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500">*</span></label>
            <div className="border-2 border-dashed border-gray-200 rounded-md p-8 flex flex-col items-center justify-center gap-4 hover:border-[#6c24b5] cursor-pointer transition-all bg-gray-50/30">
              <span className="text-gray-400 text-sm">Կցել ֆայլը / Ֆայլերը</span>
              <Paperclip className="text-gray-400" size={20} />
            </div>
          </div>

          {/* Captcha Section */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Ստուգման ծածկագիր <span className="text-red-500">*</span></label>
            <div className="border border-gray-200 p-4 rounded-md w-fit flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <input type="text" placeholder="Մուտքագրեք ծածկագիրը" className="border border-gray-200 rounded px-3 py-2 text-sm outline-none focus:border-[#6c24b5]" />
                <RotateCw className="text-gray-400 cursor-pointer hover:rotate-180 transition-transform duration-500" size={20} />
              </div>
              <div className="bg-gray-50 border border-gray-100 p-3 flex items-center justify-center select-none">
                 <span className="text-2xl font-bold tracking-[10px] text-gray-700 italic line-through decoration-gray-400/50">
                    7KYWG6
                 </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#6c24b5] text-white font-bold py-4 rounded-full hover:bg-[#5a1e96] transition-colors shadow-lg mt-8">
            Ես ուզում եմ աշխատել Evoca-ում :)
          </button>

        </form>
      </div>
    </section>
  );
};

export default CareerForm;