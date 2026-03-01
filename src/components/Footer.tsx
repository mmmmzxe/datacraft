import Image from 'next/image';
import Link from 'next/link';
import LOGO from "@/app/assets/2.png"

export default function Footer() {
  return (
    <footer className="bg-[#11113F] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Image
                src={LOGO}
                alt="DataCraft Academy"
                width={50}
                height={50}
                className="w-20 h-20"
              />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-extrabold tracking-wide">
                  <span className="text-[#85ECFC]">DATA</span>{' '}
                  <span className="text-white">CRAFT</span>
                </span>
                <span className="text-[10px] text-[#85ECFC]/60 tracking-[0.2em] uppercase">Academy</span>
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              A hands-on training academy dedicated to transforming students, fresh graduates, and career shifters into professional Data Engineers. Founded 2025 · Professional Training &amp; Coaching.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
             
              <a href="https://www.linkedin.com/company/data-craft-academy/posts/?feedView=all" className="w-9 h-9 bg-white/5 hover:bg-[#5A4DE5]/30 border border-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-[#85ECFC]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
             
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-[#85ECFC] text-sm mb-4 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-3">
              <li><a href="/programs" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Beginner Level</a></li>
              <li><a href="/programs" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Intermediate Level</a></li>
              <li><a href="/programs" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Advanced Level</a></li>
              <li><a href="/courses" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">All Courses</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-[#85ECFC] text-sm mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">About Us</a></li>
              <li><a href="/instructors" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Instructors</a></li>
              <li><a href="/contact" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-[#85ECFC] text-sm mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
             
              <li><a href="/contact" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Contact Us</a></li>
              <li><Link href="/privacy" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
      
        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; 2025 <a href="https://www.linkedin.com/in/mmmmzxe/">mmmmmzxe</a> All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Professional Training &amp; Coaching · 2-10 employees
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-[#85ECFC] text-sm transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/30 hover:text-[#85ECFC] text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
