import Nav from "../components/Nav"
import tvm from '../assets/tvmmain.jpg'


const Trivandrum = () => {
  return (
    <div className=" flex flex-col py-6 px-2 min-h-screen" style={{backgroundImage:`url(${tvm})`,backgroundSize:'cover'}}>
       <Nav/>
    </div>
  )
}

export default Trivandrum
