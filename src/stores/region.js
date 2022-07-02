import { defineStore } from 'pinia';

export const useRegionStore = defineStore('region', {
  state: () => {
    return {
      selected: null,
    }
  },
});
