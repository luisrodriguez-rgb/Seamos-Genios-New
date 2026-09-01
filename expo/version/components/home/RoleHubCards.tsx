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
  ArrowRight,
  ShieldAlert,
  Award,
  Zap,
  Target,
  FileSpreadsheet,
  BookOpen,
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
            { label: 'Colegios Aliados', value: '+60', color: '#F59E0B' },
            { label: 'Subida Promedio', value: '+45 pts', color: '#10B981' },
            { label: 'Facturación DIAN', value: '100% Legal', color: '#38BDF8' },
          ],
          points: [
            'Batería de simulacros físicos y digitales con lectura óptica y entrega de resultados en 24h.',
            'Dashboard analítico en tiempo real para Rectores, Coordinadores y Docentes de área.',
            'Capacitación pedagógica a la planta docente en el marco de competencias del ICFES.',
            'Convenios formales y facturación electrónica oficial respaldada por Factus SAS.',
          ],
          accent: '#F59E0B',
          bgGradient: ['#22170B', '#161B22'] as [string, string],
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
            { label: 'Garantía Mínima', value: '+80 pts', color: '#10B981' },
            { label: 'Reportes Semanales', value: 'WhatsApp', color: '#25D366' },
            { label: 'Mentoría Vocacional', value: '1 a 1', color: '#38BDF8' },
          ],
          points: [
            'Reportes semanales de asistencia, cumplimiento y rendimiento enviados a su WhatsApp.',
            'Talleres familiares sobre manejo de la ansiedad, hábitos de estudio y orientación vocacional.',
            'Plataforma segura y accesible desde cualquier computador, tablet o celular.',
            'Acompañamiento psicológico y pedagógico durante todo el año escolar.',
          ],
          accent: '#06B6D4',
          bgGradient: ['#0A1D24', '#161B22'] as [string, string],
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
            { label: 'Banco Preguntas', value: '+5.000', color: '#10B981' },
            { label: 'Áreas Oficiales', value: '5 de 5', color: '#38BDF8' },
            { label: 'Talleres MEN', value: 'Certificados', color: '#F59E0B' },
          ],
          points: [
            'Guías didácticas y solucionarios paso a paso alineados a la matriz de referencia del ICFES.',
            'Análisis detallado de afirmaciones, evidencias y competencias por área del conocimiento.',
            'Comunidad nacional de docentes para intercambio de experiencias pedagógicas.',
            'Talleres prácticos de diseño de ítems de selección múltiple con única respuesta.',
          ],
          accent: '#10B981',
          bgGradient: ['#082017', '#161B22'] as [string, string],
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
            { label: 'Puntaje Récord', value: '477 / 500', color: '#FF3B42' },
            { label: 'Horas en Vivo', value: '180+ hrs', color: '#38BDF8' },
            { label: 'Estudiantes', value: '+1.500', color: '#10B981' },
          ],
          points: [
            'Simulacros periódicos con cronómetro oficial y explicaciones en video de cada pregunta.',
            'Tutor de IA personalizado que detecta tus vacíos conceptuales y genera rutas de repaso.',
            'Clases en vivo dinámicas, prácticas y 100% enfocadas en los patrones repetitivos del ICFES.',
            'Garantía de incremento de +80 puntos o asesoría personalizada de refuerzo sin costo.',
          ],
          accent: '#FF1E27',
          bgGradient: ['#220A0D', '#161B22'] as [string, string],
          primaryBtn: 'Inscribirme al Plan Calendario A',
          primaryAction: () => router.push('/(tabs)/catalog'),
          secondaryBtn: 'Probar Simulador Gratis',
          secondaryAction: () => router.push('/(tabs)/simulator'),
        };
    }
  };

  const theme = getRoleTheme();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={theme.bgGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={[styles.cardWrapper, { borderColor: `${theme.accent}40` }]}
      >
        <View style={[styles.contentLayout, isDesktop ? styles.contentDesktop : styles.contentMobile]}>
          {/* Left Column: Details & Checklist */}
          <View style={styles.leftCol}>
            <View style={styles.badgeRow}>
              <View style={[styles.roleTag, { backgroundColor: `${theme.accent}18`, borderColor: `${theme.accent}50` }]}>
                <Sparkles size={13} color={theme.accent} />
                <Text style={[styles.roleTagText, { color: theme.accent }]}>PLAN DE ACCIÓN DIRIGIDO</Text>
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
            <View style={[styles.statsBox, { borderColor: 'rgba(255, 255, 255, 0.12)' }]}>
              <Text style={styles.statsBoxTitle}>Resultados Garantizados</Text>
              <View style={styles.statsGrid}>
                {theme.stats.map((stat, i) => (
                  <View key={i} style={styles.statCell}>
                    <Text style={[styles.statValue, { color: stat.color }]}>{stat.value}</Text>
                    <Text style={styles.statLabel}>{stat.label}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.trustFooter}>
                <Award size={16} color="#F59E0B" />
                <Text style={styles.trustFooterText}>
                  Metodología respaldada por más de 8 años de excelencia en Colombia.
                </Text>
              </View>
            </View>
          </View>
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
    paddingBottom: 40,
  },
  cardWrapper: {
    borderWidth: 1.5,
    borderRadius: 22,
    padding: 30,
    ...Colors.shadows.lg,
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
    paddingVertical: 4,
    paddingHorizontal: 12,
    gap: 6,
    alignSelf: 'flex-start',
  },
  roleTagText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: -0.3,
    marginBottom: 8,
    lineHeight: 30,
  },
  subtitle: {
    color: '#CBD5E1',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
  },
  checklist: {
    gap: 12,
    marginBottom: 24,
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
    color: '#F1F5F9',
    fontSize: 13,
    lineHeight: 20,
    flex: 1,
  },
  actionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  statsBox: {
    backgroundColor: '#090D14',
    borderWidth: 1,
    borderRadius: 18,
    padding: 24,
  },
  statsBoxTitle: {
    color: '#FFFFFF',
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
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  statValue: {
    fontSize: 17,
    fontWeight: '900',
    marginBottom: 4,
  },
  statLabel: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
  trustFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    borderRadius: 10,
    padding: 10,
    gap: 8,
  },
  trustFooterText: {
    color: '#FCD34D',
    fontSize: 11,
    lineHeight: 16,
    flex: 1,
  },
});
