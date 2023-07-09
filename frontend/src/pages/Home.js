import { useEffect} from 'react'

import TripCountryForm from '../components/TripForm'

import TripDetails from '../components/TripDetails'

import { useTripsContext } from '../hooks/UseTripContext'


const Home = () =>{

    const {trips,dispatch}=useTripsContext()
        
        useEffect(() => {
            const fetchTrips = async () => {
                const response = await fetch('http://localhost:4000/api/countries/countries');
                const json = await response.json()
                if (response.ok) {
                dispatch({type:'SET_TRIPS',payload:json})
                } 
            }
            fetchTrips();
        } ,[dispatch]);
        

        console.log(trips)

        return(
            <div className="home">
                <div className='countries'>
                    {trips && trips.map(trip => (
                        <TripDetails trip={trip} key={trip._id} />
                    ))}
                </div>
                <TripCountryForm/>
            </div>
        )
}

export default Home