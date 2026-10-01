'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';

export default function CartToast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div id="cart-toast" className="cart-toast active" role="status" aria-live="polite">
      <svg
        className="cart-toast-icon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span id="cart-toast-text">{toastMessage}</span>
    </div>
  );
}
