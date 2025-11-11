export const spikeScenario = {
  executor: 'ramping-arrival-rate',
  startRate: 10,
  timeUnit: '1s',
  stages: [
    { target: 10, duration: '5s' },
    { target: 50, duration: '5s' },
    { target: 250, duration: '10s' }, // spike
    { target: 10, duration: '5s' },
  ],
  preAllocatedVUs: 50,
  maxVUs: 500,
};
