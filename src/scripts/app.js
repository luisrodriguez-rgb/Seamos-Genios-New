/**
 * SEAMOS GENIOS - MASTER CLIENT APPLICATION (v3.0)
 * Unifies E-Commerce Cart, Role Assistant, Auth Modals, Performance Counters & UI Animations
 */

import { initCart } from './cart.js';
import { initRoleGuide } from './role-guide.js';
import { initCatalogFilter } from './catalog-filter.js';
import { initModal } from './modal.js';
import { initCheckoutModal } from './checkout-modal.js';
import { initCountdown } from './countdown.js';
import { initAccordion } from './accordion.js';
import { initSchoolsDirectory } from './schools-directory.js';
import { initVideoPlayer } from './video-player.js';

// 1. Scroll Reveal (Smooth Intersection Observer)
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .product-card, .role-pillar-item, .flow-step-card, .testimonial-card, .leader-card');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

// 2. Dynamic Counters Animation
function initCounters() {
  const counterElements = document.querySelectorAll('[data-counter]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    counterElements.forEach(el => observer.observe(el));
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
      const easeOut = 1 - Math.pow(1 - progress, 4);
      const currentVal = Math.floor(easeOut * targetNum);

      if (targetNum >= 1000) {
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

// 3. Progress Bars in Hero Interactive Widget
function initProgressBars() {
  const fills = document.querySelectorAll('.subject-progress-fill');
  fills.forEach(fill => {
    const targetWidth = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
      fill.style.width = targetWidth;
    }, 400);
  });
}

export function initApp() {
  initScrollReveal();
  initCounters();
  initProgressBars();
  initCountdown();
  initAccordion();
  initModal();
  initCart();
  initRoleGuide();
  initCatalogFilter();
  initCheckoutModal();
  initSchoolsDirectory();
  initVideoPlayer();
}

// DOM Ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}
