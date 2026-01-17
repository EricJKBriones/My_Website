import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <div className="about-container">
          <Image src="/assets/img/portfolio/Me1.jpg" className="img-fluid about-img" alt="Me" width={400} height={400} />
          <p className="py-3">
            I'm a Computer Science student passionate about algorithms, data structures, and backend development.
            My academic journey has equipped me with a strong theoretical foundation, while personal projects taught me
            to apply that knowledge practically. I have hands-on experience with Java, C++, Kotlin, and Dart, and
            recently completed projects involving simple 2D animation, 3D modeling, database-driven websites, and
            sample code outputs. I am seeking internship or entry-level opportunities to apply my coding skills and
            learn from experienced mentors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
