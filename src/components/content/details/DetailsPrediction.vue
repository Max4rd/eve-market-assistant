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
      data: {
        history: [],
        buyOrders: [],
        sellOrders: [],
      },
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
        this.fetchHistory();
        this.fetchOrders();
      }
    },

    fetchHistory() {
      this.esiStore.fetchMarketHistory(this.selectedRegion.regionID, this.selectedItem.typeID)
        .then(response => response.json())
        .then(data => {
          this.data.history = data;
        });
    },

    fetchOrders() {
      this.fetchBuyOrders();
      this.fetchSellOrders();
    },

    fetchBuyOrders() {
      this.esiStore.fetchMarketOrders(this.selectedRegion.regionID, this.selectedItem.typeID, 'buy')
        .then(response => response.json())
        .then(data => {
          this.data.buyOrders = this.orderByPrice(data, false);
        });
    },

    fetchSellOrders() {
      this.esiStore.fetchMarketOrders(this.selectedRegion.regionID, this.selectedItem.typeID, 'sell')
        .then(response => response.json())
        .then(data => {
          this.data.sellOrders = this.orderByPrice(data, true);
        });
    },

    orderByPrice(data, ascending = false) {
      return data.sort((a, b) => {
        if (ascending) {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },

    performPrediction() {
      this.result = null;
      if (this.isDataValid()) {
        const parameters = { period: 20 };
        this.result = this.predictionStore.predict('movingAverage', parameters, this.data);
      }
    },

    isDataValid() {
      return this.data.history.length > 0
        && this.data.buyOrders.length > 0
        && this.data.sellOrders.length > 0;
    }
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
