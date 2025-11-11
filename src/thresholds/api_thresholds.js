export const thresholds = {
  'http_req_duration{type:api}': ['p(90)<2000'],
  'errors': ['rate<0.01'],
  'http_reqs': ['rate>=240'],
};
