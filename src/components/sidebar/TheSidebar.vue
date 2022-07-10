<script>
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
}
</script>

<template>
  <nav>
    <SidebarHeader/>

    <MarketBrowser/>

    <MarketSearch/>
  </nav>
</template>
