import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserRole = 'estudiante' | 'colegio' | 'familia' | 'docente';

export interface User {
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  institution?: string;
}

interface AuthState {
  user: User | null;
  selectedRole: UserRole;
  isAuthModalOpen: boolean;
  authMode: 'login' | 'register';
  
  // Actions
  setSelectedRole: (role: UserRole) => void;
  setAuthModalOpen: (isOpen: boolean, mode?: 'login' | 'register') => void;
  setAuthMode: (mode: 'login' | 'register') => void;
  login: (userData: User) => void;
  logout: () => void;
  loadUser: () => Promise<void>;
}

const AUTH_STORAGE_KEY = '@sg_auth_user_v1';
const ROLE_STORAGE_KEY = '@sg_selected_role_v1';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  selectedRole: 'estudiante',
  isAuthModalOpen: false,
  authMode: 'register',

  setSelectedRole: (role: UserRole) => {
    AsyncStorage.setItem(ROLE_STORAGE_KEY, role).catch(() => {});
    set({ selectedRole: role });
  },

  setAuthModalOpen: (isOpen: boolean, mode = 'register') => {
    set({ isAuthModalOpen: isOpen, authMode: mode });
  },

  setAuthMode: (mode: 'login' | 'register') => {
    set({ authMode: mode });
  },

  login: (userData: User) => {
    AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData)).catch(() => {});
    set({ user: userData, isAuthModalOpen: false });
  },

  logout: () => {
    AsyncStorage.removeItem(AUTH_STORAGE_KEY).catch(() => {});
    set({ user: null });
  },

  loadUser: async () => {
    try {
      const savedUser = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
      const savedRole = await AsyncStorage.getItem(ROLE_STORAGE_KEY) as UserRole | null;
      
      set({
        user: savedUser ? JSON.parse(savedUser) : null,
        selectedRole: savedRole || 'estudiante'
      });
    } catch {}
  }
}));
