import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Linking,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ShieldCheck, FileText, Phone, Mail, MapPin, ExternalLink } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';

export const FooterSection: React.FC = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 800;

  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/573009292868?text=Hola%20Seamos%20Genios,%20deseo%20m%C3%A1s%20informaci%C3%B3n.');
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.innerContainer}>
        {/* Top Grid */}
        <View style={[styles.grid, isDesktop ? styles.gridDesktop : styles.gridMobile]}>
          {/* Col 1: Brand & Mission */}
          <View style={styles.col}>
            <View style={styles.brandRow}>
              <View style={styles.logoBadge}>
                <Text style={styles.logoBadgeText}>SG</Text>
              </View>
              <Text style={styles.brandTitle}>
                SEAMOS <Text style={styles.brandTitleRed}>GENIOS</Text>
              </Text>
            </View>
            <Text style={styles.brandDesc}>
              Plataforma líder en preparación para el examen ICFES Saber 11 en Colombia, combinando neuroaprendizaje e inteligencia artificial adaptativa.
            </Text>
            
            {/* DIAN Trust Badge */}
            <View style={styles.dianCard}>
              <ShieldCheck color="#10B981" size={20} />
              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={styles.dianTitle}>Facturación Electrónica DIAN</Text>
                <Text style={styles.dianDesc}>Validado por Factus SAS para colegios e instituciones públicas.</Text>
              </View>
            </View>
          </View>

          {/* Col 2: Programas & Precios */}
          <View style={styles.col}>
            <Text style={styles.colTitle}>Programas & Tienda</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/catalog')} style={styles.linkItem}>
              <Text style={styles.linkText}>Plan Calendario A (7 Meses)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/catalog')} style={styles.linkItem}>
              <Text style={styles.linkText}>Simulacros Individuales ($15.000)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/catalog')} style={styles.linkItem}>
              <Text style={styles.linkText}>Kit de Cuadernillos Físicos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/catalog')} style={styles.linkItem}>
              <Text style={styles.linkText}>Mentoría Neuroaprendizaje 1 a 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/catalog')} style={styles.linkItem}>
              <Text style={styles.linkText}>Convenios para Colegios</Text>
            </TouchableOpacity>
          </View>

          {/* Col 3: Herramientas & Comunidad */}
          <View style={styles.col}>
            <Text style={styles.colTitle}>Herramientas</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/simulator')} style={styles.linkItem}>
              <Text style={styles.linkText}>Simulador ICFES en Vivo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)/schools')} style={styles.linkItem}>
              <Text style={styles.linkText}>Directorio de +60 Colegios</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)')} style={styles.linkItem}>
              <Text style={styles.linkText}>Metodología "De Cero a Genio"</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/(tabs)')} style={styles.linkItem}>
              <Text style={styles.linkText}>Equipo de Mentores Récord</Text>
            </TouchableOpacity>
          </View>

          {/* Col 4: Contacto & Sedes */}
          <View style={styles.col}>
            <Text style={styles.colTitle}>Atención Oficial</Text>
            <TouchableOpacity onPress={openWhatsApp} style={styles.contactRow}>
              <Phone size={14} color="#10B981" />
              <Text style={styles.contactText}>+57 300 929 2868</Text>
            </TouchableOpacity>
            <View style={styles.contactRow}>
              <Mail size={14} color="#94A3B8" />
              <Text style={styles.contactText}>contacto@seamosgenios.com</Text>
            </View>
            <View style={styles.contactRow}>
              <MapPin size={14} color="#94A3B8" />
              <Text style={styles.contactText}>Bogotá D.C. & Bucaramanga, Colombia</Text>
            </View>
          </View>
        </View>

        {/* Bottom Bar */}
        <View style={styles.bottomBar}>
          <Text style={styles.copyrightText}>
            © 2026 Seamos Genios SAS. Todos los derechos reservados. Colombia.
          </Text>
          <View style={styles.legalLinks}>
            <Text style={styles.legalLinkText}>Términos y Condiciones</Text>
            <Text style={styles.legalDivider}>•</Text>
            <Text style={styles.legalLinkText}>Política de Privacidad Habeas Data</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#090D14',
    borderTopColor: 'rgba(255, 255, 255, 0.08)',
    borderTopWidth: 1,
    paddingTop: 48,
    paddingBottom: 32,
  },
  innerContainer: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
  },
  grid: {
    gap: 32,
    marginBottom: 40,
  },
  gridDesktop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridMobile: {
    flexDirection: 'column',
  },
  col: {
    flex: 1,
    minWidth: 200,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  logoBadge: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: Colors.brandRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  logoBadgeText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 14,
  },
  brandTitle: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
  },
  brandTitleRed: {
    color: Colors.brandRed,
  },
  brandDesc: {
    color: '#94A3B8',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 18,
  },
  dianCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.08)',
    borderColor: 'rgba(16, 185, 129, 0.25)',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
  dianTitle: {
    color: '#10B981',
    fontWeight: '700',
    fontSize: 12,
  },
  dianDesc: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 2,
  },
  colTitle: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 16,
    letterSpacing: 0.2,
  },
  linkItem: {
    marginBottom: 10,
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
  linkText: {
    color: '#94A3B8',
    fontSize: 13,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  contactText: {
    color: '#94A3B8',
    fontSize: 13,
  },
  bottomBar: {
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
    borderTopWidth: 1,
    paddingTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  copyrightText: {
    color: '#64748B',
    fontSize: 12,
  },
  legalLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legalLinkText: {
    color: '#64748B',
    fontSize: 12,
  },
  legalDivider: {
    color: '#475569',
    fontSize: 12,
  },
});
