<script>
export default {
  name: 'SidebarHeader',

  props: {
    modelValue: String,
  },

  emits: [
    'update:modelValue',
    'search',
  ],
};
</script>

<template>
  <div class="flex flex-row">
    <div class="w-full">
      <input
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          type="search"
          class="w-full ml-2 border border-gray-400"
      >
    </div>

    <div>
      <button
          @click="$emit('search')"
          :disabled="modelValue === ''"
          class="ml-4 px-2 border border-gray-400"
      >
        Search
      </button>
    </div>
  </div>
</template>
