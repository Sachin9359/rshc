'use client';

import React from 'react';

export default function About() {
  const coreValues = [
    { name: 'Integrity', desc: 'Upholding honesty and high moral principles in all actions.' },
    { name: 'Innovation', desc: 'Driving creative technological advancements.' },
    { name: 'Excellence', desc: 'Striving for supreme quality and performance.' },
    { name: 'Customer First', desc: 'Prioritizing our clients\' needs and satisfaction.' },
    { name: 'Transparency', desc: 'Maintaining absolute clarity and honesty.' },
    { name: 'Quality', desc: 'Ensuring top-tier standards in every deliverable.' }
  ];

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 border-t border-[var(--border)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <h2 className="text-xs font-bold tracking-widest text-[#00B4D8] uppercase mb-3">Who We Are</h2>
          <h3 className="text-4xl font-bold text-[var(--text)] tracking-tight mb-6">Reliable & Future-Ready Infrastructure Partner</h3>
          <p className="text-[var(--muted)] text-base leading-relaxed mb-6">
            RSHC Infotech Private Limited specializes in high-tier software architectural systems, comprehensive corporate network designs, advanced secure computing platforms, and digital workflow transformations.
          </p>
          <div className="p-4 bg-[var(--surface)] border-l-4 border-[var(--primary)] rounded-r text-sm text-[var(--muted)] leading-relaxed italic">
            "To become one of India's most trusted technology and digital transformation companies by providing innovative, reliable, and future-ready IT solutions."
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coreValues.map((val, idx) => (
            <div key={idx} className="p-5 bg-[var(--surface)] border border-[var(--border)] rounded hover:border-[var(--primary)] transition-colors">
              <h4 className="text-[var(--text)] text-lg font-bold mb-1">{val.name}</h4>
              <p className="text-sm text-[var(--muted)]">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}