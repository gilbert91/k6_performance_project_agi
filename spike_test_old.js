import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export let errorRate = new Rate('errors');

export const options = {
  scenarios: {
    spike: {
      executor: 'ramping-arrival-rate',
      startRate: 10,
      timeUnit: '1s',
      stages: [
        { target: 10, duration: '30s' },
        { target: 50, duration: '30s' },
        { target: 250, duration: '1m' }, // spike to 250 rps
        { target: 10, duration: '30s' },
      ],
      preAllocatedVUs: 50,
      maxVUs: 500,
    },
  },
  thresholds: {
    'http_req_duration{type:api}': ['p(90)<2000'],
    'errors': ['rate<0.02'],
    'http_reqs': ['rate>=240'],
  },
};

const BASE = 'https://www.blazedemo.com';

export default function () {
  let res = http.get(`${BASE}/`);
  const ok = check(res, {
    'status is 200': (r) => r.status === 200,
  });
  if (!ok) { errorRate.add(1); } else { errorRate.add(0); }
}
