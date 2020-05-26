const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./product')
const products = [{}]

app.use(express.json())

mongoose.connect('mongodb://usr:secure@localhost:2888/test', { useNewUrlParser: true })

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.json(products)
})
 
app.get('/', (req, res) => {
    res.json({ message: 'wrk-mongodb!' })
   })   

app.listen(9000, () => {
    console.log('Application is running on port 9000')
   })
   