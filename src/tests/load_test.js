import { getRequest } from '../utils/http_helper.js';
import { BASE_URL } from '../config/config.js';
import { thresholds } from '../thresholds/api_thresholds.js';
import { constantRate } from '../scenarios/constant_rate.js';

export const options = {
  scenarios: {
    constant_250_rps: constantRate,
  },
  thresholds,
};

export default function () {
  getRequest(`${BASE_URL}/`);
}
