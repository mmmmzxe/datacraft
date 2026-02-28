import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogs } from '@/data/blogs';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import LOGO from '@/app/assets/3.png';
import type { Metadata } from 'next';
import ShareButtons from '@/components/ShareButtons';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);
  
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://datacraft.sh/blog/${post.slug}`,
      type: 'article',
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Simple Markdown-to-JSX renderer (basic)
  const renderMarkdown = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl md:text-5xl font-extrabold text-[#11113F] mb-8 mt-12">{line.replace('# ', '')}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl md:text-3xl font-bold text-[#11113F] mb-6 mt-10">{line.replace('## ', '')}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl md:text-2xl font-bold text-[#11113F] mb-4 mt-8">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="text-slate-600 mb-2 ml-6 list-disc leading-relaxed text-lg">{line.replace('- ', '')}</li>;
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="text-[#11113F] font-bold mb-4 text-lg">{line.replace(/\*\*/g, '')}</p>;
      }
      if (line.trim() === '') {
        return <div key={index} className="h-4" />;
      }
      return <p key={index} className="text-slate-600 mb-6 leading-relaxed text-lg">{line}</p>;
    });
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <article className="pt-30 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#5A4DE5] transition-colors">Home</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <Link href="/blog" className="hover:text-[#5A4DE5] transition-colors">Blog</Link>
            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
            <span className="text-[#11113F] truncate">{post.title}</span>
          </nav>

          {/* Title Area */}
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-[#85ECFC]/20 text-[#11113F] text-xs font-bold rounded-full uppercase tracking-wider mb-6 border border-[#85ECFC]/30">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#11113F] leading-[1.1] mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 py-8 border-y border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full relative overflow-hidden border-2 border-[#85ECFC]/20">
                   <Image
                     src={LOGO}
                     alt="Author"
                     fill
                     className="object-cover"
                   />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#11113F]">{post.author}</div>
                  <div className="text-xs text-slate-500">Expert Instructor</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                5 min read
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Area */}
          <div className="max-w-7xl mx-auto prose prose-slate prose-lg">
            {renderMarkdown(post.content)}
          </div>



          {/* Article Footer */}
          <footer className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-[#11113F]">Share this post:</span>
              <ShareButtons title={post.title} />
            </div>
            
            <Link href="/blog" className="flex items-center text-[#5A4DE5] font-bold gap-2 group">
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </footer>
        </div>
      </article>

    

      <Footer />
    </main>
  );
}
