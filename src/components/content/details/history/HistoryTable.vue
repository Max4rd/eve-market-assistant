<script>
import HistoryItem from '@/components/content/details/history/HistoryItem';

export default {
  name: 'HistoryTable',

  components: { HistoryItem },

  props: {
    statistics: Array,
    period: Number,
  },

  data() {
    return {
      ordered: [],
      sortField: 'date',
      ascending: false,
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

  watch: {
    statistics() {
      this.sortHistory();
    },
    period() {
      this.sortHistory();
    },
    sortField() {
      this.sortHistory();
    },
    ascending() {
      this.sortHistory();
    },
  },

  methods: {
    sortHistory() {
      const subData = this.statistics.slice(-this.period);
      if (this.sortField === 'date') {
        this.ordered = this.dateSort(subData);
      } else {
        this.ordered = this.numericSort(subData);
      }
    },

    numericSort(data) {
      return data.sort((a, b) => {
        if (this.ascending) {
          return a[this.sortField] - b[this.sortField];
        } else {
          return b[this.sortField] - a[this.sortField];
        }
      });
    },

    dateSort(data) {
      return data.sort((a, b) => {
        const dateA = new Date(a[this.sortField]);
        const dateB = new Date(b[this.sortField]);
        if (this.ascending) {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });
    },

    handleNewSort(field) {
      if (this.sortField === field) {
        this.ascending = !this.ascending;
      } else {
        this.sortField = field;
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
              @click="handleNewSort(head.field)"
              class="px-2 border border-b-gray-400"
          >
            <span>
              {{ head.name }}
            </span>
            <span>

            </span>
          </th>
        </tr>
      </thead>

      <tbody>
        <HistoryItem
            v-for="item in ordered"
            :key="item.id"
            :item="item"
            :head="heads"
        />
      </tbody>
    </table>
  </div>
</template>
