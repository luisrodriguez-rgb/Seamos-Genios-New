import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Sparkles,
  CheckCircle,
  Award,
} from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { useAuthStore } from '../../store/useAuthStore';
import { Button } from '../ui/Button';

export const RoleHubCards: React.FC = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 850;
  const selectedRole = useAuthStore((state) => state.selectedRole);
  const setAuthModalOpen = useAuthStore((state) => state.setAuthModalOpen);

  const getRoleTheme = () => {
    switch (selectedRole) {
      case 'colegio':
        return {
          title: 'Para Colegios, Rectores y Secretarías de Educación',
          subtitle: 'Eleve el promedio institucional y posicione a su institución en Categoría A+ con diagnósticos predictivos y cumplimiento DIAN.',
          stats: [
            { label: 'Colegios Aliados', value: '+60', color: '#D97706' },
            { label: 'Subida Promedio', value: '+45 pts', color: '#059669' },
            { label: 'Facturación DIAN', value: '100% Legal', color: '#0284C7' },
          ],
          points: [
            'Batería de simulacros físicos y digitales con lectura óptica y entrega de resultados en 24h.',
            'Dashboard analítico en tiempo real para Rectores, Coordinadores y Docentes de área.',
            'Capacitación pedagógica a la planta docente en el marco de competencias del ICFES.',
            'Convenios formales y facturación electrónica oficial respaldada por Factus SAS.',
          ],
          accent: '#D97706',
          badgeText: 'CONVENIO INSTITUCIONAL',
          lightBg: ['#FFFBEB', '#FFFFFF'] as [string, string],
          primaryBtn: 'Cotizar Convenio Institucional',
          primaryAction: () => router.push('/(tabs)/catalog'),
          secondaryBtn: 'Ver Directorio de Colegios',
          secondaryAction: () => router.push('/(tabs)/schools'),
        };

      case 'familia':
        return {
          title: 'Para Padres y Madres de Familia',
          subtitle: 'Acompañe a su hijo con la mejor preparación y tecnología para garantizar su ingreso a las mejores universidades del país.',
          stats: [
            { label: 'Garantía Mínima', value: '+80 pts', color: '#059669' },
            { label: 'Reportes Semanales', value: 'WhatsApp', color: '#16A34A' },
            { label: 'Mentoría Vocacional', value: '1 a 1', color: '#0284C7' },
          ],
          points: [
            'Reportes semanales de asistencia, cumplimiento y rendimiento enviados a su WhatsApp.',
            'Talleres familiares sobre manejo de la ansiedad, hábitos de estudio y orientación vocacional.',
            'Plataforma segura y accesible desde cualquier computador, tablet o celular.',
            'Acompañamiento psicológico y pedagógico durante todo el año escolar.',
          ],
          accent: '#0284C7',
          badgeText: 'ACOMPAÑAMIENTO FAMILIAR',
          lightBg: ['#F0F9FF', '#FFFFFF'] as [string, string],
          primaryBtn: 'Inscribir a mi Hijo al Plan',
          primaryAction: () => router.push('/(tabs)/catalog'),
          secondaryBtn: 'Chatear con un Orientador',
          secondaryAction: () => setAuthModalOpen(true, 'register'),
        };

      case 'docente':
        return {
          title: 'Para Docentes y Educadores de Bachillerato',
          subtitle: 'Herramientas pedagógicas de vanguardia, bancos de preguntas calibrados y estrategias de evaluación por competencias.',
          stats: [
            { label: 'Banco Preguntas', value: '+5.000', color: '#059669' },
            { label: 'Áreas Oficiales', value: '5 de 5', color: '#0284C7' },
            { label: 'Talleres MEN', value: 'Certificados', color: '#D97706' },
          ],
          points: [
            'Guías didácticas y solucionarios paso a paso alineados a la matriz de referencia del ICFES.',
            'Análisis detallado de afirmaciones, evidencias y competencias por área del conocimiento.',
            'Comunidad nacional de docentes para intercambio de experiencias pedagógicas.',
            'Talleres prácticos de diseño de ítems de selección múltiple con única respuesta.',
          ],
          accent: '#059669',
          badgeText: 'HERRAMIENTAS DOCENTES',
          lightBg: ['#ECFDF5', '#FFFFFF'] as [string, string],
          primaryBtn: 'Acceder a Recursos Docentes',
          primaryAction: () => router.push('/(tabs)/simulator'),
          secondaryBtn: 'Ver Tabla de Mentores',
          secondaryAction: () => router.push('/(tabs)'),
        };

      case 'estudiante':
      default:
        return {
          title: 'Para Estudiantes de Grado 10° y 11° (Calendario A y B)',
          subtitle: 'Domina el examen con neuroaprendizaje, algoritmos de IA y mentoría de quienes obtuvieron puntajes superiores a 470/500.',
          stats: [
            { label: 'Puntaje Récord', value: '477 / 500', color: '#DC2626' },
            { label: 'Horas en Vivo', value: '180+ hrs', color: '#0284C7' },
            { label: 'Estudiantes', value: '+1.500', color: '#059669' },
          ],
          points: [
            'Simulacros periódicos con cronómetro oficial y explicaciones en video de cada pregunta.',
            'Tutor de IA personalizado que detecta tus vacíos conceptuales y genera rutas de repaso.',
            'Clases en vivo dinámicas, prácticas y 100% enfocadas en los patrones repetitivos del ICFES.',
            'Garantía de incremento de +80 puntos o asesoría personalizada de refuerzo sin costo.',
          ],
          accent: '#FF1E27',
          badgeText: 'PLAN DE ACCIÓN DIRIGIDO',
          lightBg: ['#FFF5F5', '#FFFFFF'] as [string, string],
          primaryBtn: 'Inscribirme al Plan Calendario A',
          primaryAction: () => router.push('/(tabs)/catalog'),
          secondaryBtn: 'Probar Simulador Gratis',
          secondaryAction: () => router.push('/(tabs)/simulator'),
        };
    }
  };

  const theme = getRoleTheme();

  return (
    <View style={styles.sectionWrapper}>
      <View style={styles.container}>
        <LinearGradient
          colors={theme.lightBg}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.cardWrapper, { borderColor: `${theme.accent}30` }]}
        >
          <View style={[styles.contentLayout, isDesktop ? styles.contentDesktop : styles.contentMobile]}>
            {/* Left Column: Details & Checklist */}
            <View style={styles.leftCol}>
              <View style={styles.badgeRow}>
                <View style={[styles.roleTag, { backgroundColor: `${theme.accent}12`, borderColor: `${theme.accent}35` }]}>
                  <Sparkles size={13} color={theme.accent} />
                  <Text style={[styles.roleTagText, { color: theme.accent }]}>{theme.badgeText}</Text>
                </View>
              </View>

              <Text style={styles.title}>{theme.title}</Text>
              <Text style={styles.subtitle}>{theme.subtitle}</Text>

              <View style={styles.checklist}>
                {theme.points.map((point, idx) => (
                  <View key={idx} style={styles.checkItem}>
                    <View style={styles.checkIcon}>
                      <CheckCircle size={17} color={theme.accent} />
                    </View>
                    <Text style={styles.checkText}>{point}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.actionsRow}>
                <Button
                  title={theme.primaryBtn}
                  onPress={theme.primaryAction}
                  variant="primary"
                  size="md"
                  style={{ marginRight: 12, marginBottom: 8 }}
                />
                <Button
                  title={theme.secondaryBtn}
                  onPress={theme.secondaryAction}
                  variant="outline"
                  size="md"
                  style={{ marginBottom: 8 }}
                />
              </View>
            </View>

            {/* Right Column: Metrics Dashboard Box */}
            <View style={styles.rightCol}>
              <View style={styles.statsBox}>
                <Text style={styles.statsBoxTitle}>Resultados Verificados</Text>
                <View style={styles.statsGrid}>
                  {theme.stats.map((stat, i) => (
                    <View key={i} style={styles.statCell}>
                      <Text style={[styles.statValue, { color: stat.color }]}>{stat.value}</Text>
                      <Text style={styles.statLabel}>{stat.label}</Text>
                    </View>
                  ))}
                </View>

                <View style={styles.trustFooter}>
                  <Award size={16} color="#D97706" />
                  <Text style={styles.trustFooterText}>
                    Metodología acreditada con más de 8 años de excelencia en Colombia.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#F8FAFC',
    paddingBottom: 50,
  },
  container: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
  },
  cardWrapper: {
    borderWidth: 2,
    borderRadius: 24,
    padding: 32,
    backgroundColor: '#FFFFFF',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
  },
  contentLayout: {
    gap: 32,
  },
  contentDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentMobile: {
    flexDirection: 'column',
  },
  leftCol: {
    flex: 1.3,
  },
  rightCol: {
    flex: 0.9,
  },
  badgeRow: {
    marginBottom: 12,
  },
  roleTag: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 9999,
    paddingVertical: 5,
    paddingHorizontal: 13,
    gap: 6,
    alignSelf: 'flex-start',
  },
  roleTagText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    color: '#0F172A',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: -0.3,
    marginBottom: 8,
    lineHeight: 32,
  },
  subtitle: {
    color: '#475569',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 22,
  },
  checklist: {
    gap: 12,
    marginBottom: 26,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkIcon: {
    marginTop: 2,
    marginRight: 10,
  },
  checkText: {
    color: '#1E293B',
    fontSize: 14,
    lineHeight: 21,
    flex: 1,
  },
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  statsBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 18,
    padding: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  statsBoxTitle: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 18,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 18,
  },
  statCell: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  statValue: {
    fontSize: 18,
    fontWeight: '900',
    marginBottom: 4,
  },
  statLabel: {
    color: '#64748B',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  trustFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    borderRadius: 10,
    padding: 10,
    gap: 8,
  },
  trustFooterText: {
    color: '#92400E',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    flex: 1,
  },
});
