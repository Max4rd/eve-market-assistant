<script>
import { mapStores } from 'pinia';
import { useEsiStore } from '@/stores/esi';
import HistoryItem from '@/components/content/details/history/HistoryItem';

export default {
  name: 'HistoryTable',
  components: { HistoryItem },
  props: {
    regionId: Number,
    typeId: Number,
  },

  data() {
    return {
      statistics: [],
      heads: [
        {
          name: 'Date',
          field: 'date',
        },
        {
          name: 'Orders',
          field: 'order_count',
        },
        {
          name: 'Quantity',
          field: 'volume',
        },
        {
          name: 'Low',
          field: 'lowest',
        },
        {
          name: 'High',
          field: 'highest',
        },
        {
          name: 'Average',
          field: 'average',
        },
      ],
    };
  },

  computed: {
    ...mapStores(useEsiStore),
  },

  watch: {
    regionId() {
      this.fetchStatistics();
    },
    typeId() {
      this.fetchStatistics();
    },
  },

  created() {
    this.fetchStatistics();
  },

  methods: {
    fetchStatistics() {
      if (this.regionId && this.typeId) {
        this.esiStore.fetchMarketHistory(this.regionId, this.typeId)
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
    <table class="border-collapse">
      <thead>
        <tr>
          <th
              v-for="head in heads"
              :key="head.id"
              class="px-2 border border-b-gray-400"
          >
            {{ head.name }}
          </th>
        </tr>
      </thead>

      <tbody>
        <HistoryItem
            v-for="item in statistics"
            :key="item.id"
            :item="item"
            :head="heads"
        />
      </tbody>
    </table>
  </div>
</template>
