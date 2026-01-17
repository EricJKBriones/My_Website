'use client';

import React from 'react';

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/[&<>"']/g, (s) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[s]);
}

const Messages = ({ messages }) => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Messages</h2>
        <p>Messages submitted via the contact form — shown anonymously.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div id="messages-list" className="row gy-4">
          {messages.length === 0 && (
            <div className="col-lg-8 mx-auto">
              <div className="testimonial-item">
                <div className="testimonial-content text-center">
                  <p className="text-muted">No messages yet — send one via the contact form.</p>
                </div>
              </div>
            </div>
          )}
          {messages.map((message, index) => (
            <div key={index} className="col-lg-8 mx-auto">
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{escapeHtml(message)}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;