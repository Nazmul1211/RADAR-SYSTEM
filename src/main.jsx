import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>,
)


// {
//   "rules": {
//     ".read": "now < 1736618400000",  // 2025-1-12
//     ".write": "now < 1736618400000",  // 2025-1-12
//   }
// }

// database adress realtime
// https://console.firebase.google.com/project/radar-system-4b06b/database/radar-system-4b06b-default-rtdb/data/~2F