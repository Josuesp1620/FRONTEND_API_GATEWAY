import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Providers } from './redux/provider.tsx'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter basename={'/web'}>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
)
