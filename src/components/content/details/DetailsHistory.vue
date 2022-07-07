<script>
import HistoryTable from '@/components/content/details/history/HistoryTable';

export default {
  name: 'DetailsHistory',

  components: { HistoryTable },

  props: {
    selectedRegion: Object,
    selectedItem: Object,
  },
};
</script>

<template>
  <div>
    <HistoryTable
        :region-id="selectedRegion?.regionID"
        :type-id="selectedItem?.typeID"
    />
  </div>
</template>
