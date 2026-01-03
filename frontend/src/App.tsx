import kerala from './assets/kerala1.jpg'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import TrendingPlaces from './components/TrendingPlaces'
import About from './components/About'
import District from './components/District'
import Ayurveda from './components/Ayurveda'

const App = () => {
  return (
    <div>
      <div style={{backgroundImage:`url(${kerala})`,backgroundSize:'cover'}} className='p-4 min-h-screen'>
      <Nav/>
      <Hero/>
      <TrendingPlaces/>
      <About/>
      <District/>
      <Ayurveda/>

    </div>
    <Footer/>
    </div>
  )
}

export default App
