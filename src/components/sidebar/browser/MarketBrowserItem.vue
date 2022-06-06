<script>
export default {
  name: 'MarketBrowserItem',

  props: {
    marketGroupId: Number,
  },

  computed: {
    /*
    imageSource() {
      return ''
    }
    */
  },
}
</script>

<template>
  <div class="flex flex-row items-center">
    <div class="w-6">
      <img src="@/assets/smallfolder.png"/>
    </div>
    <div>
      {{ marketGroupId }}
    </div>
  </div>
</template>
