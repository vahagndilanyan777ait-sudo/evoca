import React from 'react';

// 1. Տվյալների տիպերի սահմանում
interface BlogPost {
  id: number;
  category: string;
  title: string;
  date: string;
  imageUrl: string;
  description?: string;
  isMain?: boolean;
}

const InvestBlogGrid: React.FC = () => {
  // 2. Տվյալները (ըստ պատկերի)
  const posts: BlogPost[] = [
    {
      id: 1,
      category: "Ներդրումներ",
      title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
      description: "Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար առաջնային անհրաժեշտ գործիքներից օգտվելու քայլերը:",
      date: "17.06.2024",
      imageUrl: "https://www.evoca.am/images-cache/blogs/1/17186317173483/616x462.jpg", // Փոխարինիր իրական հղումով
      isMain: true
    },
    {
      id: 2,
      category: "Ներդրումներ",
      title: "Ներդրումների կարելիներն ու չի կարելիները",
      date: "23.04.2024",
      imageUrl: "https://www.evoca.am/images-cache/blogs/1/17138737784517/450x295.jpg"
    },
    {
      id: 3,
      category: "Ներդրումներ",
      title: "Փոքր քայլերով դեպի մեծ եկամուտներ",
      date: "11.04.2024",
      imageUrl: "https://www.evoca.am/images-cache/blogs/1/17128187874533/450x295.jpg"
    },
    {
      id: 4,
      category: "Բիզնես",
      title: "Ինչպե՞ս սկսել բիզնես: Guide from A to Z",
      date: "05.01.2024",
      imageUrl: "https://www.evoca.am/images-cache/blogs/1/16691870758279/450x295.jpg"
    },
    {
      id: 5,
      category: "Կենսակերպ",
      title: "Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան",
      date: "09.02.2022",
      imageUrl: "https://www.evoca.am/images-cache/blogs/1/16443271105456/450x295.png"
    }
  ];

  const mainPost = posts.find(p => p.isMain);
  const sidePosts = posts.filter(p => !p.isMain);

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Հետնաֆոնային տեքստ */}
        <div className="relative h-24 mb-4">
          <h2 className="text-[80px] md:text-[120px] font-black text-gray-50 absolute -top-10 -left-4 select-none whitespace-nowrap opacity-60">
            Բաց մի թող
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Ձախ կողմ. Մեծ քարտը (5 սյունակ) */}
          <div className="lg:col-span-5 group cursor-pointer">
            <div className="relative mb-8">
              <img 
                src={mainPost?.imageUrl} 
                alt="Main Post" 
                className="w-full h-[400px] object-cover rounded-sm shadow-sm transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-5 bg-[#6c24b5]" />
                <span className="text-sm font-extrabold text-[#1a1a1a] uppercase tracking-wider">
                  {mainPost?.category}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight group-hover:text-[#6c24b5] transition-colors">
                {mainPost?.title}
              </h3>
              <p className="text-[#555] text-[15px] leading-relaxed max-w-lg">
                {mainPost?.description}
              </p>
              <span className="block text-gray-300 text-xs font-bold pt-2">{mainPost?.date}</span>
            </div>
          </div>

          {/* Աջ կողմ. Փոքր քարտերի ցանցը (7 սյունակ) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
            {sidePosts.map((post) => (
              <div key={post.id} className="flex flex-col group cursor-pointer">
                <div className="overflow-hidden rounded-sm mb-5 aspect-[16/10]">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-3.5 bg-[#6c24b5]" />
                    <span className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                  <h4 className="text-[15px] font-black text-[#1a1a1a] leading-snug line-clamp-2 h-10 group-hover:text-[#6c24b5] transition-colors">
                    {post.title}
                  </h4>
                  <span className="block text-gray-200 text-[11px] font-bold pt-1">{post.date}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default InvestBlogGrid;