import { create } from 'zustand';
import { SAMPLE_QUESTIONS, Question } from '../constants/QuestionsData';

interface SimulatorState {
  questions: Question[];
  currentQuestionIndex: number;
  selectedAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  isSubmitted: boolean;
  score: number;
  timeRemainingSeconds: number;
  isTimerRunning: boolean;

  // Actions
  selectAnswer: (questionId: number, answer: 'A' | 'B' | 'C' | 'D') => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  goToQuestion: (index: number) => void;
  submitExam: () => void;
  resetSimulator: () => void;
  decrementTimer: () => void;
  setTimerRunning: (isRunning: boolean) => void;
}

const TOTAL_TIME_SECONDS = 300; // 5 minutes for sample

export const useSimulatorStore = create<SimulatorState>((set, get) => ({
  questions: SAMPLE_QUESTIONS,
  currentQuestionIndex: 0,
  selectedAnswers: {},
  isSubmitted: false,
  score: 0,
  timeRemainingSeconds: TOTAL_TIME_SECONDS,
  isTimerRunning: true,

  selectAnswer: (questionId, answer) => {
    if (get().isSubmitted) return;
    set((state) => ({
      selectedAnswers: {
        ...state.selectedAnswers,
        [questionId]: answer,
      },
    }));
  },

  nextQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.min(state.currentQuestionIndex + 1, state.questions.length - 1),
    }));
  },

  prevQuestion: () => {
    set((state) => ({
      currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
    }));
  },

  goToQuestion: (index) => {
    set({ currentQuestionIndex: index });
  },

  submitExam: () => {
    const { questions, selectedAnswers } = get();
    let correctCount = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    const scaledScore = Math.round((correctCount / questions.length) * 500);

    set({
      isSubmitted: true,
      isTimerRunning: false,
      score: scaledScore,
    });
  },

  resetSimulator: () => {
    set({
      currentQuestionIndex: 0,
      selectedAnswers: {},
      isSubmitted: false,
      score: 0,
      timeRemainingSeconds: TOTAL_TIME_SECONDS,
      isTimerRunning: true,
    });
  },

  decrementTimer: () => {
    set((state) => {
      if (state.timeRemainingSeconds <= 1) {
        get().submitExam();
        return { timeRemainingSeconds: 0, isTimerRunning: false };
      }
      return { timeRemainingSeconds: state.timeRemainingSeconds - 1 };
    });
  },

  setTimerRunning: (isRunning) => set({ isTimerRunning: isRunning }),
}));
