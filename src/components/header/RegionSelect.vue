<script>
import { mapStores } from 'pinia';
import { useSdeStore } from '@/stores/sde';
import { useRegionStore } from '@/stores/region';

export default {
  name: 'RegionSelect',

  data() {
    return {
      regions: [],
      selected: '',
    }
  },

  computed: {
    ...mapStores(useSdeStore, useRegionStore),
  },

  watch: {
    selected(newSelected) {
      const regionItem = this.regions
        .find(region => region.regionName === newSelected);
      if (regionItem) {
        this.regionStore.store(regionItem);
      }
    },
  },

  created() {
    this.fetchRegions();
    this.selected = this.regionStore.show.regionName;
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
  <div class="flex flex-row">
    <div>
      Selected Region:
    </div>

    <select
        v-model="selected"
        class="ml-2 border border-gray-400"
    >
      <option
          v-for="region in regions"
          :key="region.id"
      >
        {{ region.regionName }}
      </option>
    </select>
  </div>
</template>
