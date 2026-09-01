import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  useWindowDimensions,
} from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { ShoppingBag, Sparkles, User, GraduationCap, ChevronRight } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';
import { Badge } from '../ui/Badge';

export const HeaderNav: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 900;
  
  const getItemCount = useCartStore((state) => state.getItemCount);
  const setDrawerOpen = useCartStore((state) => state.setDrawerOpen);
  const itemCount = getItemCount();

  const user = useAuthStore((state) => state.user);
  const selectedRole = useAuthStore((state) => state.selectedRole);
  const setAuthModalOpen = useAuthStore((state) => state.setAuthModalOpen);

  const getRoleLabel = () => {
    switch (selectedRole) {
      case 'estudiante':
        return 'Estudiante';
      case 'colegio':
        return 'Colegio';
      case 'familia':
        return 'Familia';
      case 'docente':
        return 'Docente';
      default:
        return 'Estudiante';
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.innerContainer}>
        {/* Left: Brand Logo & Badge */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => router.push('/(tabs)')}
          style={styles.brandContainer}
        >
          <View style={styles.logoBadge}>
            <Text style={styles.logoBadgeText}>SG</Text>
          </View>
          <View style={styles.brandTextContainer}>
            <Text style={styles.brandTitle}>
              SEAMOS <Text style={styles.brandTitleRed}>GENIOS</Text>
            </Text>
            <Text style={styles.brandSubtitle}>PreICFES & Neuroaprendizaje</Text>
          </View>
        </TouchableOpacity>

        {/* Center: Desktop Navigation Links */}
        {isDesktop && (
          <View style={styles.navLinks}>
            <TouchableOpacity
              onPress={() => router.push('/(tabs)')}
              style={[styles.navLink, pathname === '/' && styles.navLinkActive]}
            >
              <Text style={[styles.navLinkText, pathname === '/' && styles.navLinkTextActive]}>
                Inicio
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(tabs)/catalog')}
              style={[styles.navLink, pathname === '/catalog' && styles.navLinkActive]}
            >
              <Text style={[styles.navLinkText, pathname === '/catalog' && styles.navLinkTextActive]}>
                Catálogo & Precios
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(tabs)/simulator')}
              style={[styles.navLink, pathname === '/simulator' && styles.navLinkActive]}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.navLinkText, pathname === '/simulator' && styles.navLinkTextActive]}>
                  Simulador ICFES
                </Text>
                <View style={styles.miniDot} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push('/(tabs)/schools')}
              style={[styles.navLink, pathname === '/schools' && styles.navLinkActive]}
            >
              <Text style={[styles.navLinkText, pathname === '/schools' && styles.navLinkTextActive]}>
                Colegios (+60)
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Right: Actions (Role pill, Cart Drawer trigger, Auth button) */}
        <View style={styles.actionsContainer}>
          {/* Active Role Indicator */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setAuthModalOpen(true, 'register')}
            style={styles.rolePill}
          >
            <GraduationCap size={13} color="#FF3B42" />
            <Text style={styles.rolePillText}>{getRoleLabel()}</Text>
          </TouchableOpacity>

          {/* Cart Drawer Trigger */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setDrawerOpen(true)}
            style={styles.cartButton}
          >
            <ShoppingBag size={18} color="#FFFFFF" />
            {itemCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{itemCount}</Text>
              </View>
            )}
          </TouchableOpacity>

          {/* User Auth / Inscribirme */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => setAuthModalOpen(true, user ? 'login' : 'register')}
            style={styles.authButton}
          >
            <User size={14} color="#FFFFFF" />
            <Text style={styles.authButtonText}>
              {user ? user.name.split(' ')[0] : 'Inscribirme'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgba(13, 17, 23, 0.95)',
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
    borderBottomWidth: 1,
    zIndex: 100,
    ...Platform.select({
      web: {
        position: 'sticky',
        top: 0,
        backdropFilter: 'blur(12px)',
      } as any,
    }),
  },
  innerContainer: {
    maxWidth: 1240,
    width: '100%',
    marginHorizontal: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
  logoBadge: {
    width: 38,
    height: 38,
    borderRadius: 9,
    backgroundColor: Colors.brandRed,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    ...Colors.shadows.redGlow,
  },
  logoBadgeText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: 16,
    letterSpacing: -0.5,
  },
  brandTextContainer: {
    flexDirection: 'column',
  },
  brandTitle: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.2,
  },
  brandTitleRed: {
    color: Colors.brandRed,
  },
  brandSubtitle: {
    color: '#94A3B8',
    fontSize: 10,
    fontWeight: '500',
    letterSpacing: 0.1,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  navLink: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
  navLinkActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
  },
  navLinkText: {
    color: '#94A3B8',
    fontSize: 13,
    fontWeight: '600',
  },
  navLinkTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  miniDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.accentEmerald,
    marginLeft: 6,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rolePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 30, 39, 0.1)',
    borderColor: 'rgba(255, 30, 39, 0.3)',
    borderWidth: 1,
    borderRadius: 9999,
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 5,
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
  rolePillText: {
    color: '#FF3B42',
    fontSize: 11,
    fontWeight: '700',
  },
  cartButton: {
    position: 'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 9,
    padding: 9,
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: Colors.brandRed,
    borderRadius: 9999,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    borderWidth: 1.5,
    borderColor: '#0D1117',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },
  authButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.brandRed,
    borderRadius: 9,
    paddingVertical: 8,
    paddingHorizontal: 14,
    gap: 6,
    ...Colors.shadows.redGlow,
    ...Platform.select({
      web: { cursor: 'pointer' } as any,
    }),
  },
  authButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
});
