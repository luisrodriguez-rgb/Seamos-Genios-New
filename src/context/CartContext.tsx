'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  origPrice?: number;
  category: string;
  qty: number;
}

export interface Coupon {
  code: string;
  discount: number;
  desc: string;
}

const COUPONS: Record<string, { discount: number; desc: string }> = {
  GENIO10: { discount: 0.1, desc: '10% Descuento Especial' },
  ICFES2026: { discount: 0.15, desc: '15% Descuento PreICFES' },
  COLEGIO50: { discount: 0.5, desc: '50% Descuento Institucional' },
};

const CART_STORAGE_KEY = 'sg_cart_items_v1';
const APPLIED_COUPON_KEY = 'sg_cart_coupon_v1';

export function formatCOP(amount: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(amount);
}

interface CartContextType {
  items: CartItem[];
  appliedCoupon: Coupon | null;
  subtotal: number;
  discountAmount: number;
  total: number;
  totalCount: number;
  isCartOpen: boolean;
  isCheckoutOpen: boolean;
  isAuthOpen: boolean;
  authMode: 'register' | 'login';
  authRole: 'estudiante' | 'colegio' | 'padre' | 'docente';
  toastMessage: string | null;
  addToCart: (product: Omit<CartItem, 'qty'> & { qty?: number }) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, delta: number) => void;
  applyCoupon: (code: string) => { success: boolean; message?: string };
  removeCoupon: () => void;
  openCart: () => void;
  closeCart: () => void;
  openCheckout: () => void;
  closeCheckout: () => void;
  openAuth: (mode?: 'register' | 'login', role?: 'estudiante' | 'colegio' | 'padre' | 'docente') => void;
  closeAuth: () => void;
  showToast: (msg: string) => void;
  generateWhatsAppOrderUrl: () => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'register' | 'login'>('register');
  const [authRole, setAuthRole] = useState<'estudiante' | 'colegio' | 'padre' | 'docente'>('estudiante');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    setIsMounted(true);
    try {
      const storedItems = localStorage.getItem(CART_STORAGE_KEY);
      if (storedItems) {
        setItems(JSON.parse(storedItems));
      }
      const storedCoupon = localStorage.getItem(APPLIED_COUPON_KEY);
      if (storedCoupon && COUPONS[storedCoupon]) {
        setAppliedCoupon({ code: storedCoupon, ...COUPONS[storedCoupon] });
      }
    } catch (e) {
      console.error('Error loading cart data from localStorage', e);
    }
  }, []);

  // Save to localStorage whenever items change
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Error persisting cart data', e);
    }
  }, [items, isMounted]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openCheckout = () => {
    if (items.length === 0) {
      alert('Tu carrito está vacío. Añade un programa o simulacro para continuar.');
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  const closeCheckout = () => setIsCheckoutOpen(false);

  const openAuth = (
    mode: 'register' | 'login' = 'register',
    role: 'estudiante' | 'colegio' | 'padre' | 'docente' = 'estudiante'
  ) => {
    setAuthMode(mode);
    setAuthRole(role);
    setIsAuthOpen(true);
  };
  const closeAuth = () => setIsAuthOpen(false);

  const addToCart = (product: Omit<CartItem, 'qty'> & { qty?: number }) => {
    setItems((prev) => {
      const existingIdx = prev.findIndex((item) => item.id === product.id);
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          qty: next[existingIdx].qty + (product.qty || 1),
        };
        return next;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          origPrice: product.origPrice || product.price,
          category: product.category || 'Programa',
          qty: product.qty || 1,
        },
      ];
    });
    showToast(`"${product.name}" añadido al carrito`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
    showToast('Producto eliminado del carrito');
  };

  const updateQuantity = (productId: string, delta: number) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (!existing) return prev;
      const newQty = existing.qty + delta;
      if (newQty <= 0) {
        return prev.filter((item) => item.id !== productId);
      }
      return prev.map((item) => (item.id === productId ? { ...item, qty: newQty } : item));
    });
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (COUPONS[clean]) {
      const couponObj = { code: clean, ...COUPONS[clean] };
      setAppliedCoupon(couponObj);
      try {
        localStorage.setItem(APPLIED_COUPON_KEY, clean);
      } catch (e) {}
      showToast(`Cupón "${clean}" aplicado (${COUPONS[clean].desc})`);
      return { success: true };
    } else {
      showToast('Cupón inválido o expirado');
      return { success: false, message: 'Cupón no válido' };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    try {
      localStorage.removeItem(APPLIED_COUPON_KEY);
    } catch (e) {}
  };

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);
  const totalCount = items.reduce((sum, item) => sum + (item.qty || 1), 0);
  const discountAmount = appliedCoupon ? Math.round(subtotal * appliedCoupon.discount) : 0;
  const total = Math.max(0, subtotal - discountAmount);

  const generateWhatsAppOrderUrl = () => {
    const phone = '573001234567';
    let message = `Hola Seamos Genios. Deseo realizar la compra de los siguientes programas:\n\n`;

    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (x${item.qty}) - ${formatCOP(item.price * item.qty)}\n`;
    });

    message += `\nSubtotal: ${formatCOP(subtotal)}`;
    if (discountAmount > 0 && appliedCoupon) {
      message += `\nDescuento aplicado: -${formatCOP(discountAmount)} (${appliedCoupon.code})`;
    }
    message += `\nTOTAL A PAGAR: ${formatCOP(total)}\n\n¿Cuáles son los medios de pago disponibles (Nequi, PSE, Tarjeta, Wompi)? Gracias.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        appliedCoupon,
        subtotal,
        discountAmount,
        total,
        totalCount,
        isCartOpen,
        isCheckoutOpen,
        isAuthOpen,
        authMode,
        authRole,
        toastMessage,
        addToCart,
        removeFromCart,
        updateQuantity,
        applyCoupon,
        removeCoupon,
        openCart,
        closeCart,
        openCheckout,
        closeCheckout,
        openAuth,
        closeAuth,
        showToast,
        generateWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
