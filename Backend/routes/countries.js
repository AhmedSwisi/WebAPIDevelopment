const express=require('express')

const Country=require('../models/countryModel')

const {
    getTrips,
    getSingleTrip,
    createTrip, 
    updateTrip,
    deleteTrip,
    getByCountry,
    getByBudget
} = require('../controllers/countryController')

const router=express.Router()

//GET all countries
router.get('/', getTrips)

router.get('/countries', getByCountry)

router.get('/budget', getByBudget)

//GET one country
router.get('/:id',getSingleTrip)

//POST a new trip
router.post('/', createTrip)

//DELETE a trip
router.delete("/:id",deleteTrip)
//UPDATE a trip
router.patch("/:id",updateTrip)
module.exports=router