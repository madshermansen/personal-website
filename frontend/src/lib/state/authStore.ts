import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  authToken?: string | undefined;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setAuthToken: (authToken: string | undefined) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  authToken: undefined,
  setIsLoggedIn: (isLoggedIn: boolean) => set({ isLoggedIn }),
  setAuthToken: (authToken: string | undefined) => set({ authToken }),
}));

export default useAuthStore;
