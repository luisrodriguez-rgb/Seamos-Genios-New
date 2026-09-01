import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { FAQS } from '../../constants/TeamData';

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <View style={styles.section}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <HelpCircle size={13} color="#FFFFFF" />
            <Text style={styles.badgeText}>RESOLVEMOS TUS DUDAS</Text>
          </View>
          <Text style={styles.title}>Preguntas Frecuentes</Text>
          <Text style={styles.subtitle}>
            Todo lo que necesitas saber sobre nuestra metodología, garantías y planes de estudio.
          </Text>
        </View>

        <View style={styles.accordionContainer}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <View key={idx} style={[styles.faqItem, isOpen && styles.faqItemActive]}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => toggle(idx)}
                  style={styles.questionBtn}
                >
                  <Text style={[styles.questionText, isOpen && styles.questionTextActive]}>
                    {faq.question}
                  </Text>
                  {isOpen ? (
                    <ChevronUp size={18} color="#FF1E27" />
                  ) : (
                    <ChevronDown size={18} color="#94A3B8" />
                  )}
                </TouchableOpacity>

                {isOpen && (
                  <View style={styles.answerContainer}>
                    <Text style={styles.answerText}>{faq.answer}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#0D1117',
    paddingVertical: 56,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
  },
  innerContainer: {
    maxWidth: 900,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 36,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.brandRed,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 9999,
    gap: 6,
    marginBottom: 12,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 24,
  },
  accordionContainer: {
    gap: 12,
  },
  faqItem: {
    backgroundColor: '#161B22',
    borderColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderRadius: 14,
    overflow: 'hidden',
  },
  faqItemActive: {
    borderColor: 'rgba(255, 30, 39, 0.3)',
    backgroundColor: '#18202C',
  },
  questionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 18,
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
  questionText: {
    color: '#F1F5F9',
    fontSize: 15,
    fontWeight: '700',
    flex: 1,
    paddingRight: 12,
  },
  questionTextActive: {
    color: '#FFFFFF',
  },
  answerContainer: {
    paddingHorizontal: 18,
    paddingBottom: 18,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.05)',
  },
  answerText: {
    color: '#94A3B8',
    fontSize: 14,
    lineHeight: 22,
  },
});
