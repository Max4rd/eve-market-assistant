<script>
import { mapStores } from 'pinia';
import { useEsiStore } from '@/stores/esi';
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
    ...mapStores(useEsiStore),
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
      this.esiStore.searchItem(this.searchString)
        .then(response => response.json())
        .then(data => {
          console.log(data);
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

    <MarketBrowser/>

    <MarketSearch/>
  </nav>
</template>
