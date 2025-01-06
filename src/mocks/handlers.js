import { http, HttpResponse } from 'msw'
import data from './data/data.json'

export const handlers = [
  http.get('https://kaleidoscopic-fenglisu-1d45cd.netlify.app', () => {
    return HttpResponse.json(data)
  }),
]