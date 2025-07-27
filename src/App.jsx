import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import SignInPage from './components/SignInPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

