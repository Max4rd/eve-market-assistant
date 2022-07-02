<script>
import { mapStores } from 'pinia';
import { useSdeStore } from '@/stores/sde';

export default {
  name: 'TheHeader',

  data() {
    return {
      regions: [],
    }
  },

  computed: {
    ...mapStores(useSdeStore),
  },

  created() {
    this.fetchRegions();
  },

  methods: {
    fetchRegions() {
      this.sdeStore.fetchRegion()
        .then(response => response.json())
        .then(data => {
          this.regions = data.data;
        });
    },
  },
};
</script>

<template>
  <div class="flex flex-row-reverse items-center bg-gray-700 border-b-1 border-b-gray-400">
    <button
        @click="login"
        class="m-2">
      <img
          src="@/assets/eve-sso-login-black-large.png"
          alt="Eve SSO Login">
    </button>

    <div>
      <select>
        <option v-for="region in regions" :key="region.id">
          {{ region.regionName }}
        </option>
      </select>
    </div>
  </div>
</template>
