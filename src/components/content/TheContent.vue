<script>
import ContentHeader from '@/components/content/ContentHeader';
import ContentDetails from '@/components/content/ContentDetails';

export default {
  name: 'TheContent',

  components: { ContentDetails, ContentHeader },
};
</script>

<template>
  <div>
    <ContentHeader/>
    <ContentDetails/>
  </div>
</template>
