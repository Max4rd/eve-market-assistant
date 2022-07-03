<script>
import { mapStores } from 'pinia';
import { useEsiStore } from '@/stores/esi';
import DataItem from '@/components/content/details/data/DataItem';

export default {
  name: 'DataTable',

  components: { DataItem },

  props: {
    regionId: Number,
    typeId: Number,
    orderType: String,
  },

  data() {
    return {
      orders: [],
    };
  },

  computed: {
    ...mapStores(useEsiStore),
  },

  watch: {
    regionId() {
      this.fetchOrders();
    },
    typeId() {
      this.fetchOrders();
    },
  },

  methods: {
    fetchOrders() {
      if (this.regionId && this.typeId) {
        this.esiStore.fetchMarketOrders(this.regionId, this.typeId, this.orderType)
          .then(response => response.json())
          .then(data => {
            this.orders = data;
          });
      }
    },
  },
};
</script>

<template>
  <div>
    <div>
      Data Table
    </div>
    <DataItem
        v-for="order in orders"
        :key="order.id"
        :item="order"/>
  </div>
</template>
