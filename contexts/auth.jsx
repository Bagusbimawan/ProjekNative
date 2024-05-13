import { create } from "zustand";

export const useAuth = create((set) => ({
  haslogged: false,
  login: () => set({ haslogged: true }),
}));
