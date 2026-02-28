import Header from "@/components/Header";
import InstructorsSection from "@/components/InstructorsSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instructors — Meet Our Expert Team",
  description:
    "Meet the DataCraft Academy team — experienced data engineers and technologists passionate about mentoring students, graduates, and career shifters into professional Data Engineers.",
  alternates: { canonical: "/instructors" },
  openGraph: {
    title: "Our Instructors | DataCraft Academy",
    description:
      "Industry professionals mentoring the next generation of data engineers through hands-on projects and live mentorship.",
    url: "https://datacraft.sh/instructors",
    images: ["/images/cover-banner.jpg"],
  },
};

export default function InstructorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-[#11113F] px-6 pt-30 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#85ECFC] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
            Meet the Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Instructors
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Industry professionals and experienced engineers who are passionate about teaching and mentoring the next generation of data engineers.
          </p>
        </div>
      </section>

      <InstructorsSection />
      <Footer />
    </main>
  );
}
