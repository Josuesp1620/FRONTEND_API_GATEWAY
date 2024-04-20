import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routerBase from './Router.tsx'
import { Providers } from './redux/provider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={routerBase} />
    </Providers>
  </React.StrictMode>,
)
