<script>
import { mapState } from 'pinia';
import { useRegionStore } from '@/stores/region';
import { useItemStore } from '@/stores/item';
import DataTable from '@/components/content/details/data/DataTable';

export default {
  name: 'DetailsData',

  components: { DataTable },

  computed: {
    ...mapState(useRegionStore, {
      selectedRegion: 'selected',
    }),
    ...mapState(useItemStore, {
      selectedItem: 'selected',
    }),
  },
};
</script>

<template>
  <div>
    Sellers
  </div>

  <DataTable
      :region-id="selectedRegion?.regionID"
      :type-id="selectedItem?.typeID"
      order-type="sell"/>

  <div>
    Buyers
  </div>

  <DataTable
      :region-id="selectedRegion?.regionID"
      :type-id="selectedItem?.typeID"
      order-type="buy"/>
</template>
