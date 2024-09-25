import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <AuthProvider>
   <div className='dark:bg-base-900 dark:text-black'>
      <App/>
      </div>
   </AuthProvider>
  </BrowserRouter>,
)
