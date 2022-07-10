<script>
import { mapState } from 'pinia';
import { useRegionStore } from '@/stores/region';
import { useItemStore } from '@/stores/item';
import DetailsInfo from '@/components/content/details/DetailsInfo';
import DetailsTabs from '@/components/content/details/DetailsTabs';
import DetailsData from '@/components/content/details/DetailsData';
import DetailsHistory from '@/components/content/details/DetailsHistory';
import DetailsPrediction from '@/components/content/details/DetailsPrediction';

export default {
  name: 'ContentDetails',

  components: { DetailsPrediction, DetailsHistory, DetailsData, DetailsTabs, DetailsInfo },

  data() {
    return {
      selectedTab: 'data',
    };
  },

  computed: {
    ...mapState(useRegionStore, {
      selectedRegion: 'selected',
    }),
    ...mapState(useItemStore, {
      selectedItem: 'selected',
    }),
  },

  methods: {
    handleChangeTab(newTab) {
      this.selectedTab = newTab;
    },
  },
};
</script>

<template>
  <div>
    <DetailsInfo :selected-item="selectedItem"/>

    <DetailsTabs
        :selected="selectedTab"
        @changeTab="handleChangeTab"
    />

    <DetailsData
        v-show="selectedTab === 'data'"
        :selected-region="selectedRegion"
        :selected-item="selectedItem"
    />

    <DetailsHistory
        v-show="selectedTab === 'history'"
        :selected-region="selectedRegion"
        :selected-item="selectedItem"
    />

    <DetailsPrediction
        v-show="selectedTab === 'prediction'"
        :selected-region="selectedRegion"
        :selected-item="selectedItem"
    />
  </div>
</template>
