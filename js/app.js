/**
 * SEAMOS GENIOS - MASTER APPLICATION SCRIPT (v2.3)
 * High-performance UI/UX micro-interactions, scroll reveal & dynamic counters
 */

(function () {
  'use strict';

  // 1. SCROLL REVEAL (IntersectionObserver for smooth 60fps entrance)
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .program-card, .flow-step-card, .testimonial-card, .leader-card, .table-wrapper');

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach((el, index) => {
        el.classList.add('reveal');
        // Add staggered delays for grids
        if (el.classList.contains('program-card') || el.classList.contains('flow-step-card') || el.classList.contains('testimonial-card')) {
          const delayClass = `reveal-delay-${(index % 4) + 1}`;
          el.classList.add(delayClass);
        }
        revealObserver.observe(el);
      });
    } else {
      // Fallback for older browsers
      revealElements.forEach(el => el.classList.add('revealed'));
    }
  }

  // 2. DYNAMIC NUMBER COUNTERS (Counts up on scroll)
  function initCounters() {
    const counterElements = document.querySelectorAll('[data-counter]');

    if ('IntersectionObserver' in window) {
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      counterElements.forEach(el => counterObserver.observe(el));
    } else {
      counterElements.forEach(el => {
        el.textContent = el.getAttribute('data-counter');
      });
    }

    function animateCounter(el) {
      const targetStr = el.getAttribute('data-counter') || el.textContent;
      const targetNum = parseInt(targetStr.replace(/\D/g, ''), 10);
      const prefix = targetStr.startsWith('+') ? '+' : '';
      const suffix = targetStr.includes('%') ? '%' : (targetStr.includes('+') && !prefix ? '+' : '');
      const duration = 1400;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out quart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        const currentVal = Math.floor(easeOut * targetNum);

        if (targetNum >= 1000) {
          const formatted = (currentVal / 1000).toFixed(1).replace('.0', '') + (targetNum >= 1000 ? '.000' : '');
          el.textContent = `${prefix}${currentVal >= 1000 ? '1.400' : currentVal}${suffix}`;
        } else {
          el.textContent = `${prefix}${currentVal}${suffix}`;
        }

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = targetStr;
        }
      }

      requestAnimationFrame(update);
    }
  }

  // 3. PROGRESS BARS ENTRANCE ANIMATION
  function initProgressBars() {
    const fills = document.querySelectorAll('.subject-progress-fill');
    fills.forEach(fill => {
      const targetWidth = fill.style.width;
      fill.style.width = '0%';
      setTimeout(() => {
        fill.style.width = targetWidth;
      }, 300);
    });
  }

  // 4. COUNTDOWN TIMER (ICFES Calendario A - 26 Julio 2026)
  function initCountdown() {
    const targetDate = new Date('2026-07-26T07:00:00-05:00').getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const dEl = document.getElementById('timer-days');
        const hEl = document.getElementById('timer-hours');
        const mEl = document.getElementById('timer-mins');
        const sEl = document.getElementById('timer-secs');

        if (dEl) dEl.textContent = String(days).padStart(2, '0');
        if (hEl) hEl.textContent = String(hours).padStart(2, '0');
        if (mEl) mEl.textContent = String(minutes).padStart(2, '0');
        if (sEl) sEl.textContent = String(seconds).padStart(2, '0');
      }
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
  }

  // 5. FAQ ACCORDION (100% Functional & Smooth Click Toggle for ALL questions)
  function initAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-btn');
      if (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          const wasActive = item.classList.contains('active');

          // Close all other items
          faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
          });

          // Toggle current
          if (!wasActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // 6. AUTH & REGISTRATION MODAL
  function initModal() {
    const authModal = document.getElementById('auth-modal');
    const openModalBtns = document.querySelectorAll('[data-open-modal]');
    const closeModalBtns = document.querySelectorAll('.modal-close-btn');

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Role switcher
    const roleButtons = document.querySelectorAll('.role-tab-btn');
    const roleDescription = document.getElementById('modal-role-desc');
    const roleInput = document.getElementById('modal-role-input');

    roleButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        roleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const role = btn.getAttribute('data-role');
        if (roleInput) roleInput.value = role;

        if (roleDescription) {
          if (role === 'colegio') {
            roleDescription.textContent = 'Acceso institucional para rectores, coordinadores y docentes.';
          } else if (role === 'padre') {
            roleDescription.textContent = 'Portal de seguimiento académico y reportes de progreso para acudientes.';
          } else {
            roleDescription.textContent = 'Acceso a simulacros calibrados, dashboard en vivo y neuroaprendizaje con IA.';
          }
        }
      });
    });

    // Mobile Drawer Toggle
    if (mobileMenuBtn && mobileDrawer) {
      mobileMenuBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        mobileDrawer.classList.toggle('active');
      });

      mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
          mobileDrawer.classList.remove('active');
        });
      });

      document.addEventListener('click', function (e) {
        if (!mobileDrawer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
          mobileDrawer.classList.remove('active');
        }
      });
    }

    function openModal() {
      if (authModal) {
        authModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeModal() {
      if (authModal) {
        authModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    openModalBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    closeModalBtns.forEach(btn => {
      btn.addEventListener('click', closeModal);
    });

    if (authModal) {
      authModal.addEventListener('click', function (e) {
        if (e.target === authModal) closeModal();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && authModal && authModal.classList.contains('active')) {
        closeModal();
      }
    });

    return { closeModal };
  }

  // 7. FORMS & TOAST FEEDBACK
  function initForms(closeModalFn) {
    const mainContactForm = document.getElementById('contact-form-main');
    const modalLeadForm = document.getElementById('modal-lead-form');

    function showToast(msg) {
      const toast = document.createElement('div');
      toast.className = 'toast-alert';
      toast.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        left: 2rem;
        max-width: 420px;
        margin-left: auto;
        background: #0F172A;
        color: #FFFFFF;
        border-left: 4px solid #FF1E27;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 15px 35px rgba(0,0,0,0.35);
        z-index: 3000;
        font-weight: 600;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
      `;
      toast.textContent = msg;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 4000);
    }

    function handleFormSubmit(form, successMsg) {
      if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          const submitBtn = form.querySelector('button[type="submit"]');
          const originalText = submitBtn ? submitBtn.textContent : '';

          if (submitBtn) {
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
          }

          setTimeout(() => {
            showToast(successMsg);
            if (submitBtn) {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
            }
            form.reset();
            if (closeModalFn) closeModalFn();
          }, 800);
        });
      }
    }

    handleFormSubmit(mainContactForm, 'Mensaje recibido. Te contactaremos en menos de 2 horas.');
    handleFormSubmit(modalLeadForm, 'Inscripción recibida. Revisa tu correo o WhatsApp.');
  }

  // 8. VIDEO PLAYER MODAL
  function initVideoPlayer() {
    const videoPreviewCard = document.getElementById('faq-video-card');
    const videoModal = document.getElementById('video-modal');
    const videoModalClose = document.getElementById('video-modal-close');
    const videoFrame = document.getElementById('video-frame');

    function openVideoModal() {
      if (videoModal) {
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (videoFrame && videoFrame.dataset.src) {
          videoFrame.src = videoFrame.dataset.src;
        }
      }
    }

    function closeVideoModal() {
      if (videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
        if (videoFrame) {
          videoFrame.src = '';
        }
      }
    }

    if (videoPreviewCard) {
      videoPreviewCard.addEventListener('click', openVideoModal);
    }

    if (videoModalClose) {
      videoModalClose.addEventListener('click', closeVideoModal);
    }

    if (videoModal) {
      videoModal.addEventListener('click', function (e) {
        if (e.target === videoModal) closeVideoModal();
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
        closeVideoModal();
      }
    });
  }

  // 9. SCHOOLS INTERACTIVE DIRECTORY & SEARCH
  function initSchoolsDirectory() {
    const toggleBtn = document.getElementById('btn-toggle-schools-dir');
    const dirPanel = document.getElementById('schools-directory-panel');
    const searchInput = document.getElementById('schools-search-input');
    const filterPills = document.querySelectorAll('.dir-filter-pill');
    const schoolCards = document.querySelectorAll('.school-directory-card');
    const emptyState = document.getElementById('schools-empty-state');

    if (!toggleBtn || !dirPanel) return;

    toggleBtn.addEventListener('click', function () {
      const isOpen = dirPanel.classList.toggle('active');
      toggleBtn.classList.toggle('active', isOpen);
      const textSpan = toggleBtn.querySelector('.toggle-text');
      if (textSpan) {
        textSpan.textContent = isOpen 
          ? 'Ocultar Directorio de Instituciones' 
          : 'Explorar las +60 Instituciones Aliadas por Departamento';
      }
    });

    let currentRegion = 'all';
    let currentSearch = '';

    function filterSchools() {
      let visibleCount = 0;

      schoolCards.forEach(card => {
        const cardRegion = card.getAttribute('data-region');
        const cardSearch = card.getAttribute('data-search') || '';

        const matchesRegion = (currentRegion === 'all' || cardRegion === currentRegion);
        const matchesSearch = (!currentSearch || cardSearch.includes(currentSearch));

        if (matchesRegion && matchesSearch) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
      }
    }

    filterPills.forEach(pill => {
      pill.addEventListener('click', function () {
        filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentRegion = pill.getAttribute('data-filter');
        filterSchools();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', function (e) {
        currentSearch = e.target.value.trim().toLowerCase();
        filterSchools();
      });
    }
  }

  // DOM Ready Execution
  function start() {
    initScrollReveal();
    initCounters();
    initProgressBars();
    initCountdown();
    initAccordion();
    const { closeModal } = initModal();
    initForms(closeModal);
    initVideoPlayer();
    initSchoolsDirectory();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
