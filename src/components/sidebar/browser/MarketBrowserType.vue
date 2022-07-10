<script>
import { mapStores } from 'pinia/dist/pinia';
import { useImageStore } from '@/stores/image';
import { useItemStore } from '@/stores/item';

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
    ...mapStores(useImageStore, useItemStore),

    margin() {
      return `ml-${this.depth * 4}`;
    },
  },

  created() {
    this.getImageSource();
  },

  methods: {
    getImageSource() {
      this.image = this.imageStore.buildImageSourceUrl(
        'types',
        this.marketType.typeID,
        'icon',
        32
      );
    },

    selectItem() {
      this.itemStore.selected = this.marketType;
    }
  },
};
</script>

<template>
  <li :class="margin" @click="selectItem">
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
