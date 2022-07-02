<script>
import RegionSelect from '@/components/header/RegionSelect';

export default {
  name: 'TheHeader',

  components: { RegionSelect },
};
</script>

<template>
  <div class="flex flex-row-reverse items-center bg-gray-700 border-b-1 border-b-gray-400">
    <!--
    <button
        @click="login"
        class="m-2">
      <img
          src="@/assets/eve-sso-login-black-large.png"
          alt="Eve SSO Login">
    </button>
    -->

  <RegionSelect class="m-2"/>
  </div>
</template>
