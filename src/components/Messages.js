'use client';

import React, { useEffect, useState } from 'react';

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

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadMessages = () => {
    setLoading(true);
    fetch('/api/get-messages')
      .then(resp => resp.json())
      .then(data => {
        if (data.messages) {
          setMessages(data.messages);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading messages:', err);
        setError('Could not load messages.');
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Messages</h2>
        <p>Messages submitted via the contact form — shown anonymously.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div id="messages-list" className="row gy-4">
          {loading && (
            <div className="col-lg-8 mx-auto">
              <div className="testimonial-item">
                <div className="testimonial-content text-center">
                  <p className="text-muted">Loading messages...</p>
                </div>
              </div>
            </div>
          )}
          {error && (
            <div className="col-lg-8 mx-auto">
              <div className="testimonial-item">
                <div className="testimonial-content text-center">
                  <p className="text-danger">{error}</p>
                </div>
              </div>
            </div>
          )}
          {!loading && !error && messages.length === 0 && (
            <div className="col-lg-8 mx-auto">
              <div className="testimonial-item">
                <div className="testimonial-content text-center">
                  <p className="text-muted">No messages yet — send one via the contact form.</p>
                </div>
              </div>
            </div>
          )}
          {!loading && !error && messages.map((message, index) => (
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