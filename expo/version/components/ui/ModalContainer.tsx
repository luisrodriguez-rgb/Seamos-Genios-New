import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  ViewStyle,
  ScrollView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { X } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';

interface ModalContainerProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: number;
  contentStyle?: ViewStyle;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  visible,
  onClose,
  children,
  maxWidth = 780,
  contentStyle,
}) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={[styles.card, { maxWidth }, contentStyle]}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={onClose}
                style={styles.closeBtn}
              >
                <X color="#94A3B8" size={20} />
              </TouchableOpacity>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(10, 15, 29, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    ...Platform.select({
      web: {
        backdropFilter: 'blur(10px)',
      } as any,
    }),
  },
  card: {
    width: '100%',
    backgroundColor: Colors.dark.card,
    borderRadius: 20,
    borderColor: Colors.dark.borderLight,
    borderWidth: 1,
    overflow: 'hidden',
    position: 'relative',
    ...Colors.shadows.lg,
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 9999,
    padding: 6,
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
});
