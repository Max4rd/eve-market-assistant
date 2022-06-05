<template>
  <div>
    Authentication processing...
  </div>
</template>

<script>
import { useAuthenticationStore } from '@/stores/authentication'

export default {
  name: "ViewEveAuth",

  created() {
    const authenticationStore = useAuthenticationStore()
    if (this.$route.query.state === authenticationStore.state) {
      authenticationStore.sendToken(this.$route.query.code)
    } else {
      console.error('Invalid state returned from authentication server')
    }
  },
}
</script>
