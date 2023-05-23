import { TripContext } from "../context/TripContext";
import { useContext } from "react";

export const useTripsContext=() =>{
    const context=useContext(TripContext)

    if(!context){
        throw Error('useTripsContext must be used inside a tripsContextProvider')
    }

    return context
}