export const spikeScenario = {
  executor: 'ramping-arrival-rate',
  startRate: 10,
  timeUnit: '1s',
  stages: [
    { target: 10, duration: '30s' },
    { target: 50, duration: '30s' },
    { target: 250, duration: '1m' }, // spike
    { target: 10, duration: '30s' },
  ],
  preAllocatedVUs: 50,
  maxVUs: 500,
};
