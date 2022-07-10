<script>
export default {
  name: 'DetailsTabs',

  props: {
    selected: String,
  },

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
    <button
        @click="changeTab('data')"
        class="m-2 p-2 border border-gray-400"
        :class="selected === 'data' ? 'border-4' : ''"
    >
      Market Data
    </button>

    <button
        @click="changeTab('history')"
        class="m-2 p-2 border border-gray-400"
        :class="selected === 'history' ? 'border-4' : ''"
    >
      Price History
    </button>

    <button
        @click="changeTab('prediction')"
        class="m-2 p-2 border border-gray-400"
        :class="selected === 'prediction' ? 'border-4' : ''"
    >
      Prediction
    </button>
  </div>
</template>
