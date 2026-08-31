/**
 * SEAMOS GENIOS - E-COMMERCE CART ENGINE (v3.0)
 * Persistent localStorage cart, reactive badge, slide-over drawer & WhatsApp / Gateway checkout
 */

const CART_STORAGE_KEY = 'sg_cart_items_v1';
const APPLIED_COUPON_KEY = 'sg_cart_coupon_v1';

// Available Coupons Database
const COUPONS = {
  'GENIO10': { discount: 0.10, desc: '10% Descuento Especial' },
  'ICFES2026': { discount: 0.15, desc: '15% Descuento PreICFES' },
  'COLEGIO50': { discount: 0.50, desc: '50% Descuento Institucional' }
};

export function getCartItems() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Error reading cart from localStorage', e);
    return [];
  }
}

export function saveCartItems(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    updateCartBadge();
    renderCartDrawer();
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
}

export function getAppliedCoupon() {
  try {
    const code = localStorage.getItem(APPLIED_COUPON_KEY);
    return code && COUPONS[code] ? { code, ...COUPONS[code] } : null;
  } catch (e) {
    return null;
  }
}

export function applyCouponCode(code) {
  const clean = code.trim().toUpperCase();
  if (COUPONS[clean]) {
    localStorage.setItem(APPLIED_COUPON_KEY, clean);
    showCartToast(`Cupón "${clean}" aplicado (${COUPONS[clean].desc})`);
    renderCartDrawer();
    return { success: true, coupon: COUPONS[clean] };
  } else {
    showCartToast('Cupón inválido o expirado');
    return { success: false, message: 'Cupón no válido' };
  }
}

export function removeCoupon() {
  localStorage.removeItem(APPLIED_COUPON_KEY);
  renderCartDrawer();
}

export function addToCart(product) {
  const items = getCartItems();
  const existingIndex = items.findIndex(item => item.id === product.id);

  if (existingIndex > -1) {
    items[existingIndex].qty = (items[existingIndex].qty || 1) + (product.qty || 1);
  } else {
    items.push({
      id: product.id,
      name: product.name,
      price: product.price,
      origPrice: product.origPrice || product.price,
      category: product.category || 'Programa',
      qty: product.qty || 1
    });
  }

  saveCartItems(items);
  showCartToast(`"${product.name}" añadido al carrito`);
  openCartDrawer();
}

export function removeFromCart(productId) {
  let items = getCartItems();
  items = items.filter(item => item.id !== productId);
  saveCartItems(items);
  showCartToast('Producto eliminado del carrito');
}

export function updateItemQuantity(productId, delta) {
  const items = getCartItems();
  const item = items.find(i => i.id === productId);
  if (!item) return;

  item.qty = (item.qty || 1) + delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
  } else {
    saveCartItems(items);
  }
}

export function calculateCartTotals() {
  const items = getCartItems();
  const subtotal = items.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
  const totalCount = items.reduce((sum, item) => sum + (item.qty || 1), 0);

  const coupon = getAppliedCoupon();
  const discountAmount = coupon ? Math.round(subtotal * coupon.discount) : 0;
  const total = Math.max(0, subtotal - discountAmount);

  return {
    subtotal,
    discountAmount,
    coupon,
    total,
    totalCount
  };
}

export function formatCOP(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(amount);
}

export function updateCartBadge() {
  const { totalCount } = calculateCartTotals();
  const badges = document.querySelectorAll('.nav-cart-badge, .cart-count-badge');

  badges.forEach(badge => {
    badge.textContent = totalCount;
    badge.classList.remove('bump');
    // Trigger reflow to restart animation
    void badge.offsetWidth;
    if (totalCount > 0) {
      badge.classList.add('bump');
    }
  });
}

