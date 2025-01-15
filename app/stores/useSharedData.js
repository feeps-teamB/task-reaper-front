import { defineStore } from 'pinia';

export const useSharedData = defineStore('sharedData', {
    state: () => ({
      sharedYear: 2025,
    }),
    actions: {
      updateData(newData) {
        this.sharedYear = newData;
      },
    },
  });
  