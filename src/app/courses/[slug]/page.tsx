import { courses } from '@/data/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import CourseDetailClient from './CourseDetailClient';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  
  if (!course) return { title: 'Course Not Found' };

  return {
    title: course.title,
    description: course.description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: {
      title: `${course.title} | Data Engineering Module`,
      description: course.description,
      url: `https://datacraft.sh/courses/${course.slug}`,
      images: [{ url: course.image || "/images/cover-banner.jpg" }],
    },
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
