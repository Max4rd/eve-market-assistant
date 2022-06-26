<script>
import { mapStores } from 'pinia';
import { useEmaSdeStore } from '@/stores/ema-sde';
import MarketBrowserGroup from '@/components/sidebar/browser/MarketBrowserGroup';

export default {
  name: 'MarketBrowser',

  components: { MarketBrowserGroup },

  data() {
    return {
      marketTree: [],
    };
  },

  computed: {
    ...mapStores(useEmaSdeStore),
  },

  created() {
    this.fetchTree();
  },

  methods: {
    async fetchTree() {
      this.emaSdeStore.getMarketTree()
        .then(response => response.json())
        .then(data => {
          this.marketTree = data.data;
        });
    },
  },
};
</script>

<template>
  <div>
    Market Browser
  </div>
  <ul class="bg-gray-700 text-white divide-y divide-gray-400">
    <MarketBrowserGroup
      v-for="item in marketTree"
      :key="item.id"
      :market-group="item"
      :depth="0"/>
  </ul>
</template>
