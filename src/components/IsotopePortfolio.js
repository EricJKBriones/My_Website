'use client';

import React, { useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import Portfolio from './Portfolio';

const IsotopePortfolio = () => {
  const isotopeContainer = useRef(null);
  const isotopeInstance = useRef(null);

  useEffect(() => {
    if (isotopeContainer.current) {
      const imgLoad = imagesLoaded(isotopeContainer.current);
      imgLoad.on('done', () => {
        isotopeInstance.current = new Isotope(isotopeContainer.current, {
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
          filter: '*',
          sortBy: 'original-order',
        });
      });
    }

    const filters = document.querySelectorAll('.isotope-filters li');
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        const filterValue = filter.getAttribute('data-filter');
        if (isotopeInstance.current) {
          isotopeInstance.current.arrange({ filter: filterValue });
        }
        filters.forEach(f => f.classList.remove('filter-active'));
        filter.classList.add('filter-active');
      });
    });

    return () => {
      if (isotopeInstance.current) {
        isotopeInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div ref={isotopeContainer}>
      <Portfolio />
    </div>
  );
};

export default IsotopePortfolio;
