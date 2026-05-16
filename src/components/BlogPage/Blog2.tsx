import React, { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../lib/firebase'; // Համոզվիր, որ firebase.ts ֆայլի path-ը ճիշտ է

// Տվյալների տիպերի սահմանում
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
  // --- States Firebase-ից տվյալների համար ---
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // --- Տվյալների ստացում բազայից ---
  useEffect(() => {
    const blogRef = ref(db, 'blogPosts');

    const unsubscribe = onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postsArray: BlogPost[] = Array.isArray(data)
          ? data.filter(item => item !== null)
          : Object.keys(data).map(key => ({ ...data[key] }));
        
        setPosts(postsArray);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase-ից բլոգների ստացման սխալ:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Գլխավոր և կողմնակի պոստերի առանձնացում
  const mainPost = posts.find(p => p.isMain);
  const sidePosts = posts.filter(p => !p.isMain);

  // --- Բեռնման էկրան ---
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-[#6c24b5] font-bold text-base sm:text-lg bg-white p-4 text-center">
        Բլոգները բեռնվում են...
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-10 md:py-20 px-4 md:px-10 lg:px-20 font-sans overflow-hidden antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Հետնաֆոնային տեքստ (Responsive չափսերով) */}
        <div className="relative h-12 sm:h-20 md:h-24 mb-6 sm:mb-8 md:mb-4 select-none">
          <h2 className="text-[44px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-black text-gray-50 absolute -top-4 sm:-top-8 md:-top-10 -left-1 sm:-left-4 whitespace-nowrap opacity-70 tracking-tight">
            Բաց մի թող
          </h2>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-gray-500 py-10 text-sm sm:text-base">Բլոգներ չեն գտնվել:</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative z-10">
            
            {/* Ձախ կողմ. Մեծ քարտը (5 սյունակ desktop-ում, 1 սյունակ mobile-ում) */}
            {mainPost && (
              <div className="lg:col-span-5 group cursor-pointer flex flex-col">
                <div className="relative mb-5 sm:mb-8 overflow-hidden rounded-sm bg-gray-50">
                  <img 
                    src={mainPost.imageUrl} 
                    alt={mainPost.title} 
                    className="w-full h-[260px] sm:h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 sm:h-5 bg-[#6c24b5]" />
                    <span className="text-xs sm:text-sm font-extrabold text-[#1a1a1a] uppercase tracking-wider">
                      {mainPost.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight group-hover:text-[#6c24b5] transition-colors">
                    {mainPost.title}
                  </h3>
                  {mainPost.description && (
                    <p className="text-[#555] text-xs sm:text-[15px] leading-relaxed max-w-lg text-justify sm:text-left">
                      {mainPost.description}
                    </p>
                  )}
                  <span className="block text-gray-400 text-[10px] sm:text-xs font-bold pt-1 tracking-wide">{mainPost.date}</span>
                </div>
              </div>
            )}

            {/* Աջ կողմ. Փոքր քարտերի ցանցը (7 սյունակ desktop-ում, 1-2 սյունակ mobile/tablet-ում) */}
            <div className={`lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-10 sm:gap-y-14 ${!mainPost ? 'lg:col-span-12' : ''}`}>
              {sidePosts.map((post) => (
                <div key={post.id} className="flex flex-col group cursor-pointer justify-between">
                  <div>
                    <div className="overflow-hidden rounded-sm mb-4 aspect-[16/10] bg-gray-50">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-3.5 bg-[#6c24b5]" />
                        <span className="text-[10px] sm:text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">
                          {post.category}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-[15px] font-black text-[#1a1a1a] leading-snug sm:line-clamp-2 h-auto sm:h-10 group-hover:text-[#6c24b5] transition-colors">
                        {post.title}
                      </h4>
                    </div>
                  </div>
                  <span className="block text-gray-400 text-[10px] sm:text-[11px] font-bold pt-2 tracking-wide">{post.date}</span>
                </div>
              ))}
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

export default InvestBlogGrid;