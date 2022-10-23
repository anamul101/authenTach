import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './AuthProvider/AuthProvider'
import { Toaster } from 'react-hot-toast'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AuthProvider>
    <ToastContainer position='top-center' />
    <Toaster></Toaster>
    <App />
  </AuthProvider>
)
