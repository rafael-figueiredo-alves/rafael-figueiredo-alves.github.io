import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import MyRoutes from './utils/MyRoutes.tsx'

import { LanguageProvider } from './contexts/LanguageContext.tsx'
import { PageTitleProvider } from './contexts/PageTitleContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <PageTitleProvider>
        <RouterProvider router={MyRoutes} />
      </PageTitleProvider>
    </LanguageProvider>
  </React.StrictMode>,
)
