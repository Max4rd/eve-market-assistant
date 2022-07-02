<script>
import { mapStores } from 'pinia';
import { useRegionStore } from '@/stores/region';

export default {
  name: 'TheContent',

  computed: {
    ...mapStores(useRegionStore),
  },
};
</script>

<template>
  <div>
    The Content
  </div>

  <div>
    {{ regionStore.selected }}
  </div>
</template>
