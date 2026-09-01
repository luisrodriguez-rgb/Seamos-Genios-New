import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
  Platform,
} from 'react-native';
import {
  ShieldCheck,
  CreditCard,
  Building,
  Smartphone,
  MessageCircle,
  CheckCircle2,
  Lock,
} from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';
import { ModalContainer } from '../ui/ModalContainer';
import { Button } from '../ui/Button';

type PaymentGateway = 'pse' | 'nequi' | 'tarjeta' | 'whatsapp';

export const CheckoutModal: React.FC = () => {
  const isCheckoutModalOpen = useCartStore((state) => state.isCheckoutModalOpen);
  const setCheckoutModalOpen = useCartStore((state) => state.setCheckoutModalOpen);
  const getTotal = useCartStore((state) => state.getTotal);
  const clearCart = useCartStore((state) => state.clearCart);
  const generateWhatsAppMessage = useCartStore((state) => state.generateWhatsAppMessage);

  const user = useAuthStore((state) => state.user);

  const [selectedGateway, setSelectedGateway] = useState<PaymentGateway>('pse');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const total = getTotal();

  const handlePay = () => {
    setIsProcessing(true);

    if (selectedGateway === 'whatsapp') {
      const encoded = generateWhatsAppMessage(
        user ? { name: user.name, phone: user.phone, email: user.email } : undefined
      );
      Linking.openURL(`https://wa.me/573009292868?text=${encoded}`);
      setIsProcessing(false);
      setCheckoutModalOpen(false);
      clearCart();
      return;
    }

    // Simulate instant gateway redirection
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  return (
    <ModalContainer
      visible={isCheckoutModalOpen}
      onClose={() => {
        setCheckoutModalOpen(false);
        setIsSuccess(false);
      }}
      maxWidth={540}
    >
      <View style={styles.modalContent}>
        {isSuccess ? (
          <View style={styles.successBox}>
            <View style={styles.successIconCircle}>
              <CheckCircle2 size={48} color="#10B981" />
            </View>
            <Text style={styles.successTitle}>¡Inscripción Confirmada!</Text>
            <Text style={styles.successSubtitle}>
              Hemos procesado tu pago con éxito. Te hemos enviado las credenciales de acceso a tu aula virtual y el enlace del grupo VIP de estudio por WhatsApp y correo electrónico.
            </Text>
            <Button
              title="Aceptar y Continuar"
              onPress={() => {
                setIsSuccess(false);
                setCheckoutModalOpen(false);
              }}
              variant="primary"
              size="lg"
              style={{ width: '100%', marginTop: 20 }}
            />
          </View>
        ) : (
          <>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Pasarela de Pago Seguro</Text>
              <Text style={styles.modalSubtitle}>
                Selecciona tu método de pago preferido para formalizar tu inscripción.
              </Text>
            </View>

            {/* Total Amount Box */}
            <View style={styles.totalBox}>
              <Text style={styles.totalBoxLabel}>Total a Pagar</Text>
              <Text style={styles.totalBoxAmount}>${total.toLocaleString('es-CO')} COP</Text>
            </View>

            {/* Payment Options */}
            <View style={styles.gatewaysList}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedGateway('pse')}
                style={[
                  styles.gatewayCard,
                  selectedGateway === 'pse' && styles.gatewayCardActive,
                ]}
              >
                <View style={styles.gatewayIcon}>
                  <Building size={20} color={selectedGateway === 'pse' ? '#FF1E27' : '#94A3B8'} />
                </View>
                <View style={styles.gatewayInfo}>
                  <Text style={styles.gatewayName}>PSE (Cualquier Banco de Colombia)</Text>
                  <Text style={styles.gatewayDesc}>Bancolombia, Davivienda, BBVA, Banco de Bogotá, etc.</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedGateway('nequi')}
                style={[
                  styles.gatewayCard,
                  selectedGateway === 'nequi' && styles.gatewayCardActive,
                ]}
              >
                <View style={styles.gatewayIcon}>
                  <Smartphone size={20} color={selectedGateway === 'nequi' ? '#FF1E27' : '#94A3B8'} />
                </View>
                <View style={styles.gatewayInfo}>
                  <Text style={styles.gatewayName}>Nequi / Daviplata</Text>
                  <Text style={styles.gatewayDesc}>Transferencia inmediata vía QR o número de celular.</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedGateway('tarjeta')}
                style={[
                  styles.gatewayCard,
                  selectedGateway === 'tarjeta' && styles.gatewayCardActive,
                ]}
              >
                <View style={styles.gatewayIcon}>
                  <CreditCard size={20} color={selectedGateway === 'tarjeta' ? '#FF1E27' : '#94A3B8'} />
                </View>
                <View style={styles.gatewayInfo}>
                  <Text style={styles.gatewayName}>Tarjeta de Crédito / Débito</Text>
                  <Text style={styles.gatewayDesc}>Visa, Mastercard, American Express.</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setSelectedGateway('whatsapp')}
                style={[
                  styles.gatewayCard,
                  selectedGateway === 'whatsapp' && styles.gatewayCardActive,
                ]}
              >
                <View style={styles.gatewayIcon}>
                  <MessageCircle size={20} color={selectedGateway === 'whatsapp' ? '#25D366' : '#94A3B8'} />
                </View>
                <View style={styles.gatewayInfo}>
                  <Text style={styles.gatewayName}>Pago Asistido por WhatsApp</Text>
                  <Text style={styles.gatewayDesc}>Finaliza con un asesor y envía tu comprobante.</Text>
                </View>
              </TouchableOpacity>
            </View>

            {/* Action */}
            <Button
              title={selectedGateway === 'whatsapp' ? 'Continuar a WhatsApp' : 'Procesar Pago Seguro'}
              onPress={handlePay}
              loading={isProcessing}
              variant={selectedGateway === 'whatsapp' ? 'emerald' : 'primary'}
              size="lg"
              style={{ width: '100%', marginTop: 8 }}
            />

            <View style={styles.securityFooter}>
              <Lock size={12} color="#94A3B8" />
              <Text style={styles.securityText}>Encriptación SSL de 256 bits • Cumplimiento DIAN</Text>
            </View>
          </>
        )}
      </View>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    padding: 24,
  },
  modalHeader: {
    marginBottom: 20,
  },
  modalTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.3,
    marginBottom: 6,
  },
  modalSubtitle: {
    color: '#94A3B8',
    fontSize: 13,
    lineHeight: 18,
  },
  totalBox: {
    backgroundColor: '#0D1117',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalBoxLabel: {
    color: '#94A3B8',
    fontSize: 14,
    fontWeight: '600',
  },
  totalBoxAmount: {
    color: '#FF1E27',
    fontSize: 22,
    fontWeight: '900',
  },
  gatewaysList: {
    gap: 10,
    marginBottom: 20,
  },
  gatewayCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1117',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 14,
    ...Platform.select({
      web: { cursor: 'pointer', transition: 'all 0.2s' } as any,
    }),
  },
  gatewayCardActive: {
    borderColor: '#FF1E27',
    backgroundColor: 'rgba(255, 30, 39, 0.05)',
  },
  gatewayIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  gatewayInfo: {
    flex: 1,
  },
  gatewayName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 2,
  },
  gatewayDesc: {
    color: '#94A3B8',
    fontSize: 11,
  },
  securityFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 16,
  },
  securityText: {
    color: '#64748B',
    fontSize: 11,
  },
  successBox: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  successIconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(16, 185, 129, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  successTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 10,
  },
  successSubtitle: {
    color: '#94A3B8',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
});
