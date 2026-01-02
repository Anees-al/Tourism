import munnar from '../assets/munnar.jpg'
import wayanadu from '../assets/wayanadu1.jpg'
import fortkochi from '../assets/fortkochi.jpg'
import varkala from '../assets/varkala.jpg'
import alapuzha from '../assets/alapuzha.jpg'
import { motion } from 'framer-motion'

const TrendingPlaces = () => {
  interface TravelDestination {
    name: string;
    description: string;
    imageUrl: string;
  }

  const places: TravelDestination[] = [
    { name: 'Munnar', description: 'Above the Clouds Perched 1,600 meters above sea level, Munnar is the "Tea Capital of Kerala." Experience a world of emerald-green hills, misty valleys, and the crisp aroma of fresh spices.', imageUrl: munnar },
    { name: 'Allapuzha', description: 'The Venice of the East Navigate a labyrinth of palm-fringed canals and tranquil lagoons. Famous for its iconic houseboats and the legendary snake boat races.', imageUrl: alapuzha },
    { name: 'Wayanadu', description: 'Wayanad A breathtaking highland escape defined by mist-covered valleys, wild elephant corridors, and a rich tribal heritage.', imageUrl: wayanadu },
    { name: 'Fort kochi', description: 'Colonial Heritage & Global Art Wander through cobbled streets lined with colonial-era bungalows, art galleries, and historic churches.', imageUrl: fortkochi },
    { name: 'varkala Beach', description: 'The Cliffside Sanctuary Where dramatic red laterite cliffs meet the endless blue of the Arabian Sea. Varkala is a unique coastal haven.', imageUrl: varkala }
  ]

  // IMPORTANT: Duplicate the array for the loop
  const duplicatedPlaces = [...places, ...places];

  return (
    <div className='flex flex-col overflow-hidden w-full bg-[#0f1614] py-10'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-white'>Trending Places</h1>
      </div>

      {/* 1. Viewport Wrapper: Crucial for clipping and positioning */}
      <div className='relative w-full overflow-hidden'>
        
        {/* 2. The Motion Div: Must have a width that fits all duplicated items */}
        <motion.div 
          className='flex flex-row gap-5 px-5 w-max' 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            ease: "linear",
            duration: 30, // Adjust speed (higher = slower)
            repeat: Infinity
          }}
        >
          {duplicatedPlaces.map((place, index) => (
            <div 
              key={index}
              className='flex flex-col rounded-lg shadow-lg shadow-black/40 w-[300px] h-[520px] bg-[#1A2421] overflow-hidden flex-shrink-0'
            >
              <img src={place.imageUrl} alt={place.name} className='w-full h-[180px] object-cover' />

              <div className='flex flex-col p-4 flex-1'>
                <p className='text-white text-xl font-bold mb-2'>{place.name}</p>
                {/* Fixed height or line-clamp prevents cards from growing/shrinking */}
                <p className='text-sm text-gray-400 leading-relaxed line-clamp-6'>
                    {place.description}
                </p>
                
                <div className='mt-auto pt-4'>
                  <button className='w-full text-white font-semibold bg-[#E07A5F] py-2 rounded-lg hover:bg-[#c66a51] transition-all active:scale-95'>
                    More info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Optional: Visual Fades for the edges */}
        <div className='pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f1614] to-transparent'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f1614] to-transparent'></div>
      </div>
    </div>
  )
}

export default TrendingPlaces;