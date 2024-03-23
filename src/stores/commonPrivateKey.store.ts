import { create } from 'zustand';

interface State {
  privateKey: string;
  address: string;
}

interface Action {
  remove: () => void;
  set: (privateKey: string) => void;
  setAddress: (address: string) => void;
}

export const commonPrivateKeyStore = create<State & Action>((set) => ({
  privateKey: '',
  address: '',

  set: (privateKey: string) => set({ privateKey }),
  remove: () => set({ privateKey: '' }),

  setAddress: (address) => set({ address })
}));
