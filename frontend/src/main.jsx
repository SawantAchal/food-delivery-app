import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // enclose complete app to ther browser router
  <BrowserRouter>
  {/* App component rap to the storeContect provider */}
    <StoreContextProvider>
      <App/>
    </StoreContextProvider>
  </BrowserRouter>
  // </React.StrictMode>,
)
