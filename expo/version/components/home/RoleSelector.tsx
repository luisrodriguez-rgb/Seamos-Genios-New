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
  gradient: [string, string];
  icon: (color: string) => React.ReactNode;
}

const ROLES: RoleOption[] = [
  {
    id: 'estudiante',
    label: 'Soy Estudiante',
    badge: 'Puntaje 400+',
    tagline: 'Simulacros, IA y técnicas para asegurar tu beca universitaria.',
    accentColor: '#FF2A33',
    gradient: ['#2A0E12', '#161B22'],
    icon: (color) => <GraduationCap size={22} color={color} />,
  },
  {
    id: 'colegio',
    label: 'Soy Colegio / Rector',
    badge: 'Institucional',
    tagline: 'Diagnósticos, dashboard directivo y convenios DIAN Factus SAS.',
    accentColor: '#F59E0B',
    gradient: ['#2A1E0E', '#161B22'],
    icon: (color) => <Building2 size={22} color={color} />,
  },
  {
    id: 'familia',
    label: 'Soy Padre de Familia',
    badge: 'Acompañamiento',
    tagline: 'Seguimiento semanal y orientación para el futuro de tu hijo.',
    accentColor: '#06B6D4',
    gradient: ['#0E232A', '#161B22'],
    icon: (color) => <Users size={22} color={color} />,
  },
  {
    id: 'docente',
    label: 'Soy Docente',
    badge: 'Pedagogía ICFES',
    tagline: 'Banco de preguntas y herramientas de evaluación por competencias.',
    accentColor: '#10B981',
    gradient: ['#0E281F', '#161B22'],
    icon: (color) => <BookOpenCheck size={22} color={color} />,
  },
];

export const RoleSelector: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;
  const selectedRole = useAuthStore((state) => state.selectedRole);
  const setSelectedRole = useAuthStore((state) => state.setSelectedRole);

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.accentBadge}>
          <Sparkles size={12} color="#FF3B42" />
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
              activeOpacity={0.85}
              onPress={() => setSelectedRole(role.id)}
              style={styles.cardWrapper}
            >
              <LinearGradient
                colors={isSelected ? role.gradient : ['#161B22', '#121720']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[
                  styles.roleCard,
                  isSelected && {
                    borderColor: role.accentColor,
                    shadowColor: role.accentColor,
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.35,
                    shadowRadius: 14,
                    elevation: 6,
                  },
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
                      ? { backgroundColor: role.accentColor }
                      : { backgroundColor: 'rgba(255, 255, 255, 0.05)' },
                  ]}
                >
                  {role.icon(isSelected ? '#FFFFFF' : '#94A3B8')}
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

                <Text style={styles.roleLabel}>{role.label}</Text>
                <Text style={styles.roleTagline}>{role.tagline}</Text>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 36,
  },
  headerRow: {
    alignItems: 'center',
    marginBottom: 28,
  },
  accentBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 30, 39, 0.12)',
    borderColor: 'rgba(255, 30, 39, 0.3)',
    borderWidth: 1,
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 4,
    gap: 6,
    marginBottom: 12,
  },
  accentBadgeText: {
    color: '#FF3B42',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  sectionSubtitle: {
    color: '#94A3B8',
    fontSize: 14,
    textAlign: 'center',
    maxWidth: 620,
    lineHeight: 22,
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
        transition: 'transform 0.2s ease',
      } as any,
    }),
  },
  roleCard: {
    flex: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1.5,
    borderRadius: 18,
    padding: 22,
    position: 'relative',
    minHeight: 190,
  },
  activeCheck: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    width: 48,
    height: 48,
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
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 6,
    letterSpacing: -0.2,
  },
  roleTagline: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 18,
  },
});
