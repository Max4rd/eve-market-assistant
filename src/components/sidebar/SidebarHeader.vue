<script>
import { BackspaceIcon } from '@heroicons/vue/outline';

export default {
  name: 'SidebarHeader',

  components: { BackspaceIcon },

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
          class="w-full"
      >
    </div>

    <div v-show="modelValue.length > 0">
      <button @click="$emit('update:modelValue', '')">
        <BackspaceIcon class="h-6 w-6 text-black"/>
      </button>
    </div>

    <div>
      <button @click="$emit('search')">
        Search
      </button>
    </div>
  </div>
</template>
