import { defineStore } from 'pinia';

const emaSdeUrl = 'http://localhost:3000';

export const useSdeStore = defineStore('sde', {
  actions: {
    // Market routes
    fetchMarketGroups(parentId) {
      const url = emaSdeUrl + `/market/groups/${parentId}`;
      return fetch(url);
    },

    fetchMarketTypes(groupId) {
      const url = emaSdeUrl + `/market/types/${groupId}`;
      return fetch(url);
    },

    fetchMarketTree() {
      const url = emaSdeUrl + '/market/tree';
      return fetch(url);
    },

    // Region route
    fetchRegion() {
      const url = emaSdeUrl + '/region';
      return fetch(url);
    },

    // Search route
    fetchSearchItem(searchString) {
      const url = emaSdeUrl + `/search/item?string=${searchString}`;
      return fetch(url);
    },
  },
});
