/**
 * Forms & Toast Feedback Module
 */
export function initForms(closeModalFn) {
  const mainContactForm = document.getElementById('contact-form-main');
  const modalLeadForm = document.getElementById('modal-lead-form');

  function handleFormSubmit(form, successMsg) {
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.textContent = 'Enviando...';
          submitBtn.disabled = true;
        }

        setTimeout(() => {
          showToast(successMsg);
          if (submitBtn) {
            submitBtn.textContent = 'Enviar Mensaje';
            submitBtn.disabled = false;
          }
          form.reset();
          if (closeModalFn) closeModalFn();
        }, 1000);
      });
    }
  }

  handleFormSubmit(mainContactForm, 'Mensaje recibido. Te contactaremos en menos de 2 horas.');
  handleFormSubmit(modalLeadForm, 'Inscripción recibida. Revisa tu correo o WhatsApp.');
}

export function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast-alert';
  toast.style.cssText = `
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    left: 1.5rem;
    max-width: 400px;
    margin-left: auto;
    background: var(--text-main);
    color: var(--bg-body);
    border-left: 4px solid var(--brand-red);
    padding: 0.9rem 1.25rem;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    z-index: 3000;
    font-weight: 600;
    font-size: 0.875rem;
  `;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}
