import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import data from './data.json';

export const api = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_URL,
});

const adapter = new MockAdapter(api, { delayResponse: 1000 });

adapter.onGet('/api/products').reply(200, data);
