<script>
import { mapStores, mapState } from 'pinia';
import { useSdeStore } from '@/stores/sde';
import { useItemStore } from '@/stores/item';
import GroupsItem from '@/components/content/groups/GroupsItem';

export default {
  name: 'ContentGroups',

  components: { GroupsItem },

  data() {
    return {
      groupItems: [],
    };
  },

  computed: {
    ...mapStores(useSdeStore),

    ...mapState(useItemStore, {
      selectedItem: 'selected',
    }),
  },

  watch: {
    selectedItem() {
      this.fetchGroupItems();
    },
  },

  methods: {
    fetchGroupItems() {
      if (this.selectedItem) {
        this.sdeStore.fetchMarketTypes(this.selectedItem.marketGroupID)
          .then(response => response.json())
          .then(data => {
            this.groupItems = data.data;
          });
      }
    },
  },
};
</script>

<template>
  <div>
    <div v-if="selectedItem == null">
      No item selected
    </div>

    <ul v-else class="divide-y divide-gray-400">
      <GroupsItem
          v-for="item in groupItems"
          :key="item.id"
          :item="item"
      />
    </ul>
  </div>
</template>
