import React from 'react';
import { FileText, Download, ChevronRight } from 'lucide-react';

// Առանձին բաղադրիչ յուրաքանչյուր ֆայլի համար
const DocumentItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="group flex items-center justify-between w-full max-w-[800px] bg-[#F9F5FF] hover:bg-[#F2EAFF] cursor-pointer p-4 rounded-xl mb-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
      
      {/* Ձախ հատված՝ Պատկերակ + Տեքստ */}
      <div className="flex items-center min-w-0 flex-1 mr-3">
        {/* Icon Stack (Փաստաթուղթ + Ներբեռնման սլաք) */}
        <div className="relative mr-4 flex-shrink-0 select-none">
          <div className="text-[#8B3DFF]">
            <FileText size={26} strokeWidth={1.5} />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-[#8B3DFF] rounded-full p-0.5 border-2 border-white shadow-sm">
            <Download size={10} className="text-white" strokeWidth={3} />
          </div>
        </div>
        
        {/* Տեքստ՝ break-words դասով մոբայլում սիրուն տողադարձ անելու համար */}
        <span className="text-gray-900 font-bold text-[14px] sm:text-[15px] block break-words flex-1 leading-snug group-hover:text-[#6c24b5] transition-colors">
          {title}
        </span>
      </div>

      {/* Աջ հատված՝ Լրացուցիչ UX սլաք, որը շարժվում է hover-ի ժամանակ */}
      <div className="text-[#8B3DFF] opacity-40 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 flex-shrink-0 pl-1">
        <ChevronRight size={18} strokeWidth={2.5} />
      </div>

    </div>
  );
};

const DocumentsCentered: React.FC = () => {
  const docs = [
    "Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025",
    "SWIFT Transfers",
    "SWIFT переводы в РФ"
  ];

  return (
    // Այս div-ը ապահովում է կենտրոնացումը էկրանի մեջտեղում և ադապտիվ padding է տալիս մոբայլին
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 sm:p-8">
      <div className="w-full max-w-[800px]">
        
        {/* Վերնագիր */}
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-5 sm:mb-6 tracking-tight">
          Փաստաթղթեր
        </h2>

        {/* Ցանկ */}
        <div className="flex flex-col w-full">
          {docs.map((doc, index) => (
            <DocumentItem key={index} title={doc} />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default DocumentsCentered;