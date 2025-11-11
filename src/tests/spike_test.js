import { getRequest } from '../utils/http_helper.js';
import { BASE_URL } from '../config/config.js';
import { thresholds } from '../thresholds/api_thresholds.js';
import { spikeScenario } from '../scenarios/spike_scenario.js';

export const options = {
  scenarios: {
    spike: spikeScenario,
  },
  thresholds,
};

export default function () {
  getRequest(`${BASE_URL}/`);
}
