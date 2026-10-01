'use client';

import React, { useState } from 'react';
import WhatsappIcon from './icons/WhatsappIcon';
import { useCart, formatCOP } from '@/context/CartContext';

export default function CheckoutModal() {
  const { isCheckoutOpen, closeCheckout, total, generateWhatsAppOrderUrl } = useCart();
  const [selectedMethod, setSelectedMethod] = useState<'pse' | 'nequi' | 'card'>('pse');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert(
        `¡Excelente, ${name}! Redirigiendo a la pasarela segura (${selectedMethod.toUpperCase()}) para procesar el pago de ${formatCOP(
          total
        )}. Un asesor de Seamos Genios activará tus credenciales en 24h.`
      );
      setIsSubmitting(false);
      closeCheckout();
    }, 1200);
  };

  return (
    <div
      className="modal-overlay active"
      id="checkout-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="checkout-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCheckout();
      }}
    >
      <div className="checkout-modal-card">
        <button
          className="modal-close-btn checkout-modal-close"
          onClick={closeCheckout}
          aria-label="Cerrar ventana de pago"
          type="button"
        >
          &times;
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'var(--brand-red-light)',
              color: 'var(--brand-red)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 0.75rem',
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
          </div>
          <h3
            id="checkout-modal-title"
            style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '0.25rem' }}
          >
            Finalizar Orden de Pago
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Total a pagar:{' '}
            <strong id="checkout-final-total" style={{ color: 'var(--brand-red)', fontSize: '1.1rem' }}>
              {formatCOP(total)}
            </strong>
          </p>
        </div>

        <form id="checkout-payment-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {/* Payment Method Selection Grid */}
          <div>
            <label
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Selecciona tu método de pago preferido:
            </label>
            <div className="payment-methods-grid">
              <div
                className={`payment-method-card ${selectedMethod === 'pse' ? 'active' : ''}`}
                onClick={() => setSelectedMethod('pse')}
                role="button"
                tabIndex={0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="9" y1="22" x2="9" y2="22.01"></line>
                  <line x1="15" y1="22" x2="15.01"></line>
                  <line x1="9" y1="18" x2="9" y2="18.01"></line>
                  <line x1="15" y1="18" x2="15.01"></line>
                  <line x1="9" y1="14" x2="9" y2="14.01"></line>
                  <line x1="15" y1="14" x2="15.01"></line>
                  <line x1="9" y1="10" x2="9" y2="10.01"></line>
                  <line x1="15" y1="10" x2="15.01"></line>
                  <line x1="9" y1="6" x2="9" y2="6.01"></line>
                  <line x1="15" y1="6" x2="15.01"></line>
                </svg>
                <span className="payment-method-name">PSE / Banco</span>
              </div>

              <div
                className={`payment-method-card ${selectedMethod === 'nequi' ? 'active' : ''}`}
                onClick={() => setSelectedMethod('nequi')}
                role="button"
                tabIndex={0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
                <span className="payment-method-name">Nequi / Daviplata</span>
              </div>

              <div
                className={`payment-method-card ${selectedMethod === 'card' ? 'active' : ''}`}
                onClick={() => setSelectedMethod('card')}
                role="button"
                tabIndex={0}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                  <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
                <span className="payment-method-name">Tarjeta Crédito</span>
              </div>
            </div>
          </div>

          {/* Payer Information */}
          <div className="input-with-icon-wrapper">
            <span className="input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </span>
            <input
              type="text"
              className="input-pill-with-icon"
              placeholder="Nombre de quien realiza el pago *"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-with-icon-wrapper">
            <span className="input-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            <input
              type="email"
              className="input-pill-with-icon"
              placeholder="Correo para recibir comprobante y accesos *"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-with-icon-wrapper">
            <span className="input-icon">
              <WhatsappIcon width={18} height={18} color="#25D366" />
            </span>
            <span className="input-country-prefix">+57</span>
            <input
              type="tel"
              className="input-pill-with-icon input-phone-colombia"
              placeholder="WhatsApp *"
              required
              autoComplete="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-auth-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Generando orden de pago...' : 'Proceder al Pago Seguro →'}
          </button>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              fontSize: '0.725rem',
              color: 'var(--text-light)',
              marginTop: '0.25rem',
            }}
          >
            <span>Conexión Cifrada SSL 256-bit</span>
            <span>•</span>
            <span>Factura Validada DIAN</span>
          </div>
        </form>
      </div>
    </div>
  );
}
