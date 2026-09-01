import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Sparkles,
  Zap,
  TrendingUp,
  BrainCircuit,
  Bot,
  Layers,
  Award,
  Clock,
  ArrowRight,
  ShieldCheck,
  Flame,
} from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { Button } from '../ui/Button';
import { useAuthStore } from '../../store/useAuthStore';

export const HeroBanner: React.FC = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 950;
  const setAuthModalOpen = useAuthStore((state) => state.setAuthModalOpen);

  const [timeLeft, setTimeLeft] = useState({
    days: 142,
    hours: 18,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const targetDate = new Date('2026-08-09T07:00:00-05:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = Math.max(0, targetDate - now);

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.heroSection}>
      {/* Ambient Gradient Auras */}
      <LinearGradient
        colors={['rgba(255, 30, 39, 0.18)', 'rgba(13, 17, 23, 0)']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.ambientGlowTop}
      />
      <LinearGradient
        colors={['rgba(99, 102, 241, 0.12)', 'rgba(13, 17, 23, 0)']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.ambientGlowSide}
      />

      <View style={styles.innerContainer}>
        {/* Top Glow & Badge */}
        <View style={styles.badgeRow}>
          <LinearGradient
            colors={['rgba(255, 30, 39, 0.25)', 'rgba(239, 68, 68, 0.08)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.topBadge}
          >
            <Flame size={14} color="#FF3B42" />
            <Text style={styles.topBadgeText}>CONVOCATORIA ICFES SABER 11 • 2026</Text>
          </LinearGradient>
        </View>

        {/* Main Title */}
        <Text style={[styles.mainHeading, isDesktop ? styles.headingDesktop : styles.headingMobile]}>
          De Cero a Genio: Supera los{' '}
          <Text style={styles.headingHighlight}>400 Puntos</Text> en el ICFES
        </Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          La única plataforma en Colombia que combina neuroaprendizaje cognitivo, algoritmos de IA adaptativa y mentoría de quienes obtuvieron los puntajes más altos del país (477/500).
        </Text>

        {/* CTAs */}
        <View style={styles.ctaRow}>
          <Button
            title="Inscribirme al Plan Completo (50% OFF)"
            onPress={() => router.push('/(tabs)/catalog')}
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} color="#FFFFFF" />}
            iconPosition="right"
            style={{ marginBottom: 10, marginRight: isDesktop ? 14 : 0 }}
          />
          <Button
            title="Probar Simulador Gratis en Vivo"
            onPress={() => router.push('/(tabs)/simulator')}
            variant="outline"
            size="lg"
            icon={<Sparkles size={16} color="#FF3B42" />}
            style={{ marginBottom: 10 }}
          />
        </View>

        {/* 4 Multi-Color Value Pills */}
        <View style={styles.pillsContainer}>
          <View style={[styles.pillItem, styles.pillRed]}>
            <BrainCircuit size={15} color="#FF4D4D" />
            <Text style={styles.pillTextRed}>Neuroaprendizaje</Text>
          </View>
          <View style={[styles.pillItem, styles.pillEmerald]}>
            <Bot size={15} color="#10B981" />
            <Text style={styles.pillTextEmerald}>Tutor IA Adaptativo</Text>
          </View>
          <View style={[styles.pillItem, styles.pillBlue]}>
            <Layers size={15} color="#38BDF8" />
            <Text style={styles.pillTextBlue}>14 Simulacros ICFES</Text>
          </View>
          <View style={[styles.pillItem, styles.pillAmber]}>
            <Award size={15} color="#FBBF24" />
            <Text style={styles.pillTextAmber}>Garantía +80 Puntos</Text>
          </View>
        </View>

        {/* Countdown & Analytics Dual Box */}
        <View style={[styles.dashboardRow, isDesktop ? styles.dashboardDesktop : styles.dashboardMobile]}>
          {/* Left: Countdown Timer with Crimson Glow */}
          <LinearGradient
            colors={['#1F1622', '#161B22']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.countdownCard}
          >
            <View style={styles.countdownHeader}>
              <View style={styles.headerIconCircleRed}>
                <Clock size={15} color="#FF3B42" />
              </View>
              <Text style={styles.countdownTitle}>Tiempo restante para el ICFES 2026</Text>
            </View>

            <View style={styles.timerGrid}>
              <View style={styles.timerBlock}>
                <Text style={styles.timerNumber}>{timeLeft.days}</Text>
                <Text style={styles.timerUnit}>DÍAS</Text>
              </View>
              <Text style={styles.timerColon}>:</Text>
              <View style={styles.timerBlock}>
                <Text style={styles.timerNumber}>{String(timeLeft.hours).padStart(2, '0')}</Text>
                <Text style={styles.timerUnit}>HORAS</Text>
              </View>
              <Text style={styles.timerColon}>:</Text>
              <View style={styles.timerBlock}>
                <Text style={styles.timerNumber}>{String(timeLeft.minutes).padStart(2, '0')}</Text>
                <Text style={styles.timerUnit}>MIN</Text>
              </View>
              <Text style={styles.timerColon}>:</Text>
              <View style={styles.timerBlock}>
                <Text style={styles.timerNumber}>{String(timeLeft.seconds).padStart(2, '0')}</Text>
                <Text style={styles.timerUnit}>SEG</Text>
              </View>
            </View>
          </LinearGradient>

          {/* Right: Academic Performance Analytics with Emerald Glow */}
          <LinearGradient
            colors={['#10221E', '#161B22']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.analyticCard}
          >
            <View style={styles.analyticHeader}>
              <View style={styles.headerIconCircleGreen}>
                <TrendingUp size={15} color="#10B981" />
              </View>
              <Text style={styles.analyticTitle}>Impacto Promedio en Alumnos</Text>
            </View>

            <View style={styles.analyticContent}>
              <View style={styles.scoreCompare}>
                <View>
                  <Text style={styles.scoreOld}>285 pts</Text>
                  <Text style={styles.scoreSub}>Diagnóstico inicial</Text>
                </View>
                <View style={styles.scoreArrow}>
                  <Text style={styles.scorePlus}>+87 pts</Text>
                </View>
                <View>
                  <Text style={styles.scoreNew}>372 pts</Text>
                  <Text style={styles.scoreSub}>Puntaje final real</Text>
                </View>
              </View>
              <View style={styles.guaranteeTag}>
                <ShieldCheck size={14} color="#10B981" />
                <Text style={styles.guaranteeText}>94.8% de aprobados en universidades públicas</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    backgroundColor: '#0D1117',
    paddingTop: 46,
    paddingBottom: 32,
    position: 'relative',
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  ambientGlowTop: {
    position: 'absolute',
    top: 0,
    left: '20%',
    right: '20%',
    height: 240,
    borderRadius: 9999,
  },
  ambientGlowSide: {
    position: 'absolute',
    top: 100,
    left: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
  },
  innerContainer: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    alignItems: 'center',
    zIndex: 2,
  },
  badgeRow: {
    marginBottom: 16,
  },
  topBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'rgba(255, 30, 39, 0.45)',
    borderWidth: 1,
    borderRadius: 9999,
    paddingVertical: 6,
    paddingHorizontal: 16,
    gap: 8,
    ...Colors.shadows.sm,
  },
  topBadgeText: {
    color: '#FF4D4D',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  mainHeading: {
    color: '#FFFFFF',
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -1,
    marginBottom: 16,
    maxWidth: 920,
  },
  headingDesktop: {
    fontSize: 46,
    lineHeight: 54,
  },
  headingMobile: {
    fontSize: 29,
    lineHeight: 38,
  },
  headingHighlight: {
    color: '#FF2A33',
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 26,
    maxWidth: 720,
    marginBottom: 28,
  },
  ctaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  pillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 36,
  },
  pillItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 9999,
    paddingVertical: 7,
    paddingHorizontal: 14,
    gap: 7,
  },
  pillRed: {
    backgroundColor: 'rgba(255, 30, 39, 0.1)',
    borderColor: 'rgba(255, 30, 39, 0.3)',
  },
  pillTextRed: {
    color: '#FCA5A5',
    fontSize: 12,
    fontWeight: '700',
  },
  pillEmerald: {
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  pillTextEmerald: {
    color: '#6EE7B7',
    fontSize: 12,
    fontWeight: '700',
  },
  pillBlue: {
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    borderColor: 'rgba(56, 189, 248, 0.3)',
  },
  pillTextBlue: {
    color: '#BAE6FD',
    fontSize: 12,
    fontWeight: '700',
  },
  pillAmber: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  pillTextAmber: {
    color: '#FDE68A',
    fontSize: 12,
    fontWeight: '700',
  },
  dashboardRow: {
    width: '100%',
    maxWidth: 1000,
    gap: 20,
  },
  dashboardDesktop: {
    flexDirection: 'row',
  },
  dashboardMobile: {
    flexDirection: 'column',
  },
  countdownCard: {
    flex: 1,
    borderColor: 'rgba(255, 30, 39, 0.3)',
    borderWidth: 1.5,
    borderRadius: 18,
    padding: 22,
    ...Colors.shadows.md,
  },
  countdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  headerIconCircleRed: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 30, 39, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  countdownTitle: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: '700',
  },
  timerGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timerBlock: {
    alignItems: 'center',
    backgroundColor: '#090D14',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    minWidth: 58,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  timerNumber: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
  },
  timerUnit: {
    color: '#94A3B8',
    fontSize: 9,
    fontWeight: '800',
    marginTop: 2,
  },
  timerColon: {
    color: '#FF1E27',
    fontSize: 20,
    fontWeight: '900',
  },
  analyticCard: {
    flex: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
    borderWidth: 1.5,
    borderRadius: 18,
    padding: 22,
    ...Colors.shadows.md,
  },
  analyticHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  headerIconCircleGreen: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  analyticTitle: {
    color: '#F1F5F9',
    fontSize: 14,
    fontWeight: '700',
  },
  analyticContent: {
    gap: 12,
  },
  scoreCompare: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#090D14',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  scoreOld: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'line-through',
  },
  scoreNew: {
    color: '#10B981',
    fontSize: 20,
    fontWeight: '900',
  },
  scoreSub: {
    color: '#64748B',
    fontSize: 10,
    marginTop: 2,
  },
  scoreArrow: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  scorePlus: {
    color: '#10B981',
    fontWeight: '900',
    fontSize: 12,
  },
  guaranteeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  guaranteeText: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
  },
});
