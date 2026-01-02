
import { motion } from 'framer-motion'
import tvm from '../assets/trivandrum.jpg'
import kollam from '../assets/kollam.jpg'
import pathanamthitta from '../assets/pathanamthitta.jpg'
import alapuzha from '../assets/alapuzha1.jpg'
import earnakulam from '../assets/kochi.jpg'
import edukki from '../assets/munnar.jpg'
import thrissur from '../assets/thrissur.jpg'
import palakkad from '../assets/palakkad.jpg'
import malappuram from '../assets/malappuram.jpg'
import wayanadu from '../assets/wayanadu1.jpg'
import kannur from '../assets/kannur.jpg'
import kasarkode from '../assets/kasarkode.jpg'
import kottayam from '../assets/kottayam.jpg'
import kozhikode from '../assets/kozhikode.jpg'

const District = () => {
  interface TravelDestination {
    name: string;
    description: string;
    imageUrl: string;
  }

  const places: TravelDestination[] = [
    { name: 'Thiruvananthapuram', description: 'The Royal Gateway Built on seven hills, Kerala’s capital is a blend of grand colonial architecture and ancient spiritual heritage. From the gold-plated splendor of the Sree Padmanabhaswamy Temple to the pristine beaches of Kovalam, Trivandrum offers a sophisticated journey through history and royalty.', imageUrl:tvm  },
    { name: 'Kollam', description: 'Where History Meets the Horizon As one of the world’s oldest trading ports, Kollam is the southern gateway to Kerala’s legendary backwaters. Centered around the massive Ashtamudi Lake, this ancient town is a mosaic of Chinese fishing nets, cashew plantations, and the iconic red-and-white Tangasseri Lighthouse.', imageUrl:kollam  },
    { name: 'Pathanamthitta', description: 'The Sacred Heartland Nestled in the lap of the Western Ghats, Pathanamthitta is a land of divine spirituality and untamed wilderness. Home to the world-renowned Sabarimala forest shrine and the pristine Gavi rainforests, it is a destination where ancient temple chants echo through dense, mist-covered mountain ranges.', imageUrl:pathanamthitta  },
    { name: 'Alappuzha', description: 'The Venice of the East Immerse yourself in a labyrinth of palm-fringed canals, emerald lagoons, and the rhythmic pulse of the backwaters. Famous for its iconic houseboats and the legendary Nehru Trophy Snake Boat Race, Alappuzha is the heart of Kerala’s tranquil aquatic soul.', imageUrl:alapuzha  },
    { name: 'Kottayam', description: 'The Gateway to Highland Serenity Bordered by the Western Ghats on the east and the Vembanad Lake on the west, Kottayam is a rich tapestry of sprawling rubber plantations and historic literature. It is the spiritual gateway to the hills, where ancient churches and quiet backwater stretches like Kumarakom offer a peaceful, scholarly charm.', imageUrl:kottayam  },
    { name: 'Edukki', description: 'The Wild Highland Sanctuary High in the Western Ghats, Idukki is a land of sheer cliffs, massive dams, and deep wildlife sanctuaries. Home to the towering Idukki Arch Dam and the misty peaks of Munnar, it is a region where raw nature meets engineering marvels amidst a landscape of spice gardens and cloud-kissed valleys.', imageUrl:edukki  },
    { name: 'Ernakulam', description: 'The Pulse of Modern Kerala Where ancient heritage meets a soaring skyline, Ernakulam is the vibrant gateway to the state. From the bustling shopping hubs of MG Road to the serene marine walkways overlooking the Arabian Sea, it is a city of high-energy commerce, luxury harbors, and the starting point for every traveler’s Kerala adventure.', imageUrl:earnakulam  },
    { name: 'Thrissur', description: 'The Cultural Pulse of Kerala Built around a sprawling hillock, Thrissur is the vibrant home of Kerala’s soul. Famous for the world-renowned Thrissur Pooram, it is a city of grand elephants, majestic temples, and traditional performing arts. Here, the air is thick with the sound of rhythmic percussion and the scent of temple festivals.', imageUrl:thrissur  },
    { name: 'Palakkad', description: 'The Gateway of the Western Ghats Nestled at the foot of the massive Palakkad Gap, this is where the winds of the plains meet the lush forests of the mountains. A land of vast golden paddy fields and ancient granite forts, Palakkad offers a unique blend of Kerala greenery and the rustic charm of rural traditions.', imageUrl:palakkad  },
    { name: 'Kozhikode', description: 'The Coast of Discovery Where Vasco da Gama first stepped onto Indian soil, Kozhikode remains a legendary port of trade and tradition. Known for its soul-stirring sunsets at Kappad Beach and its world-famous Malabar cuisine, it is a city where historic spice routes meet a modern, warm-hearted culture of unmatched hospitality.', imageUrl:kozhikode  },
    { name: 'Malappuram', description: 'The Soul of Malabar Perched atop the undulating hills of North Kerala, Malappuram is a land of vibrant traditions and heroic history. From the scenic teak forests of Nilambur to the sacred shores of the Bharathapuzha river, it is a region where cultural harmony, ancient Ayurveda, and a legendary passion for football create a unique and spirited atmosphere.', imageUrl:malappuram  },
    { name: 'Kannur', description: 'The Land of Looms and Lores Experience a world where history is carved into massive forts and spirituality comes alive through the mystical Theyyam rituals. From the sprawling ramparts of St. Angelo Fort to the unique drive-in beach at Muzhappilangad, Kannur is a captivating blend of ancient colonial legacy and vibrant folk traditions.', imageUrl:kannur  },
    { name: 'Wayanad', description: 'The Green Paradise Perched high on the Western Ghats, Wayanad is a breathtaking highland escape where the air is scented with wild coffee and spices. Wander through mist-covered valleys, explore ancient Neolithic caves, and witness wild elephant corridors in a land that remains Kerala’s most pristine nature retreat.', imageUrl: wayanadu },
    { name: 'Kasaragod', description: 'The Northern Frontier Perched at the very edge of Kerala, Kasaragod is a captivating land of majestic forts and untouched coastlines. Dominated by the giant keyhole-shaped Bekal Fort—the largest in the state—it is a destination where the Arabian Sea crashes against ancient stone walls and the backwaters of Valiyaparamba offer a secluded, serene escape.', imageUrl:kasarkode  }
  ]

  
  const duplicatedPlaces = [...places, ...places];

  return (
    <div className='flex flex-col overflow-hidden w-full bg-[#0f1614] py-10 mt-10'>
      <div className='text-center mb-8'>
        <h1 className='text-4xl font-bold text-white'>Trending Places</h1>
      </div>

      
      <div className='relative w-full overflow-hidden'>
        
      
        <motion.div 
          className='flex flex-row gap-5 px-5 w-max' 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{
            ease: "linear",
            duration: 30, 
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

        <div className='pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0f1614] to-transparent'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0f1614] to-transparent'></div>
      </div>
    </div>
  )
}

export default District;