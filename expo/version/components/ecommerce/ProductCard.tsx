import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Check, ShoppingBag, Sparkles, Building2, Flame } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { Product } from '../../constants/ProductsData';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCartStore((state) => state.addItem);
  const setAuthModalOpen = useAuthStore((state) => state.setAuthModalOpen);

  const handleAction = () => {
    if (product.isInstitutional) {
      setAuthModalOpen(true, 'register');
    } else {
      addItem(product);
    }
  };

  const isPopular = product.isPopular;

  return (
    <LinearGradient
      colors={isPopular ? ['#2A0D11', '#1A1018', '#161B22'] : ['#161B22', '#121720']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.card,
        isPopular && styles.cardPopular,
      ]}
    >
      {/* Badges Row */}
      <View style={styles.topBadgeRow}>
        {product.discountBadge && (
          <View style={styles.discountBadge}>
            <Text style={styles.discountBadgeText}>{product.discountBadge}</Text>
          </View>
        )}
        {product.isPopular && (
          <View style={styles.popularBadge}>
            <Flame size={12} color="#FFFFFF" />
            <Text style={styles.popularBadgeText}>MÁS ELEGIDO</Text>
          </View>
        )}
      </View>

      {/* Title & Tagline */}
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.tagline}>{product.tagline}</Text>

      {/* Pricing Box */}
      <View style={[styles.priceContainer, isPopular && styles.priceContainerPopular]}>
        {product.isInstitutional ? (
          <View>
            <Text style={styles.priceCustom}>Cotización a la Medida</Text>
            <Text style={styles.periodText}>Grupos de 10° y 11° • Facturación DIAN</Text>
          </View>
        ) : (
          <View>
            <View style={styles.priceRow}>
              <Text style={styles.currencySymbol}>$</Text>
              <Text style={[styles.priceAmount, isPopular && styles.priceAmountPopular]}>
                {product.price.toLocaleString('es-CO')}
              </Text>
              <Text style={styles.currencyCode}>COP</Text>
            </View>
            <View style={styles.subPriceRow}>
              {product.originalPrice && (
                <Text style={styles.originalPrice}>
                  ${product.originalPrice.toLocaleString('es-CO')} COP
                </Text>
              )}
              {product.period && (
                <Text style={styles.periodText}>/ {product.period}</Text>
              )}
            </View>
          </View>
        )}
      </View>

      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Features List */}
      <View style={styles.featuresList}>
        {product.features.map((feat: string, idx: number) => (
          <View key={idx} style={styles.featureItem}>
            <View style={[styles.checkCircle, { backgroundColor: isPopular ? 'rgba(255, 30, 39, 0.2)' : 'rgba(16, 185, 129, 0.15)' }]}>
              <Check size={12} color={isPopular ? '#FF4D4D' : '#10B981'} />
            </View>
            <Text style={styles.featureText}>{feat}</Text>
          </View>
        ))}
      </View>

      {/* Action Button */}
      <Button
        title={product.ctaText}
        onPress={handleAction}
        variant={isPopular ? 'primary' : 'secondary'}
        size="md"
        icon={product.isInstitutional ? <Building2 size={16} color="#FFFFFF" /> : <ShoppingBag size={16} color="#FFFFFF" />}
        style={styles.actionBtn}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1.5,
    borderRadius: 22,
    padding: 24,
    justifyContent: 'space-between',
    position: 'relative',
    ...Colors.shadows.md,
    ...Platform.select({
      web: {
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      } as any,
    }),
  },
  cardPopular: {
    borderColor: '#FF2A33',
    ...Colors.shadows.redGlow,
  },
  topBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  discountBadge: {
    backgroundColor: 'rgba(255, 30, 39, 0.15)',
    borderColor: 'rgba(255, 30, 39, 0.45)',
    borderWidth: 1,
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 6,
  },
  discountBadgeText: {
    color: '#FF4D4D',
    fontSize: 11,
    fontWeight: '900',
  },
  popularBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF1E27',
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 6,
    gap: 4,
    ...Colors.shadows.redGlow,
  },
  popularBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '900',
    letterSpacing: -0.2,
    marginBottom: 6,
  },
  tagline: {
    color: '#94A3B8',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },
  priceContainer: {
    backgroundColor: '#090D14',
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  priceContainerPopular: {
    borderColor: 'rgba(255, 30, 39, 0.3)',
    backgroundColor: '#0C0608',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currencySymbol: {
    color: '#FF1E27',
    fontSize: 17,
    fontWeight: '800',
    marginRight: 2,
  },
  priceAmount: {
    color: '#FFFFFF',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
  priceAmountPopular: {
    color: '#FFFFFF',
  },
  currencyCode: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 6,
  },
  subPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  originalPrice: {
    color: '#64748B',
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  priceCustom: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
  periodText: {
    color: '#94A3B8',
    fontSize: 11,
  },
  description: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 19,
    marginBottom: 18,
  },
  featuresList: {
    gap: 10,
    marginBottom: 24,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
    marginRight: 10,
  },
  featureText: {
    color: '#E2E8F0',
    fontSize: 13,
    lineHeight: 18,
    flex: 1,
  },
  actionBtn: {
    marginTop: 'auto',
  },
});
