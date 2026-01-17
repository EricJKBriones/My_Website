'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ loading: false, error: null, sent: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setStatus({ loading: false, error: 'Please fill in all fields.', sent: false });
      return;
    }

    setStatus({ loading: true, error: null, sent: false });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Server error');
      }

      const data = await res.json();
      if (data.status === "Message sent and saved!") {
        setStatus({ loading: false, error: null, sent: true });
        
        setMessage('');
        setTimeout(() => setStatus({ loading: false, error: null, sent: false }), 2000);
      } else {
        throw new Error(data.status || 'Unknown submission error');
      }
    } catch (err) {
      setStatus({ loading: false, error: 'There was an error sending your message: ' + err.message, sent: false });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Address</h3>
                <p>Purok-4 Barangay Dalas, Labo, Camarines Norte, Philippines</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Me</h3>
                <p>09476416126</p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Me</h3>
                <p><a href="mailto:briones.eric2003@gmail.com">briones.eric2003@gmail.com</a></p>
              </div>
            </div>
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-linkedin flex-shrink-0"></i>
              <div>
                <h3>LinkedIn</h3>
                <p><a href="https://www.linkedin.com/in/eric-john-kenneth-briones-233204330" target="_blank" rel="noopener noreferrer">eric-john-kenneth-briones-233204330</a></p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="php-email-form fade-up" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  {status.loading && <div className="loading" style={{ display: 'block' }}>Loading</div>}
                  {status.error && <div className="error-message" style={{ display: 'block' }}>{status.error}</div>}
                  {status.sent && <div className="sent-message" style={{ display: 'block' }}>Your message has been sent. Thank you!</div>}
                  <button type="submit" className="php-email-form button" disabled={status.loading}>Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;