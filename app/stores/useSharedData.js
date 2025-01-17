import { defineStore } from 'pinia';

export const useSharedData = defineStore('sharedData', {
    state: () => ({
      sharedYear: 2025,
      calendar: null
    }),
    actions: {
      updateData(newData) {
        this.sharedYear = newData;
      },
      setCalendar(calendar){
        this.calendar = calendar;
      }
    },
  });
  