<script>
import DataTable from '@/components/content/details/data/DataTable';
export default {
  name: 'DetailsData',
  components: { DataTable },
};
</script>

<template>
  <div>
    Sellers
  </div>

  <DataTable/>

  <div>
    Buyers
  </div>

  <DataTable/>
</template>
