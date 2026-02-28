import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Our Mission & Story",
  description:
    "DataCraft Academy is a hands-on training academy founded in 2025, dedicated to transforming students, fresh graduates, and career shifters into professional Data Engineers through structured programs and live mentorship.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About DataCraft Academy",
    description:
      "Founded 2025. A hands-on training academy transforming beginners into professional Data Engineers with real-world projects, interactive labs, and live mentorship.",
    url: "https://datacraft.sh/about",
    images: ["/images/cover-banner.jpg"],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-[#11113F] px-6 pt-30 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#85ECFC] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            DataCraft Academy
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A hands-on training academy dedicated to transforming students, fresh graduates, and career shifters into professional Data Engineers. Founded 2025.
          </p>
        </div>
      </section>

      <AboutSection />

      {/* Mission & Vision */}
      <section className="px-6 py-20 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="text-[#5A4DE5] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">Our Mission</span>
              <h3 className="text-2xl font-bold text-[#11113F] mb-4">Empowering Future Data Engineers</h3>
              <p className="text-[#11113F]/50 leading-relaxed">
                We provide structured, hands-on training with real-world projects and business-driven scenarios. Our programs combine interactive labs, quizzes, assignments, and live mentorship with an emphasis on both tools and engineering mindset.
              </p>
            </div>
            <div>
              <span className="text-[#5A4DE5] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">Our Vision</span>
              <h3 className="text-2xl font-bold text-[#11113F] mb-4">Building a Data-Driven Future</h3>
              <p className="text-[#11113F]/50 leading-relaxed">
                Whether you&apos;re just starting or shifting into tech, DataCraft Academy gives you the skills, tools, and confidence to launch your career in Data Engineering. We envision a world where anyone can access high-quality data engineering education.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <p className="text-3xl font-bold text-[#5A4DE5]">2025</p>
              <p className="text-sm text-[#11113F]/40 mt-1">Founded</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <p className="text-3xl font-bold text-[#5A4DE5]">2-10</p>
              <p className="text-sm text-[#11113F]/40 mt-1">Team Members</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <p className="text-3xl font-bold text-[#5A4DE5]">500+</p>
              <p className="text-sm text-[#11113F]/40 mt-1">Students Enrolled</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl border border-gray-100">
              <p className="text-3xl font-bold text-[#5A4DE5]">3</p>
              <p className="text-sm text-[#11113F]/40 mt-1">Program Levels</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
