import { create } from 'zustand';

type BearState = {
  bears: number;
  increase: (by: number) => void;
};

export const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
}));
