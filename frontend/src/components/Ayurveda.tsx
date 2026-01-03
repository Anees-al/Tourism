import ayurveda from '../assets/ayurveda1.jpg'
const Ayurveda = () => {
    
  return (
    <div className="flex flex-col gap-8 p-5">
      <div className="flex flex-col justify-center items-center p-2">
        <h1 className="text-3xl font-bold text-white">Exploring ayurveda</h1>
      </div>



      <div className="flex flex-col sm:flex-row">
            <img src={ayurveda} alt="" className='sm:w-[600px] sm:h-[500px] rounded-lg' />


            <div className='flex flex-row justify-center items-center p-10'>
                <p className='text-white text-xl fomt-semibold leading-9'>Experience the ancient wisdom of a 5,000-year-old healing tradition. Our Ayurveda tourism packages offer more than just a vacation—they provide a deep physical and spiritual reset in the heart of nature. From authentic Panchakarma detox to soul-soothing Shirodhara, embark on a path to lifelong wellness.</p>
            </div>
      </div>
    </div>
  )
}

export default Ayurveda
