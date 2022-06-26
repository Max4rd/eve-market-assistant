<script>
export default {
  name: 'MarketBrowserItem',

  props: {
    marketItem: {
      type: Object,
    },
  },

  computed: {
  },
};
</script>

<template>
  <li class="flex flex-row items-center">
    <div class="w-6">
      <img src="@/assets/smallfolder.png"/>
    </div>
    <div>
      {{ marketItem.marketGroupName }}
    </div>
  </li>
</template>
