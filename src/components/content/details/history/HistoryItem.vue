<script>
export default {
  name: 'HistoryItem',

  props: {
    head: Object,
    item: Object,
  },

  methods: {
    formatItemData(name, field) {
      return this.item[field];
    },
  },
};
</script>

<template>
  <tr>
    <td v-for="column in head" :key="column.id">
      {{ formatItemData(column.name, column.field) }}
    </td>
  </tr>
</template>
