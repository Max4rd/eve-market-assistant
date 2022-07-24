import { defineStore } from 'pinia';

const esiUrl = 'https://esi.evetech.net/latest';

export const useEsiStore = defineStore('esi', {
  actions: {
    // Market routes
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

    // Universe routes
    fetchUniverseStation(stationId) {
      const url = esiUrl + `/universe/stations/${stationId}`;
      return fetch(url);
    },

    fetchUniverseSystem(systemId) {
      const url = esiUrl + `/universe/systems/${systemId}`;
      return fetch(url);
    },
  },
});
