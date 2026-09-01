import React, { useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { HeaderNav } from '../components/layout/HeaderNav';
import { CartDrawer } from '../components/ecommerce/CartDrawer';
import { CheckoutModal } from '../components/ecommerce/CheckoutModal';
import { AuthModal } from '../components/auth/AuthModal';
import { FloatingWhatsApp } from '../components/layout/FloatingWhatsApp';
import { Colors } from '../constants/Colors';

export default function RootLayout() {
  const loadCart = useCartStore((state) => state.loadCart);
  const loadUser = useAuthStore((state) => state.loadUser);

  useEffect(() => {
    loadCart();
    loadUser();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <StatusBar style="light" backgroundColor="#0D1117" />
      <HeaderNav />

      <View style={styles.content}>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: Colors.dark.background },
            animation: 'fade',
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="role/[id]" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ title: 'Página no encontrada' }} />
        </Stack>
      </View>

      {/* Global Drawers & Modals */}
      <CartDrawer />
      <CheckoutModal />
      <AuthModal />
      <FloatingWhatsApp />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    minHeight: '100%',
  },
  content: {
    flex: 1,
  },
});
