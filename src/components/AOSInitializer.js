'use client';

import { useEffect } from 'react';


const AOSInitializer = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, []);

  return null;
};

export default AOSInitializer;
