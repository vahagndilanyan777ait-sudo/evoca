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
        // Եթե Firebase-ը տվյալները վերադարձնում է որպես օբյեկտ, վերածում ենք զանգվածի
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
      <div className="w-full h-[600px] flex justify-center items-center text-[#6c24b5] font-bold text-lg bg-white">
        Բլոգները բեռնվում են...
      </div>
    );
  }

  return (
    <section className="w-full bg-white py-20 px-4 md:px-10 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Հետնաֆոնային տեքստ */}
        <div className="relative h-24 mb-4">
          <h2 className="text-[80px] md:text-[120px] font-black text-gray-50 absolute -top-10 -left-4 select-none whitespace-nowrap opacity-60">
            Բաց մի թող
          </h2>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-gray-500 py-10">Բլոգներ չեն գտնվել:</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* Ձախ կողմ. Մեծ քարտը (5 սյունակ) */}
            {mainPost && (
              <div className="lg:col-span-5 group cursor-pointer">
                <div className="relative mb-8">
                  <img 
                    src={mainPost.imageUrl} 
                    alt={mainPost.title} 
                    className="w-full h-[400px] object-cover rounded-sm shadow-sm transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#6c24b5]" />
                    <span className="text-sm font-extrabold text-[#1a1a1a] uppercase tracking-wider">
                      {mainPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] leading-tight group-hover:text-[#6c24b5] transition-colors">
                    {mainPost.title}
                  </h3>
                  {mainPost.description && (
                    <p className="text-[#555] text-[15px] leading-relaxed max-w-lg">
                      {mainPost.description}
                    </p>
                  )}
                  <span className="block text-gray-300 text-xs font-bold pt-2">{mainPost.date}</span>
                </div>
              </div>
            )}

            {/* Աջ կողմ. Փոքր քարտերի ցանցը (7 սյունակ) */}
            <div className={`lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 ${!mainPost ? 'lg:col-span-12' : ''}`}>
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
        )}
      </div>
    </section>
  );
};

export default InvestBlogGrid;