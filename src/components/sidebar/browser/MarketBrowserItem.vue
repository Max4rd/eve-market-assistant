<script>
export default {
  name: 'MarketBrowserItem',

  props: {
    marketItem: {
      type: Object,
    },
    depth: {
      type: Number,
    }
  },

  data() {
    return {
      isShown: false,
    }
  },

  computed: {
  },

  methods: {
    toggle() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<template>
  <li>
    <div
        class="flex flex-row items-center"
        :class="`pl-${depth * 4}`"
        @click="toggle()">
      <div class="w-6">
        <img src="@/assets/smallfolder.png"/>
      </div>
      <div>
        {{ marketItem.marketGroupName }}
      </div>
    </div>

    <ul
        v-show="isShown"
        class="divide-y divide-gray-400">
      <MarketBrowserItem
          v-for="item in marketItem.children"
          :key="item.id"
          :market-item="item"
          :depth="depth + 1"/>
    </ul>
  </li>
</template>
