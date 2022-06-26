<script>
import { mapStores } from 'pinia/dist/pinia';
import { useEmaSdeStore } from '@/stores/ema-sde';
import MarketBrowserType from '@/components/sidebar/browser/MarketBrowserType';

export default {
  name: 'MarketBrowserGroup',
  components: { MarketBrowserType },
  props: {
    marketGroup: {
      type: Object,
    },
    depth: {
      type: Number,
    },
  },

  data() {
    return {
      isShown: false,
      types: [],
      typesFetched: false,
    }
  },

  computed: {
    ...mapStores(useEmaSdeStore),

    margin() {
      return `ml-${this.depth * 4}`;
    },
  },

  methods: {
    toggle() {
      this.isShown = !this.isShown;
      if (this.marketGroup.hasTypes && !this.typesFetched) {
        this.typesFetched = true;
        this.fetchTypes();
      }
    },

    async fetchTypes() {
      this.emaSdeStore.getMarketTypes(this.marketGroup.marketGroupID)
        .then(response => response.json())
        .then(data => {
          this.types = data.data;
        });
    },
  },
};
</script>

<template>
  <li :class="[margin]">
    <div
        class="flex flex-row items-center"
        @click="toggle()">
      <div class="w-6">
        <img src="@/assets/smallfolder.png"/>
      </div>
      <div>
        {{ marketGroup.marketGroupName }}
      </div>
    </div>

    <ul
        v-show="isShown"
        class="divide-y divide-gray-400"
        :class="[margin]">
      <MarketBrowserGroup
          v-for="item in marketGroup.children"
          :key="item.id"
          :market-group="item"
          :depth="depth + 1"/>

      <MarketBrowserType
          v-for="item in types"
          :key="item.id"
          :market-type="item"/>
    </ul>
  </li>
</template>
