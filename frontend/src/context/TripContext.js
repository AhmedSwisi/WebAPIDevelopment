import { createContext, useReducer } from "react";

export const TripContext=createContext()

export const tripsReducer = (state = { trips: [] }, action) => {
    switch (action.type) {
      case 'SET_TRIPS':
        return {
          trips: action.payload
        }
      case 'CREATE_TRIP':
        return {
          trips: [action.payload, ...state.trips]
        }
      default:
        return state
    }
  }
  

export const TripContextProvider= ({children}) =>{
    const [state,dispatch]=useReducer(tripsReducer,{
        trips:[]
    })

    

    return(
        <TripContext.Provider value={{...state,dispatch}}>
            {children}
        </TripContext.Provider> 
    )
}