
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trivandrum from './pages/Trivandrum'
import Kollam from './pages/Kollam'
import Pathanamthitta from './pages/Pathanamthitta'


const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/tourism'  element={<Home/>}/>
        <Route path='/tourism/trivandrum'  element={<Trivandrum/>}/>
        <Route path='/tourism/kollam' element={<Kollam/>}/>
        <Route path='/tourism/pathanamthitta' element={<Pathanamthitta/>}/>
      </Routes>
     
    
    </div>
  )
}

export default App
