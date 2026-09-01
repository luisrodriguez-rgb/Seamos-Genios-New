import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Users, Trophy, Building, ThumbsUp } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';

export const MetricsBanner: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const STATS = [
    {
      value: '+1.500',
      label: 'Estudiantes Preparados',
      sub: 'En más de 18 departamentos',
      icon: <Users size={24} color="#FF3B42" />,
      glowColor: '#FF3B42',
      valColor: '#FF4D4D',
    },
    {
      value: '477 / 500',
      label: 'Puntaje Récord Nacional',
      sub: 'Top 0.1% a nivel país',
      icon: <Trophy size={24} color="#F59E0B" />,
      glowColor: '#F59E0B',
      valColor: '#FBBF24',
    },
    {
      value: '+60',
      label: 'Colegios Aliados',
      sub: 'Convenios institucionales activos',
      icon: <Building size={24} color="#38BDF8" />,
      glowColor: '#38BDF8',
      valColor: '#38BDF8',
    },
    {
      value: '98.4%',
      label: 'Tasa de Satisfacción',
      sub: 'Evaluado por padres y rectores',
      icon: <ThumbsUp size={24} color="#10B981" />,
      glowColor: '#10B981',
      valColor: '#34D399',
    },
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#161B22', '#0F131A']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <View style={[styles.grid, isDesktop ? styles.gridDesktop : styles.gridMobile]}>
          {STATS.map((stat, i) => (
            <View key={i} style={styles.statCol}>
              <View style={[styles.iconWrapper, { backgroundColor: `${stat.glowColor}15`, borderColor: `${stat.glowColor}40` }]}>
                {stat.icon}
              </View>
              <Text style={[styles.valueText, { color: stat.valColor }]}>{stat.value}</Text>
              <Text style={styles.labelText}>{stat.label}</Text>
              <Text style={styles.subText}>{stat.sub}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  card: {
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1.5,
    borderRadius: 22,
    paddingVertical: 32,
    paddingHorizontal: 20,
    ...Colors.shadows.lg,
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
    width: 52,
    height: 52,
    borderRadius: 15,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  valueText: {
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  labelText: {
    color: '#F1F5F9',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 2,
  },
  subText: {
    color: '#94A3B8',
    fontSize: 11,
    textAlign: 'center',
  },
});
