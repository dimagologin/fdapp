import { StrictMode } from 'react'
import './App.css'
import { Layout } from './Layout'
import { AppRouter } from './Router'

function App() {

  return <StrictMode>
    <Layout>
      <AppRouter />
    </Layout>
  </StrictMode>
}

export default App
