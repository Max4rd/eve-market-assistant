<script>
export default {
  name: 'MarketBrowserType',

  props: {
    marketType: {
      type: Object,
    },
    depth: {
      type: Number,
    },
  },

  data() {
    return {
      image: null,
    }
  },

  computed: {
    margin() {
      return `ml-${this.depth * 4}`;
    },

    imageSource() {
      return this.image ?? '@/assets/7_64_15.png';
    }
  },
};
</script>

<template>
  <li :class="margin">
    <div class="flex flex-row items-center">
      <div class="w-6">
        <img v-if="image" :src="image">
        <img v-else src="@/assets/7_64_15.png"/>
      </div>
      <div>
        {{ marketType.typeName }}
      </div>
    </div>
  </li>
</template>
