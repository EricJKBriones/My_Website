'use client';

import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const headerToggleBtn = document.querySelector('.header-toggle');
    if (headerToggleBtn) {
      const headerToggle = () => {
        document.querySelector('#header').classList.toggle('header-show');
        headerToggleBtn.classList.toggle('bi-list');
        headerToggleBtn.classList.toggle('bi-x');
      };
      headerToggleBtn.addEventListener('click', headerToggle);

      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.header-show')) {
            headerToggle();
          }
        });
      });

      return () => {
        headerToggleBtn.removeEventListener('click', headerToggle);
        document.querySelectorAll('#navmenu a').forEach(navmenu => {
          navmenu.removeEventListener('click', () => {
            if (document.querySelector('.header-show')) {
              headerToggle();
            }
          });
        });
      };
    }
  }, []);

  return (
    <header id="header" className="header d-flex flex-column justify-content-center">
      <i className="header-toggle d-xl-none bi bi-list"></i>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i><span>Home</span></a></li>
          <li><a href="#about"><i className="bi bi-person navicon"></i><span>About</span></a></li>
          <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i><span>Resume</span></a></li>
          <li><a href="#portfolio"><i className="bi bi-images navicon"></i><span>Portfolio</span></a></li>
          <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i><span>Services</span></a></li>
          <li><a href="#contact"><i className="bi bi-envelope navicon"></i><span>Contact</span></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
