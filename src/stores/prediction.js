import { defineStore } from 'pinia';

function movingAverage(data, parameters) {
  const longPeriodAverages = extractAverages(data, parameters.longPeriod);
  const longAverage = computeAverage(longPeriodAverages, parameters.longPeriod);

  const shortPeriodAverages = extractAverages(data, parameters.shortPeriod);
  const shortAverage = computeAverage(shortPeriodAverages, parameters.shortPeriod);

  return shortAverage / longAverage;
}

function extractAverages(data, period) {
  const subPeriodData = data.history.slice(-period);
  return subPeriodData.map(historyItem => historyItem.average);
}

function computeAverage(data, period) {
  const sum = data.reduce((previous, current) => previous + current);
  return sum / period;
}

const algorithms = {
  'movingAverage': movingAverage,
};

export const usePredictionStore = defineStore('prediction', {
  actions: {
    predict(algorithm, parameters, data) {
      return algorithms[algorithm](data ,parameters);
    },
  },
});
