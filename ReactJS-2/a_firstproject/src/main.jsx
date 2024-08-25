import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Practices } from './Practices'
import {App} from './App.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practices/> */}
  </StrictMode>,
)
