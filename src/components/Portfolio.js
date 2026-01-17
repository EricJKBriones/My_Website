import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  // NOTE: The filtering functionality of isotope.js will be handled later
  // in the useEffect hook phase. This component just renders the static HTML.
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-projects">Projects</li>
            <li data-filter=".filter-certificates">Certificates</li>
            <li data-filter=".filter-3dart">3D Art</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-3dart">
              <img src="/assets/img/masonry-portfolio/3D (1).jpg" className="img-fluid" alt="3D Art" />
              <div className="portfolio-info">
                <h4>3D Art</h4>
                <a href="/assets/img/masonry-portfolio/3D (1).jpg" title="3D Art" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-projects">
              <img src="/assets/img/masonry-portfolio/Piezoelectric Project Prototype.jpeg" className="img-fluid" alt="Prototype" />
              <div className="portfolio-info">
                <h4>Prototype</h4>
                <p>Piezoelectric prototype</p>
                <a href="/assets/img/masonry-portfolio/Piezoelectric Project Prototype.jpeg" title="Prototype" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-projects">
              <img src="/assets/img/masonry-portfolio/Projects Java.png" className="img-fluid" alt="Java Project" />
              <div className="portfolio-info">
                <h4>Java Project</h4>
                <p>Code samples and outputs</p>
                <a href="/assets/img/masonry-portfolio/Projects Java.png" title="Java Project" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-projects">
                <img src="/assets/img/masonry-portfolio/Piezoelectric Project Blueprint.png" className="img-fluid" alt="Blueprint" />
                <div className="portfolio-info">
                    <h4>Blueprint</h4>
                    <p>Project blueprint</p>
                    <a href="/assets/img/masonry-portfolio/Piezoelectric Project Blueprint.png" title="Blueprint" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-3dart">
                <img src="/assets/img/masonry-portfolio/3D (2).jpg" className="img-fluid" alt="3D Art 2" />
                <div className="portfolio-info">
                    <h4>3D Art 2</h4>
                    <p>Rendered asset</p>
                    <a href="/assets/img/masonry-portfolio/3D (2).jpg" title="3D Art 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-certificates">
                <img src="/assets/img/masonry-portfolio/Coursera G34GWLOMO3G7.png" className="img-fluid" alt="Certificate" />
                <div className="portfolio-info">
                    <h4>Certificate</h4>
                    <p>Coursera certificate</p>
                    <a href="/assets/img/masonry-portfolio/Coursera G34GWLOMO3G7.png" title="Certificate" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                    <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-certificates">
              <img src="/assets/img/masonry-portfolio/Coursera FQS62O7POYYD.png" className="img-fluid" alt="Certificate" />
              <div className="portfolio-info">
                <h4>Certificate</h4>
                <p>Coursera certificate</p>
                <a href="/assets/img/masonry-portfolio/Coursera FQS62O7POYYD.png" title="Certificate" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-certificates">
              <img src="/assets/img/masonry-portfolio/Coursera GDVGQ7MUTRRJ.png" className="img-fluid" alt="Certificate" />
              <div className="portfolio-info">
                <h4>Certificate</h4>
                <p>Coursera certificate</p>
                <a href="/assets/img/masonry-portfolio/Coursera GDVGQ7MUTRRJ.png" title="Certificate" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-certificates">
              <img src="/assets/img/masonry-portfolio/Coursera TID88N7X8JPO.png" className="img-fluid" alt="Certificate" />
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
