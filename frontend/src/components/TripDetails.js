const TripDetails = ({trip}) => {
    console.log(trip)
    
    return(
        <div className="trip-details">
            <h4>{trip.country.name}</h4>
            <p><strong>Capital: </strong>{trip.country.capital}</p>
            <p><strong>AverageCost: </strong>{trip.country.averageCost}</p>
            <p><strong>costPerNight: </strong>{trip.country.costPerNight}</p>
            <p><strong>planeCost: </strong>{trip.country.planeCost}</p>
            <p><strong>totalTripPrice: </strong>{trip.totalTripPrice}</p>
        </div>
    )}
export default TripDetails