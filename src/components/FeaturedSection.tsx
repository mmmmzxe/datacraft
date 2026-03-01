'use client';

import Image from 'next/image';
import { useState } from 'react';
import m from "@/app/assets/m.png"
import k from "@/app/assets/k.png"
import b from "@/app/assets/b.png"

const outcomes = [
  {
    index: "01",
    title: "Database Design & Theory",
    outcome: "Students will transition from flat-file data management to relational systems. They will be able to translate complex business requirement documents into optimized Entity-Relationship Diagrams (ERDs).",
    skill: "Implementing Normalization to ensure data integrity and leveraging Indexing strategies to optimize query performance in production environments."
  },
  {
    index: "02",
    title: "Structured Query Language (SQL) Mastery",
    outcome: "Students will achieve full fluency in SQL, moving from basic CRUD operations to advanced analytical queries.",
    skill: "Writing high-performance queries that utilize window functions, complex joins, and CTEs (Common Table Expressions) to extract actionable insights from raw data."
  },
  {
    index: "03",
    title: "Data Warehouse (DWH) & Modeling",
    outcome: "Students will be able to architect a scalable analytical environment. They will master Kimball Dimensional Modeling, including the design of Fact and Dimension tables derived from business logic.",
    skill: "Designing ETL/ELT workflows that incorporate Change Data Capture (CDC) and fundamental Data Governance practices to ensure 'single source of truth' reliability."
  },
  {
    index: "04",
    title: "Python for Data Engineering",
    outcome: "Students will develop the programming foundation necessary to automate data movement. They will go beyond basic syntax to build functional data scripts.",
    skill: "Programmatically interacting with the data ecosystem by using Pandas for transformation, connecting to Relational Databases, and consuming data from REST APIs."
  }
];

const infrastructureOutcomes = [
  {
    index: "05",
    title: "Linux & Bash Scripting",
    outcome: "Students will transition from being GUI-dependent to command-line proficient. They will be able to manage remote servers, handle file permissions, and automate repetitive system tasks.",
    skill: "Writing Bash scripts to automate data ingestion tasks, monitor system resources, and manage cron jobs for scheduled data pipelines."
  },
  {
    index: "06",
    title: "Networking Basics",
    outcome: "Students will understand what a network is, why it is important, and the different types and shapes of networks, as well as the difference between a network and the Internet. They will learn about network layers, IP addresses, MAC addresses, and common protocols.",
    skill: "Mastering IP addressing, DNS, and SSH, as well as understanding the role of Firewalls and Load Balancers in maintaining high-availability data infrastructure."
  },
  {
    index: "07",
    title: "Introduction to Git & GitHub",
    outcome: "Students will adopt professional software engineering best practices for data projects. They will be able to collaborate in teams without code conflicts and maintain a history of all changes.",
    skill: "Utilizing Branching, Merging, and Pull Requests to manage code versioning, and using GitHub as a central repository for CI/CD (Continuous Integration/Continuous Deployment) foundations."
  },
  {
    index: "08",
    title: "Google Cloud Platform (GCP)",
    outcome: "Students will move from local computing to scalable cloud environments. They will be able to provision and manage the essential cloud resources required for modern data stacks.",
    skill: "Deploying and configuring Compute Engine (VMs) for hosting scripts, Cloud Storage (GCS) for data lakes, and BigQuery for serverless data warehousing."
  }
];

