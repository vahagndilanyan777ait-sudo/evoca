import React from 'react';
import { FileText, Download } from 'lucide-react';

// Առանձին բաղադրիչ յուրաքանչյուր ֆայլի համար
const DocumentItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex items-center w-full max-w-[800px] bg-[#F9F5FF] hover:bg-[#F2EAFF] cursor-pointer p-4 rounded-lg mb-3 transition-colors">
      {/* Icon Stack (Փաստաթուղթ + Ներբեռնման սլաք) */}
      <div className="relative mr-4 flex-shrink-0">
        <div className="text-[#8B3DFF]">
          <FileText size={26} strokeWidth={1.5} />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-[#8B3DFF] rounded-full p-0.5 border-2 border-white">
          <Download size={10} className="text-white" strokeWidth={3} />
        </div>
      </div>
      
      {/* Տեքստ */}
      <span className="text-[#000000] font-bold text-[14px] md:text-[15px]">
        {title}
      </span>
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
    // Այս div-ը ապահովում է կենտրոնացումը էկրանի մեջտեղում
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-[800px]">
        {/* Վերնագիր */}
        <h2 className="text-2xl font-black text-[#000000] mb-6 self-start">
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