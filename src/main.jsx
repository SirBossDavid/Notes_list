import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{BrowserRouter} from "react-router-dom"
//css 
import './css/index.css'

//jsx
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
      <App />
    </BrowserRouter>
  </StrictMode>,
)
