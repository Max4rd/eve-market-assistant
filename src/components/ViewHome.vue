<template>
  <div>
    <TheHeader/>
  </div>

  <div>
    <TheSidebar/>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheSidebar from "@/components/TheSidebar";

export default {
  name: 'ViewHome',
  components: { TheSidebar, TheHeader },
}
</script>
