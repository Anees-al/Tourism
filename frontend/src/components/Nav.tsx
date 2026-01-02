import {motion} from 'framer-motion'

const Nav = () => {
  return (
    <motion.div className='flex flex-row justify-between' initial={{y:-200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.7}}>

        <div>
            <h1 className="text-4xl text-white font-black">Kerala.</h1>
        </div>


        <div className="hidden sm:flex flex-row gap-8 text-white font-semibold ">
            <p className="cursor-pointer hover:text-xl">About</p>
            <p className="cursor-pointer hover:text-xl">packages</p>
            <p className="cursor-pointer hover:text-xl">contact</p>
            <p className="cursor-pointer hover:text-xl">Tours</p>
        </div>


        <div></div>
      
    </motion.div>
  )
}

export default Nav
