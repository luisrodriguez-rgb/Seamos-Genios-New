/**
 * SEAMOS GENIOS - CHECKOUT GATEWAY MODAL (v3.0)
 * Allows payment method selection (Wompi, PSE, Nequi, Bancolombia, Tarjeta)
 */

import { calculateCartTotals, formatCOP, getCartItems, closeCartDrawer, generateWhatsAppCheckoutUrl } from './cart.js';

export function initCheckoutModal() {
  const checkoutModal = document.getElementById('checkout-modal');
  const openCheckoutBtns = document.querySelectorAll('[data-open-checkout]');
  const closeCheckoutBtns = document.querySelectorAll('.checkout-modal-close');
  const paymentMethods = document.querySelectorAll('.payment-method-card');
  const checkoutTotalEl = document.getElementById('checkout-final-total');
  const checkoutForm = document.getElementById('checkout-payment-form');

  function openCheckout() {
    const totals = calculateCartTotals();
    const items = getCartItems();

    if (items.length === 0) {
      alert('Tu carrito está vacío. Añade un programa o simulacro para continuar.');
      return;
    }

    closeCartDrawer();

    if (checkoutTotalEl) {
      checkoutTotalEl.textContent = formatCOP(totals.total);
    }

    if (checkoutModal) {
      checkoutModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCheckout() {
    if (checkoutModal) {
      checkoutModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openCheckoutBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCheckout();
    });
  });

  closeCheckoutBtns.forEach(btn => {
    btn.addEventListener('click', closeCheckout);
  });

  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) closeCheckout();
    });
  }

  paymentMethods.forEach(card => {
    card.addEventListener('click', () => {
      paymentMethods.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const methodInput = document.getElementById('checkout-selected-method');
      if (methodInput) {
        methodInput.value = card.getAttribute('data-method') || 'pse';
      }
    });
  });

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const method = document.getElementById('checkout-selected-method')?.value || 'pse';
      const items = getCartItems();
      const totals = calculateCartTotals();

      const submitBtn = checkoutForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Generando orden de pago...</span>';
        submitBtn.disabled = true;

        setTimeout(() => {
          if (method === 'whatsapp') {
            window.open(generateWhatsAppCheckoutUrl(items, totals), '_blank');
          } else {
            alert(`¡Excelente! Redirigiendo a la pasarela segura (${method.toUpperCase()}) para procesar el pago de ${formatCOP(totals.total)}. Un asesor de Seamos Genios activará tus credenciales en 24h.`);
          }
          closeCheckout();
          submitBtn.innerHTML = 'Proceder al Pago Seguro →';
          submitBtn.disabled = false;
        }, 1200);
      }
    });
  }
}
