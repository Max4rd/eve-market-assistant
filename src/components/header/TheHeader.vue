<script>
import RegionSelect from '@/components/header/RegionSelect';
import SkillSelect from '@/components/header/SkillSelect';

export default {
  name: 'TheHeader',

  components: {
    RegionSelect,
    SkillSelect,
  },
};
</script>

<template>
  <div class="flex flex-row items-center bg-gray-700 border-b-1 border-b-gray-400">
    <RegionSelect class="m-2"/>

    <SkillSelect/>
  </div>
</template>
