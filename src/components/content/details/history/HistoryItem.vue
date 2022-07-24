<script>
export default {
  name: 'HistoryItem',

  props: {
    head: Object,
    item: Object,
  },

  methods: {
    formatItemData(name, field) {
      const value = this.item[field];
      if (['lowest', 'highest', 'average'].includes(field)) {
        return this.formatPrice(value);
      } else if (['order_count', 'volume'].includes(field)) {
        return this.formatNumber(value);
      } else {
        return this.formatDate(value);
      }
    },

    formatNumber(value) {
      return new Intl.NumberFormat('en-US').format(value);
    },

    formatPrice(value) {
      const formattedNumber = new Intl.NumberFormat('en-US').format(value);
      return formattedNumber + ' ISK';
    },

    formatDate(value) {
      const date = new Date(value);
      return date.toLocaleDateString();
    },
  },
};
</script>

<template>
  <tr>
    <td
        v-for="column in head"
        :key="column.id"
        class="px-2 border border-b-gray-400"
    >
      {{ formatItemData(column.name, column.field) }}
    </td>
  </tr>
</template>
