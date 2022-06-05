<template>
  <div class="flex flex-row-reverse bg-gray-700 border-b-2 border-b-gray-400">
    <button
        class="m-2"
        @click="login">
      <img
          src="../assets/eve-sso-login-black-large.png"
          alt="Eve SSO Login">
    </button>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useAuthenticationStore } from '@/stores/authentication'

export default {
  name: 'TheHeader',
  methods: {
    ...mapActions(useAuthenticationStore, ['login']),
  },
}
</script>
