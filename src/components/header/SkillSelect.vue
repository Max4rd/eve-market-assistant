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
    >

    <div>
      Broker Relation level:
    </div>
    <input
        v-model="brokerRelation"
        type="number"
        min="0"
        max="5"
    >

    <button @click="resetValues">
      Reset skills
    </button>
  </div>
</template>
