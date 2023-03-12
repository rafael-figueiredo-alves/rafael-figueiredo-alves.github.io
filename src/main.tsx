import React, { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.querySelector('#root');

if (!rootElement) throw new Error('Falha ao tentar obter elemento root')

const root = createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
