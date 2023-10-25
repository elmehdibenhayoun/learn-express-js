
 const express = require("express")
  const app = express()
  const mongoose = require("mongoose")
  const productsRoute = require("./routes/productRoute")
  
  const port = 4000
  
  
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  
  app.use("/", productsRoute)
  
  mongoose.connect("mongodb+srv://mbenhayoun:1qs1wjCgiuQTFENY@cluster0.qgmkbn6.mongodb.net/db_catalogue?retryWrites=true&w=majority").then(() => {
      console.log("connected successfully")
      app.listen(port, () => console.log(`app listening on port ${port}`))
  }).catch((error) => {
      console.log("Error: ", error.message)
  })