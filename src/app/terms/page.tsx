import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Our Rules & Policies",
  description: "Read the terms and conditions for enrolling in and using DataCraft Academy services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-[#11113F] mb-10">Terms of Service</h1>
          <div className="prose prose-slate prose-lg">
            <p className="text-slate-600 mb-6 leading-relaxed">Last Updated: February 2025</p>
            <p className="text-slate-600 mb-6 leading-relaxed">By accessing or using DataCraft Academy, you agree to be bound by these Terms of Service.</p>
            
            <h2 className="text-2xl font-bold text-[#11113F] mt-10 mb-6">1. Enrollment and Fees</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">Fees for our courses are subject to change. Enrollment is only confirmed upon full payment or successful processing of an agreed-upon payment plan.</p>
            
            <h2 className="text-2xl font-bold text-[#11113F] mt-10 mb-6">2. Content Ownership</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">All course materials, videos, and documentation are the property of DataCraft Academy and are provided for individual use only. They may not be shared, reproduced, or used commercially without express permission.</p>
            
            <h2 className="text-2xl font-bold text-[#11113F] mt-10 mb-6">3. Use of Service</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">You agree not to use our services for any unlawful purpose or in any way that interrupts our service to other members.</p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
