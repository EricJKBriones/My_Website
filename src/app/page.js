'use client';

import React, { useState, useEffect } from 'react';
import FloatingIcons from '@/components/FloatingIcons';
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
import ScrollSpy from '@/components/ScrollSpy';
import ScrollTopButton from '@/components/ScrollTopButton';
import AOSInitializer from '@/components/AOSInitializer';
import GLightboxInitializer from '@/components/GLightboxInitializer';

export default function Home() {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   fetch('/api/get-messages')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       if (data.messages) {
  //         setMessages(data.messages);
  //       }
  //     })
  //     .catch(err => {
  //       console.error('Error loading messages:', err);
  //     });
  // }, []);

  const handleMessageSend = (newMessage) => {
    // setMessages([newMessage, ...messages]);
  };

  return (
    <>
      {/* Floating icons */}
      <FloatingIcons />
      <ScrollSpy />
      <AOSInitializer />
      <GLightboxInitializer />

      <Header />

      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        {/* <Messages messages={messages} /> */}
        <Contact />
      </main>
      
      <Footer />

      {/* Scroll Top */}
      <ScrollTopButton />
    </>
  );
}
