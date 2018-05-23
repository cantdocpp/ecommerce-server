const Cart = require('../model/cart');

module.exports = {
  addCart: (req, res) => {
    Cart.create(req.body)
    .then(response => {
      res.status(200).json({
        response
      })
    })
  }
}
