import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Engineering Blog",
  description:
    "Explore the DataCraft Academy blog for deep dives into data engineering, cloud infrastructure, analytics best practices, and student success stories.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Data Engineering Blog | DataCraft Academy",
    description: "Expert insights on building scalable data systems and modern engineering trends.",
    url: "https://datacraft.sh/blog",
    images: ["/images/cover-banner.jpg"],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* Blog Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#11113F]">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-[#5A4DE5]/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full bg-[#85ECFC]/10 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="text-white">DataCraft</span>{' '}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-[#85ECFC] to-[#5A4DE5]">
              Insights
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Deep dives into data engineering, analytics, and infrastructure. 
            Stay updated with the latest trends and best practices.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#11113F]/80 backdrop-blur-md text-[#85ECFC] text-xs font-bold rounded-full uppercase tracking-wider border border-[#85ECFC]/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow">
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-[#11113F] mb-4 group-hover:text-[#5A4DE5] transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-[#5A4DE5] font-bold text-sm">
                    Read More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
