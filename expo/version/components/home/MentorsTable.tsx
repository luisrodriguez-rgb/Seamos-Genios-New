import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Shield, Award, CheckCircle, GraduationCap, Sparkles } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { DIRECTORS, MENTORS } from '../../constants/TeamData';

export const MentorsTable: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 850;

  return (
    <View style={styles.section}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <GraduationCap size={13} color="#FFFFFF" />
            <Text style={styles.badgeText}>EQUIPO DOCENTE DE ÉLITE</Text>
          </View>
          <Text style={styles.title}>Directores y Mentores Récord Nacional</Text>
          <Text style={styles.subtitle}>
            Aprende directamente de los especialistas que obtuvieron los puntajes más altos del país y dominan el marco pedagógico del ICFES.
          </Text>
        </View>

        {/* Directors Cards with Rich Gradients */}
        <View style={[styles.directorsGrid, isDesktop ? styles.directorsDesktop : styles.directorsMobile]}>
          {DIRECTORS.map((director, idx) => (
            <LinearGradient
              key={idx}
              colors={idx === 0 ? ['#280C10', '#161B22'] : ['#10221E', '#161B22']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.directorCard}
            >
              <View style={styles.directorHeader}>
                <View style={[styles.directorAvatar, { backgroundColor: idx === 0 ? '#FF1E27' : '#10B981' }]}>
                  <Text style={styles.directorAvatarText}>{director.name.charAt(0)}</Text>
                </View>
                <View style={styles.directorMeta}>
                  <View style={styles.badgeRow}>
                    <Text style={[styles.founderBadge, { color: idx === 0 ? '#FF4D4D' : '#34D399' }]}>
                      {director.badge}
                    </Text>
                    <Text style={styles.scoreBadge}>Puntaje {director.score}</Text>
                  </View>
                  <Text style={styles.directorName}>{director.name}</Text>
                  <Text style={styles.directorRole}>{director.role}</Text>
                </View>
              </View>

              <View style={styles.credentialsList}>
                {director.credentials.map((cred, c) => (
                  <View key={c} style={styles.credItem}>
                    <CheckCircle size={15} color="#10B981" style={{ marginTop: 2, marginRight: 8 }} />
                    <Text style={styles.credText}>{cred}</Text>
                  </View>
                ))}
              </View>
            </LinearGradient>
          ))}
        </View>

        {/* Mentors Table */}
        <View style={styles.tableCard}>
          <Text style={styles.tableTitle}>Tabla de Mentores Especialistas por Área</Text>
          <View style={styles.tableWrapper}>
            {MENTORS.map((mentor, m) => (
              <View key={m} style={[styles.tableRow, m % 2 === 1 && styles.tableRowAlt]}>
                <View style={styles.tableColMain}>
                  <Text style={styles.mentorName}>{mentor.name}</Text>
                  <Text style={styles.mentorRole}>{mentor.role}</Text>
                </View>
                <View style={styles.tableColMeta}>
                  <Text style={styles.mentorInst}>{mentor.institution}</Text>
                  <Text style={styles.mentorSpecialty}>{mentor.specialty}</Text>
                </View>
                <View style={styles.tableColScore}>
                  <Text style={styles.mentorScoreText}>{mentor.score}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#0D1117',
    paddingVertical: 60,
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
    marginBottom: 40,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF1E27',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 9999,
    gap: 6,
    marginBottom: 12,
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
    fontSize: 29,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 15,
    textAlign: 'center',
    maxWidth: 640,
    lineHeight: 24,
  },
  directorsGrid: {
    gap: 20,
    marginBottom: 32,
  },
  directorsDesktop: {
    flexDirection: 'row',
  },
  directorsMobile: {
    flexDirection: 'column',
  },
  directorCard: {
    flex: 1,
    borderColor: 'rgba(255, 255, 255, 0.12)',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 24,
    ...Colors.shadows.md,
  },
  directorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  directorAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
    ...Colors.shadows.md,
  },
  directorAvatarText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 22,
  },
  directorMeta: {
    flex: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  founderBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    fontSize: 10,
    fontWeight: '800',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  scoreBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.18)',
    color: '#34D399',
    fontSize: 10,
    fontWeight: '900',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  directorName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '900',
  },
  directorRole: {
    color: '#94A3B8',
    fontSize: 12,
    marginTop: 2,
  },
  credentialsList: {
    gap: 10,
  },
  credItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  credText: {
    color: '#E2E8F0',
    fontSize: 13,
    lineHeight: 19,
    flex: 1,
  },
  tableCard: {
    backgroundColor: '#161B22',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderRadius: 20,
    padding: 24,
  },
  tableTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 16,
  },
  tableWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  tableRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#0D1117',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
  },
  tableRowAlt: {
    backgroundColor: '#111620',
  },
  tableColMain: {
    minWidth: 200,
    flex: 1,
    marginBottom: 4,
  },
  mentorName: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 14,
  },
  mentorRole: {
    color: '#94A3B8',
    fontSize: 12,
  },
  tableColMeta: {
    minWidth: 200,
    flex: 1,
    marginBottom: 4,
  },
  mentorInst: {
    color: '#E2E8F0',
    fontSize: 12,
    fontWeight: '600',
  },
  mentorSpecialty: {
    color: '#64748B',
    fontSize: 11,
  },
  tableColScore: {
    alignItems: 'flex-end',
  },
  mentorScoreText: {
    backgroundColor: 'rgba(16, 185, 129, 0.12)',
    borderColor: 'rgba(16, 185, 129, 0.3)',
    borderWidth: 1,
    color: '#10B981',
    fontWeight: '800',
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
});
