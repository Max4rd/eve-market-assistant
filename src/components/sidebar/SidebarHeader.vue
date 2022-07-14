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
          class="w-full"
      >
    </div>

    <div>
      <button
          @click="$emit('search')"
          :disabled="modelValue === ''"
      >
        Search
      </button>
    </div>
  </div>
</template>
