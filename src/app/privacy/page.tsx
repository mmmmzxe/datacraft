import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — How We Protect Your Data",
  description: "Learn about how DataCraft Academy collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-[#11113F] mb-10">Privacy Policy</h1>
          <div className="prose prose-slate prose-lg">
            <p className="text-slate-600 mb-6 leading-relaxed">Last Updated: February 2025</p>
            <p className="text-slate-600 mb-6 leading-relaxed">At DataCraft Academy, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
            
            <h2 className="text-2xl font-bold text-[#11113F] mt-10 mb-6">1. Information We Collect</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">We collect information you provide directly to us, such as when you enroll in a course, sign up for our newsletter, or contact us for support.</p>
            
            <h2 className="text-2xl font-bold text-[#11113F] mt-10 mb-6">2. Use of Information</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">We use the information we collect to provide, maintain, and improve our services, communicate with you, and process transactions.</p>
            
            <h2 className="text-2xl font-bold text-[#11113F] mt-10 mb-6">3. Data Protection</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
