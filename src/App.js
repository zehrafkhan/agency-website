import React from 'react'

import Header from './components/Header'

import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import HomePage from './pages/HomePage'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import Admission from './pages/Admission'
import ContactPage from './pages/ContactPage'
import Events from './pages/Events'
import Loader from './pages/Loader'

import Co from './Acedmics/Co'
import Civil from './Acedmics/Civil'
import Mh from './Acedmics/Mh'
import Digi from './Acedmics/Digi'
import Elec from './Acedmics/Elec'
import Chem from './Acedmics/Chem'


const App = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    {loading ? (
      Loader(loading)
    ) :
     (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/co' element={<Co />} />
        <Route path='/civil' element={<Civil />} />
        <Route path='/mh' element={<Mh />} />
        <Route path='/elec' element={<Elec />} />
        <Route path='/chem' element={<Chem />} />
        <Route path='/digi' element={<Digi />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    )}
      </>
  )

}

export default App
