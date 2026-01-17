import React from 'react';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>What I Build</h2>
        <p>Practical solutions across 3D modeling, web development, and design.</p>
      </div>

      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item item-cyan position-relative">
              <div className="icon"><i className="bi bi-box-seam"></i></div>
              <h3>3D Modeling</h3>
              <p>High-quality 3D models for games, visualizations, and printing — Maya, Blender workflows.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item item-orange position-relative">
              <div className="icon"><i className="bi bi-code-slash"></i></div>
              <h3>Web Development</h3>
              <p>Responsive websites and web apps using modern HTML, CSS, and JavaScript. See projects in the portfolio.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item item-teal position-relative">
              <div className="icon"><i className="bi bi-palette"></i></div>
              <h3>UI / UX Design</h3>
              <p>User-focused interfaces and visual design to make products intuitive and attractive.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="service-item item-red position-relative">
              <div className="icon"><i className="bi bi-hammer"></i></div>
              <h3>CAD & Technical Drafting</h3>
              <p>Technical drawings and CAD drafting suitable for manufacturing and prototyping.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item item-indigo position-relative">
              <div className="icon"><i className="bi bi-printer-fill"></i></div>
              <h3>3D Printing Prep</h3>
              <p>Model cleanup, slicing setup and print preparation to get reliable results from your printer.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="service-item item-pink position-relative">
              <div className="icon"><i className="bi bi-journal-richtext"></i></div>
              <h3>Tutoring & Training</h3>
              <p>Hands-on training in 3D tools, web basics, and design principles for students and teams.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
