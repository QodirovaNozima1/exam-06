import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Top from './components/top/Top';
import Error from './components/error/Error';
import Layout from './pages/layout/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
