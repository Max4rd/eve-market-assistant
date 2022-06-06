<script>
import MarketBrowserItem from '@/components/sidebar/browser/MarketBrowserItem'

export default {
  name: 'MarketBrowser',

  components: { MarketBrowserItem },

  data() {
    return {
      marketGroups: [
        2,
        4,
        9,
        11,
        19,
        24,
        150,
        157,
        475,
        477,
        955,
        1320,
        1396,
        1659,
        1922,
        1954,
        2202,
        2203,
      ],
    }
  },
}
</script>

<template>
  <div>
    Market Browser
  </div>
  <ul>
    <MarketBrowserItem
      v-for="item in marketGroups"
      :key="item.id"
      :market-group-id="item"
    />
  </ul>
</template>
