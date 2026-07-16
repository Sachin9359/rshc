'use client';

import React, { useState, useEffect } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('IT Services');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const [isMounted, setIsMounted] = useState(false);

  // Delays interactions until the phone successfully maps JavaScript variables
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const coreServices: Record<string, string[]> = {
    'IT Services': [
      'Custom Software Development',
      'Web Application Development',
      'Website Design & Development',
      'Mobile Application Development',
      'Enterprise Software Solutions',
      'ERP & CRM Solutions',
      'Cloud Computing Solutions',
      'API Development & Integration',
      'Database Management',
      'Software Maintenance & Support'
    ],
    'Digital Transformation': [
      'Business Process Automation',
      'Paperless Office Solutions',
      'Document Management Systems',
      'Digital Workflow Solutions',
      'E-Governance Solutions',
      'Smart Office Solutions'
    ],
    'IT Infrastructure': [
      'Data Centre Planning & Consultancy',
      'Server Installation & Configuration',
      'Network Design & Implementation',
      'Structured Cabling',
      'Storage Solutions',
      'Backup & Disaster Recovery',
      'Virtualization',
      'Infrastructure Monitoring'
    ],
    'Cyber Security': [
      'Network Security & Firewall Implementation',
      'Endpoint Security',
      'Security Audit & Vulnerability Assessment',
      'Data Protection',
      'Identity & Access Management',
      'Security Awareness Training'
    ]
  };

  return (
    <section id="services" className="py-24 bg-[#e2eeff] border-t border-b border-[var(--border)] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#00B4D8] uppercase mb-3">Our Core Business Activities</h2>
          <h3 className="text-4xl font-bold text-[var(--text)] tracking-tight">End-to-End Enterprise Expertise</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(coreServices).map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleTabChange(tab)}
                
    
                className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-wider rounded transition-all duration-200 select-none border ${
                  isActive
                    ? 'bg-[var(--primary)] text-white shadow-md border-[var(--primary)]'
                    : 'bg-white text-[var(--muted)] border-[var(--border)] hover:text-[var(--text)] hover:bg-[var(--surface-strong)]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[250px]">
          {coreServices[activeTab].map((item, index) => (
            <div key={index} className="p-5 bg-white border border-[var(--border)] rounded flex items-start space-x-3">
              <span className="text-[#00B4D8] font-mono mt-0.5">✓</span>
              <span className="text-base font-medium text-[var(--text)]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}