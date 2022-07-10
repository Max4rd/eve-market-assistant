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

    itemDescription() {
      return this.selectedItem?.description;
    }
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
  <div class="flex flex-row">
    <div>
      <img
          v-show="imageSource !== ''"
          :src="imageSource"
      >
    </div>

    <div>
      <div>
        {{ itemName }}
      </div>

      <div>
        {{ itemDescription }}
      </div>
    </div>
  </div>
</template>
