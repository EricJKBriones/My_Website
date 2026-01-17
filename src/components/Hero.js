'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';

import TypedComponent from './TypedComponent';



const Hero = () => {

  return (

    <section id="hero" className="hero section light-background">

      <Image src="/assets/img/portfolio/Skills.PNG" alt="" width={1920} height={1080} layout="responsive" objectFit="cover" />



      <div className="container" data-aos="zoom-out">

        <div className="row justify-content-center">

          <div className="col-lg-9">

            <h2>Eric John Kenneth Briones</h2>

            <p>I'm <TypedComponent strings={["Designer", "Developer", "Freelancer", "3D Art Designer"]} /></p>

            <div className="social-links">

              <a href="https://x.com/Ericjohnkpb_12" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>

              <a href="https://www.facebook.com/share/17cR9J1s2z/" title="Facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>

              <a href="https://www.instagram.com/ericjk_?igsh=ZGI5cDN6Zmw4bmZn" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>

              <a href="https://github.com/EricJKBriones" title="GitHub" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>

              <a href="https://www.linkedin.com/in/eric-john-kenneth-briones-233204330" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Hero;