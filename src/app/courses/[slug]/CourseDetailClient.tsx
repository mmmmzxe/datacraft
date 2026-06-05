"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Course } from "@/data/courses";

interface CourseDetailClientProps {
  course: Course;
}

const programs = [
  {
    level: "Beginner",
    status: "Now Running",
    color: "from-[#85ECFC] to-[#5A4DE5]",
    duration: "4–4.5 months",
    price: "5500",
    description:
      "Master all beginner data engineering essentials in 4–4.5 months. Includes hands-on labs, mentorship, and real projects. Intermediate level will start very soon!",
    modules: [
      "Databases Concepts",
      "Structured Query Language (SQL)",
      "Data Warehouse & ETL Concepts",
      "Linux & Bash Scripting",
      "Networking Basics",
      "Introduction to Git & GitHub",
      "Python Programming Language",
      "Google Cloud Platform (GCP)",
    ],
  },
  {
    level: "Intermediate",
    status: "Now Running",
    color: "from-[#5A4DE5] to-[#3b2281]",
    duration: "4 months",
    description:
      "Advance your skills with cloud platforms, Apache Spark, streaming data, and production-grade pipeline design. Enrollment is open for the Intermediate track — join now to level up your data engineering practice.",
    modules: [
      "Advanced SQL Tuning",
      "MongoDB",
      "Data Build Tool (dbt)",
      "Docker & Containerization",
      "Airflow (Data Orchestration)",
      "CI/CD for Data Platforms (GitHub Actions)",
      "Infrastructure as Code (Terraform)",
      "Capstone Project",
    ],
    learningOutcomes: [
      {
        title: "Advanced SQL Tuning",
        outcome:
          "Students will master the internal mechanics of database engines to optimize query performance at scale, moving from functional queries to engineering high-performance analytical workloads.",
        keySkill:
          "Analyzing execution plans and indexing strategies to eliminate performance bottlenecks and reduce cloud data warehouse costs in production.",
      },
      {
        title: "Analytics Engineering (dbt)",
        outcome:
          "Students will adopt the ELT paradigm using dbt to transform raw data into production-ready assets while applying software engineering rigor (version control, testing, modular design).",
        keySkill:
          "Building modular, documented data models using Jinja and macros to maintain a reliable single source of truth across the Medallion architecture.",
      },
      {
        title: "Docker for Data Engineers",
        outcome:
          "Students will achieve environment reproducibility by containerizing data applications and deploying portable, isolated stacks that run consistently across infrastructure.",
        keySkill:
          "Orchestrating multi-container environments with Docker Compose for Spark, databases, and custom Python services.",
      },
      {
        title: "Infrastructure as Code (Terraform)",
        outcome:
          "Students will provision cloud data platforms programmatically, eliminating manual configuration via version-controlled infrastructure definitions.",
        keySkill:
          "Managing cloud state and modular infrastructure to deploy auditable, scalable data architectures quickly.",
      },
      {
        title: "CI/CD for Data Platforms",
        outcome:
          "Students will automate the deployment lifecycle so every code change is tested and validated before reaching production.",
        keySkill:
          "Implementing GitHub Actions and automated workflows to trigger data quality checks and seamless deployments with minimal downtime.",
      },
      {
        title: "Data Orchestration (Airflow)",
        outcome:
          "Students will architect resilient data pipelines using Apache Airflow, mastering programmatic scheduling and advanced failure handling.",
        keySkill:
          "Designing advanced DAGs and custom operators to integrate Spark jobs, dbt models, and cloud services into unified workflows.",
      },
    ],
  },
  {
    level: "Advanced",
    status: "Coming Soon",
    color: "from-[#3b2281] to-[#11113F]",
    duration: "4 months",
    description:
      "Master advanced topics like real-time data processing, machine learning pipelines, and data governance.",
    modules: [
      "Introduction to Distributed System",
      "Apache Hadoop",
      "Apache Hive",
      "Apache Spark",
      "Apache Kafka",
      "Table Formats (Iceberg)",
    ],
  },
];

