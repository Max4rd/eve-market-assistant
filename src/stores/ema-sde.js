import { defineStore } from 'pinia';

const emaSdeUrl = 'http://localhost:3000';

export const useEmaSdeStore = defineStore('emaSde', {
  actions: {
    // Market routes
    async getMarketGroups(parentId) {
      const url = emaSdeUrl + `/market/groups/${parentId}`;
      return await fetch(url);
    },

    async getMarketTypes(groupId) {
      const url = emaSdeUrl + `/market/types/${groupId}`;
      return await fetch(url);
    },

    async getMarketTree() {
      const url = emaSdeUrl + '/market/tree';
      return await fetch(url);
    },
  },
});
