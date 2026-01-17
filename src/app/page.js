import React from 'react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Messages from '@/components/Messages';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Floating icons */}
      <div className="scroll-symbol"></div>
      <div className="scroll-symbol"></div>
      <div className="scroll-symbol"></div>
      <div className="scroll-symbol"></div>
      <div className="scroll-symbol"></div>
      <div className="scroll-symbol"></div>
      <div className="scroll-symbol"></div>
      <div className="scroll-symbol"></div>

      <Header />

      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Messages />
        <Contact />
      </main>
      
      <Footer />

      {/* Scroll Top */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
