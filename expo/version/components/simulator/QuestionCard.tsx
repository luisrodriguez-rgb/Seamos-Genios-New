import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { CheckCircle2, XCircle, HelpCircle, BookOpen } from 'lucide-react-native';
import { Question } from '../../constants/QuestionsData';
import { useSimulatorStore } from '../../store/useSimulatorStore';
import { Colors } from '../../constants/Colors';

interface QuestionCardProps {
  question: Question;
  index: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  totalQuestions,
}) => {
  const selectedAnswers = useSimulatorStore((state) => state.selectedAnswers);
  const selectAnswer = useSimulatorStore((state) => state.selectAnswer);
  const isSubmitted = useSimulatorStore((state) => state.isSubmitted);

  const userAnswer = selectedAnswers[question.id];

  return (
    <View style={styles.card}>
      {/* Header Info */}
      <View style={styles.header}>
        <View
          style={[
            styles.areaBadge,
            { backgroundColor: `${question.badgeColor}20`, borderColor: `${question.badgeColor}50` },
          ]}
        >
          <BookOpen size={12} color={question.badgeColor} />
          <Text style={[styles.areaBadgeText, { color: question.badgeColor }]}>
            {question.area}
          </Text>
        </View>

        <Text style={styles.counterText}>
          Pregunta {index + 1} de {totalQuestions}
        </Text>
      </View>

      {/* Context (Reading excerpt or problem description) */}
      {question.context && (
        <View style={styles.contextBox}>
          <Text style={styles.contextText}>{question.context}</Text>
        </View>
      )}

      {/* Statement */}
      <Text style={styles.statementText}>{question.statement}</Text>

      {/* Options List */}
      <View style={styles.optionsList}>
        {question.options.map((opt) => {
          const isSelected = userAnswer === opt.key;
          const isCorrect = opt.key === question.correctAnswer;

          let optionStyle: any = styles.optionItem;
          let textStyle: any = styles.optionText;
          let badgeStyle: any = styles.keyBadge;

          if (isSubmitted) {
            if (isCorrect) {
              optionStyle = [styles.optionItem, styles.optionCorrect];
              textStyle = [styles.optionText, styles.textCorrect];
              badgeStyle = [styles.keyBadge, styles.badgeCorrect];
            } else if (isSelected && !isCorrect) {
              optionStyle = [styles.optionItem, styles.optionIncorrect];
              textStyle = [styles.optionText, styles.textIncorrect];
              badgeStyle = [styles.keyBadge, styles.badgeIncorrect];
            }
          } else if (isSelected) {
            optionStyle = [styles.optionItem, styles.optionSelected];
            textStyle = [styles.optionText, styles.textSelected];
            badgeStyle = [styles.keyBadge, styles.badgeSelected];
          }

          return (
            <TouchableOpacity
              key={opt.key}
              activeOpacity={0.8}
              onPress={() => selectAnswer(question.id, opt.key)}
              disabled={isSubmitted}
              style={optionStyle}
            >
              <View style={badgeStyle}>
                <Text style={styles.keyBadgeText}>{opt.key}</Text>
              </View>

              <Text style={textStyle}>{opt.text}</Text>

              {isSubmitted && isCorrect && (
                <CheckCircle2 size={18} color="#10B981" style={{ marginLeft: 8 }} />
              )}
              {isSubmitted && isSelected && !isCorrect && (
                <XCircle size={18} color="#EF4444" style={{ marginLeft: 8 }} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Explanation when submitted */}
      {isSubmitted && (
        <View style={styles.explanationBox}>
          <View style={styles.explanationHeader}>
            <HelpCircle size={16} color="#3B82F6" />
            <Text style={styles.explanationTitle}>Explicación & Descarte ICFES</Text>
          </View>
          <Text style={styles.explanationBody}>{question.explanation}</Text>
          <View style={styles.competenceRow}>
            <Text style={styles.competenceLabel}>Competencia Evaluada:</Text>
            <Text style={styles.competenceValue}>{question.competence}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161B22',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 18,
    padding: 24,
    ...Colors.shadows.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  areaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 9999,
    borderWidth: 1,
    gap: 6,
  },
  areaBadgeText: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  counterText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '600',
  },
  contextBox: {
    backgroundColor: '#0D1117',
    borderLeftColor: Colors.brandRed,
    borderLeftWidth: 3,
    padding: 14,
    borderRadius: 8,
    marginBottom: 16,
  },
  contextText: {
    color: '#CBD5E1',
    fontSize: 13,
    lineHeight: 20,
    fontStyle: 'italic',
  },
  statementText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24,
    marginBottom: 20,
  },
  optionsList: {
    gap: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1117',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1.5,
    borderRadius: 12,
    padding: 14,
    ...Platform.select({
      web: { cursor: 'pointer', transition: 'all 0.2s' } as any,
    }),
  },
  optionSelected: {
    borderColor: Colors.brandRed,
    backgroundColor: 'rgba(255, 30, 39, 0.08)',
  },
  optionCorrect: {
    borderColor: '#10B981',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
  },
  optionIncorrect: {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  keyBadge: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  keyBadgeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
  },
  badgeSelected: {
    backgroundColor: Colors.brandRed,
  },
  badgeCorrect: {
    backgroundColor: '#10B981',
  },
  badgeIncorrect: {
    backgroundColor: '#EF4444',
  },
  optionText: {
    color: '#E2E8F0',
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  textSelected: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  textCorrect: {
    color: '#A7F3D0',
    fontWeight: '700',
  },
  textIncorrect: {
    color: '#FECACA',
  },
  explanationBox: {
    backgroundColor: 'rgba(59, 130, 246, 0.08)',
    borderColor: 'rgba(59, 130, 246, 0.3)',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginTop: 20,
  },
  explanationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  explanationTitle: {
    color: '#60A5FA',
    fontSize: 13,
    fontWeight: '800',
  },
  explanationBody: {
    color: '#E2E8F0',
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 10,
  },
  competenceRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    borderTopColor: 'rgba(255, 255, 255, 0.06)',
    borderTopWidth: 1,
    paddingTop: 8,
  },
  competenceLabel: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '700',
  },
  competenceValue: {
    color: '#38BDF8',
    fontSize: 11,
    fontWeight: '600',
  },
});
