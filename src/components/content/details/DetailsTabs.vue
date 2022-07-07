<script>
export default {
  name: 'DetailsTabs',

  emits: ['changeTab'],

  methods: {
    changeTab(newTab) {
      this.$emit('changeTab', newTab);
    },
  },
};
</script>

<template>
  <div>
    <button @click="changeTab('data')">
      Market Data
    </button>

    <button @click="changeTab('history')">
      Price History
    </button>

    <button @click="changeTab('prediction')">
      Prediction
    </button>
  </div>
</template>
