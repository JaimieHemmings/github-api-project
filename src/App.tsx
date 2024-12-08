import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'

import './App.css'

import HomeRoute from './pages/HomeRoute';
import AboutRoute from './pages/AboutRoute';
import ContactRoute from './pages/ContactRoute';
import NotFoundRoute from './pages/NotFoundRoute';

function App() {

  return (
    <BrowserRouter>
    <div className="min-h-screen py-24">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/contact" element={<ContactRoute />} />
        <Route path="/notfound" element={<NotFoundRoute />} />
        <Route path="/*" element={<NotFoundRoute />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
