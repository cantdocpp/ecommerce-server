const mongoose = require('mongoose')
const Schema = mongoose.Schema

let cartSchema = mongoose.Schema({
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
  quantity: {
    type: Number
  }
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
  userId: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

let Carts= mongoose.model('Cart', cartSchema)

module.exports = Carts
