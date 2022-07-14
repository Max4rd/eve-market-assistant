<script>
import MarketBrowserType from '@/components/sidebar/browser/MarketBrowserType';

export default {
  name: 'MarketSearch',

  components: { MarketBrowserType },

  props: {
    searchResult: Array,
  },
};
</script>

<template>
  <ul>
    <MarketBrowserType
        v-for="item in searchResult"
        :key="item.id"
        :marketType="item"
        :depth="0"
    />
  </ul>
</template>
