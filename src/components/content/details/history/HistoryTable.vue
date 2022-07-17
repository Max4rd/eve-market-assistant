<script>
import HistoryItem from '@/components/content/details/history/HistoryItem';

export default {
  name: 'HistoryTable',

  components: { HistoryItem },

  props: {
    statistics: Array,
  },

  data() {
    return {
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
