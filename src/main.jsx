import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Editor from './pages/Editor/Editor.jsx'
import Community from './pages/Community/Community.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/editor" element={<Editor />} />
          <Route path="/community" element={<Community />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
