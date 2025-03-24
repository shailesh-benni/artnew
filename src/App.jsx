import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArtTypes from "./components/ArtTypes"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import GalleryPage from "./components/GalleryPage"
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <Hero/>  
              <ArtTypes/>
              <Pricing/>
              <Contact/>
              <Footer/>
            </>
          }/>
          <Route path="/gallery/:type" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App