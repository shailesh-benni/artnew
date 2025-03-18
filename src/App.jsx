import ArtTypes from "./components/ArtTypes"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"

function App() {

  return (
  <div className='App'>
    <Navbar/>
    <Hero/>  
    <ArtTypes/>
    <Pricing/>
    <Contact/>
  </div>
  )
}

export default App