import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GeneralValuesProvide } from './context/GeneralValues.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralValuesProvide>
      <App />
    </GeneralValuesProvide>
  </React.StrictMode>,
)
