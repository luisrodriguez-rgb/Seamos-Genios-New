import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
  useWindowDimensions,
} from 'react-native';
import {
  ShieldCheck,
  Trophy,
  Users,
  Clock,
  Sparkles,
  Lock,
  Mail,
  User as UserIcon,
  Phone,
  GraduationCap,
} from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { useAuthStore, UserRole } from '../../store/useAuthStore';
import { ModalContainer } from '../ui/ModalContainer';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

export const AuthModal: React.FC = () => {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 800;

  const isAuthModalOpen = useAuthStore((state) => state.isAuthModalOpen);
  const setAuthModalOpen = useAuthStore((state) => state.setAuthModalOpen);
  const authMode = useAuthStore((state) => state.authMode);
  const setAuthMode = useAuthStore((state) => state.setAuthMode);
  const login = useAuthStore((state) => state.login);
  const selectedRole = useAuthStore((state) => state.selectedRole);
  const setSelectedRole = useAuthStore((state) => state.setSelectedRole);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<UserRole>(selectedRole);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (authMode === 'register' && !name.trim()) {
      setError('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }
    if (authMode === 'register' && !phone.trim()) {
      setError('Por favor ingresa tu número de WhatsApp para contacto.');
      return;
    }

    setLoading(true);
    setError('');

    setTimeout(() => {
      setLoading(false);
      login({
        name: name.trim() || email.split('@')[0],
        email: email.trim(),
        phone: phone.trim() || '+573000000000',
        role: role,
      });
      setSelectedRole(role);
      setAuthModalOpen(false);
    }, 800);
  };

  return (
    <ModalContainer
      visible={isAuthModalOpen}
      onClose={() => setAuthModalOpen(false)}
      maxWidth={isDesktop ? 860 : 440}
    >
      <View style={[styles.modalLayout, isDesktop ? styles.layoutDesktop : styles.layoutMobile]}>
        {/* Left Side: Brand & Trust Showcase (Desktop Only) */}
        {isDesktop && (
          <View style={styles.brandSide}>
            <View style={styles.brandBadge}>
              <Text style={styles.brandBadgeText}>SG</Text>
            </View>
            <Text style={styles.brandTitle}>
              SEAMOS <Text style={styles.brandTitleRed}>GENIOS</Text>
            </Text>
            <Text style={styles.brandTagline}>
              La plataforma de preparación PreICFES número 1 en resultados comprobados.
            </Text>

            {/* Metrics cards */}
            <View style={styles.metricsBox}>
              <View style={styles.metricItem}>
                <Trophy size={18} color="#F59E0B" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.metricVal}>477 / 500</Text>
                  <Text style={styles.metricSub}>Puntaje Récord Nacional</Text>
                </View>
              </View>

              <View style={styles.metricItem}>
                <Users size={18} color="#3B82F6" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.metricVal}>+1.500 Alumnos</Text>
                  <Text style={styles.metricSub}>En 18 departamentos</Text>
                </View>
              </View>

              <View style={styles.metricItem}>
                <ShieldCheck size={18} color="#10B981" />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.metricVal}>Garantía +80 Pts</Text>
                  <Text style={styles.metricSub}>Aprobación universitaria</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* Right Side: Form */}
        <View style={styles.formSide}>
          {/* Mode Switcher Tabs */}
          <View style={styles.modeTabs}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setAuthMode('register');
                setError('');
              }}
              style={[styles.modeTab, authMode === 'register' && styles.modeTabActive]}
            >
              <Text style={[styles.modeTabText, authMode === 'register' && styles.modeTabTextActive]}>
                Crear Cuenta / Inscribirme
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setAuthMode('login');
                setError('');
              }}
              style={[styles.modeTab, authMode === 'login' && styles.modeTabActive]}
            >
              <Text style={[styles.modeTabText, authMode === 'login' && styles.modeTabTextActive]}>
                Iniciar Sesión
              </Text>
            </TouchableOpacity>
          </View>

          {/* Role selector chips (Register only) */}
          {authMode === 'register' && (
            <View style={styles.roleChipsRow}>
              {(['estudiante', 'colegio', 'familia', 'docente'] as UserRole[]).map((r) => (
                <TouchableOpacity
                  key={r}
                  activeOpacity={0.8}
                  onPress={() => setRole(r)}
                  style={[styles.roleChip, role === r && styles.roleChipActive]}
                >
                  <Text style={[styles.roleChipText, role === r && styles.roleChipTextActive]}>
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {error ? <Text style={styles.globalError}>{error}</Text> : null}

          {/* Form Fields */}
          {authMode === 'register' && (
            <Input
              label="Nombre Completo"
              placeholder="Ej. Juan Pérez Gómez"
              value={name}
              onChangeText={setName}
              icon={<UserIcon size={16} color="#94A3B8" />}
            />
          )}

          <Input
            label="Correo Electrónico"
            placeholder="alumno@ejemplo.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            icon={<Mail size={16} color="#94A3B8" />}
          />

          {authMode === 'register' && (
            <Input
              label="Número de WhatsApp"
              placeholder="300 123 4567"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              prefix="+57"
              icon={<Phone size={16} color="#94A3B8" />}
            />
          )}

          <Input
            label="Contraseña"
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            icon={<Lock size={16} color="#94A3B8" />}
          />

          <Button
            title={authMode === 'register' ? 'Completar Inscripción' : 'Iniciar Sesión'}
            onPress={handleSubmit}
            loading={loading}
            variant="primary"
            size="lg"
            style={{ width: '100%', marginTop: 8 }}
          />

          <Text style={styles.termsNote}>
            Al registrarte aceptas los Términos de Servicio y la Política de Privacidad de Seamos Genios.
          </Text>
        </View>
      </View>
    </ModalContainer>
  );
};

const styles = StyleSheet.create({
  modalLayout: {
    flexDirection: 'row',
  },
  layoutDesktop: {
    minHeight: 520,
  },
  layoutMobile: {
    flexDirection: 'column',
  },
  brandSide: {
    width: 320,
    backgroundColor: '#0D1117',
    padding: 32,
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.08)',
    justifyContent: 'center',
  },
  brandBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: Colors.brandRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  brandBadgeText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 18,
  },
  brandTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 6,
  },
  brandTitleRed: {
    color: Colors.brandRed,
  },
  brandTagline: {
    color: '#94A3B8',
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 24,
  },
  metricsBox: {
    gap: 12,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161B22',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.06)',
  },
  metricVal: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  metricSub: {
    color: '#64748B',
    fontSize: 11,
  },
  formSide: {
    flex: 1,
    padding: 28,
    backgroundColor: '#161B22',
    justifyContent: 'center',
  },
  modeTabs: {
    flexDirection: 'row',
    backgroundColor: '#0D1117',
    borderRadius: 10,
    padding: 4,
    marginBottom: 18,
  },
  modeTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
  modeTabActive: {
    backgroundColor: Colors.brandRed,
  },
  modeTabText: {
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: '700',
  },
  modeTabTextActive: {
    color: '#FFFFFF',
  },
  roleChipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  roleChip: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 9999,
    backgroundColor: '#0D1117',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  roleChipActive: {
    borderColor: Colors.brandRed,
    backgroundColor: 'rgba(255, 30, 39, 0.12)',
  },
  roleChipText: {
    color: '#94A3B8',
    fontSize: 11,
    fontWeight: '700',
  },
  roleChipTextActive: {
    color: '#FF3B42',
  },
  globalError: {
    color: '#EF4444',
    fontSize: 12,
    marginBottom: 12,
    textAlign: 'center',
  },
  termsNote: {
    color: '#64748B',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 14,
    lineHeight: 16,
  },
});
