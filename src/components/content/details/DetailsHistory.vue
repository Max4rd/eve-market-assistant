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
    />

    <HistoryTable
        v-show="!showGraph"
        :statistics="statistics"
    />

    <button @click="showGraph = !showGraph">
      Show {{ nextView }}
    </button>
  </div>
</template>
