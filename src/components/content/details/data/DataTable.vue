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
    defaultSortField: Array,
    defaultSortAscending: Boolean,
  },

  data() {
    return {
      orders: [],
      ordered: [],
      sortFields: [],
      ascending: null,
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
    sortField() {
      this.sortOrders();
    },
    ascending() {
      this.sortOrders();
    },
  },

  created() {
    this.sortFields = this.defaultSortField;
    this.ascending = this.defaultSortAscending;
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
      const field = this.sortFields[0];
      if (field === 'range') {
        this.ordered = this.rangeSort();
      } else if (field === 'issued') {
        this.ordered = this.expirySort();
      } else {
        this.ordered = this.numericSort();
      }
    },

    numericSort() {
      const field = this.sortFields[0];
      return [...this.orders].sort((a, b) => {
        if (this.ascending) {
          return a[field] - b[field];
        } else {
          return b[field] - a[field];
        }
      });
    },

    rangeSort() {
      const orderedRanges = [
        'station', 'solarsystem',
        '1', '2', '3', '4', '5',
        '10', '20', '30', '40',
        'region',
      ];
      const field = this.sortFields[0];
      return [...this.orders].sort((a, b) => {
        const rangeA = orderedRanges.indexOf(a[field]);
        const rangeB = orderedRanges.indexOf(b[field]);
        if (this.ascending) {
          return rangeA - rangeB;
        } else {
          return rangeB - rangeA;
        }
      });
    },

    expirySort() {},

    handleNewSort(fields) {
      if (this.sortFields === fields) {
        this.ascending = !this.ascending;
      } else {
        this.sortFields = fields;
      }
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
              @click="handleNewSort(head.fields)"
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
