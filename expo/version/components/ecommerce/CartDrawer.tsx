import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
  Linking,
  useWindowDimensions,
} from 'react-native';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  Ticket,
  ArrowRight,
  MessageCircle,
  CreditCard,
  ShieldCheck,
} from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';

export const CartDrawer: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const items = useCartStore((state) => state.items);
  const isDrawerOpen = useCartStore((state) => state.isDrawerOpen);
  const setDrawerOpen = useCartStore((state) => state.setDrawerOpen);
  const setCheckoutModalOpen = useCartStore((state) => state.setCheckoutModalOpen);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const couponCode = useCartStore((state) => state.couponCode);
  const discountPercent = useCartStore((state) => state.discountPercent);
  const applyCoupon = useCartStore((state) => state.applyCoupon);
  const removeCoupon = useCartStore((state) => state.removeCoupon);
  const getSubtotal = useCartStore((state) => state.getSubtotal);
  const getDiscountAmount = useCartStore((state) => state.getDiscountAmount);
  const getTotal = useCartStore((state) => state.getTotal);
  const generateWhatsAppMessage = useCartStore((state) => state.generateWhatsAppMessage);

  const user = useAuthStore((state) => state.user);

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponFeedback, setCouponFeedback] = useState<{ success?: boolean; text?: string }>({});

  const handleApplyCoupon = () => {
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback({ success: res.success, text: res.message });
  };

  const handleWhatsAppCheckout = () => {
    const encoded = generateWhatsAppMessage(
      user ? { name: user.name, phone: user.phone, email: user.email } : undefined
    );
    Linking.openURL(`https://wa.me/573009292868?text=${encoded}`);
    setDrawerOpen(false);
  };

  const handleOnlineCheckout = () => {
    setDrawerOpen(false);
    setCheckoutModalOpen(true);
  };

  if (!isDrawerOpen) return null;

  return (
    <Modal
      transparent
      visible={isDrawerOpen}
      animationType="slide"
      onRequestClose={() => setDrawerOpen(false)}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setDrawerOpen(false)}
          style={styles.backdrop}
        />

        <View style={[styles.drawer, isDesktop ? styles.drawerDesktop : styles.drawerMobile]}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerTitleRow}>
              <ShoppingBag size={20} color="#FF1E27" />
              <Text style={styles.title}>Tu Carrito de Compras</Text>
              <View style={styles.itemCountBadge}>
                <Text style={styles.itemCountText}>{items.length}</Text>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setDrawerOpen(false)}
              style={styles.closeBtn}
            >
              <X size={20} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          {/* Body */}
          {items.length === 0 ? (
            <View style={styles.emptyContainer}>
              <View style={styles.emptyIconBox}>
                <ShoppingBag size={40} color="#64748B" />
              </View>
              <Text style={styles.emptyTitle}>Tu carrito está vacío</Text>
              <Text style={styles.emptySubtitle}>
                Explora nuestros planes de estudio, simulacros individuales y material didáctico.
              </Text>
            </View>
          ) : (
            <ScrollView style={styles.itemsList} showsVerticalScrollIndicator={false}>
              {items.map((item) => (
                <View key={item.product.id} style={styles.cartItemCard}>
                  <View style={styles.itemHeader}>
                    <Text style={styles.itemName} numberOfLines={2}>
                      {item.product.name}
                    </Text>
                    <TouchableOpacity
                      onPress={() => removeItem(item.product.id)}
                      style={styles.trashBtn}
                    >
                      <Trash2 size={16} color="#EF4444" />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.itemTagline}>{item.product.tagline}</Text>

                  <View style={styles.itemFooter}>
                    <View style={styles.quantityControls}>
                      <TouchableOpacity
                        onPress={() => updateQuantity(item.product.id, item.quantity - 1)}
                        style={styles.qtyBtn}
                      >
                        <Minus size={14} color="#FFFFFF" />
                      </TouchableOpacity>
                      <Text style={styles.qtyText}>{item.quantity}</Text>
                      <TouchableOpacity
                        onPress={() => updateQuantity(item.product.id, item.quantity + 1)}
                        style={styles.qtyBtn}
                      >
                        <Plus size={14} color="#FFFFFF" />
                      </TouchableOpacity>
                    </View>

                    <Text style={styles.itemPrice}>
                      ${(item.product.price * item.quantity).toLocaleString('es-CO')} COP
                    </Text>
                  </View>
                </View>
              ))}

              {/* Coupon Section */}
              <View style={styles.couponSection}>
                <Text style={styles.couponLabel}>¿Tienes un cupón de descuento?</Text>
                <View style={styles.couponInputRow}>
                  <TextInput
                    placeholder="E.g. GENIO2026, ICFES400"
                    placeholderTextColor="#64748B"
                    value={inputCoupon}
                    onChangeText={setInputCoupon}
                    autoCapitalize="characters"
                    style={styles.couponInput}
                  />
                  <TouchableOpacity
                    onPress={handleApplyCoupon}
                    style={styles.couponApplyBtn}
                  >
                    <Text style={styles.couponApplyBtnText}>Aplicar</Text>
                  </TouchableOpacity>
                </View>

                {couponFeedback.text && (
                  <Text
                    style={[
                      styles.couponFeedback,
                      couponFeedback.success ? styles.couponSuccess : styles.couponError,
                    ]}
                  >
                    {couponFeedback.text}
                  </Text>
                )}

                {discountPercent > 0 && (
                  <View style={styles.activeCouponBadge}>
                    <Ticket size={14} color="#10B981" />
                    <Text style={styles.activeCouponText}>
                      Cupón {couponCode} aplicado (-{discountPercent}%)
                    </Text>
                    <TouchableOpacity onPress={removeCoupon}>
                      <X size={14} color="#EF4444" />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </ScrollView>
          )}

          {/* Footer Summary & Checkout Actions */}
          {items.length > 0 && (
            <View style={styles.footer}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Subtotal</Text>
                <Text style={styles.summaryValue}>
                  ${getSubtotal().toLocaleString('es-CO')} COP
                </Text>
              </View>

              {discountPercent > 0 && (
                <View style={styles.summaryRow}>
                  <Text style={[styles.summaryLabel, { color: '#10B981' }]}>
                    Descuento ({discountPercent}%)
                  </Text>
                  <Text style={[styles.summaryValue, { color: '#10B981' }]}>
                    -${getDiscountAmount().toLocaleString('es-CO')} COP
                  </Text>
                </View>
              )}

              <View style={[styles.summaryRow, styles.totalRow]}>
                <Text style={styles.totalLabel}>Total a Pagar</Text>
                <Text style={styles.totalValue}>
                  ${getTotal().toLocaleString('es-CO')} COP
                </Text>
              </View>

              {/* Checkout Buttons */}
              <View style={styles.checkoutActions}>
                <TouchableOpacity
                  activeOpacity={0.88}
                  onPress={handleWhatsAppCheckout}
                  style={styles.whatsAppCheckoutBtn}
                >
                  <MessageCircle size={18} color="#FFFFFF" />
                  <Text style={styles.whatsAppCheckoutText}>
                    Confirmar Pedido por WhatsApp
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.88}
                  onPress={handleOnlineCheckout}
                  style={styles.onlineCheckoutBtn}
                >
                  <CreditCard size={16} color="#FFFFFF" />
                  <Text style={styles.onlineCheckoutText}>
                    Pagar en Línea (PSE, Nequi, Tarjetas)
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.securityNote}>
                <ShieldCheck size={14} color="#10B981" />
                <Text style={styles.securityText}>
                  Compra segura y garantizada • Seamos Genios SAS
                </Text>
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10, 15, 29, 0.75)',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
  },
  drawer: {
    backgroundColor: '#161B22',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(255, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  drawerDesktop: {
    width: 440,
  },
  drawerMobile: {
    width: '100%',
    maxWidth: 400,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  headerTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  itemCountBadge: {
    backgroundColor: 'rgba(255, 30, 39, 0.15)',
    borderRadius: 9999,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: 'rgba(255, 30, 39, 0.3)',
  },
  itemCountText: {
    color: '#FF3B42',
    fontSize: 11,
    fontWeight: '800',
  },
  closeBtn: {
    padding: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyIconBox: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
  },
  emptySubtitle: {
    color: '#94A3B8',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 20,
  },
  itemsList: {
    flex: 1,
    padding: 16,
  },
  cartItemCard: {
    backgroundColor: '#0D1117',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  itemName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    flex: 1,
    paddingRight: 8,
  },
  trashBtn: {
    padding: 4,
  },
  itemTagline: {
    color: '#94A3B8',
    fontSize: 12,
    marginBottom: 12,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161B22',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  qtyBtn: {
    padding: 8,
  },
  qtyText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    paddingHorizontal: 8,
  },
  itemPrice: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },
  couponSection: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#0D1117',
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  couponLabel: {
    color: '#E2E8F0',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
  },
  couponInputRow: {
    flexDirection: 'row',
    gap: 8,
  },
  couponInput: {
    flex: 1,
    backgroundColor: '#161B22',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#FFFFFF',
    fontSize: 13,
  },
  couponApplyBtn: {
    backgroundColor: Colors.brandRed,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponApplyBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  couponFeedback: {
    fontSize: 11,
    marginTop: 6,
  },
  couponSuccess: {
    color: '#10B981',
  },
  couponError: {
    color: '#EF4444',
  },
  activeCouponBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.12)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginTop: 10,
    gap: 6,
  },
  activeCouponText: {
    color: '#10B981',
    fontSize: 12,
    fontWeight: '700',
    flex: 1,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    padding: 20,
    backgroundColor: '#0D1117',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    color: '#94A3B8',
    fontSize: 13,
  },
  summaryValue: {
    color: '#E2E8F0',
    fontSize: 13,
    fontWeight: '700',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    paddingTop: 10,
    marginTop: 6,
    marginBottom: 16,
  },
  totalLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  totalValue: {
    color: '#FF1E27',
    fontSize: 20,
    fontWeight: '900',
  },
  checkoutActions: {
    gap: 10,
    marginBottom: 14,
  },
  whatsAppCheckoutBtn: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  whatsAppCheckoutText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  onlineCheckoutBtn: {
    backgroundColor: '#1E293B',
    borderColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },
  onlineCheckoutText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  securityText: {
    color: '#64748B',
    fontSize: 11,
  },
});