export default function FeaturedSection() {
  const [activeTab, setActiveTab] = useState('core');

  return (
    <section className="py-32 px-6 bg-white overflow-hidden" id="certificates">
      <div className="max-w-7xl mx-auto">
        
        {/* Certification Section */}
        <div className="mb-32 text-center">
          <span className="text-[#5A4DE5] text-sm font-black uppercase flex tracking-[0.3em] mb-4 justify-center items-center">Industry Recognition <img className="w-10 " src="/assets/certificate3.png" alt="" /></span>
          <h2 className="text-4xl md:text-6xl font-black text-[#11113F] mb-12">
            Get <span className="bg-linear-to-r from-[#85ECFC] to-[#5A4DE5] bg-clip-text text-transparent">Professional</span> Recognition
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4">
               <Image 
                 src={b} 
                 alt="Beginner Certificate" 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-linear-to-t from-[#11113F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                
               </div>
            </div>
            <div className="group relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 md:translate-y-8">
               <Image 
                 src={m} 
                 alt="Intermediate Certificate" 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-linear-to-t from-[#11113F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                
               </div>
            </div>
            <div className="group relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4">
               <Image 
                 src={k} 
                 alt="Advanced Certificate" 
                 fill 
                 className="object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-linear-to-t from-[#11113F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                
               </div>
            </div>
          </div>
        </div>

   

        {/* Outcomes Tabs Section */}
        <div className="">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#5A4DE5] text-sm font-black uppercase tracking-widest mb-4 block">Learning Outcomes</span>
              <h3 className="text-3xl md:text-5xl font-black text-[#11113F]">Professional Outcomes</h3>
            </div>
            <p className="text-slate-500 max-w-sm text-sm font-medium">
              Every course is engineered to deliver specific business results and technical mastery.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 p-1 rounded-2xl">
              <button
                onClick={() => setActiveTab('core')}
                className={`px-8 py-3 rounded-xl font-black text-sm transition-all ${
                  activeTab === 'core'
                    ? 'bg-[#11113F] text-white shadow-lg'
                    : 'text-[#11113F]/60 hover:text-[#11113F]'
                }`}
              >
                Core Engineering
              </button>
              <button
                onClick={() => setActiveTab('infrastructure')}
                className={`px-8 py-3 rounded-xl font-black text-sm transition-all ${
                  activeTab === 'infrastructure'
                    ? 'bg-[#5A4DE5] text-white shadow-lg'
                    : 'text-[#11113F]/60 hover:text-[#11113F]'
                }`}
              >
                Infrastructure & Cloud
              </button>
            </div>
          </div>

          {/* Tab Content */}
          {activeTab === 'core' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((item, i) => (
                <div key={i} className="group p-8 rounded-[40px] bg-[#F7F8FA] border border-slate-100 hover:bg-[#11113F] transition-all duration-500">
                  <div className="text-4xl font-black text-[#11113F]/10 group-hover:text-white/10 mb-6 transition-colors">
                    {item.index}
                  </div>
                  <h4 className="text-lg font-black text-[#11113F] group-hover:text-white mb-4 transition-colors">
                    {item.title}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#5A4DE5] group-hover:text-[#85ECFC] block mb-1">Outcome</span>
                      <p className="text-slate-500 group-hover:text-white/60 text-xs leading-relaxed">
                        {item.outcome}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#5A4DE5] group-hover:text-[#85ECFC] block mb-1">Key Skill</span>
                      <p className="text-[#11113F] group-hover:text-white text-xs font-bold leading-relaxed">
                        {item.skill}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'infrastructure' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {infrastructureOutcomes.map((item, i) => (
                <div key={i} className="group p-8 rounded-[40px] bg-[#F7F8FA] border border-slate-100 hover:bg-[#5A4DE5] transition-all duration-500">
                  <div className="text-4xl font-black text-[#11113F]/10 group-hover:text-white/10 mb-6 transition-colors">
                    {item.index}
                  </div>
                  <h4 className="text-lg font-black text-[#11113F] group-hover:text-white mb-4 transition-colors">
                    {item.title}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#5A4DE5] group-hover:text-[#85ECFC] block mb-1">Outcome</span>
                      <p className="text-slate-500 group-hover:text-white/60 text-xs leading-relaxed">
                        {item.outcome}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#5A4DE5] group-hover:text-[#85ECFC] block mb-1">Key Skill</span>
                      <p className="text-[#11113F] group-hover:text-white text-xs font-bold leading-relaxed">
                        {item.skill}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

    

      </div>
    </section>
  );
}
