const express = require('express')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct.js')

const app = express()

// app.get('/', (req, res) => {
//   res.send('Home Screen')
// })
const port = 3325


app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)

app.listen(port, () => console.log(`Listening on port: ${port}`))