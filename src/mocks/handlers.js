import { http, HttpResponse } from 'msw'
import data from './data/data.json'

export const handlers = [
  http.get('https://gleaming-daifuku-653b76.netlify.app', () => {
    return HttpResponse.json(data)
  }),
]