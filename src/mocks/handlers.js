import { http, HttpResponse } from 'msw'
import data from './data/data.json'

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('/data', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(data)
  }),
  /* http.get('/', () => {
    return HttpResponse.text('This is the root endpoint')
  }), */
]