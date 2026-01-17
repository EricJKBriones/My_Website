'use client';

import { useEffect } from 'react';
import AOS from 'aos';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return null;
};

export default AOSInitializer;
