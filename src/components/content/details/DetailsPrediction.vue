<script>
import { mapStores } from 'pinia';
import { useEsiStore } from '@/stores/esi';
import { usePredictionStore } from '@/stores/prediction';

export default {
  name: 'DetailsPrediction',

  props: {
    selectedRegion: Object,
    selectedItem: Object,
  },

  data() {
    return {
      data: [],
      result: null,
    };
  },

  computed: {
    ...mapStores(useEsiStore, usePredictionStore),
  },

  watch: {
    selectedRegion() {
      this.fetchData();
    },
    selectedItem() {
      this.fetchData();
    },
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.result = null;
      if (this.selectedRegion && this.selectedItem) {
        this.esiStore.fetchMarketHistory(this.selectedRegion.regionID, this.selectedItem.typeID)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.data = data;
          });
      }
    },

    performPrediction() {
      this.result = null;
      if (this.data.length > 0) {
        this.result = this.predictionStore.predict('movingAverage', {}, this.data);
      }
    },
  },
};
</script>

<template>
  <div>
    <button @click="performPrediction">
      Perform prediction
    </button>

    <div v-show="result">
      Result: {{ result }}
    </div>
  </div>
</template>
