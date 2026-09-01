import React, { useState, useMemo } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { Building2, Search, MapPin, ShieldCheck, Sparkles } from 'lucide-react-native';
import { SCHOOLS_DATA, REGIONS, School } from '../../constants/SchoolsData';
import { useAuthStore } from '../../store/useAuthStore';
import { FooterSection } from '../../components/layout/FooterSection';
import { Button } from '../../components/ui/Button';
import { Colors } from '../../constants/Colors';

export default function SchoolsScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;
  const isTablet = width >= 600 && width < 900;

  const setAuthModalOpen = useAuthStore((state) => state.setAuthModalOpen);

  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSchools = useMemo(() => {
    return SCHOOLS_DATA.filter((school) => {
      const matchRegion = selectedRegion === 'all' || school.region === selectedRegion;
      const matchQuery =
        searchQuery === '' ||
        school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.dept.toLowerCase().includes(searchQuery.toLowerCase());
      return matchRegion && matchQuery;
    });
  }, [selectedRegion, searchQuery]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header with Dark Hero Surface */}
      <View style={styles.headerSection}>
        <View style={styles.badge}>
          <Building2 size={13} color="#FF3B42" />
          <Text style={styles.badgeText}>RESPALDO INSTITUCIONAL NACIONAL</Text>
        </View>

        <Text style={styles.title}>Directorio de +60 Colegios Aliados</Text>
        <Text style={styles.subtitle}>
          Instituciones públicas y privadas en toda Colombia que confían en Seamos Genios para la preparación de sus promociones de grado 10° y 11°.
        </Text>

        {/* Search Bar */}
        <View style={styles.searchBarWrapper}>
          <Search size={18} color="#94A3B8" />
          <TextInput
            placeholder="Buscar por nombre de colegio, municipio o departamento..."
            placeholderTextColor="#64748B"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
          {searchQuery !== '' && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearSearchText}>Limpiar</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Region Filter Scroll */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.regionsScroll}
          contentContainerStyle={styles.regionsContent}
        >
          {REGIONS.map((reg) => (
            <TouchableOpacity
              key={reg.id}
              activeOpacity={0.8}
              onPress={() => setSelectedRegion(reg.id)}
              style={[
                styles.regionPill,
                selectedRegion === reg.id && styles.regionPillActive,
              ]}
            >
              <Text
                style={[
                  styles.regionPillText,
                  selectedRegion === reg.id && styles.regionPillTextActive,
                ]}
              >
                {reg.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Schools Results Grid on Clean Light Surface */}
      <View style={styles.schoolsSectionWrapper}>
        <View style={styles.schoolsSection}>
          <View style={styles.resultsCountRow}>
            <Text style={styles.resultsCountText}>
              Mostrando {filteredSchools.length} instituciones encontradas
            </Text>
          </View>

          <View
            style={[
              styles.grid,
              isDesktop ? styles.gridDesktop : isTablet ? styles.gridTablet : styles.gridMobile,
            ]}
          >
            {filteredSchools.map((school, index) => (
              <View key={index} style={styles.schoolCard}>
                <View style={styles.schoolIconCircle}>
                  <Building2 size={20} color="#FF1E27" />
                </View>
                <View style={styles.schoolInfo}>
                  <Text style={styles.schoolName}>{school.name}</Text>
                  <View style={styles.locationRow}>
                    <MapPin size={13} color="#64748B" />
                    <Text style={styles.locationText}>
                      {school.location}, {school.dept}
                    </Text>
                  </View>
                </View>
                <View style={styles.verifiedTag}>
                  <ShieldCheck size={12} color="#059669" />
                  <Text style={styles.verifiedText}>Aliado</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Institutional CTA Box with Corporate Red Accent */}
      <View style={styles.ctaSection}>
        <View style={styles.ctaCard}>
          <Sparkles size={28} color="#FFFFFF" />
          <View style={styles.ctaInfo}>
            <Text style={styles.ctaTitle}>¿Deseas vincular a tu institución educativa?</Text>
            <Text style={styles.ctaDesc}>
              Ofrecemos diagnósticos periódicos, plataforma directiva y facturación electrónica DIAN respaldada por Factus SAS.
            </Text>
          </View>
          <Button
            title="Solicitar Convenio"
            onPress={() => setAuthModalOpen(true, 'register')}
            variant="secondary"
            size="md"
          />
        </View>
      </View>

      <FooterSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  contentContainer: {
    flexGrow: 1,
  },
  headerSection: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingTop: 44,
    paddingBottom: 28,
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 30, 39, 0.12)',
    borderColor: 'rgba(255, 30, 39, 0.35)',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 9999,
    gap: 6,
    marginBottom: 14,
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
    maxWidth: 640,
    lineHeight: 24,
    marginBottom: 24,
  },
  searchBarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161B22',
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1.5,
    borderRadius: 14,
    paddingHorizontal: 16,
    width: '100%',
    maxWidth: 680,
    height: 50,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 14,
    paddingHorizontal: 12,
    ...Platform.select({
      web: { outlineStyle: 'none' } as any,
    }),
  },
  clearSearchText: {
    color: '#FF3B42',
    fontSize: 12,
    fontWeight: '700',
  },
  regionsScroll: {
    width: '100%',
  },
  regionsContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 4,
  },
  regionPill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 9999,
    backgroundColor: '#161B22',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  regionPillActive: {
    backgroundColor: Colors.brandRed,
    borderColor: Colors.brandRed,
  },
  regionPillText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
  },
  regionPillTextActive: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  schoolsSectionWrapper: {
    backgroundColor: '#F8FAFC',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingVertical: 36,
  },
  schoolsSection: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
  },
  resultsCountRow: {
    marginBottom: 16,
  },
  resultsCountText: {
    color: '#475569',
    fontSize: 13,
    fontWeight: '700',
  },
  grid: {
    gap: 14,
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
  schoolCard: {
    flex: 1,
    minWidth: 280,
    maxWidth: 390,
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderWidth: 1.5,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  schoolIconCircle: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: '#FECACA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  schoolInfo: {
    flex: 1,
  },
  schoolName: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '800',
    marginBottom: 4,
    lineHeight: 18,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    color: '#64748B',
    fontSize: 12,
  },
  verifiedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderColor: '#A7F3D0',
    borderWidth: 1,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
    gap: 3,
  },
  verifiedText: {
    color: '#059669',
    fontSize: 10,
    fontWeight: '800',
  },
  ctaSection: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 36,
  },
  ctaCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#FF1E27',
    borderRadius: 20,
    padding: 26,
    gap: 16,
    shadowColor: '#FF1E27',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 16,
    elevation: 4,
  },
  ctaInfo: {
    flex: 1,
    minWidth: 260,
  },
  ctaTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 4,
  },
  ctaDesc: {
    color: '#FFFFFF',
    fontSize: 13,
    lineHeight: 19,
    opacity: 0.92,
  },
});
