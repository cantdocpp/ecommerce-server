const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    required: true,
    type: String
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

userSchema.pre('save', function() {
  const saltRounds = 10;
  const myPlaintextPassword = this.password;
  var salt = bcrypt.genSaltSync(saltRounds);
  console.log('=============', myPlaintextPassword);
  var hash = bcrypt.hashSync(myPlaintextPassword, salt);
  this.password = hash;
})

let Users = mongoose.model('User', userSchema)

module.exports = Users
