import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product, COUPONS } from '../constants/ProductsData';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  couponCode: string;
  discountPercent: number;
  isDrawerOpen: boolean;
  isCheckoutModalOpen: boolean;
  
  // Actions
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  setDrawerOpen: (isOpen: boolean) => void;
  setCheckoutModalOpen: (isOpen: boolean) => void;
  loadCart: () => Promise<void>;
  
  // Computed helpers
  getSubtotal: () => number;
  getDiscountAmount: () => number;
  getTotal: () => number;
  getItemCount: () => number;
  generateWhatsAppMessage: (customerData?: { name: string; phone: string; email: string }) => string;
}

const CART_STORAGE_KEY = '@sg_cart_state_v1';

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  couponCode: '',
  discountPercent: 0,
  isDrawerOpen: false,
  isCheckoutModalOpen: false,

  addItem: (product: Product) => {
    set((state) => {
      const existing = state.items.find((item) => item.product.id === product.id);
      let updatedItems: CartItem[];
      if (existing) {
        updatedItems = state.items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedItems = [...state.items, { product, quantity: 1 }];
      }
      
      AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems)).catch(() => {});
      return { items: updatedItems, isDrawerOpen: true };
    });
  },

  removeItem: (productId: string) => {
    set((state) => {
      const updatedItems = state.items.filter((item) => item.product.id !== productId);
      AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems)).catch(() => {});
      return { items: updatedItems };
    });
  },

  updateQuantity: (productId: string, quantity: number) => {
    set((state) => {
      if (quantity <= 0) {
        const updatedItems = state.items.filter((item) => item.product.id !== productId);
        AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems)).catch(() => {});
        return { items: updatedItems };
      }
      const updatedItems = state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      AsyncStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedItems)).catch(() => {});
      return { items: updatedItems };
    });
  },

  clearCart: () => {
    AsyncStorage.removeItem(CART_STORAGE_KEY).catch(() => {});
    set({ items: [], couponCode: '', discountPercent: 0 });
  },

  applyCoupon: (code: string) => {
    const trimmed = code.trim().toUpperCase();
    const coupon = COUPONS[trimmed];
    if (coupon) {
      set({ couponCode: trimmed, discountPercent: coupon.discountPercent });
      return { success: true, message: `¡Cupón ${coupon.name} aplicado con éxito!` };
    }
    return { success: false, message: 'El código de cupón ingresado no es válido o ha expirado.' };
  },

  removeCoupon: () => {
    set({ couponCode: '', discountPercent: 0 });
  },

  setDrawerOpen: (isOpen: boolean) => set({ isDrawerOpen: isOpen }),
  setCheckoutModalOpen: (isOpen: boolean) => set({ isCheckoutModalOpen: isOpen }),

  loadCart: async () => {
    try {
      const saved = await AsyncStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const items = JSON.parse(saved);
        if (Array.isArray(items)) {
          set({ items });
        }
      }
    } catch {}
  },

  getSubtotal: () => {
    return get().items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  },

  getDiscountAmount: () => {
    const subtotal = get().getSubtotal();
    return Math.round((subtotal * get().discountPercent) / 100);
  },

  getTotal: () => {
    return Math.max(0, get().getSubtotal() - get().getDiscountAmount());
  },

  getItemCount: () => {
    return get().items.reduce((acc, item) => acc + item.quantity, 0);
  },

  generateWhatsAppMessage: (customerData) => {
    const state = get();
    const itemsList = state.items
      .map(
        (item) =>
          `• ${item.quantity}x ${item.product.name} - $${(item.product.price * item.quantity).toLocaleString('es-CO')} COP`
      )
      .join('\n');

    const subtotal = state.getSubtotal().toLocaleString('es-CO');
    const discount = state.getDiscountAmount().toLocaleString('es-CO');
    const total = state.getTotal().toLocaleString('es-CO');

    let msg = `🎓 *SEAMOS GENIOS - NUEVO PEDIDO / INSCRIPCIÓN*\n\n`;
    if (customerData?.name) {
      msg += `👤 *Estudiante/Cliente:* ${customerData.name}\n`;
      msg += `📱 *Teléfono:* ${customerData.phone}\n`;
      if (customerData.email) msg += `✉️ *Email:* ${customerData.email}\n`;
      msg += `\n`;
    }

    msg += `📦 *Detalle del Pedido:*\n${itemsList}\n\n`;
    msg += `💰 *Subtotal:* $${subtotal} COP\n`;
    if (state.discountPercent > 0) {
      msg += `🎟️ *Cupón (${state.couponCode}):* -$${discount} COP (${state.discountPercent}% OFF)\n`;
    }
    msg += `🔥 *TOTAL A PAGAR:* $${total} COP\n\n`;
    msg += `_Hola equipo de Seamos Genios, deseo formalizar este pedido e inscribirme. ¿Cuáles son los pasos para realizar la transferencia / pago?_`;

    return encodeURIComponent(msg);
  },
}));
