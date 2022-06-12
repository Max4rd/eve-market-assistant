<script>
import MarketBrowserItem from '@/components/sidebar/browser/MarketBrowserItem';

export default {
  name: 'MarketBrowser',

  components: { MarketBrowserItem },

  data() {
    return {
      marketGroups: [],
    };
  },
};
</script>

<template>
  <div>
    Market Browser
  </div>
  <ul>
    <MarketBrowserItem
      v-for="item in marketGroups"
      :key="item.id"
      :market-group-id="item"
    />
  </ul>
</template>
