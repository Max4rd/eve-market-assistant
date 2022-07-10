<script>
import { BackspaceIcon } from '@heroicons/vue/outline';

export default {
  name: 'SidebarHeader',

  components: { BackspaceIcon },
};
</script>

<template>
  <div class="flex flex-row">
    <div class="w-full">
      <input class="w-full">
    </div>

    <div>
      <button>
        <BackspaceIcon class="h-6 w-6 text-black"/>
      </button>
    </div>

    <div>
      <button>Search</button>
    </div>
  </div>
</template>
