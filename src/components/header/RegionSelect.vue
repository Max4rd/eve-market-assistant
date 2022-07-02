<script>
import { mapStores } from 'pinia';
import { useSdeStore } from '@/stores/sde';
import { useRegionStore } from '@/stores/region';

export default {
  name: 'RegionSelect',

  data() {
    return {
      regions: [],
    }
  },

  computed: {
    ...mapStores(useSdeStore, useRegionStore),
  },

  created() {
    this.fetchRegions();
  },

  methods: {
    fetchRegions() {
      this.sdeStore.fetchRegion()
        .then(response => response.json())
        .then(data => {
          this.regions = data.data;
        });
    },
  },
};
</script>

<template>
  <div>
    <select v-model="regionStore.selected">
      <option v-for="region in regions" :key="region.id">
        {{ region.regionName }}
      </option>
    </select>
  </div>
</template>
