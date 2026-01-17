'use client';

import { useEffect } from 'react';

const AppInitializer = () => {
  useEffect(() => {
    // This hook will run once when the component mounts on the client side.
    // We are consolidating all the general-purpose initialization logic here.



    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }


    
    /**
     * Animation on scroll function and init
     */
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }

    /**
     * Initiate glightbox
     */
    if (typeof GLightbox !== 'undefined') {
      GLightbox({ selector: '.glightbox' });
    }








  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything
};

export default AppInitializer;
