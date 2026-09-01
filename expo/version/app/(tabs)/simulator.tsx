import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { BookOpenCheck, ChevronLeft, ChevronRight, CheckCircle2, RotateCcw } from 'lucide-react-native';
import { useSimulatorStore } from '../../store/useSimulatorStore';
import { QuestionCard } from '../../components/simulator/QuestionCard';
import { TimerWidget } from '../../components/simulator/TimerWidget';
import { ScoreReport } from '../../components/simulator/ScoreReport';
import { FooterSection } from '../../components/layout/FooterSection';
import { Button } from '../../components/ui/Button';
import { Colors } from '../../constants/Colors';

export default function SimulatorScreen() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 800;

  const questions = useSimulatorStore((state) => state.questions);
  const currentQuestionIndex = useSimulatorStore((state) => state.currentQuestionIndex);
  const selectedAnswers = useSimulatorStore((state) => state.selectedAnswers);
  const isSubmitted = useSimulatorStore((state) => state.isSubmitted);
  const nextQuestion = useSimulatorStore((state) => state.nextQuestion);
  const prevQuestion = useSimulatorStore((state) => state.prevQuestion);
  const goToQuestion = useSimulatorStore((state) => state.goToQuestion);
  const submitExam = useSimulatorStore((state) => state.submitExam);
  const resetSimulator = useSimulatorStore((state) => state.resetSimulator);

  const currentQ = questions[currentQuestionIndex];
  const answeredCount = Object.keys(selectedAnswers).length;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.mainWrapper}>
        {/* Header Title */}
        <View style={styles.header}>
          <View style={styles.badge}>
            <BookOpenCheck size={13} color="#FF3B42" />
            <Text style={styles.badgeText}>SIMULADOR DIAGNÓSTICO EN VIVO</Text>
          </View>
          <Text style={styles.title}>Mini-Simulacro ICFES 2026</Text>
          <Text style={styles.subtitle}>
            Prueba tus habilidades con 5 preguntas tipo ICFES seleccionadas. Obtén retroalimentación explicada y tu puntaje estimado inmediato.
          </Text>
        </View>

        {isSubmitted ? (
          <ScoreReport />
        ) : (
          <View style={styles.simulatorBody}>
            {/* Top Toolbar: Progress & Timer */}
            <View style={styles.toolbar}>
              <View style={styles.progressTextCol}>
                <Text style={styles.progressLabel}>Progreso de Respuesta</Text>
                <Text style={styles.progressCount}>
                  {answeredCount} de {questions.length} respondidas
                </Text>
              </View>

              <View style={styles.toolbarActions}>
                <TimerWidget />
                <TouchableOpacity
                  onPress={resetSimulator}
                  style={styles.resetIconBtn}
                >
                  <RotateCcw size={16} color="#94A3B8" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Question Navigation Bar (Pills 1..5) */}
            <View style={styles.questionNavPills}>
              {questions.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = selectedAnswers[q.id] !== undefined;

                return (
                  <TouchableOpacity
                    key={q.id}
                    onPress={() => goToQuestion(idx)}
                    style={[
                      styles.navPill,
                      isCurrent && styles.navPillCurrent,
                      isAnswered && !isCurrent && styles.navPillAnswered,
                    ]}
                  >
                    <Text
                      style={[
                        styles.navPillText,
                        isCurrent && styles.navPillTextCurrent,
                        isAnswered && !isCurrent && styles.navPillTextAnswered,
                      ]}
                    >
                      {idx + 1}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* Question Card */}
            {currentQ && (
              <QuestionCard
                question={currentQ}
                index={currentQuestionIndex}
                totalQuestions={questions.length}
              />
            )}

            {/* Bottom Question Controls */}
            <View style={styles.bottomNavRow}>
              <Button
                title="Anterior"
                onPress={prevQuestion}
                disabled={currentQuestionIndex === 0}
                variant="secondary"
                size="md"
                icon={<ChevronLeft size={16} color="#FFFFFF" />}
                iconPosition="left"
              />

              {isLastQuestion ? (
                <Button
                  title="Finalizar y Calificar Prueba"
                  onPress={submitExam}
                  variant="primary"
                  size="md"
                  icon={<CheckCircle2 size={16} color="#FFFFFF" />}
                  iconPosition="right"
                />
              ) : (
                <Button
                  title="Siguiente Pregunta"
                  onPress={nextQuestion}
                  variant="primary"
                  size="md"
                  icon={<ChevronRight size={16} color="#FFFFFF" />}
                  iconPosition="right"
                />
              )}
            </View>
          </View>
        )}
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
  mainWrapper: {
    maxWidth: 900,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
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
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 14,
    textAlign: 'center',
    maxWidth: 580,
    lineHeight: 22,
  },
  simulatorBody: {
    gap: 20,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#161B22',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  progressTextCol: {
    flexDirection: 'column',
  },
  progressLabel: {
    color: '#64748B',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  progressCount: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  toolbarActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  resetIconBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 8,
    borderRadius: 8,
  },
  questionNavPills: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  navPill: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#161B22',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
  navPillCurrent: {
    borderColor: Colors.brandRed,
    backgroundColor: Colors.brandRed,
    ...Colors.shadows.redGlow,
  },
  navPillAnswered: {
    borderColor: '#10B981',
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
  },
  navPillText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '800',
  },
  navPillTextCurrent: {
    color: '#FFFFFF',
  },
  navPillTextAnswered: {
    color: '#10B981',
  },
  bottomNavRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
