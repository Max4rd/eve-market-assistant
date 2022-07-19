<script>
import { Line } from 'vue-chartjs';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'HistoryGraph',

  components: { Line },

  props: {
    statistics: Array,
  },

  data() {
    return {
      chartData: {},
    };
  },

  computed: {
    dataLabels() {
      return this.statistics.slice(-10).map(stat => stat.date);
    },
    dataAverage() {
      return this.statistics.slice(-10).map(stat => stat.average);
    },
    dataHigh() {
      return this.statistics.slice(-10).map(stat => stat.highest);
    },
    dataLow() {
      return this.statistics.slice(-10).map(stat => stat.lowest);
    },
  },

  watch: {
    statistics() {
      this.updateChart();
    },
  },

  created() {
    this.updateChart();
  },

  methods: {
    updateChart() {
      this.chartData = {
        labels: this.dataLabels,
        datasets: [
          {
            label: 'Average',
            data: this.dataAverage,
          },
          {
            label: 'High',
            data: this.dataHigh,
          },
          {
            label: 'Low',
            data: this.dataLow,
          },
        ],
      };
    },
  },
};
</script>

<template>
  <div>
    <Line
        :chart-data="chartData"

    />
  </div>
</template>
