import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  Platform,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../constants/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emerald' | 'gradient-gold' | 'gradient-cyan';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  style,
  textStyle,
}) => {
  const getSizeStyle = (): { btn: ViewStyle; text: TextStyle; padV: number; padH: number; radius: number } => {
    switch (size) {
      case 'sm':
        return {
          btn: { paddingVertical: 8, paddingHorizontal: 14, borderRadius: 8 },
          text: { fontSize: 13, fontWeight: '700' },
          padV: 8,
          padH: 14,
          radius: 8,
        };
      case 'lg':
        return {
          btn: { paddingVertical: 15, paddingHorizontal: 26, borderRadius: 14 },
          text: { fontSize: 15, fontWeight: '800' },
          padV: 15,
          padH: 26,
          radius: 14,
        };
      case 'md':
      default:
        return {
          btn: { paddingVertical: 11, paddingHorizontal: 20, borderRadius: 10 },
          text: { fontSize: 14, fontWeight: '700' },
          padV: 11,
          padH: 20,
          radius: 10,
        };
    }
  };

  const sizeStyle = getSizeStyle();

  const isGradient =
    variant === 'primary' ||
    variant === 'emerald' ||
    variant === 'gradient-gold' ||
    variant === 'gradient-cyan';

  const getGradientColors = (): [string, string, ...string[]] => {
    switch (variant) {
      case 'emerald':
        return ['#10B981', '#059669'];
      case 'gradient-gold':
        return ['#F59E0B', '#D97706'];
      case 'gradient-cyan':
        return ['#06B6D4', '#0284C7'];
      case 'primary':
      default:
        return ['#FF2A33', '#CC0D14'];
    }
  };

  const renderContent = () => (
    <View style={styles.innerRow}>
      {loading ? (
        <ActivityIndicator
          color={variant === 'outline' || variant === 'ghost' ? Colors.brandRed : '#FFFFFF'}
          size="small"
        />
      ) : (
        <>
          {icon && iconPosition === 'left' && <View style={{ marginRight: 8 }}>{icon}</View>}
          <Text
            style={[
              styles.baseText,
              isGradient ? styles.whiteText : variant === 'outline' ? styles.outlineText : styles.secondaryText,
              sizeStyle.text,
              textStyle,
            ]}
          >
            {title}
          </Text>
          {icon && iconPosition === 'right' && <View style={{ marginLeft: 8 }}>{icon}</View>}
        </>
      )}
    </View>
  );

  if (isGradient) {
    return (
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.gradientWrapper,
          variant === 'primary' && Colors.shadows.redGlow,
          disabled && styles.disabledBtn,
          style,
        ]}
      >
        <LinearGradient
          colors={getGradientColors()}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.gradientBtn,
            { paddingVertical: sizeStyle.padV, paddingHorizontal: sizeStyle.padH, borderRadius: sizeStyle.radius },
          ]}
        >
          {renderContent()}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      disabled={disabled || loading}
      style={[
        styles.baseBtn,
        variant === 'outline' ? styles.outlineBtn : variant === 'ghost' ? styles.ghostBtn : styles.secondaryBtn,
        sizeStyle.btn,
        disabled && styles.disabledBtn,
        style,
      ]}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: {
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    ...Platform.select({
      web: {
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'transform 0.15s ease, box-shadow 0.2s ease',
      } as any,
    }),
  },
  gradientBtn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      web: {
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'all 0.2s ease',
      } as any,
    }),
  },
  innerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
    letterSpacing: -0.2,
    textAlign: 'center',
  },
  secondaryBtn: {
    backgroundColor: '#1E293B',
    borderColor: 'rgba(255, 255, 255, 0.14)',
    borderWidth: 1,
  },
  outlineBtn: {
    backgroundColor: 'rgba(255, 30, 39, 0.06)',
    borderColor: 'rgba(255, 30, 39, 0.6)',
    borderWidth: 1.5,
  },
  ghostBtn: {
    backgroundColor: 'transparent',
  },
  disabledBtn: {
    opacity: 0.5,
    ...Platform.select({
      web: { cursor: 'not-allowed' } as any,
    }),
  },
  whiteText: {
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  secondaryText: {
    color: '#F1F5F9',
  },
  outlineText: {
    color: '#FF3B42',
  },
});
