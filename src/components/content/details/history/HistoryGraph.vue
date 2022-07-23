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
        interaction: {
          intersect: false,
          mode: 'index',
        },
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
    dataMovingAverage5() {
      return this.computeMovingAverage(5);
    },
    dataMovingAverage20() {
      return this.computeMovingAverage(20);
    },
    dataMedian() {
      return this.statistics
        .slice(-this.period)
        .map(stat => stat.average);
    },
    dataDonchianTop() {
      const highs = this.statistics
        .slice(-this.period)
        .map(stat => stat.highest);
      return highs.map((element, index, array) => {
        const target = index - 5;
        const start = Math.max(0, target);
        const subArray = array.slice(start, index);
        return Math.max(element, ...subArray);
      });
    },
    dataDonchianBot() {
      const lows = this.statistics
        .slice(-this.period)
        .map(stat => stat.lowest);
      return lows.map((element, index, array) => {
        const target = index - 5;
        const start = Math.max(0, target);
        const subArray = array.slice(start, index);
        return Math.min(element, ...subArray);
      });
    },
    dataMax() {
      return this.statistics
        .slice(-this.period)
        .map(stat => stat.highest);
    },
    dataMin() {
      return this.statistics
        .slice(-this.period)
        .map(stat => stat.lowest);
    },
    dataVolume() {
      return this.statistics
        .slice(-this.period)
        .map(stat => stat.volume);
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
    computeMovingAverage(duration) {
      const averages = this.statistics
        .slice(-this.period)
        .map(stat => stat.average);
      return averages.map((element, index, array) => {
        const target = index - duration;
        const start = Math.max(0, target);
        const subArray = array.slice(start, index + 1);
        const sum = subArray.reduce((previous, current) => previous + current, 0);
        return index !== 0
          ? sum / subArray.length
          : element;
      });
    },

    updateChart() {
      this.chartData = {
        labels: this.dataLabel,
        datasets: [
          {
            label: 'Median',
            data: this.dataMedian,
            backgroundColor: 'rgba(255, 191, 0)',
            showLine: false,
            yAxisID: 'priceScale',
          },
          {
            label: 'Moving Average 5d',
            data: this.dataMovingAverage5,
            borderColor: 'rgb(0,0,255)',
            backgroundColor: 'rgb(0,0,255)',
            yAxisID: 'priceScale',
          },
          {
            label: 'Moving Average 20d',
            data: this.dataMovingAverage20,
            borderColor: 'rgb(255,0,0)',
            backgroundColor: 'rgb(255,0,0)',
            yAxisID: 'priceScale',
          },
          {
            label: 'Donchian channel top',
            data: this.dataDonchianTop,
            backgroundColor: 'rgb(191, 191, 191, 0.2)',
            showLine: false,
            yAxisID: 'priceScale',
            fill: '+1',
          },
          {
            label: 'Donchian channel bot',
            data: this.dataDonchianBot,
            backgroundColor: 'rgb(191, 191, 191, 0.2)',
            showLine: false,
            yAxisID: 'priceScale',
          },
          {
            label: 'Max',
            data: this.dataMax,
            backgroundColor: 'rgb(127, 127, 127)',
            showLine: false,
            yAxisID: 'priceScale',
          },
          {
            label: 'Min',
            data: this.dataMin,
            backgroundColor: 'rgb(127, 127, 127)',
            showLine: false,
            yAxisID: 'priceScale',
          },
          {
            type: 'bar',
            label: 'Volume',
            data: this.dataVolume,
            backgroundColor: 'rgb(0,191,255)',
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
