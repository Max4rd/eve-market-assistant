<script>
export default {
  name: 'DataItem',

  props: {
    item: Object,
  },
};
</script>

<template>
  <div>
    Data Item: {{ item }}
  </div>
</template>
