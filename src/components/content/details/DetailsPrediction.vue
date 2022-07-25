<script>
import { mapStores } from 'pinia';
import { useEsiStore } from '@/stores/esi';
import { usePredictionStore } from '@/stores/prediction';

export default {
  name: 'DetailsPrediction',

  props: {
    selectedRegion: Object,
    selectedItem: Object,
    accounting: Number,
    brokerRelation: Number,
  },

  data() {
    return {
      data: {
        history: [],
        buyOrders: [],
        sellOrders: [],
      },
      parameters: {
        longPeriod: 1,
        shortPeriod: 1,
      },
      result: null,
      simulatedOrder: 0,
    };
  },

  computed: {
    ...mapStores(useEsiStore, usePredictionStore),

    isDataValid() {
      return this.data.history.length > 0
        && this.data.buyOrders.length > 0
        && this.data.sellOrders.length > 0;
    },

    isParametersValid() {
      return this.parameters.longPeriod > this.parameters.shortPeriod;
    },

    formattedResult() {
      if (this.result >= 0 && this.result < 0.7) {
        return 'strong drop';
      } else if (this.result >= 0.8 && this.result < 0.95) {
        return 'drop';
      } else if (this.result >= 0.95 && this.result < 1.05) {
        return 'stable';
      } else if (this.result >= 1.05 && this.result < 1.2) {
        return 'rise';
      } else {
        return 'strong rise';
      }
    },

    roundedResult() {
      return Math.round(this.result * 100) / 100;
    },

    brokerFee() {
      const result = 3 - 0.3 * this.brokerRelation
      return Math.round(result * 100) / 100;
    },

    salesTax() {
      const result = 8 - 0.88 * this.accounting;
      return Math.round(result * 100) / 100;
    },

    simulatedTaxes() {
      const sales = this.simulatedOrder * (this.salesTax/100);
      const brokers = this.simulatedOrder * (this.brokerFee/100);
      const total = sales + brokers;
      const rounded = Math.round(total * 100) / 100;
      return this.formatPrice(rounded);
    },

    topPrice() {
      const value = this.data.buyOrders[0];
      if (value) {
        return this.formatPrice(value.price);
      }
      return '';
    },

    botPrice() {
      const value = this.data.sellOrders[0];
      if (value) {
        return this.formatPrice(value.price);
      }
      return '';
    },
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
      if (this.isDataValid && this.isParametersValid) {
        this.result = this.predictionStore.predict(
          'movingAverage',
          this.parameters,
          this.data
        );
      }
    },

    formatPrice(value) {
      const formattedNumber = new Intl.NumberFormat('en-US').format(value);
      return formattedNumber + ' ISK';
    },
  },
};
</script>

<template>
  <div class="p-4">
    <div>
      Sales tax: {{ salesTax }}%
    </div>

    <div>
      Broker's fee: {{ brokerFee }}%
    </div>

    <div>
      Top buying price in region: {{ topPrice }}
    </div>

    <div>
      Bot selling price in region: {{ botPrice }}
    </div>

    <div>
      Expected taxes for order:
      <input
          v-model="simulatedOrder"
          type="number"
          min="0"
          step="0.01"
          class="pl-2 border border-gray-400"
      >
      ISK
    </div>

    <div>
      Taxes: {{ simulatedTaxes }}
    </div>

    <div class="mt-4">
      Algorithm used: Moving Average
    </div>

    <div>
      Long period for moving average in days:
      <input
          v-model="parameters.longPeriod"
          type="number"
          min="1"
          max="360"
          class="pl-2 border border-gray-400"
      >
    </div>

    <div>
      Short period for moving average in days:
      <input
          v-model="parameters.shortPeriod"
          type="number"
          min="1"
          max="360"
          class="pl-2 border border-gray-400"
      >
    </div>

    <button
        @click="performPrediction"
        class="px-2 border border-gray-400"
    >
      Perform prediction
    </button>

    <div v-show="result">
      Result: {{ formattedResult }} ({{ roundedResult }})
    </div>
  </div>
</template>
