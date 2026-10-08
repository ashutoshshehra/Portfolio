/**
 * ============================================================================
 * ASHUTOSH SHEHRA — DEVELOPER PORTFOLIO
 * Clean, Human-Readable, Modular Vanilla JavaScript
 * ============================================================================
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light Theme Toggle)
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  // Retrieve stored theme or default to system preference (or dark)
  function initTheme() {
    const savedTheme = localStorage.getItem('ashutosh_portfolio_theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('ashutosh_portfolio_theme', theme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Navbar Scroll Effect & Scroll-Spy
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const backToTopBtn = document.getElementById('backToTopBtn');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Sticky navbar backdrop blur & border
    if (navbar) {
      if (scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top floating button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    // Scroll spy: highlight current section in navigation
    let currentSectionId = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.classList.toggle('open', isOpen);
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close drawer when any mobile link is tapped
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileMenuBtn.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 4. Scroll Reveal Animations (Intersection Observer)
  // --------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Reveal only once for performance
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.1,
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach((el) => el.classList.add('revealed'));
  }

  // --------------------------------------------------------------------------
  // 5. Project Details Modals
  // --------------------------------------------------------------------------
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const allModals = document.querySelectorAll('.modal-backdrop');

  function openModal(modalId) {
    const targetModal = document.getElementById(modalId);
    if (!targetModal) return;

    targetModal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Lock background scroll

    // Focus close button for accessibility
    const closeBtn = targetModal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function closeAllModals() {
    allModals.forEach((modal) => closeModal(modal));
  }

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  allModals.forEach((modal) => {
    // Close on backdrop click (outside dialog)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });

    // Close buttons inside modal
    const closeBtns = modal.querySelectorAll('.modal-close-btn, .modal-close-btn-action');
    closeBtns.forEach((btn) => {
      btn.addEventListener('click', () => closeModal(modal));
    });
  });

  // Close modals on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // --------------------------------------------------------------------------
  // 6. Copy Email Tooltip & Toast
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyTooltip = document.getElementById('copyTooltip');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'ashutoshshehra01@gmail.com';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showCopySuccess();
        }).catch(() => {
          fallbackCopyText(email);
        });
      } else {
        fallbackCopyText(email);
      }
    });
  }

  function showCopySuccess() {
    if (copyTooltip) copyTooltip.textContent = 'Copied!';
    showToast('Email copied to clipboard!');
    setTimeout(() => {
      if (copyTooltip) copyTooltip.textContent = 'Copy';
    }, 2500);
  }

  function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showCopySuccess();
    } catch (err) {
      showToast('Could not copy automatically');
    }
    document.body.removeChild(textArea);
  }

  // --------------------------------------------------------------------------
  // 7. Toast Notification Utility
  // --------------------------------------------------------------------------
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, duration = 3000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, duration);
  }

  // --------------------------------------------------------------------------
  // 8. Real Contact Form Handling & Message Dispatcher
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitFormBtn = document.getElementById('submitFormBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput && subjectInput.value.trim() ? subjectInput.value.trim() : 'Software Engineering Opportunity / Project Discussion';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = 'Please fill out all required fields (Name, Email, Message).';
        }
        return;
      }

      // Enter active sending state
      if (submitFormBtn) {
        submitFormBtn.disabled = true;
        submitFormBtn.innerHTML = `
          <span>Sending Message...</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon">
            <line x1="12" y1="2" x2="12" y2="6"></line>
            <line x1="12" y1="18" x2="12" y2="22"></line>
            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
            <line x1="2" y1="12" x2="6" y2="12"></line>
            <line x1="18" y1="12" x2="22" y2="12"></line>
          </svg>
        `;
      }

      if (formStatus) {
        formStatus.className = 'form-status info';
        formStatus.textContent = 'Sending message to Ashutosh...';
      }

      // Prepare fallback email URLs (in case of local file:// protocol or offline)
      const encodedSubject = encodeURIComponent(`[Portfolio] ${subject} - ${name}`);
      const encodedBody = encodeURIComponent(
        `Hi Ashutosh,\n\n${message}\n\n---\nSender Name: ${name}\nSender Email: ${email}`
      );
      const mailtoUrl = `mailto:ashutoshshehra01@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
      const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ashutoshshehra01@gmail.com&su=${encodedSubject}&body=${encodedBody}`;

      const isFileProtocol = window.location.protocol === 'file:';
      let sentSuccessfully = false;
      let activationNeeded = false;

      // Attempt FormSubmit AJAX if running via a web server (http: or https:)
      if (!isFileProtocol) {
        try {
          const response = await fetch('https://formsubmit.co/ajax/ashutoshshehra01@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              email: email,
              _subject: `[Portfolio Message] ${subject} - ${name}`,
              message: message,
              _template: 'table',
              _captcha: 'false'
            })
          });

          const data = await response.json();
          if (response.ok && data.success === 'true') {
            sentSuccessfully = true;
          } else if (data.message && data.message.includes('Activation')) {
            activationNeeded = true;
          }
        } catch (err) {
          console.warn('FormSubmit AJAX failed, activating email fallback:', err);
        }
      }

      // Restore submit button
      if (submitFormBtn) {
        submitFormBtn.disabled = false;
        submitFormBtn.innerHTML = `
          <span>Send Message</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="btn-arrow">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        `;
      }

      // 1. Success via FormSubmit
      if (sentSuccessfully) {
        if (formStatus) {
          formStatus.className = 'form-status success';
          formStatus.textContent = '✓ Message delivered directly to ashutoshshehra01@gmail.com! I will reply soon.';
        }
        showToast('Message sent! Looking forward to connecting.');
        contactForm.reset();
        return;
      }

      // 2. FormSubmit needs 1st-time Activation
      if (activationNeeded) {
        if (formStatus) {
          formStatus.className = 'form-status warning';
          formStatus.innerHTML = `
            <div class="direct-send-fallback">
              <div class="fallback-title" style="color: #f59e0b;">⚠️ 1-Time Form Activation Required</div>
              <p class="fallback-note">FormSubmit has sent an activation link to <strong>ashutoshshehra01@gmail.com</strong>. Click "Activate Form" in your email once to enable direct inbox delivery.<br><br>You can also send this message directly right now:</p>
              <div class="fallback-buttons">
                <a href="${gmailWebUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                  Open in Gmail Web ↗
                </a>
                <a href="${mailtoUrl}" class="btn btn-sm btn-secondary">
                  Open Default Mail App ↗
                </a>
              </div>
            </div>
          `;
        }
        showToast('Activation email sent to ashutoshshehra01@gmail.com');
        return;
      }

      // 3. Fallback for local file:// mode or network error: Launch direct mail client
      window.location.href = mailtoUrl;

      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.innerHTML = `
          <div class="direct-send-fallback">
            <div class="fallback-title">✓ Ready to send! Email client opened.</div>
            <p class="fallback-note">If your mail app didn't open automatically, use one of the direct links below to send immediately:</p>
            <div class="fallback-buttons">
              <a href="${gmailWebUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
                Open in Gmail Web ↗
              </a>
              <a href="${mailtoUrl}" class="btn btn-sm btn-secondary">
                Open Default Mail App ↗
              </a>
            </div>
          </div>
        `;
      }
      showToast('Opening email app...');
    });
  }

  // --------------------------------------------------------------------------
  // 9. Initial Launch
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    handleScroll();
  });

})();
