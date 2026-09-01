import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Home, ShoppingBag, BookOpenCheck, Building2 } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.brandRed,
        tabBarInactiveTintColor: '#64748B',
        tabBarStyle: {
          backgroundColor: '#0D1117',
          borderTopColor: 'rgba(255, 255, 255, 0.08)',
          borderTopWidth: 1,
          height: Platform.OS === 'web' ? 0 : 60,
          display: Platform.OS === 'web' ? 'none' : 'flex',
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '700',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }: { color: string; size?: number }) => <Home color={color} size={size || 20} />,
        }}
      />
      <Tabs.Screen
        name="catalog"
        options={{
          title: 'Catálogo',
          tabBarIcon: ({ color, size }: { color: string; size?: number }) => <ShoppingBag color={color} size={size || 20} />,
        }}
      />
      <Tabs.Screen
        name="simulator"
        options={{
          title: 'Simulador',
          tabBarIcon: ({ color, size }: { color: string; size?: number }) => <BookOpenCheck color={color} size={size || 20} />,
        }}
      />
      <Tabs.Screen
        name="schools"
        options={{
          title: 'Colegios',
          tabBarIcon: ({ color, size }: { color: string; size?: number }) => <Building2 color={color} size={size || 20} />,
        }}
      />
    </Tabs>
  );
}
