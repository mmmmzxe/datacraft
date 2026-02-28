'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactClient() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    // These would ideally come from environment variables
    // For now, these are placeholders that the user can replace
    const serviceID = 'service_placeholder';
    const templateID = 'template_placeholder';
    const publicKey = 'public_key_placeholder';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
          setStatus('success');
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-[#11113F] px-6 pt-30 pb-20">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#85ECFC] text-sm font-semibold uppercase tracking-[0.15em] mb-3 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Have questions about our programs? We&apos;d love to hear from you. Reach out and our team will get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact Form / Info */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#11113F] mb-6">Send us a message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#11113F]/60 mb-1.5">First Name</label>
                    <input
                      name="first_name"
                      required
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#11113F] placeholder-gray-300 focus:outline-none focus:border-[#5A4DE5] focus:ring-1 focus:ring-[#5A4DE5] transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#11113F]/60 mb-1.5">Last Name</label>
                    <input
                      name="last_name"
                      required
                      type="text"
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#11113F] placeholder-gray-300 focus:outline-none focus:border-[#5A4DE5] focus:ring-1 focus:ring-[#5A4DE5] transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#11113F]/60 mb-1.5">Email</label>
                  <input
                    name="user_email"
                    required
                    type="email"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#11113F] placeholder-gray-300 focus:outline-none focus:border-[#5A4DE5] focus:ring-1 focus:ring-[#5A4DE5] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
               
                <div>
                  <label className="block text-sm font-medium text-[#11113F]/60 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#11113F] placeholder-gray-300 focus:outline-none focus:border-[#5A4DE5] focus:ring-1 focus:ring-[#5A4DE5] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <div className="flex flex-col gap-4">
                  <button
                    disabled={status === 'sending'}
                    type="submit"
                    className="bg-gradient-to-r from-[#85ECFC] to-[#5A4DE5] text-[#11113F] font-bold text-sm px-8 py-3 rounded-lg hover:from-[#6de0f7] hover:to-[#4a3dd4] transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <p className="text-green-600 text-sm font-bold">Message sent successfully! We will get back to you soon.</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-600 text-sm font-bold">Failed to send message. Please try again or email us directly.</p>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-[#11113F] mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#5A4DE5]/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#5A4DE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#11113F]">Email</p>
                    <p className="text-sm text-[#11113F]/50">info@datacraft.sh</p>
                  </div>
                </div>
             
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#5A4DE5]/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#5A4DE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#11113F]">Industry</p>
                    <p className="text-sm text-[#11113F]/50">Professional Training & Coaching</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#5A4DE5]/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#5A4DE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#11113F]">Team Size</p>
                    <p className="text-sm text-[#11113F]/50">2-10 employees · Founded 2025</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 p-6 bg-[#f8f9fc] rounded-xl">
                <p className="text-sm font-semibold text-[#11113F] mb-3">Follow us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-[#11113F] hover:bg-[#5A4DE5] rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#11113F] hover:bg-[#5A4DE5] rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#11113F] hover:bg-[#5A4DE5] rounded-full flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
