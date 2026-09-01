import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Trophy, RotateCcw, ArrowRight, CheckCircle, Sparkles } from 'lucide-react-native';
import { useSimulatorStore } from '../../store/useSimulatorStore';
import { Colors } from '../../constants/Colors';
import { Button } from '../ui/Button';

export const ScoreReport: React.FC = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const score = useSimulatorStore((state) => state.score);
  const questions = useSimulatorStore((state) => state.questions);
  const selectedAnswers = useSimulatorStore((state) => state.selectedAnswers);
  const resetSimulator = useSimulatorStore((state) => state.resetSimulator);

  let correctCount = 0;
  questions.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctAnswer) {
      correctCount++;
    }
  });

  const getScoreVerdict = () => {
    if (score >= 400) {
      return {
        title: '¡Nivel Sobresaliente! Top Nacional',
        desc: 'Tienes un razonamiento lógico excepcional. Con nuestro Plan Integral puedes asegurar beca completa del 100% en la universidad de tus sueños.',
        color: '#10B981',
      };
    } else if (score >= 300) {
      return {
        title: '¡Buen Potencial! Listo para Despegar',
        desc: 'Dominas los conceptos base pero caes en distractores tácticos del ICFES. Con 7 meses de entrenamiento guiado superarás los 420 puntos con total seguridad.',
        color: '#F59E0B',
      };
    } else {
      return {
        title: '¡Fase de Diagnóstico Inicial!',
        desc: 'Requieres fortalecer las técnicas de descarte y velocidad de lectura. Nuestro método "De Cero a Genio" te garantiza un aumento mínimo de +80 puntos.',
        color: '#FF1E27',
      };
    }
  };

  const verdict = getScoreVerdict();

  return (
    <View style={styles.card}>
      <View style={styles.scoreCircle}>
        <Trophy size={36} color={verdict.color} />
        <Text style={[styles.scoreNumber, { color: verdict.color }]}>{score}</Text>
        <Text style={styles.scoreScale}>/ 500 PUNTOS</Text>
      </View>

      <Text style={styles.verdictTitle}>{verdict.title}</Text>
      <Text style={styles.verdictDesc}>{verdict.desc}</Text>

      {/* Accuracy stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statVal}>{correctCount} / {questions.length}</Text>
          <Text style={styles.statLabel}>Respuestas Correctas</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statVal}>{Math.round((correctCount / questions.length) * 100)}%</Text>
          <Text style={styles.statLabel}>Efectividad Global</Text>
        </View>
      </View>

      {/* CTA Box */}
      <View style={styles.ctaBox}>
        <View style={styles.ctaHeader}>
          <Sparkles size={16} color="#FF3B42" />
          <Text style={styles.ctaTitle}>¿Listo para asegurar tu puntaje real en 2026?</Text>
        </View>
        <Text style={styles.ctaText}>
          Inscríbete hoy al Plan Integral Calendario A con 50% de Beca, 14 simulacros completos y clases en vivo.
        </Text>
        <Button
          title="Inscribirme al Plan Completo ($300.000 COP)"
          onPress={() => router.push('/(tabs)/catalog')}
          variant="primary"
          size="lg"
          icon={<ArrowRight size={18} color="#FFFFFF" />}
          iconPosition="right"
          style={{ width: '100%', marginBottom: 10 }}
        />
        <Button
          title="Repetir Simulador Diagnóstico"
          onPress={resetSimulator}
          variant="outline"
          size="md"
          icon={<RotateCcw size={16} color={Colors.brandRed} />}
          style={{ width: '100%' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161B22',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    ...Colors.shadows.lg,
  },
  scoreCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D1117',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 9999,
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  scoreNumber: {
    fontSize: 32,
    fontWeight: '900',
    marginTop: 4,
  },
  scoreScale: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: '800',
  },
  verdictTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },
  verdictDesc: {
    color: '#94A3B8',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
    maxWidth: 580,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 28,
    width: '100%',
    maxWidth: 480,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#0D1117',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  statVal: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 4,
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
  },
  ctaBox: {
    backgroundColor: '#0D1117',
    borderColor: 'rgba(255, 30, 39, 0.3)',
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 580,
  },
  ctaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  ctaTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  ctaText: {
    color: '#94A3B8',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 16,
  },
});
