import { http, HttpResponse } from 'msw';
import data from './data/data.json';

export const handlers = [
  http.get('/fakeApi/data', (req, res, ctx) => {
    return res(ctx.json(data));
  }),
];