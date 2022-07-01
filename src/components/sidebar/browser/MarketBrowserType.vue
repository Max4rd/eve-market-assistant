<script>
import { mapStores } from 'pinia/dist/pinia';
import { useImageStore } from '@/stores/image';

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
    ...mapStores(useImageStore),

    margin() {
      return `ml-${this.depth * 4}`;
    },
  },

  created() {
    this.fetchImage();
  },

  methods: {
    fetchImage() {
      this.imageStore.fetchImage('types', this.marketType.typeID, 'icon', 32)
        .then(response => console.log(response));
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
