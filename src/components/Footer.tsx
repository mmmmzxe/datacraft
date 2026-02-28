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
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-[#5A4DE5]/30 border border-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-[#85ECFC]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-[#5A4DE5]/30 border border-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-[#85ECFC]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-[#5A4DE5]/30 border border-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-[#85ECFC]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-[#5A4DE5]/30 border border-white/10 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-[#85ECFC]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
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
              <li><a href="/contact" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Help Center</a></li>
              <li><a href="/contact" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-[#85ECFC] text-sm transition-colors">Terms of Service</a></li>
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
