import Image from 'next/image';
import Abdo from "@/app/assets/abdo.jpg";
import Mena from "@/app/assets/mena.jpg";
import Fatma from "@/app/assets/fatma.jpg";
import Hosni from "@/app/assets/hosni.png";
import type { StaticImageData } from 'next/image';

const instructors: {
  id: number;
  name: string;
  role: string;
  bio: string | string[];
  specialties: string[];
  image: string | StaticImageData;
  linkedin: string;
  courses: number;
  students: number;
}[] = [
  {
    id: 1,
    name: 'Abdelrahman Etman',
    role: 'Big Data Engineer & Lead Instructor',
    bio: [
      'Machine Learning Engineer turned Big Data Engineer.',
      'ITI Data Management Track graduate (Intake 44).',
      'Previously Data & Analytics Engineer at EJADA,',
      'now Big Data Engineer at BBI.',
      'Passionate about mentoring the next generation of data professionals.'
    ],
    specialties: ['Big Data', 'Data Pipelines', 'Machine Learning', 'Analytics'],
    image: Abdo,
    linkedin: 'https://www.linkedin.com/in/abdelrahman-ahmed11?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    courses: 5,
    students: 1200,
  },
  {
    id: 2,
    name: 'Hosni Mohamed',
    role: 'Data Engineer & Instructor',
    bio: [
      'Big Data Engineer @ Ejada (Sept 2022- Dec 2025)',
      'Senior Data Engineer @ Protagona (Jan 2026 - Present)'
    ],
    specialties: ['Big Data', 'Data Engineering', 'Cloud Platforms'],
    image: Hosni,
    linkedin: 'https://www.linkedin.com/in/hosniadel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    courses: 3,
    students: 750,
  },
  {
    id: 3,
    name: 'Mennatallah Mamdouh',
    role: 'Data Engineer & Instructor',
    bio: [
      'ITI Data Management Track Graduate (Intake 44).',
      'Data Engineer at VOIS.',
      'Part-time Technology Instructor.'
    ],
    specialties: ['Data Engineering', 'ETL', 'Python', 'Teaching'],
    image: Mena,
    linkedin: 'https://www.linkedin.com/in/mennamamdouh',
    courses: 4,
    students: 950,
  },
  {
    id: 4,
    name: 'Fatma Mohamed',
    role: 'Data Engineer & Instructor',
    bio: [
      'Computer Science Graduate (Class of 2025)',
      'NTI AWS Cloud Trainee (2024)',
      'Data Engineer @ Bussma (Present)'
    ],
    specialties: ['AWS', 'GCP', 'Terraform', 'Docker'],
    image: Fatma,
    linkedin: 'https://eg.linkedin.com/in/fatma-mohamed100',
    courses: 3,
    students: 800,
  },
];

export default function InstructorsSection() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-[#5A4DE5] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
            Our Instructors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#11113F] mb-3">
            Learn from Industry Experts
          </h2>
          <p className="text-[#11113F]/50 text-base max-w-2xl mx-auto">
            Our instructors are experienced data engineers and technologists who bring real-world expertise into every lesson. A small, dedicated team of 2-10 professionals passionate about data engineering education.
          </p>
        </div>

        {/* Instructor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden flex justify-center items-center">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  width={120}
                  height={120}
                  className="rounded-full border-4 justify-center flex border-[#85ECFC] shadow-md object-cover w-28 h-28 mx-auto group-hover:scale-105 transition-transform duration-500"
                  priority={instructor.id === 1}
                />
               
                {/* LinkedIn icon */}
                <a
                  href={instructor.linkedin}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#11113F] mb-0.5">
                  {instructor.name}
                </h3>
                <p className="text-sm font-medium text-[#5A4DE5] mb-3">
                  {instructor.role}
                </p>
                <p className="text-sm text-[#11113F]/50 leading-relaxed mb-4 whitespace-pre-line">
                  {Array.isArray(instructor.bio)
                    ? instructor.bio.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          {idx !== instructor.bio.length - 1 && <br />}
                        </span>
                      ))
                    : instructor.bio}
                </p>

                {/* Specialties */}
            

                {/* Stats */}
                <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#85ECFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <span className="text-xs text-[#11113F]/50">{instructor.courses} courses</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#85ECFC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-xs text-[#11113F]/50">{instructor.students}+ students</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
