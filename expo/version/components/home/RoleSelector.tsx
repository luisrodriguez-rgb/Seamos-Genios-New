import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  GraduationCap,
  Building2,
  Users,
  BookOpenCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { useAuthStore, UserRole } from '../../store/useAuthStore';

interface RoleOption {
  id: UserRole;
  label: string;
  badge: string;
  tagline: string;
  accentColor: string;
  lightGradient: [string, string];
  icon: (color: string) => React.ReactNode;
}

const ROLES: RoleOption[] = [
  {
    id: 'estudiante',
    label: 'Soy Estudiante',
    badge: 'Puntaje 400+',
    tagline: 'Simulacros, IA y técnicas para asegurar tu beca universitaria.',
    accentColor: '#FF1E27',
    lightGradient: ['#FFF5F5', '#FFFFFF'],
    icon: (color) => <GraduationCap size={24} color={color} />,
  },
  {
    id: 'colegio',
    label: 'Soy Colegio / Rector',
    badge: 'Institucional',
    tagline: 'Diagnósticos, dashboard directivo y convenios DIAN Factus SAS.',
    accentColor: '#D97706',
    lightGradient: ['#FFFBEB', '#FFFFFF'],
    icon: (color) => <Building2 size={24} color={color} />,
  },
  {
    id: 'familia',
    label: 'Soy Padre de Familia',
    badge: 'Acompañamiento',
    tagline: 'Seguimiento semanal y orientación para el futuro de tu hijo.',
    accentColor: '#0284C7',
    lightGradient: ['#F0F9FF', '#FFFFFF'],
    icon: (color) => <Users size={24} color={color} />,
  },
  {
    id: 'docente',
    label: 'Soy Docente',
    badge: 'Pedagogía ICFES',
    tagline: 'Banco de preguntas y herramientas de evaluación por competencias.',
    accentColor: '#059669',
    lightGradient: ['#ECFDF5', '#FFFFFF'],
    icon: (color) => <BookOpenCheck size={24} color={color} />,
  },
];

export const RoleSelector: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;
  const selectedRole = useAuthStore((state) => state.selectedRole);
  const setSelectedRole = useAuthStore((state) => state.setSelectedRole);

  return (
    <View style={styles.sectionWrapper}>
      <View style={styles.container}>
        <View style={styles.headerRow}>
          <View style={styles.accentBadge}>
            <Sparkles size={12} color="#FF1E27" />
            <Text style={styles.accentBadgeText}>EXPERIENCIA PERSONALIZADA</Text>
          </View>
          <Text style={styles.sectionTitle}>¿Cuál es tu rol? Descubre tu ruta ideal</Text>
          <Text style={styles.sectionSubtitle}>
            Selecciona tu perfil para acceder a contenidos, simulacros y planes diseñados específicamente para tus objetivos académicos.
          </Text>
        </View>

        <View style={[styles.grid, isDesktop ? styles.gridDesktop : styles.gridMobile]}>
          {ROLES.map((role) => {
            const isSelected = selectedRole === role.id;

            return (
              <TouchableOpacity
                key={role.id}
                activeOpacity={0.88}
                onPress={() => setSelectedRole(role.id)}
                style={styles.cardWrapper}
              >
                <LinearGradient
                  colors={isSelected ? role.lightGradient : ['#FFFFFF', '#FFFFFF']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[
                    styles.roleCard,
                    isSelected
                      ? {
                          borderColor: role.accentColor,
                          borderWidth: 2,
                          shadowColor: role.accentColor,
                          shadowOffset: { width: 0, height: 8 },
                          shadowOpacity: 0.18,
                          shadowRadius: 16,
                          elevation: 6,
                        }
                      : styles.roleCardInactive,
                  ]}
                >
                  {isSelected && (
                    <View style={[styles.activeCheck, { backgroundColor: role.accentColor }]}>
                      <CheckCircle2 size={13} color="#FFFFFF" />
                    </View>
                  )}

                  <View
                    style={[
                      styles.iconWrapper,
                      isSelected
                        ? { backgroundColor: `${role.accentColor}18`, borderColor: `${role.accentColor}40`, borderWidth: 1 }
                        : { backgroundColor: '#F1F5F9', borderWidth: 1, borderColor: '#E2E8F0' },
                    ]}
                  >
                    {role.icon(isSelected ? role.accentColor : '#64748B')}
                  </View>

                  <View style={styles.badgeRow}>
                    <Text
                      style={[
                        styles.roleBadge,
                        { color: isSelected ? role.accentColor : '#64748B' },
                      ]}
                    >
                      {role.badge}
                    </Text>
                  </View>

                  <Text style={[styles.roleLabel, isSelected && { color: '#0F172A' }]}>
                    {role.label}
                  </Text>
                  <Text style={styles.roleTagline}>{role.tagline}</Text>
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#F8FAFC',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 48,
    paddingBottom: 24,
  },
  container: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
  },
  headerRow: {
    alignItems: 'center',
    marginBottom: 28,
  },
  accentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 30, 39, 0.08)',
    borderColor: 'rgba(255, 30, 39, 0.25)',
    borderWidth: 1,
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 5,
    gap: 6,
    marginBottom: 12,
  },
  accentBadgeText: {
    color: '#FF1E27',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    color: '#0F172A',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: '#475569',
    fontSize: 15,
    textAlign: 'center',
    maxWidth: 640,
    lineHeight: 23,
  },
  grid: {
    gap: 16,
  },
  gridDesktop: {
    flexDirection: 'row',
  },
  gridMobile: {
    flexDirection: 'column',
  },
  cardWrapper: {
    flex: 1,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      } as any,
    }),
  },
  roleCard: {
    flex: 1,
    borderRadius: 20,
    padding: 22,
    position: 'relative',
    minHeight: 200,
  },
  roleCardInactive: {
    borderColor: '#E2E8F0',
    borderWidth: 1.5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  activeCheck: {
    position: 'absolute',
    top: 14,
    right: 14,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  badgeRow: {
    marginBottom: 6,
  },
  roleBadge: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  roleLabel: {
    color: '#1E293B',
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 6,
    letterSpacing: -0.2,
  },
  roleTagline: {
    color: '#64748B',
    fontSize: 13,
    lineHeight: 19,
  },
});
