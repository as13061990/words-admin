import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './types/interfaces.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter basename={window.location.pathname || ''}>
    <App />
  </BrowserRouter>,
)
