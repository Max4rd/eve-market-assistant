<script>
import { mapStores } from 'pinia';
import { useSdeStore } from '@/stores/sde';
import SidebarHeader from '@/components/sidebar/SidebarHeader'
import MarketBrowser from '@/components/sidebar/browser/MarketBrowser'
import MarketSearch from '@/components/sidebar/browser/MarketSearch';

export default {
  name: 'TheSidebar',

  components: {
    SidebarHeader,
    MarketBrowser,
    MarketSearch,
  },

  data() {
    return {
      searchString: '',
      searchResult: [],
    };
  },

  computed: {
    ...mapStores(useSdeStore),
  },

  watch: {
    searchString() {
      if (this.searchString === '') {
        this.searchResult = [];
      }
    }
  },

  methods: {
    handleSearch() {
      this.sdeStore.fetchSearchItem(this.searchString)
        .then(response => response.json())
        .then(data => {
          this.searchResult = data.data;
        });
    }
  },
}
</script>

<template>
  <nav>
    <SidebarHeader
        :modelValue="searchString"
        @update:modelValue="newValue => searchString = newValue"
        @search="handleSearch"
    />

    <MarketBrowser v-show="searchString === ''"/>

    <MarketSearch
        v-show="searchString !== ''"
        :searchResult="searchResult"
    />
  </nav>
</template>
