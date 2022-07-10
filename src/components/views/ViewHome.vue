<script>
import TheHeader from '@/components/header/TheHeader';
import TheSidebar from '@/components/sidebar/TheSidebar';
import TheContent from '@/components/content/TheContent';

export default {
  name: 'ViewHome',
  components: {
    TheHeader,
    TheSidebar,
    TheContent,
  },
};
</script>

<template>
  <div>
    <TheHeader/>
  </div>

  <div class="flex flex-row">
    <TheSidebar class="w-1/4"/>
    <TheContent class="w-3/4"/>
  </div>
</template>
