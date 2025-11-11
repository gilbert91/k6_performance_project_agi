import http from 'k6/http';
import { check } from 'k6';
import { Rate } from 'k6/metrics';

export const errorRate = new Rate('errors');

export function getRequest(url) {
  const res = http.get(url);

  const success = check(res, {
    'status is 200': (r) => r.status === 200,
  });

  errorRate.add(success ? 0 : 1);
  return res;
}
