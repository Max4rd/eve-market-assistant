<script>
import { mapStores } from 'pinia';
import { useSkillStore } from '@/stores/skill';

export default {
  name: 'SkillSelect',

  data() {
    return {
      accounting: 0,
      brokerRelation: 0,
    };
  },

  computed: {
    ...mapStores(useSkillStore),
  },

  watch: {
    accounting() {
      this.skillStore.storeAccounting(this.accounting);
    },
    brokerRelation() {
      this.skillStore.storeBrokerRelation(this.brokerRelation);
    },
  },

  created() {
    this.accounting = this.skillStore.showAccounting;
    this.brokerRelation = this.skillStore.showBrokerRelation;
  },

  methods: {
    resetValues() {
      this.accounting = 0;
      this.brokerRelation = 0;
    },
  },
};
</script>

<template>
  <div class="flex flex-row">
    <div>
      Accounting level:
    </div>
    <input
        v-model="accounting"
        type="number"
        min="0"
        max="5"
        class="ml-2 pl-2 border border-gray-400"
    >

    <div class="ml-4">
      Broker Relation level:
    </div>
    <input
        v-model="brokerRelation"
        type="number"
        min="0"
        max="5"
        class="ml-2 pl-2 border border-gray-400"
    >

    <button
        @click="resetValues"
        class="ml-4 px-2 border border-gray-400"
    >
      Reset skills
    </button>
  </div>
</template>
