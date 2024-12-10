import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from '@/components/Alert';

import './App.css'

import HomeRoute from './pages/HomeRoute';
import AboutRoute from './pages/AboutRoute';
import ContactRoute from './pages/ContactRoute';
import SearchResults from './pages/SearchResults';
import NotFoundRoute from './pages/NotFoundRoute';
import UserRoute from './pages/UserRoute';

const App: React.FC = () => {
  return (
    <GithubProvider>
      <AlertProvider>
        <Alert />
        <BrowserRouter>
        <div className="min-h-screen pt-12">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/about" element={<AboutRoute />} />
            <Route path="/contact" element={<ContactRoute />} />
            <Route path="/user/:login" element={<UserRoute />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/notfound" element={<NotFoundRoute />} />
            <Route path="/*" element={<NotFoundRoute />} />
          </Routes>
          <Footer />
        </div>
        </BrowserRouter>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
