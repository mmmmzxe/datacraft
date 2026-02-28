'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#11113F] overflow-hidden px-6 py-20 lg:py-0">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5A4DE5]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#85ECFC]/10 rounded-full blur-[100px]" />
        {/* Abstract Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(133,236,252,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(133,236,252,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-[#85ECFC]/20 rounded-full px-5 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#85ECFC] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#85ECFC]">Professional Data Training · 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-8">
            Build the <br />
            <span className="bg-linear-to-r from-[#85ECFC] to-[#5A4DE5] bg-clip-text text-transparent">Infrastructure</span> <br />
            of Tomorrow
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            A specialized academy designed to transform enthusiasts into world-class <span className="text-white font-bold">Data Engineers</span> through rigorous hands-on training.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link 
              href="/courses" 
              className="w-full sm:w-auto px-10 py-5 bg-linear-to-r from-[#85ECFC] to-[#5A4DE5] text-[#11113F] font-black uppercase tracking-widest text-xs rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-[#5A4DE5]/20"
            >
              Start Learning
            </Link>
            <Link 
              href="/programs" 
              className="w-full sm:w-auto px-10 py-5 border-2 border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-white/5 transition-all"
            >
              Explore Tracks
            </Link>
          </div>

          {/* Stats in Hero */}
          <div className="flex flex-wrap gap-12 mt-16 pt-10 border-t border-white/5 w-full">
            <div>
              <div className="text-3xl font-black text-white">03</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Difficulty Levels</div>
            </div>
            <div>
              <div className="text-3xl font-black text-[#85ECFC]">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Project Based</div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">2025</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Established</div>
            </div>
          </div>
        </div>

        {/* Right Content - Main Hero Image */}
        <div className="relative order-first lg:order-last">
           <div className="relative aspect-square w-full max-w-[600px] mx-auto group">
              {/* Glow effect around image */}
              <div className="absolute -inset-4 bg-linear-to-r from-[#85ECFC] to-[#5A4DE5] rounded-[60px] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
              
              <div className="relative w-full h-full rounded-[60px] overflow-hidden border border-white/10 shadow-3xl bg-[#11113F]">
                <Image
                  src="/assets/hero-main.png"
                  alt="Data Engineering Future"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-[10s] opacity-90"
                  priority
                />
                
                {/* Floating Elements on Image */}
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-[#11113F]/80 backdrop-blur-xl rounded-3xl border border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl relative overflow-hidden bg-linear-to-br from-[#85ECFC] to-[#5A4DE5] p-[2px]">
                         <div className="w-full h-full rounded-2xl bg-[#11113F] relative overflow-hidden">
                            <Image
                              src="/assets/2.png"
                              alt="Lead Instructor"
                              fill
                              className="object-cover"
                            />
                         </div>
                      </div>
                      <div>
                         <p className="text-white text-sm font-black uppercase tracking-widest">Master Big Data</p>
                         <p className="text-white/40 text-[10px] font-bold">Industry Standard Curriculum</p>
                      </div>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
