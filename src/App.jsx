import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoShowcase from './components/VideoShowcase'
import BrandShowcase from './components/BrandShowcase'
import FeaturedCar from './components/FeaturedCar'
import Inventory from './components/Inventory'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const [navSplash, setNavSplash] = useState(false)

  const handleSplashComplete = useCallback(() => {
    if (showSplash) {
      setShowSplash(false)
    } else {
      setNavSplash(false)
    }
  }, [showSplash])

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault()
    setNavSplash(true)
    setTimeout(() => {
      const el = document.getElementById(targetId)
      if (el) el.scrollIntoView({ behavior: 'auto' })
    }, 10500)
  }, [])

  return (
    <>
      {(showSplash || navSplash) && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      <Navbar onNavClick={handleNavClick} />
      <main>
        <Hero />
        <VideoShowcase />
        <BrandShowcase />
        <FeaturedCar />
        <Inventory />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App