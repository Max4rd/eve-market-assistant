<script>
import ContentHeader from '@/components/content/ContentHeader';
import ContentDetails from '@/components/content/ContentDetails';
import ContentGroups from '@/components/content/ContentGroups';

export default {
  name: 'TheContent',

  components: {
    ContentGroups,
    ContentHeader,
    ContentDetails,
  },

  data() {
    return {
      selectedTab: 'details',
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
    <ContentHeader
        :selected="selectedTab"
        @changeTab="handleChangeTab"
    />

    <ContentDetails
        v-show="selectedTab === 'details'"
    />

    <ContentGroups
        v-show="selectedTab === 'groups'"
    />
  </div>
</template>
