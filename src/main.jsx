import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FetchedJsonProvider } from './contexts/FetchedJsonContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FetchedJsonProvider>
      <App />
    </FetchedJsonProvider>
  </React.StrictMode>
)
