import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Colors } from '../../constants/Colors';

interface BadgeProps {
  label: string;
  variant?: 'red' | 'emerald' | 'dark' | 'outline' | 'blue' | 'amber';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'red',
  size = 'md',
  icon,
  style,
  textStyle,
}) => {
  const getBadgeStyle = (): ViewStyle => {
    switch (variant) {
      case 'red':
        return { backgroundColor: 'rgba(255, 30, 39, 0.12)', borderColor: 'rgba(255, 30, 39, 0.35)' };
      case 'emerald':
        return { backgroundColor: 'rgba(16, 185, 129, 0.12)', borderColor: 'rgba(16, 185, 129, 0.35)' };
      case 'blue':
        return { backgroundColor: 'rgba(59, 130, 246, 0.12)', borderColor: 'rgba(59, 130, 246, 0.35)' };
      case 'amber':
        return { backgroundColor: 'rgba(245, 158, 11, 0.12)', borderColor: 'rgba(245, 158, 11, 0.35)' };
      case 'outline':
        return { backgroundColor: 'transparent', borderColor: Colors.dark.borderLight };
      case 'dark':
      default:
        return { backgroundColor: Colors.dark.cardElevated, borderColor: Colors.dark.border };
    }
  };

  const getTextColor = (): string => {
    switch (variant) {
      case 'red':
        return '#FF3B42';
      case 'emerald':
        return '#10B981';
      case 'blue':
        return '#60A5FA';
      case 'amber':
        return '#FBBF24';
      case 'outline':
      case 'dark':
      default:
        return '#F1F5F9';
    }
  };

  return (
    <View
      style={[
        styles.badge,
        getBadgeStyle(),
        size === 'sm' ? styles.badgeSm : styles.badgeMd,
        style,
      ]}
    >
      {icon && <View style={{ marginRight: 5 }}>{icon}</View>}
      <Text
        style={[
          styles.text,
          { color: getTextColor() },
          size === 'sm' ? styles.textSm : styles.textMd,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  badgeSm: {
    paddingVertical: 3,
    paddingHorizontal: 8,
  },
  badgeMd: {
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  text: {
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  textSm: {
    fontSize: 11,
  },
  textMd: {
    fontSize: 12,
  },
});
