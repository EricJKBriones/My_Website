'use client';

import { useEffect } from 'react';

const AppInitializer = () => {
  useEffect(() => {
    // This hook will run once when the component mounts on the client side.
    // We are consolidating all the general-purpose initialization logic here.

    /**
     * Header toggle
     */
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
    }

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const toggleScrollTop = () => {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      };
      scrollTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      window.addEventListener('load', toggleScrollTop);
      window.addEventListener('scroll', toggleScrollTop);
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

    /**
     * Init isotope layout and filters
     */
    document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
      if (typeof imagesLoaded !== 'undefined' && typeof Isotope !== 'undefined') {
        let initIsotope;
        imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
          initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: isotopeItem.getAttribute('data-layout') ?? 'masonry',
            filter: isotopeItem.getAttribute('data-default-filter') ?? '*',
            sortBy: isotopeItem.getAttribute('data-sort') ?? 'original-order'
          });
        });

        isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
          filters.addEventListener('click', function() {
            isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            initIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof AOS !== 'undefined') {
              AOS.refresh();
            }
          }, false);
        });
      }
    });

    /**
     * Navmenu Scrollspy
     */
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
    }

    /**
     * Floating Icons from custom.js
     */
    const allIcons = [
        '/assets/img/icons/3d.png', '/assets/img/icons/adobe_photoshop.png',
        '/assets/img/icons/android.png', '/assets/img/icons/Autodesk_23627.png',
        '/assets/img/icons/Blender_23505.png', '/assets/img/icons/BrAIn.png',
        '/assets/img/icons/c-.png', '/assets/img/icons/cyber-security.png',
        '/assets/img/icons/github.png', '/assets/img/icons/html.png',
        '/assets/img/icons/java-script.png', '/assets/img/icons/java.png',
        '/assets/img/icons/settings.png', '/assets/img/icons/text.png',
        '/assets/img/icons/web.png'
      ];
  
      const symbols = document.querySelectorAll('.scroll-symbol');
      if (symbols.length) {
        symbols.forEach(symbol => {
          symbol.style.backgroundImage = `url('${allIcons[Math.floor(Math.random() * allIcons.length)]}')`;
        });
      }


  }, []); // Empty dependency array means this effect runs once on mount

  return null; // This component doesn't render anything
};

export default AppInitializer;
