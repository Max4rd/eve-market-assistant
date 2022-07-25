<script>
import { mapStores } from 'pinia';
import { useImageStore } from '@/stores/image';

export default {
  name: 'DetailsInfo',

  props: {
    selectedItem: Object,
  },

  data() {
    return {
      imageSource: '',
    };
  },

  computed: {
    ...mapStores(useImageStore),

    itemName() {
      return this.selectedItem
        ? this.selectedItem.typeName
        : 'No item selected';
    },
  },

  watch: {
    selectedItem() {
      this.imageSource = this.imageStore.buildImageSourceUrl(
        'types',
        this.selectedItem.typeID,
        'icon'
      );
    },
  },
};
</script>

<template>
  <div class="flex flex-row mx-2">
    <div>
      <img
          v-show="imageSource !== ''"
          :src="imageSource"
      >
    </div>

    <div class="ml-2">
      <div class="text-lg">
        {{ itemName }}
      </div>
    </div>
  </div>
</template>
