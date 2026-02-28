import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  
  if (!course) return { title: 'Course Not Found' };

  return {
    title: course.title,
    description: course.description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} | Data Engineering Module`,
      description: course.description,
      url: `https://datacraft.sh/courses/${course.slug}`,
      images: [{ url: course.image || "/images/cover-banner.jpg" }],
    },
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />

      {/* Course Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#11113F]">
        <div className="absolute top-0 right-0 w-[50%] h-full bg-[#5A4DE5]/10 -skew-x-12 transform origin-top-right whitespace-nowrap" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5">
              <nav className="flex items-center gap-2 text-sm font-medium text-[#85ECFC]/60 mb-8">
                <Link href="/" className="hover:text-[#85ECFC] transition-colors">Home</Link>
                <span className="w-1 h-1 rounded-full bg-[#85ECFC]/30"></span>
                <Link href="/courses" className="hover:text-[#85ECFC] transition-colors">Courses</Link>
                <span className="w-1 h-1 rounded-full bg-[#85ECFC]/30"></span>
                <span className="text-white uppercase tracking-widest text-[10px] font-black">{course.title}</span>
              </nav>

              <span className="inline-block px-4 py-1.5 bg-[#85ECFC]/10 text-[#85ECFC] text-xs font-black uppercase tracking-[0.2em] rounded-full border border-[#85ECFC]/20 mb-8">
                {course.level} Track • {course.category}
              </span>
              
              <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8 leading-[1.05]">
                {course.title}
              </h1>
              
              <p className="text-white/70 text-xl leading-relaxed max-w-2xl mb-12">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-8 py-8 border-y border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#85ECFC]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-black">Duration</div>
                    <div className="text-white font-bold">{course.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#85ECFC]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-black">Certificate</div>
                    <div className="text-white font-bold">Included</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#85ECFC]">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-black">Level</div>
                    <div className="text-white font-bold">{course.level}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
               <div className="bg-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A4DE5]/5 rounded-bl-[100px]" />
                  <h3 className="text-2xl font-black text-[#11113F] mb-8">Professional Outcome</h3>
                  <div className="space-y-8 mb-10">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#5A4DE5] mb-2 block">Professional &quot;Can-Do&quot; Statement</span>
                        <p className="text-[#11113F] font-bold text-lg italic leading-relaxed">
                          &quot;{course.professionalStatement}&quot;
                        </p>
                    </div>
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#5A4DE5] mb-2 block">Key Mastered Skill</span>
                        <p className="text-[#11113F]/70 text-sm font-medium leading-relaxed">
                          {course.keySkill}
                        </p>
                    </div>
                  </div>
                  <button className="w-full py-5 bg-[#11113F] text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-[#5A4DE5] transition-all transform hover:scale-[1.02] shadow-xl shadow-[#11113F]/10">
                    Enroll in Module
                  </button>
                  <p className="text-center mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Next Cohort Starts: March 15, 2026
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Sections */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[#11113F] mb-10 leading-tight">
              What you will <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#85ECFC] to-[#5A4DE5]">Achieve</span>
            </h2>
            <div className="p-10 bg-[#F7F8FA] rounded-[40px] border border-slate-100 relative overflow-hidden">
                <div className="absolute top-[-20px] left-[20px] text-[120px] font-black text-white/40 leading-none select-none">
                  01
                </div>
                <p className="relative z-10 text-xl md:text-2xl text-[#11113F]/80 leading-relaxed font-medium">
                  {course.outcome}
                </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-black text-[#11113F] mb-8">Curriculum Highlights</h3>
              <ul className="space-y-6">
                {[
                  "Theoretical foundations and mental models",
                  "Hands-on lab environments for practice",
                  "Real-world business case studies",
                  "Performance optimization strategies",
                  "Production-grade implementation patterns"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#5A4DE5]/10 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-3 h-3 text-[#5A4DE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#11113F]/70 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-[#11113F] rounded-[40px] text-white">
              <h3 className="text-2xl font-black mb-6">Prerequisites</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                This is a module in our <strong>Beginner Track</strong>. While no prior experience in Data Engineering is required, basic computer literacy is essential.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#85ECFC]" />
                  <span className="text-sm font-bold">Positive mindset & Curiosity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#85ECFC]" />
                  <span className="text-sm font-bold">Willingness to learn by failing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#85ECFC]" />
                  <span className="text-sm font-bold">System with 8GB+ RAM recommended</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduation Banner (Reused from SkillsSection/Modified) */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-20 bg-[#F7F8FA] border border-slate-200 rounded-[60px] relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#85ECFC] via-[#5A4DE5] to-[#85ECFC]" />
            <span className="text-[#5A4DE5] text-xs font-black uppercase tracking-[0.3em] mb-8 block">Next Steps</span>
            <h2 className="text-3xl md:text-6xl font-black text-[#11113F] mb-8 leading-tight">
              Ready to take the <br />
              <span className="text-[#5A4DE5]">Next Level?</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Our intermediate and advanced modules are designed to bridge the gap between foundations and professional expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/courses" className="px-10 py-5 bg-[#11113F] text-white font-bold rounded-2xl hover:bg-[#5A4DE5] transition-all shadow-xl shadow-[#11113F]/10">
                Explore All Modules
              </Link>
              <Link href="/contact" className="px-10 py-5 border-2 border-[#11113F]/10 text-[#11113F] font-bold rounded-2xl hover:border-[#11113F] transition-all">
                Speak with an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
