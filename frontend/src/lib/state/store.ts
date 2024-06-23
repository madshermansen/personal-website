import { create } from "zustand";

export const useStore = create((set) => ({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
}));
