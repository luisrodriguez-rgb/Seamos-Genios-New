import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { HeroBanner } from '../../components/home/HeroBanner';
import { RoleSelector } from '../../components/home/RoleSelector';
import { RoleHubCards } from '../../components/home/RoleHubCards';
import { MethodologySteps } from '../../components/home/MethodologySteps';
import { MetricsBanner } from '../../components/home/MetricsBanner';
import { TestimonialsCarousel } from '../../components/home/TestimonialsCarousel';
import { MentorsTable } from '../../components/home/MentorsTable';
import { FaqAccordion } from '../../components/home/FaqAccordion';
import { FooterSection } from '../../components/layout/FooterSection';
import { Colors } from '../../constants/Colors';

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <HeroBanner />
      <RoleSelector />
      <RoleHubCards />
      <MethodologySteps />
      <MetricsBanner />
      <TestimonialsCarousel />
      <MentorsTable />
      <FaqAccordion />
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
});
