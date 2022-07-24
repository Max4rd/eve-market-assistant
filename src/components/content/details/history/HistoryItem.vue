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
        const formattedNumber = new Intl.NumberFormat('en-US').format(value);
        return formattedNumber + ' ISK';
      } else if (['order_count', 'volume'].includes(field)) {
        return new Intl.NumberFormat('en-US').format(value);
      } else {
        const date = new Date(value);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        return `${year}.${month + 1}.${day}`;
      }
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
