<script>
export default {
  name: "TheSidebar",
  data() {
    return {
      marketGroups: [
        'Blueprints',
        'Ships',
        'Equipments',
        'Ammo',
        'Trade Goods',
        'Implants',
        'Skills',
        'Drones',
      ],
    }
  },
}
</script>

<template>
  <div class="overflow-auto">
    <div
      v-for="group in marketGroups"
      :key="group.id"
    >
      {{ group }}
    </div>
  </div>
</template>
