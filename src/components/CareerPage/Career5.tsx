import React, { useState, useRef } from 'react';
import { Mail, Globe, Paperclip, RotateCw, User, FileText, X } from 'lucide-react';

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

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Իրադարձություն դաշտերի փոփոխության համար
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Ֆայլի ընտրության կառավարում
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (e: React.MouseEvent) => {
    e.stopPropagation(); // Կանխում է նորից ֆայլ ընտրելու պատուհանի բացվելը
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    console.log("Attached CV:", selectedFile);
    // Այստեղ կատարվում է API հարցումը դեպի սերվեր
  };

  return (
    <section className="w-full bg-white py-10 sm:py-16 px-4 sm:px-6 md:px-10 font-sans antialiased">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-[#6c24b5] mb-4 sm:mb-6">
            Դառնալ թիմի անդամ
          </h2>
          <p className="text-gray-600 text-sm sm:text-[15px] leading-relaxed max-w-md mx-auto">
            Եթե ցանկանում ես միանալ <span className="text-[#6c24b5] font-bold">EvocaTEAM</span>-ին, 
            կարող ես ուղարկել դիմում՝ կցելով ինքնակենսագրականը։
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          
          {/* Անուն և Ազգանուն (Desktop-ում կողք կողքի, Մոբայլում՝ տակից) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-700 flex items-center">Անուն <span className="text-red-500 ml-1">*</span></label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  type="text" 
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:border-[#6c24b5] focus:ring-1 focus:ring-[#6c24b5] outline-none transition-all text-sm" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-700 flex items-center">Ազգանուն <span className="text-red-500 ml-1">*</span></label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  type="text" 
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:border-[#6c24b5] focus:ring-1 focus:ring-[#6c24b5] outline-none transition-all text-sm" 
                />
              </div>
            </div>
          </div>

          {/* Հեռախոսահամար և Էլ. հասցե (Կողք կողքի desktop-ում) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-700 flex items-center">Հեռախոսահամար <span className="text-red-500 ml-1">*</span></label>
              <div className="flex border border-gray-200 rounded-xl overflow-hidden focus-within:border-[#6c24b5] focus-within:ring-1 focus-within:ring-[#6c24b5] transition-all bg-white">
                <div className="flex items-center gap-1.5 px-3 bg-gray-50 border-r border-gray-200 text-xs sm:text-[13px] font-semibold text-gray-600 select-none">
                  <img src="https://flagcdn.com/w20/am.png" alt="Armenia" className="w-4 h-auto rounded-sm" />
                  <span>+374</span>
                  <span className="text-gray-400 text-[10px]">▼</span>
                </div>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  placeholder="0XX XXXXXX"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 outline-none text-sm" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-700">Էլ. հասցե</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:border-[#6c24b5] focus:ring-1 focus:ring-[#6c24b5] outline-none transition-all text-sm" 
                />
              </div>
            </div>
          </div>

          {/* Facebook Link */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Facebook սոց. կայքում անձնական էջի հղում</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="url" 
                name="facebook"
                placeholder="https://facebook.com/..."
                value={formData.facebook}
                onChange={handleInputChange}
                className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:border-[#6c24b5] focus:ring-1 focus:ring-[#6c24b5] outline-none transition-all text-sm" 
              />
            </div>
          </div>

          {/* LinkedIn Link */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">LinkedIn սոց. կայքում անձնական էջի հղում</label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
              <input 
                type="url" 
                name="linkedin"
                placeholder="https://linkedin.com/in/..."
                value={formData.linkedin}
                onChange={handleInputChange}
                className="w-full border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:border-[#6c24b5] focus:ring-1 focus:ring-[#6c24b5] outline-none transition-all text-sm" 
              />
            </div>
          </div>

          {/* Ուղեկցող նամակ */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700">Ուղեկցող նամակ</label>
            <textarea 
              name="coverLetter"
              rows={4} 
              value={formData.coverLetter}
              onChange={handleInputChange}
              className="w-full border border-gray-200 rounded-xl py-3 px-4 focus:border-[#6c24b5] focus:ring-1 focus:ring-[#6c24b5] outline-none transition-all text-sm resize-none"
            />
          </div>

          {/* Resume Upload (Իրական աշխատող ֆայլի կցում) */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-gray-700 flex items-center">Վերբեռնեք Ձեր ռեզյումեն <span className="text-red-500 ml-1">*</span></label>
            <input 
              type="file" 
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden" 
            />
            
            <div 
              onClick={triggerFileInput}
              className={`border-2 border-dashed rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
                selectedFile ? 'border-[#6c24b5] bg-purple-50/20' : 'border-gray-200 hover:border-[#6c24b5] bg-gray-50/30'
              }`}
            >
              {selectedFile ? (
                <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-sm border border-purple-100 animate-scaleUp">
                  <FileText className="text-[#6c24b5]" size={18} />
                  <span className="text-xs sm:text-sm font-medium text-gray-700 max-w-[180px] sm:max-w-[300px] truncate">{selectedFile.name}</span>
                  <button onClick={removeFile} className="text-gray-400 hover:text-red-500 p-0.5 rounded-full hover:bg-gray-100">
                    <X size={14} />
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-gray-400 text-xs sm:text-sm font-medium">Կցել ֆայլը (PDF, DOC, DOCX)</span>
                  <Paperclip className="text-gray-400 group-hover:text-[#6c24b5]" size={20} />
                </>
              )}
            </div>
          </div>

          {/* Captcha Section */}
          <div className="space-y-2 pt-2">
            <label className="text-[13px] font-bold text-gray-700 flex items-center">Ստուգման ծածկագիր <span className="text-red-500 ml-1">*</span></label>
            <div className="border border-gray-200 p-4 rounded-xl w-full sm:w-fit flex flex-col gap-3.5 bg-gray-50/30">
              <div className="flex items-center gap-3">
                <input 
                  type="text" 
                  name="captcha"
                  required
                  placeholder="Ծածկագիրը" 
                  value={formData.captcha}
                  onChange={handleInputChange}
                  className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#6c24b5] w-full sm:w-[180px] bg-white" 
                />
                <button type="button" className="p-2 text-gray-400 hover:text-[#6c24b5] transition-colors shrink-0">
                  <RotateCw className="hover:rotate-180 transition-transform duration-500" size={18} />
                </button>
              </div>
              <div className="bg-white border border-gray-100 p-3 flex items-center justify-center select-none rounded-lg shadow-inner">
                 <span className="text-xl sm:text-2xl font-black tracking-[8px] sm:tracking-[10px] text-gray-700 italic line-through decoration-gray-400/60 font-mono">
                    7KYWG6
                 </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-[#6c24b5] text-white font-bold py-3.5 sm:py-4 rounded-full hover:bg-[#5a1e96] transition-all shadow-lg hover:shadow-xl mt-6 active:scale-[0.99] text-sm sm:text-base"
          >
            Ես ուզում եմ աշխատել Evoca-ում :)
          </button>

        </form>
      </div>
    </section>
  );
};

export default CareerForm;