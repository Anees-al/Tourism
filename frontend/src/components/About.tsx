import about from '../assets/about.jpg'
import {motion } from 'framer-motion'

const About = () => {

    const aboutkerala:string=`An Authentic Tropical Sanctuary Discover a world of tranquil lagoons, ancient spice hills, and vibrant coastal heritage. Rooted in sustainable travel and spiritual healing, Kerala is more than a destination—it is a refreshing journey for the mind, body, and soul.`
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-[150px] mt-10 p-4">
      <motion.div className='sm:p-10' initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7}}>
        <img src={about} alt="" className='w-[500px] rounded-lg shadow-md ' />
      </motion.div>


      <motion.div className='flex w-auto sm:w-[800px]   p-10 rounded-lg shadow-lg justify-center items-center' initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7}}>
          <p className='text-lg sm:text-2xl font-semibold text-white '>{aboutkerala}</p>
      </motion.div>
    </div>
  )
}

export default About
