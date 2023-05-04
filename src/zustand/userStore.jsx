import { create } from "zustand";


const useUserStore = create((set) => ({
  user: null,
  addUser: (email, _id, Cards) => set(() => ({ user: { email, _id, Cards } })),
}));

export default useUserStore;
