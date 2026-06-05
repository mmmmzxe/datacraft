"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import type { Metadata } from "next";

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
      "Data Build Tool (dbt)",
      "Docker & Containerization",
      "Airflow (Data Orchestration)",
      "CI/CD for Data Platforms",
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

export default function ProgramsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any>(null);
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
          whichLevel: selectedProgram?.level,
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

  const openPopup = (program: any) => {
    setSelectedProgram(program);
    setIsPopupOpen(true);
  };
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
            A structured 3-level track designed to help you master data
            engineering from the ground up. Currently running our Beginner
            Level.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.level}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-[#5A4DE5]/8 transition-all"
              >
                {/* Header Gradient */}
                <div className={`bg-gradient-to-r ${program.color} p-6`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-white">
                      {program.level}
                    </h3>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        program.status === "Now Running"
                          ? "bg-white text-[#5A4DE5]"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {program.status}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{program.duration}</p>
                  {/* Show price for Beginner Level */}
                  {program.level === "Beginner" && (
                    <p className="text-white/80 text-xs mt-1">
                      Price:{" "}
                      <span className="font-bold">{program.price} EGP</span>
                    </p>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-[#11113F]/60 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <h4 className="text-sm font-semibold text-[#11113F] mb-3">
                    What you&apos;ll learn:
                  </h4>
                  <ul className="space-y-2.5 mb-6">
                    {program.modules.map((mod) => (
                      <li
                        key={mod}
                        className="flex items-start gap-2 text-sm text-[#11113F]/60"
                      >
                        <svg
                          className="w-4 h-4 text-[#5A4DE5] mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {mod}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openPopup(program)}
                    className={`block w-full text-center font-semibold py-3 rounded-lg text-sm transition-colors ${
                      program.status === "Now Running"
                        ? "bg-[#5A4DE5] text-white hover:bg-[#4a3dd4]"
                        : "border-2 border-gray-200 text-[#11113F]/40 cursor-not-allowed"
                    }`}
                  >
                    {program.status === "Now Running"
                      ? "Enroll Now"
                      : "Notify Me"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-100 p-4">
          <div className="bg-white rounded-[32px] p-8 md:p-10 max-w-md w-full relative shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-[#11113F] p-2 hover:bg-gray-100 rounded-full transition-all"
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

            <h3 className="text-3xl font-black text-[#11113F] mb-2 tracking-tight">
            {selectedProgram?.status === "Now Running"
                      ? "Enroll Now"
                      : "Notify Me"}
            </h3>
            <p className="text-[#11113F]/60 mb-8 font-medium">
              Program:{" "}
              <span className="font-bold text-[#5A4DE5]">{selectedProgram?.level}</span>
            </p>

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
                        placeholder="First Name"
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
                        placeholder="Last Name"
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
      )}

      <Footer />
    </main>
  );
}
