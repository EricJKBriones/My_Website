'use client';

import { useEffect } from 'react';


const GLightboxInitializer = () => {
  useEffect(() => {
    if (window.GLightbox) {
      const lightbox = window.GLightbox({
        selector: '.glightbox'
      });

      return () => {
        lightbox.destroy();
      };
    }
  }, []);

  return null;
};

export default GLightboxInitializer;
