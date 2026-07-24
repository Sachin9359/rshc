'use client';

import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#e4f0ff] border-t border-[var(--border)] px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xs font-bold tracking-widest text-[var(--primary)] uppercase mb-3">Corporate Communication</h2>
        <h3 className="text-4xl font-bold text-[var(--text)] tracking-tight mb-8">RSHC Infotech Private Limited</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12">
          <div className="p-4 bg-white border border-[var(--border)] rounded">
            <span className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-wider block mb-1">Corporate Office</span>
            <p className="text-sm text-[var(--text)] font-medium">KVG Millennium Palace Mall</p>
            <p className="text-sm text-[var(--muted)] mt-1">Address details pending update</p>
          </div>
          <div className="p-4 bg-white border border-[var(--border)] rounded">
            <span className="text-[10px] text-[var(--muted)] font-bold uppercase tracking-wider block mb-1">Digital Channels</span>
            <div className="text-sm text-[var(--text)] font-medium space-y-2">
              <a href="mailto:rshcinfotechpvtltd@gmail.com" className="flex items-center gap-2 hover:text-[#00B4D8] transition-colors">
                <span>📧</span>
                <span>rshcinfotechpvtltd@gmail.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-[#00B4D8] transition-colors">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </a>
            </div>
            <p className="text-sm text-[var(--muted)] mt-1">System parameters pending initialization</p>
          </div>
        </div>

        <p className="text-sm text-[var(--muted)] italic">
          Note: Corporate communication metrics and address modifications are pending dynamic update directives.
        </p>
      </div>
    </section>
  );
}
