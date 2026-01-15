/* Custom JavaScript for project-specific behaviors */
(function () {
  'use strict';

  // Placeholder for custom scripts. Keep minimal to avoid collisions.
  document.addEventListener('DOMContentLoaded', function () {
    // Example: ensure sitename elements are consistent
    var names = document.querySelectorAll('.sitename');
    for (var i = 0; i < names.length; i++) {
      names[i].textContent = 'Eric John Kenneth Briones';
    }

    // Calculate and display age from `data-birth` on #birthdate
    try {
      var birthEl = document.getElementById('birthdate');
      if (birthEl) {
        var birthData = birthEl.getAttribute('data-birth');
        if (birthData) {
          var bd = new Date(birthData + 'T00:00:00');
          if (!isNaN(bd)) {
            var today = new Date();
            var age = today.getFullYear() - bd.getFullYear();
            var m = today.getMonth() - bd.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < bd.getDate())) {
              age--;
            }
            var ageEl = document.getElementById('age');
            if (ageEl) ageEl.textContent = age;
          }
        }
      }
    } catch (e) {
      // fail silently
    }

    // Helper to escape HTML when injecting user messages
    function escapeHtml(str) {
      if (!str) return '';
      return String(str).replace(/[&<>\"']/g, function (s) {
        return ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '\"': '&quot;',
          "'": '&#39;'
        })[s];
      });
    }

    // Function to load messages from the server
    function loadMessages() {
      fetch('/api/get-messages')
        .then(function (resp) { return resp.json(); })
        .then(function (data) {
          if (data.success) {
            var messagesList = document.getElementById('messages-list');
            if (messagesList) {
              messagesList.innerHTML = ''; // Clear existing messages
              if (data.messages.length === 0) {
                messagesList.innerHTML = '<div class="col-lg-8 mx-auto"><div class="testimonial-item"><div class="testimonial-content text-center"><p class="text-muted">No messages yet — send one via the contact form.</p></div></div></div>';
              } else {
                data.messages.forEach(function (messageData) {
                  var container = document.createElement('div');
                  container.className = 'col-lg-8 mx-auto';
                  var timeStr = new Date(messageData.createdAt).toLocaleString();
                  container.innerHTML = '<div class="testimonial-item"><div class="testimonial-content"><p><i class="bi bi-quote quote-icon-left"></i><span>' + escapeHtml(messageData.message) + '</span><i class="bi bi-quote quote-icon-right"></i></p><div class="small text-muted">Posted by ' + escapeHtml(messageData.name) + ' on ' + escapeHtml(timeStr) + '</div></div></div>';
                  messagesList.appendChild(container);
                });
              }
            }
          }
        })
        .catch(function (err) {
          console.error('Error loading messages:', err);
          var messagesList = document.getElementById('messages-list');
          if (messagesList) {
            messagesList.innerHTML = '<div class="col-lg-8 mx-auto"><div class="testimonial-item"><div class="testimonial-content text-center"><p class="text-danger">Could not load messages.</p></div></div></div>';
          }
        });
    }

    // Load messages when the page loads
    loadMessages();

    // Intercept contact form submissions, post to server and append anonymous message
    try {
      var contactForm = document.querySelector('form.php-email-form');
      if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
          e.preventDefault();
          var formData = new FormData(contactForm);
          var messageText = formData.get('message') || '';
          var loading = contactForm.querySelector('.loading');
          var errorEl = contactForm.querySelector('.error-message');
          var sentEl = contactForm.querySelector('.sent-message');
          if (loading) loading.style.display = 'block';
          if (errorEl) errorEl.innerHTML = '';
          if (sentEl) sentEl.style.display = 'none';

          // Convert FormData to JSON for API compatibility
          var jsonData = {};
          formData.forEach(function (value, key) {
            jsonData[key] = value;
          });

          fetch(contactForm.action, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
          })
            .then(function (resp) { return resp.json(); })
            .then(function (data) {
              if (data.success || data.message === 'Message received successfully') {
                if (loading) loading.style.display = 'none';
                if (sentEl) sentEl.style.display = 'block';
                contactForm.reset();
                loadMessages(); // Reload messages after submission
              } else {
                throw new Error(data.message || 'Unknown error');
              }
            })
            .catch(function (err) {
              if (loading) loading.style.display = 'none';
              if (errorEl) errorEl.innerHTML = 'There was an error sending your message: ' + (err.message || 'Please try again.');
            });
        });
      }
    } catch (e) {
      // ignore form JS errors
    }

    // All available icons
    const allIcons = [
      'assets/img/icons/3d.png',
      'assets/img/icons/adobe_photoshop.png',
      'assets/img/icons/android.png',
      'assets/img/icons/Autodesk_23627.png',
      'assets/img/icons/Blender_23505.png',
      'assets/img/icons/BrAIn.png',
      'assets/img/icons/c-.png',
      'assets/img/icons/cyber-security.png',
      'assets/img/icons/github.png',
      'assets/img/icons/html.png',
      'assets/img/icons/java-script.png',
      'assets/img/icons/java.png',
      'assets/img/icons/settings.png',
      'assets/img/icons/text.png',
      'assets/img/icons/web.png'
    ];

    const symbols = document.querySelectorAll('.scroll-symbol');
    const usedIcons = new Set();
    const occupiedSpaces = []; // Track icon positions to prevent overlap
    
    // Function to get random rotation
    function getRandomRotation() {
      return Math.floor(Math.random() * 360) - 180;
    }

    // Function to get random size between 50px and 80px
    function getRandomSize() {
      return Math.floor(Math.random() * 31) + 50;
    }

    // Function to get random position with minimum spacing
    function getRandomPosition() {
      const minSpacing = 150; // Minimum pixels between icons
      let left, top, valid;
      
      do {
        valid = true;
        left = Math.floor(Math.random() * 85) + 5; // 5% to 90%
        top = Math.floor(Math.random() * 75) + 10; // 10% to 85%
        
        // Check if this position is too close to existing icons
        for (let space of occupiedSpaces) {
          const distance = Math.sqrt(
            Math.pow((left - space.left) * window.innerWidth / 100, 2) +
            Math.pow((top - space.top) * window.innerHeight / 100, 2)
          );
          
          if (distance < minSpacing) {
            valid = false;
            break;
          }
        }
      } while (!valid && occupiedSpaces.length > 0);
      
      return { left, top };
    }

    // Function to get random fade duration between 6-10 seconds
    function getRandomFadeDuration() {
      return (Math.floor(Math.random() * 50) + 60) / 10; // 6s to 11s
    }

    // Function to get unique icon not currently in use
    function getUniqueIcon() {
      let randomIcon;
      let attempts = 0;
      do {
        randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)];
        attempts++;
      } while (usedIcons.has(randomIcon) && attempts < 30);
      return randomIcon;
    }

    // Create keyframe animation for each symbol with random duration
    function createFadeKeyframes(duration) {
      const keyframeName = `fadeInOut_${Math.random().toString(36).substr(2, 9)}`;
      const keyframeRule = `
        @keyframes ${keyframeName} {
          0%, 100% { opacity: 0.12; }
          25% { opacity: 0.08; }
          50% { opacity: 0.15; }
          75% { opacity: 0.08; }
        }
      `;
      const style = document.createElement('style');
      style.textContent = keyframeRule;
      document.head.appendChild(style);
      return keyframeName;
    }

    // Function to set random icon with scattered position and custom fade duration
    function setRandomIcon(symbol, index) {
      const rotation = getRandomRotation();
      const size = getRandomSize();
      const position = getRandomPosition();
      const fadeDuration = getRandomFadeDuration();
      const randomIcon = getUniqueIcon();
      
      // Remove old position from occupied spaces
      const oldIndex = occupiedSpaces.findIndex(p => p.index === index);
      if (oldIndex !== -1) {
        occupiedSpaces.splice(oldIndex, 1);
      }
      
      // Add new position to occupied spaces
      occupiedSpaces.push({ left: position.left, top: position.top, index: index });
      
      // Remove old icon from used set if it exists
      if (symbol.dataset.icon) {
        usedIcons.delete(symbol.dataset.icon);
      }
      
      // Add new icon to used set
      usedIcons.add(randomIcon);
      symbol.dataset.icon = randomIcon;
      
      symbol.style.backgroundImage = `url('${randomIcon}')`;
      symbol.style.setProperty('--current-rotation', rotation + 'deg');
      symbol.dataset.rotation = rotation;
      symbol.style.width = size + 'px';
      symbol.style.height = size + 'px';
      symbol.style.left = position.left + '%';
      symbol.style.top = position.top + '%';
      
      // Create and apply custom fade animation with unique duration
      const keyframeName = createFadeKeyframes(fadeDuration);
      symbol.style.animation = `float 4s ease-in-out infinite, ${keyframeName} ${fadeDuration}s ease-in-out infinite`;
    }

    // Initialize all symbols with random icons
    symbols.forEach((symbol, index) => {
      setRandomIcon(symbol, index);
      
      // Change icons every random duration (6-11 seconds)
      setInterval(() => {
        setRandomIcon(symbol, index);
      }, (Math.floor(Math.random() * 50) + 60) * 100);
    });

    // Scroll parallax effect
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;
      symbols.forEach((symbol, index) => {
        const speed = (Math.random() * 0.5) + 0.2; // 0.2 to 0.7 speed variation
        const rotation = symbol.dataset.rotation || 0;
        symbol.style.transform = `translateY(${scrollY * speed}px) rotate(${rotation}deg)`;
      });
    });

    // Ensure PDF links open nicely in the GLightbox (use iframe type for PDFs)
    try {
      document.querySelectorAll('a.glightbox.preview-link').forEach(function (el) {
        var href = (el.getAttribute('href') || '').toLowerCase();
        if (href.endsWith('.pdf')) {
          el.setAttribute('data-type', 'iframe');
          // optional: make sure it opens in a comfortable size
          el.setAttribute('data-width', '900');
          el.setAttribute('data-height', '600');
        }
      });
    } catch (e) {
      // ignore if DOM not ready or selector fails
    }
  });

})();