export function renderCartDrawer() {
  const container = document.getElementById('cart-items-container');
  const emptyState = document.getElementById('cart-empty-state');
  const footerEl = document.getElementById('cart-footer-section');
  if (!container) return;

  const items = getCartItems();
  const totals = calculateCartTotals();

  if (items.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (footerEl) footerEl.style.display = 'flex';

  container.innerHTML = items.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-icon-box">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
      </div>
      <div class="cart-item-details">
        <h4 class="cart-item-name">${item.name}</h4>
        <div class="cart-item-category">${item.category}</div>
        <div class="cart-item-price-row">
          <div class="cart-qty-control">
            <button type="button" class="cart-qty-btn btn-qty-minus" data-id="${item.id}" aria-label="Disminuir cantidad">−</button>
            <span class="cart-qty-num">${item.qty}</span>
            <button type="button" class="cart-qty-btn btn-qty-plus" data-id="${item.id}" aria-label="Aumentar cantidad">+</button>
          </div>
          <div class="cart-item-price">${formatCOP(item.price * item.qty)}</div>
        </div>
      </div>
      <button type="button" class="cart-item-remove btn-item-remove" data-id="${item.id}" aria-label="Eliminar producto">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
      </button>
    </div>
  `).join('');

  // Update summary numbers
  const subtotalEl = document.getElementById('cart-subtotal-val');
  const discountRowEl = document.getElementById('cart-discount-row');
  const discountValEl = document.getElementById('cart-discount-val');
  const totalValEl = document.getElementById('cart-total-val');

  if (subtotalEl) subtotalEl.textContent = formatCOP(totals.subtotal);
  if (totalValEl) totalValEl.textContent = formatCOP(totals.total);

  if (discountRowEl && discountValEl) {
    if (totals.discountAmount > 0) {
      discountRowEl.style.display = 'flex';
      discountValEl.textContent = `-${formatCOP(totals.discountAmount)} (${totals.coupon.code})`;
    } else {
      discountRowEl.style.display = 'none';
    }
  }

  // Bind item controls
  container.querySelectorAll('.btn-qty-minus').forEach(btn => {
    btn.addEventListener('click', () => updateItemQuantity(btn.dataset.id, -1));
  });
  container.querySelectorAll('.btn-qty-plus').forEach(btn => {
    btn.addEventListener('click', () => updateItemQuantity(btn.dataset.id, 1));
  });
  container.querySelectorAll('.btn-item-remove').forEach(btn => {
    btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
  });

  // Update WhatsApp order link
  const waBtn = document.getElementById('btn-cart-wa-checkout');
  if (waBtn) {
    waBtn.href = generateWhatsAppCheckoutUrl(items, totals);
  }
}

export function generateWhatsAppCheckoutUrl(items, totals) {
  const phone = '573001234567';
  let message = `Hola Seamos Genios. Deseo realizar la compra de los siguientes programas:\n\n`;

  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* (x${item.qty}) - ${formatCOP(item.price * item.qty)}\n`;
  });

  message += `\nSubtotal: ${formatCOP(totals.subtotal)}`;
  if (totals.discountAmount > 0) {
    message += `\nDescuento aplicado: -${formatCOP(totals.discountAmount)} (${totals.coupon.code})`;
  }
  message += `\nTOTAL A PAGAR: ${formatCOP(totals.total)}\n\n¿Cuales son los medios de pago disponibles (Nequi, PSE, Tarjeta, Wompi)? Gracias.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function openCartDrawer() {
  const overlay = document.getElementById('cart-overlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

export function closeCartDrawer() {
  const overlay = document.getElementById('cart-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

export function showCartToast(message) {
  let toast = document.getElementById('cart-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cart-toast';
    toast.className = 'cart-toast';
    toast.innerHTML = `
      <svg class="cart-toast-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span id="cart-toast-text">${message}</span>
    `;
    document.body.appendChild(toast);
  } else {
    const textEl = document.getElementById('cart-toast-text');
    if (textEl) textEl.textContent = message;
  }

  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}

export function initCart() {
  // Cart open trigger buttons
  document.querySelectorAll('[data-open-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartDrawer();
    });
  });

  // Cart close trigger buttons
  document.querySelectorAll('.cart-close-btn').forEach(btn => {
    btn.addEventListener('click', closeCartDrawer);
  });

  const overlay = document.getElementById('cart-overlay');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeCartDrawer();
    });
  }

  // Coupon application
  const applyCouponBtn = document.getElementById('btn-apply-coupon');
  const couponInput = document.getElementById('cart-coupon-input');
  if (applyCouponBtn && couponInput) {
    applyCouponBtn.addEventListener('click', () => {
      if (couponInput.value) {
        applyCouponCode(couponInput.value);
        couponInput.value = '';
      }
    });
    couponInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        applyCouponBtn.click();
      }
    });
  }

  // Add to cart buttons across the page
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = {
        id: btn.dataset.productId || 'sg-item',
        name: btn.dataset.productName || 'Programa Seamos Genios',
        price: parseInt(btn.dataset.productPrice || '15000', 10),
        origPrice: parseInt(btn.dataset.productOrigPrice || '30000', 10),
        category: btn.dataset.productCategory || 'Simulacro',
        qty: 1
      };
      addToCart(product);
    });
  });

  // Initial render
  updateCartBadge();
  renderCartDrawer();
}
