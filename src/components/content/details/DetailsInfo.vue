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
  <div>
    <div>
      <img
          v-show="imageSource !== ''"
          :src="imageSource"
      >
    </div>

    <div>
      {{ itemName }}
    </div>
  </div>
</template>
