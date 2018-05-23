const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  registerUser: (req, res) => {
    User.create(req.body)
    .then(response => {
      console.log(response);
      res.status(200).json({
        response
      })
    })
    .catch(err => {
      console.log(err);
    })
  },

  loginUser: (req, res) => [
    User.findOne({
      email: req.body.email
    })
    .then(user => {
      const hashedPassword = user.password
      if(user) {
        if (bcrypt.compareSync(req.body.password, hashedPassword)) {
          var token = jwt.sign({ email: user.email, id: user._id }, 'shhhhh');
          console.log('testing');
          res.status(200).json({
            token: token,
            email: user.email
          })
        }
      }
    })
    .catch(err => {
      console.log(err);
    })
  ]
}
