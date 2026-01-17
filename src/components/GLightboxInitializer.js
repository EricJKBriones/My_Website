'use client';

import { useEffect } from 'react';


const GLightboxInitializer = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });

    return () => {
      lightbox.destroy();
    };
  }, []);

  return null;
};

export default GLightboxInitializer;
