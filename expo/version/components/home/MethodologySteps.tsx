import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Flame, Brain, Cpu, Target, Trophy } from 'lucide-react-native';

const STEPS = [
  {
    step: '01',
    title: 'Diagnóstico Neurocognitivo & Mapa de Brechas',
    desc: 'Evaluamos tu nivel inicial en las 5 áreas para detectar exactamente qué patrones y conceptos errados frenan tu puntaje.',
    icon: (color: string) => <Brain size={26} color={color} />,
    tag: 'Fase 1 • Entrada',
  },
  {
    step: '02',
    title: 'Desbloqueo de Conceptos & Patrones ICFES',
    desc: 'Aprende a decodificar la estructura lógica de cada pregunta en menos de 90 segundos eliminando distractores.',
    icon: (color: string) => <Cpu size={26} color={color} />,
    tag: 'Fase 2 • Cognitiva',
  },
  {
    step: '03',
    title: 'Entrenamiento Táctico (14 Simulacros Calibrados)',
    desc: 'Práctica continua con retroalimentación inmediata, análisis de tiempos y curvas de desempeño en tiempo real.',
    icon: (color: string) => <Target size={26} color={color} />,
    tag: 'Fase 3 • Impacto',
  },
  {
    step: '04',
    title: 'Consolidación de Rendimiento & Dominio Emocional',
    desc: 'Técnicas de neurociencia para eliminar la ansiedad en el examen y maximizar la concentración durante las 9 horas de prueba.',
    icon: (color: string) => <Trophy size={26} color={color} />,
    tag: 'Fase 4 • Maestría',
  },
];

export const MethodologySteps: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;

  return (
    <LinearGradient
      colors={['#FF1E27', '#E51019', '#BD0810']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.section}
    >
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <Flame size={14} color="#FF1E27" />
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
                <View style={styles.stepNumberBadge}>
                  <Text style={styles.stepNumberText}>{stepItem.step}</Text>
                </View>
                <View style={styles.tagBadge}>
                  <Text style={styles.tagBadgeText}>{stepItem.tag}</Text>
                </View>
              </View>

              <View style={styles.iconBox}>
                {stepItem.icon('#FFFFFF')}
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
    paddingVertical: 70,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  innerContainer: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 48,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 9999,
    gap: 6,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },
  badgeText: {
    color: '#D90F17',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 12,
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    maxWidth: 660,
    lineHeight: 25,
    opacity: 0.95,
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
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    borderColor: 'rgba(255, 255, 255, 0.32)',
    borderWidth: 1.5,
    borderRadius: 22,
    padding: 24,
    ...Platform.select({
      web: {
        backdropFilter: 'blur(16px)',
        transition: 'transform 0.2s ease',
      } as any,
    }),
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepNumberBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  stepNumberText: {
    color: '#D90F17',
    fontSize: 15,
    fontWeight: '900',
  },
  tagBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.22)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  iconBox: {
    width: 54,
    height: 54,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  stepTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    lineHeight: 25,
    marginBottom: 10,
  },
  stepDesc: {
    color: '#FFFFFF',
    fontSize: 13.5,
    lineHeight: 21,
    opacity: 0.92,
  },
});
