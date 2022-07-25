<script>
import { mapStores } from 'pinia';
import { useImageStore } from '@/stores/image';

export default {
  name: 'GroupsItem',

  props: {
    item: Object,
  },

  data() {
    return {
      imageSource: '',
    };
  },

  computed: {
    ...mapStores(useImageStore),
  },

  watch: {
    item() {
      this.buildImageSource();
    },
  },

  created() {
    this.buildImageSource();
  },

  methods: {
    buildImageSource() {
      this.imageSource = this.imageStore.buildImageSourceUrl(
        'types',
        this.item.typeID,
        'icon'
      );
    },
  },
};
</script>

<template>
  <li class="flex flex-row mx-2 py-2">
    <img
        :src="imageSource"
        class="w-16 h-16"
    >

    <div class="ml-2">
      <div class="text-lg">
        {{ item.typeName }}
      </div>

      <div class="whitespace-pre-line">
        {{ item.description }}
      </div>
    </div>
  </li>
</template>
