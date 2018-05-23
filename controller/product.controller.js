const Product = require('../model/product');

module.exports = {
  uploadFile: (req, res) => {
    console.log(req.file.cloudStoragePublicUrl, 'sadsadsadsadsad');
    Product.create({
      name: req.body.name,
      price: req.body.price,
      image: req.file.cloudStoragePublicUrl
    })
    .then(function(response) {
      res.status(200).json({
        response
      })
    })
    .catch(function(err) {
      console.log(err);
    })
  },

  getProduct: (req, res) => {
    Product.find({})
    .then(function(response) {
      res.status(200).json({
        response
      })
    })
    .catch(function(err) {
      console.log(err);
    })
  }
}
