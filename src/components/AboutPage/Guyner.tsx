import React from 'react';

// 1. Տվյալների տիպի սահմանում
interface ColorInfo {
  id: number;
  colorHex: string;
  borderColor?: string;
  description: string;
}

// 2. Գույների տվյալները
const corporateColors: ColorInfo[] = [
  {
    id: 1,
    colorHex: '#FFFFFF',
    borderColor: '#E5E7EB', // Բաց մոխրագույն շրջանակ սպիտակի համար
    description: 'Սպիտակը խորհրդանշում է նորը:'
  },
  {
    id: 2,
    colorHex: '#7D7D7D',
    description: 'Մոխրագույնը խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:'
  },
  {
    id: 3,
    colorHex: '#6c24b5',
    description: 'Մանուշակագույնը երիտասարդության, ստեղծարարության և նորարարության գույնն է:'
  }
];

const CorporateColorsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-24 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Վերնագիր */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] mb-4 tracking-tight">
          Բանկի կորպորատիվ գույները
        </h2>

        {/* Ենթավերնագիր */}
        <p className="text-[#4a4a4a] text-[15px] md:text-[16px] mb-10 font-medium">
          Բանկի կորպորատիվ գույներն են՝ սպիտակը, մոխրագույնը և մանուշակագույնը:
        </p>

        {/* Գույների բացատրության քարտ */}
        <div className="bg-[#fcfcfd] border border-gray-100 rounded-xl p-8 md:p-10 shadow-sm mb-16">
          <div className="space-y-8">
            {corporateColors.map((color) => (
              <div key={color.id} className="flex items-center gap-6">
                {/* Գունային շրջանակ */}
                <div 
                  className="w-8 h-8 rounded-full flex-shrink-0 shadow-sm"
                  style={{ 
                    backgroundColor: color.colorHex,
                    border: color.borderColor ? `1px solid ${color.borderColor}` : 'none'
                  }}
                />
                {/* Նկարագրություն */}
                <p className="text-[#333] text-[14px] md:text-[15px] font-semibold leading-relaxed">
                  {color.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Video Embed Section */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl group">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Փոխարինիր իրական վիդեոյի ID-ով
            title="Evocabank Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          
          {/* Custom Overlay (Optional - եթե ուզում ես նկարի տեսքը պահել մինչև միացնելը) */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default CorporateColorsSection;