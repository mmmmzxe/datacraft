'use client';

import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = (platform: string) => {
    let url = '';
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    switch (platform) {
      case 'LinkedIn':
        // LinkedIn relies on meta tags for previews. On localhost it won't show a preview.
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'Twitter':
        // Twitter allows pre-filling the tweet with both text and a URL
        url = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case 'Facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'Copy Link':
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        return;
      default:
        return;
    }

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {['LinkedIn', 'Twitter', 'Facebook', 'Copy Link'].map((platform) => (
        <button
          key={platform}
          onClick={() => handleShare(platform)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
            platform === 'Copy Link' && copied
              ? 'bg-[#5A4DE5] border-[#5A4DE5] text-white shadow-lg shadow-[#5A4DE5]/20'
              : 'border-slate-200 text-slate-500 hover:border-[#11113F] hover:text-[#11113F] bg-white'
          }`}
        >
          {platform === 'Copy Link' ? (
             <>
               <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
               </svg>
               {copied ? 'Copied!' : 'Copy Link'}
             </>
          ) : (
            platform
          )}
        </button>
      ))}
    </div>
  );
}
