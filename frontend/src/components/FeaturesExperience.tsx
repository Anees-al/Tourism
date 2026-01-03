
import houseboat from '../assets/houseboat.jpg'
import kathakali from '../assets/kathakali.jpg'
import kalari from '../assets/kalari.jpg'
import spice from '../assets/spice.jpg'

const FeaturesExperience = () => {
  return (
    <div className='flex flex-col bg-[#0f1614] p-8'>
      <h1 className='text-3xl font-bold text-white mb-10'>
        Features Experience
      </h1>

      <div className='flex flex-col sm:flex-row gap-7 sm:gap-4 justify-center'>
           <div className='flex flex-col w-auto sm:w-[400px] h-[300px] rounded-lg shadow-md shadow-gray-600 justify-center items-center gap-4'  style={{backgroundImage:`url(${houseboat})`,backgroundSize:'cover'}}>
                     <h1 className='text-center text-2xl text-white  font-semibold'>Backwater cruise</h1>
                     <p className='text-white font-semibold text-lg text-center'>Stay overnight in a luxury boat.</p>
                     <button className='w-[100px] text-white font-semibold bg-[#E07A5F] py-2 rounded-lg hover:bg-[#c66a51] transition-all active:scale-95'>More info</button>
           </div>
           <div className='flex flex-col w-auto sm:w-[400px] h-[300px] rounded-lg shadow-md shadow-gray-600 justify-center items-center gap-4' style={{backgroundImage:`url(${kathakali})`,backgroundSize:'cover'}}>
                     <h1 className='text-center text-2xl text-white  font-semibold'>Cultural Arts</h1>
                     <p className='text-white font-semibold text-lg text-center'>Watch the ancient dance of Kerala.</p>
                     <button className='w-[100px] text-white font-semibold bg-[#E07A5F] py-2 rounded-lg hover:bg-[#c66a51] transition-all active:scale-95'>More info</button>
           </div>
           <div className='flex flex-col w-auto    sm:w-[400px] h-[300px] rounded-lg shadow-md shadow-gray-600 justify-center items-center gap-4' style={{backgroundImage:`url(${kalari})`,backgroundSize:'cover'}}>
                 <h1 className='text-center text-2xl text-white  font-semibold'>Kalaripayattu Tours</h1>
                     <p className='text-white font-semibold text-lg text-center'>Witness the 'Mother of Martial Arts'</p>
                     <button className='w-[100px] text-white font-semibold bg-[#E07A5F] py-2 rounded-lg hover:bg-[#c66a51] transition-all active:scale-95'>More info</button>
           </div>
           <div className='flex flex-col w-auto  sm:w-[400px] h-[300px] rounded-lg shadow-md shadow-gray-600 justify-center items-center gap-4' style={{backgroundImage:`url(${spice})`,backgroundSize:'cover'}}>
                  <h1 className='text-center text-2xl text-white  font-semibold'>Spice Trails</h1>
                     <p className='text-white font-semibold text-lg text-center'>Visit the world's best spice gardens</p>
                     <button className='w-[100px] text-white font-semibold bg-[#E07A5F] py-2 rounded-lg hover:bg-[#c66a51] transition-all active:scale-95'>More info</button>
           </div>
      </div>
    </div>
  )
}

export default FeaturesExperience
