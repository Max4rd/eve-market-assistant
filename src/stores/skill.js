import { defineStore } from 'pinia';

const tagAccounting = 'skillStoreAccounting';
const tagBrokerRelation = 'skillStoreBrokerRelation';

export const useSkillStore = defineStore('skill', {
  state: () => {
    return {
      accounting: 0,
      brokerRelation: 0,
      // advancedBrokerRelation: 0,
    };
  },

  getters: {
    showAccounting() {
      if (this.accounting) {
        return this.accounting;
      } else if (localStorage.getItem(tagAccounting)) {
        this.accounting = localStorage.getItem(tagAccounting);
        return this.accounting;
      } else {
        this.storeAccounting(0);
        return this.accounting;
      }
    },
    showBrokerRelation() {
      if (this.brokerRelation) {
        return this.brokerRelation;
      } else if (localStorage.getItem(tagBrokerRelation)) {
        this.brokerRelation = localStorage.getItem(tagBrokerRelation);
        return this.brokerRelation;
      } else {
        this.storeBrokerRelation(0);
        return this.brokerRelation;
      }
    },
  },

  actions: {
    storeAccounting(newValue) {
      this.accounting = newValue;
      localStorage.setItem(tagAccounting, newValue);
    },

    storeBrokerRelation(newValue) {
      this.brokerRelation = newValue;
      localStorage.setItem(tagBrokerRelation, newValue);
    },
  },
});
