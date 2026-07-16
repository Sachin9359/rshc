import React from 'react';
import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Products from '@/app/components/Products';
import Process from '@/app/components/Process';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen font-sans scroll-smooth">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
