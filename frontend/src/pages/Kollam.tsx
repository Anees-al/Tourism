import kollam from '../assets/kollammain.jpg'
import Nav from '../components/Nav'

const Kollam = () => {
  return (
    <div style={{backgroundImage:`url(${kollam})`,backgroundSize:'cover' ,backgroundPosition:'center'}} className='min-h-screen p-4'>
    <Nav/>
    </div>
  )
}

export default Kollam
