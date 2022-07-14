<script>
export default {
  name: 'ContentHeader',

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
        @click="changeTab('details')"
        class="m-2 p-2 border border-gray-400"
        :class="selected === 'details' ? 'border-4' : ''"
    >
      Details
    </button>

    <button
        @click="changeTab('groups')"
        class="m-2 p-2 border border-gray-400"
        :class="selected === 'groups' ? 'border-4' : ''"
    >
      Groups
    </button>
  </div>
</template>
