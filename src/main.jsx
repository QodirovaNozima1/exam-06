import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import App from './App.jsx'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './components/context';
import { initialState,reducer } from './components/context/reducer.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider reducer={reducer} initialState={initialState}>
    <App />
    </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
