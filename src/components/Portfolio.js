'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';


const Portfolio = () => {
  const isotopeContainer = useRef(null);
  const isotopeInstance = useRef(null);

  useEffect(() => {
    if (isotopeContainer.current && window.imagesLoaded && window.Isotope) {
      const imgLoad = window.imagesLoaded(isotopeContainer.current);
      imgLoad.on('done', () => {
        isotopeInstance.current = new window.Isotope(isotopeContainer.current, {
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
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
      </div>

      <div className="container">
        <div className="isotope-layout">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-projects">Projects</li>
            <li data-filter=".filter-certificates">Certificates</li>
            <li data-filter=".filter-3dart">3D Art</li>
          </ul>

          <div ref={isotopeContainer} className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-3dart" key="1">
              <Image src="/assets/img/masonry-portfolio/3D (1).jpg" className="img-fluid" alt="3D Art" width={800} height={600} />
              <div className="portfolio-info">
                <h4>3D Art</h4>
                <a href="/assets/img/masonry-portfolio/3D (1).jpg" title="3D Art" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-projects" key="2">
              <Image src="/assets/img/masonry-portfolio/Piezoelectric Project Prototype.jpeg" className="img-fluid" alt="Prototype" width={800} height={600} />
              <div className="portfolio-info">
                <h4>Prototype</h4>
                <p>Piezoelectric prototype</p>
                <a href="/assets/img/masonry-portfolio/Piezoelectric Project Prototype.jpeg" title="Prototype" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-projects" key="3">
              <Image src="/assets/img/masonry-portfolio/Projects Java.png" className="img-fluid" alt="Java Project" width={800} height={600} />
              <div className="portfolio-info">
                <h4>Java Project</h4>
                <p>Code samples and outputs</p>
                <a href="/assets/img/masonry-portfolio/Projects Java.png" title="Java Project" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-projects" key="4">
                <Image src="/assets/img/masonry-portfolio/Piezoelectric Project Blueprint.png" className="img-fluid" alt="Blueprint" width={800} height={600} />
                <div className="portfolio-info">
                    <h4>Blueprint</h4>
                    <p>Project blueprint</p>
                    <a href="/assets/img/masonry-portfolio/Piezoelectric Project Blueprint.png" title="Blueprint" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-3dart" key="5">
                <Image src="/assets/img/masonry-portfolio/3D (2).jpg" className="img-fluid" alt="3D Art 2" width={800} height={600} />
                <div className="portfolio-info">
                    <h4>3D Art 2</h4>
                    <p>Rendered asset</p>
                    <a href="/assets/img/masonry-portfolio/3D (2).jpg" title="3D Art 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-certificates" key="6">
                <Image src="/assets/img/masonry-portfolio/Coursera G34GWLOMO3G7.png" className="img-fluid" alt="Certificate" width={800} height={600} />
                <div className="portfolio-info">
                    <h4>Certificate</h4>
                    <p>Coursera certificate</p>
                    <a href="/assets/img/masonry-portfolio/Coursera G34GWLOMO3G7.png" title="Certificate" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-certificates" key="7">
              <Image src="/assets/img/masonry-portfolio/Coursera FQS62O7POYYD.png" className="img-fluid" alt="Certificate" width={800} height={600} />
              <div className="portfolio-info">
                <h4>Certificate</h4>
                <p>Coursera certificate</p>
                <a href="/assets/img/masonry-portfolio/Coursera FQS62O7POYYD.png" title="Certificate" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-certificates" key="8">
              <Image src="/assets/img/masonry-portfolio/Coursera GDVGQ7MUTRRJ.png" className="img-fluid" alt="Certificate" width={800} height={600} />
              <div className="portfolio-info">
                <h4>Certificate</h4>
                <p>Coursera certificate</p>
                <a href="/assets/img/masonry-portfolio/Coursera GDVGQ7MUTRRJ.png" title="Certificate" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-certificates" key="9">
              <Image src="/assets/img/masonry-portfolio/Coursera TID88N7X8JPO.png" className="img-fluid" alt="Certificate" width={800} height={600} />
              <div className="portfolio-info">
                <h4>Certificate</h4>
                <p>Coursera certificate</p>
                <a href="/assets/img/masonry-portfolio/Coursera TID88N7X8JPO.png" title="Certificate" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;