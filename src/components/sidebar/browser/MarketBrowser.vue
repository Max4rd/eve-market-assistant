<script>
import { mapStores } from 'pinia';
import { useEmaSdeStore } from '@/stores/ema-sde';
import MarketBrowserItem from '@/components/sidebar/browser/MarketBrowserItem';

export default {
  name: 'MarketBrowser',

  components: { MarketBrowserItem },

  data() {
    return {
      marketGroups: [],
    };
  },

  computed: {
    ...mapStores(useEmaSdeStore),
  },

  created() {
    this.marketGroups = this.emaSdeStore.getMarketTree();
  },

  methods: {
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
      :market-item="item"
    />
  </ul>
</template>
