import React from 'react'
import "./index.css"
import Home from './Routes/Home';
import About from './Routes/About';
import Contact from './Routes/Contact';
import { Routes, Route } from 'react-router-dom'
import Products from './Routes/Products';
import Data from './Routes/Data';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Products' element ={<Products />} />
        <Route path='/Data' element ={<Data />} />
      </Routes>

    </div>
  )
}

export default App