const mongoose = require('mongoose')
const Schema = mongoose.Schema

let productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    required: true,
    type: String
  },
  image: {
    required: true,
    type: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

let Products = mongoose.model('Product', productSchema)

module.exports = Products
