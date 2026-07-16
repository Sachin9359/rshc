'use client';

import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] sm:min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-[#f4fbff] via-[#eaf7ff] to-[#f7fbff] overflow-hidden px-4 sm:px-6 py-10 sm:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(31,110,216,0.12),transparent_55%)]" />
      <div className="max-w-4xl text-center z-10">
        <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold tracking-widest text-[var(--primary)] bg-[var(--surface-strong)] border border-[var(--border)] rounded-full uppercase">
          Digital Transformation & IT Consulting
        </span>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text)] tracking-tight mt-5 sm:mt-6 mb-4 sm:mb-6 leading-tight">
          Transforming Ideas into <br className="hidden sm:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[#6bb8ff]">
            Intelligent Technology Solutions
          </span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-8 sm:mb-10 font-light leading-relaxed">
          An emerging IT leader committed to delivering innovative, secure, and scalable solutions for government entities, public sector undertakings, and modern enterprises.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a href="#services" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[var(--primary)] text-white font-semibold rounded shadow-lg shadow-blue-300 hover:bg-[var(--primary-strong)] transition-colors text-center">
            Explore Services
          </a>
          <a href="#contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-white hover:bg-[#e8f3ff] border border-[var(--border)] font-semibold rounded transition-colors text-center text-[var(--text)]">
            Corporate Office Details
          </a>
        </div>
      </div>
    </section>
  );
}