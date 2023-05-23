import { useEffect} from 'react'

import TripCountryForm from '../components/TripForm'

import TripDetails from '../components/TripDetails'

import { useTripsContext } from '../hooks/UseTripContext'


const Home = () =>{

const {trips,dispatch}=useTripsContext()
    


    useEffect(() => {
        const fetchTrips = async () => {
          try {
            const res = await fetch('http://localhost:4000/api/countries/countries');
            const json = await res.json();
            if (res.ok) {
              
              dispatch({type:'SET_TRIPS',payloads:json})
            } else {
              console.log('Request failed with status:', res.status);
            }

          } catch (err) {
            console.log('Error:', err);
          }
        };
      
        fetchTrips();
      }, );
      

    console.log(trips)

    return(
        <div className="home">
            <div className='countries'>
                {trips && trips.map((trip) => (
                    <TripDetails key={trip.country._id} trip={trip} />
                ))}
            </div>
            <TripCountryForm/>
        </div>
    )
}

export default Home