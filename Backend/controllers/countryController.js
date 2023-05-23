const Country= require('../models/countryModel')
const mongoose=require('mongoose')

//get all trips
const getTrips=async (req,res) => {
    const countries=await Country.find({}).sort({cratedAt:-1})
    
    res.status(200).json(countries)
}

//get a single trip
const getSingleTrip=async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'invalid id'})
    }
    const country=await Country.findById(id)
    if(!country){
        return res.status(404).json({error: 'no such trip'})
    }
    res.status(200).json(country)
}


//create a trip
const createTrip=async(req,res) =>{
const {name,capital,averageCost,costPerNight,planeCost}=req.body
//add doc to db
    try {
        const country= await Country.create({name,capital,averageCost,costPerNight,planeCost})
        res.status(200).json(country)
    } 
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//updtae a trip
const updateTrip=async(req,res) =>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'invalid id'})
    }
    const trip=await Country.findOneAndUpdate({_id:id}, {
         ...req.body
    })
    if(!trip){
        return res.status(400).json({error: 'no such trip'})
    }
    res.status(200).json(trip)

}

//delete a trip
const deleteTrip=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'invalid id'})
    }
    const trip=await Country.findOneAndDelete({_id:id})
    if(!trip){
        return res.status(400).json({error: 'no such trip'})
    }
    res.status(200).json(trip)
}

const getByCountry = async (req, res) => {
    const { countryName, startDate, endDate } = req.query;
  
    try {
      const countries = await Country.find({
        name: { $regex: new RegExp(countryName, 'i') },
      });
  
      if (countries.length === 0) {
        return res.status(404).json({ error: 'Country not found.' });
      }
  
      const results = [];
  
      for (const country of countries) {
        // Calculate the number of nights based on the start and end dates
        const numberOfNights = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
        console.log(numberOfNights)
        // Calculate the total trip price
        const totalTripPrice = (numberOfNights * country.costPerNight) + country.planeCost;
        console.log(country)
  
        results.push({ country, totalTripPrice });
      }
  
      res.status(200).json(results);
    } catch (err) {
      res.status(500).json({ error: 'An error occurred while fetching the countries.' });
    }
  };
  
  const getByBudget = async (req, res) => {
    const { budget, startDate, endDate } = req.query;
  
    try {
      const countries = await Country.find({});
  
      if (countries.length === 0) {
        return res.status(404).json({ error: 'No trips found within the budget.' });
      }
  
      const results = [];
  
      for (const country of countries) {
        // Calculate the number of nights based on the start and end dates
        const numberOfNights = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
  
        // Calculate the total trip price
        const totalTripPrice = (numberOfNights * country.costPerNight) + country.planeCost;

        // if(totalTripPrice<= budget) 
        results.push({ country, totalTripPrice });
      }
  
      res.status(200).json(results);
    } catch (err) {
        console.log(err)
      res.status(500).json({ error: 'An error occurred while fetching the trips.' });
    }
  };
  

module.exports={
    getTrips,
    getSingleTrip,
    createTrip,
    updateTrip,
    deleteTrip,
    getByCountry,
    getByBudget
}

