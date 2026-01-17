import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <h3 className="sitename">Eric John Kenneth Briones</h3>
        <div className="social-links d-flex justify-content-center">
          <a href="https://x.com/Ericjohnkpb_12" title="Twitter" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter-x"></i></a>
          <a href="https://www.facebook.com/share/17cR9J1s2z/" title="Facebook" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
          <a href="https://www.instagram.com/ericjk_?igsh=ZGI5cDN6Zmw4bmZn" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          <a href="https://github.com/EricJKBriones" title="Github" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/eric-john-kenneth-briones-233204330" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
        </div>
        <div className="container">
          <div className="copyright">
            <span>Copyright</span> <strong className="px-1 sitename">Eric John Kenneth Briones</strong> <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
