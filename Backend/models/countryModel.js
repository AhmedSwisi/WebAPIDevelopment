const mongoose=require('mongoose')
const Schema=mongoose.Schema
const countrySchema=Schema({
    name: {
        type: String,
        required: true
    },
    capital: {
        type: String,
        required: true
    },
    averageCost: {
        type: Number,
        required: true
    },
    costPerNight:{
        type: Number,
        required: true
    },
    planeCost:{
        type: Number,
        required: true
    },

},{timestamps: true})

module.exports=mongoose.model('Country',countrySchema)

