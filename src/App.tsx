import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Policy from './components/Policy'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beautycare/policy/vi" element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
