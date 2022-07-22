<script>
import { Line } from 'vue-chartjs';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
  name: 'HistoryGraph',

  components: { Line },

  props: {
    statistics: Array,
    period: Number,
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
    period() {
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
            backgroundColor: ['rgb(255, 0, 0)'],
            borderColor: ['rgb(255, 0, 0)'],
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
