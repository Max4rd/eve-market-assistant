<script>
export default {
  name: 'DataItem',

  props: {
    head: Object,
    item: Object,
  },

  methods: {
    formatItemData(name, fields) {
      const property = fields[0];
      return this.item[property];
    },
  },
};
</script>

<template>
  <tr>
    <td v-for="column in head" :key="column.id">
      {{ formatItemData(column.name, column.fields) }}
    </td>
  </tr>
</template>
