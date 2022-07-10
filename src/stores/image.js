import { defineStore } from 'pinia';

const imageUrl = 'https://images.evetech.net';

export const useImageStore = defineStore('image', {
  actions: {
    fetchVariation(category, id) {
      const url = imageUrl + `/${category}/${id}`;
      return fetch(url);
    },

    fetchImage(category, id, variation, size = null) {
      let url = imageUrl + `/${category}/${id}/${variation}`;
      if (size) {
        url += `?size=${size}`;
      }
      return fetch(url, { mode: 'no-cors' });
    },

    buildImageSourceUrl(category, id, variation, size = null) {
      let url = imageUrl + `/${category}/${id}/${variation}`;
      if (size) {
        url += `?size=${size}`;
      }
      return url;
    },
  },
})
