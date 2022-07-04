<script>
import DetailsInfo from '@/components/content/details/DetailsInfo';
import DetailsTabs from '@/components/content/details/DetailsTabs';
import DetailsData from '@/components/content/details/DetailsData';

export default {
  name: 'ContentDetails',

  components: { DetailsData, DetailsTabs, DetailsInfo },
};
</script>

<template>
  <div>
    <div>
      Content Details
    </div>

    <DetailsInfo/>
    <DetailsTabs/>
    <DetailsData/>
  </div>
</template>
