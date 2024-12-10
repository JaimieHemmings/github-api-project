import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import { GithubProvider } from './context/github/GithubContext';

import './App.css'

import HomeRoute from './pages/HomeRoute';
import AboutRoute from './pages/AboutRoute';
import ContactRoute from './pages/ContactRoute';
import SearchResults from './pages/SearchResults';
import NotFoundRoute from './pages/NotFoundRoute';

const App: React.FC = () => {
  return (
    <GithubProvider>
      <BrowserRouter>
      <div className="min-h-screen pt-12">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/about" element={<AboutRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/notfound" element={<NotFoundRoute />} />
          <Route path="/*" element={<NotFoundRoute />} />
        </Routes>
        <Footer />
      </div>
      </BrowserRouter>
    </GithubProvider>
  )
}

export default App
