import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Clock } from 'lucide-react-native';
import { useSimulatorStore } from '../../store/useSimulatorStore';

export const TimerWidget: React.FC = () => {
  const timeRemaining = useSimulatorStore((state) => state.timeRemainingSeconds);
  const isTimerRunning = useSimulatorStore((state) => state.isTimerRunning);
  const decrementTimer = useSimulatorStore((state) => state.decrementTimer);
  const isSubmitted = useSimulatorStore((state) => state.isSubmitted);

  useEffect(() => {
    if (!isTimerRunning || isSubmitted) return;
    const timer = setInterval(() => {
      decrementTimer();
    }, 1000);
    return () => clearInterval(timer);
  }, [isTimerRunning, isSubmitted]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isLowTime = timeRemaining <= 60;

  return (
    <View style={[styles.container, isLowTime && styles.containerLow]}>
      <Clock size={16} color={isLowTime ? '#EF4444' : '#FF1E27'} />
      <Text style={[styles.timeText, isLowTime && styles.timeTextLow]}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1117',
    borderColor: 'rgba(255, 30, 39, 0.3)',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 6,
  },
  containerLow: {
    borderColor: '#EF4444',
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
    fontVariant: ['tabular-nums'],
  },
  timeTextLow: {
    color: '#EF4444',
  },
});
