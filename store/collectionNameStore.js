import {create} from 'zustand';

export const useCollectionNameStore = create((set) => ({
    collectionName: 'default',
    setCollectionName: (collectionName) => set({collectionName}),
}));