'use client';

import { useState, useEffect, useRef } from 'react';
import { fetchTestimonials, TestimonialData } from '@/services/googleSheets';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3 h-3 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CourseReviewsSection() {
  const [reviews, setReviews] = useState<TestimonialData[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mounted = true;
    const getReviews = async () => {
      try {
        setLoading(true);
        const data = await fetchTestimonials();
        if (mounted) {
          setReviews(data);
        }
      } catch (err) {
        console.error('Testimonials component fetch failed:', err);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    getReviews();
    return () => { mounted = false; };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="px-6 py-20 bg-slate-50/50 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-[10px] font-black text-[#5A4DE5] uppercase tracking-[0.2em] mb-2 block">Success Stories</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#11113F]">Our Students <span className="text-[#5A4DE5]">Reviews</span></h2>
          </div>
          
          <div className="hidden md:flex gap-2">
             <button onClick={() => scroll('left')} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#11113F] hover:bg-slate-50 active:scale-95 transition-all">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
             </button>
             <button onClick={() => scroll('right')} className="w-10 h-10 rounded-xl bg-[#5A4DE5] flex items-center justify-center text-white hover:bg-[#4a3dd4] active:scale-95 transition-all shadow-lg shadow-[#5A4DE5]/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
             </button>
          </div>
        </div>

        {loading ? (
          <div className="flex gap-4 overflow-hidden">
             {[1, 2, 3].map((i) => (
               <div key={i} className="min-w-[300px] h-[300px] rounded-3xl bg-white animate-pulse border border-slate-100" />
             ))}
          </div>
        ) : (
          <div className="relative">
            {/* Scroll Container with NO OVERFLOW VISIBLE SCROLLBAR */}
            <div 
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
              style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
            >
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-[90vw] md:min-w-[420px] snap-center p-6 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-6">
                    <StarRating rating={review.rating} />
                    <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{review.date}</span>
                  </div>

                  <p className="text-[#11113F] text-sm md:text-base font-medium leading-relaxed mb-8 grow line-clamp-6">
                    &quot;{review.review}&quot;
                  </p>

                  <div className="flex items-center gap-3 pt-6 border-t border-slate-50">
                    <div className="w-10 h-10 rounded-xl relative overflow-hidden bg-slate-100">
                      <img src={review.studentImage} alt={review.studentName} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black text-[#11113F] uppercase tracking-tight">{review.studentName}</h4>
                      <p className="text-[9px] font-bold text-[#5A4DE5] uppercase tracking-widest mt-0.5">
                        {review.studentTitle} · {review.courseName}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
