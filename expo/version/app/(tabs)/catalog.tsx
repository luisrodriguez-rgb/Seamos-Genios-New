import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { Sparkles, ShoppingBag, ShieldCheck, Tag } from 'lucide-react-native';
import { PRODUCTS_DATA, Product } from '../../constants/ProductsData';
import { ProductCard } from '../../components/ecommerce/ProductCard';
import { FooterSection } from '../../components/layout/FooterSection';
import { Colors } from '../../constants/Colors';

type CategoryFilter = 'all' | 'simulacros' | 'planes' | 'materiales' | 'asesoria' | 'colegios';

const CATEGORIES = [
  { id: 'all', label: 'Todos los Programas' },
  { id: 'planes', label: 'Planes Completos' },
  { id: 'simulacros', label: 'Simulacros' },
  { id: 'materiales', label: 'Cuadernillos Físicos' },
  { id: 'asesoria', label: 'Mentoría 1 a 1' },
  { id: 'colegios', label: 'Colegios & Convenios' },
];

export default function CatalogScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 950;
  const isTablet = width >= 650 && width < 950;

  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  const getGridStyle = () => {
    if (isDesktop) return styles.gridDesktop;
    if (isTablet) return styles.gridTablet;
    return styles.gridMobile;
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.headerSection}>
        <View style={styles.badge}>
          <Tag size={13} color="#FF3B42" />
          <Text style={styles.badgeText}>TIENDA OFICIAL SEAMOS GENIOS 2026</Text>
        </View>

        <Text style={styles.title}>Catálogo de Programas & Precios</Text>
        <Text style={styles.subtitle}>
          Inversión educativa transparente con garantía de resultados. Selecciona el plan que se adapta a tu meta de puntaje.
        </Text>

        {/* Filter Pills */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
          contentContainerStyle={styles.filtersContent}
        >
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              activeOpacity={0.8}
              onPress={() => setActiveCategory(cat.id as CategoryFilter)}
              style={[
                styles.filterPill,
                activeCategory === cat.id && styles.filterPillActive,
              ]}
            >
              <Text
                style={[
                  styles.filterPillText,
                  activeCategory === cat.id && styles.filterPillTextActive,
                ]}
              >
                {cat.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Products Grid */}
      <View style={styles.productsSection}>
        <View style={[styles.grid, getGridStyle()]}>
          {filteredProducts.map((product) => (
            <View key={product.id} style={styles.cardCol}>
              <ProductCard product={product} />
            </View>
          ))}
        </View>
      </View>

      {/* Trust & Guarantee Banner */}
      <View style={styles.guaranteeSection}>
        <View style={styles.guaranteeCard}>
          <ShieldCheck size={32} color="#10B981" />
          <View style={styles.guaranteeInfo}>
            <Text style={styles.guaranteeTitle}>Garantía de Aumento +80 Puntos</Text>
            <Text style={styles.guaranteeDesc}>
              Si cumples el 90% del programa y tus simulacros y no aumentas al menos 80 puntos sobre tu diagnóstico inicial, te devolvemos el dinero o te capacitamos en el siguiente ciclo gratis.
            </Text>
          </View>
        </View>
      </View>

      <FooterSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  contentContainer: {
    flexGrow: 1,
  },
  headerSection: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 30, 39, 0.12)',
    borderColor: 'rgba(255, 30, 39, 0.35)',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999,
    gap: 6,
    marginBottom: 12,
  },
  badgeText: {
    color: '#FF3B42',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 15,
    textAlign: 'center',
    maxWidth: 620,
    lineHeight: 24,
    marginBottom: 24,
  },
  filtersScroll: {
    width: '100%',
  },
  filtersContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 6,
  },
  filterPill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 9999,
    backgroundColor: '#161B22',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    ...Platform.select({
      web: { cursor: 'pointer', transition: 'all 0.2s' } as any,
    }),
  },
  filterPillActive: {
    backgroundColor: Colors.brandRed,
    borderColor: Colors.brandRed,
    ...Colors.shadows.redGlow,
  },
  filterPillText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },
  filterPillTextActive: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  productsSection: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  grid: {
    gap: 20,
  },
  gridDesktop: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridTablet: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridMobile: {
    flexDirection: 'column',
  },
  cardCol: {
    flex: 1,
    minWidth: 320,
    maxWidth: 600,
  },
  guaranteeSection: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  guaranteeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.08)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
    borderWidth: 1,
    borderRadius: 16,
    padding: 22,
    gap: 16,
  },
  guaranteeInfo: {
    flex: 1,
  },
  guaranteeTitle: {
    color: '#10B981',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  guaranteeDesc: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 20,
  },
});
