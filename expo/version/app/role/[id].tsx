import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { RoleHubCards } from '../../components/home/RoleHubCards';
import { FooterSection } from '../../components/layout/FooterSection';
import { Button } from '../../components/ui/Button';
import { Colors } from '../../constants/Colors';
import { ArrowLeft } from 'lucide-react-native';

export default function RoleDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.header}>
        <Button
          title="Volver al Inicio"
          onPress={() => router.push('/(tabs)')}
          variant="ghost"
          size="sm"
          icon={<ArrowLeft size={16} color="#94A3B8" />}
          style={{ alignSelf: 'flex-start', marginBottom: 16 }}
        />
        <Text style={styles.title}>Portal Especializado: {id?.toUpperCase()}</Text>
      </View>

      <RoleHubCards />
      <FooterSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
  contentContainer: {
    flexGrow: 1,
  },
  header: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
  },
});
