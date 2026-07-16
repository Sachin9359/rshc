'use client';

import React from 'react';
import Image from 'next/image';
import { assets } from '@/asset/assets';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="p-1.5 flex items-center justify-center shrink-0">
            <Image src={assets.logo1} alt="RSHC logo" width={42} height={42} className="w-9 h-9 sm:w-10 sm:h-10 object-contain " />
          </div>
          <div className="min-w-0">
            <span className="block text-sm sm:text-xl font-extrabold tracking-wide text-[var(--text)] truncate bg-gradient-to-r from-[var(--text)] to-[var(--primary)] bg-clip-text text-transparent">RSHC INFOTECH Pvt Ltd</span>
            <p className="text-[9px] sm:text-[10px] uppercase text-[var(--muted)] tracking-widest hidden sm:block">Empowering Through Innovation</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-[var(--muted)]">
          <a href="#about" className="relative px-1 py-1.5 transition-all duration-300 hover:text-[var(--primary)] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--primary)] after:transition-all after:duration-300 hover:after:w-full">About</a>
          <a href="#services" className="relative px-1 py-1.5 transition-all duration-300 hover:text-[var(--primary)] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--primary)] after:transition-all after:duration-300 hover:after:w-full">Our Services</a>
          <a href="#products" className="relative px-1 py-1.5 transition-all duration-300 hover:text-[var(--primary)] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--primary)] after:transition-all after:duration-300 hover:after:w-full">Products</a>
          <a href="#process" className="relative px-1 py-1.5 transition-all duration-300 hover:text-[var(--primary)] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--primary)] after:transition-all after:duration-300 hover:after:w-full">Our Process</a>
          <a href="#contact" className="px-4 py-2 bg-[var(--primary)] rounded-full text-white shadow hover:bg-[var(--primary-strong)] transition-all duration-300 hover:shadow-md">Get in Touch</a>
        </nav>
      </div>
    </header>
  );
}