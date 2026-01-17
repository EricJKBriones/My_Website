import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>Technical and creative skills</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-12">
            <ul className="list-unstyled row skills-list">
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>CSS</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>JavaScript</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>PHP</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Web Development</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>SQL</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>3D Visualization</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>3D Rendering</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>3D Modeling</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Graphic Design</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Autodesk Maya</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Adobe Photoshop</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Customer Service</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Computer Science</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Computer Maintenance</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Computer Graphics</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Computer Networking</li>
              <li className="col-md-4"><i className="bi bi-check-circle-fill skill-icon"></i>Computer Hardware Troubleshooting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
