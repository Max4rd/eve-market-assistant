<script>
export default {
  name: 'MarketBrowserType',

  props: {
    marketType: {
      type: Object,
    },
    depth: {
      type: Number,
    },
  },
};
</script>

<template>
  <li>
    {{ marketType.typeName }}
  </li>
</template>
