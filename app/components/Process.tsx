'use client';

export default function Process() {
  const implementationProcess = [
    { title: 'Requirement Analysis', body: 'Deep dive into operational needs.' },

    { title: 'Business Consultation', body: 'Strategic planning and advisory.' },
   
    { title: 'Solution Design', body: 'Architecting secure, scalable setups.' },
    
    { title: 'Development & Testing', body: 'Rigorous engineering and quality checks.' },
   
    { title: 'Deployment & Training', body: 'Smooth rollout with structured handholding.' },
   
    { title: 'Maintenance & Support', body: 'Continuous evaluation and monitoring.' }
  ];

  const industries = [
    'Government Departments',
    'Public Sector Undertakings (PSUs)',
    'Smart Cities',
    'Healthcare',
    'Education',
    'Banking & Financial Services',
    'Manufacturing',
    'Logistics & Transport',
    'Hospitality & Retail',
    'Infrastructure & Construction',
    'Agriculture',
    'SMEs & Startups',
  ];

  const techStack = [
    'ASP.NET Core',
    'C#',
    'Microsoft SQL Server',
    'HTML5 & CSS3',
    'JavaScript',
    'Bootstrap',
    'REST APIs',
    'Microsoft Azure',
    'IIS Server',
    'Windows & Linux Server',
    'Docker',
    'Git',
    'Microsoft 365',
  ];

  return (
    <>
      <section id="process" className="py-24 bg-[#e3efff] border-t border-[var(--border)] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-widest text-[#00B4D8] uppercase mb-3">Structured Execution Plan</h2>
            <h3 className="text-4xl font-bold text-[var(--text)] tracking-tight">Our Quality Implementation Lifecycle</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {implementationProcess.map((proc, idx) => (
              <div key={idx} className="relative p-5 bg-white border border-[var(--border)] rounded flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[var(--primary)] font-mono block mb-3">0{idx + 1}</span>
                  <h4 className="text-base font-bold text-[var(--text)] mb-1.5">{proc.title}</h4>
                  <p className="text-sm text-[var(--muted)] leading-normal">{proc.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-[var(--border)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-xl font-bold text-[var(--text)] tracking-tight mb-6">Target Client Industries</h3> 
            <div className="flex flex-wrap gap-2">
              {industries.map((ind, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-white border border-[var(--border)] rounded text-sm text-[var(--muted)] font-medium">
                  {ind}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text)] tracking-tight mb-6">Technical Stack Ecosystem</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-[var(--surface-strong)] border border-[var(--border)] text-[var(--muted)] font-mono text-sm rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}