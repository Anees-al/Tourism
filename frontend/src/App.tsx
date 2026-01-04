
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trivandrum from './pages/Trivandrum'
import Kollam from './pages/Kollam'
import Pathanamthitta from './pages/Pathanamthitta'


const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/Tourism'  element={<Home/>}/>
        <Route path='/Tourism/trivandrum'  element={<Trivandrum/>}/>
        <Route path='/Tourism/kollam' element={<Kollam/>}/>
        <Route path='/Tourism/pathanamthitta' element={<Pathanamthitta/>}/>
      </Routes>
     
    
    </div>
  )
}

export default App
