<script>
import DataTable from '@/components/content/details/data/DataTable';

export default {
  name: 'DetailsData',

  components: { DataTable },

  props: {
    selectedRegion: Object,
    selectedItem: Object,
  },

  data() {
    return {
      buyerTableHead: [
        {
          name: 'Quantity',
          fields: ['volume_remain'],
        },
        {
          name: 'Price',
          fields: ['price'],
        },
        {
          name: 'Location',
          fields: ['location_id', 'system_id'],
        },
        {
          name: 'Issued on',
          fields: ['issued', 'duration'],
        },
      ],
      sellerTableHead: [
        {
          name: 'Quantity',
          fields: ['volume_remain'],
        },
        {
          name: 'Price',
          fields: ['price'],
        },
        {
          name: 'Location',
          fields: ['location_id', 'system_id'],
        },
        {
          name: 'Range',
          fields: ['range'],
        },
        {
          name: 'Min volume',
          fields: ['min_volume'],
        },
        {
          name: 'Issued on',
          fields: ['issued', 'duration'],
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <div>
      Buyers
    </div>

    <DataTable
        :region-id="selectedRegion?.regionID"
        :type-id="selectedItem?.typeID"
        order-type="buy"
        :table-head="buyerTableHead"
        default-sort-field="price"
        :default-sort-ascending="false"
    />

    <div>
      Sellers
    </div>

    <DataTable
        :region-id="selectedRegion?.regionID"
        :type-id="selectedItem?.typeID"
        order-type="sell"
        :table-head="sellerTableHead"
        default-sort-field="price"
        :default-sort-ascending="true"
    />
  </div>
</template>
