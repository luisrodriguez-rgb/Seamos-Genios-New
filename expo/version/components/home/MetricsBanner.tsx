import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { Users, Trophy, Building, ThumbsUp } from 'lucide-react-native';

export const MetricsBanner: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const STATS = [
    {
      value: '+1.500',
      label: 'Estudiantes Preparados',
      sub: 'En más de 18 departamentos',
      icon: <Users size={24} color="#FF1E27" />,
      boxBg: '#FFF5F5',
      boxBorder: '#FECACA',
      valColor: '#DC2626',
    },
    {
      value: '477 / 500',
      label: 'Puntaje Récord Nacional',
      sub: 'Top 0.1% a nivel país',
      icon: <Trophy size={24} color="#D97706" />,
      boxBg: '#FFFBEB',
      boxBorder: '#FDE68A',
      valColor: '#D97706',
    },
    {
      value: '+60',
      label: 'Colegios Aliados',
      sub: 'Convenios institucionales activos',
      icon: <Building size={24} color="#0284C7" />,
      boxBg: '#F0F9FF',
      boxBorder: '#BAE6FD',
      valColor: '#0284C7',
    },
    {
      value: '98.4%',
      label: 'Tasa de Satisfacción',
      sub: 'Evaluado por padres y rectores',
      icon: <ThumbsUp size={24} color="#059669" />,
      boxBg: '#ECFDF5',
      boxBorder: '#A7F3D0',
      valColor: '#059669',
    },
  ];

  return (
    <View style={styles.sectionWrapper}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={[styles.grid, isDesktop ? styles.gridDesktop : styles.gridMobile]}>
            {STATS.map((stat, i) => (
              <View key={i} style={styles.statCol}>
                <View style={[styles.iconWrapper, { backgroundColor: stat.boxBg, borderColor: stat.boxBorder }]}>
                  {stat.icon}
                </View>
                <Text style={[styles.valueText, { color: stat.valColor }]}>{stat.value}</Text>
                <Text style={styles.labelText}>{stat.label}</Text>
                <Text style={styles.subText}>{stat.sub}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#F1F5F9',
    paddingVertical: 36,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  container: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2E8F0',
    borderWidth: 1.5,
    borderRadius: 22,
    paddingVertical: 34,
    paddingHorizontal: 20,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
    elevation: 3,
  },
  grid: {
    gap: 24,
  },
  gridDesktop: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  gridMobile: {
    flexDirection: 'column',
  },
  statCol: {
    flex: 1,
    alignItems: 'center',
  },
  iconWrapper: {
    width: 54,
    height: 54,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  valueText: {
    fontSize: 29,
    fontWeight: '900',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  labelText: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 2,
  },
  subText: {
    color: '#64748B',
    fontSize: 12,
    textAlign: 'center',
  },
});
