// import http from 'k6/http';
// import { check } from 'k6';
// import { Rate } from 'k6/metrics';

// export let errorRate = new Rate('errors');

// export const options = {
//   scenarios: {
//     constant_250_rps: {
//       executor: 'constant-arrival-rate',
//       rate: 250, // iterations per second
//       timeUnit: '1s', // 250 iterations per second
//       duration: '5m', // run for 5 minutes
//       preAllocatedVUs: 50,
//       maxVUs: 200,
//     },
//   },
//   thresholds: {
//     'http_req_duration{type:api}': ['p(90)<2000'],
//     'errors': ['rate<0.01'], // less than 1% errors
//     'http_reqs': ['rate>=240'], // at least ~240 req/s
//   },
// };

// const BASE = 'https://www.blazedemo.com';

// export default function () {
//   let res = http.get(`${BASE}/`);
//   const ok = check(res, {
//     'status is 200': (r) => r.status === 200,
//   });
//   if (!ok) { errorRate.add(1); } else { errorRate.add(0); }
// }
