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
    tableHead: Object,
    defaultSortField: String,
    defaultSortAscending: Boolean,
  },

  data() {
    return {
      orders: [],
      ordered: [],
      sortField: 'price',
      ascending: true,
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

  created() {
    this.fetchOrders();
  },

  methods: {
    fetchOrders() {
      if (this.regionId && this.typeId) {
        this.esiStore.fetchMarketOrders(this.regionId, this.typeId, this.orderType)
          .then(response => response.json())
          .then(data => {
            this.orders = data;
            this.sortOrders();
          });
      }
    },

    sortOrders() {
      this.ordered = [...this.orders].sort((a, b) => {
        if (this.ascending) {
          return a[this.sortField] - b[this.sortField];
        } else {
          return b[this.sortField] - a[this.sortField];
        }
      });
    },
  },
};
</script>

<template>
  <div>
    <table class="border-collapse">
      <thead>
        <tr>
          <th
              v-for="head in tableHead"
              :key="head.id"
              class="px-2 border border-b-gray-400"
          >
            {{ head.name }}
          </th>
        </tr>
      </thead>

      <tbody>
        <DataItem
            v-for="order in ordered"
            :key="order.id"
            :head="tableHead"
            :item="order"
        />
      </tbody>
    </table>
  </div>
</template>
