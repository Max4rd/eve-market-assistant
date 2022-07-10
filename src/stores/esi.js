import { defineStore } from 'pinia';

const esiUrl = 'https://esi.evetech.net/latest';

export const useEsiStore = defineStore('esi', {
  actions: {
    fetchMarketOrders(regionId, typeId, orderType) {
      let url = esiUrl + `/markets/${regionId}/orders/`;
      url += `?order_type=${orderType}&type_id=${typeId}`;
      return fetch(url);
    },

    fetchMarketHistory(regionId, typeId) {
      let url = esiUrl + `/markets/${regionId}/history/`;
      url += `?type_id=${typeId}`;
      return fetch(url);
    },

    searchItem(searchString) {
      const url = esiUrl + `/search/?categories=inventory_type&search=${searchString}`;
      return fetch(url);
    }
  },
});
