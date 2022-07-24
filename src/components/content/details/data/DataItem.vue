<script>
import { mapStores } from 'pinia';
import { useEsiStore } from '@/stores/esi';

export default {
  name: 'DataItem',

  props: {
    head: Object,
    item: Object,
  },

  data() {
    return {
      location: '',
    };
  },

  computed: {
    ...mapStores(useEsiStore),
  },

  methods: {
    formatItemData(name, fields) {
      if (name === 'Price') {
        return this.formatPrice(...fields);
      } else if (name === 'Location') {
        return this.formatLocation(...fields);
      } else if (name === 'Expires on') {
        return this.formatExpiry(...fields);
      } else if (name === 'Range') {
        return this.formatRange(...fields);
      } else {
        return this.formatNumber(...fields);
      }
    },

    formatNumber(field) {
      const value = this.item[field];
      return new Intl.NumberFormat('en-US').format(value);
    },

    formatPrice(field) {
      const value = this.item[field];
      const formattedNumber = new Intl.NumberFormat('en-US').format(value);
      return formattedNumber + ' ISK';
    },

    formatLocation(fieldLocation, fieldSystem) {
      const locationId = this.item[fieldLocation];
      if (locationId >= 60000000 && locationId < 61000000) {
        this.esiStore.fetchUniverseStation(locationId)
          .then(response => response.json())
          .then((data) => {
            this.location = data.name;
          });
      } else {
        const systemId = this.item[fieldSystem];
        this.esiStore.fetchUniverseSystem(systemId)
          .then(response => response.json())
          .then((data) => {
            this.location = `Private structure in ${data.name}`;
          });
      }
    },

    formatExpiry(fieldIssued, fieldDuration) {
      const issued = new Date(this.item[fieldIssued]);
      const expiry = this.addDays(issued, this.item[fieldDuration]);
      return expiry.toLocaleString();
    },

    formatRange(field) {
      const value = this.item[field];
      return value;
    },

    addDays(date, days) {
      const result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    },
  },
};
</script>

<template>
  <tr>
    <td
        v-for="column in head"
        :key="column.id"
        class="px-2 border border-b-gray-400"
    >
      {{ formatItemData(column.name, column.fields) ?? this.location }}
    </td>
  </tr>
</template>
