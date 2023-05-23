import { useTripsContext } from "../hooks/UseTripContext"

const { useState } = require("react")
const TripCountryForm= () =>{

    const {dispatch}=useTripsContext()
    const [name,setName]=useState('')
    const [capital,setCapital]=useState('')
    const [averageCost,setAverageCost]=useState('')
    const [costPerNight,setCostPerNight]=useState('')
    const [planeCost,setPlaneCost]=useState('')
    const [error,setError]=useState(null)

    const handleSubmit= async(error) =>{
        error.preventDefault()
        
        const trips= {name,capital,averageCost,costPerNight,planeCost}
        const response=await fetch('http://localhost:4000/api/countries',{
            method:'POST',
            body:JSON.stringify(trips),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json()
        if(!response.ok) {
            setError(json.error)
        }
        if(response.ok){

            setError(null)
            setName('')
            setCapital('')
            setAverageCost('')
            setPlaneCost('')
            setCostPerNight('')
            console.log('new trip added',json)
            dispatch({type: 'CREATE_TRIP',payloads:json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new trip</h3>

            <label>Country Name</label>
            <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name} 
            />

            <label>Capital Name</label>
            <input
                type="text"
                onChange={(e) => setCapital(e.target.value)}
                value={capital} 
            />

            <label>Average Cost</label>
            <input
                type="number"
                onChange={(e) => setAverageCost(e.target.value)}
                value={averageCost} 
            />

            <label>Cost Per Night</label>
            <input
                type="number"
                onChange={(e) => setCostPerNight(e.target.value)}
                value={costPerNight} 
            />

            <label>Plane Cost</label>
            <input
                type="number"
                onChange={(e) => setPlaneCost(e.target.value)}
                value={planeCost} 
            />


            <button>Add Trip</button>


        </form>
    )
}
export default TripCountryForm