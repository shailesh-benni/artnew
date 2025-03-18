import ArtTypes from "./components/ArtTypes"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"

function App() {

  return (
  <div className='App'>
    <Navbar/>
    <Hero/>  
    <Pricing/>
    <ArtTypes/>
  </div>
  )
}

export default App