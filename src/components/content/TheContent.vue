<script>
import { mapStores } from 'pinia';
import { useRegionStore } from '@/stores/region';
import { useItemStore } from '@/stores/item';

export default {
  name: 'TheContent',

  computed: {
    ...mapStores(useRegionStore, useItemStore),
  },
};
</script>

<template>
  <div>
    <div>
      The Content
    </div>

    <div>
      {{ regionStore.selected }}
    </div>

    <div>
      {{ itemStore.selected }}
    </div>
  </div>
</template>
