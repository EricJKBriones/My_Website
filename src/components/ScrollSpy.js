'use client';

import { useEffect } from 'react';

const ScrollSpy = () => {
  useEffect(() => {
    const navmenulinks = document.querySelectorAll('.navmenu a');
    if (navmenulinks.length) {
      const navmenuScrollspy = () => {
        navmenulinks.forEach(navmenulink => {
          if (!navmenulink.hash) return;
          let section = document.querySelector(navmenulink.hash);
          if (!section) return;
          let position = window.scrollY + 200;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        });
      };
      window.addEventListener('load', navmenuScrollspy);
      document.addEventListener('scroll', navmenuScrollspy);

      return () => {
        window.removeEventListener('load', navmenuScrollspy);
        document.removeEventListener('scroll', navmenuScrollspy);
      };
    }
  }, []);

  return null;
};

export default ScrollSpy;
