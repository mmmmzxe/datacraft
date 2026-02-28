import Link from 'next/image';
import { blogs } from '@/data/blogs';
import Image from 'next/image';
import NextLink from 'next/link';

export default function BlogPreviewSection() {
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] rounded-full bg-[#5A4DE5]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] rounded-full bg-[#85ECFC]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#5A4DE5] font-extrabold text-sm uppercase tracking-[0.2em] mb-4 block">Our Journal</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#11113F] leading-tight mb-6">
              Insights for the <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#85ECFC] to-[#5A4DE5]">Next Generation</span> of Engineers
            </h2>
          </div>
          <NextLink 
            href="/blog" 
            className="group flex items-center gap-3 text-[#11113F] font-bold py-3 px-8 rounded-full border-2 border-[#11113F]/10 hover:border-[#11113F] transition-all"
          >
            Browse All Articles
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NextLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs.map((post) => (
            <NextLink 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 p-4"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden rounded-2xl mb-6 shadow-inner">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[#11113F] text-[10px] font-extrabold rounded-lg uppercase tracking-wider border border-white/40 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="px-2 pb-4 flex flex-col grow">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium mb-4 uppercase tracking-widest">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-200"></span>
                  <span>{post.author}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#11113F] mb-4 group-hover:text-[#5A4DE5] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 grow line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-[#5A4DE5] font-extrabold text-xs uppercase tracking-widest gap-2">
                  Learn More
                  <div className="w-8 h-[2px] bg-[#5A4DE5]/20 group-hover:bg-[#5A4DE5] transition-colors" />
                </div>
              </div>
            </NextLink>
          ))}
        </div>
      </div>
    </section>
  );
}
