import { defineStore } from 'pinia';

const tag = 'regionStore';

export const useRegionStore = defineStore('region', {
  state: () => {
    return {
      selected: null,
    };
  },

  getters: {
    show() {
      if (this.selected) {
        return this.selected;
      } else if (localStorage.getItem(tag)) {
        this.selected = JSON.parse(localStorage.getItem(tag));
        return this.selected;
      } else {
        const defaultRegion = {
          regionID: 10000002,
          regionName: 'The Forge',
        };
        this.store(defaultRegion);
        return this.selected;
      }
    },
  },

  actions: {
    store(newRegion) {
      this.selected = newRegion;
      localStorage.setItem(tag, JSON.stringify(newRegion));
    },
  },
});
