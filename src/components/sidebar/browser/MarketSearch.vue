<script>
export default {
  name: 'MarketSearch',

  props: {
    searchResult: Array,
  },
};
</script>

<template>
  <ul>
    <li v-for="item in searchResult" :key="item.id">
      {{ item }}
    </li>
  </ul>
</template>
