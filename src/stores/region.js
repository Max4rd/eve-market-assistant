import { defineStore } from 'pinia';

export const useRegionStore = defineStore('region', {
  state: () => {
    return {
      selected: {
        regionID: 10000002,
        regionName: 'The Forge',
      },
    };
  },
});
