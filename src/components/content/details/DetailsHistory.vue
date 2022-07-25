<script>
import { mapStores } from 'pinia';
import { useEsiStore } from '@/stores/esi';
import HistoryTable from '@/components/content/details/history/HistoryTable';
import HistoryGraph from '@/components/content/details/history/HistoryGraph';

export default {
  name: 'DetailsHistory',

  components: { HistoryGraph, HistoryTable },

  props: {
    selectedRegion: Object,
    selectedItem: Object,
  },

  data() {
    return {
      showGraph: true,
      statistics: [],
      selectedPeriod: 90,
      periodOptions: [
        {
          label: '5 days',
          value: 5,
        },
        {
          label: '10 days',
          value: 10,
        },
        {
          label: '1 month',
          value: 30,
        },
        {
          label: '3 months',
          value: 90,
        },
        {
          label: '6 months',
          value: 180,
        },
        {
          label: '1 year',
          value: 365,
        },
      ],
    };
  },

  computed: {
    ...mapStores(useEsiStore),

    nextView() {
      return this.showGraph
        ? 'Table'
        : 'Graph';
    },
  },

  watch: {
    selectedRegion() {
      this.fetchStatistics();
    },
    selectedItem() {
      this.fetchStatistics();
    },
  },

  created() {
    this.fetchStatistics();
  },

  methods: {
    fetchStatistics() {
      if (this.selectedRegion?.regionID && this.selectedItem?.typeID) {
        this.esiStore.fetchMarketHistory(this.selectedRegion.regionID,this.selectedItem.typeID)
          .then(response => response.json())
          .then(data => {
            this.statistics = data;
          });
      }
    },
  },
};
</script>

<template>
  <div>
    <HistoryGraph
        v-show="showGraph"
        :statistics="statistics"
        :period="selectedPeriod"
    />

    <HistoryTable
        v-show="!showGraph"
        :statistics="statistics"
        :period="selectedPeriod"
        class="mx-2 my-2"
    />

    <div class="mx-2 my-2">
      <button
          @click="showGraph = !showGraph"
          class="px-2 border border-gray-400"
      >
        Show {{ nextView }}
      </button>

      <select
          v-model="selectedPeriod"
          class="ml-2 border border-gray-400"
      >
        <option
            v-for="option in periodOptions"
            :key="option.id"
            :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>
