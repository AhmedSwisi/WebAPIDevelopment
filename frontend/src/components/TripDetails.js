const TripDetails = ({trip }) => {
    if (!trip || !trip.country) {
        return null; // Return null or a loading indicator while the data is being fetched
      }
    return(
        <div className="trip-details">
            <h4>{trip.country.name}</h4>
            <p><strong>Capital: </strong>{trip.country.capital}</p>
            <p><strong>AverageCost: </strong>{trip.country.averageCost}</p>
            <p><strong>costPerNight: </strong>{trip.country.costPerNight}</p>
            <p><strong>planeCost: </strong>{trip.country.planeCost}</p>
            
        </div>
    )}
export default TripDetails