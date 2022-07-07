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
          name: 'Expires in',
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
          name: 'Expires in',
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
    />

    <div>
      Sellers
    </div>

    <DataTable
        :region-id="selectedRegion?.regionID"
        :type-id="selectedItem?.typeID"
        order-type="sell"
        :table-head="sellerTableHead"
    />
  </div>
</template>
