import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Policy from './components/Policy'
import JourneyPolicy from './components/JourneyPolicy'
import AIInfo from './components/AIInfo'
import NotFound from './components/NotFound'

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
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/beautycare/policy/vi" element={<Policy />} />
        <Route path="/beautycare/policy/vn" element={<JourneyPolicy />} />
        <Route path="/ai" element={<AIInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
