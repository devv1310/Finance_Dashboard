import { create } from "zustand";
import { mockTransactions } from "../data/mockData";

const saved = JSON.parse(localStorage.getItem("finance"));

export const useStore = create((set) => ({
  transactions: saved || mockTransactions,
  role: "viewer",
  search: "",
  filterType: "all",

  setRole: (role) => set({ role }),
  setSearch: (search) => set({ search }),
  setFilterType: (type) => set({ filterType: type }),

  addTransaction: (txn) =>
    set((state) => {
      const updated = [...state.transactions, txn];
      localStorage.setItem("finance", JSON.stringify(updated));
      return { transactions: updated };
    }),
}));