const { log } = require('console');
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

const productSchema = new mongoose.Schema({
  name: String,
  price:Number,
  img:String

});

const Product = mongoose.model('product_imt', productSchema);

app.get('/', async(req, res) => {
    res.send('Hello World!')
  })

  app.post('/', async(req, res) => {
    res.send('Got a POST request')
  })

  app.put('/user', async(req, res) => {
    res.send('Got a PUT request at /user')
  })

  app.delete('/user', async(req, res) => {
    res.send('Got a DELETE request at /user')
  })

app.listen(port, () => {
    mongoose.connect('mongodb+srv://feyza:feyza@cluster0.ykh2q.mongodb.net/t')
   .then(()=>console.log("Db connected"))
   .catch ((err)=>console.log(err) )
  console.log(`Example app listening on port ${port}`)
})