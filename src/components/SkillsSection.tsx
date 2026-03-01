'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { courses, courseLevels } from '@/data/courses';

export default function SkillsSection() {
  const [activeLevel, setActiveLevel] = useState(courseLevels[0].id);

  const filteredCourses = courses.filter((course) => course.level.toLowerCase() === activeLevel);

  return (
    <section className="px-8 py-24 bg-white relative overflow-hidden" id="courses">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#85ECFC]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#5A4DE5]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#5A4DE5] text-sm font-extrabold uppercase tracking-[0.2em] mb-4 block">Learning Path</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#11113F] mb-6 leading-tight">
            Comprehensive <span className="bg-clip-text text-transparent bg-linear-to-r from-[#85ECFC] to-[#5A4DE5]">Curriculum</span>
          </h2>
          <p className="text-[#11113F]/60 text-lg max-w-3xl mx-auto leading-relaxed">
            Our multi-level learning path is designed to take you from foundational concepts to architecting complex, production-ready data infrastructures.
          </p>
        </div>

        {/* Level Tabs */}
        <div className="flex justify-center mb-16 px-4">
          <div className="flex flex-col sm:inline-flex sm:flex-row p-1.5 bg-[#F7F8FA] rounded-2xl border border-[#E5E7EB] shadow-sm w-full max-w-xl sm:w-auto">
            {courseLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setActiveLevel(level.id)}
                className={`relative px-4 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeLevel === level.id
                    ? 'bg-white text-[#11113F] shadow-md ring-1 ring-black/5'
                    : 'text-[#11113F]/40 hover:text-[#11113F]/70'
                }`}
              >
                <span className="flex items-center justify-center sm:justify-start">
                  {level.name}
                  {level.status === 'coming-soon' && (
                    <span className="ml-2 py-0.5 px-2 bg-[#5A4DE5]/10 text-[#5A4DE5] text-[9px] sm:text-[10px] uppercase tracking-wider rounded-md">
                      Soon
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        {activeLevel === 'beginner' ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className="group relative flex flex-col bg-white border border-[#E5E7EB]/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-1.5"
              >
                {/* Image / Icon container */}
                <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3 bg-slate-900 shadow-inner group-hover:shadow-2xl transition-all duration-500">
                   {course.image ? (
                     <Image
                       src={course.image}
                       alt={course.title}
                       fill
                       className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                     />
                   ) : (
                     <div className="w-full h-full bg-[#11113F] flex items-center justify-center">
                       <span className="text-[#85ECFC] text-4xl opacity-20 font-black uppercase text-center px-4 leading-none">
                         {course.title.split(' ')[0]}
                       </span>
                     </div>
                   )}
                   <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent z-10" />
                   <div className="absolute top-4 right-4 z-20">
                      <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-[#11113F] uppercase tracking-tighter shadow-sm">
                        {course.duration}
                      </div>
                   </div>
                </div>

                <div className="px-4 pb-6 flex flex-col grow">
                 
                  
                  <h3 className="font-extrabold text-[#11113F] text-lg mb-2 group-hover:text-[#5A4DE5] transition-colors leading-tight min-h-[56px] flex items-center">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 mb-6 grow line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-black text-[#5A4DE5] uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Module
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-[#F7F8FA] rounded-3xl border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
               <svg className="w-10 h-10 text-[#5A4DE5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#11113F] mb-4">{activeLevel === 'intermediate' ? 'Intermediate' : 'Advanced'} Level is Under Construction</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Our advanced curriculum is being finalized by industry experts. Join our waiting list to be notified as soon as it drops.
            </p>
           
          </div>
        )}

        {/* Graduation Outcome Banner */}
        {activeLevel === 'beginner' && (
          <div className="mt-20 p-8 md:p-12 bg-[#11113F] rounded-[40px] relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#5A4DE5]/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-[#85ECFC]/20 text-[#85ECFC] text-xs font-black uppercase tracking-[0.2em] rounded-full border border-[#85ECFC]/30 mb-8">
                Graduation Outcome
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                From Enthusiast to <br />
                <span className="text-[#85ECFC]">Junior DE Associate</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Upon completion of the Beginner Track, graduates will have partitioned from data enthusiasts to Junior Data Engineering Associates with a comprehensive 'Full-Stack Foundation'.
              </p>
              <Link href="/programs" className="inline-flex items-center gap-2 text-white font-bold hover:text-[#85ECFC] transition-colors group">
                Review Program Details
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
               {[
                 { title: "Architectural Literacy", desc: "Design ERDs and Kimball Dimensional Models." },
                 { title: "Programmatic Automation", desc: "Master Python, SQL, and Bash for ETL." },
                 { title: "Cloud Infrastructure", desc: "Proficiency in BigQuery, GCS, and GCE." },
                 { title: "Engineering Best Practices", desc: "Git, Linux Admin, and Networking." }
               ].map((item, idx) => (
                 <div key={idx} className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-colors">
                   <h4 className="text-white font-bold text-sm mb-2">{item.title}</h4>
                   <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
