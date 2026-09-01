import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Linking,
  Platform,
  View,
} from 'react-native';
import { MessageCircle } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';

export const FloatingWhatsApp: React.FC = () => {
  const openWhatsApp = () => {
    Linking.openURL(
      'https://wa.me/573009292868?text=Hola%20equipo%20de%20Seamos%20Genios,%20deseo%20asesor%C3%ADa%20personalizada%20sobre%20el%20PreICFES.'
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={openWhatsApp}
      style={styles.floatingBtn}
    >
      <View style={styles.iconContainer}>
        <MessageCircle size={22} color="#FFFFFF" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.statusDot}>• En línea</Text>
        <Text style={styles.title}>¿Dudas? Chatea con un Asesor</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingBtn: {
    position: 'absolute',
    bottom: 24,
    right: 20,
    zIndex: 999,
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 9999,
    ...Colors.shadows.lg,
    ...Platform.select({
      web: {
        cursor: 'pointer',
        boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.45)',
        transition: 'transform 0.2s ease',
      } as any,
    }),
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flexDirection: 'column',
  },
  statusDot: {
    color: '#E8F5E9',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: -0.2,
  },
});
