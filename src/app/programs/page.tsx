import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs — Beginner to Advanced Tracks",
  description:
    "DataCraft Academy’s structured 3-level track — Beginner (now running), Intermediate, and Advanced — designed to take you from zero to professional Data Engineer.",
  alternates: { canonical: "/programs" },
  openGraph: {
    title: "Data Engineering Programs | DataCraft Academy",
    description:
      "Structured 3-level tracks from Beginner to Advanced. Currently running our Beginner Level with hands-on labs, mentorship, and real projects.",
    url: "https://datacraft.sh/programs",
    images: ["/images/cover-banner.jpg"],
  },
};

const programs = [
  {
    level: 'Beginner',
    status: 'Now Running',
    color: 'from-[#85ECFC] to-[#5A4DE5]',
    duration: '4–4.5 months',
    price: '5500',
    description: 'Master all beginner data engineering essentials in 4–4.5 months. Includes hands-on labs, mentorship, and real projects. Intermediate level will start very soon!',
    modules: [
      'Databases Concepts',
      'Structured Query Language (SQL)',
      'Data Warehouse & ETL Concepts',
      'Linux & Bash Scripting',
      'Networking Basics',
      'Introduction to Git & GitHub',
      'Python Programming Language',
      'Google Cloud Platform (GCP)'
    ],
  },
  {
    level: 'Intermediate',
    status: 'Coming Soon',
    color: 'from-[#5A4DE5] to-[#3b2281]',
    duration: '4 months',
    description: 'Advance your skills with cloud platforms, Apache Spark, streaming data, and production-grade pipeline design.',
    modules: ['Apache Spark & Big Data', 'Cloud Data Engineering (AWS/GCP)', 'Apache Kafka & Streaming', 'Data Warehousing & Lakehouse', 'CI/CD for Data Pipelines'],
  },

];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-[#11113F] px-6 pt-30 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#85ECFC] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
            Learning Tracks
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Structured Programs
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A structured 3-level track designed to help you master data engineering from the ground up. Currently running our Beginner Level.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.level}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#5A4DE5]/8 transition-all"
              >
                {/* Header Gradient */}
                <div className={`bg-gradient-to-r ${program.color} p-6`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">{program.level}</h3>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      program.status === 'Now Running'
                        ? 'bg-white text-[#5A4DE5]'
                        : 'bg-white/20 text-white'
                    }`}>
                      {program.status}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{program.duration}</p>
                  {/* Show price for Beginner Level */}
                  {program.level === 'Beginner' && (
                    <p className="text-white/80 text-xs mt-1">Price: <span className="font-bold">{program.price} EGP</span></p>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-[#11113F]/60 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <h4 className="text-sm font-semibold text-[#11113F] mb-3">What you&apos;ll learn:</h4>
                  <ul className="space-y-2.5 mb-6">
                    {program.modules.map((mod) => (
                      <li key={mod} className="flex items-start gap-2 text-sm text-[#11113F]/60">
                        <svg className="w-4 h-4 text-[#5A4DE5] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {mod}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={program.status === 'Now Running' ? "/contact" : "#"} 
                    className={`block w-full text-center font-semibold py-3 rounded-lg text-sm transition-colors ${
                      program.status === 'Now Running'
                        ? 'bg-[#5A4DE5] text-white hover:bg-[#4a3dd4]'
                        : 'border-2 border-gray-200 text-[#11113F]/40 cursor-not-allowed'
                    }`}
                  >
                    {program.status === 'Now Running' ? 'Enroll Now' : 'Notify Me'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
