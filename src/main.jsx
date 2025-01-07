import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser.js')
 
  return worker.start({
    onUnhandledRequest: 'bypass',
  })
}
 
enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>)
})