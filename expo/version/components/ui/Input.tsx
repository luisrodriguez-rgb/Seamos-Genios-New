import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  ViewStyle,
  TextInputProps,
  Platform,
} from 'react-native';
import { Colors } from '../../constants/Colors';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  prefix?: string;
  containerStyle?: ViewStyle;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  prefix,
  containerStyle,
  icon,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputWrapper, !!error && styles.errorWrapper]}>
        {prefix && (
          <View style={styles.prefixContainer}>
            <Text style={styles.prefixText}>{prefix}</Text>
          </View>
        )}
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          placeholderTextColor="#64748B"
          style={[styles.input, style]}
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  label: {
    color: '#E2E8F0',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 6,
    letterSpacing: 0.1,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark.cardElevated,
    borderColor: Colors.dark.borderLight,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    minHeight: 46,
    ...Platform.select({
      web: {
        outlineStyle: 'none',
      } as any,
    }),
  },
  errorWrapper: {
    borderColor: '#EF4444',
  },
  prefixContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRightWidth: 1,
    borderRightColor: Colors.dark.border,
    justifyContent: 'center',
  },
  prefixText: {
    color: '#94A3B8',
    fontWeight: '700',
    fontSize: 14,
  },
  iconContainer: {
    paddingLeft: 12,
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    color: '#FFFFFF',
    fontSize: 14,
  },
  errorText: {
    color: '#F87171',
    fontSize: 11,
    marginTop: 4,
  },
});
