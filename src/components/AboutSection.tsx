
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative bg-white px-6 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#85ECFC]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5A4DE5]/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-[#5A4DE5] text-sm font-semibold uppercase tracking-[0.15em] mb-4 block">
              About DataCraft Academy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#11113F] mb-6 leading-tight">
              Transforming Careers in{' '}
              <span className="text-gradient">Data Engineering</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              DataCraft Academy is a hands-on training academy dedicated to transforming students, fresh graduates, and career shifters into professional Data Engineers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We offer a structured <strong className="text-[#11113F]">3-level track</strong> — Beginner, Intermediate, and Advanced — designed to help you master data engineering from the ground up. Currently, we&apos;re running our Beginner Level, covering all the essential foundations and tools used by real-world data engineers.
            </p>

            {/* Our Approach */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-[#11113F] mb-4">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#85ECFC]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#5A4DE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#11113F] text-sm">Real-world projects & business-driven scenarios</h4>
                    <p className="text-gray-500 text-sm mt-1">Work on actual data engineering challenges that mirror industry demands.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#85ECFC]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#5A4DE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#11113F] text-sm">Interactive labs, quizzes, assignments & live mentorship</h4>
                    <p className="text-gray-500 text-sm mt-1">Get guided support with hands-on practice and feedback from expert mentors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#85ECFC]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#5A4DE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#11113F] text-sm">Emphasis on both tools and engineering mindset</h4>
                    <p className="text-gray-500 text-sm mt-1">Master the technical stack alongside the problem-solving skills that set engineers apart.</p>
                  </div>
                </div>
              </div>
            </div>
        
          </div>

          {/* Right - Visual */}
          <div className="flex flex-col items-center gap-8">
          
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-[#85ECFC]/20 to-[#5A4DE5]/20 rounded-3xl blur-2xl scale-110" />
              <div className="relative bg-[#11113F] rounded-3xl p-10 shadow-2xl">
                <Image
                  src="/images/logo-light.png"
                  alt="DataCraft Academy Logo"
                  width={220}
                  height={220}
                  className="w-56 h-56"
                />
              </div>
              
            </div>
{/* Company Info */}
<div className="mb-10 grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-3">
  <div className="bg-[#F7F8FA] rounded-xl p-5 border border-[#11113F]/5">
    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">
      Industry
    </h4>
    <p className="font-semibold text-sm text-[#11113F]">
      Professional Training & Coaching
    </p>
  </div>

  

  

  <div className="bg-[#F7F8FA] rounded-xl p-5 border border-[#11113F]/5">
    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-1">
      Learning Track
    </h4>
    <p className="font-semibold text-sm text-[#11113F]">
      Beginner · Intermediate · Advanced
    </p>
  </div>
</div>
      

        
              
      </div>
        </div>

        {/* Bottom tagline */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-[#11113F]/5 rounded-full px-8 py-4">
            <span className="w-2 h-2 rounded-full bg-[#85ECFC]" />
            <p className="text-[#11113F] font-medium text-sm">
              Whether you&apos;re just starting or shifting into tech, DataCraft Academy gives you the <strong>skills, tools, and confidence</strong> to launch your career in Data Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
