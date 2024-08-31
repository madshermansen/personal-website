import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  authToken?: string | undefined;
  loginAttempts: number;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setAuthToken: (authToken: string | undefined) => void;
  setLoginAttempts: (loginAttempts: number) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  loginAttempts: 0,
  authToken: undefined,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setAuthToken: (authToken: string | undefined) => set({ authToken }),
  setLoginAttempts: (loginAttempts: number) => set({ loginAttempts }),
}));

// store locally for persistence

export default useAuthStore;
