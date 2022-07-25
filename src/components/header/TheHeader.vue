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
  <div class="flex flex-row items-center border-b-1 border-b-gray-400">
    <div class="ml-4 text-xl">
      EVE Market Assistant
    </div>

    <RegionSelect class="ml-8 p-2"/>

    <SkillSelect class="ml-8 p-2"/>
  </div>
</template>
