import { create } from "zustand";

const useCardStore = create((set) => ({
  cards: [],
  addToCards: (card) => set((state) => ({ cards: [...state.cards, card] })),
  removeCard: (card) =>
    set((state) => ({ cards: state.cards.filter((c) => c.id !== card.id) })),
}));

export default useCardStore;
