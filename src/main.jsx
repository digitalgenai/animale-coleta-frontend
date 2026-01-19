import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from 'antd'
import AntContext from './contexts/AntContext'
import Rotas from './routes/Rotas'
import { QueryClientProvider } from '@tanstack/react-query'
import { QUERYCLIENT } from './services'
import MainProvider from './contexts/MainContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AntContext>
      <QueryClientProvider client={QUERYCLIENT}>
        <MainProvider>
          <App>
            <Rotas />
          </App>
        </MainProvider>
      </QueryClientProvider>
    </AntContext>
  </StrictMode>
)
