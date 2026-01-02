import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className="flex flex-col p-2 items-center justify-center h-[500px]">
      <motion.h1 className="text-4xl sm:text-6xl font-lighter text-[#F4F4F4]" initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{duration:0.7}}>
        VISIT KERALA
      </motion.h1>
      <motion.p className=" hidden sm:flex text-xl mt-6 text-[#F4F4F4] font-semibold sm:w-[800px]" initial={{scale:0,opacity:0}} whileInView={{scale:1,opacity:1}} transition={{delay:0.4, duration:0.7}}>Discover God’s Own Country. From the misty tea gardens of Munnar to the serene backwaters of Alleppey, experience a soul-stirring journey through India’s most iconic tropical paradise</motion.p>

      <motion.button className="text-lg text-white font-semibold bg-[#E07A5F] mt-20 sm:mt-3 px-4 py-2 rounded-lg cursor-pointer shadow-lg" initial={{y:200,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.7}}>Discover More</motion.button>
    </div>
  )
}

export default Hero
