<script>
import { mapStores } from 'pinia';
import { useRegionStore } from '@/stores/region';
import { useItemStore } from '@/stores/item';
import ContentHeader from '@/components/content/ContentHeader';
import ContentDetails from '@/components/content/ContentDetails';

export default {
  name: 'TheContent',

  components: { ContentDetails, ContentHeader },

  computed: {
    ...mapStores(useRegionStore, useItemStore),
  },
};
</script>

<template>
  <div>
    <ContentHeader/>
    <ContentDetails/>
  </div>
</template>