export default function CourseDetailClient({
  course,
}: CourseDetailClientProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/submit-enrollment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          whichLevel: `${course.level} Level - ${course.title}`,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || "Failed to submit");
      }

      setSubmitStatus("success");
      setTimeout(() => {
        setIsPopupOpen(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error: any) {
      console.error("Submission error:", error);
      setErrorMessage(
        error.message || "Something went wrong. Please try again.",
      );
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <Link
                  href="/"
                  className="hover:text-[#85ECFC] transition-colors"
                >
                  Home
                </Link>
                <span className="w-1 h-1 rounded-full bg-[#85ECFC]/30"></span>
                <Link
                  href="/courses"
                  className="hover:text-[#85ECFC] transition-colors"
                >
                  Courses
                </Link>
                <span className="w-1 h-1 rounded-full bg-[#85ECFC]/30"></span>
                <span className="text-white uppercase tracking-widest text-[10px] font-black">
                  {course.title}
                </span>
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
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-black">
                      Certificate
                    </div>
                    <div className="text-white font-bold">Included</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#85ECFC]">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-black">
                      Level
                    </div>
                    <div className="text-white font-bold">{course.level}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <div className="bg-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A4DE5]/5 rounded-bl-[100px]" />
                <h3 className="text-2xl font-black text-[#11113F] mb-8">
                  Professional Outcome
                </h3>
                <div className="space-y-8 mb-10">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#5A4DE5] mb-2 block">
                      Professional &quot;Can-Do&quot; Statement
                    </span>
                    <p className="text-[#11113F] font-bold text-lg italic leading-relaxed">
                      &quot;{course.professionalStatement}&quot;
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#5A4DE5] mb-2 block">
                      Key Mastered Skill
                    </span>
                    <p className="text-[#11113F]/70 text-sm font-medium leading-relaxed">
                      {course.keySkill}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full py-5 bg-[#11113F] text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-[#5A4DE5] transition-all transform hover:scale-[1.02] shadow-xl shadow-[#11113F]/10"
                >
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
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#85ECFC] to-[#5A4DE5]">
                Achieve
              </span>
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
              <h3 className="text-2xl font-black text-[#11113F] mb-8">
                Curriculum Highlights
              </h3>
              <ul className="space-y-6">
                {[
                  "Theoretical foundations and mental models",
                  "Hands-on lab environments for practice",
                  "Real-world business case studies",
                  "Performance optimization strategies",
                  "Production-grade implementation patterns",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#5A4DE5]/10 flex items-center justify-center shrink-0 mt-1">
                      <svg
                        className="w-3 h-3 text-[#5A4DE5]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={4}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-[#11113F]/70 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-[#11113F] rounded-[40px] text-white">
              <h3 className="text-2xl font-black mb-6">Prerequisites</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                This is a module in our <strong>Beginner Track</strong>. While
                no prior experience in Data Engineering is required, basic
                computer literacy is essential.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#85ECFC]" />
                  <span className="text-sm font-bold">
                    Positive mindset & Curiosity
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#85ECFC]" />
                  <span className="text-sm font-bold">
                    Willingness to learn by failing
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#85ECFC]" />
                  <span className="text-sm font-bold">
                    System with 8GB+ RAM recommended
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduation Banner */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-20 bg-[#F7F8FA] border border-slate-200 rounded-[60px] relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#85ECFC] via-[#5A4DE5] to-[#85ECFC]" />
            <span className="text-[#5A4DE5] text-xs font-black uppercase tracking-[0.3em] mb-8 block">
              Next Steps
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-[#11113F] mb-8 leading-tight">
              Ready to take the <br />
              <span className="text-[#5A4DE5]">Next Level?</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-12">
              Our intermediate and advanced modules are designed to bridge the
              gap between foundations and professional expertise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/courses"
                className="px-10 py-5 bg-[#11113F] text-white font-bold rounded-2xl hover:bg-[#5A4DE5] transition-all shadow-xl shadow-[#11113F]/10"
              >
                Explore All Modules
              </Link>
              <Link
                href="/contact"
                className="px-10 py-5 border-2 border-[#11113F]/10 text-[#11113F] font-bold rounded-2xl hover:border-[#11113F] transition-all"
              >
                Speak with an Advisor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-100 p-4">
          <div className="bg-white rounded-[32px] p-8 md:p-10 max-w-4xl w-full relative shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#11113F] p-2 hover:bg-gray-100 rounded-full transition-all z-10"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Programs Overview Header */}
            <div className="text-center mb-12">
              <span className="text-[#5A4DE5] text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">
                Complete Training Programs
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#11113F] mb-6 leading-tight">
                Data Engineering <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#85ECFC] to-[#5A4DE5]">
                  Mastery Path
                </span>
              </h2>
              <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
                From foundations to advanced expertise. Choose your starting
                point and build a complete data engineering skillset.
              </p>
            </div>
            {/* Current Program Plan */}
            {(() => {
              const currentProgram = programs.find(
                (program) => program.level === course.level,
              );
              if (!currentProgram) return null;

              return (
                <div className="max-w-xl mx-auto mb-12">
                  <div className="relative group">
                    {/* Status Badge */}
                    <div className="absolute -top-3 left-6 z-10">
                      <span
                        className={`px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-full border-2 border-white shadow-lg ${
                          currentProgram.status === "Now Running"
                            ? "bg-green-500 text-white"
                            : "bg-orange-500 text-white"
                        }`}
                      >
                        {currentProgram.status}
                      </span>
                    </div>

                    {/* Program Card */}
                    <div className="bg-white border-2 border-gray-100 rounded-[32px] p-10 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] relative overflow-hidden group">
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${currentProgram.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-[32px]`}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                          <h3 className="text-4xl font-black text-[#11113F] mb-4 md:mb-0">
                            {currentProgram.level} Track Program
                          </h3>
                          <div className="text-center md:text-right">
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                              Program Duration
                            </div>
                            <div className="text-2xl font-bold text-[#11113F]">
                              {currentProgram.duration}
                            </div>
                          </div>
                        </div>

                        {/* Price Display */}
                        {currentProgram.price && (
                          <div className="mb-8 p-6 bg-gradient-to-r from-[#F7F8FA] to-white rounded-2xl border border-gray-100">
                            <div className="text-center">
                              <div className="text-[10px] font-black uppercase tracking-widest text-[#5A4DE5] mb-3">
                                Complete Program Investment
                              </div>
                              <div className="flex items-baseline justify-center gap-2">
                                <span className="text-5xl font-black text-[#11113F]">
                                  {currentProgram.price}
                                </span>
                                <span className="text-2xl font-bold text-slate-500">
                                  EGP
                                </span>
                              </div>
                              <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mt-2">
                                Flexible payment plans available
                              </div>
                            </div>
                          </div>
                        )}

                        <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium text-center max-w-3xl mx-auto">
                          {currentProgram.description}
                        </p>

                        {/* Modules Grid */}
                        <div className="mb-10">
                          <h4 className="text-xl font-black uppercase tracking-widest text-[#5A4DE5] mb-6 text-center">
                            Complete Curriculum
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentProgram.modules.map(
                              (module, moduleIndex) => (
                                <div
                                  key={moduleIndex}
                                  className="flex items-center gap-4 p-4 bg-[#F7F8FA] rounded-2xl border border-gray-100"
                                >
                                  <div className="w-3 h-3 rounded-full bg-[#5A4DE5] shrink-0" />
                                  <span className="text-sm font-bold text-[#11113F]/90">
                                    {module}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        </div>

                        {/* Action Button */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
            {/* Current Course Enrollment Section */}
            <div className="border-t  border-gray-100 pt-12">
              {/* Right Side: Form */}
              <div className="  w-full ">
                {submitStatus === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mb-6 animate-bounce">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-black text-[#11113F] mb-2">
                      Awesome!
                    </h4>
                    <p className="text-slate-500 font-medium">
                      Your enrollment was submitted. We&apos;ll be in touch very
                      soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-100 rounded-2xl p-4 mb-4 text-xs text-red-700 font-medium flex gap-3">
                        <svg
                          className="w-4 h-4 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-[#11113F]/40 mb-1.5 ml-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Maryem"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A4DE5] focus:bg-white transition-all text-sm font-medium"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-[#11113F]/40 mb-1.5 ml-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Mostafa"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A4DE5] focus:bg-white transition-all text-sm font-medium"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-[#11113F]/40 mb-1.5 ml-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A4DE5] focus:bg-white transition-all text-sm font-medium"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-[#11113F]/40 mb-1.5 ml-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="01xxxxxxxxx"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5A4DE5] focus:bg-white transition-all text-sm font-medium"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-black uppercase tracking-[0.2em] text-[10px] py-4 rounded-xl bg-[#11113F] text-white hover:bg-[#5A4DE5] shadow-lg shadow-[#11113F]/10 transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-3 w-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        "Secure My Spot"
                      )}
                    </button>
                    <p className="text-center text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-4">
                      Limited seats available for March cohort
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
