import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Sparkles, Brain, Cpu, Target, Trophy, Flame } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';

const STEPS = [
  {
    step: '01',
    title: 'Diagnóstico Neurocognitivo & Mapa de Brechas',
    desc: 'Evaluamos tu nivel inicial en las 5 áreas para detectar exactamente qué patrones y conceptos errados frenan tu puntaje.',
    icon: (color: string) => <Brain size={24} color={color} />,
    tag: 'Fase de Entrada',
    accentColor: '#FF6B6B',
  },
  {
    step: '02',
    title: 'Desbloqueo de Conceptos & Patrones ICFES',
    desc: 'Aprende a decodificar la estructura lógica de cada pregunta en menos de 90 segundos eliminando distractores.',
    icon: (color: string) => <Cpu size={24} color={color} />,
    tag: 'Fase Cognitiva',
    accentColor: '#F59E0B',
  },
  {
    step: '03',
    title: 'Entrenamiento Táctico (14 Simulacros Calibrados)',
    desc: 'Práctica continua con retroalimentación inmediata, análisis de tiempos y curvas de desempeño en tiempo real.',
    icon: (color: string) => <Target size={24} color={color} />,
    tag: 'Fase de Impacto',
    accentColor: '#38BDF8',
  },
  {
    step: '04',
    title: 'Consolidación de Rendimiento & Dominio Emocional',
    desc: 'Técnicas de neurociencia para eliminar la ansiedad en el examen y maximizar la concentración durante las 9 horas de prueba.',
    icon: (color: string) => <Trophy size={24} color={color} />,
    tag: 'Fase de Maestría',
    accentColor: '#10B981',
  },
];

export const MethodologySteps: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  return (
    <LinearGradient
      colors={['#24070A', '#1A0608', '#0D1117']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.section}
    >
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <Flame size={13} color="#FFFFFF" />
            <Text style={styles.badgeText}>MÉTODO CIENTÍFICO ACREDITADO</Text>
          </View>
          <Text style={styles.title}>Metodología "De Cero a Genio"</Text>
          <Text style={styles.subtitle}>
            4 fases estructuradas para transformar tu razonamiento y garantizar un puntaje superior a 400 puntos.
          </Text>
        </View>

        <View style={[styles.grid, isDesktop ? styles.gridDesktop : styles.gridMobile]}>
          {STEPS.map((stepItem, idx) => (
            <View key={idx} style={styles.stepCard}>
              <View style={styles.topRow}>
                <View style={[styles.stepNumberBadge, { borderColor: `${stepItem.accentColor}60` }]}>
                  <Text style={[styles.stepNumberText, { color: stepItem.accentColor }]}>
                    {stepItem.step}
                  </Text>
                </View>
                <View style={styles.tagBadge}>
                  <Text style={styles.tagBadgeText}>{stepItem.tag}</Text>
                </View>
              </View>

              <View style={[styles.iconBox, { backgroundColor: `${stepItem.accentColor}18` }]}>
                {stepItem.icon(stepItem.accentColor)}
              </View>

              <Text style={styles.stepTitle}>{stepItem.title}</Text>
              <Text style={styles.stepDesc}>{stepItem.desc}</Text>
            </View>
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingVertical: 64,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 30, 39, 0.25)',
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
    marginBottom: 44,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF1E27',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 9999,
    gap: 6,
    marginBottom: 14,
    ...Colors.shadows.redGlow,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 10,
    textShadowColor: 'rgba(255, 30, 39, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  subtitle: {
    color: '#E2E8F0',
    fontSize: 15,
    textAlign: 'center',
    maxWidth: 640,
    lineHeight: 24,
    opacity: 0.9,
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
  stepCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderColor: 'rgba(255, 255, 255, 0.16)',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 24,
    ...Platform.select({
      web: {
        backdropFilter: 'blur(16px)',
      } as any,
    }),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  stepNumberBadge: {
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '900',
  },
  tagBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagBadgeText: {
    color: '#CBD5E1',
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  stepTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 24,
    marginBottom: 8,
  },
  stepDesc: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 20,
  },
});
