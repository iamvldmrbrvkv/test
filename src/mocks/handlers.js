import { http, HttpResponse } from 'msw'
import data from './data/data.json'

export const handlers = [
  http.get('/src/mocks/data', () => {
    return HttpResponse.json(data)
  }),
]