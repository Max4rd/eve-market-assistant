import { defineStore } from 'pinia';

const emaSdeUrl = 'http://localhost:3000';

export const useEmaSdeStore = defineStore('emaSde', {
  actions: {
    // Market routes
    getMarketGroups(parentId) {
      const url = emaSdeUrl + `/market/groups/${parentId}`;
      return fetch(url);
    },

    getMarketTypes(groupId) {
      const url = emaSdeUrl + `/market/types/${groupId}`;
      return fetch(url);
    },

    getMarketTree() {
      const url = emaSdeUrl + '/market/tree';
      return fetch(url);
    },
  },
});
