import {create} from 'zustand';

export const useCollectionNameStore = create((set) => ({
    collectionName: '',
    setCollectionName: (collectionName) => set({collectionName}),
}));