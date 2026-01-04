import pathanamthitta from '../assets/gavimain.jpg'
import Nav from '../components/Nav'

const Pathanamthitta = () => {
  return (
    <div style={{backgroundImage:`url(${pathanamthitta})`,backgroundSize:'cover'}} className='min-h-screen p-4'>
      <Nav/>
    </div>
  )
}

export default Pathanamthitta
