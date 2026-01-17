import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Eric John Kenneth Briones</h4>
              <p><em>I'm a Computer Science student passionate about algorithms, data structures, and backend development. My academic journey has equipped me with a strong theoretical foundation, while personal projects taught me to apply that knowledge practically. I have hands-on experience with Java, C++, Kotlin, and Dart, and recently completed projects involving simple 2D animation, 3D modeling, database-driven websites, and sample code outputs. I am seeking internship or entry-level opportunities to apply my coding skills and learn from experienced mentors.</em></p>
              <ul>
                <li>Labo, Camarines Norte, Philippines</li>
                <li>09476416126</li>
                <li>briones.eric2003@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Science — Computer Science</h4>
              <h5>2022 - 2026 (expected)</h5>
              <p><em>Our Lady of Lourdes College Foundation</em></p>
            </div>

            <div className="resume-item">
              <h4>High School Diploma</h4>
              <h5>2020 - 2022</h5>
              <p><em>Camarines Norte International School</em></p>
              <p>General Studies.</p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Projects</h3>
            <div className="resume-item">
              <h4>3D Art — Autodesk Maya</h4>
              <p><em><a href="https://portfolio4022.crevado.com/3d-art-autodesk-maya" target="_blank" rel="noopener noreferrer">View 3D art portfolio</a></em></p>
              <ul>
                <li>3D modeling and scene creation using Autodesk Maya.</li>
                <li>Rendered assets showcased in the online portfolio.</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>MIS / ITS — GitHub Projects</h4>
              <p><em><a href="https://github.com/EricJKBriones/MIS-ITS" target="_blank" rel="noopener noreferrer">View code and sample outputs</a></em></p>
              <ul>
                <li>Database-backed website and sample applications implemented in Java and related technologies.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
