import { defineStore } from 'pinia';

const imageUrl = 'https://images.evetech.net';

export const useImageStore = defineStore('image', {
  actions: {
    fetchVariation(category, id) {
      let url = imageUrl + `/${category}/${id}`;
      return fetch(url);
    },

    fetchImage(category, id, variation) {
      let url = imageUrl + `/${category}/${id}/${variation}`;
      return fetch(url);
    },
  },
})
