<script>
import { mapStores } from 'pinia';
import { useEmaSdeStore } from '@/stores/ema-sde';
import MarketBrowserItem from '@/components/sidebar/browser/MarketBrowserItem';

export default {
  name: 'MarketBrowser',

  components: { MarketBrowserItem },

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
    <MarketBrowserItem
      v-for="item in marketTree"
      :key="item.id"
      :market-item="item"
      :depth="0"/>
  </ul>
</template>
