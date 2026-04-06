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

  setTransactions: (data) => {
    localStorage.setItem("finance", JSON.stringify(data));
    set({ transactions: data });
  },

  addTransaction: (txn) =>
    set((state) => {
      const updated = [...state.transactions, txn];
      localStorage.setItem("finance", JSON.stringify(updated));
      return { transactions: updated };
    }),

  updateTransaction: (updatedTxn) =>
    set((state) => {
      const updated = state.transactions.map((t) =>
        t.id === updatedTxn.id ? updatedTxn : t
      );
      localStorage.setItem("finance", JSON.stringify(updated));
      return { transactions: updated };
    }),
}));