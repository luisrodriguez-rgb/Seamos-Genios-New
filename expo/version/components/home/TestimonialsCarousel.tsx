import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Star, Trophy, Award, Sparkles } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';

const TESTIMONIALS = [
  {
    name: 'Nicolás Jiménez',
    score: '438 / 500',
    university: 'Beca Medicina • Univ. Nacional',
    quote: 'Empecé con 290 en mi colegio y no entendía cómo abordar las preguntas de Lectura Crítica y Matemáticas. El método de Seamos Genios me enseñó a responder con calma y seguridad en cada componente.',
    city: 'Bucaramanga, Santander',
    gradient: ['#1A1728', '#161B22'] as [string, string],
    scoreColor: '#10B981',
  },
  {
    name: 'Mariana Duarte',
    score: '422 / 500',
    university: 'Ingeniería Biomédica • Univ. de los Andes',
    quote: 'La plataforma con IA me mostraba exactamente qué temas me costaban más y no perdía tiempo estudiando lo que ya dominaba. Los simulacros son idénticos a la prueba real del ICFES.',
    city: 'Bogotá D.C.',
    gradient: ['#281E15', '#161B22'] as [string, string],
    scoreColor: '#F59E0B',
  },
  {
    name: 'Santiago Morales',
    score: '415 / 500',
    university: 'Derecho • Univ. del Rosario',
    quote: 'El acompañamiento de los mentores es otro nivel. Tener a profesores que sacaron 470+ y te explican sus propios atajos cognitivos marca una diferencia brutal en el resultado final.',
    city: 'Medellín, Antioquia',
    gradient: ['#132428', '#161B22'] as [string, string],
    scoreColor: '#38BDF8',
  },
];

export const TestimonialsCarousel: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  return (
    <View style={styles.section}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <Trophy size={13} color="#F59E0B" />
            <Text style={styles.badgeText}>CASOS DE ÉXITO REALES</Text>
          </View>
          <Text style={styles.title}>Estudiantes que Conquistaron su Futuro</Text>
          <Text style={styles.subtitle}>
            Conoce los testimonios de quienes superaron los 400 puntos y obtuvieron becas completas en las mejores universidades.
          </Text>
        </View>

        <View style={[styles.grid, isDesktop ? styles.gridDesktop : styles.gridMobile]}>
          {TESTIMONIALS.map((item, idx) => (
            <LinearGradient
              key={idx}
              colors={item.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.testimonialCard}
            >
              <View style={styles.topCardRow}>
                <View style={styles.starsRow}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={15} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </View>
                <View style={[styles.scoreBadge, { borderColor: `${item.scoreColor}50`, backgroundColor: `${item.scoreColor}18` }]}>
                  <Text style={[styles.scoreBadgeText, { color: item.scoreColor }]}>{item.score}</Text>
                </View>
              </View>

              <Text style={styles.quoteText}>"{item.quote}"</Text>

              <View style={styles.authorRow}>
                <View style={styles.avatarCircle}>
                  <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
                </View>
                <View style={styles.authorInfo}>
                  <Text style={styles.authorName}>{item.name}</Text>
                  <Text style={styles.authorUni}>{item.university}</Text>
                  <Text style={styles.authorCity}>{item.city}</Text>
                </View>
              </View>
            </LinearGradient>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#0D1117',
    paddingVertical: 60,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  innerContainer: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderColor: 'rgba(245, 158, 11, 0.45)',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 9999,
    gap: 6,
    marginBottom: 12,
  },
  badgeText: {
    color: '#FBBF24',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 29,
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
  },
  grid: {
    gap: 20,
  },
  gridDesktop: {
    flexDirection: 'row',
  },
  gridMobile: {
    flexDirection: 'column',
  },
  testimonialCard: {
    flex: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 24,
    justifyContent: 'space-between',
    ...Colors.shadows.md,
  },
  topCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 3,
  },
  scoreBadge: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  scoreBadgeText: {
    fontWeight: '900',
    fontSize: 13,
  },
  quoteText: {
    color: '#E2E8F0',
    fontSize: 14,
    lineHeight: 23,
    fontStyle: 'italic',
    marginBottom: 22,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FF1E27',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    ...Colors.shadows.redGlow,
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 18,
  },
  authorInfo: {
    flex: 1,
  },
  authorName: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 15,
  },
  authorUni: {
    color: '#34D399',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 1,
  },
  authorCity: {
    color: '#94A3B8',
    fontSize: 11,
    marginTop: 2,
  },
});
