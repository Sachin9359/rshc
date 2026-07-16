'use client';

import React from 'react';

export default function Products() {
  const softwareProducts = [
    'HRMS',
    'ERP',
    'CRM',
    'Inventory Management',
    'Asset Management',
    'Attendance Management',
    'Payroll Management',
    'Visitor Management',
    'Help Desk System',
    'Project Management Software',
    'Learning Management System',
    'Hospital Management System',
    'School Management System',
    'Fleet Management System'
  ];

  const hardwareSupplies = [
    'Desktop Computers & Laptops',
    'Servers & Workstations',
    'Thin Clients & Printers',
    'Networking Equipment (Switches, Routers, Firewalls)',
    'UPS & CCTV Systems',
    'Storage Devices & Computer Accessories',
    'Licensed Software Systems'
  ];

  return (
    <>
      <section id="products" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-[#00B4D8] uppercase mb-3">Software Architecture Ecosystem</h2>

          <h3 className="text-4xl font-bold text-[var(--text)] tracking-tight">Modular Off-the-Shelf Enterprise Products</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {softwareProducts.map((prod, idx) => (
            <div key={idx} className="p-4 bg-white border border-[var(--border)] rounded text-center hover:bg-[var(--surface-strong)] transition-colors">
              <span className="text-sm font-bold text-[var(--text)] tracking-wide uppercase block">{prod}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white border-t border-[var(--border)] px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[var(--surface-strong)] to-white border border-[var(--border)] rounded-xl p-8 sm:p-12">
          <div className="max-w-2xl">
            <h3 className="text-xs font-bold tracking-widest text-[#00B4D8] uppercase mb-2">Hardware Procurement & Logistics</h3> 
            <h4 className="text-3xl font-bold text-[var(--text)] mb-6">Computer Hardware & System Integration Supply</h4> 
            <p className="text-[var(--muted)] text-base leading-relaxed mb-6">
              We offer comprehensive equipment lines ensuring computational continuity, high-tier server stacks, and complete networking modules.
            </p>
            <div className="flex flex-wrap gap-2">
              {hardwareSupplies.map((sup, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-[var(--border)] rounded-full text-sm text-[var(--muted)]">
                  {sup}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}