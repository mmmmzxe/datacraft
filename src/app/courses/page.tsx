import Header from "@/components/Header";
import SkillsSection from "@/components/SkillsSection";
import FeaturedSection from "@/components/FeaturedSection";
import CourseReviewsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses — Data Engineering Training",
  description:
    "Explore DataCraft Academy courses — SQL, Python, Apache Spark, Kafka, ETL pipelines, and cloud data engineering. Hands-on labs and real-world projects for every skill level.",
  alternates: { canonical: "/courses" },
  openGraph: {
    title: "Data Engineering Courses | DataCraft Academy",
    description:
      "Hands-on courses covering SQL, Python, Spark, Kafka, cloud platforms, and more. Learn data engineering with real-world projects.",
    url: "https://datacraft.sh/courses",
    images: ["/images/cover-banner.jpg"],
  },
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-[#11113F] px-6 pt-30 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#85ECFC] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
            Our Courses
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Master Data Engineering
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            From SQL fundamentals to cloud-scale data pipelines — structured courses designed for beginners, intermediates, and advanced learners.
          </p>
        </div>
      </section>

      <SkillsSection />
      <FeaturedSection />
      <CourseReviewsSection />
      <Footer />
    </main>
  );
}
