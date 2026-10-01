'use client';

import React, { useState } from 'react';
import WhatsappIcon from './icons/WhatsappIcon';
import { useCart, formatCOP } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    openCheckout,
    appliedCoupon,
    subtotal,
    discountAmount,
    total,
    totalCount,
    updateQuantity,
    removeFromCart,
    applyCoupon,
    generateWhatsAppOrderUrl,
  } = useCart();

  const [couponCode, setCouponCode] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim()) {
      applyCoupon(couponCode);
      setCouponCode('');
    }
  };

  return (
    <div
      className="cart-overlay active"
      id="cart-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCart();
      }}
    >
      <div className="cart-drawer">
        {/* Header */}
        <div className="cart-header">
          <h3 className="cart-header-title" id="cart-drawer-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span>Tu Carrito</span>
            <span className="cart-header-badge">
              <span className="cart-count-badge">{totalCount}</span> productos
            </span>
          </h3>
          <button className="cart-close-btn" onClick={closeCart} aria-label="Cerrar carrito de compras" type="button">
            &times;
          </button>
        </div>

        {/* Body / Items List */}
        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty-state" id="cart-empty-state" style={{ display: 'block' }}>
              <svg className="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <h4 className="cart-empty-title">Tu carrito está vacío</h4>
              <p className="cart-empty-desc">
                Añade un simulacro, plan intensivo o kit de cuadernillos para comenzar a estudiar hoy mismo.
              </p>
              <a
                href="#programas"
                onClick={closeCart}
                className="cart-close-btn"
                style={{
                  width: 'auto',
                  height: 'auto',
                  padding: '0.6rem 1.25rem',
                  borderRadius: 'var(--radius-pill)',
                  background: 'var(--brand-red)',
                  color: '#FFFFFF',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'inline-flex',
                }}
              >
                Explorar Catálogo →
              </a>
            </div>
          ) : (
            <div id="cart-items-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {items.map((item) => (
                <div className="cart-item" data-id={item.id} key={item.id}>
                  <div className="cart-item-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <div className="cart-item-category">{item.category}</div>
                    <div className="cart-item-price-row">
                      <div className="cart-qty-control">
                        <button
                          type="button"
                          className="cart-qty-btn btn-qty-minus"
                          onClick={() => updateQuantity(item.id, -1)}
                          aria-label="Disminuir cantidad"
                        >
                          −
                        </button>
                        <span className="cart-qty-num">{item.qty}</span>
                        <button
                          type="button"
                          className="cart-qty-btn btn-qty-plus"
                          onClick={() => updateQuantity(item.id, 1)}
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>
                      <div className="cart-item-price">{formatCOP(item.price * item.qty)}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="cart-item-remove btn-item-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Eliminar producto"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer / Checkout Summary */}
        {items.length > 0 && (
          <div className="cart-footer" id="cart-footer-section">
            {/* Coupon Code Input */}
            <form className="cart-coupon-row" onSubmit={handleApplyCoupon}>
              <input
                type="text"
                className="cart-coupon-input"
                id="cart-coupon-input"
                placeholder="Código de descuento (ej. ICFES2026)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button type="submit" className="cart-coupon-btn" id="btn-apply-coupon">
                Aplicar
              </button>
            </form>

            {/* Financial Totals Table */}
            <div className="cart-summary-table">
              <div className="cart-summary-row">
                <span>Subtotal:</span>
                <span id="cart-subtotal-val">{formatCOP(subtotal)}</span>
              </div>
              {discountAmount > 0 && appliedCoupon && (
                <div className="cart-summary-row discount" id="cart-discount-row">
                  <span>Descuento aplicado:</span>
                  <span id="cart-discount-val">
                    -{formatCOP(discountAmount)} ({appliedCoupon.code})
                  </span>
                </div>
              )}
              <div className="cart-summary-row total">
                <span>Total a Pagar:</span>
                <span id="cart-total-val" style={{ color: 'var(--brand-red)' }}>
                  {formatCOP(total)}
                </span>
              </div>
            </div>

            {/* Checkout Action Buttons */}
            <button type="button" className="cart-checkout-btn-main" onClick={openCheckout}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              <span>Pagar con PSE / Nequi / Tarjeta</span>
            </button>

            <a
              href={generateWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="cart-checkout-btn-wa"
              aria-label="Comprar y Enviar Pedido por WhatsApp"
            >
              <WhatsappIcon width={18} height={18} color="#FFFFFF" />
              <span>Comprar y Enviar Pedido por WhatsApp</span>
            </a>

            {/* Trust Badges */}
            <div className="cart-trust-badges">
              <span>Pagos 100% Seguros</span>
              <span>•</span>
              <span>Entrega en 24h</span>
              <span>•</span>
              <span>Factura Legal DIAN</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
