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
      chartOptions: {
        scales: {
          priceScale: {
            type: 'linear',
            position: 'left',
          },
          volumeScale: {
            type: 'linear',
            position: 'right',
            grace: '500%',
            grid: { display: false },
          },
        },
      },
    };
  },

  computed: {
    dataLabel() {
      return this.statistics
        .slice(-this.period)
        .map(stat => stat.date);
    },
    dataAverage() {
      return this.statistics
        .slice(-this.period)
        .map(stat => stat.average);
    },
    dataVolume() {
      return this.statistics
        .slice(-this.period)
        .map(stat => stat.volume);
    },
    dataDonchianTop() {
    },
    dataDonchianBot() {
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
        labels: this.dataLabel,
        datasets: [
          {
            label: 'Median',
            data: this.dataAverage,
            backgroundColor: 'rgba(255,191,0,1.0)',
            showLine: false,
            yAxisID: 'priceScale',
          },
          {
            type: 'bar',
            label: 'Volume',
            data: this.dataVolume,
            backgroundColor: 'rgb(0,191,255,1.0)',
            yAxisID: 'volumeScale',
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
        :chart-options="chartOptions"
        :chart-data="chartData"
    />
  </div>
</template>
