'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--border)] text-center px-6 text-[var(--muted)] text-xs bg-white/70">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} RSHC Infotech Private Limited. All rights reserved.</p>
        <p className="tracking-wide uppercase font-semibold text-[10px] text-[var(--muted)]">Legal Status: Private Limited Company</p> 
      </div>
    </footer>
  );
}