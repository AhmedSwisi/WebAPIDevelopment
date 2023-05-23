 const express=require('express')
 const cors = require('cors')

 require('dotenv').config()

 const app=express()

 const mongoose=require('mongoose')

 const countriesRoutes=require('./routes/countries')



  //middleware
  app.use(express.json())
  app.use(cors({origin: "http://localhost:3000", credentials:true}))
  app.use((req,res,next)=> {
   console.log(req.path,req.method)
   next()
 })

  //routes
app.use('/api/countries',countriesRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
 .then(() => {

    //listen for requests
   app.listen(process.env.PORT, ()=>{
      console.log('Connet to DB & listen on port 4000')
   })

 })
 .catch((error) =>{
   console.log(error)
 })


