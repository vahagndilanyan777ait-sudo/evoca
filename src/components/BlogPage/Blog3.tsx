import React from 'react';

// 1. Տվյալների տիպերի սահմանում
interface BestArticle {
  id: number;
  category: string;
  title: string;
  date?: string;
  imageUrl: string;
  description?: string;
  isMain?: boolean;
}

const BestSection: React.FC = () => {
  // 2. Տվյալները (ըստ պատկերի)
  const articles: BestArticle[] = [
    {
      id: 1,
      category: "Կենսակերպ",
      title: "Ամանորի քո Evocaգույն երազանքը",
      description: "Ավելի հաճելի է նվեր նվիրե՞լ, թե՞ ստանալ։ Ինչպե՞ս երազանք պահել Ամանորի գիշերը։ Ո՞րն է ամենաօրիգինալ նվերի տարբերակը։ Բոլոր պատասխանները կգտնես բլոգում։",
      date: "21.12.2023",
      imageUrl: "https://www.evoca.am/images-cache/blogs/1/1703162335976/780x585.png", // Փոխարինիր իրական հղումով
      isMain: true
    },
    {
      id: 2,
      category: "Կենսակերպ",
      title: "2021-ը դարձել է կինո պրեմիերաների մրցավազք",
      imageUrl: "https://www.evoca.am/images-cache/blogs/1/16329119822114/438x328.jpg"
    },
    {
      id: 3,
      category: "Կենսակերպ",
      title: "2021-ի ամենասպասված 21 սերիալները",
      imageUrl: "https://www.evoca.am/images-cache/blogs/1/16329974590876/438x328.png"
    },
    {
      id: 4,
      category: "Կենսակերպ",
      title: "Ապագայի ամենապահանջված մասնագիտությունները",
      imageUrl: "https://www.evoca.am/images-cache/blogs/1/16335957379/438x328.png"
    }
  ];

  const mainItem = articles.find(a => a.isMain);
  const bottomItems = articles.filter(a => !a.isMain);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Հետնաֆոնային տեքստ "Լավագույն" */}
        <div className="relative mb-8">
          <h2 className="text-[60px] md:text-[100px] font-black text-gray-100 absolute -top-12 left-0 select-none z-0">
            Լավագույն
          </h2>
        </div>

        {/* ԳԼԽԱՎՈՐ ԲԼՈԿ (Banner) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10 mb-20">
          {/* Նկարը սև դեկորատիվ անկյուններով */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-8 border-r-8 border-[#1a1a1a] z-10" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-8 border-r-8 border-[#1a1a1a] z-10" />
            <div className="overflow-hidden rounded-sm">
              <img 
                src={mainItem?.imageUrl} 
                alt="Main Article" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Տեքստային մասը */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-[#2d004d] rounded-sm" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                {mainItem?.category}
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-[#1a1a1a] leading-tight">
              {mainItem?.title}
            </h3>
            <p className="text-[#555] text-[16px] leading-relaxed max-w-md font-medium">
              {mainItem?.description}
            </p>
            <div className="text-gray-300 text-sm font-bold">
              {mainItem?.date}
            </div>
          </div>
        </div>

        {/* ՍՏՈՐԻՆ ՑԱՆՑ (Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {bottomItems.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-5 aspect-video shadow-md">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-0.5 h-3 bg-[#6c24b5]" />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>
                <h4 className="text-[14px] font-extrabold text-[#1a1a1a] leading-snug line-clamp-2 h-10 group-hover:text-[#6c24b5] transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BestSection;