import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Award, CheckCircle, GraduationCap } from 'lucide-react-native';
import { DIRECTORS, MENTORS } from '../../constants/TeamData';

export const MentorsTable: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 850;

  return (
    <View style={styles.section}>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <View style={styles.badge}>
            <GraduationCap size={13} color="#FF1E27" />
            <Text style={styles.badgeText}>EQUIPO DOCENTE DE ÉLITE</Text>
          </View>
          <Text style={styles.title}>Directores y Mentores Récord Nacional</Text>
          <Text style={styles.subtitle}>
            Aprende directamente de los especialistas que obtuvieron los puntajes más altos del país y dominan el marco pedagógico del ICFES.
          </Text>
        </View>

        {/* Directors Cards with Crisp White/Light Gradients */}
        <View style={[styles.directorsGrid, isDesktop ? styles.directorsDesktop : styles.directorsMobile]}>
          {DIRECTORS.map((director, idx) => (
            <LinearGradient
              key={idx}
              colors={idx === 0 ? ['#FFF5F5', '#FFFFFF'] : ['#ECFDF5', '#FFFFFF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={[
                styles.directorCard,
                { borderColor: idx === 0 ? '#FECACA' : '#A7F3D0' },
              ]}
            >
              <View style={styles.directorHeader}>
                <View style={[styles.directorAvatar, { backgroundColor: idx === 0 ? '#FF1E27' : '#059669' }]}>
                  <Text style={styles.directorAvatarText}>{director.name.charAt(0)}</Text>
                </View>
                <View style={styles.directorMeta}>
                  <View style={styles.badgeRow}>
                    <Text style={[styles.founderBadge, { color: idx === 0 ? '#DC2626' : '#059669', backgroundColor: idx === 0 ? '#FEE2E2' : '#D1FAE5' }]}>
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
                    <CheckCircle size={15} color="#059669" style={{ marginTop: 2, marginRight: 8 }} />
                    <Text style={styles.credText}>{cred}</Text>
                  </View>
                ))}
              </View>
            </LinearGradient>
          ))}
        </View>

        {/* Mentors Table with Crisp Light Lines */}
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
    backgroundColor: '#FFFFFF',
    paddingVertical: 64,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
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
    backgroundColor: 'rgba(255, 30, 39, 0.08)',
    borderColor: 'rgba(255, 30, 39, 0.25)',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 9999,
    gap: 6,
    marginBottom: 12,
  },
  badgeText: {
    color: '#FF1E27',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  title: {
    color: '#0F172A',
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  subtitle: {
    color: '#475569',
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
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 3,
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
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
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
    fontSize: 10,
    fontWeight: '800',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
  },
  scoreBadge: {
    backgroundColor: '#ECFDF5',
    color: '#059669',
    fontSize: 10,
    fontWeight: '900',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 4,
  },
  directorName: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: '900',
  },
  directorRole: {
    color: '#64748B',
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
    color: '#334155',
    fontSize: 13,
    lineHeight: 19,
    flex: 1,
  },
  tableCard: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1.5,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
  },
  tableTitle: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '900',
    marginBottom: 16,
  },
  tableWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  tableRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  tableRowAlt: {
    backgroundColor: '#F8FAFC',
  },
  tableColMain: {
    minWidth: 200,
    flex: 1,
    marginBottom: 4,
  },
  mentorName: {
    color: '#0F172A',
    fontWeight: '800',
    fontSize: 14,
  },
  mentorRole: {
    color: '#64748B',
    fontSize: 12,
  },
  tableColMeta: {
    minWidth: 200,
    flex: 1,
    marginBottom: 4,
  },
  mentorInst: {
    color: '#334155',
    fontSize: 12,
    fontWeight: '600',
  },
  mentorSpecialty: {
    color: '#94A3B8',
    fontSize: 11,
  },
  tableColScore: {
    alignItems: 'flex-end',
  },
  mentorScoreText: {
    backgroundColor: '#ECFDF5',
    borderColor: '#A7F3D0',
    borderWidth: 1,
    color: '#059669',
    fontWeight: '800',
    fontSize: 11,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
});
