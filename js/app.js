/**
 * SEAMOS GENIOS - MASTER JS ENTRY POINT
 * Modular ES6 Architecture
 */
import { initTheme } from './modules/theme.js';
import { initCountdown } from './modules/countdown.js';
import { initAccordion } from './modules/accordion.js';
import { initModal } from './modules/modal.js';
import { initForms } from './modules/forms.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initCountdown();
  initAccordion();
  const { closeModal } = initModal();
  initForms(closeModal);
});
