import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { AlertTriangle } from 'lucide-react-native';
import { Button } from '../components/ui/Button';
import { Colors } from '../constants/Colors';

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <AlertTriangle size={36} color="#FF1E27" />
      </View>
      <Text style={styles.title}>404 - Página No Encontrada</Text>
      <Text style={styles.subtitle}>
        El contenido que buscas no existe o ha sido reubicado en la plataforma.
      </Text>
      <Button
        title="Volver a la Página Principal"
        onPress={() => router.push('/(tabs)')}
        variant="primary"
        size="md"
        style={{ marginTop: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: 'rgba(255, 30, 39, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 8,
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 14,
    textAlign: 'center',
    maxWidth: 400,
    lineHeight: 22,
  },
});
