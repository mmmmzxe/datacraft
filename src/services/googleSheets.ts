export interface TestimonialData {
  id: number;
  studentName: string;
  review: string;
  courseName: string;
  rating: number; 
  studentTitle: string; 
  studentImage: string;
  date: string;
}

export async function fetchTestimonials(): Promise<TestimonialData[]> {
  try {
    const response = await fetch('/api/testimonials', { cache: 'no-store' });
    if (!response.ok) throw new Error('API fetch failed');
    return await response.json();
  } catch (error) {
    console.error('Error in fetchTestimonials from API:', error);
    return [];
  }
}
