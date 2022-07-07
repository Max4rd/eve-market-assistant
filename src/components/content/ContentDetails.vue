<script>
import DetailsInfo from '@/components/content/details/DetailsInfo';
import DetailsTabs from '@/components/content/details/DetailsTabs';
import DetailsData from '@/components/content/details/DetailsData';
import DetailsHistory from '@/components/content/details/DetailsHistory';

export default {
  name: 'ContentDetails',

  components: { DetailsHistory, DetailsData, DetailsTabs, DetailsInfo },

  data() {
    return {
      selectedTab: 'data',
    };
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
    <DetailsInfo/>

    <DetailsTabs @changeTab="handleChangeTab"/>

    <DetailsData v-show="selectedTab === 'data'"/>

    <DetailsHistory v-show="selectedTab === 'history'"/>

    <!-- TODO: add DetailsPrediction component -->
  </div>
</template>
