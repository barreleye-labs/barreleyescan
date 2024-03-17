import { create } from 'zustand';

interface State {
  loadingFaucet: boolean;
  loadingTransfer: boolean;
  setLoading: (type: string) => void;
}

export const BTN_TYPE = {
  FAUCET: 'loadingFaucet',
  TRANSFER: 'loadingTransfer'
};

export const buttonHandlerStore = create<State>((set) => ({
  loadingFaucet: false,
  loadingTransfer: false,

  setLoading: (type: string) => set((state) => ({ [type]: !state[type] }))
}));
