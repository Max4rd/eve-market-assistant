<script>
import SidebarHeader from '@/components/sidebar/SidebarHeader'
import MarketBrowser from '@/components/sidebar/browser/MarketBrowser'

export default {
  name: 'TheSidebar',
  components: {
    MarketBrowser,
    SidebarHeader
  },
}
</script>

<template>
  <div>
    <SidebarHeader/>
    <MarketBrowser/>
  </div>
</template>
