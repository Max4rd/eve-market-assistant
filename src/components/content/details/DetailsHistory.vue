<script>
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
    };
  },

  computed: {
    toggle() {
      return this.showGraph
        ? 'Table'
        : 'Graph';
    },
  },
};
</script>

<template>
  <div>
    <HistoryGraph
        v-show="showGraph"
    />

    <HistoryTable
        v-show="!showGraph"
        :region-id="selectedRegion?.regionID"
        :type-id="selectedItem?.typeID"
    />

    <button @click="showGraph = !showGraph">
      Show {{ toggle }}
    </button>
  </div>
</template>
