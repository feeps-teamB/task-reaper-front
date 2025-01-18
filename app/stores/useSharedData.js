import { defineStore } from 'pinia';

export const useSharedData = defineStore('sharedData', {
    state: () => ({
      sharedYear: 2025,
      calendar: null,
      sharedDate: 1
    }),
    actions: {
      updateData(newData) {
        this.sharedYear = newData;
      },
      updateDate(date){
        this.sharedDate = date;
      },
      setCalendar(calendar){
        this.calendar = calendar;
      }
    },
  });
  