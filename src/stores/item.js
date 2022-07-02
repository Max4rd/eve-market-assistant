import { defineStore } from 'pinia';

export const useItemStore = defineStore('item', {
  state: () => {
    return {
      selected: null,
    };
  },
});
