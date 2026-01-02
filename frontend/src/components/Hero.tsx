

const Hero = () => {
  return (
    <div className="flex flex-col p-2 items-center justify-center h-[500px]">
      <h1 className="text-4xl sm:text-6xl font-lighter text-[#F4F4F4]">
        VISIT KERALA
      </h1>
      <p className=" hidden sm:flex text-xl mt-6 text-[#F4F4F4] font-semibold sm:w-[800px]">Discover God’s Own Country. From the misty tea gardens of Munnar to the serene backwaters of Alleppey, experience a soul-stirring journey through India’s most iconic tropical paradise</p>

      <button className="text-lg text-white font-semibold bg-[#E07A5F] mt-20 sm:mt-3 px-4 py-2 rounded-lg cursor-pointer shadow-lg">Discover More</button>
    </div>
  )
}

export default Hero
