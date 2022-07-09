import { defineStore } from 'pinia';

function movingAverage(data, parameters) {
  console.log('movingAverage', data, parameters);
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
